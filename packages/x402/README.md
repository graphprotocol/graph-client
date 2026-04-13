# @graphprotocol/client-x402

Query The Graph's gateway with automatic payment handling using the [x402 protocol](https://github.com/coinbase/x402), no API key required!

## Installation

```bash
npm install @graphprotocol/client-x402
```

## Environments

| Environment  | Gateway endpoint                                | Payment network |
| ------------ | ----------------------------------------------- | --------------- |
| `production` | `https://gateway.thegraph.com/api/x402`         | `base`          |
| `testnet`    | `https://testnet.gateway.thegraph.com/api/x402` | `base-sepolia`  |

## Usage

Three ways to use this package, from simplest to most complete:

### 1. CLI

For quick queries, testing, or shell scripts. No code required.

```bash
export X402_PRIVATE_KEY=0xabc123...

graphclient-x402 "{ pairs(first: 5) { id } }" \
  --endpoint https://gateway.thegraph.com/api/x402/subgraphs/id/<SUBGRAPH_ID> \
  --chain base
```

### 2. Programmatic

For scripts, bots, or simple integrations. No build step, no types.

```typescript
import { createGraphQuery } from '@graphprotocol/client-x402'

const query = createGraphQuery({
  endpoint: 'https://gateway.thegraph.com/api/x402/subgraphs/id/<SUBGRAPH_ID>',
  chain: 'base',
})

const result = await query('{ pairs(first: 5) { id } }')
console.log(result.data)
```

### 3. Typed SDK

For applications that want full type safety. Uses the `@graphprotocol/client-cli` build workflow to generate a typed SDK from your schema.

**Install:**

```bash
npm install @graphprotocol/client-cli @graphprotocol/client-x402
```

**Configure `.graphclientrc.yml`:**

```yaml
customFetch: '@graphprotocol/client-x402'

sources:
  - name: uniswap
    handler:
      graphql:
        endpoint: https://gateway.thegraph.com/api/x402/subgraphs/id/<SUBGRAPH_ID>

documents:
  - ./src/queries/*.graphql
```

**Define your queries in `src/queries/pairs.graphql`:**

```graphql
query GetPairs($first: Int!) {
  pairs(first: $first) {
    id
    token0 {
      symbol
    }
    token1 {
      symbol
    }
  }
}
```

**Build:**

```bash
export X402_PRIVATE_KEY=0xabc123...
export X402_CHAIN=base
graphclient build
rm .graphclient/package.json  # Required: mesh generates broken ESM exports
```

**Use with full type safety:**

```typescript
import { execute, GetPairsDocument } from './.graphclient'

const result = await execute(GetPairsDocument, { first: 5 })
//    ^ fully typed based on your schema and query
```

## Configuration

All configuration is via environment variables:

```bash
export X402_PRIVATE_KEY=0x...        # Required: private key for signing payments
export X402_CHAIN=base               # Optional: "base" (default) or "base-sepolia"
```

### Private Key

Required for signing payment permits. Can also be provided via:

- `privateKey` option in `createGraphQuery()` (Mode 2)
- `config.x402PrivateKey` in `execute()` context (Mode 3)

### Chain

The payment chain can also be specified via:

- `chain` option in `createGraphQuery()` (Mode 2)
- `--chain` flag in CLI (Mode 1)
