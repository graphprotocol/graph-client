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
    ],
  })

  await client.ready()

  const response = await client.execute({
    document: parse(/* GraphQL */ `
      {
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
