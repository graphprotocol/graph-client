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
 *   npx tsx programmatic.ts
 */

import { createGraphQuery } from '../src/index.js'

const SUBGRAPH_DEPLOYMENT_ID = process.env.SUBGRAPH_ID ?? 'QmXU9FEf1tUwSjsnGGsuvMHFmGq3CeEi1RiWrNXSQXzkAi'
const ENDPOINT = process.env.ENDPOINT ?? 'http://localhost:7700/api/x402/deployments/id'
const CHAIN = process.env.CHAIN === 'base' ? 'base' : 'base-sepolia'

const query = createGraphQuery({
  endpoint: `${ENDPOINT}/${SUBGRAPH_DEPLOYMENT_ID}`,
  chain: CHAIN,
})

//Untyped response
const result = await query('{ indexers { id stakedTokens allocations { id } } }')
console.log(result.data)
