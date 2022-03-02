import { buildSchema, Source } from 'graphql'

const source = new Source(
  /* GraphQL */ `
    schema {
      query: Query
      subscription: Subscription
    }

    "Marks the GraphQL type as indexable entity.  Each type that should be an entity is required to be annotated with this directive."
    directive @entity on OBJECT

    "Defined a Subgraph ID for an object type"
    directive @subgraphId(id: String!) on OBJECT

    "creates a virtual field on the entity that may be queried but cannot be set manually through the mappings API."
    directive @derivedFrom(field: String!) on FIELD_DEFINITION

    scalar BigDecimal

    scalar BigInt

    """
    The block at which the query should be executed.
    """
    input Block_height {
      """
      Value containing a block hash
      """
      hash: Bytes
      """
      Value containing a block number
      """
      number: Int
      """
      Value containing the minimum block number.
      In the case of \`number_gte\`, the query will be executed on the latest block only if
      the subgraph has progressed to or past the minimum block number.
      Defaults to the latest block when omitted.
      """
      number_gte: Int
    }

    type Bundle {
      id: ID!
      ethPrice: BigDecimal!
    }

    input Bundle_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      ethPrice: BigDecimal
      ethPrice_not: BigDecimal
      ethPrice_gt: BigDecimal
      ethPrice_lt: BigDecimal
      ethPrice_gte: BigDecimal
      ethPrice_lte: BigDecimal
      ethPrice_in: [BigDecimal!]
      ethPrice_not_in: [BigDecimal!]
    }

    enum Bundle_orderBy {
      id
      ethPrice
    }

    type Burn {
      id: ID!
      transaction: Transaction!
      timestamp: BigInt!
      pair: Pair!
      liquidity: BigDecimal!
      sender: Bytes
      amount0: BigDecimal
      amount1: BigDecimal
      to: Bytes
      logIndex: BigInt
      amountUSD: BigDecimal
      needsComplete: Boolean!
      feeTo: Bytes
      feeLiquidity: BigDecimal
    }

    input Burn_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      transaction: String
      transaction_not: String
      transaction_gt: String
      transaction_lt: String
      transaction_gte: String
      transaction_lte: String
      transaction_in: [String!]
      transaction_not_in: [String!]
      transaction_contains: String
      transaction_not_contains: String
      transaction_starts_with: String
      transaction_not_starts_with: String
      transaction_ends_with: String
      transaction_not_ends_with: String
      timestamp: BigInt
      timestamp_not: BigInt
      timestamp_gt: BigInt
      timestamp_lt: BigInt
      timestamp_gte: BigInt
      timestamp_lte: BigInt
      timestamp_in: [BigInt!]
      timestamp_not_in: [BigInt!]
      pair: String
      pair_not: String
      pair_gt: String
      pair_lt: String
      pair_gte: String
      pair_lte: String
      pair_in: [String!]
      pair_not_in: [String!]
      pair_contains: String
      pair_not_contains: String
      pair_starts_with: String
      pair_not_starts_with: String
      pair_ends_with: String
      pair_not_ends_with: String
      liquidity: BigDecimal
      liquidity_not: BigDecimal
      liquidity_gt: BigDecimal
      liquidity_lt: BigDecimal
      liquidity_gte: BigDecimal
      liquidity_lte: BigDecimal
      liquidity_in: [BigDecimal!]
      liquidity_not_in: [BigDecimal!]
      sender: Bytes
      sender_not: Bytes
      sender_in: [Bytes!]
      sender_not_in: [Bytes!]
      sender_contains: Bytes
      sender_not_contains: Bytes
      amount0: BigDecimal
      amount0_not: BigDecimal
      amount0_gt: BigDecimal
      amount0_lt: BigDecimal
      amount0_gte: BigDecimal
      amount0_lte: BigDecimal
      amount0_in: [BigDecimal!]
      amount0_not_in: [BigDecimal!]
      amount1: BigDecimal
      amount1_not: BigDecimal
      amount1_gt: BigDecimal
      amount1_lt: BigDecimal
      amount1_gte: BigDecimal
      amount1_lte: BigDecimal
      amount1_in: [BigDecimal!]
      amount1_not_in: [BigDecimal!]
      to: Bytes
      to_not: Bytes
      to_in: [Bytes!]
      to_not_in: [Bytes!]
      to_contains: Bytes
      to_not_contains: Bytes
      logIndex: BigInt
      logIndex_not: BigInt
      logIndex_gt: BigInt
      logIndex_lt: BigInt
      logIndex_gte: BigInt
      logIndex_lte: BigInt
      logIndex_in: [BigInt!]
      logIndex_not_in: [BigInt!]
      amountUSD: BigDecimal
      amountUSD_not: BigDecimal
      amountUSD_gt: BigDecimal
      amountUSD_lt: BigDecimal
      amountUSD_gte: BigDecimal
      amountUSD_lte: BigDecimal
      amountUSD_in: [BigDecimal!]
      amountUSD_not_in: [BigDecimal!]
      needsComplete: Boolean
      needsComplete_not: Boolean
      needsComplete_in: [Boolean!]
      needsComplete_not_in: [Boolean!]
      feeTo: Bytes
      feeTo_not: Bytes
      feeTo_in: [Bytes!]
      feeTo_not_in: [Bytes!]
      feeTo_contains: Bytes
      feeTo_not_contains: Bytes
      feeLiquidity: BigDecimal
      feeLiquidity_not: BigDecimal
      feeLiquidity_gt: BigDecimal
      feeLiquidity_lt: BigDecimal
      feeLiquidity_gte: BigDecimal
      feeLiquidity_lte: BigDecimal
      feeLiquidity_in: [BigDecimal!]
      feeLiquidity_not_in: [BigDecimal!]
    }

    enum Burn_orderBy {
      id
      transaction
      timestamp
      pair
      liquidity
      sender
      amount0
      amount1
      to
      logIndex
      amountUSD
      needsComplete
      feeTo
      feeLiquidity
    }

    scalar Bytes

    type LiquidityPosition {
      id: ID!
      user: User!
      pair: Pair!
      liquidityTokenBalance: BigDecimal!
    }

    type LiquidityPositionSnapshot {
      id: ID!
      liquidityPosition: LiquidityPosition!
      timestamp: Int!
      block: Int!
      user: User!
      pair: Pair!
      token0PriceUSD: BigDecimal!
      token1PriceUSD: BigDecimal!
      reserve0: BigDecimal!
      reserve1: BigDecimal!
      reserveUSD: BigDecimal!
      liquidityTokenTotalSupply: BigDecimal!
      liquidityTokenBalance: BigDecimal!
    }

    input LiquidityPositionSnapshot_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      liquidityPosition: String
      liquidityPosition_not: String
      liquidityPosition_gt: String
      liquidityPosition_lt: String
      liquidityPosition_gte: String
      liquidityPosition_lte: String
      liquidityPosition_in: [String!]
      liquidityPosition_not_in: [String!]
      liquidityPosition_contains: String
      liquidityPosition_not_contains: String
      liquidityPosition_starts_with: String
      liquidityPosition_not_starts_with: String
      liquidityPosition_ends_with: String
      liquidityPosition_not_ends_with: String
      timestamp: Int
      timestamp_not: Int
      timestamp_gt: Int
      timestamp_lt: Int
      timestamp_gte: Int
      timestamp_lte: Int
      timestamp_in: [Int!]
      timestamp_not_in: [Int!]
      block: Int
      block_not: Int
      block_gt: Int
      block_lt: Int
      block_gte: Int
      block_lte: Int
      block_in: [Int!]
      block_not_in: [Int!]
      user: String
      user_not: String
      user_gt: String
      user_lt: String
      user_gte: String
      user_lte: String
      user_in: [String!]
      user_not_in: [String!]
      user_contains: String
      user_not_contains: String
      user_starts_with: String
      user_not_starts_with: String
      user_ends_with: String
      user_not_ends_with: String
      pair: String
      pair_not: String
      pair_gt: String
      pair_lt: String
      pair_gte: String
      pair_lte: String
      pair_in: [String!]
      pair_not_in: [String!]
      pair_contains: String
      pair_not_contains: String
      pair_starts_with: String
      pair_not_starts_with: String
      pair_ends_with: String
      pair_not_ends_with: String
      token0PriceUSD: BigDecimal
      token0PriceUSD_not: BigDecimal
      token0PriceUSD_gt: BigDecimal
      token0PriceUSD_lt: BigDecimal
      token0PriceUSD_gte: BigDecimal
      token0PriceUSD_lte: BigDecimal
      token0PriceUSD_in: [BigDecimal!]
      token0PriceUSD_not_in: [BigDecimal!]
      token1PriceUSD: BigDecimal
      token1PriceUSD_not: BigDecimal
      token1PriceUSD_gt: BigDecimal
      token1PriceUSD_lt: BigDecimal
      token1PriceUSD_gte: BigDecimal
      token1PriceUSD_lte: BigDecimal
      token1PriceUSD_in: [BigDecimal!]
      token1PriceUSD_not_in: [BigDecimal!]
      reserve0: BigDecimal
      reserve0_not: BigDecimal
      reserve0_gt: BigDecimal
      reserve0_lt: BigDecimal
      reserve0_gte: BigDecimal
      reserve0_lte: BigDecimal
      reserve0_in: [BigDecimal!]
      reserve0_not_in: [BigDecimal!]
      reserve1: BigDecimal
      reserve1_not: BigDecimal
      reserve1_gt: BigDecimal
      reserve1_lt: BigDecimal
      reserve1_gte: BigDecimal
      reserve1_lte: BigDecimal
      reserve1_in: [BigDecimal!]
      reserve1_not_in: [BigDecimal!]
      reserveUSD: BigDecimal
      reserveUSD_not: BigDecimal
      reserveUSD_gt: BigDecimal
      reserveUSD_lt: BigDecimal
      reserveUSD_gte: BigDecimal
      reserveUSD_lte: BigDecimal
      reserveUSD_in: [BigDecimal!]
      reserveUSD_not_in: [BigDecimal!]
      liquidityTokenTotalSupply: BigDecimal
      liquidityTokenTotalSupply_not: BigDecimal
      liquidityTokenTotalSupply_gt: BigDecimal
      liquidityTokenTotalSupply_lt: BigDecimal
      liquidityTokenTotalSupply_gte: BigDecimal
      liquidityTokenTotalSupply_lte: BigDecimal
      liquidityTokenTotalSupply_in: [BigDecimal!]
      liquidityTokenTotalSupply_not_in: [BigDecimal!]
      liquidityTokenBalance: BigDecimal
      liquidityTokenBalance_not: BigDecimal
      liquidityTokenBalance_gt: BigDecimal
      liquidityTokenBalance_lt: BigDecimal
      liquidityTokenBalance_gte: BigDecimal
      liquidityTokenBalance_lte: BigDecimal
      liquidityTokenBalance_in: [BigDecimal!]
      liquidityTokenBalance_not_in: [BigDecimal!]
    }

    enum LiquidityPositionSnapshot_orderBy {
      id
      liquidityPosition
      timestamp
      block
      user
      pair
      token0PriceUSD
      token1PriceUSD
      reserve0
      reserve1
      reserveUSD
      liquidityTokenTotalSupply
      liquidityTokenBalance
    }

    input LiquidityPosition_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      user: String
      user_not: String
      user_gt: String
      user_lt: String
      user_gte: String
      user_lte: String
      user_in: [String!]
      user_not_in: [String!]
      user_contains: String
      user_not_contains: String
      user_starts_with: String
      user_not_starts_with: String
      user_ends_with: String
      user_not_ends_with: String
      pair: String
      pair_not: String
      pair_gt: String
      pair_lt: String
      pair_gte: String
      pair_lte: String
      pair_in: [String!]
      pair_not_in: [String!]
      pair_contains: String
      pair_not_contains: String
      pair_starts_with: String
      pair_not_starts_with: String
      pair_ends_with: String
      pair_not_ends_with: String
      liquidityTokenBalance: BigDecimal
      liquidityTokenBalance_not: BigDecimal
      liquidityTokenBalance_gt: BigDecimal
      liquidityTokenBalance_lt: BigDecimal
      liquidityTokenBalance_gte: BigDecimal
      liquidityTokenBalance_lte: BigDecimal
      liquidityTokenBalance_in: [BigDecimal!]
      liquidityTokenBalance_not_in: [BigDecimal!]
    }

    enum LiquidityPosition_orderBy {
      id
      user
      pair
      liquidityTokenBalance
    }

    type Mint {
      id: ID!
      transaction: Transaction!
      timestamp: BigInt!
      pair: Pair!
      to: Bytes!
      liquidity: BigDecimal!
      sender: Bytes
      amount0: BigDecimal
      amount1: BigDecimal
      logIndex: BigInt
      amountUSD: BigDecimal
      feeTo: Bytes
      feeLiquidity: BigDecimal
    }

    input Mint_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      transaction: String
      transaction_not: String
      transaction_gt: String
      transaction_lt: String
      transaction_gte: String
      transaction_lte: String
      transaction_in: [String!]
      transaction_not_in: [String!]
      transaction_contains: String
      transaction_not_contains: String
      transaction_starts_with: String
      transaction_not_starts_with: String
      transaction_ends_with: String
      transaction_not_ends_with: String
      timestamp: BigInt
      timestamp_not: BigInt
      timestamp_gt: BigInt
      timestamp_lt: BigInt
      timestamp_gte: BigInt
      timestamp_lte: BigInt
      timestamp_in: [BigInt!]
      timestamp_not_in: [BigInt!]
      pair: String
      pair_not: String
      pair_gt: String
      pair_lt: String
      pair_gte: String
      pair_lte: String
      pair_in: [String!]
      pair_not_in: [String!]
      pair_contains: String
      pair_not_contains: String
      pair_starts_with: String
      pair_not_starts_with: String
      pair_ends_with: String
      pair_not_ends_with: String
      to: Bytes
      to_not: Bytes
      to_in: [Bytes!]
      to_not_in: [Bytes!]
      to_contains: Bytes
      to_not_contains: Bytes
      liquidity: BigDecimal
      liquidity_not: BigDecimal
      liquidity_gt: BigDecimal
      liquidity_lt: BigDecimal
      liquidity_gte: BigDecimal
      liquidity_lte: BigDecimal
      liquidity_in: [BigDecimal!]
      liquidity_not_in: [BigDecimal!]
      sender: Bytes
      sender_not: Bytes
      sender_in: [Bytes!]
      sender_not_in: [Bytes!]
      sender_contains: Bytes
      sender_not_contains: Bytes
      amount0: BigDecimal
      amount0_not: BigDecimal
      amount0_gt: BigDecimal
      amount0_lt: BigDecimal
      amount0_gte: BigDecimal
      amount0_lte: BigDecimal
      amount0_in: [BigDecimal!]
      amount0_not_in: [BigDecimal!]
      amount1: BigDecimal
      amount1_not: BigDecimal
      amount1_gt: BigDecimal
      amount1_lt: BigDecimal
      amount1_gte: BigDecimal
      amount1_lte: BigDecimal
      amount1_in: [BigDecimal!]
      amount1_not_in: [BigDecimal!]
      logIndex: BigInt
      logIndex_not: BigInt
      logIndex_gt: BigInt
      logIndex_lt: BigInt
      logIndex_gte: BigInt
      logIndex_lte: BigInt
      logIndex_in: [BigInt!]
      logIndex_not_in: [BigInt!]
      amountUSD: BigDecimal
      amountUSD_not: BigDecimal
      amountUSD_gt: BigDecimal
      amountUSD_lt: BigDecimal
      amountUSD_gte: BigDecimal
      amountUSD_lte: BigDecimal
      amountUSD_in: [BigDecimal!]
      amountUSD_not_in: [BigDecimal!]
      feeTo: Bytes
      feeTo_not: Bytes
      feeTo_in: [Bytes!]
      feeTo_not_in: [Bytes!]
      feeTo_contains: Bytes
      feeTo_not_contains: Bytes
      feeLiquidity: BigDecimal
      feeLiquidity_not: BigDecimal
      feeLiquidity_gt: BigDecimal
      feeLiquidity_lt: BigDecimal
      feeLiquidity_gte: BigDecimal
      feeLiquidity_lte: BigDecimal
      feeLiquidity_in: [BigDecimal!]
      feeLiquidity_not_in: [BigDecimal!]
    }

    enum Mint_orderBy {
      id
      transaction
      timestamp
      pair
      to
      liquidity
      sender
      amount0
      amount1
      logIndex
      amountUSD
      feeTo
      feeLiquidity
    }

    """
    Defines the order direction, either ascending or descending
    """
    enum OrderDirection {
      asc
      desc
    }

    type Pair {
      id: ID!
      token0: Token!
      token1: Token!
      reserve0: BigDecimal!
      reserve1: BigDecimal!
      totalSupply: BigDecimal!
      reserveETH: BigDecimal!
      reserveUSD: BigDecimal!
      trackedReserveETH: BigDecimal!
      token0Price: BigDecimal!
      token1Price: BigDecimal!
      volumeToken0: BigDecimal!
      volumeToken1: BigDecimal!
      volumeUSD: BigDecimal!
      untrackedVolumeUSD: BigDecimal!
      txCount: BigInt!
      createdAtTimestamp: BigInt!
      createdAtBlockNumber: BigInt!
      liquidityProviderCount: BigInt!
    }

    type PairDayData {
      id: ID!
      date: Int!
      pairAddress: Bytes!
      token0: Token!
      token1: Token!
      reserve0: BigDecimal!
      reserve1: BigDecimal!
      totalSupply: BigDecimal!
      reserveUSD: BigDecimal!
      dailyVolumeToken0: BigDecimal!
      dailyVolumeToken1: BigDecimal!
      dailyVolumeUSD: BigDecimal!
      dailyTxns: BigInt!
    }

    input PairDayData_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      date: Int
      date_not: Int
      date_gt: Int
      date_lt: Int
      date_gte: Int
      date_lte: Int
      date_in: [Int!]
      date_not_in: [Int!]
      pairAddress: Bytes
      pairAddress_not: Bytes
      pairAddress_in: [Bytes!]
      pairAddress_not_in: [Bytes!]
      pairAddress_contains: Bytes
      pairAddress_not_contains: Bytes
      token0: String
      token0_not: String
      token0_gt: String
      token0_lt: String
      token0_gte: String
      token0_lte: String
      token0_in: [String!]
      token0_not_in: [String!]
      token0_contains: String
      token0_not_contains: String
      token0_starts_with: String
      token0_not_starts_with: String
      token0_ends_with: String
      token0_not_ends_with: String
      token1: String
      token1_not: String
      token1_gt: String
      token1_lt: String
      token1_gte: String
      token1_lte: String
      token1_in: [String!]
      token1_not_in: [String!]
      token1_contains: String
      token1_not_contains: String
      token1_starts_with: String
      token1_not_starts_with: String
      token1_ends_with: String
      token1_not_ends_with: String
      reserve0: BigDecimal
      reserve0_not: BigDecimal
      reserve0_gt: BigDecimal
      reserve0_lt: BigDecimal
      reserve0_gte: BigDecimal
      reserve0_lte: BigDecimal
      reserve0_in: [BigDecimal!]
      reserve0_not_in: [BigDecimal!]
      reserve1: BigDecimal
      reserve1_not: BigDecimal
      reserve1_gt: BigDecimal
      reserve1_lt: BigDecimal
      reserve1_gte: BigDecimal
      reserve1_lte: BigDecimal
      reserve1_in: [BigDecimal!]
      reserve1_not_in: [BigDecimal!]
      totalSupply: BigDecimal
      totalSupply_not: BigDecimal
      totalSupply_gt: BigDecimal
      totalSupply_lt: BigDecimal
      totalSupply_gte: BigDecimal
      totalSupply_lte: BigDecimal
      totalSupply_in: [BigDecimal!]
      totalSupply_not_in: [BigDecimal!]
      reserveUSD: BigDecimal
      reserveUSD_not: BigDecimal
      reserveUSD_gt: BigDecimal
      reserveUSD_lt: BigDecimal
      reserveUSD_gte: BigDecimal
      reserveUSD_lte: BigDecimal
      reserveUSD_in: [BigDecimal!]
      reserveUSD_not_in: [BigDecimal!]
      dailyVolumeToken0: BigDecimal
      dailyVolumeToken0_not: BigDecimal
      dailyVolumeToken0_gt: BigDecimal
      dailyVolumeToken0_lt: BigDecimal
      dailyVolumeToken0_gte: BigDecimal
      dailyVolumeToken0_lte: BigDecimal
      dailyVolumeToken0_in: [BigDecimal!]
      dailyVolumeToken0_not_in: [BigDecimal!]
      dailyVolumeToken1: BigDecimal
      dailyVolumeToken1_not: BigDecimal
      dailyVolumeToken1_gt: BigDecimal
      dailyVolumeToken1_lt: BigDecimal
      dailyVolumeToken1_gte: BigDecimal
      dailyVolumeToken1_lte: BigDecimal
      dailyVolumeToken1_in: [BigDecimal!]
      dailyVolumeToken1_not_in: [BigDecimal!]
      dailyVolumeUSD: BigDecimal
      dailyVolumeUSD_not: BigDecimal
      dailyVolumeUSD_gt: BigDecimal
      dailyVolumeUSD_lt: BigDecimal
      dailyVolumeUSD_gte: BigDecimal
      dailyVolumeUSD_lte: BigDecimal
      dailyVolumeUSD_in: [BigDecimal!]
      dailyVolumeUSD_not_in: [BigDecimal!]
      dailyTxns: BigInt
      dailyTxns_not: BigInt
      dailyTxns_gt: BigInt
      dailyTxns_lt: BigInt
      dailyTxns_gte: BigInt
      dailyTxns_lte: BigInt
      dailyTxns_in: [BigInt!]
      dailyTxns_not_in: [BigInt!]
    }

    enum PairDayData_orderBy {
      id
      date
      pairAddress
      token0
      token1
      reserve0
      reserve1
      totalSupply
      reserveUSD
      dailyVolumeToken0
      dailyVolumeToken1
      dailyVolumeUSD
      dailyTxns
    }

    type PairHourData {
      id: ID!
      hourStartUnix: Int!
      pair: Pair!
      reserve0: BigDecimal!
      reserve1: BigDecimal!
      reserveUSD: BigDecimal!
      hourlyVolumeToken0: BigDecimal!
      hourlyVolumeToken1: BigDecimal!
      hourlyVolumeUSD: BigDecimal!
      hourlyTxns: BigInt!
    }

    input PairHourData_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      hourStartUnix: Int
      hourStartUnix_not: Int
      hourStartUnix_gt: Int
      hourStartUnix_lt: Int
      hourStartUnix_gte: Int
      hourStartUnix_lte: Int
      hourStartUnix_in: [Int!]
      hourStartUnix_not_in: [Int!]
      pair: String
      pair_not: String
      pair_gt: String
      pair_lt: String
      pair_gte: String
      pair_lte: String
      pair_in: [String!]
      pair_not_in: [String!]
      pair_contains: String
      pair_not_contains: String
      pair_starts_with: String
      pair_not_starts_with: String
      pair_ends_with: String
      pair_not_ends_with: String
      reserve0: BigDecimal
      reserve0_not: BigDecimal
      reserve0_gt: BigDecimal
      reserve0_lt: BigDecimal
      reserve0_gte: BigDecimal
      reserve0_lte: BigDecimal
      reserve0_in: [BigDecimal!]
      reserve0_not_in: [BigDecimal!]
      reserve1: BigDecimal
      reserve1_not: BigDecimal
      reserve1_gt: BigDecimal
      reserve1_lt: BigDecimal
      reserve1_gte: BigDecimal
      reserve1_lte: BigDecimal
      reserve1_in: [BigDecimal!]
      reserve1_not_in: [BigDecimal!]
      reserveUSD: BigDecimal
      reserveUSD_not: BigDecimal
      reserveUSD_gt: BigDecimal
      reserveUSD_lt: BigDecimal
      reserveUSD_gte: BigDecimal
      reserveUSD_lte: BigDecimal
      reserveUSD_in: [BigDecimal!]
      reserveUSD_not_in: [BigDecimal!]
      hourlyVolumeToken0: BigDecimal
      hourlyVolumeToken0_not: BigDecimal
      hourlyVolumeToken0_gt: BigDecimal
      hourlyVolumeToken0_lt: BigDecimal
      hourlyVolumeToken0_gte: BigDecimal
      hourlyVolumeToken0_lte: BigDecimal
      hourlyVolumeToken0_in: [BigDecimal!]
      hourlyVolumeToken0_not_in: [BigDecimal!]
      hourlyVolumeToken1: BigDecimal
      hourlyVolumeToken1_not: BigDecimal
      hourlyVolumeToken1_gt: BigDecimal
      hourlyVolumeToken1_lt: BigDecimal
      hourlyVolumeToken1_gte: BigDecimal
      hourlyVolumeToken1_lte: BigDecimal
      hourlyVolumeToken1_in: [BigDecimal!]
      hourlyVolumeToken1_not_in: [BigDecimal!]
      hourlyVolumeUSD: BigDecimal
      hourlyVolumeUSD_not: BigDecimal
      hourlyVolumeUSD_gt: BigDecimal
      hourlyVolumeUSD_lt: BigDecimal
      hourlyVolumeUSD_gte: BigDecimal
      hourlyVolumeUSD_lte: BigDecimal
      hourlyVolumeUSD_in: [BigDecimal!]
      hourlyVolumeUSD_not_in: [BigDecimal!]
      hourlyTxns: BigInt
      hourlyTxns_not: BigInt
      hourlyTxns_gt: BigInt
      hourlyTxns_lt: BigInt
      hourlyTxns_gte: BigInt
      hourlyTxns_lte: BigInt
      hourlyTxns_in: [BigInt!]
      hourlyTxns_not_in: [BigInt!]
    }

    enum PairHourData_orderBy {
      id
      hourStartUnix
      pair
      reserve0
      reserve1
      reserveUSD
      hourlyVolumeToken0
      hourlyVolumeToken1
      hourlyVolumeUSD
      hourlyTxns
    }

    input Pair_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      token0: String
      token0_not: String
      token0_gt: String
      token0_lt: String
      token0_gte: String
      token0_lte: String
      token0_in: [String!]
      token0_not_in: [String!]
      token0_contains: String
      token0_not_contains: String
      token0_starts_with: String
      token0_not_starts_with: String
      token0_ends_with: String
      token0_not_ends_with: String
      token1: String
      token1_not: String
      token1_gt: String
      token1_lt: String
      token1_gte: String
      token1_lte: String
      token1_in: [String!]
      token1_not_in: [String!]
      token1_contains: String
      token1_not_contains: String
      token1_starts_with: String
      token1_not_starts_with: String
      token1_ends_with: String
      token1_not_ends_with: String
      reserve0: BigDecimal
      reserve0_not: BigDecimal
      reserve0_gt: BigDecimal
      reserve0_lt: BigDecimal
      reserve0_gte: BigDecimal
      reserve0_lte: BigDecimal
      reserve0_in: [BigDecimal!]
      reserve0_not_in: [BigDecimal!]
      reserve1: BigDecimal
      reserve1_not: BigDecimal
      reserve1_gt: BigDecimal
      reserve1_lt: BigDecimal
      reserve1_gte: BigDecimal
      reserve1_lte: BigDecimal
      reserve1_in: [BigDecimal!]
      reserve1_not_in: [BigDecimal!]
      totalSupply: BigDecimal
      totalSupply_not: BigDecimal
      totalSupply_gt: BigDecimal
      totalSupply_lt: BigDecimal
      totalSupply_gte: BigDecimal
      totalSupply_lte: BigDecimal
      totalSupply_in: [BigDecimal!]
      totalSupply_not_in: [BigDecimal!]
      reserveETH: BigDecimal
      reserveETH_not: BigDecimal
      reserveETH_gt: BigDecimal
      reserveETH_lt: BigDecimal
      reserveETH_gte: BigDecimal
      reserveETH_lte: BigDecimal
      reserveETH_in: [BigDecimal!]
      reserveETH_not_in: [BigDecimal!]
      reserveUSD: BigDecimal
      reserveUSD_not: BigDecimal
      reserveUSD_gt: BigDecimal
      reserveUSD_lt: BigDecimal
      reserveUSD_gte: BigDecimal
      reserveUSD_lte: BigDecimal
      reserveUSD_in: [BigDecimal!]
      reserveUSD_not_in: [BigDecimal!]
      trackedReserveETH: BigDecimal
      trackedReserveETH_not: BigDecimal
      trackedReserveETH_gt: BigDecimal
      trackedReserveETH_lt: BigDecimal
      trackedReserveETH_gte: BigDecimal
      trackedReserveETH_lte: BigDecimal
      trackedReserveETH_in: [BigDecimal!]
      trackedReserveETH_not_in: [BigDecimal!]
      token0Price: BigDecimal
      token0Price_not: BigDecimal
      token0Price_gt: BigDecimal
      token0Price_lt: BigDecimal
      token0Price_gte: BigDecimal
      token0Price_lte: BigDecimal
      token0Price_in: [BigDecimal!]
      token0Price_not_in: [BigDecimal!]
      token1Price: BigDecimal
      token1Price_not: BigDecimal
      token1Price_gt: BigDecimal
      token1Price_lt: BigDecimal
      token1Price_gte: BigDecimal
      token1Price_lte: BigDecimal
      token1Price_in: [BigDecimal!]
      token1Price_not_in: [BigDecimal!]
      volumeToken0: BigDecimal
      volumeToken0_not: BigDecimal
      volumeToken0_gt: BigDecimal
      volumeToken0_lt: BigDecimal
      volumeToken0_gte: BigDecimal
      volumeToken0_lte: BigDecimal
      volumeToken0_in: [BigDecimal!]
      volumeToken0_not_in: [BigDecimal!]
      volumeToken1: BigDecimal
      volumeToken1_not: BigDecimal
      volumeToken1_gt: BigDecimal
      volumeToken1_lt: BigDecimal
      volumeToken1_gte: BigDecimal
      volumeToken1_lte: BigDecimal
      volumeToken1_in: [BigDecimal!]
      volumeToken1_not_in: [BigDecimal!]
      volumeUSD: BigDecimal
      volumeUSD_not: BigDecimal
      volumeUSD_gt: BigDecimal
      volumeUSD_lt: BigDecimal
      volumeUSD_gte: BigDecimal
      volumeUSD_lte: BigDecimal
      volumeUSD_in: [BigDecimal!]
      volumeUSD_not_in: [BigDecimal!]
      untrackedVolumeUSD: BigDecimal
      untrackedVolumeUSD_not: BigDecimal
      untrackedVolumeUSD_gt: BigDecimal
      untrackedVolumeUSD_lt: BigDecimal
      untrackedVolumeUSD_gte: BigDecimal
      untrackedVolumeUSD_lte: BigDecimal
      untrackedVolumeUSD_in: [BigDecimal!]
      untrackedVolumeUSD_not_in: [BigDecimal!]
      txCount: BigInt
      txCount_not: BigInt
      txCount_gt: BigInt
      txCount_lt: BigInt
      txCount_gte: BigInt
      txCount_lte: BigInt
      txCount_in: [BigInt!]
      txCount_not_in: [BigInt!]
      createdAtTimestamp: BigInt
      createdAtTimestamp_not: BigInt
      createdAtTimestamp_gt: BigInt
      createdAtTimestamp_lt: BigInt
      createdAtTimestamp_gte: BigInt
      createdAtTimestamp_lte: BigInt
      createdAtTimestamp_in: [BigInt!]
      createdAtTimestamp_not_in: [BigInt!]
      createdAtBlockNumber: BigInt
      createdAtBlockNumber_not: BigInt
      createdAtBlockNumber_gt: BigInt
      createdAtBlockNumber_lt: BigInt
      createdAtBlockNumber_gte: BigInt
      createdAtBlockNumber_lte: BigInt
      createdAtBlockNumber_in: [BigInt!]
      createdAtBlockNumber_not_in: [BigInt!]
      liquidityProviderCount: BigInt
      liquidityProviderCount_not: BigInt
      liquidityProviderCount_gt: BigInt
      liquidityProviderCount_lt: BigInt
      liquidityProviderCount_gte: BigInt
      liquidityProviderCount_lte: BigInt
      liquidityProviderCount_in: [BigInt!]
      liquidityProviderCount_not_in: [BigInt!]
    }

    enum Pair_orderBy {
      id
      token0
      token1
      reserve0
      reserve1
      totalSupply
      reserveETH
      reserveUSD
      trackedReserveETH
      token0Price
      token1Price
      volumeToken0
      volumeToken1
      volumeUSD
      untrackedVolumeUSD
      txCount
      createdAtTimestamp
      createdAtBlockNumber
      liquidityProviderCount
    }

    type Query {
      uniswapFactory(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): UniswapFactory
      uniswapFactories(
        skip: Int = 0
        first: Int = 100
        orderBy: UniswapFactory_orderBy
        orderDirection: OrderDirection
        where: UniswapFactory_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [UniswapFactory!]!
      token(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Token
      tokens(
        skip: Int = 0
        first: Int = 100
        orderBy: Token_orderBy
        orderDirection: OrderDirection
        where: Token_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Token!]!
      pair(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Pair
      pairs(
        skip: Int = 0
        first: Int = 100
        orderBy: Pair_orderBy
        orderDirection: OrderDirection
        where: Pair_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Pair!]!
      user(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): User
      users(
        skip: Int = 0
        first: Int = 100
        orderBy: User_orderBy
        orderDirection: OrderDirection
        where: User_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [User!]!
      liquidityPosition(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): LiquidityPosition
      liquidityPositions(
        skip: Int = 0
        first: Int = 100
        orderBy: LiquidityPosition_orderBy
        orderDirection: OrderDirection
        where: LiquidityPosition_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [LiquidityPosition!]!
      liquidityPositionSnapshot(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): LiquidityPositionSnapshot
      liquidityPositionSnapshots(
        skip: Int = 0
        first: Int = 100
        orderBy: LiquidityPositionSnapshot_orderBy
        orderDirection: OrderDirection
        where: LiquidityPositionSnapshot_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [LiquidityPositionSnapshot!]!
      transaction(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Transaction
      transactions(
        skip: Int = 0
        first: Int = 100
        orderBy: Transaction_orderBy
        orderDirection: OrderDirection
        where: Transaction_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Transaction!]!
      mint(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Mint
      mints(
        skip: Int = 0
        first: Int = 100
        orderBy: Mint_orderBy
        orderDirection: OrderDirection
        where: Mint_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Mint!]!
      burn(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Burn
      burns(
        skip: Int = 0
        first: Int = 100
        orderBy: Burn_orderBy
        orderDirection: OrderDirection
        where: Burn_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Burn!]!
      swap(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Swap
      swaps(
        skip: Int = 0
        first: Int = 100
        orderBy: Swap_orderBy
        orderDirection: OrderDirection
        where: Swap_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Swap!]!
      bundle(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Bundle
      bundles(
        skip: Int = 0
        first: Int = 100
        orderBy: Bundle_orderBy
        orderDirection: OrderDirection
        where: Bundle_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Bundle!]!
      uniswapDayData(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): UniswapDayData
      uniswapDayDatas(
        skip: Int = 0
        first: Int = 100
        orderBy: UniswapDayData_orderBy
        orderDirection: OrderDirection
        where: UniswapDayData_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [UniswapDayData!]!
      pairHourData(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): PairHourData
      pairHourDatas(
        skip: Int = 0
        first: Int = 100
        orderBy: PairHourData_orderBy
        orderDirection: OrderDirection
        where: PairHourData_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [PairHourData!]!
      pairDayData(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): PairDayData
      pairDayDatas(
        skip: Int = 0
        first: Int = 100
        orderBy: PairDayData_orderBy
        orderDirection: OrderDirection
        where: PairDayData_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [PairDayData!]!
      tokenDayData(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): TokenDayData
      tokenDayDatas(
        skip: Int = 0
        first: Int = 100
        orderBy: TokenDayData_orderBy
        orderDirection: OrderDirection
        where: TokenDayData_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [TokenDayData!]!
      """
      Access to subgraph metadata
      """
      _meta(block: Block_height): _Meta_
    }

    type Subscription {
      uniswapFactory(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): UniswapFactory
      uniswapFactories(
        skip: Int = 0
        first: Int = 100
        orderBy: UniswapFactory_orderBy
        orderDirection: OrderDirection
        where: UniswapFactory_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [UniswapFactory!]!
      token(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Token
      tokens(
        skip: Int = 0
        first: Int = 100
        orderBy: Token_orderBy
        orderDirection: OrderDirection
        where: Token_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Token!]!
      pair(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Pair
      pairs(
        skip: Int = 0
        first: Int = 100
        orderBy: Pair_orderBy
        orderDirection: OrderDirection
        where: Pair_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Pair!]!
      user(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): User
      users(
        skip: Int = 0
        first: Int = 100
        orderBy: User_orderBy
        orderDirection: OrderDirection
        where: User_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [User!]!
      liquidityPosition(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): LiquidityPosition
      liquidityPositions(
        skip: Int = 0
        first: Int = 100
        orderBy: LiquidityPosition_orderBy
        orderDirection: OrderDirection
        where: LiquidityPosition_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [LiquidityPosition!]!
      liquidityPositionSnapshot(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): LiquidityPositionSnapshot
      liquidityPositionSnapshots(
        skip: Int = 0
        first: Int = 100
        orderBy: LiquidityPositionSnapshot_orderBy
        orderDirection: OrderDirection
        where: LiquidityPositionSnapshot_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [LiquidityPositionSnapshot!]!
      transaction(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Transaction
      transactions(
        skip: Int = 0
        first: Int = 100
        orderBy: Transaction_orderBy
        orderDirection: OrderDirection
        where: Transaction_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Transaction!]!
      mint(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Mint
      mints(
        skip: Int = 0
        first: Int = 100
        orderBy: Mint_orderBy
        orderDirection: OrderDirection
        where: Mint_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Mint!]!
      burn(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Burn
      burns(
        skip: Int = 0
        first: Int = 100
        orderBy: Burn_orderBy
        orderDirection: OrderDirection
        where: Burn_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Burn!]!
      swap(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Swap
      swaps(
        skip: Int = 0
        first: Int = 100
        orderBy: Swap_orderBy
        orderDirection: OrderDirection
        where: Swap_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Swap!]!
      bundle(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Bundle
      bundles(
        skip: Int = 0
        first: Int = 100
        orderBy: Bundle_orderBy
        orderDirection: OrderDirection
        where: Bundle_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Bundle!]!
      uniswapDayData(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): UniswapDayData
      uniswapDayDatas(
        skip: Int = 0
        first: Int = 100
        orderBy: UniswapDayData_orderBy
        orderDirection: OrderDirection
        where: UniswapDayData_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [UniswapDayData!]!
      pairHourData(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): PairHourData
      pairHourDatas(
        skip: Int = 0
        first: Int = 100
        orderBy: PairHourData_orderBy
        orderDirection: OrderDirection
        where: PairHourData_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [PairHourData!]!
      pairDayData(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): PairDayData
      pairDayDatas(
        skip: Int = 0
        first: Int = 100
        orderBy: PairDayData_orderBy
        orderDirection: OrderDirection
        where: PairDayData_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [PairDayData!]!
      tokenDayData(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): TokenDayData
      tokenDayDatas(
        skip: Int = 0
        first: Int = 100
        orderBy: TokenDayData_orderBy
        orderDirection: OrderDirection
        where: TokenDayData_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [TokenDayData!]!
      """
      Access to subgraph metadata
      """
      _meta(block: Block_height): _Meta_
    }

    type Swap {
      id: ID!
      transaction: Transaction!
      timestamp: BigInt!
      pair: Pair!
      sender: Bytes!
      amount0In: BigDecimal!
      amount1In: BigDecimal!
      amount0Out: BigDecimal!
      amount1Out: BigDecimal!
      to: Bytes!
      logIndex: BigInt
      amountUSD: BigDecimal!
    }

    input Swap_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      transaction: String
      transaction_not: String
      transaction_gt: String
      transaction_lt: String
      transaction_gte: String
      transaction_lte: String
      transaction_in: [String!]
      transaction_not_in: [String!]
      transaction_contains: String
      transaction_not_contains: String
      transaction_starts_with: String
      transaction_not_starts_with: String
      transaction_ends_with: String
      transaction_not_ends_with: String
      timestamp: BigInt
      timestamp_not: BigInt
      timestamp_gt: BigInt
      timestamp_lt: BigInt
      timestamp_gte: BigInt
      timestamp_lte: BigInt
      timestamp_in: [BigInt!]
      timestamp_not_in: [BigInt!]
      pair: String
      pair_not: String
      pair_gt: String
      pair_lt: String
      pair_gte: String
      pair_lte: String
      pair_in: [String!]
      pair_not_in: [String!]
      pair_contains: String
      pair_not_contains: String
      pair_starts_with: String
      pair_not_starts_with: String
      pair_ends_with: String
      pair_not_ends_with: String
      sender: Bytes
      sender_not: Bytes
      sender_in: [Bytes!]
      sender_not_in: [Bytes!]
      sender_contains: Bytes
      sender_not_contains: Bytes
      amount0In: BigDecimal
      amount0In_not: BigDecimal
      amount0In_gt: BigDecimal
      amount0In_lt: BigDecimal
      amount0In_gte: BigDecimal
      amount0In_lte: BigDecimal
      amount0In_in: [BigDecimal!]
      amount0In_not_in: [BigDecimal!]
      amount1In: BigDecimal
      amount1In_not: BigDecimal
      amount1In_gt: BigDecimal
      amount1In_lt: BigDecimal
      amount1In_gte: BigDecimal
      amount1In_lte: BigDecimal
      amount1In_in: [BigDecimal!]
      amount1In_not_in: [BigDecimal!]
      amount0Out: BigDecimal
      amount0Out_not: BigDecimal
      amount0Out_gt: BigDecimal
      amount0Out_lt: BigDecimal
      amount0Out_gte: BigDecimal
      amount0Out_lte: BigDecimal
      amount0Out_in: [BigDecimal!]
      amount0Out_not_in: [BigDecimal!]
      amount1Out: BigDecimal
      amount1Out_not: BigDecimal
      amount1Out_gt: BigDecimal
      amount1Out_lt: BigDecimal
      amount1Out_gte: BigDecimal
      amount1Out_lte: BigDecimal
      amount1Out_in: [BigDecimal!]
      amount1Out_not_in: [BigDecimal!]
      to: Bytes
      to_not: Bytes
      to_in: [Bytes!]
      to_not_in: [Bytes!]
      to_contains: Bytes
      to_not_contains: Bytes
      logIndex: BigInt
      logIndex_not: BigInt
      logIndex_gt: BigInt
      logIndex_lt: BigInt
      logIndex_gte: BigInt
      logIndex_lte: BigInt
      logIndex_in: [BigInt!]
      logIndex_not_in: [BigInt!]
      amountUSD: BigDecimal
      amountUSD_not: BigDecimal
      amountUSD_gt: BigDecimal
      amountUSD_lt: BigDecimal
      amountUSD_gte: BigDecimal
      amountUSD_lte: BigDecimal
      amountUSD_in: [BigDecimal!]
      amountUSD_not_in: [BigDecimal!]
    }

    enum Swap_orderBy {
      id
      transaction
      timestamp
      pair
      sender
      amount0In
      amount1In
      amount0Out
      amount1Out
      to
      logIndex
      amountUSD
    }

    type Token {
      id: ID!
      symbol: String!
      name: String!
      decimals: BigInt!
      totalSupply: BigInt!
      tradeVolume: BigDecimal!
      tradeVolumeUSD: BigDecimal!
      untrackedVolumeUSD: BigDecimal!
      txCount: BigInt!
      totalLiquidity: BigDecimal!
      derivedETH: BigDecimal
      mostLiquidPairs(
        skip: Int = 0
        first: Int = 100
        orderBy: PairDayData_orderBy
        orderDirection: OrderDirection
        where: PairDayData_filter
      ): [PairDayData]!
    }

    type TokenDayData {
      id: ID!
      date: Int!
      token: Token!
      dailyVolumeToken: BigDecimal!
      dailyVolumeETH: BigDecimal!
      dailyVolumeUSD: BigDecimal!
      dailyTxns: BigInt!
      totalLiquidityToken: BigDecimal!
      totalLiquidityETH: BigDecimal!
      totalLiquidityUSD: BigDecimal!
      priceUSD: BigDecimal!
      maxStored: Int!
      mostLiquidPairs(
        skip: Int = 0
        first: Int = 100
        orderBy: PairDayData_orderBy
        orderDirection: OrderDirection
        where: PairDayData_filter
      ): [PairDayData!]!
    }

    input TokenDayData_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      date: Int
      date_not: Int
      date_gt: Int
      date_lt: Int
      date_gte: Int
      date_lte: Int
      date_in: [Int!]
      date_not_in: [Int!]
      token: String
      token_not: String
      token_gt: String
      token_lt: String
      token_gte: String
      token_lte: String
      token_in: [String!]
      token_not_in: [String!]
      token_contains: String
      token_not_contains: String
      token_starts_with: String
      token_not_starts_with: String
      token_ends_with: String
      token_not_ends_with: String
      dailyVolumeToken: BigDecimal
      dailyVolumeToken_not: BigDecimal
      dailyVolumeToken_gt: BigDecimal
      dailyVolumeToken_lt: BigDecimal
      dailyVolumeToken_gte: BigDecimal
      dailyVolumeToken_lte: BigDecimal
      dailyVolumeToken_in: [BigDecimal!]
      dailyVolumeToken_not_in: [BigDecimal!]
      dailyVolumeETH: BigDecimal
      dailyVolumeETH_not: BigDecimal
      dailyVolumeETH_gt: BigDecimal
      dailyVolumeETH_lt: BigDecimal
      dailyVolumeETH_gte: BigDecimal
      dailyVolumeETH_lte: BigDecimal
      dailyVolumeETH_in: [BigDecimal!]
      dailyVolumeETH_not_in: [BigDecimal!]
      dailyVolumeUSD: BigDecimal
      dailyVolumeUSD_not: BigDecimal
      dailyVolumeUSD_gt: BigDecimal
      dailyVolumeUSD_lt: BigDecimal
      dailyVolumeUSD_gte: BigDecimal
      dailyVolumeUSD_lte: BigDecimal
      dailyVolumeUSD_in: [BigDecimal!]
      dailyVolumeUSD_not_in: [BigDecimal!]
      dailyTxns: BigInt
      dailyTxns_not: BigInt
      dailyTxns_gt: BigInt
      dailyTxns_lt: BigInt
      dailyTxns_gte: BigInt
      dailyTxns_lte: BigInt
      dailyTxns_in: [BigInt!]
      dailyTxns_not_in: [BigInt!]
      totalLiquidityToken: BigDecimal
      totalLiquidityToken_not: BigDecimal
      totalLiquidityToken_gt: BigDecimal
      totalLiquidityToken_lt: BigDecimal
      totalLiquidityToken_gte: BigDecimal
      totalLiquidityToken_lte: BigDecimal
      totalLiquidityToken_in: [BigDecimal!]
      totalLiquidityToken_not_in: [BigDecimal!]
      totalLiquidityETH: BigDecimal
      totalLiquidityETH_not: BigDecimal
      totalLiquidityETH_gt: BigDecimal
      totalLiquidityETH_lt: BigDecimal
      totalLiquidityETH_gte: BigDecimal
      totalLiquidityETH_lte: BigDecimal
      totalLiquidityETH_in: [BigDecimal!]
      totalLiquidityETH_not_in: [BigDecimal!]
      totalLiquidityUSD: BigDecimal
      totalLiquidityUSD_not: BigDecimal
      totalLiquidityUSD_gt: BigDecimal
      totalLiquidityUSD_lt: BigDecimal
      totalLiquidityUSD_gte: BigDecimal
      totalLiquidityUSD_lte: BigDecimal
      totalLiquidityUSD_in: [BigDecimal!]
      totalLiquidityUSD_not_in: [BigDecimal!]
      priceUSD: BigDecimal
      priceUSD_not: BigDecimal
      priceUSD_gt: BigDecimal
      priceUSD_lt: BigDecimal
      priceUSD_gte: BigDecimal
      priceUSD_lte: BigDecimal
      priceUSD_in: [BigDecimal!]
      priceUSD_not_in: [BigDecimal!]
      maxStored: Int
      maxStored_not: Int
      maxStored_gt: Int
      maxStored_lt: Int
      maxStored_gte: Int
      maxStored_lte: Int
      maxStored_in: [Int!]
      maxStored_not_in: [Int!]
      mostLiquidPairs: [String!]
      mostLiquidPairs_not: [String!]
      mostLiquidPairs_contains: [String!]
      mostLiquidPairs_not_contains: [String!]
    }

    enum TokenDayData_orderBy {
      id
      date
      token
      dailyVolumeToken
      dailyVolumeETH
      dailyVolumeUSD
      dailyTxns
      totalLiquidityToken
      totalLiquidityETH
      totalLiquidityUSD
      priceUSD
      maxStored
      mostLiquidPairs
    }

    input Token_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      symbol: String
      symbol_not: String
      symbol_gt: String
      symbol_lt: String
      symbol_gte: String
      symbol_lte: String
      symbol_in: [String!]
      symbol_not_in: [String!]
      symbol_contains: String
      symbol_not_contains: String
      symbol_starts_with: String
      symbol_not_starts_with: String
      symbol_ends_with: String
      symbol_not_ends_with: String
      name: String
      name_not: String
      name_gt: String
      name_lt: String
      name_gte: String
      name_lte: String
      name_in: [String!]
      name_not_in: [String!]
      name_contains: String
      name_not_contains: String
      name_starts_with: String
      name_not_starts_with: String
      name_ends_with: String
      name_not_ends_with: String
      decimals: BigInt
      decimals_not: BigInt
      decimals_gt: BigInt
      decimals_lt: BigInt
      decimals_gte: BigInt
      decimals_lte: BigInt
      decimals_in: [BigInt!]
      decimals_not_in: [BigInt!]
      totalSupply: BigInt
      totalSupply_not: BigInt
      totalSupply_gt: BigInt
      totalSupply_lt: BigInt
      totalSupply_gte: BigInt
      totalSupply_lte: BigInt
      totalSupply_in: [BigInt!]
      totalSupply_not_in: [BigInt!]
      tradeVolume: BigDecimal
      tradeVolume_not: BigDecimal
      tradeVolume_gt: BigDecimal
      tradeVolume_lt: BigDecimal
      tradeVolume_gte: BigDecimal
      tradeVolume_lte: BigDecimal
      tradeVolume_in: [BigDecimal!]
      tradeVolume_not_in: [BigDecimal!]
      tradeVolumeUSD: BigDecimal
      tradeVolumeUSD_not: BigDecimal
      tradeVolumeUSD_gt: BigDecimal
      tradeVolumeUSD_lt: BigDecimal
      tradeVolumeUSD_gte: BigDecimal
      tradeVolumeUSD_lte: BigDecimal
      tradeVolumeUSD_in: [BigDecimal!]
      tradeVolumeUSD_not_in: [BigDecimal!]
      untrackedVolumeUSD: BigDecimal
      untrackedVolumeUSD_not: BigDecimal
      untrackedVolumeUSD_gt: BigDecimal
      untrackedVolumeUSD_lt: BigDecimal
      untrackedVolumeUSD_gte: BigDecimal
      untrackedVolumeUSD_lte: BigDecimal
      untrackedVolumeUSD_in: [BigDecimal!]
      untrackedVolumeUSD_not_in: [BigDecimal!]
      txCount: BigInt
      txCount_not: BigInt
      txCount_gt: BigInt
      txCount_lt: BigInt
      txCount_gte: BigInt
      txCount_lte: BigInt
      txCount_in: [BigInt!]
      txCount_not_in: [BigInt!]
      totalLiquidity: BigDecimal
      totalLiquidity_not: BigDecimal
      totalLiquidity_gt: BigDecimal
      totalLiquidity_lt: BigDecimal
      totalLiquidity_gte: BigDecimal
      totalLiquidity_lte: BigDecimal
      totalLiquidity_in: [BigDecimal!]
      totalLiquidity_not_in: [BigDecimal!]
      derivedETH: BigDecimal
      derivedETH_not: BigDecimal
      derivedETH_gt: BigDecimal
      derivedETH_lt: BigDecimal
      derivedETH_gte: BigDecimal
      derivedETH_lte: BigDecimal
      derivedETH_in: [BigDecimal!]
      derivedETH_not_in: [BigDecimal!]
      mostLiquidPairs: [String!]
      mostLiquidPairs_not: [String!]
      mostLiquidPairs_contains: [String!]
      mostLiquidPairs_not_contains: [String!]
    }

    enum Token_orderBy {
      id
      symbol
      name
      decimals
      totalSupply
      tradeVolume
      tradeVolumeUSD
      untrackedVolumeUSD
      txCount
      totalLiquidity
      derivedETH
      mostLiquidPairs
    }

    type Transaction {
      id: ID!
      blockNumber: BigInt!
      timestamp: BigInt!
      mints(
        skip: Int = 0
        first: Int = 100
        orderBy: Mint_orderBy
        orderDirection: OrderDirection
        where: Mint_filter
      ): [Mint]!
      burns(
        skip: Int = 0
        first: Int = 100
        orderBy: Burn_orderBy
        orderDirection: OrderDirection
        where: Burn_filter
      ): [Burn]!
      swaps(
        skip: Int = 0
        first: Int = 100
        orderBy: Swap_orderBy
        orderDirection: OrderDirection
        where: Swap_filter
      ): [Swap]!
    }

    input Transaction_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      blockNumber: BigInt
      blockNumber_not: BigInt
      blockNumber_gt: BigInt
      blockNumber_lt: BigInt
      blockNumber_gte: BigInt
      blockNumber_lte: BigInt
      blockNumber_in: [BigInt!]
      blockNumber_not_in: [BigInt!]
      timestamp: BigInt
      timestamp_not: BigInt
      timestamp_gt: BigInt
      timestamp_lt: BigInt
      timestamp_gte: BigInt
      timestamp_lte: BigInt
      timestamp_in: [BigInt!]
      timestamp_not_in: [BigInt!]
      mints: [String!]
      mints_not: [String!]
      mints_contains: [String!]
      mints_not_contains: [String!]
      burns: [String!]
      burns_not: [String!]
      burns_contains: [String!]
      burns_not_contains: [String!]
      swaps: [String!]
      swaps_not: [String!]
      swaps_contains: [String!]
      swaps_not_contains: [String!]
    }

    enum Transaction_orderBy {
      id
      blockNumber
      timestamp
      mints
      burns
      swaps
    }

    type UniswapDayData {
      id: ID!
      date: Int!
      dailyVolumeETH: BigDecimal!
      dailyVolumeUSD: BigDecimal!
      dailyVolumeUntracked: BigDecimal!
      totalVolumeETH: BigDecimal!
      totalLiquidityETH: BigDecimal!
      totalVolumeUSD: BigDecimal!
      totalLiquidityUSD: BigDecimal!
      maxStored: Int
      mostLiquidTokens(
        skip: Int = 0
        first: Int = 100
        orderBy: TokenDayData_orderBy
        orderDirection: OrderDirection
        where: TokenDayData_filter
      ): [TokenDayData!]!
      txCount: BigInt!
    }

    input UniswapDayData_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      date: Int
      date_not: Int
      date_gt: Int
      date_lt: Int
      date_gte: Int
      date_lte: Int
      date_in: [Int!]
      date_not_in: [Int!]
      dailyVolumeETH: BigDecimal
      dailyVolumeETH_not: BigDecimal
      dailyVolumeETH_gt: BigDecimal
      dailyVolumeETH_lt: BigDecimal
      dailyVolumeETH_gte: BigDecimal
      dailyVolumeETH_lte: BigDecimal
      dailyVolumeETH_in: [BigDecimal!]
      dailyVolumeETH_not_in: [BigDecimal!]
      dailyVolumeUSD: BigDecimal
      dailyVolumeUSD_not: BigDecimal
      dailyVolumeUSD_gt: BigDecimal
      dailyVolumeUSD_lt: BigDecimal
      dailyVolumeUSD_gte: BigDecimal
      dailyVolumeUSD_lte: BigDecimal
      dailyVolumeUSD_in: [BigDecimal!]
      dailyVolumeUSD_not_in: [BigDecimal!]
      dailyVolumeUntracked: BigDecimal
      dailyVolumeUntracked_not: BigDecimal
      dailyVolumeUntracked_gt: BigDecimal
      dailyVolumeUntracked_lt: BigDecimal
      dailyVolumeUntracked_gte: BigDecimal
      dailyVolumeUntracked_lte: BigDecimal
      dailyVolumeUntracked_in: [BigDecimal!]
      dailyVolumeUntracked_not_in: [BigDecimal!]
      totalVolumeETH: BigDecimal
      totalVolumeETH_not: BigDecimal
      totalVolumeETH_gt: BigDecimal
      totalVolumeETH_lt: BigDecimal
      totalVolumeETH_gte: BigDecimal
      totalVolumeETH_lte: BigDecimal
      totalVolumeETH_in: [BigDecimal!]
      totalVolumeETH_not_in: [BigDecimal!]
      totalLiquidityETH: BigDecimal
      totalLiquidityETH_not: BigDecimal
      totalLiquidityETH_gt: BigDecimal
      totalLiquidityETH_lt: BigDecimal
      totalLiquidityETH_gte: BigDecimal
      totalLiquidityETH_lte: BigDecimal
      totalLiquidityETH_in: [BigDecimal!]
      totalLiquidityETH_not_in: [BigDecimal!]
      totalVolumeUSD: BigDecimal
      totalVolumeUSD_not: BigDecimal
      totalVolumeUSD_gt: BigDecimal
      totalVolumeUSD_lt: BigDecimal
      totalVolumeUSD_gte: BigDecimal
      totalVolumeUSD_lte: BigDecimal
      totalVolumeUSD_in: [BigDecimal!]
      totalVolumeUSD_not_in: [BigDecimal!]
      totalLiquidityUSD: BigDecimal
      totalLiquidityUSD_not: BigDecimal
      totalLiquidityUSD_gt: BigDecimal
      totalLiquidityUSD_lt: BigDecimal
      totalLiquidityUSD_gte: BigDecimal
      totalLiquidityUSD_lte: BigDecimal
      totalLiquidityUSD_in: [BigDecimal!]
      totalLiquidityUSD_not_in: [BigDecimal!]
      maxStored: Int
      maxStored_not: Int
      maxStored_gt: Int
      maxStored_lt: Int
      maxStored_gte: Int
      maxStored_lte: Int
      maxStored_in: [Int!]
      maxStored_not_in: [Int!]
      mostLiquidTokens: [String!]
      mostLiquidTokens_not: [String!]
      mostLiquidTokens_contains: [String!]
      mostLiquidTokens_not_contains: [String!]
      txCount: BigInt
      txCount_not: BigInt
      txCount_gt: BigInt
      txCount_lt: BigInt
      txCount_gte: BigInt
      txCount_lte: BigInt
      txCount_in: [BigInt!]
      txCount_not_in: [BigInt!]
    }

    enum UniswapDayData_orderBy {
      id
      date
      dailyVolumeETH
      dailyVolumeUSD
      dailyVolumeUntracked
      totalVolumeETH
      totalLiquidityETH
      totalVolumeUSD
      totalLiquidityUSD
      maxStored
      mostLiquidTokens
      txCount
    }

    type UniswapFactory {
      id: ID!
      pairCount: Int!
      totalVolumeUSD: BigDecimal!
      totalVolumeETH: BigDecimal!
      untrackedVolumeUSD: BigDecimal!
      totalLiquidityUSD: BigDecimal!
      totalLiquidityETH: BigDecimal!
      txCount: BigInt!
      mostLiquidTokens(
        skip: Int = 0
        first: Int = 100
        orderBy: TokenDayData_orderBy
        orderDirection: OrderDirection
        where: TokenDayData_filter
      ): [TokenDayData!]!
    }

    input UniswapFactory_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      pairCount: Int
      pairCount_not: Int
      pairCount_gt: Int
      pairCount_lt: Int
      pairCount_gte: Int
      pairCount_lte: Int
      pairCount_in: [Int!]
      pairCount_not_in: [Int!]
      totalVolumeUSD: BigDecimal
      totalVolumeUSD_not: BigDecimal
      totalVolumeUSD_gt: BigDecimal
      totalVolumeUSD_lt: BigDecimal
      totalVolumeUSD_gte: BigDecimal
      totalVolumeUSD_lte: BigDecimal
      totalVolumeUSD_in: [BigDecimal!]
      totalVolumeUSD_not_in: [BigDecimal!]
      totalVolumeETH: BigDecimal
      totalVolumeETH_not: BigDecimal
      totalVolumeETH_gt: BigDecimal
      totalVolumeETH_lt: BigDecimal
      totalVolumeETH_gte: BigDecimal
      totalVolumeETH_lte: BigDecimal
      totalVolumeETH_in: [BigDecimal!]
      totalVolumeETH_not_in: [BigDecimal!]
      untrackedVolumeUSD: BigDecimal
      untrackedVolumeUSD_not: BigDecimal
      untrackedVolumeUSD_gt: BigDecimal
      untrackedVolumeUSD_lt: BigDecimal
      untrackedVolumeUSD_gte: BigDecimal
      untrackedVolumeUSD_lte: BigDecimal
      untrackedVolumeUSD_in: [BigDecimal!]
      untrackedVolumeUSD_not_in: [BigDecimal!]
      totalLiquidityUSD: BigDecimal
      totalLiquidityUSD_not: BigDecimal
      totalLiquidityUSD_gt: BigDecimal
      totalLiquidityUSD_lt: BigDecimal
      totalLiquidityUSD_gte: BigDecimal
      totalLiquidityUSD_lte: BigDecimal
      totalLiquidityUSD_in: [BigDecimal!]
      totalLiquidityUSD_not_in: [BigDecimal!]
      totalLiquidityETH: BigDecimal
      totalLiquidityETH_not: BigDecimal
      totalLiquidityETH_gt: BigDecimal
      totalLiquidityETH_lt: BigDecimal
      totalLiquidityETH_gte: BigDecimal
      totalLiquidityETH_lte: BigDecimal
      totalLiquidityETH_in: [BigDecimal!]
      totalLiquidityETH_not_in: [BigDecimal!]
      txCount: BigInt
      txCount_not: BigInt
      txCount_gt: BigInt
      txCount_lt: BigInt
      txCount_gte: BigInt
      txCount_lte: BigInt
      txCount_in: [BigInt!]
      txCount_not_in: [BigInt!]
      mostLiquidTokens: [String!]
      mostLiquidTokens_not: [String!]
      mostLiquidTokens_contains: [String!]
      mostLiquidTokens_not_contains: [String!]
    }

    enum UniswapFactory_orderBy {
      id
      pairCount
      totalVolumeUSD
      totalVolumeETH
      untrackedVolumeUSD
      totalLiquidityUSD
      totalLiquidityETH
      txCount
      mostLiquidTokens
    }

    type User {
      id: ID!
      liquidityPositions(
        skip: Int = 0
        first: Int = 100
        orderBy: LiquidityPosition_orderBy
        orderDirection: OrderDirection
        where: LiquidityPosition_filter
      ): [LiquidityPosition!]
      usdSwapped: BigDecimal!
    }

    input User_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      usdSwapped: BigDecimal
      usdSwapped_not: BigDecimal
      usdSwapped_gt: BigDecimal
      usdSwapped_lt: BigDecimal
      usdSwapped_gte: BigDecimal
      usdSwapped_lte: BigDecimal
      usdSwapped_in: [BigDecimal!]
      usdSwapped_not_in: [BigDecimal!]
    }

    enum User_orderBy {
      id
      liquidityPositions
      usdSwapped
    }

    type _Block_ {
      """
      The hash of the block
      """
      hash: Bytes
      """
      The block number
      """
      number: Int!
    }

    """
    The type for the top-level _meta field
    """
    type _Meta_ {
      """
      Information about a specific subgraph block. The hash of the block
      will be null if the _meta field has a block constraint that asks for
      a block number. It will be filled if the _meta field has no block constraint
      and therefore asks for the latest  block
      """
      block: _Block_!
      """
      The deployment ID
      """
      deployment: String!
      """
      If \`true\`, the subgraph encountered indexing errors at some past block
      """
      hasIndexingErrors: Boolean!
    }

    enum _SubgraphErrorPolicy_ {
      """
      Data will be returned even if the subgraph has indexing errors
      """
      allow
      """
      If the subgraph has indexing errors, data will be omitted. The default.
      """
      deny
    }
  `,
  `.graphclient/sources/uniswapv2/schema.graphql`,
)

export default buildSchema(source, {
  assumeValid: true,
  assumeValidSDL: true,
})
