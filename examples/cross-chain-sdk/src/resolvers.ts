import { Resolvers, MeshContext } from '../.graphclient'

export const resolvers: Resolvers = {
  Rebase: {
    chainName: (root, args, context, info) => context.chainName || 'bentobox-avalanche', // The value we provide in the config
  },
}
