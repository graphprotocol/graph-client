### The Graph Client / React Query

This examples integrates The Graph Client with [React Query](https://tanstack.com/query/latest/).

The example here is using the following tools/concepts:

- The Graph Client CLI for generating artifacts
- Client-side Compostion (more than 1 source)
- Vite-based frontend project with TypeScript
- GraphQL Codegen for type safe SDK
- [React Query](https://tanstack.com/query/latest/)

### Getting Started

To run this example, make sure to install the dependencies in the root of the monorepo, build the client locally, and then run this example:

```
# In the root directory
$ yarn install
$ yarn build
$ cd examples/react-query/
$ yarn build-client
$ yarn start
```

### DevTools

You can also run The Graph Client DevTools by running: `yarn graphiql`.
