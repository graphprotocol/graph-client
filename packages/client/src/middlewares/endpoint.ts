import { GraphQLSchema, print } from 'graphql'
import { wrapSchema, introspectSchema } from '@graphql-tools/wrap'
import { AsyncExecutor } from '@graphql-tools/utils'
import { fetch } from 'cross-undici-fetch'

export const endpoint = (options: { uri: string }): (() => Promise<GraphQLSchema>) => {
  return async () => {
    const executor: AsyncExecutor = async ({ document, variables }) => {
      const query = print(document)
      const fetchResult = await fetch(options.uri, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
      })
      return fetchResult.json()
    }

    return wrapSchema({
      schema: await introspectSchema(executor),
      executor,
    })
  }
}
