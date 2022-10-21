import { envelop, useEngine, useSchema } from '@envelop/core'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { Repeater } from '@repeaterjs/repeater'
import { parse } from 'graphql'
import usePollingLive from '../src/index.js'
import * as GraphQLJS from 'graphql'

describe('Polling Live Queries', () => {
  const schema = makeExecutableSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        timestamp: String
      }
    `,
    resolvers: {
      Query: {
        timestamp: () => new Date().toISOString(),
      },
    },
  })
  const getEnveloped = envelop({
    plugins: [useEngine(GraphQLJS), useSchema(schema), usePollingLive()],
  })
  afterEach(async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
  })
  it('should create a live stream with the given argument as an interval', async () => {
    const enveloped = getEnveloped()

    const result: any = await enveloped.execute({
      schema: enveloped.schema,
      document: parse(/* GraphQL */ `
        query TestQuery @live(interval: 500) {
          timestamp
        }
      `),
      operationName: 'TestQuery',
    })

    expect(result[Symbol.asyncIterator]).toBeDefined()

    let lastTimestamp
    let i = 0
    for await (const item of result) {
      expect(item?.isLive).toBe(true)
      expect(item?.data?.timestamp).toBeDefined()
      if (lastTimestamp) {
        expect(new Date(item?.data?.timestamp).getTime() - new Date(lastTimestamp).getTime()).toBeGreaterThan(0.49)
      }
      lastTimestamp = item?.data?.timestamp
      if (i > 2) {
        break
      }
      i++
    }
    expect.assertions(12)
  })
  it('should create a live stream with 1000 ms interval by default', async () => {
    const enveloped = getEnveloped()

    const result: any = await enveloped.execute({
      schema: enveloped.schema,
      document: parse(/* GraphQL */ `
        query TestQuery @live {
          timestamp
        }
      `),
      operationName: 'TestQuery',
    })

    expect(result[Symbol.asyncIterator]).toBeDefined()

    let lastTimestamp
    let i = 0
    for await (const item of result) {
      expect(item?.isLive).toBe(true)
      expect(item?.data?.timestamp).toBeDefined()
      if (lastTimestamp) {
        expect(new Date(item?.data?.timestamp).getTime() - new Date(lastTimestamp).getTime()).toBeGreaterThan(0.99)
      }
      lastTimestamp = item?.data?.timestamp
      if (i > 2) {
        break
      }
      i++
    }
    expect.assertions(12)
  })
  it('should return regular results if there is no @live', async () => {
    const enveloped = getEnveloped()

    const result = await enveloped.execute({
      schema: enveloped.schema,
      document: parse(/* GraphQL */ `
        query TestQuery {
          timestamp
        }
      `),
      operationName: 'TestQuery',
    })

    expect(result?.data?.timestamp).toBeDefined()
  })
  it('should throw an error if the original executor returns AsyncIterable', async () => {
    const getEnveloped = envelop({
      plugins: [
        useSchema(schema),
        {
          onExecute({ setExecuteFn }) {
            return setExecuteFn(
              () =>
                new Repeater((push, stop) => {
                  push({ data: { timestamp: new Date().toISOString() } })
                  stop()
                }) as any,
            )
          },
        },
        usePollingLive(),
      ],
    })

    const enveloped = getEnveloped()

    const result = await enveloped.execute({
      schema: enveloped.schema,
      document: parse(/* GraphQL */ `
        query TestQuery @live {
          timestamp
        }
      `),
      operationName: 'TestQuery',
    })

    expect(result[Symbol.asyncIterator]).toBeDefined()
    for await (const item of result as AsyncIterable<any>) {
      expect(item?.data).toBe(null)
      expect(item?.errors?.[0]?.message).toBe('Execution returned AsyncIterable which is not supported!')
    }

    expect.assertions(3)
  })
})
