declare module '@x402/fetch' {
  export class x402Client {
    constructor()
  }

  export function wrapFetchWithPayment(fetch: typeof globalThis.fetch, client: x402Client): typeof globalThis.fetch
}

declare module '@x402/evm/exact/client' {
  import { x402Client } from '@x402/fetch'

  // Using any for signer to avoid strict type conflicts with viem's LocalAccount
  export function registerExactEvmScheme(client: x402Client, options: { signer: any }): void
}
