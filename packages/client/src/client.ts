import { DocumentNode, execute, GraphQLSchema } from 'graphql'
import { stitchSchemas } from '@graphql-tools/stitch'
import { InitResult, ResolvedRemoteSubgraph, TheGraphClientConfiguration } from './types'

async function compose(
  composer: TheGraphClientConfiguration['composer'],
  sources: ResolvedRemoteSubgraph[],
): Promise<GraphQLSchema> {
  if (!composer || composer === 'naive') {
    return stitchSchemas({
      subschemas: sources.map((r) => r.schema),
    })
  } else if (typeof composer === 'function') {
    return composer(sources)
  }

  throw new Error('Composer not implemented')
}

async function initalize(configuration: TheGraphClientConfiguration): Promise<InitResult> {
  const resolvedRemoteSubgraphs = await Promise.all(
    configuration.subgraphs.map<Promise<ResolvedRemoteSubgraph>>(async (subgraph) => ({
      name: subgraph.name,
      schema: await subgraph.source(),
    })),
  )

  const composedSchema = await compose(configuration.composer, resolvedRemoteSubgraphs)

  return {
    resolvedRemoteSubgraphs,
    executableSchema: composedSchema,
  }
}

export function createTheGraphClient(configuration: TheGraphClientConfiguration) {
  let readinessPromise$: Promise<InitResult> | null = null

  return {
    ready() {
      if (readinessPromise$ === null) {
        readinessPromise$ = initalize(configuration)
      }

      return readinessPromise$
    },
    async execute(args: { document: DocumentNode; variables?: Record<string, any> }) {
      const resolved = await initalize(configuration)

      return execute({
        schema: resolved.executableSchema,
        document: args.document,
        variableValues: args.variables || {},
        contextValue: {},
      })
    },
  }
}

export type TheGraphClientInstance = ReturnType<typeof createTheGraphClient>
