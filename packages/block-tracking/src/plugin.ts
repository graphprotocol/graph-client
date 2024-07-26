import { ExecutionResult, isAsyncIterable } from '@graphql-tools/utils'
import {
  BlockTrackingConfig,
  DEFAULT_CONFIG,
  getNewBlockNumberFromExecutionResult,
  transformExecutionRequest,
} from './shared.js'
import { UnifiedGraphPlugin } from '@graphql-mesh/fusion-runtime'

export function useBlockTracking<TContext>(configInput?: Partial<BlockTrackingConfig>): UnifiedGraphPlugin<TContext> {
  const config: BlockTrackingConfig = {
    ...DEFAULT_CONFIG,
    ...configInput,
  }
  const minBlockMap = new Map<string, number>()
  return {
    onSubgraphExecute({ subgraph, subgraphName, executionRequest, setExecutionRequest }) {
      setExecutionRequest(
        transformExecutionRequest(executionRequest, config, subgraph, false, minBlockMap.get(subgraphName)),
      )
      function handleResult(result: ExecutionResult) {
        const newBlockNumber = getNewBlockNumberFromExecutionResult(result, config)
        const currentMinBlockNumber = minBlockMap.get(subgraphName)
        if (newBlockNumber != null && (currentMinBlockNumber == null || newBlockNumber > currentMinBlockNumber)) {
          minBlockMap.set(subgraphName, newBlockNumber)
        }
      }
      return ({ result }) => {
        if (isAsyncIterable(result)) {
          return {
            onNext({ result }) {
              handleResult(result)
            },
          }
        }
        handleResult(result)
        return
      }
    },
  }
}
