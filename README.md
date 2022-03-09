# The Graph Client Tools

This repo is the home for [The Graph](https://thegraph.com) consumer-side tools (for both browser and NodeJS environments).

## Background

The tools provided in this repo are intended to enrich and extend the DX, and add the additional layer required for dApps in order to implemenet distributed applications.

Developers who consume data from [The Graph](https://thegraph.com) GraphQL API often needs peripherials for making data consumption easier, and also tools that allow using multiple indexers at the same time.

## Features and goals

This library is intended to simplify the network aspect of data consumption for dApps. The tools provided within this repository are intended to run at build time, in order to make execution faster and performant at runtime.

> The tools provided in this repo can be used as standalone, but you can also use it with any existing GraphQL Client!

| Status | Feature                                | Notes                                                   |
| ------ | -------------------------------------- | ------------------------------------------------------- |
| ✅     | Multiple indexers                      | based on fetch strategies                               |
| ✅     | Fetch Strategies                       | timeout, retry, fallback, race                          |
| ✅     | Build time validations & optimizations |                                                         |
| ✅     | Client-Side Composition                | with improved execution planner (based on GraphQL-Mesh) |
| ✅     | Raw Execution (standalone mode)        | without a wrapping GraphQL client                       |
| ✅     | Integration with `@apollo/client`      |                                                         |
| ✅     | Integration with `urql`                |                                                         |
| ✅     | TypeScript support                     | with built-in GraphQL Codegen and `TypedDocumentNode`   |

> You can find an [extended architecture design here](./docs/architecture.md)

## Getting Started

To get started, make sure to install [The Graph Client CLI] in your project:

```
yarn add -D @graphprotocol/client-cli
# or, with NPM:
npm install --save-dev @graphprotocol/client-cli
```

> The CLI is installed as dev dependency since we are using it to produce optimized runtime artifacts that can be loaded directly from your app!

Create a configuration file (called `.graphclientrc.yml`) and point to your GraphQL endpoints provided by The Graph, for example:

```yml
# .graphclientrc.yml
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

#### The Graph Client DevTools

The Graph Client CLI comes with a built-in GraphiQL so you can experiemnt with queries in real time.

The GraphQL schema served in that environment, is the eventual schema based on all composed Subgraphs and transformations you applied.

To start the DevTool GraphiQL, run the following command:

```
graphclient serve-dev
```

And open http://localhost:4000/ to use GraphiQL. You can now experiment with your Graph client-side GraphQL schema locally! 🥳

#### Examples

You can also refer to [examples directory in this repo](./examples/), for more advanced examples and integration examples:

- [TypeScript & React example with raw `execute` and built-in GraphQL-Codegen](./examples/execute/)
- [TS/JS Node standalone mode](./examples/node/)
- [Integration with Urql and React](./examples/urql/)
- [Integration with Apollo-Client and React](./examples/apollo/)

### Advanced Examples/Features

#### Customize Network Calls

You can customize the network execution (for example, to add authentication headers) by using `operationHeaders`:

```yaml
sources:
  - name: uniswapv2
    handler:
      graphql:
        endpoint: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
        operationHeaders:
          Authorization: Bearer MY_TOKEN
```

You can also use runtime variables if you wish, and specifiy it in a declerative way:

```yaml
sources:
  - name: uniswapv2
    handler:
      graphql:
        endpoint: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
        operationHeaders:
          Authorization: Bearer {context.config.apiToken}
```

Then, you can specify that when you execute operations:

```ts
client.execute(myQuery, myVariables, {
  config: {
    apiToken: 'MY_TOKEN',
  },
})
```

> You can find the [complete documentation for the `graphql` handler here](https://www.graphql-mesh.com/docs/handlers/graphql#config-api-reference).

#### Environment Variables Inteporlation

If you wish to use environment variables in your The Graph Client configuration file, you can use interpolation with `env` helper:

```yaml
sources:
  - name: uniswapv2
    handler:
      graphql:
        endpoint: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
        operationHeaders:
          Authorization: Bearer {env.MY_API_TOKEN} # runtime
```

Then, make sure to have `MY_API_TOKEN` defined when you run `process.env` at runtime.

You can also specify environment varibles to be filled at build time (during `graphclient build` run) by using the env-var name directly:

```yaml
sources:
  - name: uniswapv2
    handler:
      graphql:
        endpoint: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
        operationHeaders:
          Authorization: Bearer ${MY_API_TOKEN} # build time
```

> You can find the [complete documentation for the `graphql` handler here](https://www.graphql-mesh.com/docs/handlers/graphql#config-api-reference).

#### Fetch Strategies and multiple Graph indexers

It's a common practice to use more than one indexer in dApps, so to achieve the ideal experience with The Graph, you can specify several `fetch` strategies in order to make it more smooth and simple.

All `fetch` strategies can be combined together to create the ultimate execution flow.

<details>
 <summary>`retry`</summary>

The `retry` mechanism allow you to specify the retry attempts for a single GraphQL endpoint/source.

The retry flow will execute in both conditions: a netword error, or due to a runtime error (indexing issue/inavailability of the indexer).

```yaml
sources:
  - name: uniswapv2
    handler:
      graphql:
        endpoint: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
        retry: 2 # specify here, if you have an unstable/error prone indexer
```

</details>

<details>
 <summary>`timeout`</summary>

The `timeout` mechanism allow you to specify the `timeout` for a given GraphQL endpoint.

```yaml
sources:
  - name: uniswapv2
    handler:
      graphql:
        endpoint: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
        timeout: 5000 # 5 seconds
```

</details>

<details>
 <summary>`fallback`</summary>

The `fallback` mechanism allow you to specify use more than one GraphQL endpoint, for the same source.

This is usefull if you want to use more than one indexer for the same Subgraph, and fallback when an error/timeout happens. You can also use this strategy in order to use a custom indexer, but allow it to fallback to [The Graph Hosted Service](https://thegraph.com/hosted-service/).

```yaml
sources:
  - name: uniswapv2
    handler:
      graphql:
        strategy: fallback
        sources:
          - endpoint: https://bad-uniswap-v2-api.com
            retry: 2
            timeout: 5000
          - endpoint: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
```

</details>

<details>
 <summary>`race`</summary>

The `race` mechanism allow you to specify use more than one GraphQL endpoint, for the same source, and race on every execution.

This is usefull if you want to use more than one indexer for the same Subgraph, and allow both sources to race and get the fastest response from all specified indexers.

```yaml
sources:
  - name: uniswapv2
    handler:
      graphql:
        strategy: race
        sources:
          - endpoint: https://bad-uniswap-v2-api.com
          - endpoint: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
```

</details>

#### Client-side Composition

The Graph Client has built-in support for client-side GraphQL Composition (powered by [GraphQL-Tools Schema-Stitching](https://www.graphql-tools.com/docs/schema-stitching/stitch-combining-schemas)).

You can leverage this feature in order to create a single GraphQL layer from multiple Subgraphs, deployed on multiple indexers.

> 💡 Tip: You can compose any GraphQL sources, and not only Subgraphs!

Trivial composition can be done by adding more than one GraphQL source to your `.graphclientrc.yml` file, here's an example:

```yml
sources:
  - name: uniswapv2
    handler:
      graphql:
        endpoint: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
  - name: compoundv2
    handler:
      graphql:
        endpoint: https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2
```

As long as there a no conflicts across the composed schemas, you can compose it, and then run a single query to both Subgraphs:

```graphql
query myQuery {
  # this one is coming from compound-v2
  markets(first: 7) {
    borrowRate
  }
  # this one is coming from uniswap-v2
  pair(id: "0x00004ee988665cdda9a1080d5792cecd16dc1220") {
    id
    token0 {
      id
    }
    token1 {
      id
    }
  }
}
```

You can also resolve conflicts, rename parts of the schema, add custom GraphQL fields, and modify the entire execution phase.

For advanced use-cases with composition, please refer to the following resources:

- [Advanced Composition Example](./examples/composition/)
- [GraphQL-Mesh Schema transformations](https://www.graphql-mesh.com/docs/transforms/transforms-introduction)
- [GraphQL-Tools Schema-Stitching documentation](https://www.graphql-tools.com/docs/schema-stitching/stitch-combining-schemas)

#### TypeScript Support

If your project is written in TypeScript, you can leverage the power of [`TypedDocumentNode`](https://www.the-guild.dev/blog/typed-document-node) and have a fully-typed GraphQL client experience.

The standalone mode of The GraphQL, and popular GraphQL client libraries like Apollo-Client and Urql has built-in support for `TypedDocumentNode`!

The Graph Client CLI comes with a ready-to-use configuration for [GraphQL Code Generator](https://www.graphql-code-generator.com/) and it can generated `TypedDocumentNode` based on your GraphQL operations.

To get started, define your GraphQL operations in your application code, and point to those files using the `documents` section of `.graphclientrc.yml`:

```yml
sources:
  -  # ... your Subgraphs/GQL sources here

documents:
  - ./src/example-query.graphql
```

You can also use Glob expressions, or even point to code files, and the CLI will find your GraphQL queries automatically:

```yml
documents:
  - './src/**/*.graphql'
  - './src/**/*.{ts,tsx,js,jsx}'
```

Now, run the GraphQL CLI `build` command again, the CLI will generate a `TypedDocumentNode` object under `.graphclient` for every operation found.

> Make sure to name your GraphQL operations, otherwise it will be ignored!

For example, a query called `query ExampleQuery` will have the corresponding `ExampleQueryDocument` generated in `.graphclient`. You can now import it and use that for your GraphQL calls, and you'll have a fully typed experince without writing or specifying any TypeScript manually:

```ts
import { ExampleQueryDocument } from '../.graphclient'

async function main() {
  const client = await client$
  // "result" variable is fully typed, and represent the exact structure of the fields you selected in your query.
  const result = await client.execute(ExampleQueryDocument, {})
  console.log(result)
}
```

> You can find a [TypeScript project example here](./examples/urql/).

## License

MIT
