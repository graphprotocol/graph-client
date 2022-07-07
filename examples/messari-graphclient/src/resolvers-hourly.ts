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
          })
            .then((liquidityPools) =>
              // We send protocolName here so we can take it in the resolver above
              liquidityPools.map((liquidityPool) => {
                const hourlySnapshots = liquidityPool.hourlySnapshots.map((snapshot) => {
                  //////////////////////

                  //ADDING BlockTimestamp:
                  const BlockTimestamp_result =
                    snapshot.timestamp !== undefined ? new Date(snapshot.timestamp * 1000).toISOString() : undefined

                  //ADDING Date:
                  const DateInterval_result =
                    snapshot.timestamp !== undefined ? new Date(snapshot.timestamp * 1000).getHours() : undefined

                  //ADDING FeesUSD:
                  const FeesUSD_result =
                    snapshot.pool.fees !== undefined && snapshot.pool.fees.length > 0
                      ? snapshot.hourlyVolumeUSD *
                        snapshot.pool.fees.filter((tf) => tf.feeType == 'FIXED_TRADING_FEE')[0].feePercentage
                      : undefined

                  //ADDING TokenFeesUSD:
                  const TokenFeesUSD_result =
                    snapshot.pool.fees !== undefined &&
                    snapshot.pool.fees.length > 0 &&
                    snapshot.hourlyVolumeByTokenUSD.length > 0
                      ? snapshot.hourlyVolumeByTokenUSD.map((i) => {
                          return (
                            i * snapshot.pool.fees.filter((tf) => tf.feeType == 'FIXED_TRADING_FEE')[0].feePercentage
                          )
                        })
                      : undefined

                  //ADDING TokenFeesRaw:
                  const TokenFeesRaw_result =
                    snapshot.pool.fees !== undefined &&
                    snapshot.pool.fees.length > 0 &&
                    snapshot.hourlyVolumeByTokenAmount.length > 0
                      ? snapshot.hourlyVolumeByTokenAmount.map((i) => {
                          return (
                            i * snapshot.pool.fees.filter((tf) => tf.feeType == 'FIXED_TRADING_FEE')[0].feePercentage
                          )
                        })
                      : undefined

                  //ADDING RewardsPerToken:
                  const RewardsPerToken_result =
                    snapshot.rewardTokenEmissionsUSD !== undefined && snapshot.rewardTokenEmissionsUSD.length > 0
                      ? snapshot.rewardTokenEmissionsUSD.map((i) => {
                          return i / snapshot.stakedOutputTokenAmount
                        })
                      : undefined

                  return {
                    ...snapshot,
                    FeesUSD: FeesUSD_result,
                    TokenFeesUSD: TokenFeesUSD_result,
                    TokenFeesRaw: TokenFeesRaw_result,
                    RewardsPerToken: RewardsPerToken_result,
                    BlockTimestamp: BlockTimestamp_result,
                    DateInterval: DateInterval_result,
                  }
                })

                return {
                  ...liquidityPool,
                  protocolName,
                  hourlySnapshots,
                }
              }),
            )
            .then((liquidityPools2) =>
              liquidityPools2.map((liquidityPool) => {
                const hourlySnapshots2 = liquidityPool.hourlySnapshots.map((snapshot) => {
                  //////////////////////

                  //UNDEFINED ERROR!!
                  //console.log(snapshot.rewardTokenEmissionsAmount)
                  //console.log(snapshot.rewardTokenEmissionsUSD)
                  //console.log(liquidityPool.outputToken)

                  //ADDING RewardsROI:
                  const RewardsROI_result =
                    snapshot.RewardsPerToken !== undefined && snapshot.RewardsPerToken.length > 0
                      ? snapshot.RewardsPerToken.map((i) => {
                          return i / snapshot.outputTokenPriceUSD
                        })
                      : undefined

                  //ADDING FeesROI:
                  const FeesROI_result =
                    snapshot.TokenFeesRaw !== undefined &&
                    snapshot.TokenFeesRaw.length > 0 &&
                    snapshot.inputTokenBalances.length > 0
                      ? snapshot.TokenFeesRaw.map((i) => {
                          snapshot.inputTokenBalances.map((j) => {
                            return i / j
                          })
                        })
                      : undefined

                  return {
                    ...snapshot,
                    RewardsROI: RewardsROI_result,
                    FeesROI: FeesROI_result,
                  }
                })

                return {
                  ...liquidityPool,
                  protocolName,
                  hourlySnapshots2,
                }
              }),
            ),
        ),
      ).then((allLiquidityPools) => allLiquidityPools.flat()), //prev (allRebases) and allRebases.flat()
  },
}
