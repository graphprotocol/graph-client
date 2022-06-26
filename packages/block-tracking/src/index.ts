import type { MeshTransform } from '@graphql-mesh/types'
import type { DelegationContext, SubschemaConfig } from '@graphql-tools/delegate'
import type { ExecutionRequest } from '@graphql-tools/utils'
import { memoize1, memoize2 } from '@graphql-tools/utils'
import {
  ExecutionResult,
  getNamedType,
  GraphQLSchema,
  isInputObjectType,
  isObjectType,
  Kind,
  ObjectFieldNode,
  ObjectValueNode,
  OperationTypeNode,
  SelectionNode,
  visit,
} from 'graphql'

interface BlockTrackingTransformConfig {
  if?: boolean
  validateSchema?: boolean
  ignoreOperationNames?: string[]
  ignoreFieldNames?: string[]
  metaTypeName?: string
  blockFieldName?: string
  blockNumberFieldName?: string
  metaRootFieldName?: string
  blockArgumentName?: string
  minBlockArgumentName?: string
}

const DEFAULTS: Required<BlockTrackingTransformConfig> = {
  if: true,
  validateSchema: true,
  ignoreOperationNames: [],
  ignoreFieldNames: [],
  metaTypeName: '_Meta_',
  blockFieldName: 'block',
  blockNumberFieldName: 'number',
  metaRootFieldName: '_meta',
  blockArgumentName: 'block',
  minBlockArgumentName: 'number_gte',
}

const createMetaSelectionNode = memoize1(function createMetaSelectionNode(
  config: Required<BlockTrackingTransformConfig>,
): SelectionNode {
  return {
    kind: Kind.FIELD,
    name: {
      kind: Kind.NAME,
      value: config.metaRootFieldName,
    },
    selectionSet: {
      kind: Kind.SELECTION_SET,
      selections: [
        {
          kind: Kind.FIELD,
          name: {
            kind: Kind.NAME,
            value: config.blockFieldName,
          },
          selectionSet: {
            kind: Kind.SELECTION_SET,
            selections: [
              {
                kind: Kind.FIELD,
                name: {
                  kind: Kind.NAME,
                  value: config.blockNumberFieldName,
                },
              },
            ],
          },
        },
      ],
    },
  }
})

