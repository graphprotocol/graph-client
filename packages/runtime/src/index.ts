
import { createServeRuntime as defaultCreateServeRuntime } from '@graphql-mesh/serve-runtime';
import { TransportsOption, getExecutorForFusiongraph as defaultGetExecutorForFusiongraph } from '@graphql-mesh/fusion-runtime';
import { getSubgraphExecutor } from '@graphql-mesh/transport-http';
import { useAutoPagination } from '@graphprotocol/client-auto-pagination';
import { useBlockTracking } from '@graphprotocol/client-block-tracking';
import usePollingLive from '@graphprotocol/client-polling-live';

export const DEFAULT_TRANSPORTS_CONFIG = {
    http: { getSubgraphExecutor } as any,
} as TransportsOption;

export const DEFAULT_PLUGINS = [
    useAutoPagination(),
    useBlockTracking(),
    usePollingLive(),
]

export function getExecutorForFusiongraph(...args: Parameters<typeof defaultGetExecutorForFusiongraph>) {
    const [opts, ...rest] = args;
    const { fusiongraphExecutor } = defaultGetExecutorForFusiongraph({
        transports: DEFAULT_TRANSPORTS_CONFIG,
        plugins: DEFAULT_PLUGINS as any,
        ...opts,
    }, ...rest);
    return fusiongraphExecutor;
}

export function createServeRuntime(...args: Parameters<typeof defaultCreateServeRuntime>) {
    const [opts, ...rest] = args;
    return defaultCreateServeRuntime({
        transports: DEFAULT_TRANSPORTS_CONFIG,
        plugins: () => DEFAULT_PLUGINS,
        ...opts,
    }, ...rest);
}