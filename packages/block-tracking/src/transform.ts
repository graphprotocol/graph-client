import type { DelegationContext, SubschemaConfig, Transform } from '@graphql-tools/delegate'
import type { ExecutionRequest } from '@graphql-tools/utils'
import { memoize2 } from '@graphql-tools/utils'
import { ExecutionResult, getNamedType, GraphQLSchema, isInputObjectType, isObjectType } from 'graphql'
import {
  BlockTrackingConfig,
  DEFAULT_CONFIG,
  getNewBlockNumberFromExecutionResult,
  transformExecutionRequest,
} from './shared.js'

interface BlockTrackingTransformConfig extends BlockTrackingConfig {
  if: boolean
  validateSchema: boolean
}

const DEFAULTS: BlockTrackingTransformConfig = {
  if: true,
  validateSchema: true,
  ...DEFAULT_CONFIG,
}

const validateSchema = memoize2(function validateSchema(schema: GraphQLSchema, config: BlockTrackingConfig) {
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

const schemaMinBlockMap = new WeakMap<DelegationContext['subschema'], number>()

export class BlockTrackingTransform implements Transform {
  public config: BlockTrackingTransformConfig
  constructor({ config }: { config?: Partial<BlockTrackingTransformConfig> } = {}) {
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
    return transformExecutionRequest(
      executionRequest,
      this.config,
      delegationContext.subschemaConfig?.batch,
      schemaMinBlockMap.get(delegationContext.subschema),
    )
  }

  transformResult(originalResult: ExecutionResult<any>, delegationContext: DelegationContext): ExecutionResult {
    const newBlockNumber = getNewBlockNumberFromExecutionResult(originalResult, this.config)
    if (newBlockNumber != null) {
      const existingMinBlock = schemaMinBlockMap.get(delegationContext.subschema)
      if (existingMinBlock == null || newBlockNumber > existingMinBlock) {
        schemaMinBlockMap.set(delegationContext.subschema, newBlockNumber)
      }
    }

    return originalResult
  }
}
