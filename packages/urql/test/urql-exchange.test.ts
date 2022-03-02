import { createClient, Client, OperationResult } from '@urql/core'
import { MeshInstance } from '@graphql-mesh/runtime'
import { graphExchange } from '../src'
import { getTestClient } from '../../testing/getTestClient'
import { parse } from 'graphql'
import { observableToAsyncIterable } from '@graphql-tools/utils'
import { pipe, toObservable } from 'wonka'

describe('graphExchange', () => {
  let client: Client
  let graphClient: MeshInstance
  beforeEach(async () => {
    graphClient = await getTestClient()
    client = createClient({
      url: 'http://mesh.com',
      exchanges: [graphExchange(async () => graphClient)],
    })
  })
  afterEach(() => {
    graphClient?.destroy()
  })
  it('should handle queries correctly', async () => {
    const result = await client
      .query(
        /* GraphQL */ `
          query Greetings {
            greetings
          }
        `,
      )
      .toPromise()
    expect(result.error).toBeUndefined()
    expect(result.data).toEqual({
      greetings: 'This is the `greetings` field of the root `Query` type',
    })
  })
  it('should handle subscriptions correctly', async () => {
    const observable = pipe(
      client.subscription(/* GraphQL */ `
        subscription Time {
          time
        }
      `),
      toObservable,
    )

    const asyncIterable = observableToAsyncIterable<OperationResult<any>>(observable)
    let i = 0
    for await (const result of asyncIterable) {
      i++
      if (i == 2) {
        break
      }
      expect(result.error).toBeFalsy()
      const date = new Date(result?.data?.time)
      expect(date.getFullYear()).toBe(new Date().getFullYear())
    }
    expect(i).toBe(2)
  })
})
