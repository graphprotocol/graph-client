/**
 * Example: Programmatic usage with createGraphQuery
 *
 * For scripts, bots, or simple integrations. No build step, no types.
 *
 * Prerequisites:
 *   npm install @graphprotocol/client-x402
 *
 * Usage:
 *   export X402_PRIVATE_KEY=0x...
 *   export X402_CHAIN=base-sepolia
 *   npx tsx programmatic.ts <endpoint> '<query>'
 *
 * Example:
 *   npx tsx programmatic.ts http://localhost:7700/api/x402/deployments/id/Qm... '{ indexers { id } }'
 */

import { createGraphQuery } from '@graphprotocol/client-x402'

const endpoint = process.argv[2]
const queryString = process.argv[3]

if (!process.env.X402_PRIVATE_KEY) {
  console.error('Error: X402_PRIVATE_KEY is required')
  process.exit(1)
}

if (!process.env.X402_CHAIN) {
  console.error('Error: X402_CHAIN is required (base or base-sepolia)')
  process.exit(1)
}

if (!endpoint || !queryString) {
  console.error("Usage: npx tsx programmatic.ts <endpoint> '<query>'")
  process.exit(1)
}

const query = createGraphQuery({
  endpoint,
  chain: process.env.X402_CHAIN as 'base' | 'base-sepolia',
})

const result = await query(queryString)
console.log(JSON.stringify(result.data, null, 2))
