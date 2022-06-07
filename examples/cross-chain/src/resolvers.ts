import { Resolvers } from '../.graphclient'

export const resolvers: Resolvers = {
  Pair: {
    chainId: (root, args, context: any, info) => context.chainId || 'uniswap-v2', // The value we provide in the config
  },
}
