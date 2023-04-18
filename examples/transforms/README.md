### The Graph Client / Transforms

This examples indicates the use of the transforms property.

The graph client has some built-in transforms:

[Block Tracking](https://github.com/graphprotocol/graph-client#block-tracking)
[Auto Pagination](https://github.com/graphprotocol/graph-client#automatic-pagination)

GraphQL Mesh also features more transforms which you can read about [here.](https://the-guild.dev/graphql/mesh/docs/transforms/transforms-introduction)

The example here is using the following tools/concepts:

- The Graph Client CLI for generating artifacts
- GraphQL Mesh prefix transform (https://the-guild.dev/graphql/mesh/docs/transforms/prefix)
- GraphQL Codegen for type safe SDK

### Getting Started

To run this example, make sure to install the dependencies in the root of the monorepo, and then run this example:

```
# In the root directory
$ yarn install
$ yarn build
$ cd examples/transforms/
$ yarn start
```

### Building

You can also build the client sdk by running: `yarn build`.

### GraphQL Mesh Transforms Usage

To run any transforms on your project from graphql mesh you will need to install the transforms respective dependency. For eg. in this project the prefix transform is used which requires the `@graphql-mesh/transform-prefix` dependency.

Install it by running:

With npm

```
npm i -D @graphql-mesh/transform-prefix
```

With yarn

```
yarn add -D @graphql-mesh/transform-prefix
```

With pnpm

```
pnpm add -D @graphql-mesh/transform-prefix
```
