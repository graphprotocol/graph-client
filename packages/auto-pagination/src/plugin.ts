import { isAsyncIterable, mapAsyncIterator } from '@graphql-tools/utils'
import {
  AutoPaginationOptions,
  DEFAULT_OPTIONS,
  transformExecutionRequest,
  transformExecutionResponse,
} from './shared.js'
import { FusiongraphPlugin } from '@graphql-mesh/fusion-runtime'

export function useAutoPagination(opts: Partial<AutoPaginationOptions> = {}): FusiongraphPlugin {
  const config: AutoPaginationOptions = {
    ...DEFAULT_OPTIONS,
    ...opts,
  }
  return {
    onSubgraphExecute({ executionRequest, setExecutionRequest }) {
      setExecutionRequest(transformExecutionRequest(executionRequest, config))
      return ({ result, setResult }) => {
        if (isAsyncIterable(result)) {
          const iterator = result[Symbol.asyncIterator]()
          setResult(mapAsyncIterator(iterator, transformExecutionResponse))
        } else {
          setResult(transformExecutionResponse(result))
        }
      }
    },
  }
}
