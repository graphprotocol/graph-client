# @graphprotocol/client-auto-pagination

## 0.0.6

### Patch Changes

- f360681: Bump internal Mesh packages

## 0.0.5

### Patch Changes

- 6675626: Bump versions

## 0.0.4

### Patch Changes

- 9d71ded: Respect other arguments while creating underlying pagination selections
- 9d71ded: Use lastID if skip exceeds the limit

## 0.0.3

### Patch Changes

- 571abf5: fix(auto-pagination): handle multiple fields correctly

## 0.0.2

### Patch Changes

- 71e4ea8: Bump internal Mesh packages

## 0.0.1

### Patch Changes

- 063dc0b: #### Auto Pagination Transform

  `graph-client` implements automatic pagination using `first:` and `after:` filters of `graph-node`.

  At the moment, `graph-node` allow fetching only 1000 records per query. This transfomer allow you to run queries with any limit, and the breaks it automatically to multiple concurrent requests, then merges the responses into a single response.

  This feature is implemented in `@graphprotocol/client-auto-pagination` and installed automatically with the `graph-client` CLI package.

  ### Usage Example

  ```yaml
  # .graphclientrc.yml
  sources:
    - name: uniswap
      handler:
        graphql:
          endpoint: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
      transforms:
        - autoPagination:
            validateSchema: true # Validates that the schema source actually contains the required input filters.
            limitOfRecords: 1000 # Default is 1000, you can change if you indexer has different configuration in GRAPH_GRAPHQL_MAX_FIRST var.
  ```
