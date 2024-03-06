import { ExecutionResult, isAsyncIterable } from '@graphql-tools/utils'
import {
  BlockTrackingConfig,
  DEFAULT_CONFIG,
  getNewBlockNumberFromExecutionResult,
  transformExecutionRequest,
} from './shared.js'
import { FusiongraphPlugin } from '@graphql-mesh/fusion-runtime'

export function useBlockTracking(configInput?: Partial<BlockTrackingConfig>): FusiongraphPlugin {
  const config: BlockTrackingConfig = {
    ...DEFAULT_CONFIG,
    ...configInput,
  }
  const minBlockMap = new Map<string, number>()
  return {
    onSubgraphExecute({ fusiongraph, subgraphName, executionRequest, setExecutionRequest }) {
      setExecutionRequest(
        transformExecutionRequest(executionRequest, config, fusiongraph, false, minBlockMap.get(subgraphName)),
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
