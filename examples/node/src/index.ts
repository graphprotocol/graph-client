import { execute } from '../.graphclient'

async function main() {
  const response = await execute(
    /* GraphQL */ `
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
    `,
    {},
  )

  console.log(response)
}

main().catch((e) => console.error(`Failed to run example:`, e))
