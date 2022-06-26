# @graphprotocol/client-block-tracking

## 1.0.2

### Patch Changes

- bb5df03: Respect the changes done by other transforms

## 1.0.1

### Patch Changes

- ed023e3: 'process' definition is not needed anymore

## 1.0.0

### Major Changes

- 3e343ee: Preparations for V1 release

## 0.0.4

### Patch Changes

- f360681: Bump internal Mesh packages

## 0.0.3

### Patch Changes

- 6675626: Bump versions

## 0.0.2

### Patch Changes

- 71e4ea8: Bump internal Mesh packages

## 0.0.1

### Patch Changes

- 063dc0b: #### Block Tracking Transform

  `graph-client` implements automatic block tracking using `number_gte` filter of `graph-node`. This automates the process [of fetching and tracking the block number of entites](https://thegraph.com/docs/en/developer/distributed-systems/#polling-for-updated-data).

  This feature is implemented in `@graphprotocol/client-block-tracking` and installed automatically with the `graph-client` CLI package.

  ### Usage Example

  ```yaml
  # .graphclientrc.yml
  sources:
    - name: uniswap
      handler:
        graphql:
          endpoint: https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2
      transforms: # The following section will make sure to automatically fetch the block information, and then use it for tracking in future queries.
        - blockTracking:
            validateSchema: true # Validates that the schema source actually contains _meta and input block filters.
  ```
