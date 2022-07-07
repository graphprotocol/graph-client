// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
import { gql } from '@graphql-mesh/utils'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  BigDecimal: any
  BigInt: any
  Bytes: any
}

export type LiquidityPool = {
  protocolName?: Maybe<Scalars['String']>
  /**  Smart contract address of the pool  */
  id: Scalars['ID']
  /**  The protocol this pool belongs to  */
  protocol: DexAmmProtocol
  /**  Name of liquidity pool (e.g. Curve.fi DAI/USDC/USDT)  */
  name?: Maybe<Scalars['String']>
  /**  Symbol of liquidity pool (e.g. 3CRV)  */
  symbol?: Maybe<Scalars['String']>
  /**  Tokens that need to be deposited to take a position in protocol. e.g. WETH and USDC to deposit into the WETH-USDC pool. Array to account for multi-asset pools like Curve and Balancer  */
  inputTokens: Array<Token>
  /**  Token that is minted to track ownership of position in protocol  */
  outputToken: Token
  /**  Aditional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens: Array<RewardToken>
  /**  Fees per trade incurred to the user. Should include all fees that apply to a pool (e.g. Curve has a trading fee AND an admin fee, which is a portion of the trading fee. Uniswap only has a trading fee and no protocol fee. )  */
  fees: Array<LiquidityPoolFee>
  /**  Creation timestamp  */
  createdTimestamp: Scalars['BigInt']
  /**  Creation block number  */
  createdBlockNumber: Scalars['BigInt']
  /**  Current TVL (Total Value Locked) of this pool in USD  */
  totalValueLockedUSD: Scalars['BigDecimal']
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal']
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigInt']>
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars['BigDecimal']>
  /**  Total supply of output token. Note that certain DEXes don't have an output token (e.g. Bancor)  */
  outputTokenSupply: Scalars['BigInt']
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD: Scalars['BigDecimal']
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount: Scalars['BigInt']
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount: Array<Scalars['BigInt']>
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD: Array<Scalars['BigDecimal']>
  /**  Liquidity pool daily snapshots  */
  dailySnapshots: Array<LiquidityPoolDailySnapshot>
  /**  Liquidity pool hourly snapshots  */
  hourlySnapshots: Array<LiquidityPoolHourlySnapshot>
  /**  All deposit (add liquidity) events occurred in this pool  */
  deposits: Array<Deposit>
  /**  All withdraw (remove liquidity) events occurred in this pool  */
  withdraws: Array<Withdraw>
  /**  All trade (swap) events occurred in this pool  */
  swaps: Array<Swap>
  platform?: Maybe<Platform>
  metapool: Scalars['Boolean']
  basePool: Scalars['String']
  assetType: Scalars['Int']
  poolType: PoolType
  isV2: Scalars['Boolean']
  gauge: Scalars['String']
  registry: Scalars['String']
  gaugeType: Scalars['String']
  rewardContract?: Maybe<Scalars['String']>
}

export type LiquidityPoolinputTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
}

export type LiquidityPoolrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<RewardToken_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<RewardToken_filter>
}

export type LiquidityPoolfeesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPoolFee_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPoolFee_filter>
}

export type LiquidityPooldailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPoolDailySnapshot_filter>
}

export type LiquidityPoolhourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPoolHourlySnapshot_filter>
}

export type LiquidityPooldepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Deposit_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Deposit_filter>
}

export type LiquidityPoolwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Withdraw_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Withdraw_filter>
}

export type LiquidityPoolswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Swap_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Swap_filter>
}

export type Query = {
  crossLiquidityPools: Array<LiquidityPool>
  token?: Maybe<Token>
  tokens: Array<Token>
  rewardToken?: Maybe<RewardToken>
  rewardTokens: Array<RewardToken>
  liquidityPoolFee?: Maybe<LiquidityPoolFee>
  liquidityPoolFees: Array<LiquidityPoolFee>
  dexAmmProtocol?: Maybe<DexAmmProtocol>
  dexAmmProtocols: Array<DexAmmProtocol>
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>
  financialsDailySnapshots: Array<FinancialsDailySnapshot>
  liquidityPool?: Maybe<LiquidityPool>
  liquidityPools: Array<LiquidityPool>
  liquidityPoolDailySnapshot?: Maybe<LiquidityPoolDailySnapshot>
  liquidityPoolDailySnapshots: Array<LiquidityPoolDailySnapshot>
  liquidityPoolHourlySnapshot?: Maybe<LiquidityPoolHourlySnapshot>
  liquidityPoolHourlySnapshots: Array<LiquidityPoolHourlySnapshot>
  deposit?: Maybe<Deposit>
  deposits: Array<Deposit>
  withdraw?: Maybe<Withdraw>
  withdraws: Array<Withdraw>
  swap?: Maybe<Swap>
  swaps: Array<Swap>
  account?: Maybe<Account>
  accounts: Array<Account>
  activeAccount?: Maybe<ActiveAccount>
  activeAccounts: Array<ActiveAccount>
  platform?: Maybe<Platform>
  platforms: Array<Platform>
  registry?: Maybe<Registry>
  registries: Array<Registry>
  factory?: Maybe<Factory>
  factories: Array<Factory>
  basePool?: Maybe<BasePool>
  basePools: Array<BasePool>
  tokenSnapshot?: Maybe<TokenSnapshot>
  tokenSnapshots: Array<TokenSnapshot>
  gaugePool?: Maybe<GaugePool>
  gaugePools: Array<GaugePool>
  protocol?: Maybe<Protocol>
  protocols: Array<Protocol>
  event?: Maybe<Event>
  events: Array<Event>
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
}

export type QuerycrossLiquidityPoolsArgs = {
  first: Scalars['Int']
  protocolNames: Array<Scalars['String']>
  orderBy: Scalars['BigDecimal']
  orderDirection: OrderDirection
  where: LiquidityPool_filter
}

export type QuerytokenArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryrewardTokenArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<RewardToken_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<RewardToken_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidityPoolFeeArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidityPoolFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPoolFee_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPoolFee_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerydexAmmProtocolArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerydexAmmProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DexAmmProtocol_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<DexAmmProtocol_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryusageMetricsDailySnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryfinancialsDailySnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<FinancialsDailySnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidityPoolArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidityPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPool_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPool_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidityPoolDailySnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidityPoolDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPoolDailySnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidityPoolHourlySnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidityPoolHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPoolHourlySnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerydepositArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerydepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Deposit_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Deposit_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerywithdrawArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerywithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Withdraw_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Withdraw_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryswapArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Swap_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Swap_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryaccountArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Account_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Account_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryactiveAccountArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<ActiveAccount_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ActiveAccount_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryplatformArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryplatformsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Platform_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Platform_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryregistryArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryregistriesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Registry_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Registry_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryfactoryArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryfactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Factory_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Factory_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerybasePoolArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerybasePoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<BasePool_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<BasePool_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytokenSnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TokenSnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TokenSnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerygaugePoolArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerygaugePoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<GaugePool_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<GaugePool_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryprotocolArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Protocol_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Protocol_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryeventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Event_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Event_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Query_metaArgs = {
  block?: InputMaybe<Block_height>
}

export type LiquidityPoolDailySnapshot = {
  FeesUSD?: Maybe<Scalars['BigDecimal']>
  TokenFeesUSD?: Maybe<Scalars['BigDecimal']>
  TokenFeesRaw?: Maybe<Scalars['BigDecimal']>
  RewardsPerToken?: Maybe<Scalars['BigDecimal']>
  RewardsROI?: Maybe<Scalars['BigDecimal']>
  FeesROI?: Maybe<Scalars['BigDecimal']>
  BlockTimestamp?: Maybe<Scalars['String']>
  DateInterval?: Maybe<Scalars['String']>
  /**  { Smart contract address of the pool }-{ # of days since Unix epoch time }  */
  id: Scalars['ID']
  /**  The protocol this snapshot belongs to  */
  protocol: DexAmmProtocol
  /**  The pool this snapshot belongs to  */
  pool: LiquidityPool
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt']
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt']
  /**  Current TVL (Total Value Locked) of this pool  */
  totalValueLockedUSD: Scalars['BigDecimal']
  /**  All trade volume occurred in a given day, in USD  */
  dailyVolumeUSD: Scalars['BigDecimal']
  /**  All trade volume occurred in a given day for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  dailyVolumeByTokenAmount: Array<Scalars['BigInt']>
  /**  All trade volume occurred in a given day for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  dailyVolumeByTokenUSD: Array<Scalars['BigDecimal']>
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal']
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigInt']>
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars['BigDecimal']>
  /**  Total supply of output token. Note that certain DEXes don't have an output token (e.g. Bancor)  */
  outputTokenSupply?: Maybe<Scalars['BigInt']>
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD?: Maybe<Scalars['BigDecimal']>
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount: Array<Scalars['BigInt']>
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD: Array<Scalars['BigDecimal']>
}

export type Account = {
  /**  Address of the account  */
  id: Scalars['ID']
}

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Account_orderBy = 'id'

export type ActiveAccount = {
  /**  { daily/hourly }-{ Address of the account }-{ Days/hours since Unix epoch }  */
  id: Scalars['ID']
}

export type ActiveAccount_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type ActiveAccount_orderBy = 'id'

export type BasePool = {
  id: Scalars['ID']
  coins: Array<Scalars['String']>
  coinDecimals: Array<Scalars['BigInt']>
}

export type BasePool_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  coins?: InputMaybe<Array<Scalars['String']>>
  coins_not?: InputMaybe<Array<Scalars['String']>>
  coins_contains?: InputMaybe<Array<Scalars['String']>>
  coins_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  coins_not_contains?: InputMaybe<Array<Scalars['String']>>
  coins_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  coinDecimals?: InputMaybe<Array<Scalars['BigInt']>>
  coinDecimals_not?: InputMaybe<Array<Scalars['BigInt']>>
  coinDecimals_contains?: InputMaybe<Array<Scalars['BigInt']>>
  coinDecimals_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  coinDecimals_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
  coinDecimals_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type BasePool_orderBy = 'id' | 'coins' | 'coinDecimals'

export type BlockChangedFilter = {
  number_gte: Scalars['Int']
}

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>
  number?: InputMaybe<Scalars['Int']>
  number_gte?: InputMaybe<Scalars['Int']>
}

export type Deposit = Event & {
  /**  deposit-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID']
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String']
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int']
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol
  /**  Address that received the tokens  */
  to: Scalars['String']
  /**  Address that sent the tokens  */
  from: Scalars['String']
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt']
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt']
  /**  Input tokens of the pool. E.g. WETH and USDC to a WETH-USDC pool  */
  inputTokens: Array<Token>
  /**  Output token of the pool. E.g. the UNI-LP token  */
  outputToken?: Maybe<Token>
  /**  Amount of input tokens in the token's native unit  */
  inputTokenAmounts: Array<Scalars['BigInt']>
  /**  Amount of output tokens in the token's native unit  */
  outputTokenAmount?: Maybe<Scalars['BigInt']>
  /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens deposited into a pool)  */
  amountUSD: Scalars['BigDecimal']
  /**  The pool involving this transaction  */
  pool: LiquidityPool
}

export type DepositinputTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
}

export type Deposit_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  hash?: InputMaybe<Scalars['String']>
  hash_not?: InputMaybe<Scalars['String']>
  hash_gt?: InputMaybe<Scalars['String']>
  hash_lt?: InputMaybe<Scalars['String']>
  hash_gte?: InputMaybe<Scalars['String']>
  hash_lte?: InputMaybe<Scalars['String']>
  hash_in?: InputMaybe<Array<Scalars['String']>>
  hash_not_in?: InputMaybe<Array<Scalars['String']>>
  hash_contains?: InputMaybe<Scalars['String']>
  hash_contains_nocase?: InputMaybe<Scalars['String']>
  hash_not_contains?: InputMaybe<Scalars['String']>
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>
  hash_starts_with?: InputMaybe<Scalars['String']>
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>
  hash_not_starts_with?: InputMaybe<Scalars['String']>
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  hash_ends_with?: InputMaybe<Scalars['String']>
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>
  hash_not_ends_with?: InputMaybe<Scalars['String']>
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  logIndex?: InputMaybe<Scalars['Int']>
  logIndex_not?: InputMaybe<Scalars['Int']>
  logIndex_gt?: InputMaybe<Scalars['Int']>
  logIndex_lt?: InputMaybe<Scalars['Int']>
  logIndex_gte?: InputMaybe<Scalars['Int']>
  logIndex_lte?: InputMaybe<Scalars['Int']>
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>
  protocol?: InputMaybe<Scalars['String']>
  protocol_not?: InputMaybe<Scalars['String']>
  protocol_gt?: InputMaybe<Scalars['String']>
  protocol_lt?: InputMaybe<Scalars['String']>
  protocol_gte?: InputMaybe<Scalars['String']>
  protocol_lte?: InputMaybe<Scalars['String']>
  protocol_in?: InputMaybe<Array<Scalars['String']>>
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>
  protocol_contains?: InputMaybe<Scalars['String']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_not_contains?: InputMaybe<Scalars['String']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_starts_with?: InputMaybe<Scalars['String']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_starts_with?: InputMaybe<Scalars['String']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_ends_with?: InputMaybe<Scalars['String']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_?: InputMaybe<DexAmmProtocol_filter>
  to?: InputMaybe<Scalars['String']>
  to_not?: InputMaybe<Scalars['String']>
  to_gt?: InputMaybe<Scalars['String']>
  to_lt?: InputMaybe<Scalars['String']>
  to_gte?: InputMaybe<Scalars['String']>
  to_lte?: InputMaybe<Scalars['String']>
  to_in?: InputMaybe<Array<Scalars['String']>>
  to_not_in?: InputMaybe<Array<Scalars['String']>>
  to_contains?: InputMaybe<Scalars['String']>
  to_contains_nocase?: InputMaybe<Scalars['String']>
  to_not_contains?: InputMaybe<Scalars['String']>
  to_not_contains_nocase?: InputMaybe<Scalars['String']>
  to_starts_with?: InputMaybe<Scalars['String']>
  to_starts_with_nocase?: InputMaybe<Scalars['String']>
  to_not_starts_with?: InputMaybe<Scalars['String']>
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  to_ends_with?: InputMaybe<Scalars['String']>
  to_ends_with_nocase?: InputMaybe<Scalars['String']>
  to_not_ends_with?: InputMaybe<Scalars['String']>
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  from?: InputMaybe<Scalars['String']>
  from_not?: InputMaybe<Scalars['String']>
  from_gt?: InputMaybe<Scalars['String']>
  from_lt?: InputMaybe<Scalars['String']>
  from_gte?: InputMaybe<Scalars['String']>
  from_lte?: InputMaybe<Scalars['String']>
  from_in?: InputMaybe<Array<Scalars['String']>>
  from_not_in?: InputMaybe<Array<Scalars['String']>>
  from_contains?: InputMaybe<Scalars['String']>
  from_contains_nocase?: InputMaybe<Scalars['String']>
  from_not_contains?: InputMaybe<Scalars['String']>
  from_not_contains_nocase?: InputMaybe<Scalars['String']>
  from_starts_with?: InputMaybe<Scalars['String']>
  from_starts_with_nocase?: InputMaybe<Scalars['String']>
  from_not_starts_with?: InputMaybe<Scalars['String']>
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  from_ends_with?: InputMaybe<Scalars['String']>
  from_ends_with_nocase?: InputMaybe<Scalars['String']>
  from_not_ends_with?: InputMaybe<Scalars['String']>
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokens?: InputMaybe<Array<Scalars['String']>>
  inputTokens_not?: InputMaybe<Array<Scalars['String']>>
  inputTokens_contains?: InputMaybe<Array<Scalars['String']>>
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  inputTokens_?: InputMaybe<Token_filter>
  outputToken?: InputMaybe<Scalars['String']>
  outputToken_not?: InputMaybe<Scalars['String']>
  outputToken_gt?: InputMaybe<Scalars['String']>
  outputToken_lt?: InputMaybe<Scalars['String']>
  outputToken_gte?: InputMaybe<Scalars['String']>
  outputToken_lte?: InputMaybe<Scalars['String']>
  outputToken_in?: InputMaybe<Array<Scalars['String']>>
  outputToken_not_in?: InputMaybe<Array<Scalars['String']>>
  outputToken_contains?: InputMaybe<Scalars['String']>
  outputToken_contains_nocase?: InputMaybe<Scalars['String']>
  outputToken_not_contains?: InputMaybe<Scalars['String']>
  outputToken_not_contains_nocase?: InputMaybe<Scalars['String']>
  outputToken_starts_with?: InputMaybe<Scalars['String']>
  outputToken_starts_with_nocase?: InputMaybe<Scalars['String']>
  outputToken_not_starts_with?: InputMaybe<Scalars['String']>
  outputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  outputToken_ends_with?: InputMaybe<Scalars['String']>
  outputToken_ends_with_nocase?: InputMaybe<Scalars['String']>
  outputToken_not_ends_with?: InputMaybe<Scalars['String']>
  outputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  outputToken_?: InputMaybe<Token_filter>
  inputTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  outputTokenAmount?: InputMaybe<Scalars['BigInt']>
  outputTokenAmount_not?: InputMaybe<Scalars['BigInt']>
  outputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>
  outputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>
  outputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>
  outputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>
  outputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  outputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  amountUSD?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  pool?: InputMaybe<Scalars['String']>
  pool_not?: InputMaybe<Scalars['String']>
  pool_gt?: InputMaybe<Scalars['String']>
  pool_lt?: InputMaybe<Scalars['String']>
  pool_gte?: InputMaybe<Scalars['String']>
  pool_lte?: InputMaybe<Scalars['String']>
  pool_in?: InputMaybe<Array<Scalars['String']>>
  pool_not_in?: InputMaybe<Array<Scalars['String']>>
  pool_contains?: InputMaybe<Scalars['String']>
  pool_contains_nocase?: InputMaybe<Scalars['String']>
  pool_not_contains?: InputMaybe<Scalars['String']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>
  pool_starts_with?: InputMaybe<Scalars['String']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>
  pool_not_starts_with?: InputMaybe<Scalars['String']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  pool_ends_with?: InputMaybe<Scalars['String']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>
  pool_not_ends_with?: InputMaybe<Scalars['String']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  pool_?: InputMaybe<LiquidityPool_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Deposit_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'inputTokens'
  | 'outputToken'
  | 'inputTokenAmounts'
  | 'outputTokenAmount'
  | 'amountUSD'
  | 'pool'

export type DexAmmProtocol = Protocol & {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ID']
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars['String']
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars['String']
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String']
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String']
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String']
  /**  The blockchain network this subgraph is indexing on  */
  network: Network
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal']
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>
  /**  All historical volume in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal']
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal']
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal']
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal']
  /**  # of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int']
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>
  /**  All pools that belong to this protocol  */
  pools: Array<LiquidityPool>
}

export type DexAmmProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>
}

export type DexAmmProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>
}

export type DexAmmProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<FinancialsDailySnapshot_filter>
}

export type DexAmmProtocolpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPool_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPool_filter>
}

export type DexAmmProtocol_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_gt?: InputMaybe<Scalars['String']>
  name_lt?: InputMaybe<Scalars['String']>
  name_gte?: InputMaybe<Scalars['String']>
  name_lte?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_not_in?: InputMaybe<Array<Scalars['String']>>
  name_contains?: InputMaybe<Scalars['String']>
  name_contains_nocase?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_not_contains_nocase?: InputMaybe<Scalars['String']>
  name_starts_with?: InputMaybe<Scalars['String']>
  name_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_not_starts_with?: InputMaybe<Scalars['String']>
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_ends_with?: InputMaybe<Scalars['String']>
  name_ends_with_nocase?: InputMaybe<Scalars['String']>
  name_not_ends_with?: InputMaybe<Scalars['String']>
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  slug_not?: InputMaybe<Scalars['String']>
  slug_gt?: InputMaybe<Scalars['String']>
  slug_lt?: InputMaybe<Scalars['String']>
  slug_gte?: InputMaybe<Scalars['String']>
  slug_lte?: InputMaybe<Scalars['String']>
  slug_in?: InputMaybe<Array<Scalars['String']>>
  slug_not_in?: InputMaybe<Array<Scalars['String']>>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_contains_nocase?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_contains_nocase?: InputMaybe<Scalars['String']>
  slug_starts_with?: InputMaybe<Scalars['String']>
  slug_starts_with_nocase?: InputMaybe<Scalars['String']>
  slug_not_starts_with?: InputMaybe<Scalars['String']>
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  slug_ends_with?: InputMaybe<Scalars['String']>
  slug_ends_with_nocase?: InputMaybe<Scalars['String']>
  slug_not_ends_with?: InputMaybe<Scalars['String']>
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  schemaVersion?: InputMaybe<Scalars['String']>
  schemaVersion_not?: InputMaybe<Scalars['String']>
  schemaVersion_gt?: InputMaybe<Scalars['String']>
  schemaVersion_lt?: InputMaybe<Scalars['String']>
  schemaVersion_gte?: InputMaybe<Scalars['String']>
  schemaVersion_lte?: InputMaybe<Scalars['String']>
  schemaVersion_in?: InputMaybe<Array<Scalars['String']>>
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>
  schemaVersion_contains?: InputMaybe<Scalars['String']>
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>
  schemaVersion_not_contains?: InputMaybe<Scalars['String']>
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>
  schemaVersion_starts_with?: InputMaybe<Scalars['String']>
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  schemaVersion_ends_with?: InputMaybe<Scalars['String']>
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  subgraphVersion?: InputMaybe<Scalars['String']>
  subgraphVersion_not?: InputMaybe<Scalars['String']>
  subgraphVersion_gt?: InputMaybe<Scalars['String']>
  subgraphVersion_lt?: InputMaybe<Scalars['String']>
  subgraphVersion_gte?: InputMaybe<Scalars['String']>
  subgraphVersion_lte?: InputMaybe<Scalars['String']>
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>
  subgraphVersion_contains?: InputMaybe<Scalars['String']>
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']>
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']>
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']>
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  methodologyVersion?: InputMaybe<Scalars['String']>
  methodologyVersion_not?: InputMaybe<Scalars['String']>
  methodologyVersion_gt?: InputMaybe<Scalars['String']>
  methodologyVersion_lt?: InputMaybe<Scalars['String']>
  methodologyVersion_gte?: InputMaybe<Scalars['String']>
  methodologyVersion_lte?: InputMaybe<Scalars['String']>
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>
  methodologyVersion_contains?: InputMaybe<Scalars['String']>
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']>
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']>
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']>
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  network?: InputMaybe<Network>
  network_not?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  network_not_in?: InputMaybe<Array<Network>>
  type?: InputMaybe<ProtocolType>
  type_not?: InputMaybe<ProtocolType>
  type_in?: InputMaybe<Array<ProtocolType>>
  type_not_in?: InputMaybe<Array<ProtocolType>>
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>
  dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_filter>
  hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_filter>
  financialMetrics_?: InputMaybe<FinancialsDailySnapshot_filter>
  pools_?: InputMaybe<LiquidityPool_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type DexAmmProtocol_orderBy =
  | 'id'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'cumulativeVolumeUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'cumulativeUniqueUsers'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics'
  | 'pools'

/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type Event = {
  /**  { Event type }-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID']
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String']
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int']
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol
  /**  Address that received the tokens  */
  to: Scalars['String']
  /**  Address that sent the tokens  */
  from: Scalars['String']
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt']
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt']
}

export type Event_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  hash?: InputMaybe<Scalars['String']>
  hash_not?: InputMaybe<Scalars['String']>
  hash_gt?: InputMaybe<Scalars['String']>
  hash_lt?: InputMaybe<Scalars['String']>
  hash_gte?: InputMaybe<Scalars['String']>
  hash_lte?: InputMaybe<Scalars['String']>
  hash_in?: InputMaybe<Array<Scalars['String']>>
  hash_not_in?: InputMaybe<Array<Scalars['String']>>
  hash_contains?: InputMaybe<Scalars['String']>
  hash_contains_nocase?: InputMaybe<Scalars['String']>
  hash_not_contains?: InputMaybe<Scalars['String']>
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>
  hash_starts_with?: InputMaybe<Scalars['String']>
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>
  hash_not_starts_with?: InputMaybe<Scalars['String']>
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  hash_ends_with?: InputMaybe<Scalars['String']>
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>
  hash_not_ends_with?: InputMaybe<Scalars['String']>
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  logIndex?: InputMaybe<Scalars['Int']>
  logIndex_not?: InputMaybe<Scalars['Int']>
  logIndex_gt?: InputMaybe<Scalars['Int']>
  logIndex_lt?: InputMaybe<Scalars['Int']>
  logIndex_gte?: InputMaybe<Scalars['Int']>
  logIndex_lte?: InputMaybe<Scalars['Int']>
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>
  protocol?: InputMaybe<Scalars['String']>
  protocol_not?: InputMaybe<Scalars['String']>
  protocol_gt?: InputMaybe<Scalars['String']>
  protocol_lt?: InputMaybe<Scalars['String']>
  protocol_gte?: InputMaybe<Scalars['String']>
  protocol_lte?: InputMaybe<Scalars['String']>
  protocol_in?: InputMaybe<Array<Scalars['String']>>
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>
  protocol_contains?: InputMaybe<Scalars['String']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_not_contains?: InputMaybe<Scalars['String']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_starts_with?: InputMaybe<Scalars['String']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_starts_with?: InputMaybe<Scalars['String']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_ends_with?: InputMaybe<Scalars['String']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_?: InputMaybe<DexAmmProtocol_filter>
  to?: InputMaybe<Scalars['String']>
  to_not?: InputMaybe<Scalars['String']>
  to_gt?: InputMaybe<Scalars['String']>
  to_lt?: InputMaybe<Scalars['String']>
  to_gte?: InputMaybe<Scalars['String']>
  to_lte?: InputMaybe<Scalars['String']>
  to_in?: InputMaybe<Array<Scalars['String']>>
  to_not_in?: InputMaybe<Array<Scalars['String']>>
  to_contains?: InputMaybe<Scalars['String']>
  to_contains_nocase?: InputMaybe<Scalars['String']>
  to_not_contains?: InputMaybe<Scalars['String']>
  to_not_contains_nocase?: InputMaybe<Scalars['String']>
  to_starts_with?: InputMaybe<Scalars['String']>
  to_starts_with_nocase?: InputMaybe<Scalars['String']>
  to_not_starts_with?: InputMaybe<Scalars['String']>
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  to_ends_with?: InputMaybe<Scalars['String']>
  to_ends_with_nocase?: InputMaybe<Scalars['String']>
  to_not_ends_with?: InputMaybe<Scalars['String']>
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  from?: InputMaybe<Scalars['String']>
  from_not?: InputMaybe<Scalars['String']>
  from_gt?: InputMaybe<Scalars['String']>
  from_lt?: InputMaybe<Scalars['String']>
  from_gte?: InputMaybe<Scalars['String']>
  from_lte?: InputMaybe<Scalars['String']>
  from_in?: InputMaybe<Array<Scalars['String']>>
  from_not_in?: InputMaybe<Array<Scalars['String']>>
  from_contains?: InputMaybe<Scalars['String']>
  from_contains_nocase?: InputMaybe<Scalars['String']>
  from_not_contains?: InputMaybe<Scalars['String']>
  from_not_contains_nocase?: InputMaybe<Scalars['String']>
  from_starts_with?: InputMaybe<Scalars['String']>
  from_starts_with_nocase?: InputMaybe<Scalars['String']>
  from_not_starts_with?: InputMaybe<Scalars['String']>
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  from_ends_with?: InputMaybe<Scalars['String']>
  from_ends_with_nocase?: InputMaybe<Scalars['String']>
  from_not_ends_with?: InputMaybe<Scalars['String']>
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Event_orderBy = 'id' | 'hash' | 'logIndex' | 'protocol' | 'to' | 'from' | 'blockNumber' | 'timestamp'

export type Factory = {
  id: Scalars['ID']
  poolCount: Scalars['BigInt']
}

export type Factory_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  poolCount?: InputMaybe<Scalars['BigInt']>
  poolCount_not?: InputMaybe<Scalars['BigInt']>
  poolCount_gt?: InputMaybe<Scalars['BigInt']>
  poolCount_lt?: InputMaybe<Scalars['BigInt']>
  poolCount_gte?: InputMaybe<Scalars['BigInt']>
  poolCount_lte?: InputMaybe<Scalars['BigInt']>
  poolCount_in?: InputMaybe<Array<Scalars['BigInt']>>
  poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Factory_orderBy = 'id' | 'poolCount'

export type FinancialsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['ID']
  /**  Protocol this snapshot is associated with  */
  protocol: DexAmmProtocol
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal']
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>
  /**  All trade volume occurred in a given day, in USD  */
  dailyVolumeUSD: Scalars['BigDecimal']
  /**  All historical trade volume in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal']
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  dailySupplySideRevenueUSD: Scalars['BigDecimal']
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal']
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  dailyProtocolSideRevenueUSD: Scalars['BigDecimal']
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal']
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  dailyTotalRevenueUSD: Scalars['BigDecimal']
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal']
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt']
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt']
}

export type FinancialsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  protocol?: InputMaybe<Scalars['String']>
  protocol_not?: InputMaybe<Scalars['String']>
  protocol_gt?: InputMaybe<Scalars['String']>
  protocol_lt?: InputMaybe<Scalars['String']>
  protocol_gte?: InputMaybe<Scalars['String']>
  protocol_lte?: InputMaybe<Scalars['String']>
  protocol_in?: InputMaybe<Array<Scalars['String']>>
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>
  protocol_contains?: InputMaybe<Scalars['String']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_not_contains?: InputMaybe<Scalars['String']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_starts_with?: InputMaybe<Scalars['String']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_starts_with?: InputMaybe<Scalars['String']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_ends_with?: InputMaybe<Scalars['String']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_?: InputMaybe<DexAmmProtocol_filter>
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type FinancialsDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'dailyVolumeUSD'
  | 'cumulativeVolumeUSD'
  | 'dailySupplySideRevenueUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'dailyProtocolSideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'dailyTotalRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'blockNumber'
  | 'timestamp'

export type GaugePool = {
  id: Scalars['ID']
  pool: Scalars['String']
}

export type GaugePool_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  pool?: InputMaybe<Scalars['String']>
  pool_not?: InputMaybe<Scalars['String']>
  pool_gt?: InputMaybe<Scalars['String']>
  pool_lt?: InputMaybe<Scalars['String']>
  pool_gte?: InputMaybe<Scalars['String']>
  pool_lte?: InputMaybe<Scalars['String']>
  pool_in?: InputMaybe<Array<Scalars['String']>>
  pool_not_in?: InputMaybe<Array<Scalars['String']>>
  pool_contains?: InputMaybe<Scalars['String']>
  pool_contains_nocase?: InputMaybe<Scalars['String']>
  pool_not_contains?: InputMaybe<Scalars['String']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>
  pool_starts_with?: InputMaybe<Scalars['String']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>
  pool_not_starts_with?: InputMaybe<Scalars['String']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  pool_ends_with?: InputMaybe<Scalars['String']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>
  pool_not_ends_with?: InputMaybe<Scalars['String']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type GaugePool_orderBy = 'id' | 'pool'

export type LiquidityPoolDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  protocol?: InputMaybe<Scalars['String']>
  protocol_not?: InputMaybe<Scalars['String']>
  protocol_gt?: InputMaybe<Scalars['String']>
  protocol_lt?: InputMaybe<Scalars['String']>
  protocol_gte?: InputMaybe<Scalars['String']>
  protocol_lte?: InputMaybe<Scalars['String']>
  protocol_in?: InputMaybe<Array<Scalars['String']>>
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>
  protocol_contains?: InputMaybe<Scalars['String']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_not_contains?: InputMaybe<Scalars['String']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_starts_with?: InputMaybe<Scalars['String']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_starts_with?: InputMaybe<Scalars['String']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_ends_with?: InputMaybe<Scalars['String']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_?: InputMaybe<DexAmmProtocol_filter>
  pool?: InputMaybe<Scalars['String']>
  pool_not?: InputMaybe<Scalars['String']>
  pool_gt?: InputMaybe<Scalars['String']>
  pool_lt?: InputMaybe<Scalars['String']>
  pool_gte?: InputMaybe<Scalars['String']>
  pool_lte?: InputMaybe<Scalars['String']>
  pool_in?: InputMaybe<Array<Scalars['String']>>
  pool_not_in?: InputMaybe<Array<Scalars['String']>>
  pool_contains?: InputMaybe<Scalars['String']>
  pool_contains_nocase?: InputMaybe<Scalars['String']>
  pool_not_contains?: InputMaybe<Scalars['String']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>
  pool_starts_with?: InputMaybe<Scalars['String']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>
  pool_not_starts_with?: InputMaybe<Scalars['String']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  pool_ends_with?: InputMaybe<Scalars['String']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>
  pool_not_ends_with?: InputMaybe<Scalars['String']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  pool_?: InputMaybe<LiquidityPool_filter>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']>>
  dailyVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']>>
  dailyVolumeByTokenAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>
  dailyVolumeByTokenAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  dailyVolumeByTokenAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
  dailyVolumeByTokenAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  dailyVolumeByTokenUSD?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeByTokenUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeByTokenUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeByTokenUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeByTokenUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type LiquidityPoolDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'pool'
  | 'blockNumber'
  | 'timestamp'
  | 'totalValueLockedUSD'
  | 'dailyVolumeUSD'
  | 'dailyVolumeByTokenAmount'
  | 'dailyVolumeByTokenUSD'
  | 'cumulativeVolumeUSD'
  | 'inputTokenBalances'
  | 'inputTokenWeights'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'stakedOutputTokenAmount'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'

export type LiquidityPoolFee = {
  /**  { Fee type }-{ Pool address }  */
  id: Scalars['ID']
  /**  Fee as a percentage of the trade (swap) amount. Does not always apply  */
  feePercentage?: Maybe<Scalars['BigDecimal']>
  /**  Type of fee this pool uses  */
  feeType: LiquidityPoolFeeType
}

