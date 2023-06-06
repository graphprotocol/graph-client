# `@live` queries in `graph-client`

Graph-Client implements a custom `@live` directive that can make every GraphQL query work with real-time data.

## Getting Started

Start by adding the following configuration to your `.graphclientrc.yml` file:

```yaml
plugins:
  - pollingLive:
      defaultInterval: 1000
```

## Usage

Set the default update interval you wish to use, and then you can apply the following GraphQL `@directive` over your GraphQL queries:

```graphql
query ExampleQuery @live {
  transactions(first: 2, orderBy: timestamp, orderDirection: desc) {
    id
    blockNumber
    timestamp
  }
}
```

Or, you can specify a per-query interval:

```graphql
query ExampleQuery @live(interval: 5000) {
  transactions(first: 2, orderBy: timestamp, orderDirection: desc) {
    id
  }
}
```

## Integrations

Since the entire network layer (along with the `@live` mechanism) is implemented inside `graph-client` core, you can use Live queries with every GraphQL client (such as Urql or Apollo-Client), as long as it supports streame responses (`AsyncIterable`).

No additional setup is required for GraphQL clients cache updates.
