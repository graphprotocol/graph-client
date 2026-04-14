#!/bin/bash
# Example: Query a paid subgraph endpoint using the CLI
#
# Prerequisites:
#   npm install -g @graphprotocol/client-x402
#
# Usage:
#   export X402_PRIVATE_KEY=0x...
#   export X402_CHAIN=base-sepolia
#   ./cli.sh <endpoint> '<query>'
#
# Example:
#   ./cli.sh http://localhost:7700/api/x402/deployments/id/Qm... '{ indexers { id } }'

set -e

if [ -z "$X402_PRIVATE_KEY" ]; then
  echo "Error: X402_PRIVATE_KEY is required"
  exit 1
fi

if [ -z "$X402_CHAIN" ]; then
  echo "Error: X402_CHAIN is required (base or base-sepolia)"
  exit 1
fi

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Usage: ./cli.sh <endpoint> '<query>'"
  exit 1
fi

graphclient-x402 "$2" \
  --endpoint "$1" \
  --chain "$X402_CHAIN"
