import { createServeRuntime as defaultCreateServeRuntime, getProxyExecutor } from '@graphql-mesh/serve-runtime'
import { TransportsOption, getExecutorForFusiongraph } from '@graphql-mesh/fusion-runtime'
import { getSubgraphExecutor } from '@graphql-mesh/transport-http'
import { useAutoPagination } from '@graphprotocol/client-auto-pagination'
import { useBlockTracking } from '@graphprotocol/client-block-tracking'
import usePollingLive from '@graphprotocol/client-polling-live'
import { Executor } from '@graphql-tools/utils'

export const DEFAULT_TRANSPORTS_CONFIG = {
  http: { getSubgraphExecutor } as any,
} as TransportsOption

export const DEFAULT_PLUGINS = [useAutoPagination(), useBlockTracking(), usePollingLive()]

export function getExecutor(
  opts: Parameters<typeof getExecutorForFusiongraph>[0] | Parameters<typeof getProxyExecutor>[0],
  ctx?: any,
): Executor {
  if ('proxy' in opts) {
    return getProxyExecutor(opts, ctx)
  }
  const { fusiongraphExecutor } = getExecutorForFusiongraph({
    transports: DEFAULT_TRANSPORTS_CONFIG,
    plugins: DEFAULT_PLUGINS as any,
    ...opts,
  })
  return fusiongraphExecutor
}

export function createServeRuntime(...args: Parameters<typeof defaultCreateServeRuntime>) {
  const [opts, ...rest] = args
  return defaultCreateServeRuntime(
    {
      transports: DEFAULT_TRANSPORTS_CONFIG,
      plugins: () => DEFAULT_PLUGINS,
      ...opts,
    },
    ...rest,
  )
}
