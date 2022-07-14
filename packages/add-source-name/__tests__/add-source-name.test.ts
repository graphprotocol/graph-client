import { MeshTransformOptions } from '@graphql-mesh/types'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { wrapSchema } from '@graphql-tools/wrap'
import { execute, parse } from 'graphql'
import AddSourceNameTransform from '../src/index.js'

describe('Add Source Name Transform', () => {
  it('should resolve the source name correctly', () => {
    const schema = makeExecutableSchema({
      typeDefs: /* GraphQL */ `
        type Query {
          foo: Foo
        }
        type Foo {
          id: ID
        }
      `,
      resolvers: {
        Query: {
          foo: () => ({ id: 'bar' }),
        },
      },
    })
    const wrappedSchema = wrapSchema({
      schema,
      transforms: [new AddSourceNameTransform({ apiName: 'test' } as MeshTransformOptions)],
    })
    const result = execute({
      schema: wrappedSchema,
      document: parse(/* GraphQL */ `
        query {
          foo {
            id
            sourceName
          }
        }
      `),
    })
    expect(result).toEqual({
      data: {
        foo: {
          id: 'bar',
          sourceName: 'test',
        },
      },
    })
  })
})