export type LiquidityPoolFeeType =
  /**  Total fixed fee paid by the user per trade, as a percentage of the traded amount. e.g. 0.3% for Uniswap v2, 0.3% for Sushiswap, 0.04% for Curve v1.  */
  | 'FIXED_TRADING_FEE'
  /**  Some protocols use tiered fees instead of fixed fee (e.g. DYDX, DODO). Set `feePercentage` as 0 but handle the tiered fees in the mapping code.  */
  | 'TIERED_TRADING_FEE'
  /**  Some protocols use dynamic fees instead of fixed fee (e.g. Balancer v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  | 'DYNAMIC_TRADING_FEE'
  /**  Fixed fee that's paid to the LP, as a percentage of the traded amount. e.g. 0.25% for Sushiswap, 0.02% for Curve v1.  */
  | 'FIXED_LP_FEE'
  /**  Some protocols use dynamic LP fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  | 'DYNAMIC_LP_FEE'
  /**  Fixed fee that's paid to the protocol, as a percentage of the traded amount. e.g. 0.05% for Sushiswap, 0.02% for Curve v1.  */
  | 'FIXED_PROTOCOL_FEE'
  /**  Some protocols use dynamic protocol fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  | 'DYNAMIC_PROTOCOL_FEE'

export type LiquidityPoolFee_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  feePercentage?: InputMaybe<Scalars['BigDecimal']>
  feePercentage_not?: InputMaybe<Scalars['BigDecimal']>
  feePercentage_gt?: InputMaybe<Scalars['BigDecimal']>
  feePercentage_lt?: InputMaybe<Scalars['BigDecimal']>
  feePercentage_gte?: InputMaybe<Scalars['BigDecimal']>
  feePercentage_lte?: InputMaybe<Scalars['BigDecimal']>
  feePercentage_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  feePercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  feeType?: InputMaybe<LiquidityPoolFeeType>
  feeType_not?: InputMaybe<LiquidityPoolFeeType>
  feeType_in?: InputMaybe<Array<LiquidityPoolFeeType>>
  feeType_not_in?: InputMaybe<Array<LiquidityPoolFeeType>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type LiquidityPoolFee_orderBy = 'id' | 'feePercentage' | 'feeType'

export type LiquidityPoolHourlySnapshot = {
  /**  { Smart contract address of the pool }-{ # of hours since Unix epoch time }  */
  id: Scalars['ID']
  /**  The protocol this snapshot belongs to  */
  protocol: DexAmmProtocol
  /**  The pool this snapshot belongs to  */
  pool: LiquidityPool
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt']
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt']
  /**  Current TVL (Total Value Locked) of this pool  */
  totalValueLockedUSD: Scalars['BigDecimal']
  /**  All trade volume occurred in a given hour, in USD  */
  hourlyVolumeUSD: Scalars['BigDecimal']
  /**  All trade volume occurred in a given hour for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  hourlyVolumeByTokenAmount: Array<Scalars['BigInt']>
  /**  All trade volume occurred in a given hour for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  hourlyVolumeByTokenUSD: Array<Scalars['BigDecimal']>
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars['BigDecimal']
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigInt']>
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars['BigDecimal']>
  /**  Total supply of output token. Note that certain DEXes don't have an output token (e.g. Bancor)  */
  outputTokenSupply?: Maybe<Scalars['BigInt']>
  /**  Price per share of output token in USD  */
  outputTokenPriceUSD?: Maybe<Scalars['BigDecimal']>
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount: Array<Scalars['BigInt']>
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD: Array<Scalars['BigDecimal']>
}

export type LiquidityPoolHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  protocol?: InputMaybe<Scalars['String']>
  protocol_not?: InputMaybe<Scalars['String']>
  protocol_gt?: InputMaybe<Scalars['String']>
  protocol_lt?: InputMaybe<Scalars['String']>
  protocol_gte?: InputMaybe<Scalars['String']>
  protocol_lte?: InputMaybe<Scalars['String']>
  protocol_in?: InputMaybe<Array<Scalars['String']>>
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>
  protocol_contains?: InputMaybe<Scalars['String']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_not_contains?: InputMaybe<Scalars['String']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_starts_with?: InputMaybe<Scalars['String']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_starts_with?: InputMaybe<Scalars['String']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_ends_with?: InputMaybe<Scalars['String']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_?: InputMaybe<DexAmmProtocol_filter>
  pool?: InputMaybe<Scalars['String']>
  pool_not?: InputMaybe<Scalars['String']>
  pool_gt?: InputMaybe<Scalars['String']>
  pool_lt?: InputMaybe<Scalars['String']>
  pool_gte?: InputMaybe<Scalars['String']>
  pool_lte?: InputMaybe<Scalars['String']>
  pool_in?: InputMaybe<Array<Scalars['String']>>
  pool_not_in?: InputMaybe<Array<Scalars['String']>>
  pool_contains?: InputMaybe<Scalars['String']>
  pool_contains_nocase?: InputMaybe<Scalars['String']>
  pool_not_contains?: InputMaybe<Scalars['String']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>
  pool_starts_with?: InputMaybe<Scalars['String']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>
  pool_not_starts_with?: InputMaybe<Scalars['String']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  pool_ends_with?: InputMaybe<Scalars['String']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>
  pool_not_ends_with?: InputMaybe<Scalars['String']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  pool_?: InputMaybe<LiquidityPool_filter>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']>>
  hourlyVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']>>
  hourlyVolumeByTokenAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>
  hourlyVolumeByTokenAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  hourlyVolumeByTokenAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
  hourlyVolumeByTokenAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  hourlyVolumeByTokenUSD?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeByTokenUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeByTokenUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeByTokenUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeByTokenUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type LiquidityPoolHourlySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'pool'
  | 'blockNumber'
  | 'timestamp'
  | 'totalValueLockedUSD'
  | 'hourlyVolumeUSD'
  | 'hourlyVolumeByTokenAmount'
  | 'hourlyVolumeByTokenUSD'
  | 'cumulativeVolumeUSD'
  | 'inputTokenBalances'
  | 'inputTokenWeights'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'stakedOutputTokenAmount'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'

export type LiquidityPool_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  protocol?: InputMaybe<Scalars['String']>
  protocol_not?: InputMaybe<Scalars['String']>
  protocol_gt?: InputMaybe<Scalars['String']>
  protocol_lt?: InputMaybe<Scalars['String']>
  protocol_gte?: InputMaybe<Scalars['String']>
  protocol_lte?: InputMaybe<Scalars['String']>
  protocol_in?: InputMaybe<Array<Scalars['String']>>
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>
  protocol_contains?: InputMaybe<Scalars['String']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_not_contains?: InputMaybe<Scalars['String']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_starts_with?: InputMaybe<Scalars['String']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_starts_with?: InputMaybe<Scalars['String']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_ends_with?: InputMaybe<Scalars['String']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_?: InputMaybe<DexAmmProtocol_filter>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_gt?: InputMaybe<Scalars['String']>
  name_lt?: InputMaybe<Scalars['String']>
  name_gte?: InputMaybe<Scalars['String']>
  name_lte?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_not_in?: InputMaybe<Array<Scalars['String']>>
  name_contains?: InputMaybe<Scalars['String']>
  name_contains_nocase?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_not_contains_nocase?: InputMaybe<Scalars['String']>
  name_starts_with?: InputMaybe<Scalars['String']>
  name_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_not_starts_with?: InputMaybe<Scalars['String']>
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_ends_with?: InputMaybe<Scalars['String']>
  name_ends_with_nocase?: InputMaybe<Scalars['String']>
  name_not_ends_with?: InputMaybe<Scalars['String']>
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  symbol?: InputMaybe<Scalars['String']>
  symbol_not?: InputMaybe<Scalars['String']>
  symbol_gt?: InputMaybe<Scalars['String']>
  symbol_lt?: InputMaybe<Scalars['String']>
  symbol_gte?: InputMaybe<Scalars['String']>
  symbol_lte?: InputMaybe<Scalars['String']>
  symbol_in?: InputMaybe<Array<Scalars['String']>>
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>
  symbol_contains?: InputMaybe<Scalars['String']>
  symbol_contains_nocase?: InputMaybe<Scalars['String']>
  symbol_not_contains?: InputMaybe<Scalars['String']>
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>
  symbol_starts_with?: InputMaybe<Scalars['String']>
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>
  symbol_not_starts_with?: InputMaybe<Scalars['String']>
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  symbol_ends_with?: InputMaybe<Scalars['String']>
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>
  symbol_not_ends_with?: InputMaybe<Scalars['String']>
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  inputTokens?: InputMaybe<Array<Scalars['String']>>
  inputTokens_not?: InputMaybe<Array<Scalars['String']>>
  inputTokens_contains?: InputMaybe<Array<Scalars['String']>>
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  inputTokens_?: InputMaybe<Token_filter>
  outputToken?: InputMaybe<Scalars['String']>
  outputToken_not?: InputMaybe<Scalars['String']>
  outputToken_gt?: InputMaybe<Scalars['String']>
  outputToken_lt?: InputMaybe<Scalars['String']>
  outputToken_gte?: InputMaybe<Scalars['String']>
  outputToken_lte?: InputMaybe<Scalars['String']>
  outputToken_in?: InputMaybe<Array<Scalars['String']>>
  outputToken_not_in?: InputMaybe<Array<Scalars['String']>>
  outputToken_contains?: InputMaybe<Scalars['String']>
  outputToken_contains_nocase?: InputMaybe<Scalars['String']>
  outputToken_not_contains?: InputMaybe<Scalars['String']>
  outputToken_not_contains_nocase?: InputMaybe<Scalars['String']>
  outputToken_starts_with?: InputMaybe<Scalars['String']>
  outputToken_starts_with_nocase?: InputMaybe<Scalars['String']>
  outputToken_not_starts_with?: InputMaybe<Scalars['String']>
  outputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  outputToken_ends_with?: InputMaybe<Scalars['String']>
  outputToken_ends_with_nocase?: InputMaybe<Scalars['String']>
  outputToken_not_ends_with?: InputMaybe<Scalars['String']>
  outputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  outputToken_?: InputMaybe<Token_filter>
  rewardTokens?: InputMaybe<Array<Scalars['String']>>
  rewardTokens_not?: InputMaybe<Array<Scalars['String']>>
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  rewardTokens_?: InputMaybe<RewardToken_filter>
  fees?: InputMaybe<Array<Scalars['String']>>
  fees_not?: InputMaybe<Array<Scalars['String']>>
  fees_contains?: InputMaybe<Array<Scalars['String']>>
  fees_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  fees_not_contains?: InputMaybe<Array<Scalars['String']>>
  fees_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  fees_?: InputMaybe<LiquidityPoolFee_filter>
  createdTimestamp?: InputMaybe<Scalars['BigInt']>
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']>
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  createdBlockNumber?: InputMaybe<Scalars['BigInt']>
  createdBlockNumber_not?: InputMaybe<Scalars['BigInt']>
  createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']>
  createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']>
  createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']>
  createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']>
  createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  outputTokenSupply?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>
  outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>
  outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailySnapshots_?: InputMaybe<LiquidityPoolDailySnapshot_filter>
  hourlySnapshots_?: InputMaybe<LiquidityPoolHourlySnapshot_filter>
  deposits_?: InputMaybe<Deposit_filter>
  withdraws_?: InputMaybe<Withdraw_filter>
  swaps_?: InputMaybe<Swap_filter>
  platform?: InputMaybe<Scalars['String']>
  platform_not?: InputMaybe<Scalars['String']>
  platform_gt?: InputMaybe<Scalars['String']>
  platform_lt?: InputMaybe<Scalars['String']>
  platform_gte?: InputMaybe<Scalars['String']>
  platform_lte?: InputMaybe<Scalars['String']>
  platform_in?: InputMaybe<Array<Scalars['String']>>
  platform_not_in?: InputMaybe<Array<Scalars['String']>>
  platform_contains?: InputMaybe<Scalars['String']>
  platform_contains_nocase?: InputMaybe<Scalars['String']>
  platform_not_contains?: InputMaybe<Scalars['String']>
  platform_not_contains_nocase?: InputMaybe<Scalars['String']>
  platform_starts_with?: InputMaybe<Scalars['String']>
  platform_starts_with_nocase?: InputMaybe<Scalars['String']>
  platform_not_starts_with?: InputMaybe<Scalars['String']>
  platform_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  platform_ends_with?: InputMaybe<Scalars['String']>
  platform_ends_with_nocase?: InputMaybe<Scalars['String']>
  platform_not_ends_with?: InputMaybe<Scalars['String']>
  platform_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  platform_?: InputMaybe<Platform_filter>
  metapool?: InputMaybe<Scalars['Boolean']>
  metapool_not?: InputMaybe<Scalars['Boolean']>
  metapool_in?: InputMaybe<Array<Scalars['Boolean']>>
  metapool_not_in?: InputMaybe<Array<Scalars['Boolean']>>
  basePool?: InputMaybe<Scalars['String']>
  basePool_not?: InputMaybe<Scalars['String']>
  basePool_gt?: InputMaybe<Scalars['String']>
  basePool_lt?: InputMaybe<Scalars['String']>
  basePool_gte?: InputMaybe<Scalars['String']>
  basePool_lte?: InputMaybe<Scalars['String']>
  basePool_in?: InputMaybe<Array<Scalars['String']>>
  basePool_not_in?: InputMaybe<Array<Scalars['String']>>
  basePool_contains?: InputMaybe<Scalars['String']>
  basePool_contains_nocase?: InputMaybe<Scalars['String']>
  basePool_not_contains?: InputMaybe<Scalars['String']>
  basePool_not_contains_nocase?: InputMaybe<Scalars['String']>
  basePool_starts_with?: InputMaybe<Scalars['String']>
  basePool_starts_with_nocase?: InputMaybe<Scalars['String']>
  basePool_not_starts_with?: InputMaybe<Scalars['String']>
  basePool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  basePool_ends_with?: InputMaybe<Scalars['String']>
  basePool_ends_with_nocase?: InputMaybe<Scalars['String']>
  basePool_not_ends_with?: InputMaybe<Scalars['String']>
  basePool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  assetType?: InputMaybe<Scalars['Int']>
  assetType_not?: InputMaybe<Scalars['Int']>
  assetType_gt?: InputMaybe<Scalars['Int']>
  assetType_lt?: InputMaybe<Scalars['Int']>
  assetType_gte?: InputMaybe<Scalars['Int']>
  assetType_lte?: InputMaybe<Scalars['Int']>
  assetType_in?: InputMaybe<Array<Scalars['Int']>>
  assetType_not_in?: InputMaybe<Array<Scalars['Int']>>
  poolType?: InputMaybe<PoolType>
  poolType_not?: InputMaybe<PoolType>
  poolType_in?: InputMaybe<Array<PoolType>>
  poolType_not_in?: InputMaybe<Array<PoolType>>
  isV2?: InputMaybe<Scalars['Boolean']>
  isV2_not?: InputMaybe<Scalars['Boolean']>
  isV2_in?: InputMaybe<Array<Scalars['Boolean']>>
  isV2_not_in?: InputMaybe<Array<Scalars['Boolean']>>
  gauge?: InputMaybe<Scalars['String']>
  gauge_not?: InputMaybe<Scalars['String']>
  gauge_gt?: InputMaybe<Scalars['String']>
  gauge_lt?: InputMaybe<Scalars['String']>
  gauge_gte?: InputMaybe<Scalars['String']>
  gauge_lte?: InputMaybe<Scalars['String']>
  gauge_in?: InputMaybe<Array<Scalars['String']>>
  gauge_not_in?: InputMaybe<Array<Scalars['String']>>
  gauge_contains?: InputMaybe<Scalars['String']>
  gauge_contains_nocase?: InputMaybe<Scalars['String']>
  gauge_not_contains?: InputMaybe<Scalars['String']>
  gauge_not_contains_nocase?: InputMaybe<Scalars['String']>
  gauge_starts_with?: InputMaybe<Scalars['String']>
  gauge_starts_with_nocase?: InputMaybe<Scalars['String']>
  gauge_not_starts_with?: InputMaybe<Scalars['String']>
  gauge_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  gauge_ends_with?: InputMaybe<Scalars['String']>
  gauge_ends_with_nocase?: InputMaybe<Scalars['String']>
  gauge_not_ends_with?: InputMaybe<Scalars['String']>
  gauge_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  registry?: InputMaybe<Scalars['String']>
  registry_not?: InputMaybe<Scalars['String']>
  registry_gt?: InputMaybe<Scalars['String']>
  registry_lt?: InputMaybe<Scalars['String']>
  registry_gte?: InputMaybe<Scalars['String']>
  registry_lte?: InputMaybe<Scalars['String']>
  registry_in?: InputMaybe<Array<Scalars['String']>>
  registry_not_in?: InputMaybe<Array<Scalars['String']>>
  registry_contains?: InputMaybe<Scalars['String']>
  registry_contains_nocase?: InputMaybe<Scalars['String']>
  registry_not_contains?: InputMaybe<Scalars['String']>
  registry_not_contains_nocase?: InputMaybe<Scalars['String']>
  registry_starts_with?: InputMaybe<Scalars['String']>
  registry_starts_with_nocase?: InputMaybe<Scalars['String']>
  registry_not_starts_with?: InputMaybe<Scalars['String']>
  registry_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  registry_ends_with?: InputMaybe<Scalars['String']>
  registry_ends_with_nocase?: InputMaybe<Scalars['String']>
  registry_not_ends_with?: InputMaybe<Scalars['String']>
  registry_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  gaugeType?: InputMaybe<Scalars['String']>
  gaugeType_not?: InputMaybe<Scalars['String']>
  gaugeType_gt?: InputMaybe<Scalars['String']>
  gaugeType_lt?: InputMaybe<Scalars['String']>
  gaugeType_gte?: InputMaybe<Scalars['String']>
  gaugeType_lte?: InputMaybe<Scalars['String']>
  gaugeType_in?: InputMaybe<Array<Scalars['String']>>
  gaugeType_not_in?: InputMaybe<Array<Scalars['String']>>
  gaugeType_contains?: InputMaybe<Scalars['String']>
  gaugeType_contains_nocase?: InputMaybe<Scalars['String']>
  gaugeType_not_contains?: InputMaybe<Scalars['String']>
  gaugeType_not_contains_nocase?: InputMaybe<Scalars['String']>
  gaugeType_starts_with?: InputMaybe<Scalars['String']>
  gaugeType_starts_with_nocase?: InputMaybe<Scalars['String']>
  gaugeType_not_starts_with?: InputMaybe<Scalars['String']>
  gaugeType_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  gaugeType_ends_with?: InputMaybe<Scalars['String']>
  gaugeType_ends_with_nocase?: InputMaybe<Scalars['String']>
  gaugeType_not_ends_with?: InputMaybe<Scalars['String']>
  gaugeType_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  rewardContract?: InputMaybe<Scalars['String']>
  rewardContract_not?: InputMaybe<Scalars['String']>
  rewardContract_gt?: InputMaybe<Scalars['String']>
  rewardContract_lt?: InputMaybe<Scalars['String']>
  rewardContract_gte?: InputMaybe<Scalars['String']>
  rewardContract_lte?: InputMaybe<Scalars['String']>
  rewardContract_in?: InputMaybe<Array<Scalars['String']>>
  rewardContract_not_in?: InputMaybe<Array<Scalars['String']>>
  rewardContract_contains?: InputMaybe<Scalars['String']>
  rewardContract_contains_nocase?: InputMaybe<Scalars['String']>
  rewardContract_not_contains?: InputMaybe<Scalars['String']>
  rewardContract_not_contains_nocase?: InputMaybe<Scalars['String']>
  rewardContract_starts_with?: InputMaybe<Scalars['String']>
  rewardContract_starts_with_nocase?: InputMaybe<Scalars['String']>
  rewardContract_not_starts_with?: InputMaybe<Scalars['String']>
  rewardContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  rewardContract_ends_with?: InputMaybe<Scalars['String']>
  rewardContract_ends_with_nocase?: InputMaybe<Scalars['String']>
  rewardContract_not_ends_with?: InputMaybe<Scalars['String']>
  rewardContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type LiquidityPool_orderBy =
  | 'id'
  | 'protocol'
  | 'name'
  | 'symbol'
  | 'inputTokens'
  | 'outputToken'
  | 'rewardTokens'
  | 'fees'
  | 'createdTimestamp'
  | 'createdBlockNumber'
  | 'totalValueLockedUSD'
  | 'cumulativeVolumeUSD'
  | 'inputTokenBalances'
  | 'inputTokenWeights'
  | 'outputTokenSupply'
  | 'outputTokenPriceUSD'
  | 'stakedOutputTokenAmount'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'
  | 'dailySnapshots'
  | 'hourlySnapshots'
  | 'deposits'
  | 'withdraws'
  | 'swaps'
  | 'platform'
  | 'metapool'
  | 'basePool'
  | 'assetType'
  | 'poolType'
  | 'isV2'
  | 'gauge'
  | 'registry'
  | 'gaugeType'
  | 'rewardContract'

export type Network =
  | 'ARBITRUM_ONE'
  | 'AURORA'
  | 'AVALANCHE'
  | 'BSC'
  | 'CELO'
  | 'MAINNET'
  | 'FANTOM'
  | 'FUSE'
  | 'MOONBEAM'
  | 'MOONRIVER'
  | 'NEAR_MAINNET'
  | 'OPTIMISM'
  | 'MATIC'
  | 'XDAI'

/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc'

export type Platform = {
  id: Scalars['ID']
  pools: Array<LiquidityPool>
  poolAddresses: Array<Scalars['String']>
  latestPoolSnapshot: Scalars['BigInt']
  catchup: Scalars['Boolean']
}

export type PlatformpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPool_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPool_filter>
}

export type Platform_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  pools_?: InputMaybe<LiquidityPool_filter>
  poolAddresses?: InputMaybe<Array<Scalars['String']>>
  poolAddresses_not?: InputMaybe<Array<Scalars['String']>>
  poolAddresses_contains?: InputMaybe<Array<Scalars['String']>>
  poolAddresses_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  poolAddresses_not_contains?: InputMaybe<Array<Scalars['String']>>
  poolAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  latestPoolSnapshot?: InputMaybe<Scalars['BigInt']>
  latestPoolSnapshot_not?: InputMaybe<Scalars['BigInt']>
  latestPoolSnapshot_gt?: InputMaybe<Scalars['BigInt']>
  latestPoolSnapshot_lt?: InputMaybe<Scalars['BigInt']>
  latestPoolSnapshot_gte?: InputMaybe<Scalars['BigInt']>
  latestPoolSnapshot_lte?: InputMaybe<Scalars['BigInt']>
  latestPoolSnapshot_in?: InputMaybe<Array<Scalars['BigInt']>>
  latestPoolSnapshot_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  catchup?: InputMaybe<Scalars['Boolean']>
  catchup_not?: InputMaybe<Scalars['Boolean']>
  catchup_in?: InputMaybe<Array<Scalars['Boolean']>>
  catchup_not_in?: InputMaybe<Array<Scalars['Boolean']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Platform_orderBy = 'id' | 'pools' | 'poolAddresses' | 'latestPoolSnapshot' | 'catchup'

export type PoolType =
  | 'STABLE_FACTORY'
  | 'CRYPTO_FACTORY'
  | 'METAPOOL_FACTORY'
  | 'REGISTRY_V1'
  | 'REGISTRY_V2'
  | 'LENDING'

export type Protocol = {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['ID']
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars['String']
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars['String']
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String']
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String']
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String']
  /**  The blockchain network this subgraph is indexing on  */
  network: Network
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: ProtocolType
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['BigDecimal']
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['BigDecimal']
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal']
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['BigDecimal']
  /**  # of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int']
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<UsageMetricsDailySnapshot>
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<FinancialsDailySnapshot>
}

export type ProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>
}

export type ProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>
}

export type ProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<FinancialsDailySnapshot_filter>
}

export type ProtocolType = 'EXCHANGE' | 'LENDING' | 'YIELD' | 'BRIDGE' | 'GENERIC'

export type Protocol_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_gt?: InputMaybe<Scalars['String']>
  name_lt?: InputMaybe<Scalars['String']>
  name_gte?: InputMaybe<Scalars['String']>
  name_lte?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_not_in?: InputMaybe<Array<Scalars['String']>>
  name_contains?: InputMaybe<Scalars['String']>
  name_contains_nocase?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_not_contains_nocase?: InputMaybe<Scalars['String']>
  name_starts_with?: InputMaybe<Scalars['String']>
  name_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_not_starts_with?: InputMaybe<Scalars['String']>
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_ends_with?: InputMaybe<Scalars['String']>
  name_ends_with_nocase?: InputMaybe<Scalars['String']>
  name_not_ends_with?: InputMaybe<Scalars['String']>
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  slug_not?: InputMaybe<Scalars['String']>
  slug_gt?: InputMaybe<Scalars['String']>
  slug_lt?: InputMaybe<Scalars['String']>
  slug_gte?: InputMaybe<Scalars['String']>
  slug_lte?: InputMaybe<Scalars['String']>
  slug_in?: InputMaybe<Array<Scalars['String']>>
  slug_not_in?: InputMaybe<Array<Scalars['String']>>
  slug_contains?: InputMaybe<Scalars['String']>
  slug_contains_nocase?: InputMaybe<Scalars['String']>
  slug_not_contains?: InputMaybe<Scalars['String']>
  slug_not_contains_nocase?: InputMaybe<Scalars['String']>
  slug_starts_with?: InputMaybe<Scalars['String']>
  slug_starts_with_nocase?: InputMaybe<Scalars['String']>
  slug_not_starts_with?: InputMaybe<Scalars['String']>
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  slug_ends_with?: InputMaybe<Scalars['String']>
  slug_ends_with_nocase?: InputMaybe<Scalars['String']>
  slug_not_ends_with?: InputMaybe<Scalars['String']>
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  schemaVersion?: InputMaybe<Scalars['String']>
  schemaVersion_not?: InputMaybe<Scalars['String']>
  schemaVersion_gt?: InputMaybe<Scalars['String']>
  schemaVersion_lt?: InputMaybe<Scalars['String']>
  schemaVersion_gte?: InputMaybe<Scalars['String']>
  schemaVersion_lte?: InputMaybe<Scalars['String']>
  schemaVersion_in?: InputMaybe<Array<Scalars['String']>>
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>
  schemaVersion_contains?: InputMaybe<Scalars['String']>
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>
  schemaVersion_not_contains?: InputMaybe<Scalars['String']>
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>
  schemaVersion_starts_with?: InputMaybe<Scalars['String']>
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  schemaVersion_ends_with?: InputMaybe<Scalars['String']>
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  subgraphVersion?: InputMaybe<Scalars['String']>
  subgraphVersion_not?: InputMaybe<Scalars['String']>
  subgraphVersion_gt?: InputMaybe<Scalars['String']>
  subgraphVersion_lt?: InputMaybe<Scalars['String']>
  subgraphVersion_gte?: InputMaybe<Scalars['String']>
  subgraphVersion_lte?: InputMaybe<Scalars['String']>
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>
  subgraphVersion_contains?: InputMaybe<Scalars['String']>
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']>
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']>
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']>
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  methodologyVersion?: InputMaybe<Scalars['String']>
  methodologyVersion_not?: InputMaybe<Scalars['String']>
  methodologyVersion_gt?: InputMaybe<Scalars['String']>
  methodologyVersion_lt?: InputMaybe<Scalars['String']>
  methodologyVersion_gte?: InputMaybe<Scalars['String']>
  methodologyVersion_lte?: InputMaybe<Scalars['String']>
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>
  methodologyVersion_contains?: InputMaybe<Scalars['String']>
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']>
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']>
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']>
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  network?: InputMaybe<Network>
  network_not?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  network_not_in?: InputMaybe<Array<Network>>
  type?: InputMaybe<ProtocolType>
  type_not?: InputMaybe<ProtocolType>
  type_in?: InputMaybe<Array<ProtocolType>>
  type_not_in?: InputMaybe<Array<ProtocolType>>
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>
  dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_filter>
  hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_filter>
  financialMetrics_?: InputMaybe<FinancialsDailySnapshot_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Protocol_orderBy =
  | 'id'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'cumulativeUniqueUsers'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics'

export type Registry = {
  id: Scalars['ID']
}

export type Registry_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Registry_orderBy = 'id'

export type RewardToken = {
  /**  { Reward token type }-{ Smart contract address of the reward token }  */
  id: Scalars['ID']
  /**  Reference to the actual token  */
  token: Token
  /**  The type of the reward token  */
  type: RewardTokenType
}

export type RewardTokenType =
  /**  For reward tokens awarded to LPs/lenders  */
  | 'DEPOSIT'
  /**  For reward tokens awarded to borrowers  */
  | 'BORROW'

export type RewardToken_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  token?: InputMaybe<Scalars['String']>
  token_not?: InputMaybe<Scalars['String']>
  token_gt?: InputMaybe<Scalars['String']>
  token_lt?: InputMaybe<Scalars['String']>
  token_gte?: InputMaybe<Scalars['String']>
  token_lte?: InputMaybe<Scalars['String']>
  token_in?: InputMaybe<Array<Scalars['String']>>
  token_not_in?: InputMaybe<Array<Scalars['String']>>
  token_contains?: InputMaybe<Scalars['String']>
  token_contains_nocase?: InputMaybe<Scalars['String']>
  token_not_contains?: InputMaybe<Scalars['String']>
  token_not_contains_nocase?: InputMaybe<Scalars['String']>
  token_starts_with?: InputMaybe<Scalars['String']>
  token_starts_with_nocase?: InputMaybe<Scalars['String']>
  token_not_starts_with?: InputMaybe<Scalars['String']>
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  token_ends_with?: InputMaybe<Scalars['String']>
  token_ends_with_nocase?: InputMaybe<Scalars['String']>
  token_not_ends_with?: InputMaybe<Scalars['String']>
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  token_?: InputMaybe<Token_filter>
  type?: InputMaybe<RewardTokenType>
  type_not?: InputMaybe<RewardTokenType>
  type_in?: InputMaybe<Array<RewardTokenType>>
  type_not_in?: InputMaybe<Array<RewardTokenType>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type RewardToken_orderBy = 'id' | 'token' | 'type'

export type Subscription = {
  token?: Maybe<Token>
  tokens: Array<Token>
  rewardToken?: Maybe<RewardToken>
  rewardTokens: Array<RewardToken>
  liquidityPoolFee?: Maybe<LiquidityPoolFee>
  liquidityPoolFees: Array<LiquidityPoolFee>
  dexAmmProtocol?: Maybe<DexAmmProtocol>
  dexAmmProtocols: Array<DexAmmProtocol>
  usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>
  usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>
  usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>
  usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>
  financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>
  financialsDailySnapshots: Array<FinancialsDailySnapshot>
  liquidityPool?: Maybe<LiquidityPool>
  liquidityPools: Array<LiquidityPool>
  liquidityPoolDailySnapshot?: Maybe<LiquidityPoolDailySnapshot>
  liquidityPoolDailySnapshots: Array<LiquidityPoolDailySnapshot>
  liquidityPoolHourlySnapshot?: Maybe<LiquidityPoolHourlySnapshot>
  liquidityPoolHourlySnapshots: Array<LiquidityPoolHourlySnapshot>
  deposit?: Maybe<Deposit>
  deposits: Array<Deposit>
  withdraw?: Maybe<Withdraw>
  withdraws: Array<Withdraw>
  swap?: Maybe<Swap>
  swaps: Array<Swap>
  account?: Maybe<Account>
  accounts: Array<Account>
  activeAccount?: Maybe<ActiveAccount>
  activeAccounts: Array<ActiveAccount>
  platform?: Maybe<Platform>
  platforms: Array<Platform>
  registry?: Maybe<Registry>
  registries: Array<Registry>
  factory?: Maybe<Factory>
  factories: Array<Factory>
  basePool?: Maybe<BasePool>
  basePools: Array<BasePool>
  tokenSnapshot?: Maybe<TokenSnapshot>
  tokenSnapshots: Array<TokenSnapshot>
  gaugePool?: Maybe<GaugePool>
  gaugePools: Array<GaugePool>
  protocol?: Maybe<Protocol>
  protocols: Array<Protocol>
  event?: Maybe<Event>
  events: Array<Event>
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
}

export type SubscriptiontokenArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionrewardTokenArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<RewardToken_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<RewardToken_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidityPoolFeeArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidityPoolFeesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPoolFee_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPoolFee_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiondexAmmProtocolArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiondexAmmProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<DexAmmProtocol_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<DexAmmProtocol_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionusageMetricsDailySnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionusageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UsageMetricsDailySnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionusageMetricsHourlySnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionusageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UsageMetricsHourlySnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionfinancialsDailySnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionfinancialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<FinancialsDailySnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidityPoolArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidityPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPool_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPool_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidityPoolDailySnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidityPoolDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPoolDailySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPoolDailySnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidityPoolHourlySnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidityPoolHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPoolHourlySnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiondepositArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Deposit_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Deposit_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionwithdrawArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Withdraw_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Withdraw_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionswapArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Swap_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Swap_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionaccountArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Account_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Account_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionactiveAccountArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionactiveAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<ActiveAccount_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<ActiveAccount_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionplatformArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionplatformsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Platform_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Platform_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionregistryArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionregistriesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Registry_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Registry_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionfactoryArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionfactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Factory_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Factory_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionbasePoolArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionbasePoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<BasePool_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<BasePool_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontokenSnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontokenSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TokenSnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TokenSnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiongaugePoolArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiongaugePoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<GaugePool_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<GaugePool_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionprotocolArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionprotocolsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Protocol_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Protocol_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioneventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioneventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Event_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Event_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>
}

export type Swap = Event & {
  /**  swap-{ Transaction hash }-{ Log index }  */
  id: Scalars['ID']
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String']
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int']
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol
  /**  Address that received the tokens  */
  to: Scalars['String']
  /**  Address that sent the tokens  */
  from: Scalars['String']
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt']
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt']
  /**  Token deposited into pool  */
  tokenIn: Token
  /**  Amount of token deposited into pool in native units  */
  amountIn: Scalars['BigInt']
  /**  Amount of token deposited into pool in USD  */
  amountInUSD: Scalars['BigDecimal']
  /**  Token withdrawn from pool  */
  tokenOut: Token
  /**  Amount of token withdrawn from pool in native units  */
  amountOut: Scalars['BigInt']
  /**  Amount of token withdrawn from pool in USD  */
  amountOutUSD: Scalars['BigDecimal']
  /**  The pool involving this transaction  */
  pool: LiquidityPool
}

