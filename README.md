# The Graph Client Tools

This repo is the home for [The Graph](https://thegraph.com) consumer-side tools (for both browser and NodeJS environments).

## Background

The tools provided in this repo are intended to enrich and extend the DX, and add the additional layer required for dApps in order to implemenet distributed applications.

Developers who consume data from [The Graph](https://thegraph.com) GraphQL API often needs peripherials for making data consumption easier, and also tools that allow using multiple indexers at the same time.

## Features and goals

This library is intended to simplify the network aspect of data consumption for dApps. The tools provided within this repository are intended to run at build time, in order to make execution faster and performant at runtime.

> The tools provided in this repo can be used as standalone, but you can also use it with any existing GraphQL Client!

| Status | Feature                            | Notes                                               |
| ------ | ---------------------------------- | --------------------------------------------------- |
| ✅     | Multiple Indexers                  | Based on advanced fetch strategies                  |
| ✅     | Fetch Strategies                   | retry, fallback, race                               |
| ✅     | Raw "execute"                      | standalone mode                                     |
| ✅     | Build time validations             |                                                     |
| ✅     | Runtime optimizations              |                                                     |
| ✅     | Client-side Composition            | with improved query planner (based on GraphQL-Mesh) |
| ✅     | Integration with `graphql-request` |                                                     |
| ✅     | Integration with `@apollo/client`  |                                                     |
| ✅     | Integration with `urql`            |                                                     |

> You can find an [extended architecture design here](./docs/architecture.md)

## Getting Started

To get started, make sure to install [The Graph Client CLI] in your project:

```
yarn add -D @graphprotocol/client-cli
# or, with NPM:
npm install --save-dev @graphprotocol/client-cli
```

> The CLI is installed as dev dependency since we are using it to produce optimized runtime artifacts that can be loaded directly from your app!

Create a configuration file, and point to your GraphQL endpoints provided by The Graph, for example:

```yml
sources:
  - name: uniswapv2
    handler:
      graphql:
        endpoint: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
```

Now, create a runtime artifact by running The Graph Client CLI:

```
graphclient build
```

> Note: you need to run this with `yarn` prefix, or add that as a script in your `package.json`.

This should produce a ready-to-use standalone `execute` function, that you can use for runnning your application GraphQL operations, you should have an output similar to the following:

```
GraphClient: Cleaning existing artifacts
GraphClient: Reading the configuration
🕸️: Generating the unified schema
🕸️: Generating artifacts
🕸️: Generating index file in TypeScript
🕸️: Writing index.ts for ESM to the disk.
🕸️: Cleanup
🕸️: Done! => .graphclient
```

Now, the `.graphclient` artifact is generated for you, and you can import it directly from your code, and run your queries:

```ts
import { getBuiltGraphClient } from '../.graphclient'

// The produced artifact is a Promise, you should await it once, and then it's good to go.
const client$ = getBuiltGraphClient()

const myQuery = gql`
  query pairs {
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
`

async function main() {
  const client = await client$
  const result = await client.execute(myQuery, {})
  console.log(result)
}

main()
```

You can also refer to [examples directory in this repo](./examples/), for more advanced examples and integration examples:

- [TypeScript & React example with raw `execute` and built-in GraphQL-Codegen](./examples/execute/)
- [TS/JS Node standalone mode](./examples/node/)
- [Integration with Urql and React](./examples/urql/)
- [Integration with Apollo-Client and React](./examples/apollo/)

## Key Features

### Fetch Strategies and multiple Graph indexers

### Client-side Composition

### TypeScript Support

## License

MIT
