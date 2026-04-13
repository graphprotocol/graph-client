#!/bin/bash
# Example: Query a paid subgraph endpoint using the CLI
#
# Prerequisites:
#   npm install -g @graphprotocol/client-x402
#
# Usage:
#   export X402_PRIVATE_KEY=0x...
#   ./cli.sh

# Simple query
graphclient-x402 "{ pairs(first: 5) { id } }" \
  --endpoint https://gateway.thegraph.com/api/x402/subgraphs/id/YOUR_SUBGRAPH_ID \
  --chain base

# Query with variables
graphclient-x402 'query GetPairs($first: Int!) { pairs(first: $first) { id token0 { symbol } token1 { symbol } } }' \
  --endpoint https://gateway.thegraph.com/api/x402/subgraphs/id/YOUR_SUBGRAPH_ID \
  --chain base \
  --variables '{"first": 10}'
