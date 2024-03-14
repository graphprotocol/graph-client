import { getExecutorForFusiongraph } from "@graphprotocol/client-runtime";
import fusiongraph from '../fusiongraph';
import { parse } from "graphql";

const executor = getExecutorForFusiongraph({
  fusiongraph,
});

async function main() {
  const response = await executor({
    document: parse(/* GraphQL */ `
      fragment UserFields on User {
        # Shared unique identifier field
        id
        # Field from uniswap source
        tokens(first: 1) {
        id
        uri
          registry {
          id
        }
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
        user(id: "0x72ba1965320ab5352fd6d68235cc3c5306a6ffa2") {
      ...UserFields
    }
      }
    `)
  })

  console.log(response)
}

main().catch((e) => console.error(`Failed to run example:`, e))
