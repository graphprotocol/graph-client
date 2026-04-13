/// <reference path="./types/x402.d.ts" />
import { x402Client, wrapFetchWithPayment } from '@x402/fetch'
import { registerExactEvmScheme } from '@x402/evm/exact/client'
import { privateKeyToAccount } from 'viem/accounts'
import { CHAIN_IDS, type SupportedChain } from './chains.js'

export interface CreateGraphQueryOptions {
  endpoint: string
  privateKey?: string
  /** Payment chain. Defaults to X402_CHAIN env var or "base" */
  chain?: SupportedChain
  headers?: Record<string, string>
}

export interface GraphQLResponse<T = unknown> {
  data?: T
  errors?: Array<{ message: string; locations?: Array<{ line: number; column: number }> }>
}

/**
 * Creates a GraphQL query function with x402 payment support.
 *
 * @example
 * ```typescript
 * import { createGraphQuery } from '@graphprotocol/client-x402'
 *
 * const query = createGraphQuery({
 *   endpoint: 'https://gateway.thegraph.com/api/subgraphs/id/xxx',
 *   chain: 'base',
 * })
 *
 * const result = await query('{ pairs(first: 5) { id } }')
 * ```
 */
export function createGraphQuery(options: CreateGraphQueryOptions) {
  const { endpoint, privateKey, headers = {} } = options
  const chain = options.chain || (process.env.X402_CHAIN as SupportedChain) || 'base'

  const key = privateKey || process.env.X402_PRIVATE_KEY
  if (!key) {
    throw new Error('Private key required: pass privateKey option or set X402_PRIVATE_KEY env var')
  }

  // Validate chain
  if (!CHAIN_IDS[chain]) {
    throw new Error(`Unsupported chain "${chain}". Use "base" or "base-sepolia".`)
  }

  // Set up x402 client
  const account = privateKeyToAccount(key as `0x${string}`)
  const client = new x402Client()
  registerExactEvmScheme(client, { signer: account })
  const fetchWithPayment = wrapFetchWithPayment(globalThis.fetch, client)

  // Return query function
  return async function query<T = unknown>(
    queryString: string,
    variables?: Record<string, unknown>,
  ): Promise<GraphQLResponse<T>> {
    const response = await fetchWithPayment(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify({ query: queryString, variables }),
    })

    if (!response.ok) {
      const text = await response.text()
      throw new Error(`GraphQL request failed: ${response.status} ${response.statusText}\n${text}`)
    }

    return response.json()
  }
}
