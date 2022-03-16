### The Graph Client / NodeJS (TS)

This examples integrates The Graph Client with NodeJS/TypeScript usage, with 2 composed Subgraphs using [Type-Merging](https://www.graphql-tools.com/docs/schema-stitching/stitch-type-merging).

The example here is using the following tools/concepts:

- NodeJS + TypeScript
- The Graph Client CLI for generating artifacts
- [Schema-stitching type-merging](https://www.graphql-tools.com/docs/schema-stitching/stitch-type-merging)
- Client-side Compostion (more than 1 source)

### Getting Started

To run this example, make sure to install the dependencies in the root of the monorepo, build the client locally, and then run this example:

```
# In the root directory
$ yarn install
$ yarn build
$ cd examples/composition
$ yarn build-client
$ yarn start
```

### DevTools

You can also run The Graph Client DevTools by running: `yarn graphiql`.
