import { makeExecutableSchema } from '@graphql-tools/schema'
import { wrapSchema } from '@graphql-tools/wrap'
import { DocumentNode, execute, ExecutionResult, GraphQLFieldResolver, parse, print, validate } from 'graphql'
import AutoPaginationTransform, { useAutoPagination } from '../src/index.js'
import PrefixTransform from '@graphql-mesh/transform-prefix'
import LocalforageCache from '@graphql-mesh/cache-localforage'
import { DefaultLogger } from '@graphql-mesh/utils'
import { PubSub } from '@graphql-mesh/utils'
import { stitchSchemas } from '@graphql-tools/stitch'
import { getProxyExecutor } from '@graphql-mesh/serve-runtime'
import { createDefaultExecutor } from '@graphql-tools/delegate'
import { composeSubgraphs, createRenameFieldTransform } from '@graphql-mesh/fusion-composition'
import { getExecutorForFusiongraph } from '@graphql-mesh/fusion-runtime'

const logger = new DefaultLogger('test')

interface CreateSchemaOpts {
  firstLimit: number
  skipDefault: number
  skipLimit: number
  entityName: string
}

function createSchemaAndEntities(opts: CreateSchemaOpts) {
  const entityResolver: GraphQLFieldResolver<any, any> = (
    _,
    { first = opts.firstLimit, skip = opts.skipDefault, odd, where },
  ) => {
    if (first > opts.firstLimit) {
      throw new Error(`You cannot request more than ${opts.firstLimit} ${opts.entityName}s; you requested ${first}`)
    }
    if (skip > opts.skipLimit) {
      throw new Error(`You cannot skip more than ${opts.skipLimit} ${opts.entityName}s; you requested ${skip}`)
    }
    let entitiesSlice = entities
    if (odd) {
      entitiesSlice = entitiesOdd
    }
    if (where?.id_gte) {
      entitiesSlice = entities.slice(where.id_gte)
    }
    return entitiesSlice.slice(skip, skip + first)
  }
  const entities = new Array(20000)
    .fill({})
    .map((_, i) => ({ id: (i + 1).toString(), name: `${opts.entityName} ${i + 1}` }))
  const entitiesOdd = entities.filter((_, i) => i % 2 === 1)
  const entityNamePluralLowerCase = opts.entityName.toLowerCase() + 's'
  const subEntitiesFieldName = 'sub' + entityNamePluralLowerCase
  const schema = makeExecutableSchema({
    typeDefs: /* GraphQL */ `
            type Query {
                _meta: Meta
                ${entityNamePluralLowerCase}(first: Int = ${opts.firstLimit}, skip: Int = ${opts.skipDefault}, odd: Boolean, where: WhereInput): [${opts.entityName}!]!
            }
            type ${opts.entityName} {
                id: ID!
                name: String!
                ${subEntitiesFieldName}(first: Int = ${opts.firstLimit}, skip: Int = ${opts.skipDefault}): [${opts.entityName}!]!
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
        [entityNamePluralLowerCase]: entityResolver,
        _meta: () => ({
          block: {
            number: Date.now(),
          },
        }),
      },
      [opts.entityName]: {
        [subEntitiesFieldName]: entityResolver,
      },
    },
  })
  return {
    schema,
    entities,
    entitiesOdd,
  }
}

describe('Auto Pagination', () => {
  describe('single schema', () => {
    const USERS_FIRST_LIMIT = 10
    const USERS_SKIP_DEFAULT = 0
    const USERS_SKIP_LIMIT = 50
    const {
      schema: usersSchema,
      entities: users,
      entitiesOdd: usersOdd,
    } = createSchemaAndEntities({
      firstLimit: USERS_FIRST_LIMIT,
      skipDefault: USERS_SKIP_DEFAULT,
      skipLimit: USERS_SKIP_LIMIT,
      entityName: 'User',
    })
    const config = {
      limitOfRecords: USERS_FIRST_LIMIT,
      skipArgumentLimit: USERS_SKIP_LIMIT,
    }
    const plugin = useAutoPagination(config)
    const wrappedUsersSchema = wrapSchema({
      schema: usersSchema,
      transforms: [
        new AutoPaginationTransform({
          config,
        }),
      ],
    })
    const supergraphExecutor = getProxyExecutor(
      {
        proxy: {
          endpoint: 'http://localhost:4000/graphql',
        },
        transport() {
          return {
            getSubgraphExecutor() {
              return createDefaultExecutor(usersSchema)
            },
          }
        },
        plugins: () => [plugin],
      },
      {},
    )
    const scenarios = {
      Plugin: (document: DocumentNode, variables?: any) =>
        supergraphExecutor({
          document,
          variables,
        }),
      Transform: (document: DocumentNode, variables?: any) =>
        execute({
          schema: wrappedUsersSchema,
          document,
          variableValues: variables,
        }),
    }
    Object.entries(scenarios).forEach(([name, executor]) => {
      describe(name, () => {
        it('should give correct numbers of results if first arg are higher than given limit', async () => {
          const query = /* GraphQL */ `
            query {
              users(first: 20) {
                id
                name
              }
            }
          `
          const result = (await executor(parse(query))) as ExecutionResult<any>
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
          const result = (await executor(parse(query))) as ExecutionResult<any>
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
          const result = (await executor(parse(query))) as ExecutionResult<any>
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
          const result: ExecutionResult<any> = (await executor(parse(query))) as ExecutionResult<any>
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
          const result: ExecutionResult<any> = (await executor(parse(query))) as ExecutionResult<any>
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
          const result: ExecutionResult<any> = (await executor(parse(query))) as ExecutionResult<any>
          expect(result.data?.users).toHaveLength(150)
          expect(result.data?.users).toEqual(users.slice(0, 150))
        })
        it('should work with prefix transform properly', async () => {
          let executor
          if (name === 'Transform') {
            const wrappedSchema = wrapSchema({
              schema: usersSchema,
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
                    limitOfRecords: USERS_FIRST_LIMIT,
                    skipArgumentLimit: USERS_SKIP_LIMIT,
                  },
                }),
              ],
            })
            executor = () =>
              execute({
                schema: wrappedSchema,
                document: parse(query),
              })
          } else if (name === 'Plugin') {
            const composedSchema = composeSubgraphs([
              {
                name: 'Users',
                schema: usersSchema,
                transforms: [
                  createRenameFieldTransform((_field, fieldName, typeName) =>
                    typeName === 'Query' && fieldName === 'users' ? 'my_users' : fieldName,
                  ),
                ],
              },
            ])
            const { fusiongraphExecutor } = getExecutorForFusiongraph({
              fusiongraph: composedSchema,
              transports() {
                return {
                  getSubgraphExecutor() {
                    const executor = createDefaultExecutor(usersSchema)
                    return function (executionRequest) {
                      const validationErrors = validate(composedSchema, executionRequest.document)
                      if (validationErrors.length) {
                        return { errors: validationErrors }
                      }
                      return executor(executionRequest)
                    }
                  },
                }
              },
              plugins: [plugin],
            })

            executor = () =>
              fusiongraphExecutor({
                document: parse(query),
              })
          } else {
            throw new Error('Unknown executor')
          }
          const query = /* GraphQL */ `
            query {
              my_users(first: 150) {
                id
                name
              }
            }
          `
          const result: ExecutionResult<any> = (await executor()) as ExecutionResult<any>
          if (result.errors?.length) {
            throw result.errors[0]
          }
          expect(result.data?.my_users).toHaveLength(150)
          expect(result.data?.my_users).toEqual(users.slice(0, 150))
        })
        it('should work with nested fields', async () => {
          const query = /* GraphQL */ `
            query {
              users(first: 20) {
                id
                name
                subusers(first: 25) {
                  id
                  name
                }
              }
            }
          `
          const result: any = (await executor(parse(query))) as ExecutionResult<any>
          expect(result.data?.users).toHaveLength(20)
          expect(result.data?.users[0].subusers).toHaveLength(25)
          expect(result.data?.users[0].subusers).toEqual(users.slice(0, 25))
        })
        it('should work with variables', async () => {
          const query = /* GraphQL */ `
            query ($first: Int = 60, $skip: Int = 0) {
              users(first: $first) {
                id
                name
              }
            }
          `
          const result = (await executor(parse(query), {
            first: 100,
            skip: 0,
          })) as ExecutionResult<any>
          if (result.errors?.length) {
            throw result.errors[0]
          }
          expect(result.data?.users).toHaveLength(100)
          expect(result.data?.users).toEqual(users.slice(0, 100))
        })
      })
    })
  })
  describe('multiple schemas', () => {
    const AUTHORS_FIRST_LIMIT = 10
    const AUTHORS_SKIP_LIMIT = 20
    const AUTHORS_SKIP_DEFAULT = 0
    const { schema: authorsSchema, entities: authors } = createSchemaAndEntities({
      skipLimit: AUTHORS_SKIP_LIMIT,
      skipDefault: AUTHORS_SKIP_DEFAULT,
      firstLimit: AUTHORS_FIRST_LIMIT,
      entityName: 'Author',
    })

    const BOOKS_FIRST_LIMIT = 10
    const BOOKS_SKIP_LIMIT = 20
    const BOOKS_SKIP_DEFAULT = 0

    const { schema: booksSchema, entities: books } = createSchemaAndEntities({
      skipLimit: BOOKS_SKIP_LIMIT,
      skipDefault: BOOKS_SKIP_DEFAULT,
      firstLimit: BOOKS_FIRST_LIMIT,
      entityName: 'Book',
    })

    const stitchedSchema = stitchSchemas({
      subschemas: [
        {
          schema: authorsSchema,
          transforms: [
            new AutoPaginationTransform({
              config: {
                limitOfRecords: AUTHORS_FIRST_LIMIT,
                skipArgumentLimit: AUTHORS_SKIP_LIMIT,
              },
            }),
          ],
        },
        {
          schema: booksSchema,
          transforms: [
            new AutoPaginationTransform({
              config: {
                limitOfRecords: BOOKS_FIRST_LIMIT,
                skipArgumentLimit: BOOKS_SKIP_LIMIT,
              },
            }),
          ],
        },
      ],
    })

    it('should give correct numbers of results if first arg are higher than given limit', async () => {
      const query = /* GraphQL */ `
        query {
          books(first: 100) {
            id
            name
          }
          authors(first: 100) {
            id
            name
          }
        }
      `
      const result = await execute({
        schema: stitchedSchema,
        document: parse(query),
      })

      expect(result.data?.authors).toHaveLength(100)
      expect(result.data?.books).toHaveLength(100)
      expect(result.data?.authors).toEqual(authors.slice(0, 100))
      expect(result.data?.books).toEqual(books.slice(0, 100))
    })
  })
})
