import { createTheGraphClient, createExecutor } from '@graphprotocol/client'

async function main() {
  const client = createTheGraphClient({
    subgraphs: [
      {
        name: 'uniswap-v2',
        executor: createExecutor(
          'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
        ),
      },
    ],
  })
}

main().catch((e) => console.error(`Failed to run example:`, e))