export type Swap_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  hash?: InputMaybe<Scalars['String']>
  hash_not?: InputMaybe<Scalars['String']>
  hash_gt?: InputMaybe<Scalars['String']>
  hash_lt?: InputMaybe<Scalars['String']>
  hash_gte?: InputMaybe<Scalars['String']>
  hash_lte?: InputMaybe<Scalars['String']>
  hash_in?: InputMaybe<Array<Scalars['String']>>
  hash_not_in?: InputMaybe<Array<Scalars['String']>>
  hash_contains?: InputMaybe<Scalars['String']>
  hash_contains_nocase?: InputMaybe<Scalars['String']>
  hash_not_contains?: InputMaybe<Scalars['String']>
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>
  hash_starts_with?: InputMaybe<Scalars['String']>
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>
  hash_not_starts_with?: InputMaybe<Scalars['String']>
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  hash_ends_with?: InputMaybe<Scalars['String']>
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>
  hash_not_ends_with?: InputMaybe<Scalars['String']>
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  logIndex?: InputMaybe<Scalars['Int']>
  logIndex_not?: InputMaybe<Scalars['Int']>
  logIndex_gt?: InputMaybe<Scalars['Int']>
  logIndex_lt?: InputMaybe<Scalars['Int']>
  logIndex_gte?: InputMaybe<Scalars['Int']>
  logIndex_lte?: InputMaybe<Scalars['Int']>
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>
  protocol?: InputMaybe<Scalars['String']>
  protocol_not?: InputMaybe<Scalars['String']>
  protocol_gt?: InputMaybe<Scalars['String']>
  protocol_lt?: InputMaybe<Scalars['String']>
  protocol_gte?: InputMaybe<Scalars['String']>
  protocol_lte?: InputMaybe<Scalars['String']>
  protocol_in?: InputMaybe<Array<Scalars['String']>>
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>
  protocol_contains?: InputMaybe<Scalars['String']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_not_contains?: InputMaybe<Scalars['String']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_starts_with?: InputMaybe<Scalars['String']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_starts_with?: InputMaybe<Scalars['String']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_ends_with?: InputMaybe<Scalars['String']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_?: InputMaybe<DexAmmProtocol_filter>
  to?: InputMaybe<Scalars['String']>
  to_not?: InputMaybe<Scalars['String']>
  to_gt?: InputMaybe<Scalars['String']>
  to_lt?: InputMaybe<Scalars['String']>
  to_gte?: InputMaybe<Scalars['String']>
  to_lte?: InputMaybe<Scalars['String']>
  to_in?: InputMaybe<Array<Scalars['String']>>
  to_not_in?: InputMaybe<Array<Scalars['String']>>
  to_contains?: InputMaybe<Scalars['String']>
  to_contains_nocase?: InputMaybe<Scalars['String']>
  to_not_contains?: InputMaybe<Scalars['String']>
  to_not_contains_nocase?: InputMaybe<Scalars['String']>
  to_starts_with?: InputMaybe<Scalars['String']>
  to_starts_with_nocase?: InputMaybe<Scalars['String']>
  to_not_starts_with?: InputMaybe<Scalars['String']>
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  to_ends_with?: InputMaybe<Scalars['String']>
  to_ends_with_nocase?: InputMaybe<Scalars['String']>
  to_not_ends_with?: InputMaybe<Scalars['String']>
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  from?: InputMaybe<Scalars['String']>
  from_not?: InputMaybe<Scalars['String']>
  from_gt?: InputMaybe<Scalars['String']>
  from_lt?: InputMaybe<Scalars['String']>
  from_gte?: InputMaybe<Scalars['String']>
  from_lte?: InputMaybe<Scalars['String']>
  from_in?: InputMaybe<Array<Scalars['String']>>
  from_not_in?: InputMaybe<Array<Scalars['String']>>
  from_contains?: InputMaybe<Scalars['String']>
  from_contains_nocase?: InputMaybe<Scalars['String']>
  from_not_contains?: InputMaybe<Scalars['String']>
  from_not_contains_nocase?: InputMaybe<Scalars['String']>
  from_starts_with?: InputMaybe<Scalars['String']>
  from_starts_with_nocase?: InputMaybe<Scalars['String']>
  from_not_starts_with?: InputMaybe<Scalars['String']>
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  from_ends_with?: InputMaybe<Scalars['String']>
  from_ends_with_nocase?: InputMaybe<Scalars['String']>
  from_not_ends_with?: InputMaybe<Scalars['String']>
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  tokenIn?: InputMaybe<Scalars['String']>
  tokenIn_not?: InputMaybe<Scalars['String']>
  tokenIn_gt?: InputMaybe<Scalars['String']>
  tokenIn_lt?: InputMaybe<Scalars['String']>
  tokenIn_gte?: InputMaybe<Scalars['String']>
  tokenIn_lte?: InputMaybe<Scalars['String']>
  tokenIn_in?: InputMaybe<Array<Scalars['String']>>
  tokenIn_not_in?: InputMaybe<Array<Scalars['String']>>
  tokenIn_contains?: InputMaybe<Scalars['String']>
  tokenIn_contains_nocase?: InputMaybe<Scalars['String']>
  tokenIn_not_contains?: InputMaybe<Scalars['String']>
  tokenIn_not_contains_nocase?: InputMaybe<Scalars['String']>
  tokenIn_starts_with?: InputMaybe<Scalars['String']>
  tokenIn_starts_with_nocase?: InputMaybe<Scalars['String']>
  tokenIn_not_starts_with?: InputMaybe<Scalars['String']>
  tokenIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  tokenIn_ends_with?: InputMaybe<Scalars['String']>
  tokenIn_ends_with_nocase?: InputMaybe<Scalars['String']>
  tokenIn_not_ends_with?: InputMaybe<Scalars['String']>
  tokenIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  tokenIn_?: InputMaybe<Token_filter>
  amountIn?: InputMaybe<Scalars['BigInt']>
  amountIn_not?: InputMaybe<Scalars['BigInt']>
  amountIn_gt?: InputMaybe<Scalars['BigInt']>
  amountIn_lt?: InputMaybe<Scalars['BigInt']>
  amountIn_gte?: InputMaybe<Scalars['BigInt']>
  amountIn_lte?: InputMaybe<Scalars['BigInt']>
  amountIn_in?: InputMaybe<Array<Scalars['BigInt']>>
  amountIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  amountInUSD?: InputMaybe<Scalars['BigDecimal']>
  amountInUSD_not?: InputMaybe<Scalars['BigDecimal']>
  amountInUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  amountInUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  amountInUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  amountInUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  amountInUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amountInUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  tokenOut?: InputMaybe<Scalars['String']>
  tokenOut_not?: InputMaybe<Scalars['String']>
  tokenOut_gt?: InputMaybe<Scalars['String']>
  tokenOut_lt?: InputMaybe<Scalars['String']>
  tokenOut_gte?: InputMaybe<Scalars['String']>
  tokenOut_lte?: InputMaybe<Scalars['String']>
  tokenOut_in?: InputMaybe<Array<Scalars['String']>>
  tokenOut_not_in?: InputMaybe<Array<Scalars['String']>>
  tokenOut_contains?: InputMaybe<Scalars['String']>
  tokenOut_contains_nocase?: InputMaybe<Scalars['String']>
  tokenOut_not_contains?: InputMaybe<Scalars['String']>
  tokenOut_not_contains_nocase?: InputMaybe<Scalars['String']>
  tokenOut_starts_with?: InputMaybe<Scalars['String']>
  tokenOut_starts_with_nocase?: InputMaybe<Scalars['String']>
  tokenOut_not_starts_with?: InputMaybe<Scalars['String']>
  tokenOut_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  tokenOut_ends_with?: InputMaybe<Scalars['String']>
  tokenOut_ends_with_nocase?: InputMaybe<Scalars['String']>
  tokenOut_not_ends_with?: InputMaybe<Scalars['String']>
  tokenOut_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  tokenOut_?: InputMaybe<Token_filter>
  amountOut?: InputMaybe<Scalars['BigInt']>
  amountOut_not?: InputMaybe<Scalars['BigInt']>
  amountOut_gt?: InputMaybe<Scalars['BigInt']>
  amountOut_lt?: InputMaybe<Scalars['BigInt']>
  amountOut_gte?: InputMaybe<Scalars['BigInt']>
  amountOut_lte?: InputMaybe<Scalars['BigInt']>
  amountOut_in?: InputMaybe<Array<Scalars['BigInt']>>
  amountOut_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  amountOutUSD?: InputMaybe<Scalars['BigDecimal']>
  amountOutUSD_not?: InputMaybe<Scalars['BigDecimal']>
  amountOutUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  amountOutUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  amountOutUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  amountOutUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  amountOutUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amountOutUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  pool?: InputMaybe<Scalars['String']>
  pool_not?: InputMaybe<Scalars['String']>
  pool_gt?: InputMaybe<Scalars['String']>
  pool_lt?: InputMaybe<Scalars['String']>
  pool_gte?: InputMaybe<Scalars['String']>
  pool_lte?: InputMaybe<Scalars['String']>
  pool_in?: InputMaybe<Array<Scalars['String']>>
  pool_not_in?: InputMaybe<Array<Scalars['String']>>
  pool_contains?: InputMaybe<Scalars['String']>
  pool_contains_nocase?: InputMaybe<Scalars['String']>
  pool_not_contains?: InputMaybe<Scalars['String']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>
  pool_starts_with?: InputMaybe<Scalars['String']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>
  pool_not_starts_with?: InputMaybe<Scalars['String']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  pool_ends_with?: InputMaybe<Scalars['String']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>
  pool_not_ends_with?: InputMaybe<Scalars['String']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  pool_?: InputMaybe<LiquidityPool_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Swap_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'tokenIn'
  | 'amountIn'
  | 'amountInUSD'
  | 'tokenOut'
  | 'amountOut'
  | 'amountOutUSD'
  | 'pool'

export type Token = {
  /**  Smart contract address of the token  */
  id: Scalars['ID']
  /**  Name of the token, mirrored from the smart contract  */
  name: Scalars['String']
  /**  Symbol of the token, mirrored from the smart contract  */
  symbol: Scalars['String']
  /**  The number of decimal places this token uses, default to 18  */
  decimals: Scalars['Int']
  /**  Optional field to track the price of a token, mostly for caching purposes  */
  lastPriceUSD?: Maybe<Scalars['BigDecimal']>
  /**  Optional field to track the block number of the last token price  */
  lastPriceBlockNumber?: Maybe<Scalars['BigInt']>
}

export type TokenSnapshot = {
  /**  { token }-{ hourly-timestamp }  */
  id: Scalars['ID']
  price: Scalars['BigDecimal']
  timestamp: Scalars['BigInt']
}

export type TokenSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  price?: InputMaybe<Scalars['BigDecimal']>
  price_not?: InputMaybe<Scalars['BigDecimal']>
  price_gt?: InputMaybe<Scalars['BigDecimal']>
  price_lt?: InputMaybe<Scalars['BigDecimal']>
  price_gte?: InputMaybe<Scalars['BigDecimal']>
  price_lte?: InputMaybe<Scalars['BigDecimal']>
  price_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type TokenSnapshot_orderBy = 'id' | 'price' | 'timestamp'

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_gt?: InputMaybe<Scalars['String']>
  name_lt?: InputMaybe<Scalars['String']>
  name_gte?: InputMaybe<Scalars['String']>
  name_lte?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_not_in?: InputMaybe<Array<Scalars['String']>>
  name_contains?: InputMaybe<Scalars['String']>
  name_contains_nocase?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_not_contains_nocase?: InputMaybe<Scalars['String']>
  name_starts_with?: InputMaybe<Scalars['String']>
  name_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_not_starts_with?: InputMaybe<Scalars['String']>
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  name_ends_with?: InputMaybe<Scalars['String']>
  name_ends_with_nocase?: InputMaybe<Scalars['String']>
  name_not_ends_with?: InputMaybe<Scalars['String']>
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  symbol?: InputMaybe<Scalars['String']>
  symbol_not?: InputMaybe<Scalars['String']>
  symbol_gt?: InputMaybe<Scalars['String']>
  symbol_lt?: InputMaybe<Scalars['String']>
  symbol_gte?: InputMaybe<Scalars['String']>
  symbol_lte?: InputMaybe<Scalars['String']>
  symbol_in?: InputMaybe<Array<Scalars['String']>>
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>
  symbol_contains?: InputMaybe<Scalars['String']>
  symbol_contains_nocase?: InputMaybe<Scalars['String']>
  symbol_not_contains?: InputMaybe<Scalars['String']>
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>
  symbol_starts_with?: InputMaybe<Scalars['String']>
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>
  symbol_not_starts_with?: InputMaybe<Scalars['String']>
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  symbol_ends_with?: InputMaybe<Scalars['String']>
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>
  symbol_not_ends_with?: InputMaybe<Scalars['String']>
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  decimals?: InputMaybe<Scalars['Int']>
  decimals_not?: InputMaybe<Scalars['Int']>
  decimals_gt?: InputMaybe<Scalars['Int']>
  decimals_lt?: InputMaybe<Scalars['Int']>
  decimals_gte?: InputMaybe<Scalars['Int']>
  decimals_lte?: InputMaybe<Scalars['Int']>
  decimals_in?: InputMaybe<Array<Scalars['Int']>>
  decimals_not_in?: InputMaybe<Array<Scalars['Int']>>
  lastPriceUSD?: InputMaybe<Scalars['BigDecimal']>
  lastPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
  lastPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  lastPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  lastPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  lastPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  lastPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  lastPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>
  lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>
  lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>
  lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>
  lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>
  lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>
  lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Token_orderBy = 'id' | 'name' | 'symbol' | 'decimals' | 'lastPriceUSD' | 'lastPriceBlockNumber'

export type UsageMetricsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['ID']
  /**  Protocol this snapshot is associated with  */
  protocol: DexAmmProtocol
  /**  # of unique daily active users  */
  dailyActiveUsers: Scalars['Int']
  /**  # of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int']
  /**  Total number of transactions occurred in a day. Transactions include all entities that implement the Event interface.  */
  dailyTransactionCount: Scalars['Int']
  /**  Total number of deposits (add liquidity) in a day  */
  dailyDepositCount: Scalars['Int']
  /**  Total number of withdrawals (remove liquidity) in a day  */
  dailyWithdrawCount: Scalars['Int']
  /**  Total number of trades (swaps) in a day  */
  dailySwapCount: Scalars['Int']
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt']
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt']
}

export type UsageMetricsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  protocol?: InputMaybe<Scalars['String']>
  protocol_not?: InputMaybe<Scalars['String']>
  protocol_gt?: InputMaybe<Scalars['String']>
  protocol_lt?: InputMaybe<Scalars['String']>
  protocol_gte?: InputMaybe<Scalars['String']>
  protocol_lte?: InputMaybe<Scalars['String']>
  protocol_in?: InputMaybe<Array<Scalars['String']>>
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>
  protocol_contains?: InputMaybe<Scalars['String']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_not_contains?: InputMaybe<Scalars['String']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_starts_with?: InputMaybe<Scalars['String']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_starts_with?: InputMaybe<Scalars['String']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_ends_with?: InputMaybe<Scalars['String']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_?: InputMaybe<DexAmmProtocol_filter>
  dailyActiveUsers?: InputMaybe<Scalars['Int']>
  dailyActiveUsers_not?: InputMaybe<Scalars['Int']>
  dailyActiveUsers_gt?: InputMaybe<Scalars['Int']>
  dailyActiveUsers_lt?: InputMaybe<Scalars['Int']>
  dailyActiveUsers_gte?: InputMaybe<Scalars['Int']>
  dailyActiveUsers_lte?: InputMaybe<Scalars['Int']>
  dailyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>
  dailyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>
  dailyTransactionCount?: InputMaybe<Scalars['Int']>
  dailyTransactionCount_not?: InputMaybe<Scalars['Int']>
  dailyTransactionCount_gt?: InputMaybe<Scalars['Int']>
  dailyTransactionCount_lt?: InputMaybe<Scalars['Int']>
  dailyTransactionCount_gte?: InputMaybe<Scalars['Int']>
  dailyTransactionCount_lte?: InputMaybe<Scalars['Int']>
  dailyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>
  dailyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>
  dailyDepositCount?: InputMaybe<Scalars['Int']>
  dailyDepositCount_not?: InputMaybe<Scalars['Int']>
  dailyDepositCount_gt?: InputMaybe<Scalars['Int']>
  dailyDepositCount_lt?: InputMaybe<Scalars['Int']>
  dailyDepositCount_gte?: InputMaybe<Scalars['Int']>
  dailyDepositCount_lte?: InputMaybe<Scalars['Int']>
  dailyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>
  dailyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>
  dailyWithdrawCount?: InputMaybe<Scalars['Int']>
  dailyWithdrawCount_not?: InputMaybe<Scalars['Int']>
  dailyWithdrawCount_gt?: InputMaybe<Scalars['Int']>
  dailyWithdrawCount_lt?: InputMaybe<Scalars['Int']>
  dailyWithdrawCount_gte?: InputMaybe<Scalars['Int']>
  dailyWithdrawCount_lte?: InputMaybe<Scalars['Int']>
  dailyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>
  dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>
  dailySwapCount?: InputMaybe<Scalars['Int']>
  dailySwapCount_not?: InputMaybe<Scalars['Int']>
  dailySwapCount_gt?: InputMaybe<Scalars['Int']>
  dailySwapCount_lt?: InputMaybe<Scalars['Int']>
  dailySwapCount_gte?: InputMaybe<Scalars['Int']>
  dailySwapCount_lte?: InputMaybe<Scalars['Int']>
  dailySwapCount_in?: InputMaybe<Array<Scalars['Int']>>
  dailySwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type UsageMetricsDailySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'dailyActiveUsers'
  | 'cumulativeUniqueUsers'
  | 'dailyTransactionCount'
  | 'dailyDepositCount'
  | 'dailyWithdrawCount'
  | 'dailySwapCount'
  | 'blockNumber'
  | 'timestamp'

export type UsageMetricsHourlySnapshot = {
  /**  { # of hours since Unix epoch time }  */
  id: Scalars['ID']
  /**  Protocol this snapshot is associated with  */
  protocol: DexAmmProtocol
  /**  # of unique hourly active users  */
  hourlyActiveUsers: Scalars['Int']
  /**  # of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int']
  /**  Total number of transactions occurred in an hour. Transactions include all entities that implement the Event interface.  */
  hourlyTransactionCount: Scalars['Int']
  /**  Total number of deposits (add liquidity) in an hour  */
  hourlyDepositCount: Scalars['Int']
  /**  Total number of withdrawals (remove liquidity) in an hour  */
  hourlyWithdrawCount: Scalars['Int']
  /**  Total number of trades (swaps) in an hour  */
  hourlySwapCount: Scalars['Int']
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt']
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt']
}

export type UsageMetricsHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  protocol?: InputMaybe<Scalars['String']>
  protocol_not?: InputMaybe<Scalars['String']>
  protocol_gt?: InputMaybe<Scalars['String']>
  protocol_lt?: InputMaybe<Scalars['String']>
  protocol_gte?: InputMaybe<Scalars['String']>
  protocol_lte?: InputMaybe<Scalars['String']>
  protocol_in?: InputMaybe<Array<Scalars['String']>>
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>
  protocol_contains?: InputMaybe<Scalars['String']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_not_contains?: InputMaybe<Scalars['String']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_starts_with?: InputMaybe<Scalars['String']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_starts_with?: InputMaybe<Scalars['String']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_ends_with?: InputMaybe<Scalars['String']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_?: InputMaybe<DexAmmProtocol_filter>
  hourlyActiveUsers?: InputMaybe<Scalars['Int']>
  hourlyActiveUsers_not?: InputMaybe<Scalars['Int']>
  hourlyActiveUsers_gt?: InputMaybe<Scalars['Int']>
  hourlyActiveUsers_lt?: InputMaybe<Scalars['Int']>
  hourlyActiveUsers_gte?: InputMaybe<Scalars['Int']>
  hourlyActiveUsers_lte?: InputMaybe<Scalars['Int']>
  hourlyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>
  hourlyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>
  hourlyTransactionCount?: InputMaybe<Scalars['Int']>
  hourlyTransactionCount_not?: InputMaybe<Scalars['Int']>
  hourlyTransactionCount_gt?: InputMaybe<Scalars['Int']>
  hourlyTransactionCount_lt?: InputMaybe<Scalars['Int']>
  hourlyTransactionCount_gte?: InputMaybe<Scalars['Int']>
  hourlyTransactionCount_lte?: InputMaybe<Scalars['Int']>
  hourlyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>
  hourlyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>
  hourlyDepositCount?: InputMaybe<Scalars['Int']>
  hourlyDepositCount_not?: InputMaybe<Scalars['Int']>
  hourlyDepositCount_gt?: InputMaybe<Scalars['Int']>
  hourlyDepositCount_lt?: InputMaybe<Scalars['Int']>
  hourlyDepositCount_gte?: InputMaybe<Scalars['Int']>
  hourlyDepositCount_lte?: InputMaybe<Scalars['Int']>
  hourlyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>
  hourlyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>
  hourlyWithdrawCount?: InputMaybe<Scalars['Int']>
  hourlyWithdrawCount_not?: InputMaybe<Scalars['Int']>
  hourlyWithdrawCount_gt?: InputMaybe<Scalars['Int']>
  hourlyWithdrawCount_lt?: InputMaybe<Scalars['Int']>
  hourlyWithdrawCount_gte?: InputMaybe<Scalars['Int']>
  hourlyWithdrawCount_lte?: InputMaybe<Scalars['Int']>
  hourlyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>
  hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>
  hourlySwapCount?: InputMaybe<Scalars['Int']>
  hourlySwapCount_not?: InputMaybe<Scalars['Int']>
  hourlySwapCount_gt?: InputMaybe<Scalars['Int']>
  hourlySwapCount_lt?: InputMaybe<Scalars['Int']>
  hourlySwapCount_gte?: InputMaybe<Scalars['Int']>
  hourlySwapCount_lte?: InputMaybe<Scalars['Int']>
  hourlySwapCount_in?: InputMaybe<Array<Scalars['Int']>>
  hourlySwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type UsageMetricsHourlySnapshot_orderBy =
  | 'id'
  | 'protocol'
  | 'hourlyActiveUsers'
  | 'cumulativeUniqueUsers'
  | 'hourlyTransactionCount'
  | 'hourlyDepositCount'
  | 'hourlyWithdrawCount'
  | 'hourlySwapCount'
  | 'blockNumber'
  | 'timestamp'

export type Withdraw = Event & {
  /**  withdraw-{ Transaction hash }-{ Log index } */
  id: Scalars['ID']
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['String']
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int']
  /**  The protocol this transaction belongs to  */
  protocol: DexAmmProtocol
  /**  Address that received the tokens  */
  to: Scalars['String']
  /**  Address that sent the tokens  */
  from: Scalars['String']
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt']
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt']
  /**  Input tokens of the pool (not input tokens of the event/transaction). E.g. WETH and USDC from a WETH-USDC pool  */
  inputTokens: Array<Token>
  /**  Output token of the pool (not output token of the event/transaction). E.g. the UNI-LP token  */
  outputToken?: Maybe<Token>
  /**  Amount of input tokens in the token's native unit  */
  inputTokenAmounts: Array<Scalars['BigInt']>
  /**  Amount of output tokens in the token's native unit  */
  outputTokenAmount?: Maybe<Scalars['BigInt']>
  /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens withdrawn from a pool)  */
  amountUSD: Scalars['BigDecimal']
  /**  The pool involving this transaction  */
  pool: LiquidityPool
}

export type WithdrawinputTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
}

export type Withdraw_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  hash?: InputMaybe<Scalars['String']>
  hash_not?: InputMaybe<Scalars['String']>
  hash_gt?: InputMaybe<Scalars['String']>
  hash_lt?: InputMaybe<Scalars['String']>
  hash_gte?: InputMaybe<Scalars['String']>
  hash_lte?: InputMaybe<Scalars['String']>
  hash_in?: InputMaybe<Array<Scalars['String']>>
  hash_not_in?: InputMaybe<Array<Scalars['String']>>
  hash_contains?: InputMaybe<Scalars['String']>
  hash_contains_nocase?: InputMaybe<Scalars['String']>
  hash_not_contains?: InputMaybe<Scalars['String']>
  hash_not_contains_nocase?: InputMaybe<Scalars['String']>
  hash_starts_with?: InputMaybe<Scalars['String']>
  hash_starts_with_nocase?: InputMaybe<Scalars['String']>
  hash_not_starts_with?: InputMaybe<Scalars['String']>
  hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  hash_ends_with?: InputMaybe<Scalars['String']>
  hash_ends_with_nocase?: InputMaybe<Scalars['String']>
  hash_not_ends_with?: InputMaybe<Scalars['String']>
  hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  logIndex?: InputMaybe<Scalars['Int']>
  logIndex_not?: InputMaybe<Scalars['Int']>
  logIndex_gt?: InputMaybe<Scalars['Int']>
  logIndex_lt?: InputMaybe<Scalars['Int']>
  logIndex_gte?: InputMaybe<Scalars['Int']>
  logIndex_lte?: InputMaybe<Scalars['Int']>
  logIndex_in?: InputMaybe<Array<Scalars['Int']>>
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>
  protocol?: InputMaybe<Scalars['String']>
  protocol_not?: InputMaybe<Scalars['String']>
  protocol_gt?: InputMaybe<Scalars['String']>
  protocol_lt?: InputMaybe<Scalars['String']>
  protocol_gte?: InputMaybe<Scalars['String']>
  protocol_lte?: InputMaybe<Scalars['String']>
  protocol_in?: InputMaybe<Array<Scalars['String']>>
  protocol_not_in?: InputMaybe<Array<Scalars['String']>>
  protocol_contains?: InputMaybe<Scalars['String']>
  protocol_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_not_contains?: InputMaybe<Scalars['String']>
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
  protocol_starts_with?: InputMaybe<Scalars['String']>
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_starts_with?: InputMaybe<Scalars['String']>
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  protocol_ends_with?: InputMaybe<Scalars['String']>
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_not_ends_with?: InputMaybe<Scalars['String']>
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  protocol_?: InputMaybe<DexAmmProtocol_filter>
  to?: InputMaybe<Scalars['String']>
  to_not?: InputMaybe<Scalars['String']>
  to_gt?: InputMaybe<Scalars['String']>
  to_lt?: InputMaybe<Scalars['String']>
  to_gte?: InputMaybe<Scalars['String']>
  to_lte?: InputMaybe<Scalars['String']>
  to_in?: InputMaybe<Array<Scalars['String']>>
  to_not_in?: InputMaybe<Array<Scalars['String']>>
  to_contains?: InputMaybe<Scalars['String']>
  to_contains_nocase?: InputMaybe<Scalars['String']>
  to_not_contains?: InputMaybe<Scalars['String']>
  to_not_contains_nocase?: InputMaybe<Scalars['String']>
  to_starts_with?: InputMaybe<Scalars['String']>
  to_starts_with_nocase?: InputMaybe<Scalars['String']>
  to_not_starts_with?: InputMaybe<Scalars['String']>
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  to_ends_with?: InputMaybe<Scalars['String']>
  to_ends_with_nocase?: InputMaybe<Scalars['String']>
  to_not_ends_with?: InputMaybe<Scalars['String']>
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  from?: InputMaybe<Scalars['String']>
  from_not?: InputMaybe<Scalars['String']>
  from_gt?: InputMaybe<Scalars['String']>
  from_lt?: InputMaybe<Scalars['String']>
  from_gte?: InputMaybe<Scalars['String']>
  from_lte?: InputMaybe<Scalars['String']>
  from_in?: InputMaybe<Array<Scalars['String']>>
  from_not_in?: InputMaybe<Array<Scalars['String']>>
  from_contains?: InputMaybe<Scalars['String']>
  from_contains_nocase?: InputMaybe<Scalars['String']>
  from_not_contains?: InputMaybe<Scalars['String']>
  from_not_contains_nocase?: InputMaybe<Scalars['String']>
  from_starts_with?: InputMaybe<Scalars['String']>
  from_starts_with_nocase?: InputMaybe<Scalars['String']>
  from_not_starts_with?: InputMaybe<Scalars['String']>
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  from_ends_with?: InputMaybe<Scalars['String']>
  from_ends_with_nocase?: InputMaybe<Scalars['String']>
  from_not_ends_with?: InputMaybe<Scalars['String']>
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  blockNumber?: InputMaybe<Scalars['BigInt']>
  blockNumber_not?: InputMaybe<Scalars['BigInt']>
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokens?: InputMaybe<Array<Scalars['String']>>
  inputTokens_not?: InputMaybe<Array<Scalars['String']>>
  inputTokens_contains?: InputMaybe<Array<Scalars['String']>>
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  inputTokens_?: InputMaybe<Token_filter>
  outputToken?: InputMaybe<Scalars['String']>
  outputToken_not?: InputMaybe<Scalars['String']>
  outputToken_gt?: InputMaybe<Scalars['String']>
  outputToken_lt?: InputMaybe<Scalars['String']>
  outputToken_gte?: InputMaybe<Scalars['String']>
  outputToken_lte?: InputMaybe<Scalars['String']>
  outputToken_in?: InputMaybe<Array<Scalars['String']>>
  outputToken_not_in?: InputMaybe<Array<Scalars['String']>>
  outputToken_contains?: InputMaybe<Scalars['String']>
  outputToken_contains_nocase?: InputMaybe<Scalars['String']>
  outputToken_not_contains?: InputMaybe<Scalars['String']>
  outputToken_not_contains_nocase?: InputMaybe<Scalars['String']>
  outputToken_starts_with?: InputMaybe<Scalars['String']>
  outputToken_starts_with_nocase?: InputMaybe<Scalars['String']>
  outputToken_not_starts_with?: InputMaybe<Scalars['String']>
  outputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  outputToken_ends_with?: InputMaybe<Scalars['String']>
  outputToken_ends_with_nocase?: InputMaybe<Scalars['String']>
  outputToken_not_ends_with?: InputMaybe<Scalars['String']>
  outputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  outputToken_?: InputMaybe<Token_filter>
  inputTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
  inputTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
  outputTokenAmount?: InputMaybe<Scalars['BigInt']>
  outputTokenAmount_not?: InputMaybe<Scalars['BigInt']>
  outputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>
  outputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>
  outputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>
  outputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>
  outputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  outputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  amountUSD?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  pool?: InputMaybe<Scalars['String']>
  pool_not?: InputMaybe<Scalars['String']>
  pool_gt?: InputMaybe<Scalars['String']>
  pool_lt?: InputMaybe<Scalars['String']>
  pool_gte?: InputMaybe<Scalars['String']>
  pool_lte?: InputMaybe<Scalars['String']>
  pool_in?: InputMaybe<Array<Scalars['String']>>
  pool_not_in?: InputMaybe<Array<Scalars['String']>>
  pool_contains?: InputMaybe<Scalars['String']>
  pool_contains_nocase?: InputMaybe<Scalars['String']>
  pool_not_contains?: InputMaybe<Scalars['String']>
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>
  pool_starts_with?: InputMaybe<Scalars['String']>
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>
  pool_not_starts_with?: InputMaybe<Scalars['String']>
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  pool_ends_with?: InputMaybe<Scalars['String']>
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>
  pool_not_ends_with?: InputMaybe<Scalars['String']>
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  pool_?: InputMaybe<LiquidityPool_filter>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Withdraw_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'protocol'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'timestamp'
  | 'inputTokens'
  | 'outputToken'
  | 'inputTokenAmounts'
  | 'outputTokenAmount'
  | 'amountUSD'
  | 'pool'

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>
  /** The block number */
  number: Scalars['Int']
}

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_
  /** The deployment ID */
  deployment: Scalars['String']
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']
}

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny'

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  LiquidityPool: ResolverTypeWrapper<LiquidityPool>
  String: ResolverTypeWrapper<Scalars['String']>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Query: ResolverTypeWrapper<{}>
  LiquidityPoolDailySnapshot: ResolverTypeWrapper<LiquidityPoolDailySnapshot>
  Account: ResolverTypeWrapper<Account>
  Account_filter: Account_filter
  Account_orderBy: Account_orderBy
  ActiveAccount: ResolverTypeWrapper<ActiveAccount>
  ActiveAccount_filter: ActiveAccount_filter
  ActiveAccount_orderBy: ActiveAccount_orderBy
  BasePool: ResolverTypeWrapper<BasePool>
  BasePool_filter: BasePool_filter
  BasePool_orderBy: BasePool_orderBy
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_height
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>
  Deposit: ResolverTypeWrapper<Deposit>
  Deposit_filter: Deposit_filter
  Deposit_orderBy: Deposit_orderBy
  DexAmmProtocol: ResolverTypeWrapper<DexAmmProtocol>
  DexAmmProtocol_filter: DexAmmProtocol_filter
  DexAmmProtocol_orderBy: DexAmmProtocol_orderBy
  Event: ResolversTypes['Deposit'] | ResolversTypes['Swap'] | ResolversTypes['Withdraw']
  Event_filter: Event_filter
  Event_orderBy: Event_orderBy
  Factory: ResolverTypeWrapper<Factory>
  Factory_filter: Factory_filter
  Factory_orderBy: Factory_orderBy
  FinancialsDailySnapshot: ResolverTypeWrapper<FinancialsDailySnapshot>
  FinancialsDailySnapshot_filter: FinancialsDailySnapshot_filter
  FinancialsDailySnapshot_orderBy: FinancialsDailySnapshot_orderBy
  GaugePool: ResolverTypeWrapper<GaugePool>
  GaugePool_filter: GaugePool_filter
  GaugePool_orderBy: GaugePool_orderBy
  LiquidityPoolDailySnapshot_filter: LiquidityPoolDailySnapshot_filter
  LiquidityPoolDailySnapshot_orderBy: LiquidityPoolDailySnapshot_orderBy
  LiquidityPoolFee: ResolverTypeWrapper<LiquidityPoolFee>
  LiquidityPoolFeeType: LiquidityPoolFeeType
  LiquidityPoolFee_filter: LiquidityPoolFee_filter
  LiquidityPoolFee_orderBy: LiquidityPoolFee_orderBy
  LiquidityPoolHourlySnapshot: ResolverTypeWrapper<LiquidityPoolHourlySnapshot>
  LiquidityPoolHourlySnapshot_filter: LiquidityPoolHourlySnapshot_filter
  LiquidityPoolHourlySnapshot_orderBy: LiquidityPoolHourlySnapshot_orderBy
  LiquidityPool_filter: LiquidityPool_filter
  LiquidityPool_orderBy: LiquidityPool_orderBy
  Network: Network
  OrderDirection: OrderDirection
  Platform: ResolverTypeWrapper<Platform>
  Platform_filter: Platform_filter
  Platform_orderBy: Platform_orderBy
  PoolType: PoolType
  Protocol: ResolversTypes['DexAmmProtocol']
  ProtocolType: ProtocolType
  Protocol_filter: Protocol_filter
  Protocol_orderBy: Protocol_orderBy
  Registry: ResolverTypeWrapper<Registry>
  Registry_filter: Registry_filter
  Registry_orderBy: Registry_orderBy
  RewardToken: ResolverTypeWrapper<RewardToken>
  RewardTokenType: RewardTokenType
  RewardToken_filter: RewardToken_filter
  RewardToken_orderBy: RewardToken_orderBy
  Subscription: ResolverTypeWrapper<{}>
  Swap: ResolverTypeWrapper<Swap>
  Swap_filter: Swap_filter
  Swap_orderBy: Swap_orderBy
  Token: ResolverTypeWrapper<Token>
  TokenSnapshot: ResolverTypeWrapper<TokenSnapshot>
  TokenSnapshot_filter: TokenSnapshot_filter
  TokenSnapshot_orderBy: TokenSnapshot_orderBy
  Token_filter: Token_filter
  Token_orderBy: Token_orderBy
  UsageMetricsDailySnapshot: ResolverTypeWrapper<UsageMetricsDailySnapshot>
  UsageMetricsDailySnapshot_filter: UsageMetricsDailySnapshot_filter
  UsageMetricsDailySnapshot_orderBy: UsageMetricsDailySnapshot_orderBy
  UsageMetricsHourlySnapshot: ResolverTypeWrapper<UsageMetricsHourlySnapshot>
  UsageMetricsHourlySnapshot_filter: UsageMetricsHourlySnapshot_filter
  UsageMetricsHourlySnapshot_orderBy: UsageMetricsHourlySnapshot_orderBy
  Withdraw: ResolverTypeWrapper<Withdraw>
  Withdraw_filter: Withdraw_filter
  Withdraw_orderBy: Withdraw_orderBy
  _Block_: ResolverTypeWrapper<_Block_>
  _Meta_: ResolverTypeWrapper<_Meta_>
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  LiquidityPool: LiquidityPool
  String: Scalars['String']
  ID: Scalars['ID']
  Int: Scalars['Int']
  Boolean: Scalars['Boolean']
  Query: {}
  LiquidityPoolDailySnapshot: LiquidityPoolDailySnapshot
  Account: Account
  Account_filter: Account_filter
  ActiveAccount: ActiveAccount
  ActiveAccount_filter: ActiveAccount_filter
  BasePool: BasePool
  BasePool_filter: BasePool_filter
  BigDecimal: Scalars['BigDecimal']
  BigInt: Scalars['BigInt']
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_height
  Bytes: Scalars['Bytes']
  Deposit: Deposit
  Deposit_filter: Deposit_filter
  DexAmmProtocol: DexAmmProtocol
  DexAmmProtocol_filter: DexAmmProtocol_filter
  Event: ResolversParentTypes['Deposit'] | ResolversParentTypes['Swap'] | ResolversParentTypes['Withdraw']
  Event_filter: Event_filter
  Factory: Factory
  Factory_filter: Factory_filter
  FinancialsDailySnapshot: FinancialsDailySnapshot
  FinancialsDailySnapshot_filter: FinancialsDailySnapshot_filter
  GaugePool: GaugePool
  GaugePool_filter: GaugePool_filter
  LiquidityPoolDailySnapshot_filter: LiquidityPoolDailySnapshot_filter
  LiquidityPoolFee: LiquidityPoolFee
  LiquidityPoolFee_filter: LiquidityPoolFee_filter
  LiquidityPoolHourlySnapshot: LiquidityPoolHourlySnapshot
  LiquidityPoolHourlySnapshot_filter: LiquidityPoolHourlySnapshot_filter
  LiquidityPool_filter: LiquidityPool_filter
  Platform: Platform
  Platform_filter: Platform_filter
  Protocol: ResolversParentTypes['DexAmmProtocol']
  Protocol_filter: Protocol_filter
  Registry: Registry
  Registry_filter: Registry_filter
  RewardToken: RewardToken
  RewardToken_filter: RewardToken_filter
  Subscription: {}
  Swap: Swap
  Swap_filter: Swap_filter
  Token: Token
  TokenSnapshot: TokenSnapshot
  TokenSnapshot_filter: TokenSnapshot_filter
  Token_filter: Token_filter
  UsageMetricsDailySnapshot: UsageMetricsDailySnapshot
  UsageMetricsDailySnapshot_filter: UsageMetricsDailySnapshot_filter
  UsageMetricsHourlySnapshot: UsageMetricsHourlySnapshot
  UsageMetricsHourlySnapshot_filter: UsageMetricsHourlySnapshot_filter
  Withdraw: Withdraw
  Withdraw_filter: Withdraw_filter
  _Block_: _Block_
  _Meta_: _Meta_
}>