const validateSchema = memoize2(function validateSchema(
  schema: GraphQLSchema,
  config: Required<BlockTrackingTransformConfig>,
) {
  const metaType = schema.getType(config.metaTypeName)
  if (metaType == null || !isObjectType(metaType)) {
    throw new Error(
      `Make sure you have a type named "${config.metaTypeName}" in this source before applying Block Tracking`,
    )
  }
  const blockField = metaType.getFields()[config.blockFieldName]
  if (blockField == null) {
    throw new Error(
      `Make sure you have a type named "${config.metaTypeName}" with "${config.blockFieldName}" field in this source before applying Block Tracking`,
    )
  }
  const blockType = getNamedType(blockField.type)
  if (!isObjectType(blockType)) {
    throw new Error(`Make sure you have a correct block type in this source before applying Block Tracking`)
  }
  const blockNumberField = blockType.getFields()[config.blockNumberFieldName]
  if (blockNumberField == null) {
    throw new Error(
      `Make sure you have a correct block type with "${config.blockNumberFieldName}" field in this source before applying Block Tracking`,
    )
  }
  const queryType = schema.getQueryType()
  if (queryType == null) {
    throw new Error(`Make sure you have a query type in this source before applying Block Tracking`)
  }
  const queryFields = queryType.getFields()
  const metaQueryField = queryFields[config.metaRootFieldName]
  if (metaQueryField == null) {
    throw new Error(
      `Make sure you have a query type with "${config.metaRootFieldName}" field in this source before applying Block Tracking`,
    )
  }
  const metaQueryFieldType = getNamedType(metaQueryField.type)
  if (!isObjectType(metaQueryFieldType) || metaQueryFieldType.name !== config.metaTypeName) {
    throw new Error(
      `Make sure you have a query type with "${config.metaRootFieldName}" field with the correct ${config.metaTypeName} type in this source before applying Block Tracking`,
    )
  }
  for (const fieldName in queryFields) {
    if (fieldName === config.metaRootFieldName) {
      continue
    }
    const field = queryFields[fieldName]
    const blockArgument = field.args.find((arg) => arg.name === config.blockArgumentName)
    if (blockArgument == null) {
      throw new Error(
        `Make sure you have query root fields with "${config.blockArgumentName}" argument in this source before applying Block Tracking`,
      )
    }
    const blockArgumentType = getNamedType(blockArgument.type)
    if (!isInputObjectType(blockArgumentType)) {
      throw new Error(
        `Make sure you have query root fields with "${config.blockArgumentName}" argument returning correct type in this source before applying Block Tracking`,
      )
    }
    const blockArgumentFields = blockArgumentType.getFields()
    const minBlockArgument = blockArgumentFields[config.minBlockArgumentName]
    if (minBlockArgument == null) {
      throw new Error(
        `Make sure you have query root fields with "${config.blockArgumentName}" argument with "${config.minBlockArgumentName}" field in this source before applying Block Tracking`,
      )
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

const metaFieldAddedByContext = new WeakMap<any, boolean>()
function getRequestIdentifier(delegationContext: DelegationContext): any {
  return delegationContext.context ?? delegationContext.rootValue ?? delegationContext.info?.operation
}

const schemaMinBlockMap = new WeakMap<DelegationContext['subschema'], number>()

export default class BlockTrackingTransform implements MeshTransform {
  public config: Required<BlockTrackingTransformConfig>
  constructor({ config }: { config?: BlockTrackingTransformConfig } = {}) {
    this.config = {
      ...DEFAULTS,
      ...config,
    }
    if (!this.config.if) {
      return {} as BlockTrackingTransform
    }
  }

  transformSchema(schema: GraphQLSchema, subschemaConfig: SubschemaConfig<any, any, any, any>): GraphQLSchema {
    if (this.config.validateSchema) {
      validateSchema(subschemaConfig.schema, this.config)
    }
    return schema
  }

  transformRequest(executionRequest: ExecutionRequest, delegationContext: DelegationContext): ExecutionRequest {
    if (
      executionRequest.operationName != null &&
      this.config.ignoreOperationNames.includes(executionRequest.operationName)
    ) {
      return executionRequest
    }
    const minBlock = schemaMinBlockMap.get(delegationContext.subschema)
    const document = visit(executionRequest.document, {
      Field: {
        leave: (fieldSelectionNode) => {
          if (
            minBlock != null &&
            !fieldSelectionNode.name.value.startsWith('_') &&
            !this.config.ignoreFieldNames.includes(fieldSelectionNode.name.value) &&
            getQueryFieldNames(delegationContext.transformedSchema).includes(fieldSelectionNode.name.value)
          ) {
            const argNodes =
              fieldSelectionNode.arguments?.filter(
                (argument) => argument.name.value !== this.config.blockArgumentName,
              ) || []
            const blockArgument = argNodes.find(
              (argument) => argument.name.value === this.config.blockArgumentName,
            ) || {
              kind: Kind.ARGUMENT,
              name: {
                kind: Kind.NAME,
                value: this.config.blockArgumentName,
              },
              value: {
                kind: Kind.OBJECT,
                fields: [],
              },
            }
            const blockArgumentFields = (blockArgument.value as ObjectValueNode).fields as ObjectFieldNode[]
            if (!blockArgumentFields.some((field) => field.name.value === this.config.minBlockArgumentName)) {
              return {
                ...fieldSelectionNode,
                arguments: [
                  ...argNodes,
                  {
                    ...blockArgument,
                    value: {
                      ...blockArgument.value,
                      fields: [
                        ...blockArgumentFields,
                        {
                          kind: Kind.OBJECT_FIELD,
                          name: {
                            kind: Kind.NAME,
                            value: this.config.minBlockArgumentName,
                          },
                          value: {
                            kind: Kind.INT,
                            value: minBlock.toString(),
                          },
                        },
                      ],
                    },
                  },
                ],
              }
            }
          }
          return fieldSelectionNode
        },
      },
      OperationDefinition: {
        leave: (operationNode) => {
          const requestIdentifier = getRequestIdentifier(delegationContext)
          let shouldAddMetaField = true
          if (delegationContext.subschemaConfig?.batch) {
            if (requestIdentifier != null) {
              const isAddedBefore = metaFieldAddedByContext.get(requestIdentifier)
              if (isAddedBefore != null) {
                shouldAddMetaField = !isAddedBefore
              }
            }
          }
          if (operationNode.operation === OperationTypeNode.QUERY && shouldAddMetaField) {
            const metaSelectionNode = createMetaSelectionNode(this.config)
            metaFieldAddedByContext.set(requestIdentifier, true)
            return {
              ...operationNode,
              selectionSet: {
                ...operationNode.selectionSet,
                selections: [...operationNode.selectionSet.selections, metaSelectionNode],
              },
            }
          }
          return operationNode
        },
      },
    })
    return {
      ...executionRequest,
      document,
    }
  }

  transformResult(originalResult: ExecutionResult<any>, delegationContext: DelegationContext): ExecutionResult {
    const newBlockNumber =
      originalResult.data?.[this.config.metaRootFieldName]?.[this.config.blockFieldName]?.[
        this.config.blockNumberFieldName
      ]
    if (newBlockNumber != null) {
      const existingMinBlock = schemaMinBlockMap.get(delegationContext.subschema)
      if (existingMinBlock == null || newBlockNumber > existingMinBlock) {
        schemaMinBlockMap.set(delegationContext.subschema, newBlockNumber)
      }
    }

    return originalResult
  }
}
