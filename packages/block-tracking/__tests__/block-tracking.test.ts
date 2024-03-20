import { makeExecutableSchema } from '@graphql-tools/schema'
import { wrapSchema } from '@graphql-tools/wrap'
import { Executor } from '@graphql-tools/utils'
import { createDefaultExecutor } from '@graphql-tools/delegate'
import BlockTrackingTransform, { useBlockTracking } from '../src/index.js'
import { DocumentNode, execute, GraphQLSchema, parse, print } from 'graphql'
import { getExecutor } from '@graphprotocol/client-runtime'
import { createBatchingExecutor } from '@graphql-tools/batch-execute'
import { BlockTrackingConfig } from '../src/shared.js'

describe('Block Tracking', () => {
  let schema: GraphQLSchema
  let wrappedSchema: GraphQLSchema
  let executor: Executor
  let documents: DocumentNode[]
  let transform: BlockTrackingTransform
  let cnt: number
  let plugin: ReturnType<typeof useBlockTracking>
  beforeEach(() => {
    plugin = useBlockTracking()
    cnt = 0
    schema = makeExecutableSchema({
      typeDefs: /* GraphQL */ `
        scalar Bytes
        type _Block_ {
          """
          The hash of the block
          """
          hash: Bytes
          """
          The block number
          """
          number: Int!
        }
        type _Meta_ {
          """
          Information about a specific subgraph block. The hash of the block
          will be null if the _meta field has a block constraint that asks for
          a block number. It will be filled if the _meta field has no block constraint
          and therefore asks for the latest block
          """
          block: _Block_!
        }
        type Protocol {
          paused: Boolean!
        }
        input Block_height {
          number_gte: Int
        }
        type Query {
          _meta: _Meta_!
          protocol(id: ID!, block: Block_height): Protocol!
        }
      `,
      resolvers: {
        Query: {
          _meta: () => ({
            block: {
              hash: '0x0000000000000000000000000000000000000000000000000000000000000000',
              number: cnt++,
            },
          }),
          protocol: (_, { block }) => ({
            paused: block?.number_gte != null,
          }),
        },
      },
    })
    documents = []
    executor = (executionRequest) => {
      const { document } = executionRequest
      documents.push(document)
      return createDefaultExecutor(schema)(executionRequest)
    }
    transform = new BlockTrackingTransform()
    wrappedSchema = wrapSchema({
      schema,
      executor,
      transforms: [transform],
    })
  })
  describe('Schema Validation', () => {
    it('should check if there is "_Meta_" type in the schema', () => {
      const schema = makeExecutableSchema({
        typeDefs: /* GraphQL */ `
          type Query {
            foo: String
          }
        `,
      })
      expect(() => {
        wrapSchema({
          schema,
          transforms: [new BlockTrackingTransform()],
        })
      }).toThrowError(/Make sure you have a type named \"_Meta_\"/)
    })
    it('should check if there is "_Meta_" type with a field named "block" in the schema', () => {
      const schema = makeExecutableSchema({
        typeDefs: /* GraphQL */ `
          type Query {
            foo: _Meta_
          }
          type _Meta_ {
            foo: String
          }
        `,
      })
      expect(() => {
        wrapSchema({
          schema,
          transforms: [new BlockTrackingTransform()],
        })
      }).toThrowError(/Make sure you have a type named \"_Meta_\" with \"block\" field/)
    })
    it('should check if there is "_Meta_" type with a field named "block" which returns an object in the schema', () => {
      const schema = makeExecutableSchema({
        typeDefs: /* GraphQL */ `
          type Query {
            foo: _Meta_
          }
          type _Meta_ {
            block: Int
          }
        `,
      })
      expect(() => {
        wrapSchema({
          schema,
          transforms: [new BlockTrackingTransform()],
        })
      }).toThrowError(/Make sure you have a correct block type/)
    })
    it('should check if there is "_Meta_" type with a field named "block" which returns an object type with "number" field in the schema', () => {
      const schema = makeExecutableSchema({
        typeDefs: /* GraphQL */ `
          type Query {
            foo: _Meta_
          }
          type _Meta_ {
            block: Block
          }
          type Block {
            random: Int
          }
        `,
      })
      expect(() => {
        wrapSchema({
          schema,
          transforms: [new BlockTrackingTransform()],
        })
      }).toThrowError(/Make sure you have a correct block type/)
    })
    it('should check if there is "_meta" field in the root query type', () => {
      const schema = makeExecutableSchema({
        typeDefs: /* GraphQL */ `
          type Query {
            foo: String
          }
          type _Meta_ {
            block: Block
          }
          type Block {
            number: Int
          }
        `,
      })
      expect(() => {
        wrapSchema({
          schema,
          transforms: [new BlockTrackingTransform()],
        })
      }).toThrowError(/Make sure you have a query type with \"_meta\" field/)
    })
    it('should check if there is "_meta" field with the correct type in the root query type', () => {
      const schema = makeExecutableSchema({
        typeDefs: /* GraphQL */ `
          type Query {
            _meta: String
            foo: String
          }
          type _Meta_ {
            block: Block
          }
          type Block {
            number: Int
          }
        `,
      })
      expect(() => {
        wrapSchema({
          schema,
          transforms: [new BlockTrackingTransform()],
        })
      }).toThrowError(/Make sure you have a query type with \"_meta\" field with the correct/)
    })
    it('should check if there are "block" arguments for every single field of the root query type', () => {
      const schema = makeExecutableSchema({
        typeDefs: /* GraphQL */ `
          type Query {
            _meta: _Meta_
            foo: String
          }
          type _Meta_ {
            block: Block
          }
          type Block {
            number: Int
          }
        `,
      })
      expect(() => {
        wrapSchema({
          schema,
          transforms: [new BlockTrackingTransform()],
        })
      }).toThrowError(/Make sure you have query root fields with \"block\" argument/)
    })
    it('should check if there are "block" arguments returning object type for every single field of the root query type', () => {
      const schema = makeExecutableSchema({
        typeDefs: /* GraphQL */ `
          type Query {
            _meta: _Meta_
            foo(block: Int): String
          }
          type _Meta_ {
            block: Block
          }
          type Block {
            number: Int
          }
        `,
      })
      expect(() => {
        wrapSchema({
          schema,
          transforms: [new BlockTrackingTransform()],
        })
      }).toThrowError(/Make sure you have query root fields with \"block\" argument returning correct type/)
    })
    it('should check if there are "block" arguments with "number" field for every single field of the root query type', () => {
      const schema = makeExecutableSchema({
        typeDefs: /* GraphQL */ `
          type Query {
            _meta: _Meta_
            foo(block: BlockInput): String
          }
          input BlockInput {
            random: Int
          }
          type _Meta_ {
            block: Block
          }
          type Block {
            number: Int
          }
        `,
      })
      expect(() => {
        wrapSchema({
          schema,
          transforms: [new BlockTrackingTransform()],
        })
      }).toThrowError(/Make sure you have query root fields with \"block\" argument with \"number_gte\"/)
    })
  })
  const TransformScenario = {
    name: 'Transform',
    execute(document: DocumentNode) {
      return execute({
        schema: wrappedSchema,
        document,
      })
    },
    get config() {
      return transform.config as BlockTrackingConfig
    },
    set config(config: BlockTrackingConfig) {
      transform.config = config as any
    },
  }
  const PluginScenario = {
    name: 'Plugin',
    async execute(document: DocumentNode) {
      const supergraphExecutor = getExecutor({
        proxy: {
          endpoint: 'http://localhost:4000',
        },
        transport() {
          return {
            getSubgraphExecutor() {
              return createBatchingExecutor(executor)
            },
          }
        },
        plugins: () => {
          return [plugin]
        },
      })
      return supergraphExecutor({
        document,
      })
    },
    get config() {
      return plugin.config as any
    },
    set config(config: any) {
      plugin.config = config
    },
  }
  ;[TransformScenario, PluginScenario].forEach((scenario) => {
    describe(scenario.name, () => {
      it('should add _meta field to query operations', async () => {
        const query = /* GraphQL */ `
          {
            protocol(id: "0") {
              paused
            }
          }
        `
        await scenario.execute(parse(query))
        const expectedQuery = /* GraphQL */ `
          {
            protocol(id: "0") {
              paused
            }
            _meta {
              block {
                number
              }
            }
          }
        `
        expect(documents).toHaveLength(1)
        expect(print(documents[0])).toEqual(print(parse(expectedQuery, { noLocation: true })))
      })
      it('should not add _meta to the result if not exists in the actual query', async () => {
        const query = /* GraphQL */ `
          {
            protocol(id: "0") {
              paused
            }
          }
        `
        const result = await scenario.execute(parse(query))
        expect(result).toEqual({
          data: {
            protocol: {
              paused: false,
            },
          },
        })
      })
      it('should add minBlock to the existing query if available', async () => {
        const query = /* GraphQL */ `
          {
            protocol(id: "0") {
              paused
            }
          }
        `
        const result = await scenario.execute(parse(query))
        expect(result).toEqual({
          data: {
            protocol: {
              paused: false,
            },
          },
        })
        const secondResult = await scenario.execute(parse(query))
        expect(secondResult).toEqual({
          data: {
            protocol: {
              paused: true,
            },
          },
        })
        expect(documents).toHaveLength(2)
        const expectedQuery = /* GraphQL */ `
          {
            protocol(id: "0", block: { number_gte: 0 }) {
              paused
            }
            _meta {
              block {
                number
              }
            }
          }
        `
        expect(print(documents[1])).toEqual(print(parse(expectedQuery, { noLocation: true })))
      })
      it('should take minBlock from the result only if it is more than the existing kept value', async () => {
        const query = /* GraphQL */ `
          {
            protocol(id: "0") {
              paused
            }
          }
        `
        cnt = 3
        const result = await scenario.execute(parse(query))
        expect(result).toEqual({
          data: {
            protocol: {
              paused: false,
            },
          },
        })
        cnt = 1
        const secondResult = await scenario.execute(parse(query))
        expect(secondResult).toEqual({
          data: {
            protocol: {
              paused: true,
            },
          },
        })
        expect(documents).toHaveLength(2)
        const expectedQuery = /* GraphQL */ `
          {
            protocol(id: "0", block: { number_gte: 3 }) {
              paused
            }
            _meta {
              block {
                number
              }
            }
          }
        `
        expect(print(documents[1])).toEqual(print(parse(expectedQuery, { noLocation: true })))
      })
      it('should skip schema validation if validateSchema is false', () => {
        const schema = makeExecutableSchema({
          typeDefs: /* GraphQL */ `
            type Query {
              foo: String
            }
          `,
        })
        expect(() => {
          wrapSchema({
            schema,
            transforms: [
              new BlockTrackingTransform({
                config: {
                  validateSchema: false,
                },
              }),
            ],
          })
        }).not.toThrow()
      })
      it('should not add _meta field to the query if operation name is ignored', async () => {
        scenario.config = {
          ignoreOperationNames: ['Foo'],
        }
        const query = /* GraphQL */ `
          query Foo {
            protocol(id: "0") {
              paused
            }
          }
        `
        await scenario.execute(parse(query))
        const expectedQuery = /* GraphQL */ `
          query Foo {
            protocol(id: "0") {
              paused
            }
          }
        `
        expect(documents).toHaveLength(1)
        expect(print(documents[0])).toEqual(print(parse(expectedQuery, { noLocation: true })))
      })
      it('should not add minBlock to the existing query even if it is available but operation name is ignored', async () => {
        scenario.config = {
          ...scenario.config,
          ignoreOperationNames: ['Foo'],
        }
        const query = /* GraphQL */ `
          query Foo {
            protocol(id: "0") {
              paused
            }
          }
        `
        const result = await scenario.execute(parse(query))
        expect(result).toEqual({
          data: {
            protocol: {
              paused: false,
            },
          },
        })
        const secondResult = await scenario.execute(parse(query))
        expect(secondResult).toEqual({
          data: {
            protocol: {
              paused: false,
            },
          },
        })
        expect(documents).toHaveLength(2)
        const expectedQuery = /* GraphQL */ `
          query Foo {
            protocol(id: "0") {
              paused
            }
          }
        `
        expect(print(documents[1])).toEqual(print(parse(expectedQuery, { noLocation: true })))
      })
      it('should not add minBlock to the existing query even if it is available but field name is ignored', async () => {
        scenario.config = {
          ...scenario.config,
          ignoreFieldNames: ['protocol'],
        }
        const query = /* GraphQL */ `
          query Foo {
            protocol(id: "0") {
              paused
            }
          }
        `
        const result = await scenario.execute(parse(query))
        expect(result).toEqual({
          data: {
            protocol: {
              paused: false,
            },
          },
        })
        const secondResult = await scenario.execute(parse(query))
        expect(secondResult).toEqual({
          data: {
            protocol: {
              paused: false,
            },
          },
        })
        expect(documents).toHaveLength(2)
        const expectedQuery = /* GraphQL */ `
          query Foo {
            protocol(id: "0") {
              paused
            }
            _meta {
              block {
                number
              }
            }
          }
        `
        expect(print(documents[1])).toEqual(print(parse(expectedQuery, { noLocation: true })))
      })
      it('should not add _meta field again if it is already added for another field if batching is enabled', async () => {
        wrappedSchema = wrapSchema({
          schema,
          batch: true,
          executor,
          transforms: [transform],
        })
        const query = /* GraphQL */ `
          query Foo {
            protocol_0: protocol(id: "0") {
              paused
            }
            protocol_1: protocol(id: "1") {
              paused
            }
            protocol_2: protocol(id: "2") {
              paused
            }
          }
        `
        await scenario.execute(parse(query))
        expect(print(documents[0]).split('_meta {').length).toBe(2)
      })
    })
  })
})
