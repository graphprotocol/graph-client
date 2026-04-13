#!/usr/bin/env node
import { createGraphQuery } from './createGraphQuery.js'
import { CHAIN_IDS, type SupportedChain } from './chains.js'

async function main() {
  const args = process.argv.slice(2)

  if (args.includes('--help') || args.includes('-h') || args.length === 0) {
    printHelp()
    process.exit(0)
  }

  await executeQuery(args)
}

function printHelp() {
  console.log(`
graphclient-x402 - Execute GraphQL queries with x402 payment support

Usage:
  graphclient-x402 "<query>" --endpoint <url> --chain <chain> [options]

Arguments:
  <query>              GraphQL query string (required)

Options:
  --endpoint <url>     GraphQL endpoint URL (required)
  --chain <chain>      Payment chain: "base" or "base-sepolia" (required)
  --variables <json>   Query variables as JSON string
  --help, -h           Show this help message

Environment:
  X402_PRIVATE_KEY     Private key for signing payments (required)

Examples:
  graphclient-x402 "{ pairs(first: 5) { id } }" \\
    --endpoint https://gateway.thegraph.com/api/subgraphs/id/xxx \\
    --chain base

  graphclient-x402 "query GetPairs(\$first: Int!) { pairs(first: \$first) { id } }" \\
    --endpoint https://gateway.thegraph.com/api/subgraphs/id/xxx \\
    --chain base \\
    --variables '{"first": 10}'
`)
}

async function executeQuery(args: string[]) {
  const queryString = args.find((arg) => !arg.startsWith('--')) // First non-flag argument is the query
  const endpointIdx = args.indexOf('--endpoint')
  const chainIdx = args.indexOf('--chain')
  const varsIdx = args.indexOf('--variables')

  if (!queryString) {
    console.error('Error: Query string is required')
    printHelp()
    process.exit(1)
  }

  if (endpointIdx === -1) {
    console.error('Error: --endpoint is required')
    process.exit(1)
  }

  if (chainIdx === -1) {
    console.error('Error: --chain is required')
    process.exit(1)
  }

  const endpoint = args[endpointIdx + 1]
  if (!endpoint || endpoint.startsWith('--')) {
    console.error('Error: --endpoint requires a URL')
    process.exit(1)
  }

  const chain = args[chainIdx + 1] as SupportedChain
  if (!chain || !CHAIN_IDS[chain]) {
    console.error('Error: --chain must be "base" or "base-sepolia"')
    process.exit(1)
  }

  let variables: Record<string, unknown> | undefined
  if (varsIdx !== -1) {
    const varsArg = args[varsIdx + 1]
    if (!varsArg || varsArg.startsWith('--')) {
      console.error('Error: --variables requires a JSON string')
      process.exit(1)
    }
    try {
      variables = JSON.parse(varsArg)
    } catch {
      console.error('Error: --variables must be valid JSON')
      process.exit(1)
    }
  }

  // Execute query
  try {
    const query = createGraphQuery({ endpoint, chain })
    const result = await query(queryString, variables)
    console.log(JSON.stringify(result, null, 2))
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : error)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