export type entityDirectiveArgs = {}

export type entityDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext & { protocolName: string },
  Args = entityDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type subgraphIdDirectiveArgs = {
  id: Scalars['String']
}

export type subgraphIdDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext & { protocolName: string },
  Args = subgraphIdDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type derivedFromDirectiveArgs = {
  field: Scalars['String']
}

export type derivedFromDirectiveResolver<
  Result,
  Parent,
  ContextType = MeshContext & { protocolName: string },
  Args = derivedFromDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type LiquidityPoolResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['LiquidityPool'] = ResolversParentTypes['LiquidityPool'],
> = ResolversObject<{
  protocolName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  inputTokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<LiquidityPoolinputTokensArgs, 'skip' | 'first'>
  >
  outputToken?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  rewardTokens?: Resolver<
    Array<ResolversTypes['RewardToken']>,
    ParentType,
    ContextType,
    RequireFields<LiquidityPoolrewardTokensArgs, 'skip' | 'first'>
  >
  fees?: Resolver<
    Array<ResolversTypes['LiquidityPoolFee']>,
    ParentType,
    ContextType,
    RequireFields<LiquidityPoolfeesArgs, 'skip' | 'first'>
  >
  createdTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  createdBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  inputTokenBalances?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>
  inputTokenWeights?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  outputTokenSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  outputTokenPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  stakedOutputTokenAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  rewardTokenEmissionsAmount?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>
  rewardTokenEmissionsUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  dailySnapshots?: Resolver<
    Array<ResolversTypes['LiquidityPoolDailySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<LiquidityPooldailySnapshotsArgs, 'skip' | 'first'>
  >
  hourlySnapshots?: Resolver<
    Array<ResolversTypes['LiquidityPoolHourlySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<LiquidityPoolhourlySnapshotsArgs, 'skip' | 'first'>
  >
  deposits?: Resolver<
    Array<ResolversTypes['Deposit']>,
    ParentType,
    ContextType,
    RequireFields<LiquidityPooldepositsArgs, 'skip' | 'first'>
  >
  withdraws?: Resolver<
    Array<ResolversTypes['Withdraw']>,
    ParentType,
    ContextType,
    RequireFields<LiquidityPoolwithdrawsArgs, 'skip' | 'first'>
  >
  swaps?: Resolver<
    Array<ResolversTypes['Swap']>,
    ParentType,
    ContextType,
    RequireFields<LiquidityPoolswapsArgs, 'skip' | 'first'>
  >
  platform?: Resolver<Maybe<ResolversTypes['Platform']>, ParentType, ContextType>
  metapool?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  basePool?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  assetType?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  poolType?: Resolver<ResolversTypes['PoolType'], ParentType, ContextType>
  isV2?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  gauge?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  registry?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  gaugeType?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  rewardContract?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type QueryResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  crossLiquidityPools?: Resolver<
    Array<ResolversTypes['LiquidityPool']>,
    ParentType,
    ContextType,
    RequireFields<QuerycrossLiquidityPoolsArgs, 'first' | 'protocolNames' | 'orderBy' | 'orderDirection' | 'where'>
  >
  token?: Resolver<
    Maybe<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>
  >
  tokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  rewardToken?: Resolver<
    Maybe<ResolversTypes['RewardToken']>,
    ParentType,
    ContextType,
    RequireFields<QueryrewardTokenArgs, 'id' | 'subgraphError'>
  >
  rewardTokens?: Resolver<
    Array<ResolversTypes['RewardToken']>,
    ParentType,
    ContextType,
    RequireFields<QueryrewardTokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidityPoolFee?: Resolver<
    Maybe<ResolversTypes['LiquidityPoolFee']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidityPoolFeeArgs, 'id' | 'subgraphError'>
  >
  liquidityPoolFees?: Resolver<
    Array<ResolversTypes['LiquidityPoolFee']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidityPoolFeesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  dexAmmProtocol?: Resolver<
    Maybe<ResolversTypes['DexAmmProtocol']>,
    ParentType,
    ContextType,
    RequireFields<QuerydexAmmProtocolArgs, 'id' | 'subgraphError'>
  >
  dexAmmProtocols?: Resolver<
    Array<ResolversTypes['DexAmmProtocol']>,
    ParentType,
    ContextType,
    RequireFields<QuerydexAmmProtocolsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  usageMetricsDailySnapshot?: Resolver<
    Maybe<ResolversTypes['UsageMetricsDailySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryusageMetricsDailySnapshotArgs, 'id' | 'subgraphError'>
  >
  usageMetricsDailySnapshots?: Resolver<
    Array<ResolversTypes['UsageMetricsDailySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryusageMetricsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  usageMetricsHourlySnapshot?: Resolver<
    Maybe<ResolversTypes['UsageMetricsHourlySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryusageMetricsHourlySnapshotArgs, 'id' | 'subgraphError'>
  >
  usageMetricsHourlySnapshots?: Resolver<
    Array<ResolversTypes['UsageMetricsHourlySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryusageMetricsHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  financialsDailySnapshot?: Resolver<
    Maybe<ResolversTypes['FinancialsDailySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryfinancialsDailySnapshotArgs, 'id' | 'subgraphError'>
  >
  financialsDailySnapshots?: Resolver<
    Array<ResolversTypes['FinancialsDailySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryfinancialsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidityPool?: Resolver<
    Maybe<ResolversTypes['LiquidityPool']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidityPoolArgs, 'id' | 'subgraphError'>
  >
  liquidityPools?: Resolver<
    Array<ResolversTypes['LiquidityPool']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidityPoolsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidityPoolDailySnapshot?: Resolver<
    Maybe<ResolversTypes['LiquidityPoolDailySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidityPoolDailySnapshotArgs, 'id' | 'subgraphError'>
  >
  liquidityPoolDailySnapshots?: Resolver<
    Array<ResolversTypes['LiquidityPoolDailySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidityPoolDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidityPoolHourlySnapshot?: Resolver<
    Maybe<ResolversTypes['LiquidityPoolHourlySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidityPoolHourlySnapshotArgs, 'id' | 'subgraphError'>
  >
  liquidityPoolHourlySnapshots?: Resolver<
    Array<ResolversTypes['LiquidityPoolHourlySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidityPoolHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  deposit?: Resolver<
    Maybe<ResolversTypes['Deposit']>,
    ParentType,
    ContextType,
    RequireFields<QuerydepositArgs, 'id' | 'subgraphError'>
  >
  deposits?: Resolver<
    Array<ResolversTypes['Deposit']>,
    ParentType,
    ContextType,
    RequireFields<QuerydepositsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  withdraw?: Resolver<
    Maybe<ResolversTypes['Withdraw']>,
    ParentType,
    ContextType,
    RequireFields<QuerywithdrawArgs, 'id' | 'subgraphError'>
  >
  withdraws?: Resolver<
    Array<ResolversTypes['Withdraw']>,
    ParentType,
    ContextType,
    RequireFields<QuerywithdrawsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  swap?: Resolver<
    Maybe<ResolversTypes['Swap']>,
    ParentType,
    ContextType,
    RequireFields<QueryswapArgs, 'id' | 'subgraphError'>
  >
  swaps?: Resolver<
    Array<ResolversTypes['Swap']>,
    ParentType,
    ContextType,
    RequireFields<QueryswapsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  account?: Resolver<
    Maybe<ResolversTypes['Account']>,
    ParentType,
    ContextType,
    RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>
  >
  accounts?: Resolver<
    Array<ResolversTypes['Account']>,
    ParentType,
    ContextType,
    RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  activeAccount?: Resolver<
    Maybe<ResolversTypes['ActiveAccount']>,
    ParentType,
    ContextType,
    RequireFields<QueryactiveAccountArgs, 'id' | 'subgraphError'>
  >
  activeAccounts?: Resolver<
    Array<ResolversTypes['ActiveAccount']>,
    ParentType,
    ContextType,
    RequireFields<QueryactiveAccountsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  platform?: Resolver<
    Maybe<ResolversTypes['Platform']>,
    ParentType,
    ContextType,
    RequireFields<QueryplatformArgs, 'id' | 'subgraphError'>
  >
  platforms?: Resolver<
    Array<ResolversTypes['Platform']>,
    ParentType,
    ContextType,
    RequireFields<QueryplatformsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  registry?: Resolver<
    Maybe<ResolversTypes['Registry']>,
    ParentType,
    ContextType,
    RequireFields<QueryregistryArgs, 'id' | 'subgraphError'>
  >
  registries?: Resolver<
    Array<ResolversTypes['Registry']>,
    ParentType,
    ContextType,
    RequireFields<QueryregistriesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  factory?: Resolver<
    Maybe<ResolversTypes['Factory']>,
    ParentType,
    ContextType,
    RequireFields<QueryfactoryArgs, 'id' | 'subgraphError'>
  >
  factories?: Resolver<
    Array<ResolversTypes['Factory']>,
    ParentType,
    ContextType,
    RequireFields<QueryfactoriesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  basePool?: Resolver<
    Maybe<ResolversTypes['BasePool']>,
    ParentType,
    ContextType,
    RequireFields<QuerybasePoolArgs, 'id' | 'subgraphError'>
  >
  basePools?: Resolver<
    Array<ResolversTypes['BasePool']>,
    ParentType,
    ContextType,
    RequireFields<QuerybasePoolsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  tokenSnapshot?: Resolver<
    Maybe<ResolversTypes['TokenSnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QuerytokenSnapshotArgs, 'id' | 'subgraphError'>
  >
  tokenSnapshots?: Resolver<
    Array<ResolversTypes['TokenSnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QuerytokenSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  gaugePool?: Resolver<
    Maybe<ResolversTypes['GaugePool']>,
    ParentType,
    ContextType,
    RequireFields<QuerygaugePoolArgs, 'id' | 'subgraphError'>
  >
  gaugePools?: Resolver<
    Array<ResolversTypes['GaugePool']>,
    ParentType,
    ContextType,
    RequireFields<QuerygaugePoolsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  protocol?: Resolver<
    Maybe<ResolversTypes['Protocol']>,
    ParentType,
    ContextType,
    RequireFields<QueryprotocolArgs, 'id' | 'subgraphError'>
  >
  protocols?: Resolver<
    Array<ResolversTypes['Protocol']>,
    ParentType,
    ContextType,
    RequireFields<QueryprotocolsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  event?: Resolver<
    Maybe<ResolversTypes['Event']>,
    ParentType,
    ContextType,
    RequireFields<QueryeventArgs, 'id' | 'subgraphError'>
  >
  events?: Resolver<
    Array<ResolversTypes['Event']>,
    ParentType,
    ContextType,
    RequireFields<QueryeventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>
}>

export type LiquidityPoolDailySnapshotResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['LiquidityPoolDailySnapshot'] = ResolversParentTypes['LiquidityPoolDailySnapshot'],
> = ResolversObject<{
  FeesUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  TokenFeesUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  TokenFeesRaw?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  RewardsPerToken?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  RewardsROI?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  FeesROI?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  BlockTimestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  DateInterval?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>
  pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyVolumeByTokenAmount?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>
  dailyVolumeByTokenUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  inputTokenBalances?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>
  inputTokenWeights?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  outputTokenSupply?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  outputTokenPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  stakedOutputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  rewardTokenEmissionsAmount?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>
  rewardTokenEmissionsUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type AccountResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ActiveAccountResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['ActiveAccount'] = ResolversParentTypes['ActiveAccount'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BasePoolResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['BasePool'] = ResolversParentTypes['BasePool'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  coins?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  coinDecimals?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal'
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt'
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes'
}

export type DepositResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['Deposit'] = ResolversParentTypes['Deposit'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  inputTokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<DepositinputTokensArgs, 'skip' | 'first'>
  >
  outputToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>
  inputTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>
  outputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type DexAmmProtocolResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['DexAmmProtocol'] = ResolversParentTypes['DexAmmProtocol'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  schemaVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  subgraphVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  methodologyVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  network?: Resolver<ResolversTypes['Network'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['ProtocolType'], ParentType, ContextType>
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  dailyUsageMetrics?: Resolver<
    Array<ResolversTypes['UsageMetricsDailySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<DexAmmProtocoldailyUsageMetricsArgs, 'skip' | 'first'>
  >
  hourlyUsageMetrics?: Resolver<
    Array<ResolversTypes['UsageMetricsHourlySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<DexAmmProtocolhourlyUsageMetricsArgs, 'skip' | 'first'>
  >
  financialMetrics?: Resolver<
    Array<ResolversTypes['FinancialsDailySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<DexAmmProtocolfinancialMetricsArgs, 'skip' | 'first'>
  >
  pools?: Resolver<
    Array<ResolversTypes['LiquidityPool']>,
    ParentType,
    ContextType,
    RequireFields<DexAmmProtocolpoolsArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type EventResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'Deposit' | 'Swap' | 'Withdraw', ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
}>

export type FactoryResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['Factory'] = ResolversParentTypes['Factory'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  poolCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type FinancialsDailySnapshotResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['FinancialsDailySnapshot'] = ResolversParentTypes['FinancialsDailySnapshot'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailySupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type GaugePoolResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['GaugePool'] = ResolversParentTypes['GaugePool'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  pool?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type LiquidityPoolFeeResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['LiquidityPoolFee'] = ResolversParentTypes['LiquidityPoolFee'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  feePercentage?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  feeType?: Resolver<ResolversTypes['LiquidityPoolFeeType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type LiquidityPoolHourlySnapshotResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['LiquidityPoolHourlySnapshot'] = ResolversParentTypes['LiquidityPoolHourlySnapshot'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>
  pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  hourlyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  hourlyVolumeByTokenAmount?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>
  hourlyVolumeByTokenUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  cumulativeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  inputTokenBalances?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>
  inputTokenWeights?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  outputTokenSupply?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  outputTokenPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  stakedOutputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  rewardTokenEmissionsAmount?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>
  rewardTokenEmissionsUSD?: Resolver<Array<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PlatformResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['Platform'] = ResolversParentTypes['Platform'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  pools?: Resolver<
    Array<ResolversTypes['LiquidityPool']>,
    ParentType,
    ContextType,
    RequireFields<PlatformpoolsArgs, 'skip' | 'first'>
  >
  poolAddresses?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>
  latestPoolSnapshot?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  catchup?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProtocolResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['Protocol'] = ResolversParentTypes['Protocol'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'DexAmmProtocol', ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  schemaVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  subgraphVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  methodologyVersion?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  network?: Resolver<ResolversTypes['Network'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['ProtocolType'], ParentType, ContextType>
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  protocolControlledValueUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  cumulativeSupplySideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cumulativeProtocolSideRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cumulativeTotalRevenueUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  dailyUsageMetrics?: Resolver<
    Array<ResolversTypes['UsageMetricsDailySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<ProtocoldailyUsageMetricsArgs, 'skip' | 'first'>
  >
  hourlyUsageMetrics?: Resolver<
    Array<ResolversTypes['UsageMetricsHourlySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<ProtocolhourlyUsageMetricsArgs, 'skip' | 'first'>
  >
  financialMetrics?: Resolver<
    Array<ResolversTypes['FinancialsDailySnapshot']>,
    ParentType,
    ContextType,
    RequireFields<ProtocolfinancialMetricsArgs, 'skip' | 'first'>
  >
}>

export type RegistryResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['Registry'] = ResolversParentTypes['Registry'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type RewardTokenResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['RewardToken'] = ResolversParentTypes['RewardToken'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  type?: Resolver<ResolversTypes['RewardTokenType'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type SubscriptionResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = ResolversObject<{
  token?: SubscriptionResolver<
    Maybe<ResolversTypes['Token']>,
    'token',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>
  >
  tokens?: SubscriptionResolver<
    Array<ResolversTypes['Token']>,
    'tokens',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  rewardToken?: SubscriptionResolver<
    Maybe<ResolversTypes['RewardToken']>,
    'rewardToken',
    ParentType,
    ContextType,
    RequireFields<SubscriptionrewardTokenArgs, 'id' | 'subgraphError'>
  >
  rewardTokens?: SubscriptionResolver<
    Array<ResolversTypes['RewardToken']>,
    'rewardTokens',
    ParentType,
    ContextType,
    RequireFields<SubscriptionrewardTokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidityPoolFee?: SubscriptionResolver<
    Maybe<ResolversTypes['LiquidityPoolFee']>,
    'liquidityPoolFee',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidityPoolFeeArgs, 'id' | 'subgraphError'>
  >
  liquidityPoolFees?: SubscriptionResolver<
    Array<ResolversTypes['LiquidityPoolFee']>,
    'liquidityPoolFees',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidityPoolFeesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  dexAmmProtocol?: SubscriptionResolver<
    Maybe<ResolversTypes['DexAmmProtocol']>,
    'dexAmmProtocol',
    ParentType,
    ContextType,
    RequireFields<SubscriptiondexAmmProtocolArgs, 'id' | 'subgraphError'>
  >
  dexAmmProtocols?: SubscriptionResolver<
    Array<ResolversTypes['DexAmmProtocol']>,
    'dexAmmProtocols',
    ParentType,
    ContextType,
    RequireFields<SubscriptiondexAmmProtocolsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  usageMetricsDailySnapshot?: SubscriptionResolver<
    Maybe<ResolversTypes['UsageMetricsDailySnapshot']>,
    'usageMetricsDailySnapshot',
    ParentType,
    ContextType,
    RequireFields<SubscriptionusageMetricsDailySnapshotArgs, 'id' | 'subgraphError'>
  >
  usageMetricsDailySnapshots?: SubscriptionResolver<
    Array<ResolversTypes['UsageMetricsDailySnapshot']>,
    'usageMetricsDailySnapshots',
    ParentType,
    ContextType,
    RequireFields<SubscriptionusageMetricsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  usageMetricsHourlySnapshot?: SubscriptionResolver<
    Maybe<ResolversTypes['UsageMetricsHourlySnapshot']>,
    'usageMetricsHourlySnapshot',
    ParentType,
    ContextType,
    RequireFields<SubscriptionusageMetricsHourlySnapshotArgs, 'id' | 'subgraphError'>
  >
  usageMetricsHourlySnapshots?: SubscriptionResolver<
    Array<ResolversTypes['UsageMetricsHourlySnapshot']>,
    'usageMetricsHourlySnapshots',
    ParentType,
    ContextType,
    RequireFields<SubscriptionusageMetricsHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  financialsDailySnapshot?: SubscriptionResolver<
    Maybe<ResolversTypes['FinancialsDailySnapshot']>,
    'financialsDailySnapshot',
    ParentType,
    ContextType,
    RequireFields<SubscriptionfinancialsDailySnapshotArgs, 'id' | 'subgraphError'>
  >
  financialsDailySnapshots?: SubscriptionResolver<
    Array<ResolversTypes['FinancialsDailySnapshot']>,
    'financialsDailySnapshots',
    ParentType,
    ContextType,
    RequireFields<SubscriptionfinancialsDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidityPool?: SubscriptionResolver<
    Maybe<ResolversTypes['LiquidityPool']>,
    'liquidityPool',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidityPoolArgs, 'id' | 'subgraphError'>
  >
  liquidityPools?: SubscriptionResolver<
    Array<ResolversTypes['LiquidityPool']>,
    'liquidityPools',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidityPoolsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidityPoolDailySnapshot?: SubscriptionResolver<
    Maybe<ResolversTypes['LiquidityPoolDailySnapshot']>,
    'liquidityPoolDailySnapshot',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidityPoolDailySnapshotArgs, 'id' | 'subgraphError'>
  >
  liquidityPoolDailySnapshots?: SubscriptionResolver<
    Array<ResolversTypes['LiquidityPoolDailySnapshot']>,
    'liquidityPoolDailySnapshots',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidityPoolDailySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidityPoolHourlySnapshot?: SubscriptionResolver<
    Maybe<ResolversTypes['LiquidityPoolHourlySnapshot']>,
    'liquidityPoolHourlySnapshot',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidityPoolHourlySnapshotArgs, 'id' | 'subgraphError'>
  >
  liquidityPoolHourlySnapshots?: SubscriptionResolver<
    Array<ResolversTypes['LiquidityPoolHourlySnapshot']>,
    'liquidityPoolHourlySnapshots',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidityPoolHourlySnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  deposit?: SubscriptionResolver<
    Maybe<ResolversTypes['Deposit']>,
    'deposit',
    ParentType,
    ContextType,
    RequireFields<SubscriptiondepositArgs, 'id' | 'subgraphError'>
  >
  deposits?: SubscriptionResolver<
    Array<ResolversTypes['Deposit']>,
    'deposits',
    ParentType,
    ContextType,
    RequireFields<SubscriptiondepositsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  withdraw?: SubscriptionResolver<
    Maybe<ResolversTypes['Withdraw']>,
    'withdraw',
    ParentType,
    ContextType,
    RequireFields<SubscriptionwithdrawArgs, 'id' | 'subgraphError'>
  >
  withdraws?: SubscriptionResolver<
    Array<ResolversTypes['Withdraw']>,
    'withdraws',
    ParentType,
    ContextType,
    RequireFields<SubscriptionwithdrawsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  swap?: SubscriptionResolver<
    Maybe<ResolversTypes['Swap']>,
    'swap',
    ParentType,
    ContextType,
    RequireFields<SubscriptionswapArgs, 'id' | 'subgraphError'>
  >
  swaps?: SubscriptionResolver<
    Array<ResolversTypes['Swap']>,
    'swaps',
    ParentType,
    ContextType,
    RequireFields<SubscriptionswapsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  account?: SubscriptionResolver<
    Maybe<ResolversTypes['Account']>,
    'account',
    ParentType,
    ContextType,
    RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>
  >
  accounts?: SubscriptionResolver<
    Array<ResolversTypes['Account']>,
    'accounts',
    ParentType,
    ContextType,
    RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  activeAccount?: SubscriptionResolver<
    Maybe<ResolversTypes['ActiveAccount']>,
    'activeAccount',
    ParentType,
    ContextType,
    RequireFields<SubscriptionactiveAccountArgs, 'id' | 'subgraphError'>
  >
  activeAccounts?: SubscriptionResolver<
    Array<ResolversTypes['ActiveAccount']>,
    'activeAccounts',
    ParentType,
    ContextType,
    RequireFields<SubscriptionactiveAccountsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  platform?: SubscriptionResolver<
    Maybe<ResolversTypes['Platform']>,
    'platform',
    ParentType,
    ContextType,
    RequireFields<SubscriptionplatformArgs, 'id' | 'subgraphError'>
  >
  platforms?: SubscriptionResolver<
    Array<ResolversTypes['Platform']>,
    'platforms',
    ParentType,
    ContextType,
    RequireFields<SubscriptionplatformsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  registry?: SubscriptionResolver<
    Maybe<ResolversTypes['Registry']>,
    'registry',
    ParentType,
    ContextType,
    RequireFields<SubscriptionregistryArgs, 'id' | 'subgraphError'>
  >
  registries?: SubscriptionResolver<
    Array<ResolversTypes['Registry']>,
    'registries',
    ParentType,
    ContextType,
    RequireFields<SubscriptionregistriesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  factory?: SubscriptionResolver<
    Maybe<ResolversTypes['Factory']>,
    'factory',
    ParentType,
    ContextType,
    RequireFields<SubscriptionfactoryArgs, 'id' | 'subgraphError'>
  >
  factories?: SubscriptionResolver<
    Array<ResolversTypes['Factory']>,
    'factories',
    ParentType,
    ContextType,
    RequireFields<SubscriptionfactoriesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  basePool?: SubscriptionResolver<
    Maybe<ResolversTypes['BasePool']>,
    'basePool',
    ParentType,
    ContextType,
    RequireFields<SubscriptionbasePoolArgs, 'id' | 'subgraphError'>
  >
  basePools?: SubscriptionResolver<
    Array<ResolversTypes['BasePool']>,
    'basePools',
    ParentType,
    ContextType,
    RequireFields<SubscriptionbasePoolsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  tokenSnapshot?: SubscriptionResolver<
    Maybe<ResolversTypes['TokenSnapshot']>,
    'tokenSnapshot',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontokenSnapshotArgs, 'id' | 'subgraphError'>
  >
  tokenSnapshots?: SubscriptionResolver<
    Array<ResolversTypes['TokenSnapshot']>,
    'tokenSnapshots',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontokenSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  gaugePool?: SubscriptionResolver<
    Maybe<ResolversTypes['GaugePool']>,
    'gaugePool',
    ParentType,
    ContextType,
    RequireFields<SubscriptiongaugePoolArgs, 'id' | 'subgraphError'>
  >
  gaugePools?: SubscriptionResolver<
    Array<ResolversTypes['GaugePool']>,
    'gaugePools',
    ParentType,
    ContextType,
    RequireFields<SubscriptiongaugePoolsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  protocol?: SubscriptionResolver<
    Maybe<ResolversTypes['Protocol']>,
    'protocol',
    ParentType,
    ContextType,
    RequireFields<SubscriptionprotocolArgs, 'id' | 'subgraphError'>
  >
  protocols?: SubscriptionResolver<
    Array<ResolversTypes['Protocol']>,
    'protocols',
    ParentType,
    ContextType,
    RequireFields<SubscriptionprotocolsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  event?: SubscriptionResolver<
    Maybe<ResolversTypes['Event']>,
    'event',
    ParentType,
    ContextType,
    RequireFields<SubscriptioneventArgs, 'id' | 'subgraphError'>
  >
  events?: SubscriptionResolver<
    Array<ResolversTypes['Event']>,
    'events',
    ParentType,
    ContextType,
    RequireFields<SubscriptioneventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  _meta?: SubscriptionResolver<
    Maybe<ResolversTypes['_Meta_']>,
    '_meta',
    ParentType,
    ContextType,
    Partial<Subscription_metaArgs>
  >
}>

export type SwapResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  tokenIn?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  amountIn?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  amountInUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  tokenOut?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  amountOut?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  amountOutUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TokenResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  decimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  lastPriceUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  lastPriceBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TokenSnapshotResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['TokenSnapshot'] = ResolversParentTypes['TokenSnapshot'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UsageMetricsDailySnapshotResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['UsageMetricsDailySnapshot'] = ResolversParentTypes['UsageMetricsDailySnapshot'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>
  dailyActiveUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  dailyTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  dailyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  dailyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  dailySwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UsageMetricsHourlySnapshotResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['UsageMetricsHourlySnapshot'] = ResolversParentTypes['UsageMetricsHourlySnapshot'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>
  hourlyActiveUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  cumulativeUniqueUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  hourlyTransactionCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  hourlyDepositCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  hourlyWithdrawCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  hourlySwapCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type WithdrawResolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['Withdraw'] = ResolversParentTypes['Withdraw'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  hash?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  logIndex?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  protocol?: Resolver<ResolversTypes['DexAmmProtocol'], ParentType, ContextType>
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  inputTokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<WithdrawinputTokensArgs, 'skip' | 'first'>
  >
  outputToken?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType>
  inputTokenAmounts?: Resolver<Array<ResolversTypes['BigInt']>, ParentType, ContextType>
  outputTokenAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  pool?: Resolver<ResolversTypes['LiquidityPool'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Block_Resolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_'],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Meta_Resolvers<
  ContextType = MeshContext & { protocolName: string },
  ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_'],
> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = MeshContext & { protocolName: string }> = ResolversObject<{
  LiquidityPool?: LiquidityPoolResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  LiquidityPoolDailySnapshot?: LiquidityPoolDailySnapshotResolvers<ContextType>
  Account?: AccountResolvers<ContextType>
  ActiveAccount?: ActiveAccountResolvers<ContextType>
  BasePool?: BasePoolResolvers<ContextType>
  BigDecimal?: GraphQLScalarType
  BigInt?: GraphQLScalarType
  Bytes?: GraphQLScalarType
  Deposit?: DepositResolvers<ContextType>
  DexAmmProtocol?: DexAmmProtocolResolvers<ContextType>
  Event?: EventResolvers<ContextType>
  Factory?: FactoryResolvers<ContextType>
  FinancialsDailySnapshot?: FinancialsDailySnapshotResolvers<ContextType>
  GaugePool?: GaugePoolResolvers<ContextType>
  LiquidityPoolFee?: LiquidityPoolFeeResolvers<ContextType>
  LiquidityPoolHourlySnapshot?: LiquidityPoolHourlySnapshotResolvers<ContextType>
  Platform?: PlatformResolvers<ContextType>
  Protocol?: ProtocolResolvers<ContextType>
  Registry?: RegistryResolvers<ContextType>
  RewardToken?: RewardTokenResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  Swap?: SwapResolvers<ContextType>
  Token?: TokenResolvers<ContextType>
  TokenSnapshot?: TokenSnapshotResolvers<ContextType>
  UsageMetricsDailySnapshot?: UsageMetricsDailySnapshotResolvers<ContextType>
  UsageMetricsHourlySnapshot?: UsageMetricsHourlySnapshotResolvers<ContextType>
  Withdraw?: WithdrawResolvers<ContextType>
  _Block_?: _Block_Resolvers<ContextType>
  _Meta_?: _Meta_Resolvers<ContextType>
}>

export type DirectiveResolvers<ContextType = MeshContext & { protocolName: string }> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>
}>

import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime'

import { InContextSdkMethod } from '@graphql-mesh/types'

export namespace ProtocolTypes {
  export type Maybe<T> = T | null
  export type InputMaybe<T> = Maybe<T>
  export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
  export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
  export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
  /** All built-in and custom scalars, mapped to their actual values */
  export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    BigDecimal: any
    BigInt: any
    Bytes: any
  }

  export type Account = {
    /**  Address of the account  */
    id: Scalars['ID']
  }

  export type Account_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Account_orderBy = 'id'

  export type ActiveAccount = {
    /**  { daily/hourly }-{ Address of the account }-{ Days/hours since Unix epoch }  */
    id: Scalars['ID']
  }

  export type ActiveAccount_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type ActiveAccount_orderBy = 'id'

  export type BasePool = {
    id: Scalars['ID']
    coins: Array<Scalars['String']>
    coinDecimals: Array<Scalars['BigInt']>
  }

  export type BasePool_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    coins?: InputMaybe<Array<Scalars['String']>>
    coins_not?: InputMaybe<Array<Scalars['String']>>
    coins_contains?: InputMaybe<Array<Scalars['String']>>
    coins_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    coins_not_contains?: InputMaybe<Array<Scalars['String']>>
    coins_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    coinDecimals?: InputMaybe<Array<Scalars['BigInt']>>
    coinDecimals_not?: InputMaybe<Array<Scalars['BigInt']>>
    coinDecimals_contains?: InputMaybe<Array<Scalars['BigInt']>>
    coinDecimals_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    coinDecimals_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
    coinDecimals_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type BasePool_orderBy = 'id' | 'coins' | 'coinDecimals'

  export type BlockChangedFilter = {
    number_gte: Scalars['Int']
  }

  export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>
    number?: InputMaybe<Scalars['Int']>
    number_gte?: InputMaybe<Scalars['Int']>
  }

  export type Deposit = Event & {
    /**  deposit-{ Transaction hash }-{ Log index }  */
    id: Scalars['ID']
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String']
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int']
    /**  The protocol this transaction belongs to  */
    protocol: DexAmmProtocol
    /**  Address that received the tokens  */
    to: Scalars['String']
    /**  Address that sent the tokens  */
    from: Scalars['String']
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt']
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt']
    /**  Input tokens of the pool. E.g. WETH and USDC to a WETH-USDC pool  */
    inputTokens: Array<Token>
    /**  Output token of the pool. E.g. the UNI-LP token  */
    outputToken?: Maybe<Token>
    /**  Amount of input tokens in the token's native unit  */
    inputTokenAmounts: Array<Scalars['BigInt']>
    /**  Amount of output tokens in the token's native unit  */
    outputTokenAmount?: Maybe<Scalars['BigInt']>
    /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens deposited into a pool)  */
    amountUSD: Scalars['BigDecimal']
    /**  The pool involving this transaction  */
    pool: LiquidityPool
  }

  export type DepositinputTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
  }

  export type Deposit_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    hash?: InputMaybe<Scalars['String']>
    hash_not?: InputMaybe<Scalars['String']>
    hash_gt?: InputMaybe<Scalars['String']>
    hash_lt?: InputMaybe<Scalars['String']>
    hash_gte?: InputMaybe<Scalars['String']>
    hash_lte?: InputMaybe<Scalars['String']>
    hash_in?: InputMaybe<Array<Scalars['String']>>
    hash_not_in?: InputMaybe<Array<Scalars['String']>>
    hash_contains?: InputMaybe<Scalars['String']>
    hash_contains_nocase?: InputMaybe<Scalars['String']>
    hash_not_contains?: InputMaybe<Scalars['String']>
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>
    hash_starts_with?: InputMaybe<Scalars['String']>
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>
    hash_not_starts_with?: InputMaybe<Scalars['String']>
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    hash_ends_with?: InputMaybe<Scalars['String']>
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>
    hash_not_ends_with?: InputMaybe<Scalars['String']>
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    logIndex?: InputMaybe<Scalars['Int']>
    logIndex_not?: InputMaybe<Scalars['Int']>
    logIndex_gt?: InputMaybe<Scalars['Int']>
    logIndex_lt?: InputMaybe<Scalars['Int']>
    logIndex_gte?: InputMaybe<Scalars['Int']>
    logIndex_lte?: InputMaybe<Scalars['Int']>
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>
    protocol?: InputMaybe<Scalars['String']>
    protocol_not?: InputMaybe<Scalars['String']>
    protocol_gt?: InputMaybe<Scalars['String']>
    protocol_lt?: InputMaybe<Scalars['String']>
    protocol_gte?: InputMaybe<Scalars['String']>
    protocol_lte?: InputMaybe<Scalars['String']>
    protocol_in?: InputMaybe<Array<Scalars['String']>>
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>
    protocol_contains?: InputMaybe<Scalars['String']>
    protocol_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_not_contains?: InputMaybe<Scalars['String']>
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_starts_with?: InputMaybe<Scalars['String']>
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_starts_with?: InputMaybe<Scalars['String']>
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_ends_with?: InputMaybe<Scalars['String']>
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_ends_with?: InputMaybe<Scalars['String']>
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_?: InputMaybe<DexAmmProtocol_filter>
    to?: InputMaybe<Scalars['String']>
    to_not?: InputMaybe<Scalars['String']>
    to_gt?: InputMaybe<Scalars['String']>
    to_lt?: InputMaybe<Scalars['String']>
    to_gte?: InputMaybe<Scalars['String']>
    to_lte?: InputMaybe<Scalars['String']>
    to_in?: InputMaybe<Array<Scalars['String']>>
    to_not_in?: InputMaybe<Array<Scalars['String']>>
    to_contains?: InputMaybe<Scalars['String']>
    to_contains_nocase?: InputMaybe<Scalars['String']>
    to_not_contains?: InputMaybe<Scalars['String']>
    to_not_contains_nocase?: InputMaybe<Scalars['String']>
    to_starts_with?: InputMaybe<Scalars['String']>
    to_starts_with_nocase?: InputMaybe<Scalars['String']>
    to_not_starts_with?: InputMaybe<Scalars['String']>
    to_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    to_ends_with?: InputMaybe<Scalars['String']>
    to_ends_with_nocase?: InputMaybe<Scalars['String']>
    to_not_ends_with?: InputMaybe<Scalars['String']>
    to_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    from?: InputMaybe<Scalars['String']>
    from_not?: InputMaybe<Scalars['String']>
    from_gt?: InputMaybe<Scalars['String']>
    from_lt?: InputMaybe<Scalars['String']>
    from_gte?: InputMaybe<Scalars['String']>
    from_lte?: InputMaybe<Scalars['String']>
    from_in?: InputMaybe<Array<Scalars['String']>>
    from_not_in?: InputMaybe<Array<Scalars['String']>>
    from_contains?: InputMaybe<Scalars['String']>
    from_contains_nocase?: InputMaybe<Scalars['String']>
    from_not_contains?: InputMaybe<Scalars['String']>
    from_not_contains_nocase?: InputMaybe<Scalars['String']>
    from_starts_with?: InputMaybe<Scalars['String']>
    from_starts_with_nocase?: InputMaybe<Scalars['String']>
    from_not_starts_with?: InputMaybe<Scalars['String']>
    from_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    from_ends_with?: InputMaybe<Scalars['String']>
    from_ends_with_nocase?: InputMaybe<Scalars['String']>
    from_not_ends_with?: InputMaybe<Scalars['String']>
    from_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    blockNumber?: InputMaybe<Scalars['BigInt']>
    blockNumber_not?: InputMaybe<Scalars['BigInt']>
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokens?: InputMaybe<Array<Scalars['String']>>
    inputTokens_not?: InputMaybe<Array<Scalars['String']>>
    inputTokens_contains?: InputMaybe<Array<Scalars['String']>>
    inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
    inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    inputTokens_?: InputMaybe<Token_filter>
    outputToken?: InputMaybe<Scalars['String']>
    outputToken_not?: InputMaybe<Scalars['String']>
    outputToken_gt?: InputMaybe<Scalars['String']>
    outputToken_lt?: InputMaybe<Scalars['String']>
    outputToken_gte?: InputMaybe<Scalars['String']>
    outputToken_lte?: InputMaybe<Scalars['String']>
    outputToken_in?: InputMaybe<Array<Scalars['String']>>
    outputToken_not_in?: InputMaybe<Array<Scalars['String']>>
    outputToken_contains?: InputMaybe<Scalars['String']>
    outputToken_contains_nocase?: InputMaybe<Scalars['String']>
    outputToken_not_contains?: InputMaybe<Scalars['String']>
    outputToken_not_contains_nocase?: InputMaybe<Scalars['String']>
    outputToken_starts_with?: InputMaybe<Scalars['String']>
    outputToken_starts_with_nocase?: InputMaybe<Scalars['String']>
    outputToken_not_starts_with?: InputMaybe<Scalars['String']>
    outputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    outputToken_ends_with?: InputMaybe<Scalars['String']>
    outputToken_ends_with_nocase?: InputMaybe<Scalars['String']>
    outputToken_not_ends_with?: InputMaybe<Scalars['String']>
    outputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    outputToken_?: InputMaybe<Token_filter>
    inputTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    outputTokenAmount?: InputMaybe<Scalars['BigInt']>
    outputTokenAmount_not?: InputMaybe<Scalars['BigInt']>
    outputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>
    outputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>
    outputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>
    outputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>
    outputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
    outputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    amountUSD?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    pool?: InputMaybe<Scalars['String']>
    pool_not?: InputMaybe<Scalars['String']>
    pool_gt?: InputMaybe<Scalars['String']>
    pool_lt?: InputMaybe<Scalars['String']>
    pool_gte?: InputMaybe<Scalars['String']>
    pool_lte?: InputMaybe<Scalars['String']>
    pool_in?: InputMaybe<Array<Scalars['String']>>
    pool_not_in?: InputMaybe<Array<Scalars['String']>>
    pool_contains?: InputMaybe<Scalars['String']>
    pool_contains_nocase?: InputMaybe<Scalars['String']>
    pool_not_contains?: InputMaybe<Scalars['String']>
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>
    pool_starts_with?: InputMaybe<Scalars['String']>
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>
    pool_not_starts_with?: InputMaybe<Scalars['String']>
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pool_ends_with?: InputMaybe<Scalars['String']>
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>
    pool_not_ends_with?: InputMaybe<Scalars['String']>
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    pool_?: InputMaybe<LiquidityPool_filter>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Deposit_orderBy =
    | 'id'
    | 'hash'
    | 'logIndex'
    | 'protocol'
    | 'to'
    | 'from'
    | 'blockNumber'
    | 'timestamp'
    | 'inputTokens'
    | 'outputToken'
    | 'inputTokenAmounts'
    | 'outputTokenAmount'
    | 'amountUSD'
    | 'pool'

  export type DexAmmProtocol = Protocol & {
    /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
    id: Scalars['ID']
    /**  Name of the protocol, including version. e.g. Uniswap v3  */
    name: Scalars['String']
    /**  Slug of protocol, including version. e.g. uniswap-v3  */
    slug: Scalars['String']
    /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
    schemaVersion: Scalars['String']
    /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
    subgraphVersion: Scalars['String']
    /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
    methodologyVersion: Scalars['String']
    /**  The blockchain network this subgraph is indexing on  */
    network: Network
    /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
    type: ProtocolType
    /**  Current TVL (Total Value Locked) of the entire protocol  */
    totalValueLockedUSD: Scalars['BigDecimal']
    /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
    protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>
    /**  All historical volume in USD  */
    cumulativeVolumeUSD: Scalars['BigDecimal']
    /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
    cumulativeSupplySideRevenueUSD: Scalars['BigDecimal']
    /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
    cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal']
    /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
    cumulativeTotalRevenueUSD: Scalars['BigDecimal']
    /**  # of cumulative unique users  */
    cumulativeUniqueUsers: Scalars['Int']
    /**  Daily usage metrics for this protocol  */
    dailyUsageMetrics: Array<UsageMetricsDailySnapshot>
    /**  Hourly usage metrics for this protocol  */
    hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>
    /**  Daily financial metrics for this protocol  */
    financialMetrics: Array<FinancialsDailySnapshot>
    /**  All pools that belong to this protocol  */
    pools: Array<LiquidityPool>
  }

  export type DexAmmProtocoldailyUsageMetricsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UsageMetricsDailySnapshot_filter>
  }

  export type DexAmmProtocolhourlyUsageMetricsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UsageMetricsHourlySnapshot_filter>
  }

  export type DexAmmProtocolfinancialMetricsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<FinancialsDailySnapshot_filter>
  }

  export type DexAmmProtocolpoolsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPool_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPool_filter>
  }

  export type DexAmmProtocol_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    name?: InputMaybe<Scalars['String']>
    name_not?: InputMaybe<Scalars['String']>
    name_gt?: InputMaybe<Scalars['String']>
    name_lt?: InputMaybe<Scalars['String']>
    name_gte?: InputMaybe<Scalars['String']>
    name_lte?: InputMaybe<Scalars['String']>
    name_in?: InputMaybe<Array<Scalars['String']>>
    name_not_in?: InputMaybe<Array<Scalars['String']>>
    name_contains?: InputMaybe<Scalars['String']>
    name_contains_nocase?: InputMaybe<Scalars['String']>
    name_not_contains?: InputMaybe<Scalars['String']>
    name_not_contains_nocase?: InputMaybe<Scalars['String']>
    name_starts_with?: InputMaybe<Scalars['String']>
    name_starts_with_nocase?: InputMaybe<Scalars['String']>
    name_not_starts_with?: InputMaybe<Scalars['String']>
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    name_ends_with?: InputMaybe<Scalars['String']>
    name_ends_with_nocase?: InputMaybe<Scalars['String']>
    name_not_ends_with?: InputMaybe<Scalars['String']>
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    slug?: InputMaybe<Scalars['String']>
    slug_not?: InputMaybe<Scalars['String']>
    slug_gt?: InputMaybe<Scalars['String']>
    slug_lt?: InputMaybe<Scalars['String']>
    slug_gte?: InputMaybe<Scalars['String']>
    slug_lte?: InputMaybe<Scalars['String']>
    slug_in?: InputMaybe<Array<Scalars['String']>>
    slug_not_in?: InputMaybe<Array<Scalars['String']>>
    slug_contains?: InputMaybe<Scalars['String']>
    slug_contains_nocase?: InputMaybe<Scalars['String']>
    slug_not_contains?: InputMaybe<Scalars['String']>
    slug_not_contains_nocase?: InputMaybe<Scalars['String']>
    slug_starts_with?: InputMaybe<Scalars['String']>
    slug_starts_with_nocase?: InputMaybe<Scalars['String']>
    slug_not_starts_with?: InputMaybe<Scalars['String']>
    slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    slug_ends_with?: InputMaybe<Scalars['String']>
    slug_ends_with_nocase?: InputMaybe<Scalars['String']>
    slug_not_ends_with?: InputMaybe<Scalars['String']>
    slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    schemaVersion?: InputMaybe<Scalars['String']>
    schemaVersion_not?: InputMaybe<Scalars['String']>
    schemaVersion_gt?: InputMaybe<Scalars['String']>
    schemaVersion_lt?: InputMaybe<Scalars['String']>
    schemaVersion_gte?: InputMaybe<Scalars['String']>
    schemaVersion_lte?: InputMaybe<Scalars['String']>
    schemaVersion_in?: InputMaybe<Array<Scalars['String']>>
    schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>
    schemaVersion_contains?: InputMaybe<Scalars['String']>
    schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>
    schemaVersion_not_contains?: InputMaybe<Scalars['String']>
    schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>
    schemaVersion_starts_with?: InputMaybe<Scalars['String']>
    schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>
    schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>
    schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    schemaVersion_ends_with?: InputMaybe<Scalars['String']>
    schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>
    schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>
    schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    subgraphVersion?: InputMaybe<Scalars['String']>
    subgraphVersion_not?: InputMaybe<Scalars['String']>
    subgraphVersion_gt?: InputMaybe<Scalars['String']>
    subgraphVersion_lt?: InputMaybe<Scalars['String']>
    subgraphVersion_gte?: InputMaybe<Scalars['String']>
    subgraphVersion_lte?: InputMaybe<Scalars['String']>
    subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>
    subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>
    subgraphVersion_contains?: InputMaybe<Scalars['String']>
    subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>
    subgraphVersion_not_contains?: InputMaybe<Scalars['String']>
    subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>
    subgraphVersion_starts_with?: InputMaybe<Scalars['String']>
    subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>
    subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>
    subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    subgraphVersion_ends_with?: InputMaybe<Scalars['String']>
    subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>
    subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>
    subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    methodologyVersion?: InputMaybe<Scalars['String']>
    methodologyVersion_not?: InputMaybe<Scalars['String']>
    methodologyVersion_gt?: InputMaybe<Scalars['String']>
    methodologyVersion_lt?: InputMaybe<Scalars['String']>
    methodologyVersion_gte?: InputMaybe<Scalars['String']>
    methodologyVersion_lte?: InputMaybe<Scalars['String']>
    methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>
    methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>
    methodologyVersion_contains?: InputMaybe<Scalars['String']>
    methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>
    methodologyVersion_not_contains?: InputMaybe<Scalars['String']>
    methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>
    methodologyVersion_starts_with?: InputMaybe<Scalars['String']>
    methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>
    methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>
    methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    methodologyVersion_ends_with?: InputMaybe<Scalars['String']>
    methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>
    methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>
    methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    network?: InputMaybe<Network>
    network_not?: InputMaybe<Network>
    network_in?: InputMaybe<Array<Network>>
    network_not_in?: InputMaybe<Array<Network>>
    type?: InputMaybe<ProtocolType>
    type_not?: InputMaybe<ProtocolType>
    type_in?: InputMaybe<Array<ProtocolType>>
    type_not_in?: InputMaybe<Array<ProtocolType>>
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>
    cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>
    dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_filter>
    hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_filter>
    financialMetrics_?: InputMaybe<FinancialsDailySnapshot_filter>
    pools_?: InputMaybe<LiquidityPool_filter>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type DexAmmProtocol_orderBy =
    | 'id'
    | 'name'
    | 'slug'
    | 'schemaVersion'
    | 'subgraphVersion'
    | 'methodologyVersion'
    | 'network'
    | 'type'
    | 'totalValueLockedUSD'
    | 'protocolControlledValueUSD'
    | 'cumulativeVolumeUSD'
    | 'cumulativeSupplySideRevenueUSD'
    | 'cumulativeProtocolSideRevenueUSD'
    | 'cumulativeTotalRevenueUSD'
    | 'cumulativeUniqueUsers'
    | 'dailyUsageMetrics'
    | 'hourlyUsageMetrics'
    | 'financialMetrics'
    | 'pools'

  /**
   * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
   * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
   * However, some user actions of interest are function calls that don't emit events. For example,
   * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
   * store them as events, although they are not technically Ethereum events emitted by smart
   * contracts.
   *
   */
  export type Event = {
    /**  { Event type }-{ Transaction hash }-{ Log index }  */
    id: Scalars['ID']
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String']
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int']
    /**  The protocol this transaction belongs to  */
    protocol: DexAmmProtocol
    /**  Address that received the tokens  */
    to: Scalars['String']
    /**  Address that sent the tokens  */
    from: Scalars['String']
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt']
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt']
  }

  export type Event_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    hash?: InputMaybe<Scalars['String']>
    hash_not?: InputMaybe<Scalars['String']>
    hash_gt?: InputMaybe<Scalars['String']>
    hash_lt?: InputMaybe<Scalars['String']>
    hash_gte?: InputMaybe<Scalars['String']>
    hash_lte?: InputMaybe<Scalars['String']>
    hash_in?: InputMaybe<Array<Scalars['String']>>
    hash_not_in?: InputMaybe<Array<Scalars['String']>>
    hash_contains?: InputMaybe<Scalars['String']>
    hash_contains_nocase?: InputMaybe<Scalars['String']>
    hash_not_contains?: InputMaybe<Scalars['String']>
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>
    hash_starts_with?: InputMaybe<Scalars['String']>
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>
    hash_not_starts_with?: InputMaybe<Scalars['String']>
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    hash_ends_with?: InputMaybe<Scalars['String']>
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>
    hash_not_ends_with?: InputMaybe<Scalars['String']>
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    logIndex?: InputMaybe<Scalars['Int']>
    logIndex_not?: InputMaybe<Scalars['Int']>
    logIndex_gt?: InputMaybe<Scalars['Int']>
    logIndex_lt?: InputMaybe<Scalars['Int']>
    logIndex_gte?: InputMaybe<Scalars['Int']>
    logIndex_lte?: InputMaybe<Scalars['Int']>
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>
    protocol?: InputMaybe<Scalars['String']>
    protocol_not?: InputMaybe<Scalars['String']>
    protocol_gt?: InputMaybe<Scalars['String']>
    protocol_lt?: InputMaybe<Scalars['String']>
    protocol_gte?: InputMaybe<Scalars['String']>
    protocol_lte?: InputMaybe<Scalars['String']>
    protocol_in?: InputMaybe<Array<Scalars['String']>>
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>
    protocol_contains?: InputMaybe<Scalars['String']>
    protocol_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_not_contains?: InputMaybe<Scalars['String']>
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_starts_with?: InputMaybe<Scalars['String']>
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_starts_with?: InputMaybe<Scalars['String']>
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_ends_with?: InputMaybe<Scalars['String']>
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_ends_with?: InputMaybe<Scalars['String']>
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_?: InputMaybe<DexAmmProtocol_filter>
    to?: InputMaybe<Scalars['String']>
    to_not?: InputMaybe<Scalars['String']>
    to_gt?: InputMaybe<Scalars['String']>
    to_lt?: InputMaybe<Scalars['String']>
    to_gte?: InputMaybe<Scalars['String']>
    to_lte?: InputMaybe<Scalars['String']>
    to_in?: InputMaybe<Array<Scalars['String']>>
    to_not_in?: InputMaybe<Array<Scalars['String']>>
    to_contains?: InputMaybe<Scalars['String']>
    to_contains_nocase?: InputMaybe<Scalars['String']>
    to_not_contains?: InputMaybe<Scalars['String']>
    to_not_contains_nocase?: InputMaybe<Scalars['String']>
    to_starts_with?: InputMaybe<Scalars['String']>
    to_starts_with_nocase?: InputMaybe<Scalars['String']>
    to_not_starts_with?: InputMaybe<Scalars['String']>
    to_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    to_ends_with?: InputMaybe<Scalars['String']>
    to_ends_with_nocase?: InputMaybe<Scalars['String']>
    to_not_ends_with?: InputMaybe<Scalars['String']>
    to_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    from?: InputMaybe<Scalars['String']>
    from_not?: InputMaybe<Scalars['String']>
    from_gt?: InputMaybe<Scalars['String']>
    from_lt?: InputMaybe<Scalars['String']>
    from_gte?: InputMaybe<Scalars['String']>
    from_lte?: InputMaybe<Scalars['String']>
    from_in?: InputMaybe<Array<Scalars['String']>>
    from_not_in?: InputMaybe<Array<Scalars['String']>>
    from_contains?: InputMaybe<Scalars['String']>
    from_contains_nocase?: InputMaybe<Scalars['String']>
    from_not_contains?: InputMaybe<Scalars['String']>
    from_not_contains_nocase?: InputMaybe<Scalars['String']>
    from_starts_with?: InputMaybe<Scalars['String']>
    from_starts_with_nocase?: InputMaybe<Scalars['String']>
    from_not_starts_with?: InputMaybe<Scalars['String']>
    from_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    from_ends_with?: InputMaybe<Scalars['String']>
    from_ends_with_nocase?: InputMaybe<Scalars['String']>
    from_not_ends_with?: InputMaybe<Scalars['String']>
    from_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    blockNumber?: InputMaybe<Scalars['BigInt']>
    blockNumber_not?: InputMaybe<Scalars['BigInt']>
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Event_orderBy = 'id' | 'hash' | 'logIndex' | 'protocol' | 'to' | 'from' | 'blockNumber' | 'timestamp'

  export type Factory = {
    id: Scalars['ID']
    poolCount: Scalars['BigInt']
  }

  export type Factory_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    poolCount?: InputMaybe<Scalars['BigInt']>
    poolCount_not?: InputMaybe<Scalars['BigInt']>
    poolCount_gt?: InputMaybe<Scalars['BigInt']>
    poolCount_lt?: InputMaybe<Scalars['BigInt']>
    poolCount_gte?: InputMaybe<Scalars['BigInt']>
    poolCount_lte?: InputMaybe<Scalars['BigInt']>
    poolCount_in?: InputMaybe<Array<Scalars['BigInt']>>
    poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Factory_orderBy = 'id' | 'poolCount'

  export type FinancialsDailySnapshot = {
    /**  ID is # of days since Unix epoch time  */
    id: Scalars['ID']
    /**  Protocol this snapshot is associated with  */
    protocol: DexAmmProtocol
    /**  Current TVL (Total Value Locked) of the entire protocol  */
    totalValueLockedUSD: Scalars['BigDecimal']
    /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
    protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>
    /**  All trade volume occurred in a given day, in USD  */
    dailyVolumeUSD: Scalars['BigDecimal']
    /**  All historical trade volume in USD  */
    cumulativeVolumeUSD: Scalars['BigDecimal']
    /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
    dailySupplySideRevenueUSD: Scalars['BigDecimal']
    /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
    cumulativeSupplySideRevenueUSD: Scalars['BigDecimal']
    /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
    dailyProtocolSideRevenueUSD: Scalars['BigDecimal']
    /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
    cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal']
    /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
    dailyTotalRevenueUSD: Scalars['BigDecimal']
    /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
    cumulativeTotalRevenueUSD: Scalars['BigDecimal']
    /**  Block number of this snapshot  */
    blockNumber: Scalars['BigInt']
    /**  Timestamp of this snapshot  */
    timestamp: Scalars['BigInt']
  }

  export type FinancialsDailySnapshot_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    protocol?: InputMaybe<Scalars['String']>
    protocol_not?: InputMaybe<Scalars['String']>
    protocol_gt?: InputMaybe<Scalars['String']>
    protocol_lt?: InputMaybe<Scalars['String']>
    protocol_gte?: InputMaybe<Scalars['String']>
    protocol_lte?: InputMaybe<Scalars['String']>
    protocol_in?: InputMaybe<Array<Scalars['String']>>
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>
    protocol_contains?: InputMaybe<Scalars['String']>
    protocol_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_not_contains?: InputMaybe<Scalars['String']>
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_starts_with?: InputMaybe<Scalars['String']>
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_starts_with?: InputMaybe<Scalars['String']>
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_ends_with?: InputMaybe<Scalars['String']>
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_ends_with?: InputMaybe<Scalars['String']>
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_?: InputMaybe<DexAmmProtocol_filter>
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailySupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
    dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
    dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
    dailyTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    blockNumber?: InputMaybe<Scalars['BigInt']>
    blockNumber_not?: InputMaybe<Scalars['BigInt']>
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type FinancialsDailySnapshot_orderBy =
    | 'id'
    | 'protocol'
    | 'totalValueLockedUSD'
    | 'protocolControlledValueUSD'
    | 'dailyVolumeUSD'
    | 'cumulativeVolumeUSD'
    | 'dailySupplySideRevenueUSD'
    | 'cumulativeSupplySideRevenueUSD'
    | 'dailyProtocolSideRevenueUSD'
    | 'cumulativeProtocolSideRevenueUSD'
    | 'dailyTotalRevenueUSD'
    | 'cumulativeTotalRevenueUSD'
    | 'blockNumber'
    | 'timestamp'

  export type GaugePool = {
    id: Scalars['ID']
    pool: Scalars['String']
  }

  export type GaugePool_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    pool?: InputMaybe<Scalars['String']>
    pool_not?: InputMaybe<Scalars['String']>
    pool_gt?: InputMaybe<Scalars['String']>
    pool_lt?: InputMaybe<Scalars['String']>
    pool_gte?: InputMaybe<Scalars['String']>
    pool_lte?: InputMaybe<Scalars['String']>
    pool_in?: InputMaybe<Array<Scalars['String']>>
    pool_not_in?: InputMaybe<Array<Scalars['String']>>
    pool_contains?: InputMaybe<Scalars['String']>
    pool_contains_nocase?: InputMaybe<Scalars['String']>
    pool_not_contains?: InputMaybe<Scalars['String']>
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>
    pool_starts_with?: InputMaybe<Scalars['String']>
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>
    pool_not_starts_with?: InputMaybe<Scalars['String']>
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pool_ends_with?: InputMaybe<Scalars['String']>
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>
    pool_not_ends_with?: InputMaybe<Scalars['String']>
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type GaugePool_orderBy = 'id' | 'pool'

  export type LiquidityPool = {
    /**  Smart contract address of the pool  */
    id: Scalars['ID']
    /**  The protocol this pool belongs to  */
    protocol: DexAmmProtocol
    /**  Name of liquidity pool (e.g. Curve.fi DAI/USDC/USDT)  */
    name?: Maybe<Scalars['String']>
    /**  Symbol of liquidity pool (e.g. 3CRV)  */
    symbol?: Maybe<Scalars['String']>
    /**  Tokens that need to be deposited to take a position in protocol. e.g. WETH and USDC to deposit into the WETH-USDC pool. Array to account for multi-asset pools like Curve and Balancer  */
    inputTokens: Array<Token>
    /**  Token that is minted to track ownership of position in protocol  */
    outputToken: Token
    /**  Aditional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
    rewardTokens: Array<RewardToken>
    /**  Fees per trade incurred to the user. Should include all fees that apply to a pool (e.g. Curve has a trading fee AND an admin fee, which is a portion of the trading fee. Uniswap only has a trading fee and no protocol fee. )  */
    fees: Array<LiquidityPoolFee>
    /**  Creation timestamp  */
    createdTimestamp: Scalars['BigInt']
    /**  Creation block number  */
    createdBlockNumber: Scalars['BigInt']
    /**  Current TVL (Total Value Locked) of this pool in USD  */
    totalValueLockedUSD: Scalars['BigDecimal']
    /**  All historical trade volume occurred in this pool, in USD  */
    cumulativeVolumeUSD: Scalars['BigDecimal']
    /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
    inputTokenBalances: Array<Scalars['BigInt']>
    /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
    inputTokenWeights: Array<Scalars['BigDecimal']>
    /**  Total supply of output token. Note that certain DEXes don't have an output token (e.g. Bancor)  */
    outputTokenSupply: Scalars['BigInt']
    /**  Price per share of output token in USD  */
    outputTokenPriceUSD: Scalars['BigDecimal']
    /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
    stakedOutputTokenAmount: Scalars['BigInt']
    /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsAmount: Array<Scalars['BigInt']>
    /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsUSD: Array<Scalars['BigDecimal']>
    /**  Liquidity pool daily snapshots  */
    dailySnapshots: Array<LiquidityPoolDailySnapshot>
    /**  Liquidity pool hourly snapshots  */
    hourlySnapshots: Array<LiquidityPoolHourlySnapshot>
    /**  All deposit (add liquidity) events occurred in this pool  */
    deposits: Array<Deposit>
    /**  All withdraw (remove liquidity) events occurred in this pool  */
    withdraws: Array<Withdraw>
    /**  All trade (swap) events occurred in this pool  */
    swaps: Array<Swap>
    platform?: Maybe<Platform>
    metapool: Scalars['Boolean']
    basePool: Scalars['String']
    assetType: Scalars['Int']
    poolType: PoolType
    isV2: Scalars['Boolean']
    gauge: Scalars['String']
    registry: Scalars['String']
    gaugeType: Scalars['String']
    rewardContract?: Maybe<Scalars['String']>
  }

  export type LiquidityPoolinputTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
  }

  export type LiquidityPoolrewardTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<RewardToken_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<RewardToken_filter>
  }

  export type LiquidityPoolfeesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPoolFee_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPoolFee_filter>
  }

  export type LiquidityPooldailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPoolDailySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPoolDailySnapshot_filter>
  }

  export type LiquidityPoolhourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPoolHourlySnapshot_filter>
  }

  export type LiquidityPooldepositsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Deposit_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Deposit_filter>
  }

  export type LiquidityPoolwithdrawsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Withdraw_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Withdraw_filter>
  }

  export type LiquidityPoolswapsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Swap_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Swap_filter>
  }

  export type LiquidityPoolDailySnapshot = {
    /**  { Smart contract address of the pool }-{ # of days since Unix epoch time }  */
    id: Scalars['ID']
    /**  The protocol this snapshot belongs to  */
    protocol: DexAmmProtocol
    /**  The pool this snapshot belongs to  */
    pool: LiquidityPool
    /**  Block number of this snapshot  */
    blockNumber: Scalars['BigInt']
    /**  Timestamp of this snapshot  */
    timestamp: Scalars['BigInt']
    /**  Current TVL (Total Value Locked) of this pool  */
    totalValueLockedUSD: Scalars['BigDecimal']
    /**  All trade volume occurred in a given day, in USD  */
    dailyVolumeUSD: Scalars['BigDecimal']
    /**  All trade volume occurred in a given day for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
    dailyVolumeByTokenAmount: Array<Scalars['BigInt']>
    /**  All trade volume occurred in a given day for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
    dailyVolumeByTokenUSD: Array<Scalars['BigDecimal']>
    /**  All historical trade volume occurred in this pool, in USD  */
    cumulativeVolumeUSD: Scalars['BigDecimal']
    /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
    inputTokenBalances: Array<Scalars['BigInt']>
    /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
    inputTokenWeights: Array<Scalars['BigDecimal']>
    /**  Total supply of output token. Note that certain DEXes don't have an output token (e.g. Bancor)  */
    outputTokenSupply?: Maybe<Scalars['BigInt']>
    /**  Price per share of output token in USD  */
    outputTokenPriceUSD?: Maybe<Scalars['BigDecimal']>
    /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
    stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>
    /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsAmount: Array<Scalars['BigInt']>
    /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsUSD: Array<Scalars['BigDecimal']>
  }

  export type LiquidityPoolDailySnapshot_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    protocol?: InputMaybe<Scalars['String']>
    protocol_not?: InputMaybe<Scalars['String']>
    protocol_gt?: InputMaybe<Scalars['String']>
    protocol_lt?: InputMaybe<Scalars['String']>
    protocol_gte?: InputMaybe<Scalars['String']>
    protocol_lte?: InputMaybe<Scalars['String']>
    protocol_in?: InputMaybe<Array<Scalars['String']>>
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>
    protocol_contains?: InputMaybe<Scalars['String']>
    protocol_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_not_contains?: InputMaybe<Scalars['String']>
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_starts_with?: InputMaybe<Scalars['String']>
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_starts_with?: InputMaybe<Scalars['String']>
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_ends_with?: InputMaybe<Scalars['String']>
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_ends_with?: InputMaybe<Scalars['String']>
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_?: InputMaybe<DexAmmProtocol_filter>
    pool?: InputMaybe<Scalars['String']>
    pool_not?: InputMaybe<Scalars['String']>
    pool_gt?: InputMaybe<Scalars['String']>
    pool_lt?: InputMaybe<Scalars['String']>
    pool_gte?: InputMaybe<Scalars['String']>
    pool_lte?: InputMaybe<Scalars['String']>
    pool_in?: InputMaybe<Array<Scalars['String']>>
    pool_not_in?: InputMaybe<Array<Scalars['String']>>
    pool_contains?: InputMaybe<Scalars['String']>
    pool_contains_nocase?: InputMaybe<Scalars['String']>
    pool_not_contains?: InputMaybe<Scalars['String']>
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>
    pool_starts_with?: InputMaybe<Scalars['String']>
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>
    pool_not_starts_with?: InputMaybe<Scalars['String']>
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pool_ends_with?: InputMaybe<Scalars['String']>
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>
    pool_not_ends_with?: InputMaybe<Scalars['String']>
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    pool_?: InputMaybe<LiquidityPool_filter>
    blockNumber?: InputMaybe<Scalars['BigInt']>
    blockNumber_not?: InputMaybe<Scalars['BigInt']>
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']>>
    dailyVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']>>
    dailyVolumeByTokenAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>
    dailyVolumeByTokenAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    dailyVolumeByTokenAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
    dailyVolumeByTokenAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    dailyVolumeByTokenUSD?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeByTokenUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeByTokenUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeByTokenUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeByTokenUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    outputTokenSupply?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>
    outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
    stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type LiquidityPoolDailySnapshot_orderBy =
    | 'id'
    | 'protocol'
    | 'pool'
    | 'blockNumber'
    | 'timestamp'
    | 'totalValueLockedUSD'
    | 'dailyVolumeUSD'
    | 'dailyVolumeByTokenAmount'
    | 'dailyVolumeByTokenUSD'
    | 'cumulativeVolumeUSD'
    | 'inputTokenBalances'
    | 'inputTokenWeights'
    | 'outputTokenSupply'
    | 'outputTokenPriceUSD'
    | 'stakedOutputTokenAmount'
    | 'rewardTokenEmissionsAmount'
    | 'rewardTokenEmissionsUSD'

  export type LiquidityPoolFee = {
    /**  { Fee type }-{ Pool address }  */
    id: Scalars['ID']
    /**  Fee as a percentage of the trade (swap) amount. Does not always apply  */
    feePercentage?: Maybe<Scalars['BigDecimal']>
    /**  Type of fee this pool uses  */
    feeType: LiquidityPoolFeeType
  }

  export type LiquidityPoolFeeType =
    /**  Total fixed fee paid by the user per trade, as a percentage of the traded amount. e.g. 0.3% for Uniswap v2, 0.3% for Sushiswap, 0.04% for Curve v1.  */
    | 'FIXED_TRADING_FEE'
    /**  Some protocols use tiered fees instead of fixed fee (e.g. DYDX, DODO). Set `feePercentage` as 0 but handle the tiered fees in the mapping code.  */
    | 'TIERED_TRADING_FEE'
    /**  Some protocols use dynamic fees instead of fixed fee (e.g. Balancer v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
    | 'DYNAMIC_TRADING_FEE'
    /**  Fixed fee that's paid to the LP, as a percentage of the traded amount. e.g. 0.25% for Sushiswap, 0.02% for Curve v1.  */
    | 'FIXED_LP_FEE'
    /**  Some protocols use dynamic LP fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
    | 'DYNAMIC_LP_FEE'
    /**  Fixed fee that's paid to the protocol, as a percentage of the traded amount. e.g. 0.05% for Sushiswap, 0.02% for Curve v1.  */
    | 'FIXED_PROTOCOL_FEE'
    /**  Some protocols use dynamic protocol fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
    | 'DYNAMIC_PROTOCOL_FEE'

  export type LiquidityPoolFee_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    feePercentage?: InputMaybe<Scalars['BigDecimal']>
    feePercentage_not?: InputMaybe<Scalars['BigDecimal']>
    feePercentage_gt?: InputMaybe<Scalars['BigDecimal']>
    feePercentage_lt?: InputMaybe<Scalars['BigDecimal']>
    feePercentage_gte?: InputMaybe<Scalars['BigDecimal']>
    feePercentage_lte?: InputMaybe<Scalars['BigDecimal']>
    feePercentage_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    feePercentage_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    feeType?: InputMaybe<LiquidityPoolFeeType>
    feeType_not?: InputMaybe<LiquidityPoolFeeType>
    feeType_in?: InputMaybe<Array<LiquidityPoolFeeType>>
    feeType_not_in?: InputMaybe<Array<LiquidityPoolFeeType>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type LiquidityPoolFee_orderBy = 'id' | 'feePercentage' | 'feeType'

  export type LiquidityPoolHourlySnapshot = {
    /**  { Smart contract address of the pool }-{ # of hours since Unix epoch time }  */
    id: Scalars['ID']
    /**  The protocol this snapshot belongs to  */
    protocol: DexAmmProtocol
    /**  The pool this snapshot belongs to  */
    pool: LiquidityPool
    /**  Block number of this snapshot  */
    blockNumber: Scalars['BigInt']
    /**  Timestamp of this snapshot  */
    timestamp: Scalars['BigInt']
    /**  Current TVL (Total Value Locked) of this pool  */
    totalValueLockedUSD: Scalars['BigDecimal']
    /**  All trade volume occurred in a given hour, in USD  */
    hourlyVolumeUSD: Scalars['BigDecimal']
    /**  All trade volume occurred in a given hour for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
    hourlyVolumeByTokenAmount: Array<Scalars['BigInt']>
    /**  All trade volume occurred in a given hour for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
    hourlyVolumeByTokenUSD: Array<Scalars['BigDecimal']>
    /**  All historical trade volume occurred in this pool, in USD  */
    cumulativeVolumeUSD: Scalars['BigDecimal']
    /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
    inputTokenBalances: Array<Scalars['BigInt']>
    /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
    inputTokenWeights: Array<Scalars['BigDecimal']>
    /**  Total supply of output token. Note that certain DEXes don't have an output token (e.g. Bancor)  */
    outputTokenSupply?: Maybe<Scalars['BigInt']>
    /**  Price per share of output token in USD  */
    outputTokenPriceUSD?: Maybe<Scalars['BigDecimal']>
    /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
    stakedOutputTokenAmount?: Maybe<Scalars['BigInt']>
    /**  Per-block reward token emission as of the current block normalized to a day (not hour), in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsAmount: Array<Scalars['BigInt']>
    /**  Per-block reward token emission as of the current block normalized to a day (not hour), in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
    rewardTokenEmissionsUSD: Array<Scalars['BigDecimal']>
  }

  export type LiquidityPoolHourlySnapshot_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    protocol?: InputMaybe<Scalars['String']>
    protocol_not?: InputMaybe<Scalars['String']>
    protocol_gt?: InputMaybe<Scalars['String']>
    protocol_lt?: InputMaybe<Scalars['String']>
    protocol_gte?: InputMaybe<Scalars['String']>
    protocol_lte?: InputMaybe<Scalars['String']>
    protocol_in?: InputMaybe<Array<Scalars['String']>>
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>
    protocol_contains?: InputMaybe<Scalars['String']>
    protocol_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_not_contains?: InputMaybe<Scalars['String']>
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_starts_with?: InputMaybe<Scalars['String']>
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_starts_with?: InputMaybe<Scalars['String']>
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_ends_with?: InputMaybe<Scalars['String']>
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_ends_with?: InputMaybe<Scalars['String']>
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_?: InputMaybe<DexAmmProtocol_filter>
    pool?: InputMaybe<Scalars['String']>
    pool_not?: InputMaybe<Scalars['String']>
    pool_gt?: InputMaybe<Scalars['String']>
    pool_lt?: InputMaybe<Scalars['String']>
    pool_gte?: InputMaybe<Scalars['String']>
    pool_lte?: InputMaybe<Scalars['String']>
    pool_in?: InputMaybe<Array<Scalars['String']>>
    pool_not_in?: InputMaybe<Array<Scalars['String']>>
    pool_contains?: InputMaybe<Scalars['String']>
    pool_contains_nocase?: InputMaybe<Scalars['String']>
    pool_not_contains?: InputMaybe<Scalars['String']>
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>
    pool_starts_with?: InputMaybe<Scalars['String']>
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>
    pool_not_starts_with?: InputMaybe<Scalars['String']>
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pool_ends_with?: InputMaybe<Scalars['String']>
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>
    pool_not_ends_with?: InputMaybe<Scalars['String']>
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    pool_?: InputMaybe<LiquidityPool_filter>
    blockNumber?: InputMaybe<Scalars['BigInt']>
    blockNumber_not?: InputMaybe<Scalars['BigInt']>
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']>>
    hourlyVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']>>
    hourlyVolumeByTokenAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>
    hourlyVolumeByTokenAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    hourlyVolumeByTokenAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
    hourlyVolumeByTokenAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    hourlyVolumeByTokenUSD?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeByTokenUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeByTokenUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeByTokenUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeByTokenUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    outputTokenSupply?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>
    outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
    stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type LiquidityPoolHourlySnapshot_orderBy =
    | 'id'
    | 'protocol'
    | 'pool'
    | 'blockNumber'
    | 'timestamp'
    | 'totalValueLockedUSD'
    | 'hourlyVolumeUSD'
    | 'hourlyVolumeByTokenAmount'
    | 'hourlyVolumeByTokenUSD'
    | 'cumulativeVolumeUSD'
    | 'inputTokenBalances'
    | 'inputTokenWeights'
    | 'outputTokenSupply'
    | 'outputTokenPriceUSD'
    | 'stakedOutputTokenAmount'
    | 'rewardTokenEmissionsAmount'
    | 'rewardTokenEmissionsUSD'

  export type LiquidityPool_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    protocol?: InputMaybe<Scalars['String']>
    protocol_not?: InputMaybe<Scalars['String']>
    protocol_gt?: InputMaybe<Scalars['String']>
    protocol_lt?: InputMaybe<Scalars['String']>
    protocol_gte?: InputMaybe<Scalars['String']>
    protocol_lte?: InputMaybe<Scalars['String']>
    protocol_in?: InputMaybe<Array<Scalars['String']>>
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>
    protocol_contains?: InputMaybe<Scalars['String']>
    protocol_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_not_contains?: InputMaybe<Scalars['String']>
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_starts_with?: InputMaybe<Scalars['String']>
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_starts_with?: InputMaybe<Scalars['String']>
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_ends_with?: InputMaybe<Scalars['String']>
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_ends_with?: InputMaybe<Scalars['String']>
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_?: InputMaybe<DexAmmProtocol_filter>
    name?: InputMaybe<Scalars['String']>
    name_not?: InputMaybe<Scalars['String']>
    name_gt?: InputMaybe<Scalars['String']>
    name_lt?: InputMaybe<Scalars['String']>
    name_gte?: InputMaybe<Scalars['String']>
    name_lte?: InputMaybe<Scalars['String']>
    name_in?: InputMaybe<Array<Scalars['String']>>
    name_not_in?: InputMaybe<Array<Scalars['String']>>
    name_contains?: InputMaybe<Scalars['String']>
    name_contains_nocase?: InputMaybe<Scalars['String']>
    name_not_contains?: InputMaybe<Scalars['String']>
    name_not_contains_nocase?: InputMaybe<Scalars['String']>
    name_starts_with?: InputMaybe<Scalars['String']>
    name_starts_with_nocase?: InputMaybe<Scalars['String']>
    name_not_starts_with?: InputMaybe<Scalars['String']>
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    name_ends_with?: InputMaybe<Scalars['String']>
    name_ends_with_nocase?: InputMaybe<Scalars['String']>
    name_not_ends_with?: InputMaybe<Scalars['String']>
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    symbol?: InputMaybe<Scalars['String']>
    symbol_not?: InputMaybe<Scalars['String']>
    symbol_gt?: InputMaybe<Scalars['String']>
    symbol_lt?: InputMaybe<Scalars['String']>
    symbol_gte?: InputMaybe<Scalars['String']>
    symbol_lte?: InputMaybe<Scalars['String']>
    symbol_in?: InputMaybe<Array<Scalars['String']>>
    symbol_not_in?: InputMaybe<Array<Scalars['String']>>
    symbol_contains?: InputMaybe<Scalars['String']>
    symbol_contains_nocase?: InputMaybe<Scalars['String']>
    symbol_not_contains?: InputMaybe<Scalars['String']>
    symbol_not_contains_nocase?: InputMaybe<Scalars['String']>
    symbol_starts_with?: InputMaybe<Scalars['String']>
    symbol_starts_with_nocase?: InputMaybe<Scalars['String']>
    symbol_not_starts_with?: InputMaybe<Scalars['String']>
    symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    symbol_ends_with?: InputMaybe<Scalars['String']>
    symbol_ends_with_nocase?: InputMaybe<Scalars['String']>
    symbol_not_ends_with?: InputMaybe<Scalars['String']>
    symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    inputTokens?: InputMaybe<Array<Scalars['String']>>
    inputTokens_not?: InputMaybe<Array<Scalars['String']>>
    inputTokens_contains?: InputMaybe<Array<Scalars['String']>>
    inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
    inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    inputTokens_?: InputMaybe<Token_filter>
    outputToken?: InputMaybe<Scalars['String']>
    outputToken_not?: InputMaybe<Scalars['String']>
    outputToken_gt?: InputMaybe<Scalars['String']>
    outputToken_lt?: InputMaybe<Scalars['String']>
    outputToken_gte?: InputMaybe<Scalars['String']>
    outputToken_lte?: InputMaybe<Scalars['String']>
    outputToken_in?: InputMaybe<Array<Scalars['String']>>
    outputToken_not_in?: InputMaybe<Array<Scalars['String']>>
    outputToken_contains?: InputMaybe<Scalars['String']>
    outputToken_contains_nocase?: InputMaybe<Scalars['String']>
    outputToken_not_contains?: InputMaybe<Scalars['String']>
    outputToken_not_contains_nocase?: InputMaybe<Scalars['String']>
    outputToken_starts_with?: InputMaybe<Scalars['String']>
    outputToken_starts_with_nocase?: InputMaybe<Scalars['String']>
    outputToken_not_starts_with?: InputMaybe<Scalars['String']>
    outputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    outputToken_ends_with?: InputMaybe<Scalars['String']>
    outputToken_ends_with_nocase?: InputMaybe<Scalars['String']>
    outputToken_not_ends_with?: InputMaybe<Scalars['String']>
    outputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    outputToken_?: InputMaybe<Token_filter>
    rewardTokens?: InputMaybe<Array<Scalars['String']>>
    rewardTokens_not?: InputMaybe<Array<Scalars['String']>>
    rewardTokens_contains?: InputMaybe<Array<Scalars['String']>>
    rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
    rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    rewardTokens_?: InputMaybe<RewardToken_filter>
    fees?: InputMaybe<Array<Scalars['String']>>
    fees_not?: InputMaybe<Array<Scalars['String']>>
    fees_contains?: InputMaybe<Array<Scalars['String']>>
    fees_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    fees_not_contains?: InputMaybe<Array<Scalars['String']>>
    fees_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    fees_?: InputMaybe<LiquidityPoolFee_filter>
    createdTimestamp?: InputMaybe<Scalars['BigInt']>
    createdTimestamp_not?: InputMaybe<Scalars['BigInt']>
    createdTimestamp_gt?: InputMaybe<Scalars['BigInt']>
    createdTimestamp_lt?: InputMaybe<Scalars['BigInt']>
    createdTimestamp_gte?: InputMaybe<Scalars['BigInt']>
    createdTimestamp_lte?: InputMaybe<Scalars['BigInt']>
    createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    createdBlockNumber?: InputMaybe<Scalars['BigInt']>
    createdBlockNumber_not?: InputMaybe<Scalars['BigInt']>
    createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']>
    createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']>
    createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']>
    createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']>
    createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenWeights?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_not?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    outputTokenSupply?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_not?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_gt?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_lt?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_gte?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_lte?: InputMaybe<Scalars['BigInt']>
    outputTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>
    outputTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    outputTokenPriceUSD?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    outputTokenPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    outputTokenPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>
    stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
    stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['BigDecimal']>>
    rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailySnapshots_?: InputMaybe<LiquidityPoolDailySnapshot_filter>
    hourlySnapshots_?: InputMaybe<LiquidityPoolHourlySnapshot_filter>
    deposits_?: InputMaybe<Deposit_filter>
    withdraws_?: InputMaybe<Withdraw_filter>
    swaps_?: InputMaybe<Swap_filter>
    platform?: InputMaybe<Scalars['String']>
    platform_not?: InputMaybe<Scalars['String']>
    platform_gt?: InputMaybe<Scalars['String']>
    platform_lt?: InputMaybe<Scalars['String']>
    platform_gte?: InputMaybe<Scalars['String']>
    platform_lte?: InputMaybe<Scalars['String']>
    platform_in?: InputMaybe<Array<Scalars['String']>>
    platform_not_in?: InputMaybe<Array<Scalars['String']>>
    platform_contains?: InputMaybe<Scalars['String']>
    platform_contains_nocase?: InputMaybe<Scalars['String']>
    platform_not_contains?: InputMaybe<Scalars['String']>
    platform_not_contains_nocase?: InputMaybe<Scalars['String']>
    platform_starts_with?: InputMaybe<Scalars['String']>
    platform_starts_with_nocase?: InputMaybe<Scalars['String']>
    platform_not_starts_with?: InputMaybe<Scalars['String']>
    platform_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    platform_ends_with?: InputMaybe<Scalars['String']>
    platform_ends_with_nocase?: InputMaybe<Scalars['String']>
    platform_not_ends_with?: InputMaybe<Scalars['String']>
    platform_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    platform_?: InputMaybe<Platform_filter>
    metapool?: InputMaybe<Scalars['Boolean']>
    metapool_not?: InputMaybe<Scalars['Boolean']>
    metapool_in?: InputMaybe<Array<Scalars['Boolean']>>
    metapool_not_in?: InputMaybe<Array<Scalars['Boolean']>>
    basePool?: InputMaybe<Scalars['String']>
    basePool_not?: InputMaybe<Scalars['String']>
    basePool_gt?: InputMaybe<Scalars['String']>
    basePool_lt?: InputMaybe<Scalars['String']>
    basePool_gte?: InputMaybe<Scalars['String']>
    basePool_lte?: InputMaybe<Scalars['String']>
    basePool_in?: InputMaybe<Array<Scalars['String']>>
    basePool_not_in?: InputMaybe<Array<Scalars['String']>>
    basePool_contains?: InputMaybe<Scalars['String']>
    basePool_contains_nocase?: InputMaybe<Scalars['String']>
    basePool_not_contains?: InputMaybe<Scalars['String']>
    basePool_not_contains_nocase?: InputMaybe<Scalars['String']>
    basePool_starts_with?: InputMaybe<Scalars['String']>
    basePool_starts_with_nocase?: InputMaybe<Scalars['String']>
    basePool_not_starts_with?: InputMaybe<Scalars['String']>
    basePool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    basePool_ends_with?: InputMaybe<Scalars['String']>
    basePool_ends_with_nocase?: InputMaybe<Scalars['String']>
    basePool_not_ends_with?: InputMaybe<Scalars['String']>
    basePool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    assetType?: InputMaybe<Scalars['Int']>
    assetType_not?: InputMaybe<Scalars['Int']>
    assetType_gt?: InputMaybe<Scalars['Int']>
    assetType_lt?: InputMaybe<Scalars['Int']>
    assetType_gte?: InputMaybe<Scalars['Int']>
    assetType_lte?: InputMaybe<Scalars['Int']>
    assetType_in?: InputMaybe<Array<Scalars['Int']>>
    assetType_not_in?: InputMaybe<Array<Scalars['Int']>>
    poolType?: InputMaybe<PoolType>
    poolType_not?: InputMaybe<PoolType>
    poolType_in?: InputMaybe<Array<PoolType>>
    poolType_not_in?: InputMaybe<Array<PoolType>>
    isV2?: InputMaybe<Scalars['Boolean']>
    isV2_not?: InputMaybe<Scalars['Boolean']>
    isV2_in?: InputMaybe<Array<Scalars['Boolean']>>
    isV2_not_in?: InputMaybe<Array<Scalars['Boolean']>>
    gauge?: InputMaybe<Scalars['String']>
    gauge_not?: InputMaybe<Scalars['String']>
    gauge_gt?: InputMaybe<Scalars['String']>
    gauge_lt?: InputMaybe<Scalars['String']>
    gauge_gte?: InputMaybe<Scalars['String']>
    gauge_lte?: InputMaybe<Scalars['String']>
    gauge_in?: InputMaybe<Array<Scalars['String']>>
    gauge_not_in?: InputMaybe<Array<Scalars['String']>>
    gauge_contains?: InputMaybe<Scalars['String']>
    gauge_contains_nocase?: InputMaybe<Scalars['String']>
    gauge_not_contains?: InputMaybe<Scalars['String']>
    gauge_not_contains_nocase?: InputMaybe<Scalars['String']>
    gauge_starts_with?: InputMaybe<Scalars['String']>
    gauge_starts_with_nocase?: InputMaybe<Scalars['String']>
    gauge_not_starts_with?: InputMaybe<Scalars['String']>
    gauge_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    gauge_ends_with?: InputMaybe<Scalars['String']>
    gauge_ends_with_nocase?: InputMaybe<Scalars['String']>
    gauge_not_ends_with?: InputMaybe<Scalars['String']>
    gauge_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    registry?: InputMaybe<Scalars['String']>
    registry_not?: InputMaybe<Scalars['String']>
    registry_gt?: InputMaybe<Scalars['String']>
    registry_lt?: InputMaybe<Scalars['String']>
    registry_gte?: InputMaybe<Scalars['String']>
    registry_lte?: InputMaybe<Scalars['String']>
    registry_in?: InputMaybe<Array<Scalars['String']>>
    registry_not_in?: InputMaybe<Array<Scalars['String']>>
    registry_contains?: InputMaybe<Scalars['String']>
    registry_contains_nocase?: InputMaybe<Scalars['String']>
    registry_not_contains?: InputMaybe<Scalars['String']>
    registry_not_contains_nocase?: InputMaybe<Scalars['String']>
    registry_starts_with?: InputMaybe<Scalars['String']>
    registry_starts_with_nocase?: InputMaybe<Scalars['String']>
    registry_not_starts_with?: InputMaybe<Scalars['String']>
    registry_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    registry_ends_with?: InputMaybe<Scalars['String']>
    registry_ends_with_nocase?: InputMaybe<Scalars['String']>
    registry_not_ends_with?: InputMaybe<Scalars['String']>
    registry_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    gaugeType?: InputMaybe<Scalars['String']>
    gaugeType_not?: InputMaybe<Scalars['String']>
    gaugeType_gt?: InputMaybe<Scalars['String']>
    gaugeType_lt?: InputMaybe<Scalars['String']>
    gaugeType_gte?: InputMaybe<Scalars['String']>
    gaugeType_lte?: InputMaybe<Scalars['String']>
    gaugeType_in?: InputMaybe<Array<Scalars['String']>>
    gaugeType_not_in?: InputMaybe<Array<Scalars['String']>>
    gaugeType_contains?: InputMaybe<Scalars['String']>
    gaugeType_contains_nocase?: InputMaybe<Scalars['String']>
    gaugeType_not_contains?: InputMaybe<Scalars['String']>
    gaugeType_not_contains_nocase?: InputMaybe<Scalars['String']>
    gaugeType_starts_with?: InputMaybe<Scalars['String']>
    gaugeType_starts_with_nocase?: InputMaybe<Scalars['String']>
    gaugeType_not_starts_with?: InputMaybe<Scalars['String']>
    gaugeType_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    gaugeType_ends_with?: InputMaybe<Scalars['String']>
    gaugeType_ends_with_nocase?: InputMaybe<Scalars['String']>
    gaugeType_not_ends_with?: InputMaybe<Scalars['String']>
    gaugeType_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    rewardContract?: InputMaybe<Scalars['String']>
    rewardContract_not?: InputMaybe<Scalars['String']>
    rewardContract_gt?: InputMaybe<Scalars['String']>
    rewardContract_lt?: InputMaybe<Scalars['String']>
    rewardContract_gte?: InputMaybe<Scalars['String']>
    rewardContract_lte?: InputMaybe<Scalars['String']>
    rewardContract_in?: InputMaybe<Array<Scalars['String']>>
    rewardContract_not_in?: InputMaybe<Array<Scalars['String']>>
    rewardContract_contains?: InputMaybe<Scalars['String']>
    rewardContract_contains_nocase?: InputMaybe<Scalars['String']>
    rewardContract_not_contains?: InputMaybe<Scalars['String']>
    rewardContract_not_contains_nocase?: InputMaybe<Scalars['String']>
    rewardContract_starts_with?: InputMaybe<Scalars['String']>
    rewardContract_starts_with_nocase?: InputMaybe<Scalars['String']>
    rewardContract_not_starts_with?: InputMaybe<Scalars['String']>
    rewardContract_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    rewardContract_ends_with?: InputMaybe<Scalars['String']>
    rewardContract_ends_with_nocase?: InputMaybe<Scalars['String']>
    rewardContract_not_ends_with?: InputMaybe<Scalars['String']>
    rewardContract_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type LiquidityPool_orderBy =
    | 'id'
    | 'protocol'
    | 'name'
    | 'symbol'
    | 'inputTokens'
    | 'outputToken'
    | 'rewardTokens'
    | 'fees'
    | 'createdTimestamp'
    | 'createdBlockNumber'
    | 'totalValueLockedUSD'
    | 'cumulativeVolumeUSD'
    | 'inputTokenBalances'
    | 'inputTokenWeights'
    | 'outputTokenSupply'
    | 'outputTokenPriceUSD'
    | 'stakedOutputTokenAmount'
    | 'rewardTokenEmissionsAmount'
    | 'rewardTokenEmissionsUSD'
    | 'dailySnapshots'
    | 'hourlySnapshots'
    | 'deposits'
    | 'withdraws'
    | 'swaps'
    | 'platform'
    | 'metapool'
    | 'basePool'
    | 'assetType'
    | 'poolType'
    | 'isV2'
    | 'gauge'
    | 'registry'
    | 'gaugeType'
    | 'rewardContract'

  export type Network =
    | 'ARBITRUM_ONE'
    | 'AURORA'
    | 'AVALANCHE'
    | 'BSC'
    | 'CELO'
    | 'MAINNET'
    | 'FANTOM'
    | 'FUSE'
    | 'MOONBEAM'
    | 'MOONRIVER'
    | 'NEAR_MAINNET'
    | 'OPTIMISM'
    | 'MATIC'
    | 'XDAI'

  /** Defines the order direction, either ascending or descending */
  export type OrderDirection = 'asc' | 'desc'

  export type Platform = {
    id: Scalars['ID']
    pools: Array<LiquidityPool>
    poolAddresses: Array<Scalars['String']>
    latestPoolSnapshot: Scalars['BigInt']
    catchup: Scalars['Boolean']
  }

  export type PlatformpoolsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPool_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPool_filter>
  }

  export type Platform_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    pools_?: InputMaybe<LiquidityPool_filter>
    poolAddresses?: InputMaybe<Array<Scalars['String']>>
    poolAddresses_not?: InputMaybe<Array<Scalars['String']>>
    poolAddresses_contains?: InputMaybe<Array<Scalars['String']>>
    poolAddresses_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    poolAddresses_not_contains?: InputMaybe<Array<Scalars['String']>>
    poolAddresses_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    latestPoolSnapshot?: InputMaybe<Scalars['BigInt']>
    latestPoolSnapshot_not?: InputMaybe<Scalars['BigInt']>
    latestPoolSnapshot_gt?: InputMaybe<Scalars['BigInt']>
    latestPoolSnapshot_lt?: InputMaybe<Scalars['BigInt']>
    latestPoolSnapshot_gte?: InputMaybe<Scalars['BigInt']>
    latestPoolSnapshot_lte?: InputMaybe<Scalars['BigInt']>
    latestPoolSnapshot_in?: InputMaybe<Array<Scalars['BigInt']>>
    latestPoolSnapshot_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    catchup?: InputMaybe<Scalars['Boolean']>
    catchup_not?: InputMaybe<Scalars['Boolean']>
    catchup_in?: InputMaybe<Array<Scalars['Boolean']>>
    catchup_not_in?: InputMaybe<Array<Scalars['Boolean']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Platform_orderBy = 'id' | 'pools' | 'poolAddresses' | 'latestPoolSnapshot' | 'catchup'

  export type PoolType =
    | 'STABLE_FACTORY'
    | 'CRYPTO_FACTORY'
    | 'METAPOOL_FACTORY'
    | 'REGISTRY_V1'
    | 'REGISTRY_V2'
    | 'LENDING'

  export type Protocol = {
    /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
    id: Scalars['ID']
    /**  Name of the protocol, including version. e.g. Uniswap v3  */
    name: Scalars['String']
    /**  Slug of protocol, including version. e.g. uniswap-v3  */
    slug: Scalars['String']
    /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
    schemaVersion: Scalars['String']
    /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
    subgraphVersion: Scalars['String']
    /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
    methodologyVersion: Scalars['String']
    /**  The blockchain network this subgraph is indexing on  */
    network: Network
    /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
    type: ProtocolType
    /**  Current TVL (Total Value Locked) of the entire protocol  */
    totalValueLockedUSD: Scalars['BigDecimal']
    /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
    protocolControlledValueUSD?: Maybe<Scalars['BigDecimal']>
    /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
    cumulativeSupplySideRevenueUSD: Scalars['BigDecimal']
    /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
    cumulativeProtocolSideRevenueUSD: Scalars['BigDecimal']
    /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
    cumulativeTotalRevenueUSD: Scalars['BigDecimal']
    /**  # of cumulative unique users  */
    cumulativeUniqueUsers: Scalars['Int']
    /**  Daily usage metrics for this protocol  */
    dailyUsageMetrics: Array<UsageMetricsDailySnapshot>
    /**  Hourly usage metrics for this protocol  */
    hourlyUsageMetrics: Array<UsageMetricsHourlySnapshot>
    /**  Daily financial metrics for this protocol  */
    financialMetrics: Array<FinancialsDailySnapshot>
  }

  export type ProtocoldailyUsageMetricsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UsageMetricsDailySnapshot_filter>
  }

  export type ProtocolhourlyUsageMetricsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UsageMetricsHourlySnapshot_filter>
  }

  export type ProtocolfinancialMetricsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<FinancialsDailySnapshot_filter>
  }

  export type ProtocolType = 'EXCHANGE' | 'LENDING' | 'YIELD' | 'BRIDGE' | 'GENERIC'

  export type Protocol_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    name?: InputMaybe<Scalars['String']>
    name_not?: InputMaybe<Scalars['String']>
    name_gt?: InputMaybe<Scalars['String']>
    name_lt?: InputMaybe<Scalars['String']>
    name_gte?: InputMaybe<Scalars['String']>
    name_lte?: InputMaybe<Scalars['String']>
    name_in?: InputMaybe<Array<Scalars['String']>>
    name_not_in?: InputMaybe<Array<Scalars['String']>>
    name_contains?: InputMaybe<Scalars['String']>
    name_contains_nocase?: InputMaybe<Scalars['String']>
    name_not_contains?: InputMaybe<Scalars['String']>
    name_not_contains_nocase?: InputMaybe<Scalars['String']>
    name_starts_with?: InputMaybe<Scalars['String']>
    name_starts_with_nocase?: InputMaybe<Scalars['String']>
    name_not_starts_with?: InputMaybe<Scalars['String']>
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    name_ends_with?: InputMaybe<Scalars['String']>
    name_ends_with_nocase?: InputMaybe<Scalars['String']>
    name_not_ends_with?: InputMaybe<Scalars['String']>
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    slug?: InputMaybe<Scalars['String']>
    slug_not?: InputMaybe<Scalars['String']>
    slug_gt?: InputMaybe<Scalars['String']>
    slug_lt?: InputMaybe<Scalars['String']>
    slug_gte?: InputMaybe<Scalars['String']>
    slug_lte?: InputMaybe<Scalars['String']>
    slug_in?: InputMaybe<Array<Scalars['String']>>
    slug_not_in?: InputMaybe<Array<Scalars['String']>>
    slug_contains?: InputMaybe<Scalars['String']>
    slug_contains_nocase?: InputMaybe<Scalars['String']>
    slug_not_contains?: InputMaybe<Scalars['String']>
    slug_not_contains_nocase?: InputMaybe<Scalars['String']>
    slug_starts_with?: InputMaybe<Scalars['String']>
    slug_starts_with_nocase?: InputMaybe<Scalars['String']>
    slug_not_starts_with?: InputMaybe<Scalars['String']>
    slug_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    slug_ends_with?: InputMaybe<Scalars['String']>
    slug_ends_with_nocase?: InputMaybe<Scalars['String']>
    slug_not_ends_with?: InputMaybe<Scalars['String']>
    slug_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    schemaVersion?: InputMaybe<Scalars['String']>
    schemaVersion_not?: InputMaybe<Scalars['String']>
    schemaVersion_gt?: InputMaybe<Scalars['String']>
    schemaVersion_lt?: InputMaybe<Scalars['String']>
    schemaVersion_gte?: InputMaybe<Scalars['String']>
    schemaVersion_lte?: InputMaybe<Scalars['String']>
    schemaVersion_in?: InputMaybe<Array<Scalars['String']>>
    schemaVersion_not_in?: InputMaybe<Array<Scalars['String']>>
    schemaVersion_contains?: InputMaybe<Scalars['String']>
    schemaVersion_contains_nocase?: InputMaybe<Scalars['String']>
    schemaVersion_not_contains?: InputMaybe<Scalars['String']>
    schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']>
    schemaVersion_starts_with?: InputMaybe<Scalars['String']>
    schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']>
    schemaVersion_not_starts_with?: InputMaybe<Scalars['String']>
    schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    schemaVersion_ends_with?: InputMaybe<Scalars['String']>
    schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']>
    schemaVersion_not_ends_with?: InputMaybe<Scalars['String']>
    schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    subgraphVersion?: InputMaybe<Scalars['String']>
    subgraphVersion_not?: InputMaybe<Scalars['String']>
    subgraphVersion_gt?: InputMaybe<Scalars['String']>
    subgraphVersion_lt?: InputMaybe<Scalars['String']>
    subgraphVersion_gte?: InputMaybe<Scalars['String']>
    subgraphVersion_lte?: InputMaybe<Scalars['String']>
    subgraphVersion_in?: InputMaybe<Array<Scalars['String']>>
    subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']>>
    subgraphVersion_contains?: InputMaybe<Scalars['String']>
    subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']>
    subgraphVersion_not_contains?: InputMaybe<Scalars['String']>
    subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']>
    subgraphVersion_starts_with?: InputMaybe<Scalars['String']>
    subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']>
    subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']>
    subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    subgraphVersion_ends_with?: InputMaybe<Scalars['String']>
    subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']>
    subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']>
    subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    methodologyVersion?: InputMaybe<Scalars['String']>
    methodologyVersion_not?: InputMaybe<Scalars['String']>
    methodologyVersion_gt?: InputMaybe<Scalars['String']>
    methodologyVersion_lt?: InputMaybe<Scalars['String']>
    methodologyVersion_gte?: InputMaybe<Scalars['String']>
    methodologyVersion_lte?: InputMaybe<Scalars['String']>
    methodologyVersion_in?: InputMaybe<Array<Scalars['String']>>
    methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']>>
    methodologyVersion_contains?: InputMaybe<Scalars['String']>
    methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']>
    methodologyVersion_not_contains?: InputMaybe<Scalars['String']>
    methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']>
    methodologyVersion_starts_with?: InputMaybe<Scalars['String']>
    methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']>
    methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']>
    methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    methodologyVersion_ends_with?: InputMaybe<Scalars['String']>
    methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']>
    methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']>
    methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    network?: InputMaybe<Network>
    network_not?: InputMaybe<Network>
    network_in?: InputMaybe<Array<Network>>
    network_not_in?: InputMaybe<Array<Network>>
    type?: InputMaybe<ProtocolType>
    type_not?: InputMaybe<ProtocolType>
    type_in?: InputMaybe<Array<ProtocolType>>
    type_not_in?: InputMaybe<Array<ProtocolType>>
    totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    protocolControlledValueUSD?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeTotalRevenueUSD?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>
    cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>
    dailyUsageMetrics_?: InputMaybe<UsageMetricsDailySnapshot_filter>
    hourlyUsageMetrics_?: InputMaybe<UsageMetricsHourlySnapshot_filter>
    financialMetrics_?: InputMaybe<FinancialsDailySnapshot_filter>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Protocol_orderBy =
    | 'id'
    | 'name'
    | 'slug'
    | 'schemaVersion'
    | 'subgraphVersion'
    | 'methodologyVersion'
    | 'network'
    | 'type'
    | 'totalValueLockedUSD'
    | 'protocolControlledValueUSD'
    | 'cumulativeSupplySideRevenueUSD'
    | 'cumulativeProtocolSideRevenueUSD'
    | 'cumulativeTotalRevenueUSD'
    | 'cumulativeUniqueUsers'
    | 'dailyUsageMetrics'
    | 'hourlyUsageMetrics'
    | 'financialMetrics'

  export type Query = {
    token?: Maybe<Token>
    tokens: Array<Token>
    rewardToken?: Maybe<RewardToken>
    rewardTokens: Array<RewardToken>
    liquidityPoolFee?: Maybe<LiquidityPoolFee>
    liquidityPoolFees: Array<LiquidityPoolFee>
    dexAmmProtocol?: Maybe<DexAmmProtocol>
    dexAmmProtocols: Array<DexAmmProtocol>
    usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>
    usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>
    usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>
    usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>
    financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>
    financialsDailySnapshots: Array<FinancialsDailySnapshot>
    liquidityPool?: Maybe<LiquidityPool>
    liquidityPools: Array<LiquidityPool>
    liquidityPoolDailySnapshot?: Maybe<LiquidityPoolDailySnapshot>
    liquidityPoolDailySnapshots: Array<LiquidityPoolDailySnapshot>
    liquidityPoolHourlySnapshot?: Maybe<LiquidityPoolHourlySnapshot>
    liquidityPoolHourlySnapshots: Array<LiquidityPoolHourlySnapshot>
    deposit?: Maybe<Deposit>
    deposits: Array<Deposit>
    withdraw?: Maybe<Withdraw>
    withdraws: Array<Withdraw>
    swap?: Maybe<Swap>
    swaps: Array<Swap>
    account?: Maybe<Account>
    accounts: Array<Account>
    activeAccount?: Maybe<ActiveAccount>
    activeAccounts: Array<ActiveAccount>
    platform?: Maybe<Platform>
    platforms: Array<Platform>
    registry?: Maybe<Registry>
    registries: Array<Registry>
    factory?: Maybe<Factory>
    factories: Array<Factory>
    basePool?: Maybe<BasePool>
    basePools: Array<BasePool>
    tokenSnapshot?: Maybe<TokenSnapshot>
    tokenSnapshots: Array<TokenSnapshot>
    gaugePool?: Maybe<GaugePool>
    gaugePools: Array<GaugePool>
    protocol?: Maybe<Protocol>
    protocols: Array<Protocol>
    event?: Maybe<Event>
    events: Array<Event>
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>
  }

  export type QuerytokenArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerytokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryrewardTokenArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryrewardTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<RewardToken_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<RewardToken_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidityPoolFeeArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidityPoolFeesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPoolFee_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPoolFee_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerydexAmmProtocolArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerydexAmmProtocolsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<DexAmmProtocol_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<DexAmmProtocol_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryusageMetricsDailySnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryusageMetricsDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UsageMetricsDailySnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryusageMetricsHourlySnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryusageMetricsHourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UsageMetricsHourlySnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryfinancialsDailySnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryfinancialsDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<FinancialsDailySnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidityPoolArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidityPoolsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPool_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPool_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidityPoolDailySnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidityPoolDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPoolDailySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPoolDailySnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidityPoolHourlySnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidityPoolHourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPoolHourlySnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerydepositArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerydepositsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Deposit_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Deposit_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerywithdrawArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerywithdrawsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Withdraw_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Withdraw_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryswapArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryswapsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Swap_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Swap_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryaccountArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryaccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Account_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Account_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryactiveAccountArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryactiveAccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<ActiveAccount_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<ActiveAccount_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryplatformArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryplatformsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Platform_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Platform_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryregistryArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryregistriesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Registry_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Registry_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryfactoryArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryfactoriesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Factory_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Factory_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerybasePoolArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerybasePoolsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<BasePool_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<BasePool_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerytokenSnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerytokenSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TokenSnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TokenSnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerygaugePoolArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerygaugePoolsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<GaugePool_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<GaugePool_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryprotocolArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryprotocolsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Protocol_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Protocol_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryeventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryeventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Event_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Event_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type Query_metaArgs = {
    block?: InputMaybe<Block_height>
  }

  export type Registry = {
    id: Scalars['ID']
  }

  export type Registry_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Registry_orderBy = 'id'

  export type RewardToken = {
    /**  { Reward token type }-{ Smart contract address of the reward token }  */
    id: Scalars['ID']
    /**  Reference to the actual token  */
    token: Token
    /**  The type of the reward token  */
    type: RewardTokenType
  }

  export type RewardTokenType =
    /**  For reward tokens awarded to LPs/lenders  */
    | 'DEPOSIT'
    /**  For reward tokens awarded to borrowers  */
    | 'BORROW'

  export type RewardToken_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    token?: InputMaybe<Scalars['String']>
    token_not?: InputMaybe<Scalars['String']>
    token_gt?: InputMaybe<Scalars['String']>
    token_lt?: InputMaybe<Scalars['String']>
    token_gte?: InputMaybe<Scalars['String']>
    token_lte?: InputMaybe<Scalars['String']>
    token_in?: InputMaybe<Array<Scalars['String']>>
    token_not_in?: InputMaybe<Array<Scalars['String']>>
    token_contains?: InputMaybe<Scalars['String']>
    token_contains_nocase?: InputMaybe<Scalars['String']>
    token_not_contains?: InputMaybe<Scalars['String']>
    token_not_contains_nocase?: InputMaybe<Scalars['String']>
    token_starts_with?: InputMaybe<Scalars['String']>
    token_starts_with_nocase?: InputMaybe<Scalars['String']>
    token_not_starts_with?: InputMaybe<Scalars['String']>
    token_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    token_ends_with?: InputMaybe<Scalars['String']>
    token_ends_with_nocase?: InputMaybe<Scalars['String']>
    token_not_ends_with?: InputMaybe<Scalars['String']>
    token_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    token_?: InputMaybe<Token_filter>
    type?: InputMaybe<RewardTokenType>
    type_not?: InputMaybe<RewardTokenType>
    type_in?: InputMaybe<Array<RewardTokenType>>
    type_not_in?: InputMaybe<Array<RewardTokenType>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type RewardToken_orderBy = 'id' | 'token' | 'type'

  export type Subscription = {
    token?: Maybe<Token>
    tokens: Array<Token>
    rewardToken?: Maybe<RewardToken>
    rewardTokens: Array<RewardToken>
    liquidityPoolFee?: Maybe<LiquidityPoolFee>
    liquidityPoolFees: Array<LiquidityPoolFee>
    dexAmmProtocol?: Maybe<DexAmmProtocol>
    dexAmmProtocols: Array<DexAmmProtocol>
    usageMetricsDailySnapshot?: Maybe<UsageMetricsDailySnapshot>
    usageMetricsDailySnapshots: Array<UsageMetricsDailySnapshot>
    usageMetricsHourlySnapshot?: Maybe<UsageMetricsHourlySnapshot>
    usageMetricsHourlySnapshots: Array<UsageMetricsHourlySnapshot>
    financialsDailySnapshot?: Maybe<FinancialsDailySnapshot>
    financialsDailySnapshots: Array<FinancialsDailySnapshot>
    liquidityPool?: Maybe<LiquidityPool>
    liquidityPools: Array<LiquidityPool>
    liquidityPoolDailySnapshot?: Maybe<LiquidityPoolDailySnapshot>
    liquidityPoolDailySnapshots: Array<LiquidityPoolDailySnapshot>
    liquidityPoolHourlySnapshot?: Maybe<LiquidityPoolHourlySnapshot>
    liquidityPoolHourlySnapshots: Array<LiquidityPoolHourlySnapshot>
    deposit?: Maybe<Deposit>
    deposits: Array<Deposit>
    withdraw?: Maybe<Withdraw>
    withdraws: Array<Withdraw>
    swap?: Maybe<Swap>
    swaps: Array<Swap>
    account?: Maybe<Account>
    accounts: Array<Account>
    activeAccount?: Maybe<ActiveAccount>
    activeAccounts: Array<ActiveAccount>
    platform?: Maybe<Platform>
    platforms: Array<Platform>
    registry?: Maybe<Registry>
    registries: Array<Registry>
    factory?: Maybe<Factory>
    factories: Array<Factory>
    basePool?: Maybe<BasePool>
    basePools: Array<BasePool>
    tokenSnapshot?: Maybe<TokenSnapshot>
    tokenSnapshots: Array<TokenSnapshot>
    gaugePool?: Maybe<GaugePool>
    gaugePools: Array<GaugePool>
    protocol?: Maybe<Protocol>
    protocols: Array<Protocol>
    event?: Maybe<Event>
    events: Array<Event>
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>
  }

  export type SubscriptiontokenArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiontokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionrewardTokenArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionrewardTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<RewardToken_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<RewardToken_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidityPoolFeeArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidityPoolFeesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPoolFee_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPoolFee_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiondexAmmProtocolArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiondexAmmProtocolsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<DexAmmProtocol_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<DexAmmProtocol_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionusageMetricsDailySnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionusageMetricsDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UsageMetricsDailySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UsageMetricsDailySnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionusageMetricsHourlySnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionusageMetricsHourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UsageMetricsHourlySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UsageMetricsHourlySnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionfinancialsDailySnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionfinancialsDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<FinancialsDailySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<FinancialsDailySnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidityPoolArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidityPoolsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPool_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPool_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidityPoolDailySnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidityPoolDailySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPoolDailySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPoolDailySnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidityPoolHourlySnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidityPoolHourlySnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPoolHourlySnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPoolHourlySnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiondepositArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiondepositsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Deposit_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Deposit_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionwithdrawArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionwithdrawsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Withdraw_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Withdraw_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionswapArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionswapsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Swap_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Swap_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionaccountArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionaccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Account_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Account_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionactiveAccountArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionactiveAccountsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<ActiveAccount_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<ActiveAccount_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionplatformArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionplatformsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Platform_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Platform_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionregistryArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionregistriesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Registry_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Registry_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionfactoryArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionfactoriesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Factory_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Factory_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionbasePoolArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionbasePoolsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<BasePool_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<BasePool_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiontokenSnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiontokenSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TokenSnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TokenSnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiongaugePoolArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiongaugePoolsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<GaugePool_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<GaugePool_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionprotocolArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionprotocolsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Protocol_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Protocol_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptioneventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptioneventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Event_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Event_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>
  }

  export type Swap = Event & {
    /**  swap-{ Transaction hash }-{ Log index }  */
    id: Scalars['ID']
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String']
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int']
    /**  The protocol this transaction belongs to  */
    protocol: DexAmmProtocol
    /**  Address that received the tokens  */
    to: Scalars['String']
    /**  Address that sent the tokens  */
    from: Scalars['String']
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt']
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt']
    /**  Token deposited into pool  */
    tokenIn: Token
    /**  Amount of token deposited into pool in native units  */
    amountIn: Scalars['BigInt']
    /**  Amount of token deposited into pool in USD  */
    amountInUSD: Scalars['BigDecimal']
    /**  Token withdrawn from pool  */
    tokenOut: Token
    /**  Amount of token withdrawn from pool in native units  */
    amountOut: Scalars['BigInt']
    /**  Amount of token withdrawn from pool in USD  */
    amountOutUSD: Scalars['BigDecimal']
    /**  The pool involving this transaction  */
    pool: LiquidityPool
  }

  export type Swap_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    hash?: InputMaybe<Scalars['String']>
    hash_not?: InputMaybe<Scalars['String']>
    hash_gt?: InputMaybe<Scalars['String']>
    hash_lt?: InputMaybe<Scalars['String']>
    hash_gte?: InputMaybe<Scalars['String']>
    hash_lte?: InputMaybe<Scalars['String']>
    hash_in?: InputMaybe<Array<Scalars['String']>>
    hash_not_in?: InputMaybe<Array<Scalars['String']>>
    hash_contains?: InputMaybe<Scalars['String']>
    hash_contains_nocase?: InputMaybe<Scalars['String']>
    hash_not_contains?: InputMaybe<Scalars['String']>
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>
    hash_starts_with?: InputMaybe<Scalars['String']>
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>
    hash_not_starts_with?: InputMaybe<Scalars['String']>
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    hash_ends_with?: InputMaybe<Scalars['String']>
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>
    hash_not_ends_with?: InputMaybe<Scalars['String']>
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    logIndex?: InputMaybe<Scalars['Int']>
    logIndex_not?: InputMaybe<Scalars['Int']>
    logIndex_gt?: InputMaybe<Scalars['Int']>
    logIndex_lt?: InputMaybe<Scalars['Int']>
    logIndex_gte?: InputMaybe<Scalars['Int']>
    logIndex_lte?: InputMaybe<Scalars['Int']>
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>
    protocol?: InputMaybe<Scalars['String']>
    protocol_not?: InputMaybe<Scalars['String']>
    protocol_gt?: InputMaybe<Scalars['String']>
    protocol_lt?: InputMaybe<Scalars['String']>
    protocol_gte?: InputMaybe<Scalars['String']>
    protocol_lte?: InputMaybe<Scalars['String']>
    protocol_in?: InputMaybe<Array<Scalars['String']>>
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>
    protocol_contains?: InputMaybe<Scalars['String']>
    protocol_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_not_contains?: InputMaybe<Scalars['String']>
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_starts_with?: InputMaybe<Scalars['String']>
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_starts_with?: InputMaybe<Scalars['String']>
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_ends_with?: InputMaybe<Scalars['String']>
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_ends_with?: InputMaybe<Scalars['String']>
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_?: InputMaybe<DexAmmProtocol_filter>
    to?: InputMaybe<Scalars['String']>
    to_not?: InputMaybe<Scalars['String']>
    to_gt?: InputMaybe<Scalars['String']>
    to_lt?: InputMaybe<Scalars['String']>
    to_gte?: InputMaybe<Scalars['String']>
    to_lte?: InputMaybe<Scalars['String']>
    to_in?: InputMaybe<Array<Scalars['String']>>
    to_not_in?: InputMaybe<Array<Scalars['String']>>
    to_contains?: InputMaybe<Scalars['String']>
    to_contains_nocase?: InputMaybe<Scalars['String']>
    to_not_contains?: InputMaybe<Scalars['String']>
    to_not_contains_nocase?: InputMaybe<Scalars['String']>
    to_starts_with?: InputMaybe<Scalars['String']>
    to_starts_with_nocase?: InputMaybe<Scalars['String']>
    to_not_starts_with?: InputMaybe<Scalars['String']>
    to_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    to_ends_with?: InputMaybe<Scalars['String']>
    to_ends_with_nocase?: InputMaybe<Scalars['String']>
    to_not_ends_with?: InputMaybe<Scalars['String']>
    to_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    from?: InputMaybe<Scalars['String']>
    from_not?: InputMaybe<Scalars['String']>
    from_gt?: InputMaybe<Scalars['String']>
    from_lt?: InputMaybe<Scalars['String']>
    from_gte?: InputMaybe<Scalars['String']>
    from_lte?: InputMaybe<Scalars['String']>
    from_in?: InputMaybe<Array<Scalars['String']>>
    from_not_in?: InputMaybe<Array<Scalars['String']>>
    from_contains?: InputMaybe<Scalars['String']>
    from_contains_nocase?: InputMaybe<Scalars['String']>
    from_not_contains?: InputMaybe<Scalars['String']>
    from_not_contains_nocase?: InputMaybe<Scalars['String']>
    from_starts_with?: InputMaybe<Scalars['String']>
    from_starts_with_nocase?: InputMaybe<Scalars['String']>
    from_not_starts_with?: InputMaybe<Scalars['String']>
    from_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    from_ends_with?: InputMaybe<Scalars['String']>
    from_ends_with_nocase?: InputMaybe<Scalars['String']>
    from_not_ends_with?: InputMaybe<Scalars['String']>
    from_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    blockNumber?: InputMaybe<Scalars['BigInt']>
    blockNumber_not?: InputMaybe<Scalars['BigInt']>
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    tokenIn?: InputMaybe<Scalars['String']>
    tokenIn_not?: InputMaybe<Scalars['String']>
    tokenIn_gt?: InputMaybe<Scalars['String']>
    tokenIn_lt?: InputMaybe<Scalars['String']>
    tokenIn_gte?: InputMaybe<Scalars['String']>
    tokenIn_lte?: InputMaybe<Scalars['String']>
    tokenIn_in?: InputMaybe<Array<Scalars['String']>>
    tokenIn_not_in?: InputMaybe<Array<Scalars['String']>>
    tokenIn_contains?: InputMaybe<Scalars['String']>
    tokenIn_contains_nocase?: InputMaybe<Scalars['String']>
    tokenIn_not_contains?: InputMaybe<Scalars['String']>
    tokenIn_not_contains_nocase?: InputMaybe<Scalars['String']>
    tokenIn_starts_with?: InputMaybe<Scalars['String']>
    tokenIn_starts_with_nocase?: InputMaybe<Scalars['String']>
    tokenIn_not_starts_with?: InputMaybe<Scalars['String']>
    tokenIn_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    tokenIn_ends_with?: InputMaybe<Scalars['String']>
    tokenIn_ends_with_nocase?: InputMaybe<Scalars['String']>
    tokenIn_not_ends_with?: InputMaybe<Scalars['String']>
    tokenIn_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    tokenIn_?: InputMaybe<Token_filter>
    amountIn?: InputMaybe<Scalars['BigInt']>
    amountIn_not?: InputMaybe<Scalars['BigInt']>
    amountIn_gt?: InputMaybe<Scalars['BigInt']>
    amountIn_lt?: InputMaybe<Scalars['BigInt']>
    amountIn_gte?: InputMaybe<Scalars['BigInt']>
    amountIn_lte?: InputMaybe<Scalars['BigInt']>
    amountIn_in?: InputMaybe<Array<Scalars['BigInt']>>
    amountIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    amountInUSD?: InputMaybe<Scalars['BigDecimal']>
    amountInUSD_not?: InputMaybe<Scalars['BigDecimal']>
    amountInUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    amountInUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    amountInUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    amountInUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    amountInUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amountInUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    tokenOut?: InputMaybe<Scalars['String']>
    tokenOut_not?: InputMaybe<Scalars['String']>
    tokenOut_gt?: InputMaybe<Scalars['String']>
    tokenOut_lt?: InputMaybe<Scalars['String']>
    tokenOut_gte?: InputMaybe<Scalars['String']>
    tokenOut_lte?: InputMaybe<Scalars['String']>
    tokenOut_in?: InputMaybe<Array<Scalars['String']>>
    tokenOut_not_in?: InputMaybe<Array<Scalars['String']>>
    tokenOut_contains?: InputMaybe<Scalars['String']>
    tokenOut_contains_nocase?: InputMaybe<Scalars['String']>
    tokenOut_not_contains?: InputMaybe<Scalars['String']>
    tokenOut_not_contains_nocase?: InputMaybe<Scalars['String']>
    tokenOut_starts_with?: InputMaybe<Scalars['String']>
    tokenOut_starts_with_nocase?: InputMaybe<Scalars['String']>
    tokenOut_not_starts_with?: InputMaybe<Scalars['String']>
    tokenOut_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    tokenOut_ends_with?: InputMaybe<Scalars['String']>
    tokenOut_ends_with_nocase?: InputMaybe<Scalars['String']>
    tokenOut_not_ends_with?: InputMaybe<Scalars['String']>
    tokenOut_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    tokenOut_?: InputMaybe<Token_filter>
    amountOut?: InputMaybe<Scalars['BigInt']>
    amountOut_not?: InputMaybe<Scalars['BigInt']>
    amountOut_gt?: InputMaybe<Scalars['BigInt']>
    amountOut_lt?: InputMaybe<Scalars['BigInt']>
    amountOut_gte?: InputMaybe<Scalars['BigInt']>
    amountOut_lte?: InputMaybe<Scalars['BigInt']>
    amountOut_in?: InputMaybe<Array<Scalars['BigInt']>>
    amountOut_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    amountOutUSD?: InputMaybe<Scalars['BigDecimal']>
    amountOutUSD_not?: InputMaybe<Scalars['BigDecimal']>
    amountOutUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    amountOutUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    amountOutUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    amountOutUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    amountOutUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amountOutUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    pool?: InputMaybe<Scalars['String']>
    pool_not?: InputMaybe<Scalars['String']>
    pool_gt?: InputMaybe<Scalars['String']>
    pool_lt?: InputMaybe<Scalars['String']>
    pool_gte?: InputMaybe<Scalars['String']>
    pool_lte?: InputMaybe<Scalars['String']>
    pool_in?: InputMaybe<Array<Scalars['String']>>
    pool_not_in?: InputMaybe<Array<Scalars['String']>>
    pool_contains?: InputMaybe<Scalars['String']>
    pool_contains_nocase?: InputMaybe<Scalars['String']>
    pool_not_contains?: InputMaybe<Scalars['String']>
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>
    pool_starts_with?: InputMaybe<Scalars['String']>
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>
    pool_not_starts_with?: InputMaybe<Scalars['String']>
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pool_ends_with?: InputMaybe<Scalars['String']>
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>
    pool_not_ends_with?: InputMaybe<Scalars['String']>
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    pool_?: InputMaybe<LiquidityPool_filter>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Swap_orderBy =
    | 'id'
    | 'hash'
    | 'logIndex'
    | 'protocol'
    | 'to'
    | 'from'
    | 'blockNumber'
    | 'timestamp'
    | 'tokenIn'
    | 'amountIn'
    | 'amountInUSD'
    | 'tokenOut'
    | 'amountOut'
    | 'amountOutUSD'
    | 'pool'

  export type Token = {
    /**  Smart contract address of the token  */
    id: Scalars['ID']
    /**  Name of the token, mirrored from the smart contract  */
    name: Scalars['String']
    /**  Symbol of the token, mirrored from the smart contract  */
    symbol: Scalars['String']
    /**  The number of decimal places this token uses, default to 18  */
    decimals: Scalars['Int']
    /**  Optional field to track the price of a token, mostly for caching purposes  */
    lastPriceUSD?: Maybe<Scalars['BigDecimal']>
    /**  Optional field to track the block number of the last token price  */
    lastPriceBlockNumber?: Maybe<Scalars['BigInt']>
  }

  export type TokenSnapshot = {
    /**  { token }-{ hourly-timestamp }  */
    id: Scalars['ID']
    price: Scalars['BigDecimal']
    timestamp: Scalars['BigInt']
  }

  export type TokenSnapshot_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    price?: InputMaybe<Scalars['BigDecimal']>
    price_not?: InputMaybe<Scalars['BigDecimal']>
    price_gt?: InputMaybe<Scalars['BigDecimal']>
    price_lt?: InputMaybe<Scalars['BigDecimal']>
    price_gte?: InputMaybe<Scalars['BigDecimal']>
    price_lte?: InputMaybe<Scalars['BigDecimal']>
    price_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type TokenSnapshot_orderBy = 'id' | 'price' | 'timestamp'

  export type Token_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    name?: InputMaybe<Scalars['String']>
    name_not?: InputMaybe<Scalars['String']>
    name_gt?: InputMaybe<Scalars['String']>
    name_lt?: InputMaybe<Scalars['String']>
    name_gte?: InputMaybe<Scalars['String']>
    name_lte?: InputMaybe<Scalars['String']>
    name_in?: InputMaybe<Array<Scalars['String']>>
    name_not_in?: InputMaybe<Array<Scalars['String']>>
    name_contains?: InputMaybe<Scalars['String']>
    name_contains_nocase?: InputMaybe<Scalars['String']>
    name_not_contains?: InputMaybe<Scalars['String']>
    name_not_contains_nocase?: InputMaybe<Scalars['String']>
    name_starts_with?: InputMaybe<Scalars['String']>
    name_starts_with_nocase?: InputMaybe<Scalars['String']>
    name_not_starts_with?: InputMaybe<Scalars['String']>
    name_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    name_ends_with?: InputMaybe<Scalars['String']>
    name_ends_with_nocase?: InputMaybe<Scalars['String']>
    name_not_ends_with?: InputMaybe<Scalars['String']>
    name_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    symbol?: InputMaybe<Scalars['String']>
    symbol_not?: InputMaybe<Scalars['String']>
    symbol_gt?: InputMaybe<Scalars['String']>
    symbol_lt?: InputMaybe<Scalars['String']>
    symbol_gte?: InputMaybe<Scalars['String']>
    symbol_lte?: InputMaybe<Scalars['String']>
    symbol_in?: InputMaybe<Array<Scalars['String']>>
    symbol_not_in?: InputMaybe<Array<Scalars['String']>>
    symbol_contains?: InputMaybe<Scalars['String']>
    symbol_contains_nocase?: InputMaybe<Scalars['String']>
    symbol_not_contains?: InputMaybe<Scalars['String']>
    symbol_not_contains_nocase?: InputMaybe<Scalars['String']>
    symbol_starts_with?: InputMaybe<Scalars['String']>
    symbol_starts_with_nocase?: InputMaybe<Scalars['String']>
    symbol_not_starts_with?: InputMaybe<Scalars['String']>
    symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    symbol_ends_with?: InputMaybe<Scalars['String']>
    symbol_ends_with_nocase?: InputMaybe<Scalars['String']>
    symbol_not_ends_with?: InputMaybe<Scalars['String']>
    symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    decimals?: InputMaybe<Scalars['Int']>
    decimals_not?: InputMaybe<Scalars['Int']>
    decimals_gt?: InputMaybe<Scalars['Int']>
    decimals_lt?: InputMaybe<Scalars['Int']>
    decimals_gte?: InputMaybe<Scalars['Int']>
    decimals_lte?: InputMaybe<Scalars['Int']>
    decimals_in?: InputMaybe<Array<Scalars['Int']>>
    decimals_not_in?: InputMaybe<Array<Scalars['Int']>>
    lastPriceUSD?: InputMaybe<Scalars['BigDecimal']>
    lastPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
    lastPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    lastPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    lastPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    lastPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    lastPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    lastPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']>
    lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']>
    lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']>
    lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']>
    lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']>
    lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']>
    lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Token_orderBy = 'id' | 'name' | 'symbol' | 'decimals' | 'lastPriceUSD' | 'lastPriceBlockNumber'

  export type UsageMetricsDailySnapshot = {
    /**  ID is # of days since Unix epoch time  */
    id: Scalars['ID']
    /**  Protocol this snapshot is associated with  */
    protocol: DexAmmProtocol
    /**  # of unique daily active users  */
    dailyActiveUsers: Scalars['Int']
    /**  # of cumulative unique users  */
    cumulativeUniqueUsers: Scalars['Int']
    /**  Total number of transactions occurred in a day. Transactions include all entities that implement the Event interface.  */
    dailyTransactionCount: Scalars['Int']
    /**  Total number of deposits (add liquidity) in a day  */
    dailyDepositCount: Scalars['Int']
    /**  Total number of withdrawals (remove liquidity) in a day  */
    dailyWithdrawCount: Scalars['Int']
    /**  Total number of trades (swaps) in a day  */
    dailySwapCount: Scalars['Int']
    /**  Block number of this snapshot  */
    blockNumber: Scalars['BigInt']
    /**  Timestamp of this snapshot  */
    timestamp: Scalars['BigInt']
  }

  export type UsageMetricsDailySnapshot_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    protocol?: InputMaybe<Scalars['String']>
    protocol_not?: InputMaybe<Scalars['String']>
    protocol_gt?: InputMaybe<Scalars['String']>
    protocol_lt?: InputMaybe<Scalars['String']>
    protocol_gte?: InputMaybe<Scalars['String']>
    protocol_lte?: InputMaybe<Scalars['String']>
    protocol_in?: InputMaybe<Array<Scalars['String']>>
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>
    protocol_contains?: InputMaybe<Scalars['String']>
    protocol_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_not_contains?: InputMaybe<Scalars['String']>
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_starts_with?: InputMaybe<Scalars['String']>
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_starts_with?: InputMaybe<Scalars['String']>
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_ends_with?: InputMaybe<Scalars['String']>
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_ends_with?: InputMaybe<Scalars['String']>
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_?: InputMaybe<DexAmmProtocol_filter>
    dailyActiveUsers?: InputMaybe<Scalars['Int']>
    dailyActiveUsers_not?: InputMaybe<Scalars['Int']>
    dailyActiveUsers_gt?: InputMaybe<Scalars['Int']>
    dailyActiveUsers_lt?: InputMaybe<Scalars['Int']>
    dailyActiveUsers_gte?: InputMaybe<Scalars['Int']>
    dailyActiveUsers_lte?: InputMaybe<Scalars['Int']>
    dailyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>
    dailyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>
    cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>
    cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>
    dailyTransactionCount?: InputMaybe<Scalars['Int']>
    dailyTransactionCount_not?: InputMaybe<Scalars['Int']>
    dailyTransactionCount_gt?: InputMaybe<Scalars['Int']>
    dailyTransactionCount_lt?: InputMaybe<Scalars['Int']>
    dailyTransactionCount_gte?: InputMaybe<Scalars['Int']>
    dailyTransactionCount_lte?: InputMaybe<Scalars['Int']>
    dailyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>
    dailyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>
    dailyDepositCount?: InputMaybe<Scalars['Int']>
    dailyDepositCount_not?: InputMaybe<Scalars['Int']>
    dailyDepositCount_gt?: InputMaybe<Scalars['Int']>
    dailyDepositCount_lt?: InputMaybe<Scalars['Int']>
    dailyDepositCount_gte?: InputMaybe<Scalars['Int']>
    dailyDepositCount_lte?: InputMaybe<Scalars['Int']>
    dailyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>
    dailyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>
    dailyWithdrawCount?: InputMaybe<Scalars['Int']>
    dailyWithdrawCount_not?: InputMaybe<Scalars['Int']>
    dailyWithdrawCount_gt?: InputMaybe<Scalars['Int']>
    dailyWithdrawCount_lt?: InputMaybe<Scalars['Int']>
    dailyWithdrawCount_gte?: InputMaybe<Scalars['Int']>
    dailyWithdrawCount_lte?: InputMaybe<Scalars['Int']>
    dailyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>
    dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>
    dailySwapCount?: InputMaybe<Scalars['Int']>
    dailySwapCount_not?: InputMaybe<Scalars['Int']>
    dailySwapCount_gt?: InputMaybe<Scalars['Int']>
    dailySwapCount_lt?: InputMaybe<Scalars['Int']>
    dailySwapCount_gte?: InputMaybe<Scalars['Int']>
    dailySwapCount_lte?: InputMaybe<Scalars['Int']>
    dailySwapCount_in?: InputMaybe<Array<Scalars['Int']>>
    dailySwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>
    blockNumber?: InputMaybe<Scalars['BigInt']>
    blockNumber_not?: InputMaybe<Scalars['BigInt']>
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type UsageMetricsDailySnapshot_orderBy =
    | 'id'
    | 'protocol'
    | 'dailyActiveUsers'
    | 'cumulativeUniqueUsers'
    | 'dailyTransactionCount'
    | 'dailyDepositCount'
    | 'dailyWithdrawCount'
    | 'dailySwapCount'
    | 'blockNumber'
    | 'timestamp'

  export type UsageMetricsHourlySnapshot = {
    /**  { # of hours since Unix epoch time }  */
    id: Scalars['ID']
    /**  Protocol this snapshot is associated with  */
    protocol: DexAmmProtocol
    /**  # of unique hourly active users  */
    hourlyActiveUsers: Scalars['Int']
    /**  # of cumulative unique users  */
    cumulativeUniqueUsers: Scalars['Int']
    /**  Total number of transactions occurred in an hour. Transactions include all entities that implement the Event interface.  */
    hourlyTransactionCount: Scalars['Int']
    /**  Total number of deposits (add liquidity) in an hour  */
    hourlyDepositCount: Scalars['Int']
    /**  Total number of withdrawals (remove liquidity) in an hour  */
    hourlyWithdrawCount: Scalars['Int']
    /**  Total number of trades (swaps) in an hour  */
    hourlySwapCount: Scalars['Int']
    /**  Block number of this snapshot  */
    blockNumber: Scalars['BigInt']
    /**  Timestamp of this snapshot  */
    timestamp: Scalars['BigInt']
  }

  export type UsageMetricsHourlySnapshot_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    protocol?: InputMaybe<Scalars['String']>
    protocol_not?: InputMaybe<Scalars['String']>
    protocol_gt?: InputMaybe<Scalars['String']>
    protocol_lt?: InputMaybe<Scalars['String']>
    protocol_gte?: InputMaybe<Scalars['String']>
    protocol_lte?: InputMaybe<Scalars['String']>
    protocol_in?: InputMaybe<Array<Scalars['String']>>
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>
    protocol_contains?: InputMaybe<Scalars['String']>
    protocol_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_not_contains?: InputMaybe<Scalars['String']>
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_starts_with?: InputMaybe<Scalars['String']>
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_starts_with?: InputMaybe<Scalars['String']>
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_ends_with?: InputMaybe<Scalars['String']>
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_ends_with?: InputMaybe<Scalars['String']>
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_?: InputMaybe<DexAmmProtocol_filter>
    hourlyActiveUsers?: InputMaybe<Scalars['Int']>
    hourlyActiveUsers_not?: InputMaybe<Scalars['Int']>
    hourlyActiveUsers_gt?: InputMaybe<Scalars['Int']>
    hourlyActiveUsers_lt?: InputMaybe<Scalars['Int']>
    hourlyActiveUsers_gte?: InputMaybe<Scalars['Int']>
    hourlyActiveUsers_lte?: InputMaybe<Scalars['Int']>
    hourlyActiveUsers_in?: InputMaybe<Array<Scalars['Int']>>
    hourlyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']>>
    cumulativeUniqueUsers?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']>
    cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']>>
    cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']>>
    hourlyTransactionCount?: InputMaybe<Scalars['Int']>
    hourlyTransactionCount_not?: InputMaybe<Scalars['Int']>
    hourlyTransactionCount_gt?: InputMaybe<Scalars['Int']>
    hourlyTransactionCount_lt?: InputMaybe<Scalars['Int']>
    hourlyTransactionCount_gte?: InputMaybe<Scalars['Int']>
    hourlyTransactionCount_lte?: InputMaybe<Scalars['Int']>
    hourlyTransactionCount_in?: InputMaybe<Array<Scalars['Int']>>
    hourlyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']>>
    hourlyDepositCount?: InputMaybe<Scalars['Int']>
    hourlyDepositCount_not?: InputMaybe<Scalars['Int']>
    hourlyDepositCount_gt?: InputMaybe<Scalars['Int']>
    hourlyDepositCount_lt?: InputMaybe<Scalars['Int']>
    hourlyDepositCount_gte?: InputMaybe<Scalars['Int']>
    hourlyDepositCount_lte?: InputMaybe<Scalars['Int']>
    hourlyDepositCount_in?: InputMaybe<Array<Scalars['Int']>>
    hourlyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']>>
    hourlyWithdrawCount?: InputMaybe<Scalars['Int']>
    hourlyWithdrawCount_not?: InputMaybe<Scalars['Int']>
    hourlyWithdrawCount_gt?: InputMaybe<Scalars['Int']>
    hourlyWithdrawCount_lt?: InputMaybe<Scalars['Int']>
    hourlyWithdrawCount_gte?: InputMaybe<Scalars['Int']>
    hourlyWithdrawCount_lte?: InputMaybe<Scalars['Int']>
    hourlyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']>>
    hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']>>
    hourlySwapCount?: InputMaybe<Scalars['Int']>
    hourlySwapCount_not?: InputMaybe<Scalars['Int']>
    hourlySwapCount_gt?: InputMaybe<Scalars['Int']>
    hourlySwapCount_lt?: InputMaybe<Scalars['Int']>
    hourlySwapCount_gte?: InputMaybe<Scalars['Int']>
    hourlySwapCount_lte?: InputMaybe<Scalars['Int']>
    hourlySwapCount_in?: InputMaybe<Array<Scalars['Int']>>
    hourlySwapCount_not_in?: InputMaybe<Array<Scalars['Int']>>
    blockNumber?: InputMaybe<Scalars['BigInt']>
    blockNumber_not?: InputMaybe<Scalars['BigInt']>
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type UsageMetricsHourlySnapshot_orderBy =
    | 'id'
    | 'protocol'
    | 'hourlyActiveUsers'
    | 'cumulativeUniqueUsers'
    | 'hourlyTransactionCount'
    | 'hourlyDepositCount'
    | 'hourlyWithdrawCount'
    | 'hourlySwapCount'
    | 'blockNumber'
    | 'timestamp'

  export type Withdraw = Event & {
    /**  withdraw-{ Transaction hash }-{ Log index } */
    id: Scalars['ID']
    /**  Transaction hash of the transaction that emitted this event  */
    hash: Scalars['String']
    /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
    logIndex: Scalars['Int']
    /**  The protocol this transaction belongs to  */
    protocol: DexAmmProtocol
    /**  Address that received the tokens  */
    to: Scalars['String']
    /**  Address that sent the tokens  */
    from: Scalars['String']
    /**  Block number of this event  */
    blockNumber: Scalars['BigInt']
    /**  Timestamp of this event  */
    timestamp: Scalars['BigInt']
    /**  Input tokens of the pool (not input tokens of the event/transaction). E.g. WETH and USDC from a WETH-USDC pool  */
    inputTokens: Array<Token>
    /**  Output token of the pool (not output token of the event/transaction). E.g. the UNI-LP token  */
    outputToken?: Maybe<Token>
    /**  Amount of input tokens in the token's native unit  */
    inputTokenAmounts: Array<Scalars['BigInt']>
    /**  Amount of output tokens in the token's native unit  */
    outputTokenAmount?: Maybe<Scalars['BigInt']>
    /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens withdrawn from a pool)  */
    amountUSD: Scalars['BigDecimal']
    /**  The pool involving this transaction  */
    pool: LiquidityPool
  }

  export type WithdrawinputTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
  }

  export type Withdraw_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    hash?: InputMaybe<Scalars['String']>
    hash_not?: InputMaybe<Scalars['String']>
    hash_gt?: InputMaybe<Scalars['String']>
    hash_lt?: InputMaybe<Scalars['String']>
    hash_gte?: InputMaybe<Scalars['String']>
    hash_lte?: InputMaybe<Scalars['String']>
    hash_in?: InputMaybe<Array<Scalars['String']>>
    hash_not_in?: InputMaybe<Array<Scalars['String']>>
    hash_contains?: InputMaybe<Scalars['String']>
    hash_contains_nocase?: InputMaybe<Scalars['String']>
    hash_not_contains?: InputMaybe<Scalars['String']>
    hash_not_contains_nocase?: InputMaybe<Scalars['String']>
    hash_starts_with?: InputMaybe<Scalars['String']>
    hash_starts_with_nocase?: InputMaybe<Scalars['String']>
    hash_not_starts_with?: InputMaybe<Scalars['String']>
    hash_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    hash_ends_with?: InputMaybe<Scalars['String']>
    hash_ends_with_nocase?: InputMaybe<Scalars['String']>
    hash_not_ends_with?: InputMaybe<Scalars['String']>
    hash_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    logIndex?: InputMaybe<Scalars['Int']>
    logIndex_not?: InputMaybe<Scalars['Int']>
    logIndex_gt?: InputMaybe<Scalars['Int']>
    logIndex_lt?: InputMaybe<Scalars['Int']>
    logIndex_gte?: InputMaybe<Scalars['Int']>
    logIndex_lte?: InputMaybe<Scalars['Int']>
    logIndex_in?: InputMaybe<Array<Scalars['Int']>>
    logIndex_not_in?: InputMaybe<Array<Scalars['Int']>>
    protocol?: InputMaybe<Scalars['String']>
    protocol_not?: InputMaybe<Scalars['String']>
    protocol_gt?: InputMaybe<Scalars['String']>
    protocol_lt?: InputMaybe<Scalars['String']>
    protocol_gte?: InputMaybe<Scalars['String']>
    protocol_lte?: InputMaybe<Scalars['String']>
    protocol_in?: InputMaybe<Array<Scalars['String']>>
    protocol_not_in?: InputMaybe<Array<Scalars['String']>>
    protocol_contains?: InputMaybe<Scalars['String']>
    protocol_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_not_contains?: InputMaybe<Scalars['String']>
    protocol_not_contains_nocase?: InputMaybe<Scalars['String']>
    protocol_starts_with?: InputMaybe<Scalars['String']>
    protocol_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_starts_with?: InputMaybe<Scalars['String']>
    protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    protocol_ends_with?: InputMaybe<Scalars['String']>
    protocol_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_not_ends_with?: InputMaybe<Scalars['String']>
    protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    protocol_?: InputMaybe<DexAmmProtocol_filter>
    to?: InputMaybe<Scalars['String']>
    to_not?: InputMaybe<Scalars['String']>
    to_gt?: InputMaybe<Scalars['String']>
    to_lt?: InputMaybe<Scalars['String']>
    to_gte?: InputMaybe<Scalars['String']>
    to_lte?: InputMaybe<Scalars['String']>
    to_in?: InputMaybe<Array<Scalars['String']>>
    to_not_in?: InputMaybe<Array<Scalars['String']>>
    to_contains?: InputMaybe<Scalars['String']>
    to_contains_nocase?: InputMaybe<Scalars['String']>
    to_not_contains?: InputMaybe<Scalars['String']>
    to_not_contains_nocase?: InputMaybe<Scalars['String']>
    to_starts_with?: InputMaybe<Scalars['String']>
    to_starts_with_nocase?: InputMaybe<Scalars['String']>
    to_not_starts_with?: InputMaybe<Scalars['String']>
    to_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    to_ends_with?: InputMaybe<Scalars['String']>
    to_ends_with_nocase?: InputMaybe<Scalars['String']>
    to_not_ends_with?: InputMaybe<Scalars['String']>
    to_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    from?: InputMaybe<Scalars['String']>
    from_not?: InputMaybe<Scalars['String']>
    from_gt?: InputMaybe<Scalars['String']>
    from_lt?: InputMaybe<Scalars['String']>
    from_gte?: InputMaybe<Scalars['String']>
    from_lte?: InputMaybe<Scalars['String']>
    from_in?: InputMaybe<Array<Scalars['String']>>
    from_not_in?: InputMaybe<Array<Scalars['String']>>
    from_contains?: InputMaybe<Scalars['String']>
    from_contains_nocase?: InputMaybe<Scalars['String']>
    from_not_contains?: InputMaybe<Scalars['String']>
    from_not_contains_nocase?: InputMaybe<Scalars['String']>
    from_starts_with?: InputMaybe<Scalars['String']>
    from_starts_with_nocase?: InputMaybe<Scalars['String']>
    from_not_starts_with?: InputMaybe<Scalars['String']>
    from_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    from_ends_with?: InputMaybe<Scalars['String']>
    from_ends_with_nocase?: InputMaybe<Scalars['String']>
    from_not_ends_with?: InputMaybe<Scalars['String']>
    from_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    blockNumber?: InputMaybe<Scalars['BigInt']>
    blockNumber_not?: InputMaybe<Scalars['BigInt']>
    blockNumber_gt?: InputMaybe<Scalars['BigInt']>
    blockNumber_lt?: InputMaybe<Scalars['BigInt']>
    blockNumber_gte?: InputMaybe<Scalars['BigInt']>
    blockNumber_lte?: InputMaybe<Scalars['BigInt']>
    blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokens?: InputMaybe<Array<Scalars['String']>>
    inputTokens_not?: InputMaybe<Array<Scalars['String']>>
    inputTokens_contains?: InputMaybe<Array<Scalars['String']>>
    inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    inputTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
    inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    inputTokens_?: InputMaybe<Token_filter>
    outputToken?: InputMaybe<Scalars['String']>
    outputToken_not?: InputMaybe<Scalars['String']>
    outputToken_gt?: InputMaybe<Scalars['String']>
    outputToken_lt?: InputMaybe<Scalars['String']>
    outputToken_gte?: InputMaybe<Scalars['String']>
    outputToken_lte?: InputMaybe<Scalars['String']>
    outputToken_in?: InputMaybe<Array<Scalars['String']>>
    outputToken_not_in?: InputMaybe<Array<Scalars['String']>>
    outputToken_contains?: InputMaybe<Scalars['String']>
    outputToken_contains_nocase?: InputMaybe<Scalars['String']>
    outputToken_not_contains?: InputMaybe<Scalars['String']>
    outputToken_not_contains_nocase?: InputMaybe<Scalars['String']>
    outputToken_starts_with?: InputMaybe<Scalars['String']>
    outputToken_starts_with_nocase?: InputMaybe<Scalars['String']>
    outputToken_not_starts_with?: InputMaybe<Scalars['String']>
    outputToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    outputToken_ends_with?: InputMaybe<Scalars['String']>
    outputToken_ends_with_nocase?: InputMaybe<Scalars['String']>
    outputToken_not_ends_with?: InputMaybe<Scalars['String']>
    outputToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    outputToken_?: InputMaybe<Token_filter>
    inputTokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>
    inputTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>
    outputTokenAmount?: InputMaybe<Scalars['BigInt']>
    outputTokenAmount_not?: InputMaybe<Scalars['BigInt']>
    outputTokenAmount_gt?: InputMaybe<Scalars['BigInt']>
    outputTokenAmount_lt?: InputMaybe<Scalars['BigInt']>
    outputTokenAmount_gte?: InputMaybe<Scalars['BigInt']>
    outputTokenAmount_lte?: InputMaybe<Scalars['BigInt']>
    outputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
    outputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    amountUSD?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    pool?: InputMaybe<Scalars['String']>
    pool_not?: InputMaybe<Scalars['String']>
    pool_gt?: InputMaybe<Scalars['String']>
    pool_lt?: InputMaybe<Scalars['String']>
    pool_gte?: InputMaybe<Scalars['String']>
    pool_lte?: InputMaybe<Scalars['String']>
    pool_in?: InputMaybe<Array<Scalars['String']>>
    pool_not_in?: InputMaybe<Array<Scalars['String']>>
    pool_contains?: InputMaybe<Scalars['String']>
    pool_contains_nocase?: InputMaybe<Scalars['String']>
    pool_not_contains?: InputMaybe<Scalars['String']>
    pool_not_contains_nocase?: InputMaybe<Scalars['String']>
    pool_starts_with?: InputMaybe<Scalars['String']>
    pool_starts_with_nocase?: InputMaybe<Scalars['String']>
    pool_not_starts_with?: InputMaybe<Scalars['String']>
    pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pool_ends_with?: InputMaybe<Scalars['String']>
    pool_ends_with_nocase?: InputMaybe<Scalars['String']>
    pool_not_ends_with?: InputMaybe<Scalars['String']>
    pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    pool_?: InputMaybe<LiquidityPool_filter>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Withdraw_orderBy =
    | 'id'
    | 'hash'
    | 'logIndex'
    | 'protocol'
    | 'to'
    | 'from'
    | 'blockNumber'
    | 'timestamp'
    | 'inputTokens'
    | 'outputToken'
    | 'inputTokenAmounts'
    | 'outputTokenAmount'
    | 'amountUSD'
    | 'pool'

  export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>
    /** The block number */
    number: Scalars['Int']
  }

  /** The type for the top-level _meta field */
  export type _Meta_ = {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     *
     */
    block: _Block_
    /** The deployment ID */
    deployment: Scalars['String']
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean']
  }

  export type _SubgraphErrorPolicy_ =
    /** Data will be returned even if the subgraph has indexing errors */
    | 'allow'
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    | 'deny'
}
export type QueryProtocolSdk = {
  /** null **/
  token: InContextSdkMethod<ProtocolTypes.Query['token'], ProtocolTypes.QuerytokenArgs, MeshContext>
  /** null **/
  tokens: InContextSdkMethod<ProtocolTypes.Query['tokens'], ProtocolTypes.QuerytokensArgs, MeshContext>
  /** null **/
  rewardToken: InContextSdkMethod<ProtocolTypes.Query['rewardToken'], ProtocolTypes.QueryrewardTokenArgs, MeshContext>
  /** null **/
  rewardTokens: InContextSdkMethod<
    ProtocolTypes.Query['rewardTokens'],
    ProtocolTypes.QueryrewardTokensArgs,
    MeshContext
  >
  /** null **/
  liquidityPoolFee: InContextSdkMethod<
    ProtocolTypes.Query['liquidityPoolFee'],
    ProtocolTypes.QueryliquidityPoolFeeArgs,
    MeshContext
  >
  /** null **/
  liquidityPoolFees: InContextSdkMethod<
    ProtocolTypes.Query['liquidityPoolFees'],
    ProtocolTypes.QueryliquidityPoolFeesArgs,
    MeshContext
  >
  /** null **/
  dexAmmProtocol: InContextSdkMethod<
    ProtocolTypes.Query['dexAmmProtocol'],
    ProtocolTypes.QuerydexAmmProtocolArgs,
    MeshContext
  >
  /** null **/
  dexAmmProtocols: InContextSdkMethod<
    ProtocolTypes.Query['dexAmmProtocols'],
    ProtocolTypes.QuerydexAmmProtocolsArgs,
    MeshContext
  >
  /** null **/
  usageMetricsDailySnapshot: InContextSdkMethod<
    ProtocolTypes.Query['usageMetricsDailySnapshot'],
    ProtocolTypes.QueryusageMetricsDailySnapshotArgs,
    MeshContext
  >
  /** null **/
  usageMetricsDailySnapshots: InContextSdkMethod<
    ProtocolTypes.Query['usageMetricsDailySnapshots'],
    ProtocolTypes.QueryusageMetricsDailySnapshotsArgs,
    MeshContext
  >
  /** null **/
  usageMetricsHourlySnapshot: InContextSdkMethod<
    ProtocolTypes.Query['usageMetricsHourlySnapshot'],
    ProtocolTypes.QueryusageMetricsHourlySnapshotArgs,
    MeshContext
  >
  /** null **/
  usageMetricsHourlySnapshots: InContextSdkMethod<
    ProtocolTypes.Query['usageMetricsHourlySnapshots'],
    ProtocolTypes.QueryusageMetricsHourlySnapshotsArgs,
    MeshContext
  >
  /** null **/
  financialsDailySnapshot: InContextSdkMethod<
    ProtocolTypes.Query['financialsDailySnapshot'],
    ProtocolTypes.QueryfinancialsDailySnapshotArgs,
    MeshContext
  >
  /** null **/
  financialsDailySnapshots: InContextSdkMethod<
    ProtocolTypes.Query['financialsDailySnapshots'],
    ProtocolTypes.QueryfinancialsDailySnapshotsArgs,
    MeshContext
  >
  /** null **/
  liquidityPool: InContextSdkMethod<
    ProtocolTypes.Query['liquidityPool'],
    ProtocolTypes.QueryliquidityPoolArgs,
    MeshContext
  >
  /** null **/
  liquidityPools: InContextSdkMethod<
    ProtocolTypes.Query['liquidityPools'],
    ProtocolTypes.QueryliquidityPoolsArgs,
    MeshContext
  >
  /** null **/
  liquidityPoolDailySnapshot: InContextSdkMethod<
    ProtocolTypes.Query['liquidityPoolDailySnapshot'],
    ProtocolTypes.QueryliquidityPoolDailySnapshotArgs,
    MeshContext
  >
  /** null **/
  liquidityPoolDailySnapshots: InContextSdkMethod<
    ProtocolTypes.Query['liquidityPoolDailySnapshots'],
    ProtocolTypes.QueryliquidityPoolDailySnapshotsArgs,
    MeshContext
  >
  /** null **/
  liquidityPoolHourlySnapshot: InContextSdkMethod<
    ProtocolTypes.Query['liquidityPoolHourlySnapshot'],
    ProtocolTypes.QueryliquidityPoolHourlySnapshotArgs,
    MeshContext
  >
  /** null **/
  liquidityPoolHourlySnapshots: InContextSdkMethod<
    ProtocolTypes.Query['liquidityPoolHourlySnapshots'],
    ProtocolTypes.QueryliquidityPoolHourlySnapshotsArgs,
    MeshContext
  >
  /** null **/
  deposit: InContextSdkMethod<ProtocolTypes.Query['deposit'], ProtocolTypes.QuerydepositArgs, MeshContext>
  /** null **/
  deposits: InContextSdkMethod<ProtocolTypes.Query['deposits'], ProtocolTypes.QuerydepositsArgs, MeshContext>
  /** null **/
  withdraw: InContextSdkMethod<ProtocolTypes.Query['withdraw'], ProtocolTypes.QuerywithdrawArgs, MeshContext>
  /** null **/
  withdraws: InContextSdkMethod<ProtocolTypes.Query['withdraws'], ProtocolTypes.QuerywithdrawsArgs, MeshContext>
  /** null **/
  swap: InContextSdkMethod<ProtocolTypes.Query['swap'], ProtocolTypes.QueryswapArgs, MeshContext>
  /** null **/
  swaps: InContextSdkMethod<ProtocolTypes.Query['swaps'], ProtocolTypes.QueryswapsArgs, MeshContext>
  /** null **/
  account: InContextSdkMethod<ProtocolTypes.Query['account'], ProtocolTypes.QueryaccountArgs, MeshContext>
  /** null **/
  accounts: InContextSdkMethod<ProtocolTypes.Query['accounts'], ProtocolTypes.QueryaccountsArgs, MeshContext>
  /** null **/
  activeAccount: InContextSdkMethod<
    ProtocolTypes.Query['activeAccount'],
    ProtocolTypes.QueryactiveAccountArgs,
    MeshContext
  >
  /** null **/
  activeAccounts: InContextSdkMethod<
    ProtocolTypes.Query['activeAccounts'],
    ProtocolTypes.QueryactiveAccountsArgs,
    MeshContext
  >
  /** null **/
  platform: InContextSdkMethod<ProtocolTypes.Query['platform'], ProtocolTypes.QueryplatformArgs, MeshContext>
  /** null **/
  platforms: InContextSdkMethod<ProtocolTypes.Query['platforms'], ProtocolTypes.QueryplatformsArgs, MeshContext>
  /** null **/
  registry: InContextSdkMethod<ProtocolTypes.Query['registry'], ProtocolTypes.QueryregistryArgs, MeshContext>
  /** null **/
  registries: InContextSdkMethod<ProtocolTypes.Query['registries'], ProtocolTypes.QueryregistriesArgs, MeshContext>
  /** null **/
  factory: InContextSdkMethod<ProtocolTypes.Query['factory'], ProtocolTypes.QueryfactoryArgs, MeshContext>
  /** null **/
  factories: InContextSdkMethod<ProtocolTypes.Query['factories'], ProtocolTypes.QueryfactoriesArgs, MeshContext>
  /** null **/
  basePool: InContextSdkMethod<ProtocolTypes.Query['basePool'], ProtocolTypes.QuerybasePoolArgs, MeshContext>
  /** null **/
  basePools: InContextSdkMethod<ProtocolTypes.Query['basePools'], ProtocolTypes.QuerybasePoolsArgs, MeshContext>
  /** null **/
  tokenSnapshot: InContextSdkMethod<
    ProtocolTypes.Query['tokenSnapshot'],
    ProtocolTypes.QuerytokenSnapshotArgs,
    MeshContext
  >
  /** null **/
  tokenSnapshots: InContextSdkMethod<
    ProtocolTypes.Query['tokenSnapshots'],
    ProtocolTypes.QuerytokenSnapshotsArgs,
    MeshContext
  >
  /** null **/
  gaugePool: InContextSdkMethod<ProtocolTypes.Query['gaugePool'], ProtocolTypes.QuerygaugePoolArgs, MeshContext>
  /** null **/
  gaugePools: InContextSdkMethod<ProtocolTypes.Query['gaugePools'], ProtocolTypes.QuerygaugePoolsArgs, MeshContext>
  /** null **/
  protocol: InContextSdkMethod<ProtocolTypes.Query['protocol'], ProtocolTypes.QueryprotocolArgs, MeshContext>
  /** null **/
  protocols: InContextSdkMethod<ProtocolTypes.Query['protocols'], ProtocolTypes.QueryprotocolsArgs, MeshContext>
  /** null **/
  event: InContextSdkMethod<ProtocolTypes.Query['event'], ProtocolTypes.QueryeventArgs, MeshContext>
  /** null **/
  events: InContextSdkMethod<ProtocolTypes.Query['events'], ProtocolTypes.QueryeventsArgs, MeshContext>
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<ProtocolTypes.Query['_meta'], ProtocolTypes.Query_metaArgs, MeshContext>
}

export type MutationProtocolSdk = {}

export type SubscriptionProtocolSdk = {
  /** null **/
  token: InContextSdkMethod<ProtocolTypes.Subscription['token'], ProtocolTypes.SubscriptiontokenArgs, MeshContext>
  /** null **/
  tokens: InContextSdkMethod<ProtocolTypes.Subscription['tokens'], ProtocolTypes.SubscriptiontokensArgs, MeshContext>
  /** null **/
  rewardToken: InContextSdkMethod<
    ProtocolTypes.Subscription['rewardToken'],
    ProtocolTypes.SubscriptionrewardTokenArgs,
    MeshContext
  >
  /** null **/
  rewardTokens: InContextSdkMethod<
    ProtocolTypes.Subscription['rewardTokens'],
    ProtocolTypes.SubscriptionrewardTokensArgs,
    MeshContext
  >
  /** null **/
  liquidityPoolFee: InContextSdkMethod<
    ProtocolTypes.Subscription['liquidityPoolFee'],
    ProtocolTypes.SubscriptionliquidityPoolFeeArgs,
    MeshContext
  >
  /** null **/
  liquidityPoolFees: InContextSdkMethod<
    ProtocolTypes.Subscription['liquidityPoolFees'],
    ProtocolTypes.SubscriptionliquidityPoolFeesArgs,
    MeshContext
  >
  /** null **/
  dexAmmProtocol: InContextSdkMethod<
    ProtocolTypes.Subscription['dexAmmProtocol'],
    ProtocolTypes.SubscriptiondexAmmProtocolArgs,
    MeshContext
  >
  /** null **/
  dexAmmProtocols: InContextSdkMethod<
    ProtocolTypes.Subscription['dexAmmProtocols'],
    ProtocolTypes.SubscriptiondexAmmProtocolsArgs,
    MeshContext
  >
  /** null **/
  usageMetricsDailySnapshot: InContextSdkMethod<
    ProtocolTypes.Subscription['usageMetricsDailySnapshot'],
    ProtocolTypes.SubscriptionusageMetricsDailySnapshotArgs,
    MeshContext
  >
  /** null **/
  usageMetricsDailySnapshots: InContextSdkMethod<
    ProtocolTypes.Subscription['usageMetricsDailySnapshots'],
    ProtocolTypes.SubscriptionusageMetricsDailySnapshotsArgs,
    MeshContext
  >
  /** null **/
  usageMetricsHourlySnapshot: InContextSdkMethod<
    ProtocolTypes.Subscription['usageMetricsHourlySnapshot'],
    ProtocolTypes.SubscriptionusageMetricsHourlySnapshotArgs,
    MeshContext
  >
  /** null **/
  usageMetricsHourlySnapshots: InContextSdkMethod<
    ProtocolTypes.Subscription['usageMetricsHourlySnapshots'],
    ProtocolTypes.SubscriptionusageMetricsHourlySnapshotsArgs,
    MeshContext
  >
  /** null **/
  financialsDailySnapshot: InContextSdkMethod<
    ProtocolTypes.Subscription['financialsDailySnapshot'],
    ProtocolTypes.SubscriptionfinancialsDailySnapshotArgs,
    MeshContext
  >
  /** null **/
  financialsDailySnapshots: InContextSdkMethod<
    ProtocolTypes.Subscription['financialsDailySnapshots'],
    ProtocolTypes.SubscriptionfinancialsDailySnapshotsArgs,
    MeshContext
  >
  /** null **/
  liquidityPool: InContextSdkMethod<
    ProtocolTypes.Subscription['liquidityPool'],
    ProtocolTypes.SubscriptionliquidityPoolArgs,
    MeshContext
  >
  /** null **/
  liquidityPools: InContextSdkMethod<
    ProtocolTypes.Subscription['liquidityPools'],
    ProtocolTypes.SubscriptionliquidityPoolsArgs,
    MeshContext
  >
  /** null **/
  liquidityPoolDailySnapshot: InContextSdkMethod<
    ProtocolTypes.Subscription['liquidityPoolDailySnapshot'],
    ProtocolTypes.SubscriptionliquidityPoolDailySnapshotArgs,
    MeshContext
  >
  /** null **/
  liquidityPoolDailySnapshots: InContextSdkMethod<
    ProtocolTypes.Subscription['liquidityPoolDailySnapshots'],
    ProtocolTypes.SubscriptionliquidityPoolDailySnapshotsArgs,
    MeshContext
  >
  /** null **/
  liquidityPoolHourlySnapshot: InContextSdkMethod<
    ProtocolTypes.Subscription['liquidityPoolHourlySnapshot'],
    ProtocolTypes.SubscriptionliquidityPoolHourlySnapshotArgs,
    MeshContext
  >
  /** null **/
  liquidityPoolHourlySnapshots: InContextSdkMethod<
    ProtocolTypes.Subscription['liquidityPoolHourlySnapshots'],
    ProtocolTypes.SubscriptionliquidityPoolHourlySnapshotsArgs,
    MeshContext
  >
  /** null **/
  deposit: InContextSdkMethod<ProtocolTypes.Subscription['deposit'], ProtocolTypes.SubscriptiondepositArgs, MeshContext>
  /** null **/
  deposits: InContextSdkMethod<
    ProtocolTypes.Subscription['deposits'],
    ProtocolTypes.SubscriptiondepositsArgs,
    MeshContext
  >
  /** null **/
  withdraw: InContextSdkMethod<
    ProtocolTypes.Subscription['withdraw'],
    ProtocolTypes.SubscriptionwithdrawArgs,
    MeshContext
  >
  /** null **/
  withdraws: InContextSdkMethod<
    ProtocolTypes.Subscription['withdraws'],
    ProtocolTypes.SubscriptionwithdrawsArgs,
    MeshContext
  >
  /** null **/
  swap: InContextSdkMethod<ProtocolTypes.Subscription['swap'], ProtocolTypes.SubscriptionswapArgs, MeshContext>
  /** null **/
  swaps: InContextSdkMethod<ProtocolTypes.Subscription['swaps'], ProtocolTypes.SubscriptionswapsArgs, MeshContext>
  /** null **/
  account: InContextSdkMethod<ProtocolTypes.Subscription['account'], ProtocolTypes.SubscriptionaccountArgs, MeshContext>
  /** null **/
  accounts: InContextSdkMethod<
    ProtocolTypes.Subscription['accounts'],
    ProtocolTypes.SubscriptionaccountsArgs,
    MeshContext
  >
  /** null **/
  activeAccount: InContextSdkMethod<
    ProtocolTypes.Subscription['activeAccount'],
    ProtocolTypes.SubscriptionactiveAccountArgs,
    MeshContext
  >
  /** null **/
  activeAccounts: InContextSdkMethod<
    ProtocolTypes.Subscription['activeAccounts'],
    ProtocolTypes.SubscriptionactiveAccountsArgs,
    MeshContext
  >
  /** null **/
  platform: InContextSdkMethod<
    ProtocolTypes.Subscription['platform'],
    ProtocolTypes.SubscriptionplatformArgs,
    MeshContext
  >
  /** null **/
  platforms: InContextSdkMethod<
    ProtocolTypes.Subscription['platforms'],
    ProtocolTypes.SubscriptionplatformsArgs,
    MeshContext
  >
  /** null **/
  registry: InContextSdkMethod<
    ProtocolTypes.Subscription['registry'],
    ProtocolTypes.SubscriptionregistryArgs,
    MeshContext
  >
  /** null **/
  registries: InContextSdkMethod<
    ProtocolTypes.Subscription['registries'],
    ProtocolTypes.SubscriptionregistriesArgs,
    MeshContext
  >
  /** null **/
  factory: InContextSdkMethod<ProtocolTypes.Subscription['factory'], ProtocolTypes.SubscriptionfactoryArgs, MeshContext>
  /** null **/
  factories: InContextSdkMethod<
    ProtocolTypes.Subscription['factories'],
    ProtocolTypes.SubscriptionfactoriesArgs,
    MeshContext
  >
  /** null **/
  basePool: InContextSdkMethod<
    ProtocolTypes.Subscription['basePool'],
    ProtocolTypes.SubscriptionbasePoolArgs,
    MeshContext
  >
  /** null **/
  basePools: InContextSdkMethod<
    ProtocolTypes.Subscription['basePools'],
    ProtocolTypes.SubscriptionbasePoolsArgs,
    MeshContext
  >
  /** null **/
  tokenSnapshot: InContextSdkMethod<
    ProtocolTypes.Subscription['tokenSnapshot'],
    ProtocolTypes.SubscriptiontokenSnapshotArgs,
    MeshContext
  >
  /** null **/
  tokenSnapshots: InContextSdkMethod<
    ProtocolTypes.Subscription['tokenSnapshots'],
    ProtocolTypes.SubscriptiontokenSnapshotsArgs,
    MeshContext
  >
  /** null **/
  gaugePool: InContextSdkMethod<
    ProtocolTypes.Subscription['gaugePool'],
    ProtocolTypes.SubscriptiongaugePoolArgs,
    MeshContext
  >
  /** null **/
  gaugePools: InContextSdkMethod<
    ProtocolTypes.Subscription['gaugePools'],
    ProtocolTypes.SubscriptiongaugePoolsArgs,
    MeshContext
  >
  /** null **/
  protocol: InContextSdkMethod<
    ProtocolTypes.Subscription['protocol'],
    ProtocolTypes.SubscriptionprotocolArgs,
    MeshContext
  >
  /** null **/
  protocols: InContextSdkMethod<
    ProtocolTypes.Subscription['protocols'],
    ProtocolTypes.SubscriptionprotocolsArgs,
    MeshContext
  >
  /** null **/
  event: InContextSdkMethod<ProtocolTypes.Subscription['event'], ProtocolTypes.SubscriptioneventArgs, MeshContext>
  /** null **/
  events: InContextSdkMethod<ProtocolTypes.Subscription['events'], ProtocolTypes.SubscriptioneventsArgs, MeshContext>
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<ProtocolTypes.Subscription['_meta'], ProtocolTypes.Subscription_metaArgs, MeshContext>
}

export type ProtocolContext = {
  ['Protocol']: { Query: QueryProtocolSdk; Mutation: MutationProtocolSdk; Subscription: SubscriptionProtocolSdk }
  ['protocolName']: Scalars['ID']
}

export type MeshContext = ProtocolContext & BaseMeshContext

import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime'
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store'
import { path as pathModule } from '@graphql-mesh/cross-helpers'

const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..')

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId)
    .split('\\')
    .join('/')
    .replace(baseDir + '/', '')
  switch (relativeModuleId) {
    case '.graphclient/sources/Protocol/introspectionSchema':
      return import('./sources/Protocol/introspectionSchema')

    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`))
  }
}

const rootStore = new MeshStore(
  '.graphclient',
  new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: 'ts',
  }),
  {
    readonly: true,
    validate: false,
  },
)

import type { GetMeshOptions } from '@graphql-mesh/runtime'
import type { YamlConfig } from '@graphql-mesh/types'
import { PubSub } from '@graphql-mesh/utils'
import MeshCache from '@graphql-mesh/cache-localforage'
import { fetchFactory } from 'fetchache'
import { fetch, Request, Response } from 'cross-undici-fetch'
import { DefaultLogger } from '@graphql-mesh/utils'
import GraphqlHandler from '@graphql-mesh/graphql'
import { parse } from 'graphql'
import BareMerger from '@graphql-mesh/merger-bare'
import { resolveAdditionalResolversWithoutImport } from '@graphql-mesh/utils'
import { printWithCache } from '@graphql-mesh/utils'
export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
  const pubsub = new PubSub()
  const cache = new (MeshCache as any)({
    ...({} as any),
    importFn,
    store: rootStore.child('cache'),
    pubsub,
  } as any)
  const fetchFn = fetchFactory({ cache, fetch, Request, Response })
  const sourcesStore = rootStore.child('sources')
  const logger = new DefaultLogger('GraphClient')
  const sources = []
  const transforms = []
  const additionalEnvelopPlugins = []
  const protocolTransforms = []
  const protocolHandler = new GraphqlHandler({
    name: 'Protocol',
    config: {
      endpoint: 'https://api.thegraph.com/subgraphs/name/messari/{context.protocolName:curve-finance-ethereum}',
    },
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child('Protocol'),
    logger: logger.child('Protocol'),
    importFn,
    fetchFn,
  })
  sources[0] = {
    name: 'Protocol',
    handler: protocolHandler,
    transforms: protocolTransforms,
  }
  const additionalTypeDefs = [
    parse(
      'extend type LiquidityPool {\n  protocolName: String\n}\n\nextend type Query {\n  crossLiquidityPools(first: Int!, protocolNames: [String!]!, orderBy: BigDecimal!, orderDirection: OrderDirection!, where: LiquidityPool_filter!): [LiquidityPool!]!\n}\n\nextend type LiquidityPoolDailySnapshot {\n  FeesUSD: BigDecimal\n}\n\nextend type LiquidityPoolDailySnapshot {\n  TokenFeesUSD: BigDecimal\n}\n\nextend type LiquidityPoolDailySnapshot {\n  TokenFeesRaw: BigDecimal\n}\n\nextend type LiquidityPoolDailySnapshot {\n  RewardsPerToken: BigDecimal\n}\n\nextend type LiquidityPoolDailySnapshot {\n  RewardsROI: BigDecimal\n}\n\nextend type LiquidityPoolDailySnapshot {\n  FeesROI: BigDecimal\n}\n\nextend type LiquidityPoolDailySnapshot {\n  BlockTimestamp: String\n}\n\nextend type LiquidityPoolDailySnapshot {\n  DateInterval: String\n}',
    ),
  ] as any[]
  const merger = new (BareMerger as any)({
    cache,
    pubsub,
    logger: logger.child('bareMerger'),
    store: rootStore.child('bareMerger'),
  })
  const additionalResolvers = await Promise.all([
    import('../src/resolvers-daily.ts').then((m) => m.resolvers || m.default || m),
  ])

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
        {
          document: CrossRebasesExampleDocument,
          get rawSDL() {
            return printWithCache(CrossRebasesExampleDocument)
          },
          location: 'CrossRebasesExampleDocument.graphql',
        },
      ]
    },
  }
}

let meshInstance$: Promise<MeshInstance<MeshContext>>

export function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions()
      .then((meshOptions) => getMesh<MeshContext>(meshOptions))
      .then((mesh) => {
        const id$ = mesh.pubsub.subscribe('destroy', () => {
          meshInstance$ = undefined
          id$.then((id) => mesh.pubsub.unsubscribe(id)).catch((err) => console.error(err))
        })
        return mesh
      })
  }
  return meshInstance$
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args))

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args))
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext))
  return getSdk<TOperationContext>((...args) => sdkRequester$.then((sdkRequester) => sdkRequester(...args)))
}
export type CrossRebasesExampleQueryVariables = Exact<{
  protocolNames: Array<Scalars['String']> | Scalars['String']
  tokenIDs: Array<Scalars['String']> | Scalars['String']
}>

export type CrossRebasesExampleQuery = {
  crossLiquidityPools: Array<
    Pick<LiquidityPool, 'protocolName' | 'id' | 'name'> & {
      inputTokens: Array<Pick<Token, 'decimals' | 'id' | 'symbol'>>
      rewardTokens: Array<{ token: Pick<Token, 'symbol' | 'id' | 'decimals'> }>
      dailySnapshots: Array<
        Pick<
          LiquidityPoolDailySnapshot,
          | 'blockNumber'
          | 'timestamp'
          | 'BlockTimestamp'
          | 'DateInterval'
          | 'dailyVolumeByTokenAmount'
          | 'dailyVolumeByTokenUSD'
          | 'dailyVolumeUSD'
          | 'inputTokenBalances'
          | 'inputTokenWeights'
          | 'outputTokenPriceUSD'
          | 'outputTokenSupply'
          | 'totalValueLockedUSD'
          | 'stakedOutputTokenAmount'
          | 'FeesUSD'
          | 'TokenFeesUSD'
          | 'TokenFeesRaw'
          | 'RewardsPerToken'
          | 'RewardsROI'
          | 'FeesROI'
        > & { pool: { fees: Array<Pick<LiquidityPoolFee, 'feePercentage' | 'feeType' | 'id'>> } }
      >
    }
  >
}

export const CrossRebasesExampleDocument = gql`
  query CrossRebasesExample($protocolNames: [String!]!, $tokenIDs: [String!]!) {
    crossLiquidityPools(
      first: 3
      protocolNames: $protocolNames
      orderBy: totalValueLockedUSD
      orderDirection: desc
      where: { inputTokens_contains: $tokenIDs }
    ) {
      protocolName
      id
      name
      inputTokens {
        decimals
        id
        symbol
      }
      rewardTokens {
        token {
          symbol
          id
          decimals
        }
      }
      dailySnapshots(first: 1, orderBy: timestamp, orderDirection: desc) {
        blockNumber
        timestamp
        BlockTimestamp
        DateInterval
        dailyVolumeByTokenAmount
        dailyVolumeByTokenUSD
        dailyVolumeUSD
        inputTokenBalances
        inputTokenWeights
        outputTokenPriceUSD
        outputTokenSupply
        totalValueLockedUSD
        stakedOutputTokenAmount
        FeesUSD
        TokenFeesUSD
        TokenFeesRaw
        RewardsPerToken
        RewardsROI
        FeesROI
        pool {
          fees {
            feePercentage
            feeType
            id
          }
        }
      }
    }
  }
` as unknown as DocumentNode<CrossRebasesExampleQuery, CrossRebasesExampleQueryVariables>

export type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    CrossRebasesExample(variables: CrossRebasesExampleQueryVariables, options?: C): Promise<CrossRebasesExampleQuery> {
      return requester<CrossRebasesExampleQuery, CrossRebasesExampleQueryVariables>(
        CrossRebasesExampleDocument,
        variables,
        options,
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
