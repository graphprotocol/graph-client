# x402 Examples

## Mode 1: CLI

See [`cli.sh`](./cli.sh) - query directly from the terminal.

```bash
export X402_PRIVATE_KEY=0x...
export X402_CHAIN=base-sepolia
./cli.sh http://localhost:7700/api/x402/deployments/id/Qm... '{ indexers { id } }'
```

## Mode 2: Programmatic

See [`programmatic.ts`](./programmatic.ts) - use in scripts without a build step.

```bash
export X402_PRIVATE_KEY=0x...
export X402_CHAIN=base-sepolia
npx tsx programmatic.ts http://localhost:7700/api/x402/deployments/id/Qm... '{ indexers { id } }'
```

## Mode 3: Typed SDK

See [`index.ts`](./index.ts) + [`.graphclientrc.yml`](./.graphclientrc.yml) - full type safety with generated SDK.

```bash
export X402_PRIVATE_KEY=0x...
export X402_CHAIN=base-sepolia
npx graphclient build
npx tsx index.ts
```
