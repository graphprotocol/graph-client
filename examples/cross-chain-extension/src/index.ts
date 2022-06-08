import { getBuiltGraphSDK } from '../.graphclient'

// Cross Chain Call from additional type definitions and resolvers
async function main() {
  const sdk = getBuiltGraphSDK()
  // Second parameter is the context value
  const results = await sdk.CrossRebasesExample({
    chainNames: ['bentobox-avalanche', 'bentobox-bsc'],
  })

  console.table(results.crossRebases)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
