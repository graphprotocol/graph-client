import { Resolvers, MeshContext } from '../.graphclient'

export const resolvers: Resolvers = {
  Rebase: {
    chainName: (root, args, context, info) => root.chainName || context.chainName || 'bentobox-avalanche', // The value we provide in the config
  },
  Query: {
    crossRebases: async (root, args, context, info) =>
      Promise.all(
        args.chainNames.map((chainName) =>
          context.Sushiswap.Query.rebases({
            root,
            args,
            context: {
              ...context,
              chainName,
            },
            info,
          }).then((rebases) =>
            rebases.map((rebase) => ({
              ...rebase,
              chainName,
            })),
          ),
        ),
      ).then((allRebases) => allRebases.flat()),
  },
}
