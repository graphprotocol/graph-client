import { DocumentNode, execute, GraphQLSchema } from 'graphql'

export type RemoteSubgraphConfiguration = {
  name: string
  source: () => Promise<GraphQLSchema>
}

export type ResolvedRemoteSubgraph = {
  name: string
  schema: GraphQLSchema
}

export type TheGraphClientConfiguration = {
  subgraphs: RemoteSubgraphConfiguration[]
}

export function createTheGraphClient(configuration: TheGraphClientConfiguration) {
  let readinessPromise$: Promise<ResolvedRemoteSubgraph[]> | null = null

  const initalize = async () => {
    return await Promise.all(
      configuration.subgraphs.map<Promise<ResolvedRemoteSubgraph>>(async (subgraph) => ({
        name: subgraph.name,
        schema: await subgraph.source(),
      })),
    )
  }

  return {
    ready() {
      if (readinessPromise$ === null) {
        readinessPromise$ = initalize()
      }

      return readinessPromise$
    },
    async execute(args: { document: DocumentNode; variables?: Record<string, any> }) {
      const resolved = await initalize()

      return execute({
        schema: resolved[0].schema,
        document: args.document,
        variableValues: args.variables || {},
        contextValue: {},
      })
    },
  }
}

export type TheGraphClientInstance = ReturnType<typeof createTheGraphClient>
