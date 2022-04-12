import { makeExecutableSchema } from '@graphql-tools/schema'
import { wrapSchema } from '@graphql-tools/wrap'
import { execute, graphql, parse } from 'graphql'
import AutoPaginationTransform from '../src'

describe('Auto Pagination', () => {
  const users = new Array(20).fill({}).map((_, i) => ({ id: (i + 1).toString(), name: `User ${i + 1}` }))
  const LIMIT = 3
  const schema = makeExecutableSchema({
    typeDefs: /* GraphQL */ `
            type Query {
                users(first: Int = ${LIMIT}, skip: Int = 0): [User!]!
            }
            type User {
                id: ID!
                name: String!
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
    expect(result).toEqual({
      data: {
        users: users.slice(0, 10),
      },
    })
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
    expect(result).toEqual({
      data: {
        users: users.slice(1, 10),
      },
    })
  })
})
