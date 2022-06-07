import { getBuiltGraphSDK } from '../.graphclient'

async function main() {
  const sdk = getBuiltGraphSDK({
    chainId: 'default-chain-id-for-this-sdk', // We can provide a default value here
  })
  // Second parameter is the context value
  const results = await sdk.crossChainPairs(
    {},
    {
      chainId: 'uniswap-v2', // And override it in here
    },
  )
  console.assert(results.pairs[0].chainId, 'uniswap-v2')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
