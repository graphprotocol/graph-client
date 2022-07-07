import { getBuiltGraphSDK } from '../.graphclient'

// Cross Chain Call from additional type definitions and resolvers
async function main() {
  const sdk = getBuiltGraphSDK()
  // Second parameter is the context value
  const results = await sdk.CrossRebasesExample({
    protocolNames: [
      'curve-finance-ethereum',
      'balancer-v2-ethereum',
      'saddle-finance-ethereum',
      'sushiswap-ethereum',
      'balancer-v2-polygon',
      'sushiswap-polygon',
    ],

    //'uniswap-v2-ethereum' not working
    //'bancor-v3-ethereum' subgraph not ready
    //'curve-finance-polygon' subgraph not ready

    tokenIDs: ['0x6b175474e89094c44da98b954eedeac495271d0f'], //, '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599'],
  })

  console.log(JSON.stringify(results.crossLiquidityPools, null, 2))
  // table form:
  //console.table(results.crossLiquidityPools)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
