import { MeshTransform } from '@graphql-mesh/types'
import { SubschemaConfig } from '@graphql-tools/delegate'
import { getNamedType, GraphQLSchema } from 'graphql'

export default class AutoTypeMergingTransform implements MeshTransform {
  transformSchema(schema: GraphQLSchema, subschemaConfig: SubschemaConfig) {
    const queryType = schema.getQueryType()
    const queryFields = queryType?.getFields()
    if (queryFields != null) {
      for (const queryFieldName in queryFields) {
        const queryField = queryFields[queryFieldName]
        if (queryField.args.some((arg) => arg.name === 'where')) {
          subschemaConfig.merge = subschemaConfig.merge || {}
          const namedType = getNamedType(queryField.type)
          subschemaConfig.merge[namedType.name] = {
            fieldName: queryFieldName,
            selectionSet: '{ id }',
            key: ({ id }) => id,
            argsFromKeys: (id_in) => ({ where: { id_in } }),
          }
        }
      }
    }
    return schema
  }
}
