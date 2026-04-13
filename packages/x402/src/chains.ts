export const CHAIN_IDS = {
  base: 'eip155:8453',
  'base-sepolia': 'eip155:84532',
} as const

export type SupportedChain = keyof typeof CHAIN_IDS

export function getChainId(chain: SupportedChain): string {
  const id = CHAIN_IDS[chain]
  if (!id) {
    throw new Error(`x402: unsupported chain "${chain}". Use "base" or "base-sepolia".`)
  }
  return id
}
