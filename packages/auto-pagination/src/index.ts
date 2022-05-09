import type { MeshTransform } from '@graphql-mesh/types'
import type { DelegationContext } from '@graphql-tools/delegate'
import type { ExecutionRequest } from '@graphql-tools/utils'
import {
  ArgumentNode,
  ExecutionResult,
  GraphQLSchema,
  IntValueNode,
  isListType,
  isNonNullType,
  Kind,
  print,
  SelectionNode,
  visit,
} from 'graphql'
import { memoize1, memoize2 } from '@graphql-tools/utils'

interface AutoPaginationTransformConfig {
  if?: boolean
  validateSchema?: boolean
  limitOfRecords?: number
  firstArgumentName?: string
  skipArgumentName?: string
}

const DEFAULTS: Required<AutoPaginationTransformConfig> = {
  if: true,
  validateSchema: true,
  limitOfRecords: 1000,
  firstArgumentName: 'first',
  skipArgumentName: 'skip',
}

const validateSchema = memoize2(function validateSchema(
  schema: GraphQLSchema,
  config: Required<AutoPaginationTransformConfig>,
): void {
  const queryType = schema.getQueryType()
  if (queryType == null) {
    throw new Error(`Make sure you have a query type in this source before applying Block Tracking`)
  }
  const queryFields = queryType.getFields()
  for (const fieldName in queryFields) {
    if (fieldName.startsWith('_')) {
      continue
    }
    const field = queryFields[fieldName]
    const nullableType = isNonNullType(field.type) ? field.type.ofType : field.type
    if (isListType(nullableType)) {
      if (!field.args.some((arg) => arg.name === config.firstArgumentName)) {
        throw new Error(`Make sure you have a ${config.firstArgumentName} argument in the query field ${fieldName}`)
      }
      if (!field.args.some((arg) => arg.name === config.skipArgumentName)) {
        throw new Error(`Make sure you have a ${config.skipArgumentName} argument in the query field ${fieldName}`)
      }
    }
  }
})

const getQueryFieldNames = memoize1(function getQueryFields(schema: GraphQLSchema) {
  const queryType = schema.getQueryType()
  if (queryType == null) {
    throw new Error(`Make sure you have a query type in this source before applying Block Tracking`)
  }
  return Object.keys(queryType.getFields())
})

export default class AutoPaginationTransform implements MeshTransform {
  public config: Required<AutoPaginationTransformConfig>
  constructor({ config }: { config?: AutoPaginationTransformConfig } = {}) {
    this.config = { ...DEFAULTS, ...config }
    if (this.config.if === false) {
      return {} as AutoPaginationTransform
    }
  }

  transformSchema(schema: GraphQLSchema) {
    if (this.config.validateSchema) {
      validateSchema(schema, this.config)
    }
    return schema
  }

  transformRequest(executionRequest: ExecutionRequest, delegationContext: DelegationContext): ExecutionRequest {
    const document = visit(executionRequest.document, {
      SelectionSet: {
        leave: (selectionSet) => {
          const newSelections: SelectionNode[] = []
          for (const selectionNode of selectionSet.selections) {
            if (
              selectionNode.kind === Kind.FIELD &&
              !selectionNode.name.value.startsWith('_') &&
              getQueryFieldNames(delegationContext.transformedSchema).includes(selectionNode.name.value) &&
              !selectionNode.arguments?.some((argNode) => argNode.name.value === 'id')
            ) {
              const existingArgs: ArgumentNode[] = []
              let firstArg: ArgumentNode | undefined
              let skipArg: ArgumentNode | undefined
              for (const existingArg of selectionNode.arguments ?? []) {
                if (existingArg.name.value === this.config.firstArgumentName) {
                  firstArg = existingArg
                } else if (existingArg.name.value === this.config.skipArgumentName) {
                  skipArg = existingArg
                } else {
                  existingArgs.push(existingArg)
                }
              }
              if (firstArg != null && firstArg.value.kind === Kind.INT) {
                const numberOfTotalRecords = parseInt(firstArg.value.value)
                if (numberOfTotalRecords > this.config.limitOfRecords) {
                  const fieldName = selectionNode.name.value
                  const aliasName = selectionNode.alias?.value || fieldName
                  const initialSkip = skipArg?.value?.kind === Kind.INT ? parseInt(skipArg.value.value) : 0
                  let skip: number
                  for (
                    skip = initialSkip;
                    numberOfTotalRecords - skip + initialSkip > 0;
                    skip += this.config.limitOfRecords
                  ) {
                    newSelections.push({
                      ...selectionNode,
                      alias: {
                        kind: Kind.NAME,
                        value: `splitted_${skip}_${aliasName}`,
                      },
                      arguments: [
                        ...existingArgs,
                        {
                          kind: Kind.ARGUMENT,
                          name: {
                            kind: Kind.NAME,
                            value: this.config.firstArgumentName,
                          },
                          value: {
                            kind: Kind.INT,
                            value: Math.min(
                              numberOfTotalRecords - skip + initialSkip,
                              this.config.limitOfRecords,
                            ).toString(),
                          },
                        },
                        {
                          kind: Kind.ARGUMENT,
                          name: {
                            kind: Kind.NAME,
                            value: this.config.skipArgumentName,
                          },
                          value: {
                            kind: Kind.INT,
                            value: skip.toString(),
                          },
                        },
                      ],
                    })
                  }
                  continue
                }
              }
            }
            newSelections.push(selectionNode)
          }
          return {
            ...selectionSet,
            selections: newSelections,
          }
        },
      },
    })
    return {
      ...executionRequest,
      document,
    }
  }

  transformResult(originalResult: ExecutionResult<any>): ExecutionResult {
    if (originalResult.data != null) {
      const finalData = {}
      for (const fullAliasName in originalResult.data) {
        if (fullAliasName.startsWith('splitted_')) {
          const [, , aliasName] = fullAliasName.split('_')
          finalData[aliasName] = finalData[aliasName] || []
          for (const record of originalResult.data[fullAliasName]) {
            finalData[aliasName].push(record)
          }
        } else {
          finalData[fullAliasName] = originalResult.data[fullAliasName]
        }
      }
      return {
        ...originalResult,
        data: finalData,
      }
    }
    return originalResult
  }
}
