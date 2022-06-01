import { MeshTransform, MeshTransformOptions } from '@graphql-mesh/types'
import { MapperKind, mapSchema } from '@graphql-tools/utils'
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'

export default class AddSourceNameTransform implements MeshTransform {
  noWrap = true
  apiName: string

  constructor({ apiName }: MeshTransformOptions) {
    this.apiName = apiName
  }
  transformSchema(schema: GraphQLSchema) {
    return mapSchema(schema, {
      [MapperKind.OBJECT_TYPE]: (type) => {
        const typeConfig = type.toConfig()
        typeConfig.fields.sourceName = {
          type: GraphQLString,
          resolve: () => this.apiName,
        }
        return new GraphQLObjectType(typeConfig)
      },
    })
  }
}
