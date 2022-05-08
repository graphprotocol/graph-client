import { makeExecutableSchema } from '@graphql-tools/schema'
import { wrapSchema } from '@graphql-tools/wrap'
import { execute, ExecutionResult, parse } from 'graphql'
import AutoPaginationTransform from '../src'

describe('Auto Pagination', () => {
  const users = new Array(20).fill({}).map((_, i) => ({ id: (i + 1).toString(), name: `User ${i + 1}` }))
  const LIMIT = 3
  const schema = makeExecutableSchema({
    typeDefs: /* GraphQL */ `
            type Query {
                _meta: Meta
                users(first: Int = ${LIMIT}, skip: Int = 0): [User!]!
            }
            type User {
                id: ID!
                name: String!
            }
            type Meta {
              block: Block
            }
            type Block {
              number: Int
            }
        `,
    resolvers: {
      Query: {
        users: (_, { first = LIMIT, skip = 0 }) => {
          if (first > LIMIT) {
            throw new Error(`You cannot request more than ${LIMIT} users; you requested ${first}`)
          }
          return users.slice(skip, skip + first)
        },
        _meta: () => ({
          block: {
            number: Date.now(),
          },
        }),
      },
    },
  })
  const wrappedSchema = wrapSchema({
    schema,
    transforms: [
      new AutoPaginationTransform({
        config: {
          limitOfRecords: LIMIT,
        },
      }),
    ],
  })
  it('should give correct numbers of results if first arg are higher than given limit', async () => {
    const query = /* GraphQL */ `
      query {
        users(first: 10) {
          id
          name
        }
      }
    `
    const result = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.users).toHaveLength(10)
    expect(result.data?.users).toEqual(users.slice(0, 10))
  })
  it('should respect skip argument', async () => {
    const query = /* GraphQL */ `
      query {
        users(first: 10, skip: 1) {
          id
          name
        }
      }
    `
    const result = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.users).toHaveLength(10)
    expect(result.data?.users).toEqual(users.slice(1, 11))
  })
  it('should work with the values under the limit', async () => {
    const query = /* GraphQL */ `
      query {
        users(first: 2, skip: 2) {
          id
          name
        }
      }
    `
    const result = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.users).toHaveLength(2)
    expect(result.data?.users).toEqual(users.slice(2, 4))
  })
  it('should ignore non entity fields added by other transforms', async () => {
    const query = /* GraphQL */ `
      query {
        _meta {
          block {
            number
          }
        }
        users(first: 10) {
          id
          name
        }
      }
    `
    const result: ExecutionResult<any> = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?._meta?.block?.number).toBeDefined()
    expect(result.data?.users).toHaveLength(10)
    expect(result.data?.users).toEqual(users.slice(0, 10))
  })
})
