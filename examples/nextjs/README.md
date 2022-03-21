### The Graph Client / Next.js

This examples integrates The Graph Client with [Next.js](https://nextjs.org/).

The example here is using the following tools/concepts:

- The Graph Client CLI for generating artifacts
- Client-side Compostion (more than 1 source)
- The Graph Client Typed SDK for consuming the Graph API in Next.js application
- `next` CLI for building the frontend project

### Getting Started

To run this example, make sure to install the dependencies in the root of the monorepo, build the client locally, and then run this example:

```
# In the root directory
$ yarn install
$ yarn build
$ cd examples/nextjs/
$ yarn build-client
$ yarn dev
```

### DevTools

You can also run The Graph Client DevTools by running: `yarn graphiql`.
