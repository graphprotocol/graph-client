### The Graph Client / Apollo Client

This examples integrates The Graph Client with [Apollo Client (v3)](https://github.com/apollographql/apollo-client).

The example here is using the following tools/concepts:

- The Graph Client CLI for generating artifacts
- Client-side Compostion (more than 1 source)
- Vite-based frontend project with TypeScript
- GraphQL Codegen for improved TypeScript support with GraphQL and `TypedDocumentNode`
- `@apollo/client` v3

### Getting Started

To run this example, make sure to install the dependencies in the root of the monorepo, build the client locally, and then run this example:

```
# In the root directory
$ yarn install
$ yarn build
$ cd examples/apollo/
$ yarn start
```

### DevTools

You can also run The Graph Client DevTools by running: `yarn graphiql`.
