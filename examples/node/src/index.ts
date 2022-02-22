import { createTheGraphClient, endpoint } from '@graphprotocol/client'
import { parse } from 'graphql'

async function main() {
  const client = createTheGraphClient({
    subgraphs: [
      {
        name: 'uniswap-v2',
        source: endpoint({
          uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
        }),
      },
      {
        name: 'compound-v2',
        source: endpoint({
          uri: 'https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2',
        }),
      },
    ],
    composer: 'naive',
  })

  await client.ready()

  const response = await client.execute({
    document: parse(/* GraphQL */ `
      {
        # this one is coming from compound-v2
        markets(first: 7) {
          borrowRate
          cash
          collateralFactor
        }
        # this one is coming from uniswap-v2
        pair(id: "0x00004ee988665cdda9a1080d5792cecd16dc1220") {
          id
          token0 {
            id
            symbol
            name
          }
          token1 {
            id
            symbol
            name
          }
        }
      }
    `),
    variables: {},
  })

  console.log(response)
}

main().catch((e) => console.error(`Failed to run example:`, e))
