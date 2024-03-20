import { getExecutor } from '@graphprotocol/client-runtime'
import fusiongraph from '../fusiongraph'
import { parse } from 'graphql'

const executor = getExecutor({
  fusiongraph,
})

async function main() {
  const response = await executor({
    document: parse(/* GraphQL */ `
      fragment UserFields on User {
        # Shared unique identifier field
        id
        # Field from uniswap source
        ERC721tokens(first: 1001) {
          # Testing auto pagination by exceeding the limit of 1000
          id
          uri
        }
        # Field from nft source
        liquidityPositions(first: 1) {
          id
        }
      }

      query ExampleQuery {
        # Get base entity from nft source
        account(id: "0x72ba1965320ab5352fd6d68235cc3c5306a6ffa2") {
          ...UserFields
        }
        # Get base entity from uniswap source
        # user(id: "0x72ba1965320ab5352fd6d68235cc3c5306a6ffa2") {
        #  ...UserFields
        #}
      }
    `),
  })

  if (Symbol.asyncIterator in response) {
    throw new Error('Unexpected async iterator response')
  }

  if ('errors' in response && response.errors?.length) {
    for (const error of response.errors) {
      console.error(error.message)
    }
  } else {
    console.log(`
      Account: ${response.data?.account.id} has
        ${response.data?.account.ERC721tokens.length} ERC721 tokens and
        ${response.data?.account.liquidityPositions.length} liquidity positions
    `)
  }
}

main().catch((e) => console.error(`Failed to run example:`, e))
