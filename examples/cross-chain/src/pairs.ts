import { Resolvers } from '../.graphclient/index'

const resolvers: Resolvers = {
  Query: {
    async pairs(root, args, context, info) {
      const responses = await Promise.all([
        context.Chain1.Query.Chain1_pairs({
          root,
          args,
          context,
          info,
        }),
        context.Chain2.Query.Chain2_pairs({
          root,
          args,
          context,
          info,
        }),
      ])
      return responses.flat()
    },
  },
}

export default resolvers
