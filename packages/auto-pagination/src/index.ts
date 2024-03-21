import type { MeshTransform } from '@graphql-mesh/types'
import { delegateToSchema, DelegationContext, SubschemaConfig } from '@graphql-tools/delegate'
import type { ExecutionRequest } from '@graphql-tools/utils'
import { ExecutionResult, GraphQLSchema, isListType, isNonNullType } from 'graphql'
import { memoize2 } from '@graphql-tools/utils'
import _ from 'lodash'
import {
  AutoPaginationOptions,
  DEFAULT_OPTIONS,
  transformExecutionRequest,
  transformExecutionResponse,
} from './shared.js'

interface AutoPaginationTransformConfig extends AutoPaginationOptions {
  if: boolean
  validateSchema: boolean
}

const DEFAULTS: AutoPaginationTransformConfig = {
  if: true,
  validateSchema: true,
  ...DEFAULT_OPTIONS,
}

export const validateSchema = memoize2(function validateSchema(
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

/* 
const getQueryFieldNames = memoize1(function getQueryFields(schema: GraphQLSchema) {
  const queryType = schema.getQueryType()
  if (queryType == null) {
    throw new Error(`Make sure you have a query type in this source before applying Block Tracking`)
  }
  return Object.keys(queryType.getFields())
}) */

export default class AutoPaginationTransform implements MeshTransform {
  public config: AutoPaginationTransformConfig
  constructor({ config }: { config?: Partial<AutoPaginationTransformConfig> } = {}) {
    this.config = { ...DEFAULTS, ...config }
    if (this.config.if === false) {
      return {} as AutoPaginationTransform
    }
  }

  transformSchema(schema: GraphQLSchema, subschemaConfig: SubschemaConfig<any, any, any, any>) {
    if (this.config.validateSchema) {
      validateSchema(subschemaConfig.schema, this.config)
    }
    if (schema != null) {
      const queryType = schema.getQueryType()
      if (queryType != null) {
        const queryFields = queryType.getFields()
        for (const fieldName in queryFields) {
          if (!fieldName.startsWith('_')) {
            const field = queryFields[fieldName]
            const existingResolver = field.resolve!
            field.resolve = async (root, args, context, info) => {
              const totalRecords = args[this.config.firstArgumentName] || this.config.limitOfRecords
              const initialSkipValue = args[this.config.skipArgumentName] || 0
              if (totalRecords >= this.config.skipArgumentLimit * 2) {
                let remainingRecords = totalRecords
                const records: any[] = []
                while (remainingRecords > 0) {
                  let skipValue = records.length === 0 ? initialSkipValue : 0
                  const lastIdValue = records.length > 0 ? records[records.length - 1].id : null
                  while (skipValue < this.config.skipArgumentLimit && remainingRecords > 0) {
                    const newArgs = {
                      ...args,
                    }
                    if (lastIdValue) {
                      _.set(newArgs, this.config.lastIdArgumentName, lastIdValue)
                    }
                    _.set(newArgs, this.config.skipArgumentName, skipValue)
                    const askedRecords = Math.min(remainingRecords, this.config.skipArgumentLimit)
                    _.set(newArgs, this.config.firstArgumentName, askedRecords)
                    const result = await delegateToSchema({
                      schema,
                      fieldName,
                      args: newArgs,
                      context,
                      info,
                    })
                    if (!Array.isArray(result)) {
                      return result
                    }
                    records.push(...result)
                    skipValue += askedRecords
                    remainingRecords -= askedRecords
                  }
                }
                return records
              }
              return existingResolver(root, args, context, info)
            }
          }
        }
      }
    }
    return schema
  }

  transformRequest(executionRequest: ExecutionRequest, delegationContext: DelegationContext): ExecutionRequest {
    return transformExecutionRequest(executionRequest, this.config, delegationContext)
  }

  transformResult(originalResult: ExecutionResult<any>): ExecutionResult {
    return transformExecutionResponse(originalResult)
  }
}

export { useAutoPagination } from './plugin.js'
