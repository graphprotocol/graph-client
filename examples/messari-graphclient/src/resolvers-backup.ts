import { Resolvers, MeshContext } from '../.graphclient'

export const resolvers: Resolvers = {
  LiquidityPool: {
    // protocolName can exist already in root as we pass it in the other resolver
    protocolName: (root, args, context, info) => root.protocolName || context.protocolName || 'curve-finance-ethereum', // The value we provide in the config
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
            // We send protocolName here so we can take it in the resolver above
            liquidityPools.map((liquidityPool) => {
              const dailySnapshots = liquidityPool.dailySnapshots.map((snapshot) => {
                //////////////////////

                //ADDING FeesUSD:
                const FeesUSD_result =
                  snapshot.pool.fees !== undefined && snapshot.pool.fees.length > 0
                    ? snapshot.dailyVolumeUSD *
                      snapshot.pool.fees.filter((tf) => tf.feeType == 'FIXED_TRADING_FEE')[0].feePercentage
                    : undefined

                //ADDING TokenFeesUSD:
                const TokenFeesUSD_result =
                  snapshot.pool.fees !== undefined &&
                  snapshot.pool.fees.length > 0 &&
                  snapshot.dailyVolumeByTokenUSD.length > 0
                    ? snapshot.dailyVolumeByTokenUSD.map((i) => {
                        return i * snapshot.pool.fees.filter((tf) => tf.feeType == 'FIXED_TRADING_FEE')[0].feePercentage
                      })
                    : undefined

                //ADDING TokenFeesRaw:
                const TokenFeesRaw_result =
                  snapshot.pool.fees !== undefined &&
                  snapshot.pool.fees.length > 0 &&
                  snapshot.dailyVolumeByTokenAmount.length > 0
                    ? snapshot.dailyVolumeByTokenAmount.map((i) => {
                        return i * snapshot.pool.fees.filter((tf) => tf.feeType == 'FIXED_TRADING_FEE')[0].feePercentage
                      })
                    : undefined

                //ADDING RewardsPerToken:
                const RewardsPerToken_result =
                  snapshot.rewardTokenEmissionsUSD !== undefined && snapshot.rewardTokenEmissionsUSD.length > 0
                    ? snapshot.rewardTokenEmissionsUSD.map((i) => {
                        return i / snapshot.stakedOutputTokenAmount
                      })
                    : undefined

                //ADDING RewardsROI:
                //const RewardsROI_result =
                //  snapshot.RewardsPerToken !== undefined && snapshot.RewardsPerToken.length > 0
                //    ? snapshot.RewardsPerToken.map((i) => {
                //        return i / snapshot.outputTokenPriceUSD
                //      })
                //    : undefined

                return {
                  ...snapshot,
                  FeesUSD: FeesUSD_result,
                  TokenFeesUSD: TokenFeesUSD_result,
                  TokenFeesRaw: TokenFeesRaw_result,
                  RewardsPerToken: RewardsPerToken_result,
                  //RewardsROI: RewardsROI_result,
                }
              })

              return {
                ...liquidityPool,
                protocolName,
                dailySnapshots,
              }
            }),
          ),
        ),
      ).then((allLiquidityPools) => allLiquidityPools.flat()), //prev (allRebases) and allRebases.flat()
  },
}
