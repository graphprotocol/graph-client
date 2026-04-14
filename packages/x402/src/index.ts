/// <reference path="./types/x402.d.ts" />
import { x402Client, wrapFetchWithPayment } from '@x402/fetch'
import { registerExactEvmScheme } from '@x402/evm/exact/client'
import { privateKeyToAccount } from 'viem/accounts'
import { CHAIN_IDS, type SupportedChain } from './chains.js'

export { CHAIN_IDS, type SupportedChain } from './chains.js'
export { createGraphQuery, type CreateGraphQueryOptions, type GraphQLResponse } from './createGraphQuery.js'

interface MeshContext {
  config?: {
    x402PrivateKey?: string
    x402Chain?: SupportedChain
  }
}

// Cache wrapped fetch
let wrappedFetch: typeof globalThis.fetch | null = null
let cachedPrivateKey: string | null = null

function createWrappedFetch(privateKey: string): typeof globalThis.fetch {
  const account = privateKeyToAccount(privateKey as `0x${string}`)
  const client = new x402Client()
  registerExactEvmScheme(client, { signer: account })
  return wrapFetchWithPayment(globalThis.fetch, client)
}

/**
 * x402-enabled fetch function for use with GraphQL Mesh customFetch.
 *
 * Configuration (in order of priority):
 * 1. execute() context: config.x402PrivateKey, config.x402Chain
 * 2. Environment variables: X402_PRIVATE_KEY, X402_CHAIN
 *
 * Default chain is "base" if not specified.
 */
export async function fetch(
  url: string | URL | Request,
  options?: RequestInit,
  context?: MeshContext,
): Promise<Response> {
  // Chain priority: context > env > default
  const chain = context?.config?.x402Chain || (process.env.X402_CHAIN as SupportedChain) || 'base'

  if (!CHAIN_IDS[chain]) {
    throw new Error(`x402: Invalid chain "${chain}". Use "base" or "base-sepolia".`)
  }

  // Get private key from: context > env
  const privateKey = context?.config?.x402PrivateKey || process.env.X402_PRIVATE_KEY

  if (!privateKey) {
    throw new Error('x402: Private key required. Set X402_PRIVATE_KEY env var or pass via execute() context.')
  }

  // Create wrapped fetch lazily, recreate if private key changes
  if (!wrappedFetch || cachedPrivateKey !== privateKey) {
    wrappedFetch = createWrappedFetch(privateKey)
    cachedPrivateKey = privateKey
  }

  return wrappedFetch(url, options)
}

// Default export for mesh compatibility
export default fetch
