import { runComposeCLI } from '@graphql-mesh/compose-cli'

function runGraphClientComposeCLI() {
  return runComposeCLI({
    defaultConfigFileName: 'graphclient.config.ts',
    defaultFusiongraphFileName: './fusiongraph.ts',
    productName: 'GraphClient Compose CLI',
  })
}

export {
  defineConfig,
  loadGraphQLHTTPSubgraph,
  createRenameTypeTransform,
  createRenameFieldTransform,
} from '@graphql-mesh/compose-cli'
export { runGraphClientComposeCLI as runComposeCLI }
