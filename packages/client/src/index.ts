import { ExecutionArgs } from 'graphql'
import { fetch } from 'cross-undici-fetch'
import { print } from 'graphql'
import { AsyncExecutor, Executor } from '@graphql-tools/utils'

export type RemoteSubgraphConfiguration = {
  name: string
  executor: Executor
}

export type TheGraphClientConfiguration = {
  subgraphs: RemoteSubgraphConfiguration[]
}

export const createExecutor =
  (url: string): AsyncExecutor =>
  async ({ document, variables }) => {
    const query = print(document)
    const fetchResult = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    })

    return fetchResult.json()
  }

export function createTheGraphClient(
  configuration: TheGraphClientConfiguration,
) {
  let readinessPromise$: Promise<void> | null = null

  const initalize = async () => {}

  return {
    ready() {
      if (readinessPromise$ === null) {
        readinessPromise$ = initalize()
      }

      return readinessPromise$
    },
    async execute(args: ExecutionArgs) {
      await initalize()
    },
  }
}

export type TheGraphClientInstance = ReturnType<typeof createTheGraphClient>
