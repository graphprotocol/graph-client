import { execute } from '../.graphclient'

async function main() {
  const response = await execute(
    /* GraphQL */ `
      query ExampleQuery {
        # Root field is from nft
        NFT_account(id: "0x72ba1965320ab5352fd6d68235cc3c5306a6ffa2") {
          __typename
          id
          # This field is from uniswap
          liquidityPositions {
            __typename
            id
            liquidityTokenBalance
          }
        }
        # Root field is from uniswap
        UNI_user(id: "0x72ba1965320ab5352fd6d68235cc3c5306a6ffa2") {
          __typename
          id
          # This field is from nft
          tokens {
            __typename
            id
            uri
            registry {
              id
            }
          }
        }
      }
    `,
    {},
  )

  console.log(response)
}

main().catch((e) => console.error(`Failed to run example:`, e))
