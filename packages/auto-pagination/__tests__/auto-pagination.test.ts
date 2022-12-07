import { makeExecutableSchema } from '@graphql-tools/schema'
import { wrapSchema } from '@graphql-tools/wrap'
import { execute, ExecutionResult, GraphQLFieldResolver, parse } from 'graphql'
import AutoPaginationTransform from '../src/index.js'
import PrefixTransform from '@graphql-mesh/transform-prefix'
import LocalforageCache from '@graphql-mesh/cache-localforage'
import { DefaultLogger } from '@graphql-mesh/utils'
import { PubSub } from '@graphql-mesh/utils'

const logger = new DefaultLogger('test')

describe('Auto Pagination', () => {
  const FIRST_LIMIT = 10
  const SKIP_DEFAULT = 0
  const SKIP_LIMIT = 50
  const userResolver: GraphQLFieldResolver<any, any> = (
    _,
    { first = FIRST_LIMIT, skip = SKIP_DEFAULT, odd, where },
  ) => {
    if (first > FIRST_LIMIT) {
      throw new Error(`You cannot request more than ${FIRST_LIMIT} users; you requested ${first}`)
    }
    if (skip > SKIP_LIMIT) {
      throw new Error(`You cannot skip more than ${SKIP_LIMIT} users; you requested ${skip}`)
    }
    let usersSlice = users
    if (odd) {
      usersSlice = usersOdd
    }
    if (where?.id_gte) {
      usersSlice = users.slice(where.id_gte)
    }
    return usersSlice.slice(skip, skip + first)
  }
  const users = new Array(20000).fill({}).map((_, i) => ({ id: (i + 1).toString(), name: `User ${i + 1}` }))
  const usersOdd = users.filter((_, i) => i % 2 === 1)
  const schema = makeExecutableSchema({
    typeDefs: /* GraphQL */ `
            type Query {
                _meta: Meta
                users(first: Int = ${FIRST_LIMIT}, skip: Int = ${SKIP_DEFAULT}, odd: Boolean, where: WhereInput): [User!]!
            }
            type User {
                id: ID!
                name: String!
                friends(first: Int = ${FIRST_LIMIT}, skip: Int = ${SKIP_DEFAULT}): [User!]!
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
        users: userResolver,
        _meta: () => ({
          block: {
            number: Date.now(),
          },
        }),
      },
      User: {
        friends: userResolver,
      },
    },
  })
  const wrappedSchema = wrapSchema({
    schema,
    transforms: [
      new AutoPaginationTransform({
        config: {
          limitOfRecords: FIRST_LIMIT,
          skipArgumentLimit: SKIP_LIMIT,
        },
      }),
    ],
  })
  it('should give correct numbers of results if first arg are higher than given limit', async () => {
    const query = /* GraphQL */ `
      query {
        users(first: 20) {
          id
          name
        }
      }
    `
    const result = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.users).toHaveLength(20)
    expect(result.data?.users).toEqual(users.slice(0, 20))
  })
  it('should respect skip argument', async () => {
    const query = /* GraphQL */ `
      query {
        users(first: 20, skip: 1) {
          id
          name
        }
      }
    `
    const result = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.users).toHaveLength(20)
    expect(result.data?.users).toEqual(users.slice(1, 21))
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
        users(first: 20) {
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
    expect(result.data?.users).toHaveLength(20)
    expect(result.data?.users).toEqual(users.slice(0, 20))
  })
  it('should respect other arguments', async () => {
    const query = /* GraphQL */ `
      query {
        users(first: 20, odd: true) {
          id
          name
        }
      }
    `
    const result: ExecutionResult<any> = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.users).toHaveLength(20)
    expect(result.data?.users).toEqual(usersOdd.slice(0, 20))
  })
  it('should make queries serially if skip limit reaches the limit', async () => {
    const query = /* GraphQL */ `
      query {
        users(first: 150) {
          id
          name
        }
      }
    `
    const result: ExecutionResult<any> = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.users).toHaveLength(150)
    expect(result.data?.users).toEqual(users.slice(0, 150))
  })
  it('should work with prefix transform properly', async () => {
    const wrappedSchema = wrapSchema({
      schema,
      transforms: [
        new PrefixTransform({
          baseDir: process.cwd(),
          cache: new LocalforageCache(),
          pubsub: new PubSub(),
          logger,
          apiName: 'test',
          config: {
            value: 'my_',
            includeRootOperations: true,
          },
          importFn: (m) => import(m),
        }),
        new AutoPaginationTransform({
          config: {
            limitOfRecords: FIRST_LIMIT,
            skipArgumentLimit: SKIP_LIMIT,
          },
        }),
      ],
    })
    const query = /* GraphQL */ `
      query {
        my_users(first: 150) {
          id
          name
        }
      }
    `
    const result: ExecutionResult<any> = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.my_users).toHaveLength(150)
    expect(result.data?.my_users).toEqual(users.slice(0, 150))
  })
  it('should work with nested fields', async () => {
    const query = /* GraphQL */ `
      query {
        users(first: 20) {
          id
          name
          friends(first: 25) {
            id
            name
          }
        }
      }
    `
    const result: any = await execute({
      schema: wrappedSchema,
      document: parse(query),
    })
    expect(result.data?.users).toHaveLength(20)
    expect(result.data?.users[0].friends).toHaveLength(25)
    expect(result.data?.users[0].friends).toEqual(users.slice(0, 25))
  })
})
