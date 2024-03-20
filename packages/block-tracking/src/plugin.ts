import { ExecutionResult, isAsyncIterable } from '@graphql-tools/utils'
import {
  BlockTrackingConfig,
  DEFAULT_CONFIG,
  getNewBlockNumberFromExecutionResult,
  transformExecutionRequest,
} from './shared.js'
import { FusiongraphPlugin } from '@graphql-mesh/fusion-runtime'

export function useBlockTracking(
  configInput?: Partial<BlockTrackingConfig>,
): FusiongraphPlugin & { config: BlockTrackingConfig } {
  let config: BlockTrackingConfig = {
    ...DEFAULT_CONFIG,
    ...configInput,
  }
  const minBlockMap = new Map<string, number>()
  return {
    get config() {
      return config
    },
    set config(newConfig: BlockTrackingConfig) {
      config = {
        ...config,
        ...newConfig,
      }
    },
    onSubgraphExecute({ subgraphName, executionRequest, setExecutionRequest }) {
      setExecutionRequest(transformExecutionRequest(executionRequest, config, false, minBlockMap.get(subgraphName)))
      function handleResult(result: ExecutionResult) {
        const newBlockNumber = getNewBlockNumberFromExecutionResult(result, config)
        const currentMinBlockNumber = minBlockMap.get(subgraphName)
        if (newBlockNumber != null && (currentMinBlockNumber == null || newBlockNumber > currentMinBlockNumber)) {
          minBlockMap.set(subgraphName, newBlockNumber)
        }
        if (result.data && config.metaRootFieldName in result.data) {
          delete result.data[config.metaRootFieldName]
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
