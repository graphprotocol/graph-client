import { Resolvers, MeshContext } from '../.graphclient'

export const resolvers: Resolvers = {
  Rebase: {
    // chainName can exist already in root as we pass it in the other resolver
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
            // We send chainName here so we can take it in the resolver above
            rebases.map((rebase) => ({
              ...rebase,
              chainName,
            })),
          ),
        ),
      ).then((allRebases) => allRebases.flat()),
  },
}
