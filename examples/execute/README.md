### The Graph Client Standalone mode

This example shows a usage of The Graph Client in a Vite app, without any GraphQL client.

Execution is done in `fetch`-style, where you can just send a query and get a fully-typed result.

The example here is using the following tools/concepts:

- NodeJS + TypeScript
- The Graph Client CLI for generating artifacts
- Client-side Compostion (more than 1 source)
- Vite-based frontend project with TypeScript

### Getting Started

To run this example, make sure to install the dependencies in the root of the monorepo, build the client locally, and then run this example:

```
# In the root directory
$ yarn install
$ yarn build
$ cd examples/execute
$ yarn build-client
$ yarn start
```

### DevTools

You can also run The Graph Client DevTools by running: `yarn graphiql`.
