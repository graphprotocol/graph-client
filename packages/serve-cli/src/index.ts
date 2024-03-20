import { DEFAULT_PLUGINS } from '@graphprotocol/client-runtime'
import { runServeCLI } from '@graphql-mesh/serve-cli'
import { join } from 'path'

function runGraphClientServeCLI() {
  return runServeCLI({
    defaultConfigFileName: 'graphclient.config.ts',
    defaultConfig: {
      fusiongraph: join(process.cwd(), 'fusiongraph.ts'),
      plugins: () => DEFAULT_PLUGINS,
    },
    productName: 'GraphClient',
  })
}

export { defineConfig } from '@graphql-mesh/serve-cli'

export { runGraphClientServeCLI as runServeCLI }
