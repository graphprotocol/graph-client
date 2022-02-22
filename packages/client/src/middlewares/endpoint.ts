import { print } from 'graphql'
import { introspectSchema } from '@graphql-tools/wrap'
import { AsyncExecutor } from '@graphql-tools/utils'
import { fetch } from 'cross-undici-fetch'
import { SourceLoader } from '../types'

export const endpoint = (options: { uri: string }): SourceLoader => {
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

    return {
      schema: await introspectSchema(executor),
      executor,
    }
  }
}
