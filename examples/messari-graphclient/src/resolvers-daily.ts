import { Resolvers } from '../.graphclient'

export const resolvers: Resolvers = {
  LiquidityPool: {
    // protocolName can exist already in root as we pass it in the other resolver
    protocolName: (root, args, context, info) => root.protocolName || context.protocolName || 'curve-finance-ethereum', // The value we provide in the config
  },
  LiquidityPoolDailySnapshot: {
    BlockTimestamp: {
      selectionSet: /* GraphQL */ `
        {
          timestamp
        }
      `,
      resolve: (snapshot) => new Date(snapshot.timestamp * 1000).toISOString(),
    },
    DateInterval: {
      selectionSet: /* GraphQL */ `
        {
          timestamp
        }
      `,
      resolve: (snapshot) => new Date(snapshot.timestamp * 1000).toLocaleDateString('en-us'),
    },
    FeesUSD: {
      selectionSet: /* GraphQL */ `
        {
          dailyVolumeUSD
          pool {
            fees {
              feeType
              feePercentage
            }
          }
        }
      `,
      resolve: (snapshot) =>
        snapshot.dailyVolumeUSD * snapshot.pool.fees.filter((tf) => tf.feeType == 'FIXED_TRADING_FEE')[0].feePercentage,
    },
    TokenFeesUSD: {
      selectionSet: /* GraphQL */ `
        {
          dailyVolumeByTokenUSD
          pool {
            fees {
              feeType
              feePercentage
            }
          }
        }
      `,
      resolve: (snapshot) =>
        snapshot.dailyVolumeByTokenUSD.map((i) => {
          return i * snapshot.pool.fees.filter((tf) => tf.feeType == 'FIXED_TRADING_FEE')[0].feePercentage
        }),
    },
    TokenFeesRaw: {
      selectionSet: /* GraphQL */ `
        {
          dailyVolumeByTokenAmount
          pool {
            fees {
              feeType
              feePercentage
            }
          }
        }
      `,
      resolve: (snapshot) =>
        snapshot.dailyVolumeByTokenAmount.map((i) => {
          return i * snapshot.pool.fees.filter((tf) => tf.feeType == 'FIXED_TRADING_FEE')[0].feePercentage
        }),
    },
    RewardsPerToken: {
      selectionSet: /* GraphQL */ `
        {
          rewardTokenEmissionsUSD
          stakedOutputTokenAmount
        }
      `,
      resolve: (snapshot) =>
        snapshot.rewardTokenEmissionsUSD.map((i) => {
          return i / snapshot.stakedOutputTokenAmount
        }),
    },
    RewardsROI: {
      selectionSet: /* GraphQL */ `
        {
          RewardsPerToken
        }
      `,
      resolve: (snapshot) =>
        snapshot.RewardsPerToken.map((i) => {
          return i / snapshot.outputTokenPriceUSD
        }),
    },
    FeesROI: {
      selectionSet: /* GraphQL */ `
        {
          TokenFeesRaw
          inputTokenBalances
        }
      `,
      resolve: (snapshot) =>
        snapshot.TokenFeesRaw.map((i) => {
          snapshot.inputTokenBalances.map((j) => {
            return i / j
          })
        }),
    },
  },
  Query: {
    crossLiquidityPools: async (root, args, context, info) =>
      Promise.all(
        args.protocolNames.map((protocolName) =>
          context.Protocol.Query.liquidityPools({
            root,
            args,
            context: {
              ...context,
              protocolName,
            },
            info,
          }).then((liquidityPools) =>
            liquidityPools.map((liquidityPool) => {
              return {
                ...liquidityPool,
                protocolName,
              }
            }),
          ),
        ),
      ).then((allLiquidityPools) => allLiquidityPools.flat()), //prev (allRebases) and allRebases.flat()
  },
}
