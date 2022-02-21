import { ExecutionArgs } from 'graphql'

export type TheGraphClientConfiguration = {}

export function createTheGraphClient(
  configuration: TheGraphClientConfiguration,
) {
  return {
    execute(args: ExecutionArgs) {},
    fetchFn() {},
  }
}

export type TheGraphClientInstance = ReturnType<typeof createTheGraphClient>
