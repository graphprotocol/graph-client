import { getBuiltGraphSDK } from '../.graphclient'

async function main() {
  const sdk = getBuiltGraphSDK({
    chainName: 'bentobox-bsc', // We can provide a default value here
  })
  // Second parameter is the context value
  const results = await Promise.all([
    sdk
      .RebasesExample(
        {},
        {
          chainName: 'bentobox-avalanche', // And override it in here
        },
      )
      .then((data) => data.rebases),
    sdk.RebasesExample().then((data) => data.rebases),
  ])

  console.table(results.flat())
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
