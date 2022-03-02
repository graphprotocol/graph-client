import { ApolloClient, FetchResult, InMemoryCache } from '@apollo/client/core'
import { MeshInstance } from '@graphql-mesh/runtime'
import { GraphApolloLink } from '../src'
import { getTestClient } from '../../testing/getTestClient'
import { parse } from 'graphql'
import { observableToAsyncIterable } from '@graphql-tools/utils'

describe('GraphApolloLink', () => {
  let client: ApolloClient<any>
  let graphClient: MeshInstance
  beforeEach(async () => {
    graphClient = await getTestClient()
    client = new ApolloClient({
      link: new GraphApolloLink(graphClient),
      cache: new InMemoryCache(),
    })
  })
  afterEach(() => {
    graphClient?.destroy()
  })
  it('should handle queries correctly', async () => {
    const result = await client.query({
      query: parse(/* GraphQL */ `
        query Greetings {
          greetings
        }
      `),
    })
    expect(result.error).toBeUndefined()
    expect(result.errors?.length).toBeFalsy()
    expect(result.data).toEqual({
      greetings: 'This is the `greetings` field of the root `Query` type',
    })
  })
  it('should handle subscriptions correctly', async () => {
    const observable = client.subscribe({
      query: parse(/* GraphQL */ `
        subscription Time {
          time
        }
      `),
    })
    const asyncIterable =
      observableToAsyncIterable<FetchResult<any, Record<string, any>, Record<string, any>>>(observable)
    let i = 0
    for await (const result of asyncIterable) {
      i++
      if (i == 2) {
        break
      }
      expect(result.errors?.length).toBeFalsy()
      const date = new Date(result?.data?.time)
      expect(date.getFullYear()).toBe(new Date().getFullYear())
    }
    expect(i).toBe(2)
  })
})
