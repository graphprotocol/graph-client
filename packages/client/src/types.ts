import { GraphQLSchema } from 'graphql'
import { SubschemaConfig } from '@graphql-tools/delegate'

export type SourceLoader = () => Promise<GraphQLSchema | SubschemaConfig>

export type RemoteSubgraphConfiguration = {
  name: string
  source: SourceLoader
}

export type ResolvedRemoteSubgraph = {
  name: string
  schema: GraphQLSchema | SubschemaConfig
}

export type TheGraphClientConfiguration = {
  subgraphs: RemoteSubgraphConfiguration[]
  // TODO: Allow to specify a list of GraphQL-Tools transformer fuctions
  // TODO: Allow to specify here Mesh configuration
  composer?: 'naive' | ((sources: ResolvedRemoteSubgraph[]) => Promise<GraphQLSchema> | GraphQLSchema)
}

export type InitResult = {
  executableSchema: GraphQLSchema
  resolvedRemoteSubgraphs: ResolvedRemoteSubgraph[]
}
