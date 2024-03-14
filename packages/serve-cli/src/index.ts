import { runServeCLI } from '@graphql-mesh/serve-cli';

function runGraphClientServeCLI() {
    return runServeCLI({
        defaultConfigFileName: 'graphclient.config.ts',
        defaultConfig: {
            fusiongraph: 'fusiongraph.ts',
        },
        productName: 'GraphClient',
    })
}

export {
    defineConfig,
} from '@graphql-mesh/serve-cli';

export { runGraphClientServeCLI as runServeCLI };
