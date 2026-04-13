/**
 * Example: Typed SDK usage
 *
 * For applications that want full type safety.
 *
 * Prerequisites:
 *   npm install @graphprotocol/client-cli @graphprotocol/client-x402
 *
 * Build the SDK first:
 *   export X402_PRIVATE_KEY=0x...
 *   export X402_CHAIN=base-sepolia
 *   npx graphclient build
 *   rm .graphclient/package.json  # Required: mesh generates broken ESM exports
 *
 * Then run this file:
 *   npx tsx index.ts
 */

import { execute, GetIndexersDocument } from './.graphclient'

async function main() {
  // Execute with full type safety - result is typed based on your schema and query
  const result = await execute(GetIndexersDocument, {})

  if (result.errors) {
    console.error('GraphQL errors:', result.errors)
    return
  }

  // result.data is fully typed
  for (const indexer of result.data?.indexers ?? []) {
    console.log(`Indexer ${indexer.id}: ${indexer.stakedTokens} staked, ${indexer.allocations.length} allocations`)
  }
}

main().catch(console.error)
