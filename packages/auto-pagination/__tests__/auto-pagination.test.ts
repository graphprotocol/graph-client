import { makeExecutableSchema } from '@graphql-tools/schema'
import { wrapSchema } from '@graphql-tools/wrap'
import { execute, ExecutionResult, parse } from 'graphql'
import AutoPaginationTransform from '../src'
import PrefixTransform from '@graphql-mesh/transform-prefix'
import LocalforageCache from '@graphql-mesh/cache-localforage'
import { PubSub } from '@graphql-mesh/utils'

describe('Auto Pagination', () => {
  const users = new Array(20000).fill({}).map((_, i) => ({ id: (i + 1).toString(), name: `User ${i + 1}` }))
  const usersOdd = users.filter((_, i) => i % 2 === 1)
  const schema = makeExecutableSchema({
    typeDefs: /* GraphQL */ `
            type Query {
                _meta: Meta
                users(first: Int = ${1000}, skip: Int = 0, odd: Boolean, where: WhereInput): [User!]!
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
            input WhereInput {
              id_gte: ID
            }
        `,
    resolvers: {
      Query: {
        users: (_, { first = 1000, skip = 0, odd, where }) => {
          if (first > 1000) {
            throw new Error(`You cannot request more than 1000 users; you requested ${first}`)
          }
          if (skip > 5000) {
            throw new Error(`You cannot skip more than 5000 users; you requested ${skip}`)
          }
          let usersSlice = users
          if (odd) {
            usersSlice = usersOdd
          }
          if (where?.id_gte) {
            usersSlice = users.slice(where.id_gte)
          }
          return usersSlice.slice(skip, skip + first)
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
    transforms: [new AutoPaginationTransform()],
  })
  it('should give correct numbers of results if first arg are higher than given limit', async () => {
    const query = /* GraphQL */ `
      query {
        users(first: 2000) {
          id
          name
        }
      }
    `
    const result = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.users).toHaveLength(2000)
    expect(result.data?.users).toEqual(users.slice(0, 2000))
  })
  it('should respect skip argument', async () => {
    const query = /* GraphQL */ `
      query {
        users(first: 2000, skip: 1) {
          id
          name
        }
      }
    `
    const result = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.users).toHaveLength(2000)
    expect(result.data?.users).toEqual(users.slice(1, 2001))
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
        users(first: 2000) {
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
    expect(result.data?.users).toHaveLength(2000)
    expect(result.data?.users).toEqual(users.slice(0, 2000))
  })
  it('should respect other arguments', async () => {
    const query = /* GraphQL */ `
      query {
        users(first: 2000, odd: true) {
          id
          name
        }
      }
    `
    const result: ExecutionResult<any> = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.users).toHaveLength(2000)
    expect(result.data?.users).toEqual(usersOdd.slice(0, 2000))
  })
  it('should make queries serially if skip limit reaches the limit', async () => {
    const query = /* GraphQL */ `
      query {
        users(first: 15000) {
          id
          name
        }
      }
    `
    const result: ExecutionResult<any> = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.users).toHaveLength(15000)
    expect(result.data?.users).toEqual(users.slice(0, 15000))
  })
  it('should work with prefix transform properly', async () => {
    const wrappedSchema = wrapSchema({
      schema,
      transforms: [
        new PrefixTransform({
          baseDir: process.cwd(),
          cache: new LocalforageCache(),
          pubsub: new PubSub(),
          apiName: 'test',
          config: {
            value: 'my_',
            includeRootOperations: true,
          },
          importFn: (m) => import(m),
        }),
        new AutoPaginationTransform(),
      ],
    })
    const query = /* GraphQL */ `
      query {
        my_users(first: 15000) {
          id
          name
        }
      }
    `
    const result: ExecutionResult<any> = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.my_users).toHaveLength(15000)
    expect(result.data?.my_users).toEqual(users.slice(0, 15000))
  })
})
