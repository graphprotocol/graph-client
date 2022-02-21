import { createTheGraphClient } from '@graphprotocol/client'

async function main() {
  const client = createTheGraphClient({})
}

main().catch((e) => console.error(`Failed to run example:`, e))
