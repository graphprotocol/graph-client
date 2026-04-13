# Examples

## Mode 1: CLI

See [`cli.sh`](./cli.sh) - query directly from the terminal.

```bash
export X402_PRIVATE_KEY=0x...
export X402_CHAIN=base-sepolia
./cli.sh
```

## Mode 2: Programmatic

See [`programmatic.ts`](./programmatic.ts) - use in scripts without a build step.

```bash
export X402_PRIVATE_KEY=0x...
export X402_CHAIN=base-sepolia
npx tsx programmatic.ts
```

## Mode 3: Typed SDK

See [`typed-sdk/`](./typed-sdk/) - full type safety with generated SDK.

```bash
cd typed-sdk
export X402_PRIVATE_KEY=0x...
export X402_CHAIN=base-sepolia
npx graphclient build
rm .graphclient/package.json  # Required: mesh generates broken ESM exports
npx tsx index.ts
```
