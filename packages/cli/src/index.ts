import { graphqlMesh } from '@graphql-mesh/cli'

export function graphqlClientCLI() {
  return graphqlMesh({
    commandName: 'graphclient',
    initialLoggerPrefix: 'GraphClient',
    configName: 'graphclient',
    artifactsDir: '.graphclient',
    serveMessage: 'Serving Composed Graph',
    playgroundTitle: 'The GraphiQL',
    builtMeshFactoryName: 'getBuiltGraphClient',
    builtMeshSDKFactoryName: 'getBuiltGraphSDK',
  })
}
