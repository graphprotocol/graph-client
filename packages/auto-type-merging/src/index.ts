import { MeshTransform, MeshTransformOptions, YamlConfig } from '@graphql-mesh/types'
import { SubschemaConfig } from '@graphql-tools/delegate'
import { GraphQLSchema } from 'graphql'
import TypeMergingTransform from '@graphql-mesh/transform-type-merging'

export default class AutoTypeMergingTransform implements MeshTransform {
  constructor(private options: MeshTransformOptions) {}
  transformSchema(schema: GraphQLSchema, subschemaConfig: SubschemaConfig) {
    const queryType = schema.getQueryType()
    const queryFields = queryType?.getFields()
    const typeMergingQueryFieldConfig: YamlConfig.MergedRootFieldConfig[] = []
    if (queryFields != null) {
      for (const queryFieldName in queryFields) {
        const queryField = queryFields[queryFieldName]
        if (queryField.args.some((arg) => arg.name === 'where')) {
          typeMergingQueryFieldConfig.push({
            queryFieldName,
            keyField: 'id',
            keyArg: 'where.id_in',
          })
        }
      }
    }
    const typeMergingTransform = new TypeMergingTransform({
      ...this.options,
      config: {
        queryFields: typeMergingQueryFieldConfig,
      },
    })
    return typeMergingTransform.transformSchema(schema, subschemaConfig)
  }
}
