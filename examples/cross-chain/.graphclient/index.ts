// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
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

export type Query = {
  Chain2_uniswapFactory?: Maybe<UniswapFactory>
  Chain2_uniswapFactories: Array<UniswapFactory>
  Chain2_token?: Maybe<Token>
  Chain2_tokens: Array<Token>
  Chain2_pair?: Maybe<Pair>
  Chain2_pairs: Array<Pair>
  Chain2_user?: Maybe<User>
  Chain2_users: Array<User>
  Chain2_liquidityPosition?: Maybe<LiquidityPosition>
  Chain2_liquidityPositions: Array<LiquidityPosition>
  Chain2_liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>
  Chain2_liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>
  Chain2_transaction?: Maybe<Transaction>
  Chain2_transactions: Array<Transaction>
  Chain2_mint?: Maybe<Mint>
  Chain2_mints: Array<Mint>
  Chain2_burn?: Maybe<Burn>
  Chain2_burns: Array<Burn>
  Chain2_swap?: Maybe<Swap>
  Chain2_swaps: Array<Swap>
  Chain2_bundle?: Maybe<Bundle>
  Chain2_bundles: Array<Bundle>
  Chain2_uniswapDayData?: Maybe<UniswapDayData>
  Chain2_uniswapDayDatas: Array<UniswapDayData>
  Chain2_pairHourData?: Maybe<PairHourData>
  Chain2_pairHourDatas: Array<PairHourData>
  Chain2_pairDayData?: Maybe<PairDayData>
  Chain2_pairDayDatas: Array<PairDayData>
  Chain2_tokenDayData?: Maybe<TokenDayData>
  Chain2_tokenDayDatas: Array<TokenDayData>
  /** Access to subgraph metadata */
  Chain2__meta?: Maybe<_Meta_>
  Chain1_uniswapFactory?: Maybe<UniswapFactory>
  Chain1_uniswapFactories: Array<UniswapFactory>
  Chain1_token?: Maybe<Token>
  Chain1_tokens: Array<Token>
  Chain1_pair?: Maybe<Pair>
  Chain1_pairs: Array<Pair>
  Chain1_user?: Maybe<User>
  Chain1_users: Array<User>
  Chain1_liquidityPosition?: Maybe<LiquidityPosition>
  Chain1_liquidityPositions: Array<LiquidityPosition>
  Chain1_liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>
  Chain1_liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>
  Chain1_transaction?: Maybe<Transaction>
  Chain1_transactions: Array<Transaction>
  Chain1_mint?: Maybe<Mint>
  Chain1_mints: Array<Mint>
  Chain1_burn?: Maybe<Burn>
  Chain1_burns: Array<Burn>
  Chain1_swap?: Maybe<Swap>
  Chain1_swaps: Array<Swap>
  Chain1_bundle?: Maybe<Bundle>
  Chain1_bundles: Array<Bundle>
  Chain1_uniswapDayData?: Maybe<UniswapDayData>
  Chain1_uniswapDayDatas: Array<UniswapDayData>
  Chain1_pairHourData?: Maybe<PairHourData>
  Chain1_pairHourDatas: Array<PairHourData>
  Chain1_pairDayData?: Maybe<PairDayData>
  Chain1_pairDayDatas: Array<PairDayData>
  Chain1_tokenDayData?: Maybe<TokenDayData>
  Chain1_tokenDayDatas: Array<TokenDayData>
  /** Access to subgraph metadata */
  Chain1__meta?: Maybe<_Meta_>
  pairs: Array<Pair>
}

export type QueryChain2_uniswapFactoryArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_uniswapFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UniswapFactory_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UniswapFactory_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_tokenArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_pairArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_pairsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Pair_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Pair_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_userArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_liquidityPositionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_liquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPosition_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPosition_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_liquidityPositionSnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_liquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPositionSnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_transactionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Transaction_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Transaction_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_mintArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Mint_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Mint_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_burnArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Burn_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Burn_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_swapArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Swap_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Swap_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_bundleArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Bundle_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Bundle_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_uniswapDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_uniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UniswapDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UniswapDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_pairHourDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_pairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairHourData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairHourData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_pairDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_pairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_tokenDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TokenDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TokenDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain2__metaArgs = {
  block?: InputMaybe<Block_height>
}

export type QueryChain1_uniswapFactoryArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_uniswapFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UniswapFactory_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UniswapFactory_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_tokenArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_pairArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_pairsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Pair_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Pair_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_userArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_liquidityPositionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_liquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPosition_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPosition_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_liquidityPositionSnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_liquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPositionSnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_transactionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Transaction_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Transaction_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_mintArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Mint_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Mint_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_burnArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Burn_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Burn_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_swapArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Swap_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Swap_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_bundleArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Bundle_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Bundle_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_uniswapDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_uniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UniswapDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UniswapDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_pairHourDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_pairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairHourData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairHourData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_pairDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_pairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_tokenDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TokenDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TokenDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryChain1__metaArgs = {
  block?: InputMaybe<Block_height>
}

export type QuerypairsArgs = {
  first?: InputMaybe<Scalars['Int']>
}

export type Subscription = {
  Chain2_uniswapFactory?: Maybe<UniswapFactory>
  Chain2_uniswapFactories: Array<UniswapFactory>
  Chain2_token?: Maybe<Token>
  Chain2_tokens: Array<Token>
  Chain2_pair?: Maybe<Pair>
  Chain2_pairs: Array<Pair>
  Chain2_user?: Maybe<User>
  Chain2_users: Array<User>
  Chain2_liquidityPosition?: Maybe<LiquidityPosition>
  Chain2_liquidityPositions: Array<LiquidityPosition>
  Chain2_liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>
  Chain2_liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>
  Chain2_transaction?: Maybe<Transaction>
  Chain2_transactions: Array<Transaction>
  Chain2_mint?: Maybe<Mint>
  Chain2_mints: Array<Mint>
  Chain2_burn?: Maybe<Burn>
  Chain2_burns: Array<Burn>
  Chain2_swap?: Maybe<Swap>
  Chain2_swaps: Array<Swap>
  Chain2_bundle?: Maybe<Bundle>
  Chain2_bundles: Array<Bundle>
  Chain2_uniswapDayData?: Maybe<UniswapDayData>
  Chain2_uniswapDayDatas: Array<UniswapDayData>
  Chain2_pairHourData?: Maybe<PairHourData>
  Chain2_pairHourDatas: Array<PairHourData>
  Chain2_pairDayData?: Maybe<PairDayData>
  Chain2_pairDayDatas: Array<PairDayData>
  Chain2_tokenDayData?: Maybe<TokenDayData>
  Chain2_tokenDayDatas: Array<TokenDayData>
  /** Access to subgraph metadata */
  Chain2__meta?: Maybe<_Meta_>
  Chain1_uniswapFactory?: Maybe<UniswapFactory>
  Chain1_uniswapFactories: Array<UniswapFactory>
  Chain1_token?: Maybe<Token>
  Chain1_tokens: Array<Token>
  Chain1_pair?: Maybe<Pair>
  Chain1_pairs: Array<Pair>
  Chain1_user?: Maybe<User>
  Chain1_users: Array<User>
  Chain1_liquidityPosition?: Maybe<LiquidityPosition>
  Chain1_liquidityPositions: Array<LiquidityPosition>
  Chain1_liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>
  Chain1_liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>
  Chain1_transaction?: Maybe<Transaction>
  Chain1_transactions: Array<Transaction>
  Chain1_mint?: Maybe<Mint>
  Chain1_mints: Array<Mint>
  Chain1_burn?: Maybe<Burn>
  Chain1_burns: Array<Burn>
  Chain1_swap?: Maybe<Swap>
  Chain1_swaps: Array<Swap>
  Chain1_bundle?: Maybe<Bundle>
  Chain1_bundles: Array<Bundle>
  Chain1_uniswapDayData?: Maybe<UniswapDayData>
  Chain1_uniswapDayDatas: Array<UniswapDayData>
  Chain1_pairHourData?: Maybe<PairHourData>
  Chain1_pairHourDatas: Array<PairHourData>
  Chain1_pairDayData?: Maybe<PairDayData>
  Chain1_pairDayDatas: Array<PairDayData>
  Chain1_tokenDayData?: Maybe<TokenDayData>
  Chain1_tokenDayDatas: Array<TokenDayData>
  /** Access to subgraph metadata */
  Chain1__meta?: Maybe<_Meta_>
}

export type SubscriptionChain2_uniswapFactoryArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_uniswapFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UniswapFactory_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UniswapFactory_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_tokenArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_pairArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_pairsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Pair_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Pair_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_userArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_liquidityPositionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_liquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPosition_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPosition_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_liquidityPositionSnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_liquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPositionSnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_transactionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Transaction_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Transaction_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_mintArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Mint_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Mint_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_burnArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Burn_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Burn_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_swapArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Swap_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Swap_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_bundleArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Bundle_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Bundle_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_uniswapDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_uniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UniswapDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UniswapDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_pairHourDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_pairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairHourData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairHourData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_pairDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_pairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_tokenDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TokenDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TokenDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain2__metaArgs = {
  block?: InputMaybe<Block_height>
}

export type SubscriptionChain1_uniswapFactoryArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_uniswapFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UniswapFactory_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UniswapFactory_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_tokenArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Token_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Token_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_pairArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_pairsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Pair_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Pair_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_userArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_usersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_liquidityPositionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_liquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPosition_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPosition_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_liquidityPositionSnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_liquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPositionSnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_transactionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_transactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Transaction_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Transaction_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_mintArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_mintsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Mint_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Mint_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_burnArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_burnsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Burn_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Burn_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_swapArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Swap_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Swap_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_bundleArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_bundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Bundle_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Bundle_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_uniswapDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_uniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UniswapDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UniswapDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_pairHourDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_pairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairHourData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairHourData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_pairDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_pairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_tokenDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1_tokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TokenDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TokenDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionChain1__metaArgs = {
  block?: InputMaybe<Block_height>
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int']
}

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>
  number?: InputMaybe<Scalars['Int']>
  number_gte?: InputMaybe<Scalars['Int']>
}

export type Bundle = {
  id: Scalars['ID']
  ethPrice: Scalars['BigDecimal']
}

export type Bundle_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  ethPrice?: InputMaybe<Scalars['BigDecimal']>
  ethPrice_not?: InputMaybe<Scalars['BigDecimal']>
  ethPrice_gt?: InputMaybe<Scalars['BigDecimal']>
  ethPrice_lt?: InputMaybe<Scalars['BigDecimal']>
  ethPrice_gte?: InputMaybe<Scalars['BigDecimal']>
  ethPrice_lte?: InputMaybe<Scalars['BigDecimal']>
  ethPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  ethPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Bundle_orderBy = 'id' | 'ethPrice'

export type Burn = {
  id: Scalars['ID']
  transaction: Transaction
  timestamp: Scalars['BigInt']
  pair: Pair
  liquidity: Scalars['BigDecimal']
  sender?: Maybe<Scalars['Bytes']>
  amount0?: Maybe<Scalars['BigDecimal']>
  amount1?: Maybe<Scalars['BigDecimal']>
  to?: Maybe<Scalars['Bytes']>
  logIndex?: Maybe<Scalars['BigInt']>
  amountUSD?: Maybe<Scalars['BigDecimal']>
  needsComplete: Scalars['Boolean']
  feeTo?: Maybe<Scalars['Bytes']>
  feeLiquidity?: Maybe<Scalars['BigDecimal']>
}

export type Burn_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  transaction?: InputMaybe<Scalars['String']>
  transaction_not?: InputMaybe<Scalars['String']>
  transaction_gt?: InputMaybe<Scalars['String']>
  transaction_lt?: InputMaybe<Scalars['String']>
  transaction_gte?: InputMaybe<Scalars['String']>
  transaction_lte?: InputMaybe<Scalars['String']>
  transaction_in?: InputMaybe<Array<Scalars['String']>>
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>
  transaction_contains?: InputMaybe<Scalars['String']>
  transaction_contains_nocase?: InputMaybe<Scalars['String']>
  transaction_not_contains?: InputMaybe<Scalars['String']>
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>
  transaction_starts_with?: InputMaybe<Scalars['String']>
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>
  transaction_not_starts_with?: InputMaybe<Scalars['String']>
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  transaction_ends_with?: InputMaybe<Scalars['String']>
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>
  transaction_not_ends_with?: InputMaybe<Scalars['String']>
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  pair?: InputMaybe<Scalars['String']>
  pair_not?: InputMaybe<Scalars['String']>
  pair_gt?: InputMaybe<Scalars['String']>
  pair_lt?: InputMaybe<Scalars['String']>
  pair_gte?: InputMaybe<Scalars['String']>
  pair_lte?: InputMaybe<Scalars['String']>
  pair_in?: InputMaybe<Array<Scalars['String']>>
  pair_not_in?: InputMaybe<Array<Scalars['String']>>
  pair_contains?: InputMaybe<Scalars['String']>
  pair_contains_nocase?: InputMaybe<Scalars['String']>
  pair_not_contains?: InputMaybe<Scalars['String']>
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>
  pair_starts_with?: InputMaybe<Scalars['String']>
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>
  pair_not_starts_with?: InputMaybe<Scalars['String']>
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  pair_ends_with?: InputMaybe<Scalars['String']>
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>
  pair_not_ends_with?: InputMaybe<Scalars['String']>
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  liquidity?: InputMaybe<Scalars['BigDecimal']>
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  sender?: InputMaybe<Scalars['Bytes']>
  sender_not?: InputMaybe<Scalars['Bytes']>
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  sender_contains?: InputMaybe<Scalars['Bytes']>
  sender_not_contains?: InputMaybe<Scalars['Bytes']>
  amount0?: InputMaybe<Scalars['BigDecimal']>
  amount0_not?: InputMaybe<Scalars['BigDecimal']>
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount1?: InputMaybe<Scalars['BigDecimal']>
  amount1_not?: InputMaybe<Scalars['BigDecimal']>
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  to?: InputMaybe<Scalars['Bytes']>
  to_not?: InputMaybe<Scalars['Bytes']>
  to_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_contains?: InputMaybe<Scalars['Bytes']>
  to_not_contains?: InputMaybe<Scalars['Bytes']>
  logIndex?: InputMaybe<Scalars['BigInt']>
  logIndex_not?: InputMaybe<Scalars['BigInt']>
  logIndex_gt?: InputMaybe<Scalars['BigInt']>
  logIndex_lt?: InputMaybe<Scalars['BigInt']>
  logIndex_gte?: InputMaybe<Scalars['BigInt']>
  logIndex_lte?: InputMaybe<Scalars['BigInt']>
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  amountUSD?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  needsComplete?: InputMaybe<Scalars['Boolean']>
  needsComplete_not?: InputMaybe<Scalars['Boolean']>
  needsComplete_in?: InputMaybe<Array<Scalars['Boolean']>>
  needsComplete_not_in?: InputMaybe<Array<Scalars['Boolean']>>
  feeTo?: InputMaybe<Scalars['Bytes']>
  feeTo_not?: InputMaybe<Scalars['Bytes']>
  feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>
  feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  feeTo_contains?: InputMaybe<Scalars['Bytes']>
  feeTo_not_contains?: InputMaybe<Scalars['Bytes']>
  feeLiquidity?: InputMaybe<Scalars['BigDecimal']>
  feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>
  feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>
  feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>
  feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>
  feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>
  feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Burn_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pair'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'to'
  | 'logIndex'
  | 'amountUSD'
  | 'needsComplete'
  | 'feeTo'
  | 'feeLiquidity'

export type LiquidityPosition = {
  id: Scalars['ID']
  user: User
  pair: Pair
  liquidityTokenBalance: Scalars['BigDecimal']
}

export type LiquidityPositionSnapshot = {
  id: Scalars['ID']
  liquidityPosition: LiquidityPosition
  timestamp: Scalars['Int']
  block: Scalars['Int']
  user: User
  pair: Pair
  token0PriceUSD: Scalars['BigDecimal']
  token1PriceUSD: Scalars['BigDecimal']
  reserve0: Scalars['BigDecimal']
  reserve1: Scalars['BigDecimal']
  reserveUSD: Scalars['BigDecimal']
  liquidityTokenTotalSupply: Scalars['BigDecimal']
  liquidityTokenBalance: Scalars['BigDecimal']
}

export type LiquidityPositionSnapshot_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  liquidityPosition?: InputMaybe<Scalars['String']>
  liquidityPosition_not?: InputMaybe<Scalars['String']>
  liquidityPosition_gt?: InputMaybe<Scalars['String']>
  liquidityPosition_lt?: InputMaybe<Scalars['String']>
  liquidityPosition_gte?: InputMaybe<Scalars['String']>
  liquidityPosition_lte?: InputMaybe<Scalars['String']>
  liquidityPosition_in?: InputMaybe<Array<Scalars['String']>>
  liquidityPosition_not_in?: InputMaybe<Array<Scalars['String']>>
  liquidityPosition_contains?: InputMaybe<Scalars['String']>
  liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']>
  liquidityPosition_not_contains?: InputMaybe<Scalars['String']>
  liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']>
  liquidityPosition_starts_with?: InputMaybe<Scalars['String']>
  liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']>
  liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>
  liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  liquidityPosition_ends_with?: InputMaybe<Scalars['String']>
  liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']>
  liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>
  liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  timestamp?: InputMaybe<Scalars['Int']>
  timestamp_not?: InputMaybe<Scalars['Int']>
  timestamp_gt?: InputMaybe<Scalars['Int']>
  timestamp_lt?: InputMaybe<Scalars['Int']>
  timestamp_gte?: InputMaybe<Scalars['Int']>
  timestamp_lte?: InputMaybe<Scalars['Int']>
  timestamp_in?: InputMaybe<Array<Scalars['Int']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>
  block?: InputMaybe<Scalars['Int']>
  block_not?: InputMaybe<Scalars['Int']>
  block_gt?: InputMaybe<Scalars['Int']>
  block_lt?: InputMaybe<Scalars['Int']>
  block_gte?: InputMaybe<Scalars['Int']>
  block_lte?: InputMaybe<Scalars['Int']>
  block_in?: InputMaybe<Array<Scalars['Int']>>
  block_not_in?: InputMaybe<Array<Scalars['Int']>>
  user?: InputMaybe<Scalars['String']>
  user_not?: InputMaybe<Scalars['String']>
  user_gt?: InputMaybe<Scalars['String']>
  user_lt?: InputMaybe<Scalars['String']>
  user_gte?: InputMaybe<Scalars['String']>
  user_lte?: InputMaybe<Scalars['String']>
  user_in?: InputMaybe<Array<Scalars['String']>>
  user_not_in?: InputMaybe<Array<Scalars['String']>>
  user_contains?: InputMaybe<Scalars['String']>
  user_contains_nocase?: InputMaybe<Scalars['String']>
  user_not_contains?: InputMaybe<Scalars['String']>
  user_not_contains_nocase?: InputMaybe<Scalars['String']>
  user_starts_with?: InputMaybe<Scalars['String']>
  user_starts_with_nocase?: InputMaybe<Scalars['String']>
  user_not_starts_with?: InputMaybe<Scalars['String']>
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  user_ends_with?: InputMaybe<Scalars['String']>
  user_ends_with_nocase?: InputMaybe<Scalars['String']>
  user_not_ends_with?: InputMaybe<Scalars['String']>
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  pair?: InputMaybe<Scalars['String']>
  pair_not?: InputMaybe<Scalars['String']>
  pair_gt?: InputMaybe<Scalars['String']>
  pair_lt?: InputMaybe<Scalars['String']>
  pair_gte?: InputMaybe<Scalars['String']>
  pair_lte?: InputMaybe<Scalars['String']>
  pair_in?: InputMaybe<Array<Scalars['String']>>
  pair_not_in?: InputMaybe<Array<Scalars['String']>>
  pair_contains?: InputMaybe<Scalars['String']>
  pair_contains_nocase?: InputMaybe<Scalars['String']>
  pair_not_contains?: InputMaybe<Scalars['String']>
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>
  pair_starts_with?: InputMaybe<Scalars['String']>
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>
  pair_not_starts_with?: InputMaybe<Scalars['String']>
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  pair_ends_with?: InputMaybe<Scalars['String']>
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>
  pair_not_ends_with?: InputMaybe<Scalars['String']>
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  token0PriceUSD?: InputMaybe<Scalars['BigDecimal']>
  token0PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
  token0PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  token0PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  token0PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  token0PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  token0PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  token0PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  token1PriceUSD?: InputMaybe<Scalars['BigDecimal']>
  token1PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
  token1PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  token1PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  token1PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  token1PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  token1PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  token1PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve0?: InputMaybe<Scalars['BigDecimal']>
  reserve0_not?: InputMaybe<Scalars['BigDecimal']>
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']>
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']>
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']>
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']>
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve1?: InputMaybe<Scalars['BigDecimal']>
  reserve1_not?: InputMaybe<Scalars['BigDecimal']>
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']>
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']>
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']>
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']>
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  liquidityTokenTotalSupply?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  liquidityTokenTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type LiquidityPositionSnapshot_orderBy =
  | 'id'
  | 'liquidityPosition'
  | 'timestamp'
  | 'block'
  | 'user'
  | 'pair'
  | 'token0PriceUSD'
  | 'token1PriceUSD'
  | 'reserve0'
  | 'reserve1'
  | 'reserveUSD'
  | 'liquidityTokenTotalSupply'
  | 'liquidityTokenBalance'

export type LiquidityPosition_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  user?: InputMaybe<Scalars['String']>
  user_not?: InputMaybe<Scalars['String']>
  user_gt?: InputMaybe<Scalars['String']>
  user_lt?: InputMaybe<Scalars['String']>
  user_gte?: InputMaybe<Scalars['String']>
  user_lte?: InputMaybe<Scalars['String']>
  user_in?: InputMaybe<Array<Scalars['String']>>
  user_not_in?: InputMaybe<Array<Scalars['String']>>
  user_contains?: InputMaybe<Scalars['String']>
  user_contains_nocase?: InputMaybe<Scalars['String']>
  user_not_contains?: InputMaybe<Scalars['String']>
  user_not_contains_nocase?: InputMaybe<Scalars['String']>
  user_starts_with?: InputMaybe<Scalars['String']>
  user_starts_with_nocase?: InputMaybe<Scalars['String']>
  user_not_starts_with?: InputMaybe<Scalars['String']>
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  user_ends_with?: InputMaybe<Scalars['String']>
  user_ends_with_nocase?: InputMaybe<Scalars['String']>
  user_not_ends_with?: InputMaybe<Scalars['String']>
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  pair?: InputMaybe<Scalars['String']>
  pair_not?: InputMaybe<Scalars['String']>
  pair_gt?: InputMaybe<Scalars['String']>
  pair_lt?: InputMaybe<Scalars['String']>
  pair_gte?: InputMaybe<Scalars['String']>
  pair_lte?: InputMaybe<Scalars['String']>
  pair_in?: InputMaybe<Array<Scalars['String']>>
  pair_not_in?: InputMaybe<Array<Scalars['String']>>
  pair_contains?: InputMaybe<Scalars['String']>
  pair_contains_nocase?: InputMaybe<Scalars['String']>
  pair_not_contains?: InputMaybe<Scalars['String']>
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>
  pair_starts_with?: InputMaybe<Scalars['String']>
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>
  pair_not_starts_with?: InputMaybe<Scalars['String']>
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  pair_ends_with?: InputMaybe<Scalars['String']>
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>
  pair_not_ends_with?: InputMaybe<Scalars['String']>
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type LiquidityPosition_orderBy = 'id' | 'user' | 'pair' | 'liquidityTokenBalance'

export type Mint = {
  id: Scalars['ID']
  transaction: Transaction
  timestamp: Scalars['BigInt']
  pair: Pair
  to: Scalars['Bytes']
  liquidity: Scalars['BigDecimal']
  sender?: Maybe<Scalars['Bytes']>
  amount0?: Maybe<Scalars['BigDecimal']>
  amount1?: Maybe<Scalars['BigDecimal']>
  logIndex?: Maybe<Scalars['BigInt']>
  amountUSD?: Maybe<Scalars['BigDecimal']>
  feeTo?: Maybe<Scalars['Bytes']>
  feeLiquidity?: Maybe<Scalars['BigDecimal']>
}

export type Mint_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  transaction?: InputMaybe<Scalars['String']>
  transaction_not?: InputMaybe<Scalars['String']>
  transaction_gt?: InputMaybe<Scalars['String']>
  transaction_lt?: InputMaybe<Scalars['String']>
  transaction_gte?: InputMaybe<Scalars['String']>
  transaction_lte?: InputMaybe<Scalars['String']>
  transaction_in?: InputMaybe<Array<Scalars['String']>>
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>
  transaction_contains?: InputMaybe<Scalars['String']>
  transaction_contains_nocase?: InputMaybe<Scalars['String']>
  transaction_not_contains?: InputMaybe<Scalars['String']>
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>
  transaction_starts_with?: InputMaybe<Scalars['String']>
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>
  transaction_not_starts_with?: InputMaybe<Scalars['String']>
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  transaction_ends_with?: InputMaybe<Scalars['String']>
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>
  transaction_not_ends_with?: InputMaybe<Scalars['String']>
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  pair?: InputMaybe<Scalars['String']>
  pair_not?: InputMaybe<Scalars['String']>
  pair_gt?: InputMaybe<Scalars['String']>
  pair_lt?: InputMaybe<Scalars['String']>
  pair_gte?: InputMaybe<Scalars['String']>
  pair_lte?: InputMaybe<Scalars['String']>
  pair_in?: InputMaybe<Array<Scalars['String']>>
  pair_not_in?: InputMaybe<Array<Scalars['String']>>
  pair_contains?: InputMaybe<Scalars['String']>
  pair_contains_nocase?: InputMaybe<Scalars['String']>
  pair_not_contains?: InputMaybe<Scalars['String']>
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>
  pair_starts_with?: InputMaybe<Scalars['String']>
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>
  pair_not_starts_with?: InputMaybe<Scalars['String']>
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  pair_ends_with?: InputMaybe<Scalars['String']>
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>
  pair_not_ends_with?: InputMaybe<Scalars['String']>
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  to?: InputMaybe<Scalars['Bytes']>
  to_not?: InputMaybe<Scalars['Bytes']>
  to_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_contains?: InputMaybe<Scalars['Bytes']>
  to_not_contains?: InputMaybe<Scalars['Bytes']>
  liquidity?: InputMaybe<Scalars['BigDecimal']>
  liquidity_not?: InputMaybe<Scalars['BigDecimal']>
  liquidity_gt?: InputMaybe<Scalars['BigDecimal']>
  liquidity_lt?: InputMaybe<Scalars['BigDecimal']>
  liquidity_gte?: InputMaybe<Scalars['BigDecimal']>
  liquidity_lte?: InputMaybe<Scalars['BigDecimal']>
  liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  sender?: InputMaybe<Scalars['Bytes']>
  sender_not?: InputMaybe<Scalars['Bytes']>
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  sender_contains?: InputMaybe<Scalars['Bytes']>
  sender_not_contains?: InputMaybe<Scalars['Bytes']>
  amount0?: InputMaybe<Scalars['BigDecimal']>
  amount0_not?: InputMaybe<Scalars['BigDecimal']>
  amount0_gt?: InputMaybe<Scalars['BigDecimal']>
  amount0_lt?: InputMaybe<Scalars['BigDecimal']>
  amount0_gte?: InputMaybe<Scalars['BigDecimal']>
  amount0_lte?: InputMaybe<Scalars['BigDecimal']>
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount1?: InputMaybe<Scalars['BigDecimal']>
  amount1_not?: InputMaybe<Scalars['BigDecimal']>
  amount1_gt?: InputMaybe<Scalars['BigDecimal']>
  amount1_lt?: InputMaybe<Scalars['BigDecimal']>
  amount1_gte?: InputMaybe<Scalars['BigDecimal']>
  amount1_lte?: InputMaybe<Scalars['BigDecimal']>
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  logIndex?: InputMaybe<Scalars['BigInt']>
  logIndex_not?: InputMaybe<Scalars['BigInt']>
  logIndex_gt?: InputMaybe<Scalars['BigInt']>
  logIndex_lt?: InputMaybe<Scalars['BigInt']>
  logIndex_gte?: InputMaybe<Scalars['BigInt']>
  logIndex_lte?: InputMaybe<Scalars['BigInt']>
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  amountUSD?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  feeTo?: InputMaybe<Scalars['Bytes']>
  feeTo_not?: InputMaybe<Scalars['Bytes']>
  feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>
  feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  feeTo_contains?: InputMaybe<Scalars['Bytes']>
  feeTo_not_contains?: InputMaybe<Scalars['Bytes']>
  feeLiquidity?: InputMaybe<Scalars['BigDecimal']>
  feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>
  feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>
  feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>
  feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>
  feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>
  feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Mint_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pair'
  | 'to'
  | 'liquidity'
  | 'sender'
  | 'amount0'
  | 'amount1'
  | 'logIndex'
  | 'amountUSD'
  | 'feeTo'
  | 'feeLiquidity'

/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc'

export type Pair = {
  id: Scalars['ID']
  token0: Token
  token1: Token
  reserve0: Scalars['BigDecimal']
  reserve1: Scalars['BigDecimal']
  totalSupply: Scalars['BigDecimal']
  reserveETH: Scalars['BigDecimal']
  reserveUSD: Scalars['BigDecimal']
  trackedReserveETH: Scalars['BigDecimal']
  token0Price: Scalars['BigDecimal']
  token1Price: Scalars['BigDecimal']
  volumeToken0: Scalars['BigDecimal']
  volumeToken1: Scalars['BigDecimal']
  volumeUSD: Scalars['BigDecimal']
  untrackedVolumeUSD: Scalars['BigDecimal']
  txCount: Scalars['BigInt']
  createdAtTimestamp: Scalars['BigInt']
  createdAtBlockNumber: Scalars['BigInt']
  liquidityProviderCount: Scalars['BigInt']
}

export type PairDayData = {
  id: Scalars['ID']
  date: Scalars['Int']
  pairAddress: Scalars['Bytes']
  token0: Token
  token1: Token
  reserve0: Scalars['BigDecimal']
  reserve1: Scalars['BigDecimal']
  totalSupply: Scalars['BigDecimal']
  reserveUSD: Scalars['BigDecimal']
  dailyVolumeToken0: Scalars['BigDecimal']
  dailyVolumeToken1: Scalars['BigDecimal']
  dailyVolumeUSD: Scalars['BigDecimal']
  dailyTxns: Scalars['BigInt']
}

export type PairDayData_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  date?: InputMaybe<Scalars['Int']>
  date_not?: InputMaybe<Scalars['Int']>
  date_gt?: InputMaybe<Scalars['Int']>
  date_lt?: InputMaybe<Scalars['Int']>
  date_gte?: InputMaybe<Scalars['Int']>
  date_lte?: InputMaybe<Scalars['Int']>
  date_in?: InputMaybe<Array<Scalars['Int']>>
  date_not_in?: InputMaybe<Array<Scalars['Int']>>
  pairAddress?: InputMaybe<Scalars['Bytes']>
  pairAddress_not?: InputMaybe<Scalars['Bytes']>
  pairAddress_in?: InputMaybe<Array<Scalars['Bytes']>>
  pairAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  pairAddress_contains?: InputMaybe<Scalars['Bytes']>
  pairAddress_not_contains?: InputMaybe<Scalars['Bytes']>
  token0?: InputMaybe<Scalars['String']>
  token0_not?: InputMaybe<Scalars['String']>
  token0_gt?: InputMaybe<Scalars['String']>
  token0_lt?: InputMaybe<Scalars['String']>
  token0_gte?: InputMaybe<Scalars['String']>
  token0_lte?: InputMaybe<Scalars['String']>
  token0_in?: InputMaybe<Array<Scalars['String']>>
  token0_not_in?: InputMaybe<Array<Scalars['String']>>
  token0_contains?: InputMaybe<Scalars['String']>
  token0_contains_nocase?: InputMaybe<Scalars['String']>
  token0_not_contains?: InputMaybe<Scalars['String']>
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>
  token0_starts_with?: InputMaybe<Scalars['String']>
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>
  token0_not_starts_with?: InputMaybe<Scalars['String']>
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  token0_ends_with?: InputMaybe<Scalars['String']>
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>
  token0_not_ends_with?: InputMaybe<Scalars['String']>
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  token1?: InputMaybe<Scalars['String']>
  token1_not?: InputMaybe<Scalars['String']>
  token1_gt?: InputMaybe<Scalars['String']>
  token1_lt?: InputMaybe<Scalars['String']>
  token1_gte?: InputMaybe<Scalars['String']>
  token1_lte?: InputMaybe<Scalars['String']>
  token1_in?: InputMaybe<Array<Scalars['String']>>
  token1_not_in?: InputMaybe<Array<Scalars['String']>>
  token1_contains?: InputMaybe<Scalars['String']>
  token1_contains_nocase?: InputMaybe<Scalars['String']>
  token1_not_contains?: InputMaybe<Scalars['String']>
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>
  token1_starts_with?: InputMaybe<Scalars['String']>
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>
  token1_not_starts_with?: InputMaybe<Scalars['String']>
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  token1_ends_with?: InputMaybe<Scalars['String']>
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>
  token1_not_ends_with?: InputMaybe<Scalars['String']>
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  reserve0?: InputMaybe<Scalars['BigDecimal']>
  reserve0_not?: InputMaybe<Scalars['BigDecimal']>
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']>
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']>
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']>
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']>
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve1?: InputMaybe<Scalars['BigDecimal']>
  reserve1_not?: InputMaybe<Scalars['BigDecimal']>
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']>
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']>
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']>
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']>
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalSupply?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyTxns?: InputMaybe<Scalars['BigInt']>
  dailyTxns_not?: InputMaybe<Scalars['BigInt']>
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']>
  dailyTxns_lt?: InputMaybe<Scalars['BigInt']>
  dailyTxns_gte?: InputMaybe<Scalars['BigInt']>
  dailyTxns_lte?: InputMaybe<Scalars['BigInt']>
  dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>
  dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type PairDayData_orderBy =
  | 'id'
  | 'date'
  | 'pairAddress'
  | 'token0'
  | 'token1'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveUSD'
  | 'dailyVolumeToken0'
  | 'dailyVolumeToken1'
  | 'dailyVolumeUSD'
  | 'dailyTxns'

export type PairHourData = {
  id: Scalars['ID']
  hourStartUnix: Scalars['Int']
  pair: Pair
  reserve0: Scalars['BigDecimal']
  reserve1: Scalars['BigDecimal']
  reserveUSD: Scalars['BigDecimal']
  hourlyVolumeToken0: Scalars['BigDecimal']
  hourlyVolumeToken1: Scalars['BigDecimal']
  hourlyVolumeUSD: Scalars['BigDecimal']
  hourlyTxns: Scalars['BigInt']
}

export type PairHourData_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  hourStartUnix?: InputMaybe<Scalars['Int']>
  hourStartUnix_not?: InputMaybe<Scalars['Int']>
  hourStartUnix_gt?: InputMaybe<Scalars['Int']>
  hourStartUnix_lt?: InputMaybe<Scalars['Int']>
  hourStartUnix_gte?: InputMaybe<Scalars['Int']>
  hourStartUnix_lte?: InputMaybe<Scalars['Int']>
  hourStartUnix_in?: InputMaybe<Array<Scalars['Int']>>
  hourStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>
  pair?: InputMaybe<Scalars['String']>
  pair_not?: InputMaybe<Scalars['String']>
  pair_gt?: InputMaybe<Scalars['String']>
  pair_lt?: InputMaybe<Scalars['String']>
  pair_gte?: InputMaybe<Scalars['String']>
  pair_lte?: InputMaybe<Scalars['String']>
  pair_in?: InputMaybe<Array<Scalars['String']>>
  pair_not_in?: InputMaybe<Array<Scalars['String']>>
  pair_contains?: InputMaybe<Scalars['String']>
  pair_contains_nocase?: InputMaybe<Scalars['String']>
  pair_not_contains?: InputMaybe<Scalars['String']>
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>
  pair_starts_with?: InputMaybe<Scalars['String']>
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>
  pair_not_starts_with?: InputMaybe<Scalars['String']>
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  pair_ends_with?: InputMaybe<Scalars['String']>
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>
  pair_not_ends_with?: InputMaybe<Scalars['String']>
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  reserve0?: InputMaybe<Scalars['BigDecimal']>
  reserve0_not?: InputMaybe<Scalars['BigDecimal']>
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']>
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']>
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']>
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']>
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve1?: InputMaybe<Scalars['BigDecimal']>
  reserve1_not?: InputMaybe<Scalars['BigDecimal']>
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']>
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']>
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']>
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']>
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  hourlyTxns?: InputMaybe<Scalars['BigInt']>
  hourlyTxns_not?: InputMaybe<Scalars['BigInt']>
  hourlyTxns_gt?: InputMaybe<Scalars['BigInt']>
  hourlyTxns_lt?: InputMaybe<Scalars['BigInt']>
  hourlyTxns_gte?: InputMaybe<Scalars['BigInt']>
  hourlyTxns_lte?: InputMaybe<Scalars['BigInt']>
  hourlyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>
  hourlyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type PairHourData_orderBy =
  | 'id'
  | 'hourStartUnix'
  | 'pair'
  | 'reserve0'
  | 'reserve1'
  | 'reserveUSD'
  | 'hourlyVolumeToken0'
  | 'hourlyVolumeToken1'
  | 'hourlyVolumeUSD'
  | 'hourlyTxns'

export type Pair_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  token0?: InputMaybe<Scalars['String']>
  token0_not?: InputMaybe<Scalars['String']>
  token0_gt?: InputMaybe<Scalars['String']>
  token0_lt?: InputMaybe<Scalars['String']>
  token0_gte?: InputMaybe<Scalars['String']>
  token0_lte?: InputMaybe<Scalars['String']>
  token0_in?: InputMaybe<Array<Scalars['String']>>
  token0_not_in?: InputMaybe<Array<Scalars['String']>>
  token0_contains?: InputMaybe<Scalars['String']>
  token0_contains_nocase?: InputMaybe<Scalars['String']>
  token0_not_contains?: InputMaybe<Scalars['String']>
  token0_not_contains_nocase?: InputMaybe<Scalars['String']>
  token0_starts_with?: InputMaybe<Scalars['String']>
  token0_starts_with_nocase?: InputMaybe<Scalars['String']>
  token0_not_starts_with?: InputMaybe<Scalars['String']>
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  token0_ends_with?: InputMaybe<Scalars['String']>
  token0_ends_with_nocase?: InputMaybe<Scalars['String']>
  token0_not_ends_with?: InputMaybe<Scalars['String']>
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  token1?: InputMaybe<Scalars['String']>
  token1_not?: InputMaybe<Scalars['String']>
  token1_gt?: InputMaybe<Scalars['String']>
  token1_lt?: InputMaybe<Scalars['String']>
  token1_gte?: InputMaybe<Scalars['String']>
  token1_lte?: InputMaybe<Scalars['String']>
  token1_in?: InputMaybe<Array<Scalars['String']>>
  token1_not_in?: InputMaybe<Array<Scalars['String']>>
  token1_contains?: InputMaybe<Scalars['String']>
  token1_contains_nocase?: InputMaybe<Scalars['String']>
  token1_not_contains?: InputMaybe<Scalars['String']>
  token1_not_contains_nocase?: InputMaybe<Scalars['String']>
  token1_starts_with?: InputMaybe<Scalars['String']>
  token1_starts_with_nocase?: InputMaybe<Scalars['String']>
  token1_not_starts_with?: InputMaybe<Scalars['String']>
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  token1_ends_with?: InputMaybe<Scalars['String']>
  token1_ends_with_nocase?: InputMaybe<Scalars['String']>
  token1_not_ends_with?: InputMaybe<Scalars['String']>
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  reserve0?: InputMaybe<Scalars['BigDecimal']>
  reserve0_not?: InputMaybe<Scalars['BigDecimal']>
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']>
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']>
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']>
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']>
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve1?: InputMaybe<Scalars['BigDecimal']>
  reserve1_not?: InputMaybe<Scalars['BigDecimal']>
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']>
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']>
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']>
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']>
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalSupply?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserveETH?: InputMaybe<Scalars['BigDecimal']>
  reserveETH_not?: InputMaybe<Scalars['BigDecimal']>
  reserveETH_gt?: InputMaybe<Scalars['BigDecimal']>
  reserveETH_lt?: InputMaybe<Scalars['BigDecimal']>
  reserveETH_gte?: InputMaybe<Scalars['BigDecimal']>
  reserveETH_lte?: InputMaybe<Scalars['BigDecimal']>
  reserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserveUSD?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  trackedReserveETH?: InputMaybe<Scalars['BigDecimal']>
  trackedReserveETH_not?: InputMaybe<Scalars['BigDecimal']>
  trackedReserveETH_gt?: InputMaybe<Scalars['BigDecimal']>
  trackedReserveETH_lt?: InputMaybe<Scalars['BigDecimal']>
  trackedReserveETH_gte?: InputMaybe<Scalars['BigDecimal']>
  trackedReserveETH_lte?: InputMaybe<Scalars['BigDecimal']>
  trackedReserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  trackedReserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  token0Price?: InputMaybe<Scalars['BigDecimal']>
  token0Price_not?: InputMaybe<Scalars['BigDecimal']>
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']>
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']>
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']>
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']>
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  token1Price?: InputMaybe<Scalars['BigDecimal']>
  token1Price_not?: InputMaybe<Scalars['BigDecimal']>
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']>
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']>
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']>
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']>
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  volumeToken0?: InputMaybe<Scalars['BigDecimal']>
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  volumeToken1?: InputMaybe<Scalars['BigDecimal']>
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  volumeUSD?: InputMaybe<Scalars['BigDecimal']>
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  txCount?: InputMaybe<Scalars['BigInt']>
  txCount_not?: InputMaybe<Scalars['BigInt']>
  txCount_gt?: InputMaybe<Scalars['BigInt']>
  txCount_lt?: InputMaybe<Scalars['BigInt']>
  txCount_gte?: InputMaybe<Scalars['BigInt']>
  txCount_lte?: InputMaybe<Scalars['BigInt']>
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']>
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']>
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Pair_orderBy =
  | 'id'
  | 'token0'
  | 'token1'
  | 'reserve0'
  | 'reserve1'
  | 'totalSupply'
  | 'reserveETH'
  | 'reserveUSD'
  | 'trackedReserveETH'
  | 'token0Price'
  | 'token1Price'
  | 'volumeToken0'
  | 'volumeToken1'
  | 'volumeUSD'
  | 'untrackedVolumeUSD'
  | 'txCount'
  | 'createdAtTimestamp'
  | 'createdAtBlockNumber'
  | 'liquidityProviderCount'

export type Swap = {
  id: Scalars['ID']
  transaction: Transaction
  timestamp: Scalars['BigInt']
  pair: Pair
  sender: Scalars['Bytes']
  amount0In: Scalars['BigDecimal']
  amount1In: Scalars['BigDecimal']
  amount0Out: Scalars['BigDecimal']
  amount1Out: Scalars['BigDecimal']
  to: Scalars['Bytes']
  logIndex?: Maybe<Scalars['BigInt']>
  amountUSD: Scalars['BigDecimal']
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
  transaction?: InputMaybe<Scalars['String']>
  transaction_not?: InputMaybe<Scalars['String']>
  transaction_gt?: InputMaybe<Scalars['String']>
  transaction_lt?: InputMaybe<Scalars['String']>
  transaction_gte?: InputMaybe<Scalars['String']>
  transaction_lte?: InputMaybe<Scalars['String']>
  transaction_in?: InputMaybe<Array<Scalars['String']>>
  transaction_not_in?: InputMaybe<Array<Scalars['String']>>
  transaction_contains?: InputMaybe<Scalars['String']>
  transaction_contains_nocase?: InputMaybe<Scalars['String']>
  transaction_not_contains?: InputMaybe<Scalars['String']>
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']>
  transaction_starts_with?: InputMaybe<Scalars['String']>
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']>
  transaction_not_starts_with?: InputMaybe<Scalars['String']>
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  transaction_ends_with?: InputMaybe<Scalars['String']>
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']>
  transaction_not_ends_with?: InputMaybe<Scalars['String']>
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  pair?: InputMaybe<Scalars['String']>
  pair_not?: InputMaybe<Scalars['String']>
  pair_gt?: InputMaybe<Scalars['String']>
  pair_lt?: InputMaybe<Scalars['String']>
  pair_gte?: InputMaybe<Scalars['String']>
  pair_lte?: InputMaybe<Scalars['String']>
  pair_in?: InputMaybe<Array<Scalars['String']>>
  pair_not_in?: InputMaybe<Array<Scalars['String']>>
  pair_contains?: InputMaybe<Scalars['String']>
  pair_contains_nocase?: InputMaybe<Scalars['String']>
  pair_not_contains?: InputMaybe<Scalars['String']>
  pair_not_contains_nocase?: InputMaybe<Scalars['String']>
  pair_starts_with?: InputMaybe<Scalars['String']>
  pair_starts_with_nocase?: InputMaybe<Scalars['String']>
  pair_not_starts_with?: InputMaybe<Scalars['String']>
  pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
  pair_ends_with?: InputMaybe<Scalars['String']>
  pair_ends_with_nocase?: InputMaybe<Scalars['String']>
  pair_not_ends_with?: InputMaybe<Scalars['String']>
  pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
  sender?: InputMaybe<Scalars['Bytes']>
  sender_not?: InputMaybe<Scalars['Bytes']>
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  sender_contains?: InputMaybe<Scalars['Bytes']>
  sender_not_contains?: InputMaybe<Scalars['Bytes']>
  amount0In?: InputMaybe<Scalars['BigDecimal']>
  amount0In_not?: InputMaybe<Scalars['BigDecimal']>
  amount0In_gt?: InputMaybe<Scalars['BigDecimal']>
  amount0In_lt?: InputMaybe<Scalars['BigDecimal']>
  amount0In_gte?: InputMaybe<Scalars['BigDecimal']>
  amount0In_lte?: InputMaybe<Scalars['BigDecimal']>
  amount0In_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount0In_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount1In?: InputMaybe<Scalars['BigDecimal']>
  amount1In_not?: InputMaybe<Scalars['BigDecimal']>
  amount1In_gt?: InputMaybe<Scalars['BigDecimal']>
  amount1In_lt?: InputMaybe<Scalars['BigDecimal']>
  amount1In_gte?: InputMaybe<Scalars['BigDecimal']>
  amount1In_lte?: InputMaybe<Scalars['BigDecimal']>
  amount1In_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount1In_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount0Out?: InputMaybe<Scalars['BigDecimal']>
  amount0Out_not?: InputMaybe<Scalars['BigDecimal']>
  amount0Out_gt?: InputMaybe<Scalars['BigDecimal']>
  amount0Out_lt?: InputMaybe<Scalars['BigDecimal']>
  amount0Out_gte?: InputMaybe<Scalars['BigDecimal']>
  amount0Out_lte?: InputMaybe<Scalars['BigDecimal']>
  amount0Out_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount0Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount1Out?: InputMaybe<Scalars['BigDecimal']>
  amount1Out_not?: InputMaybe<Scalars['BigDecimal']>
  amount1Out_gt?: InputMaybe<Scalars['BigDecimal']>
  amount1Out_lt?: InputMaybe<Scalars['BigDecimal']>
  amount1Out_gte?: InputMaybe<Scalars['BigDecimal']>
  amount1Out_lte?: InputMaybe<Scalars['BigDecimal']>
  amount1Out_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount1Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  to?: InputMaybe<Scalars['Bytes']>
  to_not?: InputMaybe<Scalars['Bytes']>
  to_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_contains?: InputMaybe<Scalars['Bytes']>
  to_not_contains?: InputMaybe<Scalars['Bytes']>
  logIndex?: InputMaybe<Scalars['BigInt']>
  logIndex_not?: InputMaybe<Scalars['BigInt']>
  logIndex_gt?: InputMaybe<Scalars['BigInt']>
  logIndex_lt?: InputMaybe<Scalars['BigInt']>
  logIndex_gte?: InputMaybe<Scalars['BigInt']>
  logIndex_lte?: InputMaybe<Scalars['BigInt']>
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  amountUSD?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Swap_orderBy =
  | 'id'
  | 'transaction'
  | 'timestamp'
  | 'pair'
  | 'sender'
  | 'amount0In'
  | 'amount1In'
  | 'amount0Out'
  | 'amount1Out'
  | 'to'
  | 'logIndex'
  | 'amountUSD'

export type Token = {
  id: Scalars['ID']
  symbol: Scalars['String']
  name: Scalars['String']
  decimals: Scalars['BigInt']
  totalSupply: Scalars['BigInt']
  tradeVolume: Scalars['BigDecimal']
  tradeVolumeUSD: Scalars['BigDecimal']
  untrackedVolumeUSD: Scalars['BigDecimal']
  txCount: Scalars['BigInt']
  totalLiquidity: Scalars['BigDecimal']
  derivedETH?: Maybe<Scalars['BigDecimal']>
  mostLiquidPairs: Array<Maybe<PairDayData>>
}

export type TokenmostLiquidPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairDayData_filter>
}

export type TokenDayData = {
  id: Scalars['ID']
  date: Scalars['Int']
  token: Token
  dailyVolumeToken: Scalars['BigDecimal']
  dailyVolumeETH: Scalars['BigDecimal']
  dailyVolumeUSD: Scalars['BigDecimal']
  dailyTxns: Scalars['BigInt']
  totalLiquidityToken: Scalars['BigDecimal']
  totalLiquidityETH: Scalars['BigDecimal']
  totalLiquidityUSD: Scalars['BigDecimal']
  priceUSD: Scalars['BigDecimal']
  maxStored: Scalars['Int']
  mostLiquidPairs: Array<PairDayData>
}

export type TokenDayDatamostLiquidPairsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairDayData_filter>
}

export type TokenDayData_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  date?: InputMaybe<Scalars['Int']>
  date_not?: InputMaybe<Scalars['Int']>
  date_gt?: InputMaybe<Scalars['Int']>
  date_lt?: InputMaybe<Scalars['Int']>
  date_gte?: InputMaybe<Scalars['Int']>
  date_lte?: InputMaybe<Scalars['Int']>
  date_in?: InputMaybe<Array<Scalars['Int']>>
  date_not_in?: InputMaybe<Array<Scalars['Int']>>
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
  dailyVolumeToken?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken_not?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyTxns?: InputMaybe<Scalars['BigInt']>
  dailyTxns_not?: InputMaybe<Scalars['BigInt']>
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']>
  dailyTxns_lt?: InputMaybe<Scalars['BigInt']>
  dailyTxns_gte?: InputMaybe<Scalars['BigInt']>
  dailyTxns_lte?: InputMaybe<Scalars['BigInt']>
  dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>
  dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  totalLiquidityToken?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityToken_not?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityToken_gt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityToken_lt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityToken_gte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityToken_lte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  priceUSD?: InputMaybe<Scalars['BigDecimal']>
  priceUSD_not?: InputMaybe<Scalars['BigDecimal']>
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  maxStored?: InputMaybe<Scalars['Int']>
  maxStored_not?: InputMaybe<Scalars['Int']>
  maxStored_gt?: InputMaybe<Scalars['Int']>
  maxStored_lt?: InputMaybe<Scalars['Int']>
  maxStored_gte?: InputMaybe<Scalars['Int']>
  maxStored_lte?: InputMaybe<Scalars['Int']>
  maxStored_in?: InputMaybe<Array<Scalars['Int']>>
  maxStored_not_in?: InputMaybe<Array<Scalars['Int']>>
  mostLiquidPairs?: InputMaybe<Array<Scalars['String']>>
  mostLiquidPairs_not?: InputMaybe<Array<Scalars['String']>>
  mostLiquidPairs_contains?: InputMaybe<Array<Scalars['String']>>
  mostLiquidPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>
  mostLiquidPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type TokenDayData_orderBy =
  | 'id'
  | 'date'
  | 'token'
  | 'dailyVolumeToken'
  | 'dailyVolumeETH'
  | 'dailyVolumeUSD'
  | 'dailyTxns'
  | 'totalLiquidityToken'
  | 'totalLiquidityETH'
  | 'totalLiquidityUSD'
  | 'priceUSD'
  | 'maxStored'
  | 'mostLiquidPairs'

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
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
  decimals?: InputMaybe<Scalars['BigInt']>
  decimals_not?: InputMaybe<Scalars['BigInt']>
  decimals_gt?: InputMaybe<Scalars['BigInt']>
  decimals_lt?: InputMaybe<Scalars['BigInt']>
  decimals_gte?: InputMaybe<Scalars['BigInt']>
  decimals_lte?: InputMaybe<Scalars['BigInt']>
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  totalSupply?: InputMaybe<Scalars['BigInt']>
  totalSupply_not?: InputMaybe<Scalars['BigInt']>
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  tradeVolume?: InputMaybe<Scalars['BigDecimal']>
  tradeVolume_not?: InputMaybe<Scalars['BigDecimal']>
  tradeVolume_gt?: InputMaybe<Scalars['BigDecimal']>
  tradeVolume_lt?: InputMaybe<Scalars['BigDecimal']>
  tradeVolume_gte?: InputMaybe<Scalars['BigDecimal']>
  tradeVolume_lte?: InputMaybe<Scalars['BigDecimal']>
  tradeVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  tradeVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  tradeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  tradeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  tradeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  tradeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  tradeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  tradeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  tradeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  tradeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  txCount?: InputMaybe<Scalars['BigInt']>
  txCount_not?: InputMaybe<Scalars['BigInt']>
  txCount_gt?: InputMaybe<Scalars['BigInt']>
  txCount_lt?: InputMaybe<Scalars['BigInt']>
  txCount_gte?: InputMaybe<Scalars['BigInt']>
  txCount_lte?: InputMaybe<Scalars['BigInt']>
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  totalLiquidity?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  derivedETH?: InputMaybe<Scalars['BigDecimal']>
  derivedETH_not?: InputMaybe<Scalars['BigDecimal']>
  derivedETH_gt?: InputMaybe<Scalars['BigDecimal']>
  derivedETH_lt?: InputMaybe<Scalars['BigDecimal']>
  derivedETH_gte?: InputMaybe<Scalars['BigDecimal']>
  derivedETH_lte?: InputMaybe<Scalars['BigDecimal']>
  derivedETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  derivedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  mostLiquidPairs?: InputMaybe<Array<Scalars['String']>>
  mostLiquidPairs_not?: InputMaybe<Array<Scalars['String']>>
  mostLiquidPairs_contains?: InputMaybe<Array<Scalars['String']>>
  mostLiquidPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>
  mostLiquidPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Token_orderBy =
  | 'id'
  | 'symbol'
  | 'name'
  | 'decimals'
  | 'totalSupply'
  | 'tradeVolume'
  | 'tradeVolumeUSD'
  | 'untrackedVolumeUSD'
  | 'txCount'
  | 'totalLiquidity'
  | 'derivedETH'
  | 'mostLiquidPairs'

export type Transaction = {
  id: Scalars['ID']
  blockNumber: Scalars['BigInt']
  timestamp: Scalars['BigInt']
  mints: Array<Maybe<Mint>>
  burns: Array<Maybe<Burn>>
  swaps: Array<Maybe<Swap>>
}

export type TransactionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Mint_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Mint_filter>
}

export type TransactionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Burn_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Burn_filter>
}

export type TransactionswapsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Swap_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Swap_filter>
}

export type Transaction_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
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
  mints?: InputMaybe<Array<Scalars['String']>>
  mints_not?: InputMaybe<Array<Scalars['String']>>
  mints_contains?: InputMaybe<Array<Scalars['String']>>
  mints_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  mints_not_contains?: InputMaybe<Array<Scalars['String']>>
  mints_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  burns?: InputMaybe<Array<Scalars['String']>>
  burns_not?: InputMaybe<Array<Scalars['String']>>
  burns_contains?: InputMaybe<Array<Scalars['String']>>
  burns_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  burns_not_contains?: InputMaybe<Array<Scalars['String']>>
  burns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  swaps?: InputMaybe<Array<Scalars['String']>>
  swaps_not?: InputMaybe<Array<Scalars['String']>>
  swaps_contains?: InputMaybe<Array<Scalars['String']>>
  swaps_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  swaps_not_contains?: InputMaybe<Array<Scalars['String']>>
  swaps_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type Transaction_orderBy = 'id' | 'blockNumber' | 'timestamp' | 'mints' | 'burns' | 'swaps'

export type UniswapDayData = {
  id: Scalars['ID']
  date: Scalars['Int']
  dailyVolumeETH: Scalars['BigDecimal']
  dailyVolumeUSD: Scalars['BigDecimal']
  dailyVolumeUntracked: Scalars['BigDecimal']
  totalVolumeETH: Scalars['BigDecimal']
  totalLiquidityETH: Scalars['BigDecimal']
  totalVolumeUSD: Scalars['BigDecimal']
  totalLiquidityUSD: Scalars['BigDecimal']
  maxStored?: Maybe<Scalars['Int']>
  mostLiquidTokens: Array<TokenDayData>
  txCount: Scalars['BigInt']
}

export type UniswapDayDatamostLiquidTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TokenDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TokenDayData_filter>
}

export type UniswapDayData_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  date?: InputMaybe<Scalars['Int']>
  date_not?: InputMaybe<Scalars['Int']>
  date_gt?: InputMaybe<Scalars['Int']>
  date_lt?: InputMaybe<Scalars['Int']>
  date_gte?: InputMaybe<Scalars['Int']>
  date_lte?: InputMaybe<Scalars['Int']>
  date_in?: InputMaybe<Array<Scalars['Int']>>
  date_not_in?: InputMaybe<Array<Scalars['Int']>>
  dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeUntracked?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUntracked_not?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUntracked_gt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUntracked_lt?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUntracked_gte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUntracked_lte?: InputMaybe<Scalars['BigDecimal']>
  dailyVolumeUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  dailyVolumeUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  maxStored?: InputMaybe<Scalars['Int']>
  maxStored_not?: InputMaybe<Scalars['Int']>
  maxStored_gt?: InputMaybe<Scalars['Int']>
  maxStored_lt?: InputMaybe<Scalars['Int']>
  maxStored_gte?: InputMaybe<Scalars['Int']>
  maxStored_lte?: InputMaybe<Scalars['Int']>
  maxStored_in?: InputMaybe<Array<Scalars['Int']>>
  maxStored_not_in?: InputMaybe<Array<Scalars['Int']>>
  mostLiquidTokens?: InputMaybe<Array<Scalars['String']>>
  mostLiquidTokens_not?: InputMaybe<Array<Scalars['String']>>
  mostLiquidTokens_contains?: InputMaybe<Array<Scalars['String']>>
  mostLiquidTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
  mostLiquidTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  txCount?: InputMaybe<Scalars['BigInt']>
  txCount_not?: InputMaybe<Scalars['BigInt']>
  txCount_gt?: InputMaybe<Scalars['BigInt']>
  txCount_lt?: InputMaybe<Scalars['BigInt']>
  txCount_gte?: InputMaybe<Scalars['BigInt']>
  txCount_lte?: InputMaybe<Scalars['BigInt']>
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type UniswapDayData_orderBy =
  | 'id'
  | 'date'
  | 'dailyVolumeETH'
  | 'dailyVolumeUSD'
  | 'dailyVolumeUntracked'
  | 'totalVolumeETH'
  | 'totalLiquidityETH'
  | 'totalVolumeUSD'
  | 'totalLiquidityUSD'
  | 'maxStored'
  | 'mostLiquidTokens'
  | 'txCount'

export type UniswapFactory = {
  id: Scalars['ID']
  pairCount: Scalars['Int']
  totalVolumeUSD: Scalars['BigDecimal']
  totalVolumeETH: Scalars['BigDecimal']
  untrackedVolumeUSD: Scalars['BigDecimal']
  totalLiquidityUSD: Scalars['BigDecimal']
  totalLiquidityETH: Scalars['BigDecimal']
  txCount: Scalars['BigInt']
  mostLiquidTokens: Array<TokenDayData>
}

export type UniswapFactorymostLiquidTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TokenDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TokenDayData_filter>
}

export type UniswapFactory_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  pairCount?: InputMaybe<Scalars['Int']>
  pairCount_not?: InputMaybe<Scalars['Int']>
  pairCount_gt?: InputMaybe<Scalars['Int']>
  pairCount_lt?: InputMaybe<Scalars['Int']>
  pairCount_gte?: InputMaybe<Scalars['Int']>
  pairCount_lte?: InputMaybe<Scalars['Int']>
  pairCount_in?: InputMaybe<Array<Scalars['Int']>>
  pairCount_not_in?: InputMaybe<Array<Scalars['Int']>>
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>
  totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  txCount?: InputMaybe<Scalars['BigInt']>
  txCount_not?: InputMaybe<Scalars['BigInt']>
  txCount_gt?: InputMaybe<Scalars['BigInt']>
  txCount_lt?: InputMaybe<Scalars['BigInt']>
  txCount_gte?: InputMaybe<Scalars['BigInt']>
  txCount_lte?: InputMaybe<Scalars['BigInt']>
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  mostLiquidTokens?: InputMaybe<Array<Scalars['String']>>
  mostLiquidTokens_not?: InputMaybe<Array<Scalars['String']>>
  mostLiquidTokens_contains?: InputMaybe<Array<Scalars['String']>>
  mostLiquidTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
  mostLiquidTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type UniswapFactory_orderBy =
  | 'id'
  | 'pairCount'
  | 'totalVolumeUSD'
  | 'totalVolumeETH'
  | 'untrackedVolumeUSD'
  | 'totalLiquidityUSD'
  | 'totalLiquidityETH'
  | 'txCount'
  | 'mostLiquidTokens'

export type User = {
  id: Scalars['ID']
  liquidityPositions?: Maybe<Array<LiquidityPosition>>
  usdSwapped: Scalars['BigDecimal']
}

export type UserliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPosition_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPosition_filter>
}

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  usdSwapped?: InputMaybe<Scalars['BigDecimal']>
  usdSwapped_not?: InputMaybe<Scalars['BigDecimal']>
  usdSwapped_gt?: InputMaybe<Scalars['BigDecimal']>
  usdSwapped_lt?: InputMaybe<Scalars['BigDecimal']>
  usdSwapped_gte?: InputMaybe<Scalars['BigDecimal']>
  usdSwapped_lte?: InputMaybe<Scalars['BigDecimal']>
  usdSwapped_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  usdSwapped_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>
}

export type User_orderBy = 'id' | 'liquidityPositions' | 'usdSwapped'

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

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode)
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

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
  Query: ResolverTypeWrapper<{}>
  Subscription: ResolverTypeWrapper<{}>
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_height
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Bundle: ResolverTypeWrapper<Bundle>
  Bundle_filter: Bundle_filter
  Bundle_orderBy: Bundle_orderBy
  Burn: ResolverTypeWrapper<Burn>
  Burn_filter: Burn_filter
  Burn_orderBy: Burn_orderBy
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>
  Float: ResolverTypeWrapper<Scalars['Float']>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  LiquidityPosition: ResolverTypeWrapper<LiquidityPosition>
  LiquidityPositionSnapshot: ResolverTypeWrapper<LiquidityPositionSnapshot>
  LiquidityPositionSnapshot_filter: LiquidityPositionSnapshot_filter
  LiquidityPositionSnapshot_orderBy: LiquidityPositionSnapshot_orderBy
  LiquidityPosition_filter: LiquidityPosition_filter
  LiquidityPosition_orderBy: LiquidityPosition_orderBy
  Mint: ResolverTypeWrapper<Mint>
  Mint_filter: Mint_filter
  Mint_orderBy: Mint_orderBy
  OrderDirection: OrderDirection
  Pair: ResolverTypeWrapper<Pair>
  PairDayData: ResolverTypeWrapper<PairDayData>
  PairDayData_filter: PairDayData_filter
  PairDayData_orderBy: PairDayData_orderBy
  PairHourData: ResolverTypeWrapper<PairHourData>
  PairHourData_filter: PairHourData_filter
  PairHourData_orderBy: PairHourData_orderBy
  Pair_filter: Pair_filter
  Pair_orderBy: Pair_orderBy
  String: ResolverTypeWrapper<Scalars['String']>
  Swap: ResolverTypeWrapper<Swap>
  Swap_filter: Swap_filter
  Swap_orderBy: Swap_orderBy
  Token: ResolverTypeWrapper<Token>
  TokenDayData: ResolverTypeWrapper<TokenDayData>
  TokenDayData_filter: TokenDayData_filter
  TokenDayData_orderBy: TokenDayData_orderBy
  Token_filter: Token_filter
  Token_orderBy: Token_orderBy
  Transaction: ResolverTypeWrapper<Transaction>
  Transaction_filter: Transaction_filter
  Transaction_orderBy: Transaction_orderBy
  UniswapDayData: ResolverTypeWrapper<UniswapDayData>
  UniswapDayData_filter: UniswapDayData_filter
  UniswapDayData_orderBy: UniswapDayData_orderBy
  UniswapFactory: ResolverTypeWrapper<UniswapFactory>
  UniswapFactory_filter: UniswapFactory_filter
  UniswapFactory_orderBy: UniswapFactory_orderBy
  User: ResolverTypeWrapper<User>
  User_filter: User_filter
  User_orderBy: User_orderBy
  _Block_: ResolverTypeWrapper<_Block_>
  _Meta_: ResolverTypeWrapper<_Meta_>
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {}
  Subscription: {}
  BigDecimal: Scalars['BigDecimal']
  BigInt: Scalars['BigInt']
  BlockChangedFilter: BlockChangedFilter
  Block_height: Block_height
  Boolean: Scalars['Boolean']
  Bundle: Bundle
  Bundle_filter: Bundle_filter
  Burn: Burn
  Burn_filter: Burn_filter
  Bytes: Scalars['Bytes']
  Float: Scalars['Float']
  ID: Scalars['ID']
  Int: Scalars['Int']
  LiquidityPosition: LiquidityPosition
  LiquidityPositionSnapshot: LiquidityPositionSnapshot
  LiquidityPositionSnapshot_filter: LiquidityPositionSnapshot_filter
  LiquidityPosition_filter: LiquidityPosition_filter
  Mint: Mint
  Mint_filter: Mint_filter
  Pair: Pair
  PairDayData: PairDayData
  PairDayData_filter: PairDayData_filter
  PairHourData: PairHourData
  PairHourData_filter: PairHourData_filter
  Pair_filter: Pair_filter
  String: Scalars['String']
  Swap: Swap
  Swap_filter: Swap_filter
  Token: Token
  TokenDayData: TokenDayData
  TokenDayData_filter: TokenDayData_filter
  Token_filter: Token_filter
  Transaction: Transaction
  Transaction_filter: Transaction_filter
  UniswapDayData: UniswapDayData
  UniswapDayData_filter: UniswapDayData_filter
  UniswapFactory: UniswapFactory
  UniswapFactory_filter: UniswapFactory_filter
  User: User
  User_filter: User_filter
  _Block_: _Block_
  _Meta_: _Meta_
}>

export type QueryResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  Chain2_uniswapFactory?: Resolver<
    Maybe<ResolversTypes['UniswapFactory']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_uniswapFactoryArgs, 'id' | 'subgraphError'>
  >
  Chain2_uniswapFactories?: Resolver<
    Array<ResolversTypes['UniswapFactory']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_uniswapFactoriesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_token?: Resolver<
    Maybe<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_tokenArgs, 'id' | 'subgraphError'>
  >
  Chain2_tokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_tokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_pair?: Resolver<
    Maybe<ResolversTypes['Pair']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_pairArgs, 'id' | 'subgraphError'>
  >
  Chain2_pairs?: Resolver<
    Array<ResolversTypes['Pair']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_pairsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_userArgs, 'id' | 'subgraphError'>
  >
  Chain2_users?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_usersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_liquidityPosition?: Resolver<
    Maybe<ResolversTypes['LiquidityPosition']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_liquidityPositionArgs, 'id' | 'subgraphError'>
  >
  Chain2_liquidityPositions?: Resolver<
    Array<ResolversTypes['LiquidityPosition']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_liquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_liquidityPositionSnapshot?: Resolver<
    Maybe<ResolversTypes['LiquidityPositionSnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_liquidityPositionSnapshotArgs, 'id' | 'subgraphError'>
  >
  Chain2_liquidityPositionSnapshots?: Resolver<
    Array<ResolversTypes['LiquidityPositionSnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_liquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_transaction?: Resolver<
    Maybe<ResolversTypes['Transaction']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_transactionArgs, 'id' | 'subgraphError'>
  >
  Chain2_transactions?: Resolver<
    Array<ResolversTypes['Transaction']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_transactionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_mint?: Resolver<
    Maybe<ResolversTypes['Mint']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_mintArgs, 'id' | 'subgraphError'>
  >
  Chain2_mints?: Resolver<
    Array<ResolversTypes['Mint']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_mintsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_burn?: Resolver<
    Maybe<ResolversTypes['Burn']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_burnArgs, 'id' | 'subgraphError'>
  >
  Chain2_burns?: Resolver<
    Array<ResolversTypes['Burn']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_burnsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_swap?: Resolver<
    Maybe<ResolversTypes['Swap']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_swapArgs, 'id' | 'subgraphError'>
  >
  Chain2_swaps?: Resolver<
    Array<ResolversTypes['Swap']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_swapsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_bundle?: Resolver<
    Maybe<ResolversTypes['Bundle']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_bundleArgs, 'id' | 'subgraphError'>
  >
  Chain2_bundles?: Resolver<
    Array<ResolversTypes['Bundle']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_bundlesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_uniswapDayData?: Resolver<
    Maybe<ResolversTypes['UniswapDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_uniswapDayDataArgs, 'id' | 'subgraphError'>
  >
  Chain2_uniswapDayDatas?: Resolver<
    Array<ResolversTypes['UniswapDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_uniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_pairHourData?: Resolver<
    Maybe<ResolversTypes['PairHourData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_pairHourDataArgs, 'id' | 'subgraphError'>
  >
  Chain2_pairHourDatas?: Resolver<
    Array<ResolversTypes['PairHourData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_pairHourDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_pairDayData?: Resolver<
    Maybe<ResolversTypes['PairDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_pairDayDataArgs, 'id' | 'subgraphError'>
  >
  Chain2_pairDayDatas?: Resolver<
    Array<ResolversTypes['PairDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_pairDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_tokenDayData?: Resolver<
    Maybe<ResolversTypes['TokenDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_tokenDayDataArgs, 'id' | 'subgraphError'>
  >
  Chain2_tokenDayDatas?: Resolver<
    Array<ResolversTypes['TokenDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain2_tokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2__meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<QueryChain2__metaArgs>>
  Chain1_uniswapFactory?: Resolver<
    Maybe<ResolversTypes['UniswapFactory']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_uniswapFactoryArgs, 'id' | 'subgraphError'>
  >
  Chain1_uniswapFactories?: Resolver<
    Array<ResolversTypes['UniswapFactory']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_uniswapFactoriesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_token?: Resolver<
    Maybe<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_tokenArgs, 'id' | 'subgraphError'>
  >
  Chain1_tokens?: Resolver<
    Array<ResolversTypes['Token']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_tokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_pair?: Resolver<
    Maybe<ResolversTypes['Pair']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_pairArgs, 'id' | 'subgraphError'>
  >
  Chain1_pairs?: Resolver<
    Array<ResolversTypes['Pair']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_pairsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_userArgs, 'id' | 'subgraphError'>
  >
  Chain1_users?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_usersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_liquidityPosition?: Resolver<
    Maybe<ResolversTypes['LiquidityPosition']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_liquidityPositionArgs, 'id' | 'subgraphError'>
  >
  Chain1_liquidityPositions?: Resolver<
    Array<ResolversTypes['LiquidityPosition']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_liquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_liquidityPositionSnapshot?: Resolver<
    Maybe<ResolversTypes['LiquidityPositionSnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_liquidityPositionSnapshotArgs, 'id' | 'subgraphError'>
  >
  Chain1_liquidityPositionSnapshots?: Resolver<
    Array<ResolversTypes['LiquidityPositionSnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_liquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_transaction?: Resolver<
    Maybe<ResolversTypes['Transaction']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_transactionArgs, 'id' | 'subgraphError'>
  >
  Chain1_transactions?: Resolver<
    Array<ResolversTypes['Transaction']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_transactionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_mint?: Resolver<
    Maybe<ResolversTypes['Mint']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_mintArgs, 'id' | 'subgraphError'>
  >
  Chain1_mints?: Resolver<
    Array<ResolversTypes['Mint']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_mintsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_burn?: Resolver<
    Maybe<ResolversTypes['Burn']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_burnArgs, 'id' | 'subgraphError'>
  >
  Chain1_burns?: Resolver<
    Array<ResolversTypes['Burn']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_burnsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_swap?: Resolver<
    Maybe<ResolversTypes['Swap']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_swapArgs, 'id' | 'subgraphError'>
  >
  Chain1_swaps?: Resolver<
    Array<ResolversTypes['Swap']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_swapsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_bundle?: Resolver<
    Maybe<ResolversTypes['Bundle']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_bundleArgs, 'id' | 'subgraphError'>
  >
  Chain1_bundles?: Resolver<
    Array<ResolversTypes['Bundle']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_bundlesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_uniswapDayData?: Resolver<
    Maybe<ResolversTypes['UniswapDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_uniswapDayDataArgs, 'id' | 'subgraphError'>
  >
  Chain1_uniswapDayDatas?: Resolver<
    Array<ResolversTypes['UniswapDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_uniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_pairHourData?: Resolver<
    Maybe<ResolversTypes['PairHourData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_pairHourDataArgs, 'id' | 'subgraphError'>
  >
  Chain1_pairHourDatas?: Resolver<
    Array<ResolversTypes['PairHourData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_pairHourDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_pairDayData?: Resolver<
    Maybe<ResolversTypes['PairDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_pairDayDataArgs, 'id' | 'subgraphError'>
  >
  Chain1_pairDayDatas?: Resolver<
    Array<ResolversTypes['PairDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_pairDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_tokenDayData?: Resolver<
    Maybe<ResolversTypes['TokenDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_tokenDayDataArgs, 'id' | 'subgraphError'>
  >
  Chain1_tokenDayDatas?: Resolver<
    Array<ResolversTypes['TokenDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryChain1_tokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1__meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<QueryChain1__metaArgs>>
  pairs?: Resolver<Array<ResolversTypes['Pair']>, ParentType, ContextType, RequireFields<QuerypairsArgs, 'first'>>
}>

export type SubscriptionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = ResolversObject<{
  Chain2_uniswapFactory?: SubscriptionResolver<
    Maybe<ResolversTypes['UniswapFactory']>,
    'Chain2_uniswapFactory',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_uniswapFactoryArgs, 'id' | 'subgraphError'>
  >
  Chain2_uniswapFactories?: SubscriptionResolver<
    Array<ResolversTypes['UniswapFactory']>,
    'Chain2_uniswapFactories',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_uniswapFactoriesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_token?: SubscriptionResolver<
    Maybe<ResolversTypes['Token']>,
    'Chain2_token',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_tokenArgs, 'id' | 'subgraphError'>
  >
  Chain2_tokens?: SubscriptionResolver<
    Array<ResolversTypes['Token']>,
    'Chain2_tokens',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_tokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_pair?: SubscriptionResolver<
    Maybe<ResolversTypes['Pair']>,
    'Chain2_pair',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_pairArgs, 'id' | 'subgraphError'>
  >
  Chain2_pairs?: SubscriptionResolver<
    Array<ResolversTypes['Pair']>,
    'Chain2_pairs',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_pairsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_user?: SubscriptionResolver<
    Maybe<ResolversTypes['User']>,
    'Chain2_user',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_userArgs, 'id' | 'subgraphError'>
  >
  Chain2_users?: SubscriptionResolver<
    Array<ResolversTypes['User']>,
    'Chain2_users',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_usersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_liquidityPosition?: SubscriptionResolver<
    Maybe<ResolversTypes['LiquidityPosition']>,
    'Chain2_liquidityPosition',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_liquidityPositionArgs, 'id' | 'subgraphError'>
  >
  Chain2_liquidityPositions?: SubscriptionResolver<
    Array<ResolversTypes['LiquidityPosition']>,
    'Chain2_liquidityPositions',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_liquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_liquidityPositionSnapshot?: SubscriptionResolver<
    Maybe<ResolversTypes['LiquidityPositionSnapshot']>,
    'Chain2_liquidityPositionSnapshot',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_liquidityPositionSnapshotArgs, 'id' | 'subgraphError'>
  >
  Chain2_liquidityPositionSnapshots?: SubscriptionResolver<
    Array<ResolversTypes['LiquidityPositionSnapshot']>,
    'Chain2_liquidityPositionSnapshots',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_liquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_transaction?: SubscriptionResolver<
    Maybe<ResolversTypes['Transaction']>,
    'Chain2_transaction',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_transactionArgs, 'id' | 'subgraphError'>
  >
  Chain2_transactions?: SubscriptionResolver<
    Array<ResolversTypes['Transaction']>,
    'Chain2_transactions',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_transactionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_mint?: SubscriptionResolver<
    Maybe<ResolversTypes['Mint']>,
    'Chain2_mint',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_mintArgs, 'id' | 'subgraphError'>
  >
  Chain2_mints?: SubscriptionResolver<
    Array<ResolversTypes['Mint']>,
    'Chain2_mints',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_mintsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_burn?: SubscriptionResolver<
    Maybe<ResolversTypes['Burn']>,
    'Chain2_burn',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_burnArgs, 'id' | 'subgraphError'>
  >
  Chain2_burns?: SubscriptionResolver<
    Array<ResolversTypes['Burn']>,
    'Chain2_burns',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_burnsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_swap?: SubscriptionResolver<
    Maybe<ResolversTypes['Swap']>,
    'Chain2_swap',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_swapArgs, 'id' | 'subgraphError'>
  >
  Chain2_swaps?: SubscriptionResolver<
    Array<ResolversTypes['Swap']>,
    'Chain2_swaps',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_swapsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_bundle?: SubscriptionResolver<
    Maybe<ResolversTypes['Bundle']>,
    'Chain2_bundle',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_bundleArgs, 'id' | 'subgraphError'>
  >
  Chain2_bundles?: SubscriptionResolver<
    Array<ResolversTypes['Bundle']>,
    'Chain2_bundles',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_bundlesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_uniswapDayData?: SubscriptionResolver<
    Maybe<ResolversTypes['UniswapDayData']>,
    'Chain2_uniswapDayData',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_uniswapDayDataArgs, 'id' | 'subgraphError'>
  >
  Chain2_uniswapDayDatas?: SubscriptionResolver<
    Array<ResolversTypes['UniswapDayData']>,
    'Chain2_uniswapDayDatas',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_uniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_pairHourData?: SubscriptionResolver<
    Maybe<ResolversTypes['PairHourData']>,
    'Chain2_pairHourData',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_pairHourDataArgs, 'id' | 'subgraphError'>
  >
  Chain2_pairHourDatas?: SubscriptionResolver<
    Array<ResolversTypes['PairHourData']>,
    'Chain2_pairHourDatas',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_pairHourDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_pairDayData?: SubscriptionResolver<
    Maybe<ResolversTypes['PairDayData']>,
    'Chain2_pairDayData',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_pairDayDataArgs, 'id' | 'subgraphError'>
  >
  Chain2_pairDayDatas?: SubscriptionResolver<
    Array<ResolversTypes['PairDayData']>,
    'Chain2_pairDayDatas',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_pairDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2_tokenDayData?: SubscriptionResolver<
    Maybe<ResolversTypes['TokenDayData']>,
    'Chain2_tokenDayData',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_tokenDayDataArgs, 'id' | 'subgraphError'>
  >
  Chain2_tokenDayDatas?: SubscriptionResolver<
    Array<ResolversTypes['TokenDayData']>,
    'Chain2_tokenDayDatas',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain2_tokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain2__meta?: SubscriptionResolver<
    Maybe<ResolversTypes['_Meta_']>,
    'Chain2__meta',
    ParentType,
    ContextType,
    Partial<SubscriptionChain2__metaArgs>
  >
  Chain1_uniswapFactory?: SubscriptionResolver<
    Maybe<ResolversTypes['UniswapFactory']>,
    'Chain1_uniswapFactory',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_uniswapFactoryArgs, 'id' | 'subgraphError'>
  >
  Chain1_uniswapFactories?: SubscriptionResolver<
    Array<ResolversTypes['UniswapFactory']>,
    'Chain1_uniswapFactories',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_uniswapFactoriesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_token?: SubscriptionResolver<
    Maybe<ResolversTypes['Token']>,
    'Chain1_token',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_tokenArgs, 'id' | 'subgraphError'>
  >
  Chain1_tokens?: SubscriptionResolver<
    Array<ResolversTypes['Token']>,
    'Chain1_tokens',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_tokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_pair?: SubscriptionResolver<
    Maybe<ResolversTypes['Pair']>,
    'Chain1_pair',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_pairArgs, 'id' | 'subgraphError'>
  >
  Chain1_pairs?: SubscriptionResolver<
    Array<ResolversTypes['Pair']>,
    'Chain1_pairs',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_pairsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_user?: SubscriptionResolver<
    Maybe<ResolversTypes['User']>,
    'Chain1_user',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_userArgs, 'id' | 'subgraphError'>
  >
  Chain1_users?: SubscriptionResolver<
    Array<ResolversTypes['User']>,
    'Chain1_users',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_usersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_liquidityPosition?: SubscriptionResolver<
    Maybe<ResolversTypes['LiquidityPosition']>,
    'Chain1_liquidityPosition',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_liquidityPositionArgs, 'id' | 'subgraphError'>
  >
  Chain1_liquidityPositions?: SubscriptionResolver<
    Array<ResolversTypes['LiquidityPosition']>,
    'Chain1_liquidityPositions',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_liquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_liquidityPositionSnapshot?: SubscriptionResolver<
    Maybe<ResolversTypes['LiquidityPositionSnapshot']>,
    'Chain1_liquidityPositionSnapshot',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_liquidityPositionSnapshotArgs, 'id' | 'subgraphError'>
  >
  Chain1_liquidityPositionSnapshots?: SubscriptionResolver<
    Array<ResolversTypes['LiquidityPositionSnapshot']>,
    'Chain1_liquidityPositionSnapshots',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_liquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_transaction?: SubscriptionResolver<
    Maybe<ResolversTypes['Transaction']>,
    'Chain1_transaction',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_transactionArgs, 'id' | 'subgraphError'>
  >
  Chain1_transactions?: SubscriptionResolver<
    Array<ResolversTypes['Transaction']>,
    'Chain1_transactions',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_transactionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_mint?: SubscriptionResolver<
    Maybe<ResolversTypes['Mint']>,
    'Chain1_mint',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_mintArgs, 'id' | 'subgraphError'>
  >
  Chain1_mints?: SubscriptionResolver<
    Array<ResolversTypes['Mint']>,
    'Chain1_mints',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_mintsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_burn?: SubscriptionResolver<
    Maybe<ResolversTypes['Burn']>,
    'Chain1_burn',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_burnArgs, 'id' | 'subgraphError'>
  >
  Chain1_burns?: SubscriptionResolver<
    Array<ResolversTypes['Burn']>,
    'Chain1_burns',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_burnsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_swap?: SubscriptionResolver<
    Maybe<ResolversTypes['Swap']>,
    'Chain1_swap',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_swapArgs, 'id' | 'subgraphError'>
  >
  Chain1_swaps?: SubscriptionResolver<
    Array<ResolversTypes['Swap']>,
    'Chain1_swaps',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_swapsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_bundle?: SubscriptionResolver<
    Maybe<ResolversTypes['Bundle']>,
    'Chain1_bundle',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_bundleArgs, 'id' | 'subgraphError'>
  >
  Chain1_bundles?: SubscriptionResolver<
    Array<ResolversTypes['Bundle']>,
    'Chain1_bundles',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_bundlesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_uniswapDayData?: SubscriptionResolver<
    Maybe<ResolversTypes['UniswapDayData']>,
    'Chain1_uniswapDayData',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_uniswapDayDataArgs, 'id' | 'subgraphError'>
  >
  Chain1_uniswapDayDatas?: SubscriptionResolver<
    Array<ResolversTypes['UniswapDayData']>,
    'Chain1_uniswapDayDatas',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_uniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_pairHourData?: SubscriptionResolver<
    Maybe<ResolversTypes['PairHourData']>,
    'Chain1_pairHourData',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_pairHourDataArgs, 'id' | 'subgraphError'>
  >
  Chain1_pairHourDatas?: SubscriptionResolver<
    Array<ResolversTypes['PairHourData']>,
    'Chain1_pairHourDatas',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_pairHourDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_pairDayData?: SubscriptionResolver<
    Maybe<ResolversTypes['PairDayData']>,
    'Chain1_pairDayData',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_pairDayDataArgs, 'id' | 'subgraphError'>
  >
  Chain1_pairDayDatas?: SubscriptionResolver<
    Array<ResolversTypes['PairDayData']>,
    'Chain1_pairDayDatas',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_pairDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1_tokenDayData?: SubscriptionResolver<
    Maybe<ResolversTypes['TokenDayData']>,
    'Chain1_tokenDayData',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_tokenDayDataArgs, 'id' | 'subgraphError'>
  >
  Chain1_tokenDayDatas?: SubscriptionResolver<
    Array<ResolversTypes['TokenDayData']>,
    'Chain1_tokenDayDatas',
    ParentType,
    ContextType,
    RequireFields<SubscriptionChain1_tokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  Chain1__meta?: SubscriptionResolver<
    Maybe<ResolversTypes['_Meta_']>,
    'Chain1__meta',
    ParentType,
    ContextType,
    Partial<SubscriptionChain1__metaArgs>
  >
}>

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal'
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt'
}

export type BundleResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Bundle'] = ResolversParentTypes['Bundle'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  ethPrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BurnResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Burn'] = ResolversParentTypes['Burn'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  sender?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  amount0?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  amount1?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  to?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  needsComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  feeTo?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  feeLiquidity?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes'
}

export type LiquidityPositionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['LiquidityPosition'] = ResolversParentTypes['LiquidityPosition'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>
  liquidityTokenBalance?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type LiquidityPositionSnapshotResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['LiquidityPositionSnapshot'] = ResolversParentTypes['LiquidityPositionSnapshot'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  liquidityPosition?: Resolver<ResolversTypes['LiquidityPosition'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  block?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>
  token0PriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  token1PriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  liquidityTokenTotalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  liquidityTokenBalance?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MintResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Mint'] = ResolversParentTypes['Mint'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  liquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  sender?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  amount0?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  amount1?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  feeTo?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  feeLiquidity?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PairResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Pair'] = ResolversParentTypes['Pair'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  reserveETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  trackedReserveETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  liquidityProviderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PairDayDataResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['PairDayData'] = ResolversParentTypes['PairDayData'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  pairAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyVolumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyVolumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyTxns?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type PairHourDataResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['PairHourData'] = ResolversParentTypes['PairHourData'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  hourStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>
  reserve0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  reserve1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  reserveUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  hourlyVolumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  hourlyVolumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  hourlyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  hourlyTxns?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type SwapResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  pair?: Resolver<ResolversTypes['Pair'], ParentType, ContextType>
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  amount0In?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  amount1In?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  amount0Out?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  amount1Out?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TokenResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  tradeVolume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  tradeVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  totalLiquidity?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  derivedETH?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  mostLiquidPairs?: Resolver<
    Array<Maybe<ResolversTypes['PairDayData']>>,
    ParentType,
    ContextType,
    RequireFields<TokenmostLiquidPairsArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TokenDayDataResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['TokenDayData'] = ResolversParentTypes['TokenDayData'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>
  dailyVolumeToken?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyTxns?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  totalLiquidityToken?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalLiquidityETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  priceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  maxStored?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  mostLiquidPairs?: Resolver<
    Array<ResolversTypes['PairDayData']>,
    ParentType,
    ContextType,
    RequireFields<TokenDayDatamostLiquidPairsArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TransactionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  mints?: Resolver<
    Array<Maybe<ResolversTypes['Mint']>>,
    ParentType,
    ContextType,
    RequireFields<TransactionmintsArgs, 'skip' | 'first'>
  >
  burns?: Resolver<
    Array<Maybe<ResolversTypes['Burn']>>,
    ParentType,
    ContextType,
    RequireFields<TransactionburnsArgs, 'skip' | 'first'>
  >
  swaps?: Resolver<
    Array<Maybe<ResolversTypes['Swap']>>,
    ParentType,
    ContextType,
    RequireFields<TransactionswapsArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UniswapDayDataResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['UniswapDayData'] = ResolversParentTypes['UniswapDayData'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  dailyVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  dailyVolumeUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalLiquidityETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  maxStored?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  mostLiquidTokens?: Resolver<
    Array<ResolversTypes['TokenDayData']>,
    ParentType,
    ContextType,
    RequireFields<UniswapDayDatamostLiquidTokensArgs, 'skip' | 'first'>
  >
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UniswapFactoryResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['UniswapFactory'] = ResolversParentTypes['UniswapFactory'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  pairCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  totalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalLiquidityUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalLiquidityETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  mostLiquidTokens?: Resolver<
    Array<ResolversTypes['TokenDayData']>,
    ParentType,
    ContextType,
    RequireFields<UniswapFactorymostLiquidTokensArgs, 'skip' | 'first'>
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UserResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  liquidityPositions?: Resolver<
    Maybe<Array<ResolversTypes['LiquidityPosition']>>,
    ParentType,
    ContextType,
    RequireFields<UserliquidityPositionsArgs, 'skip' | 'first'>
  >
  usdSwapped?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Block_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_'],
> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type _Meta_Resolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_'],
> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>
  Subscription?: SubscriptionResolvers<ContextType>
  BigDecimal?: GraphQLScalarType
  BigInt?: GraphQLScalarType
  Bundle?: BundleResolvers<ContextType>
  Burn?: BurnResolvers<ContextType>
  Bytes?: GraphQLScalarType
  LiquidityPosition?: LiquidityPositionResolvers<ContextType>
  LiquidityPositionSnapshot?: LiquidityPositionSnapshotResolvers<ContextType>
  Mint?: MintResolvers<ContextType>
  Pair?: PairResolvers<ContextType>
  PairDayData?: PairDayDataResolvers<ContextType>
  PairHourData?: PairHourDataResolvers<ContextType>
  Swap?: SwapResolvers<ContextType>
  Token?: TokenResolvers<ContextType>
  TokenDayData?: TokenDayDataResolvers<ContextType>
  Transaction?: TransactionResolvers<ContextType>
  UniswapDayData?: UniswapDayDataResolvers<ContextType>
  UniswapFactory?: UniswapFactoryResolvers<ContextType>
  User?: UserResolvers<ContextType>
  _Block_?: _Block_Resolvers<ContextType>
  _Meta_?: _Meta_Resolvers<ContextType>
}>

import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime'

import { InContextSdkMethod } from '@graphql-mesh/types'

export namespace Chain2Types {
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

  export type BlockChangedFilter = {
    number_gte: Scalars['Int']
  }

  export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>
    number?: InputMaybe<Scalars['Int']>
    number_gte?: InputMaybe<Scalars['Int']>
  }

  export type Bundle = {
    id: Scalars['ID']
    ethPrice: Scalars['BigDecimal']
  }

  export type Bundle_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    ethPrice?: InputMaybe<Scalars['BigDecimal']>
    ethPrice_not?: InputMaybe<Scalars['BigDecimal']>
    ethPrice_gt?: InputMaybe<Scalars['BigDecimal']>
    ethPrice_lt?: InputMaybe<Scalars['BigDecimal']>
    ethPrice_gte?: InputMaybe<Scalars['BigDecimal']>
    ethPrice_lte?: InputMaybe<Scalars['BigDecimal']>
    ethPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    ethPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Bundle_orderBy = 'id' | 'ethPrice'

  export type Burn = {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pair: Pair
    liquidity: Scalars['BigDecimal']
    sender?: Maybe<Scalars['Bytes']>
    amount0?: Maybe<Scalars['BigDecimal']>
    amount1?: Maybe<Scalars['BigDecimal']>
    to?: Maybe<Scalars['Bytes']>
    logIndex?: Maybe<Scalars['BigInt']>
    amountUSD?: Maybe<Scalars['BigDecimal']>
    needsComplete: Scalars['Boolean']
    feeTo?: Maybe<Scalars['Bytes']>
    feeLiquidity?: Maybe<Scalars['BigDecimal']>
  }

  export type Burn_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    transaction?: InputMaybe<Scalars['String']>
    transaction_not?: InputMaybe<Scalars['String']>
    transaction_gt?: InputMaybe<Scalars['String']>
    transaction_lt?: InputMaybe<Scalars['String']>
    transaction_gte?: InputMaybe<Scalars['String']>
    transaction_lte?: InputMaybe<Scalars['String']>
    transaction_in?: InputMaybe<Array<Scalars['String']>>
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>
    transaction_contains?: InputMaybe<Scalars['String']>
    transaction_contains_nocase?: InputMaybe<Scalars['String']>
    transaction_not_contains?: InputMaybe<Scalars['String']>
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>
    transaction_starts_with?: InputMaybe<Scalars['String']>
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>
    transaction_not_starts_with?: InputMaybe<Scalars['String']>
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    transaction_ends_with?: InputMaybe<Scalars['String']>
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>
    transaction_not_ends_with?: InputMaybe<Scalars['String']>
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_contains_nocase?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    liquidity?: InputMaybe<Scalars['BigDecimal']>
    liquidity_not?: InputMaybe<Scalars['BigDecimal']>
    liquidity_gt?: InputMaybe<Scalars['BigDecimal']>
    liquidity_lt?: InputMaybe<Scalars['BigDecimal']>
    liquidity_gte?: InputMaybe<Scalars['BigDecimal']>
    liquidity_lte?: InputMaybe<Scalars['BigDecimal']>
    liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    sender?: InputMaybe<Scalars['Bytes']>
    sender_not?: InputMaybe<Scalars['Bytes']>
    sender_in?: InputMaybe<Array<Scalars['Bytes']>>
    sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    sender_contains?: InputMaybe<Scalars['Bytes']>
    sender_not_contains?: InputMaybe<Scalars['Bytes']>
    amount0?: InputMaybe<Scalars['BigDecimal']>
    amount0_not?: InputMaybe<Scalars['BigDecimal']>
    amount0_gt?: InputMaybe<Scalars['BigDecimal']>
    amount0_lt?: InputMaybe<Scalars['BigDecimal']>
    amount0_gte?: InputMaybe<Scalars['BigDecimal']>
    amount0_lte?: InputMaybe<Scalars['BigDecimal']>
    amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1?: InputMaybe<Scalars['BigDecimal']>
    amount1_not?: InputMaybe<Scalars['BigDecimal']>
    amount1_gt?: InputMaybe<Scalars['BigDecimal']>
    amount1_lt?: InputMaybe<Scalars['BigDecimal']>
    amount1_gte?: InputMaybe<Scalars['BigDecimal']>
    amount1_lte?: InputMaybe<Scalars['BigDecimal']>
    amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    to?: InputMaybe<Scalars['Bytes']>
    to_not?: InputMaybe<Scalars['Bytes']>
    to_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_contains?: InputMaybe<Scalars['Bytes']>
    to_not_contains?: InputMaybe<Scalars['Bytes']>
    logIndex?: InputMaybe<Scalars['BigInt']>
    logIndex_not?: InputMaybe<Scalars['BigInt']>
    logIndex_gt?: InputMaybe<Scalars['BigInt']>
    logIndex_lt?: InputMaybe<Scalars['BigInt']>
    logIndex_gte?: InputMaybe<Scalars['BigInt']>
    logIndex_lte?: InputMaybe<Scalars['BigInt']>
    logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>
    logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    amountUSD?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    needsComplete?: InputMaybe<Scalars['Boolean']>
    needsComplete_not?: InputMaybe<Scalars['Boolean']>
    needsComplete_in?: InputMaybe<Array<Scalars['Boolean']>>
    needsComplete_not_in?: InputMaybe<Array<Scalars['Boolean']>>
    feeTo?: InputMaybe<Scalars['Bytes']>
    feeTo_not?: InputMaybe<Scalars['Bytes']>
    feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>
    feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    feeTo_contains?: InputMaybe<Scalars['Bytes']>
    feeTo_not_contains?: InputMaybe<Scalars['Bytes']>
    feeLiquidity?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Burn_orderBy =
    | 'id'
    | 'transaction'
    | 'timestamp'
    | 'pair'
    | 'liquidity'
    | 'sender'
    | 'amount0'
    | 'amount1'
    | 'to'
    | 'logIndex'
    | 'amountUSD'
    | 'needsComplete'
    | 'feeTo'
    | 'feeLiquidity'

  export type LiquidityPosition = {
    id: Scalars['ID']
    user: User
    pair: Pair
    liquidityTokenBalance: Scalars['BigDecimal']
  }

  export type LiquidityPositionSnapshot = {
    id: Scalars['ID']
    liquidityPosition: LiquidityPosition
    timestamp: Scalars['Int']
    block: Scalars['Int']
    user: User
    pair: Pair
    token0PriceUSD: Scalars['BigDecimal']
    token1PriceUSD: Scalars['BigDecimal']
    reserve0: Scalars['BigDecimal']
    reserve1: Scalars['BigDecimal']
    reserveUSD: Scalars['BigDecimal']
    liquidityTokenTotalSupply: Scalars['BigDecimal']
    liquidityTokenBalance: Scalars['BigDecimal']
  }

  export type LiquidityPositionSnapshot_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    liquidityPosition?: InputMaybe<Scalars['String']>
    liquidityPosition_not?: InputMaybe<Scalars['String']>
    liquidityPosition_gt?: InputMaybe<Scalars['String']>
    liquidityPosition_lt?: InputMaybe<Scalars['String']>
    liquidityPosition_gte?: InputMaybe<Scalars['String']>
    liquidityPosition_lte?: InputMaybe<Scalars['String']>
    liquidityPosition_in?: InputMaybe<Array<Scalars['String']>>
    liquidityPosition_not_in?: InputMaybe<Array<Scalars['String']>>
    liquidityPosition_contains?: InputMaybe<Scalars['String']>
    liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']>
    liquidityPosition_not_contains?: InputMaybe<Scalars['String']>
    liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']>
    liquidityPosition_starts_with?: InputMaybe<Scalars['String']>
    liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']>
    liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>
    liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    liquidityPosition_ends_with?: InputMaybe<Scalars['String']>
    liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']>
    liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>
    liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    timestamp?: InputMaybe<Scalars['Int']>
    timestamp_not?: InputMaybe<Scalars['Int']>
    timestamp_gt?: InputMaybe<Scalars['Int']>
    timestamp_lt?: InputMaybe<Scalars['Int']>
    timestamp_gte?: InputMaybe<Scalars['Int']>
    timestamp_lte?: InputMaybe<Scalars['Int']>
    timestamp_in?: InputMaybe<Array<Scalars['Int']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>
    block?: InputMaybe<Scalars['Int']>
    block_not?: InputMaybe<Scalars['Int']>
    block_gt?: InputMaybe<Scalars['Int']>
    block_lt?: InputMaybe<Scalars['Int']>
    block_gte?: InputMaybe<Scalars['Int']>
    block_lte?: InputMaybe<Scalars['Int']>
    block_in?: InputMaybe<Array<Scalars['Int']>>
    block_not_in?: InputMaybe<Array<Scalars['Int']>>
    user?: InputMaybe<Scalars['String']>
    user_not?: InputMaybe<Scalars['String']>
    user_gt?: InputMaybe<Scalars['String']>
    user_lt?: InputMaybe<Scalars['String']>
    user_gte?: InputMaybe<Scalars['String']>
    user_lte?: InputMaybe<Scalars['String']>
    user_in?: InputMaybe<Array<Scalars['String']>>
    user_not_in?: InputMaybe<Array<Scalars['String']>>
    user_contains?: InputMaybe<Scalars['String']>
    user_contains_nocase?: InputMaybe<Scalars['String']>
    user_not_contains?: InputMaybe<Scalars['String']>
    user_not_contains_nocase?: InputMaybe<Scalars['String']>
    user_starts_with?: InputMaybe<Scalars['String']>
    user_starts_with_nocase?: InputMaybe<Scalars['String']>
    user_not_starts_with?: InputMaybe<Scalars['String']>
    user_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    user_ends_with?: InputMaybe<Scalars['String']>
    user_ends_with_nocase?: InputMaybe<Scalars['String']>
    user_not_ends_with?: InputMaybe<Scalars['String']>
    user_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_contains_nocase?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    token0PriceUSD?: InputMaybe<Scalars['BigDecimal']>
    token0PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
    token0PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    token0PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    token0PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    token0PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    token0PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token0PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token1PriceUSD?: InputMaybe<Scalars['BigDecimal']>
    token1PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
    token1PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    token1PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    token1PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    token1PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    token1PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token1PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve0?: InputMaybe<Scalars['BigDecimal']>
    reserve0_not?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1?: InputMaybe<Scalars['BigDecimal']>
    reserve1_not?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidityTokenTotalSupply?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidityTokenTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type LiquidityPositionSnapshot_orderBy =
    | 'id'
    | 'liquidityPosition'
    | 'timestamp'
    | 'block'
    | 'user'
    | 'pair'
    | 'token0PriceUSD'
    | 'token1PriceUSD'
    | 'reserve0'
    | 'reserve1'
    | 'reserveUSD'
    | 'liquidityTokenTotalSupply'
    | 'liquidityTokenBalance'

  export type LiquidityPosition_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    user?: InputMaybe<Scalars['String']>
    user_not?: InputMaybe<Scalars['String']>
    user_gt?: InputMaybe<Scalars['String']>
    user_lt?: InputMaybe<Scalars['String']>
    user_gte?: InputMaybe<Scalars['String']>
    user_lte?: InputMaybe<Scalars['String']>
    user_in?: InputMaybe<Array<Scalars['String']>>
    user_not_in?: InputMaybe<Array<Scalars['String']>>
    user_contains?: InputMaybe<Scalars['String']>
    user_contains_nocase?: InputMaybe<Scalars['String']>
    user_not_contains?: InputMaybe<Scalars['String']>
    user_not_contains_nocase?: InputMaybe<Scalars['String']>
    user_starts_with?: InputMaybe<Scalars['String']>
    user_starts_with_nocase?: InputMaybe<Scalars['String']>
    user_not_starts_with?: InputMaybe<Scalars['String']>
    user_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    user_ends_with?: InputMaybe<Scalars['String']>
    user_ends_with_nocase?: InputMaybe<Scalars['String']>
    user_not_ends_with?: InputMaybe<Scalars['String']>
    user_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_contains_nocase?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type LiquidityPosition_orderBy = 'id' | 'user' | 'pair' | 'liquidityTokenBalance'

  export type Mint = {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pair: Pair
    to: Scalars['Bytes']
    liquidity: Scalars['BigDecimal']
    sender?: Maybe<Scalars['Bytes']>
    amount0?: Maybe<Scalars['BigDecimal']>
    amount1?: Maybe<Scalars['BigDecimal']>
    logIndex?: Maybe<Scalars['BigInt']>
    amountUSD?: Maybe<Scalars['BigDecimal']>
    feeTo?: Maybe<Scalars['Bytes']>
    feeLiquidity?: Maybe<Scalars['BigDecimal']>
  }

  export type Mint_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    transaction?: InputMaybe<Scalars['String']>
    transaction_not?: InputMaybe<Scalars['String']>
    transaction_gt?: InputMaybe<Scalars['String']>
    transaction_lt?: InputMaybe<Scalars['String']>
    transaction_gte?: InputMaybe<Scalars['String']>
    transaction_lte?: InputMaybe<Scalars['String']>
    transaction_in?: InputMaybe<Array<Scalars['String']>>
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>
    transaction_contains?: InputMaybe<Scalars['String']>
    transaction_contains_nocase?: InputMaybe<Scalars['String']>
    transaction_not_contains?: InputMaybe<Scalars['String']>
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>
    transaction_starts_with?: InputMaybe<Scalars['String']>
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>
    transaction_not_starts_with?: InputMaybe<Scalars['String']>
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    transaction_ends_with?: InputMaybe<Scalars['String']>
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>
    transaction_not_ends_with?: InputMaybe<Scalars['String']>
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_contains_nocase?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    to?: InputMaybe<Scalars['Bytes']>
    to_not?: InputMaybe<Scalars['Bytes']>
    to_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_contains?: InputMaybe<Scalars['Bytes']>
    to_not_contains?: InputMaybe<Scalars['Bytes']>
    liquidity?: InputMaybe<Scalars['BigDecimal']>
    liquidity_not?: InputMaybe<Scalars['BigDecimal']>
    liquidity_gt?: InputMaybe<Scalars['BigDecimal']>
    liquidity_lt?: InputMaybe<Scalars['BigDecimal']>
    liquidity_gte?: InputMaybe<Scalars['BigDecimal']>
    liquidity_lte?: InputMaybe<Scalars['BigDecimal']>
    liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    sender?: InputMaybe<Scalars['Bytes']>
    sender_not?: InputMaybe<Scalars['Bytes']>
    sender_in?: InputMaybe<Array<Scalars['Bytes']>>
    sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    sender_contains?: InputMaybe<Scalars['Bytes']>
    sender_not_contains?: InputMaybe<Scalars['Bytes']>
    amount0?: InputMaybe<Scalars['BigDecimal']>
    amount0_not?: InputMaybe<Scalars['BigDecimal']>
    amount0_gt?: InputMaybe<Scalars['BigDecimal']>
    amount0_lt?: InputMaybe<Scalars['BigDecimal']>
    amount0_gte?: InputMaybe<Scalars['BigDecimal']>
    amount0_lte?: InputMaybe<Scalars['BigDecimal']>
    amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1?: InputMaybe<Scalars['BigDecimal']>
    amount1_not?: InputMaybe<Scalars['BigDecimal']>
    amount1_gt?: InputMaybe<Scalars['BigDecimal']>
    amount1_lt?: InputMaybe<Scalars['BigDecimal']>
    amount1_gte?: InputMaybe<Scalars['BigDecimal']>
    amount1_lte?: InputMaybe<Scalars['BigDecimal']>
    amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    logIndex?: InputMaybe<Scalars['BigInt']>
    logIndex_not?: InputMaybe<Scalars['BigInt']>
    logIndex_gt?: InputMaybe<Scalars['BigInt']>
    logIndex_lt?: InputMaybe<Scalars['BigInt']>
    logIndex_gte?: InputMaybe<Scalars['BigInt']>
    logIndex_lte?: InputMaybe<Scalars['BigInt']>
    logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>
    logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    amountUSD?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    feeTo?: InputMaybe<Scalars['Bytes']>
    feeTo_not?: InputMaybe<Scalars['Bytes']>
    feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>
    feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    feeTo_contains?: InputMaybe<Scalars['Bytes']>
    feeTo_not_contains?: InputMaybe<Scalars['Bytes']>
    feeLiquidity?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Mint_orderBy =
    | 'id'
    | 'transaction'
    | 'timestamp'
    | 'pair'
    | 'to'
    | 'liquidity'
    | 'sender'
    | 'amount0'
    | 'amount1'
    | 'logIndex'
    | 'amountUSD'
    | 'feeTo'
    | 'feeLiquidity'

  /** Defines the order direction, either ascending or descending */
  export type OrderDirection = 'asc' | 'desc'

  export type Pair = {
    id: Scalars['ID']
    token0: Token
    token1: Token
    reserve0: Scalars['BigDecimal']
    reserve1: Scalars['BigDecimal']
    totalSupply: Scalars['BigDecimal']
    reserveETH: Scalars['BigDecimal']
    reserveUSD: Scalars['BigDecimal']
    trackedReserveETH: Scalars['BigDecimal']
    token0Price: Scalars['BigDecimal']
    token1Price: Scalars['BigDecimal']
    volumeToken0: Scalars['BigDecimal']
    volumeToken1: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    createdAtTimestamp: Scalars['BigInt']
    createdAtBlockNumber: Scalars['BigInt']
    liquidityProviderCount: Scalars['BigInt']
  }

  export type PairDayData = {
    id: Scalars['ID']
    date: Scalars['Int']
    pairAddress: Scalars['Bytes']
    token0: Token
    token1: Token
    reserve0: Scalars['BigDecimal']
    reserve1: Scalars['BigDecimal']
    totalSupply: Scalars['BigDecimal']
    reserveUSD: Scalars['BigDecimal']
    dailyVolumeToken0: Scalars['BigDecimal']
    dailyVolumeToken1: Scalars['BigDecimal']
    dailyVolumeUSD: Scalars['BigDecimal']
    dailyTxns: Scalars['BigInt']
  }

  export type PairDayData_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    date?: InputMaybe<Scalars['Int']>
    date_not?: InputMaybe<Scalars['Int']>
    date_gt?: InputMaybe<Scalars['Int']>
    date_lt?: InputMaybe<Scalars['Int']>
    date_gte?: InputMaybe<Scalars['Int']>
    date_lte?: InputMaybe<Scalars['Int']>
    date_in?: InputMaybe<Array<Scalars['Int']>>
    date_not_in?: InputMaybe<Array<Scalars['Int']>>
    pairAddress?: InputMaybe<Scalars['Bytes']>
    pairAddress_not?: InputMaybe<Scalars['Bytes']>
    pairAddress_in?: InputMaybe<Array<Scalars['Bytes']>>
    pairAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    pairAddress_contains?: InputMaybe<Scalars['Bytes']>
    pairAddress_not_contains?: InputMaybe<Scalars['Bytes']>
    token0?: InputMaybe<Scalars['String']>
    token0_not?: InputMaybe<Scalars['String']>
    token0_gt?: InputMaybe<Scalars['String']>
    token0_lt?: InputMaybe<Scalars['String']>
    token0_gte?: InputMaybe<Scalars['String']>
    token0_lte?: InputMaybe<Scalars['String']>
    token0_in?: InputMaybe<Array<Scalars['String']>>
    token0_not_in?: InputMaybe<Array<Scalars['String']>>
    token0_contains?: InputMaybe<Scalars['String']>
    token0_contains_nocase?: InputMaybe<Scalars['String']>
    token0_not_contains?: InputMaybe<Scalars['String']>
    token0_not_contains_nocase?: InputMaybe<Scalars['String']>
    token0_starts_with?: InputMaybe<Scalars['String']>
    token0_starts_with_nocase?: InputMaybe<Scalars['String']>
    token0_not_starts_with?: InputMaybe<Scalars['String']>
    token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    token0_ends_with?: InputMaybe<Scalars['String']>
    token0_ends_with_nocase?: InputMaybe<Scalars['String']>
    token0_not_ends_with?: InputMaybe<Scalars['String']>
    token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    token1?: InputMaybe<Scalars['String']>
    token1_not?: InputMaybe<Scalars['String']>
    token1_gt?: InputMaybe<Scalars['String']>
    token1_lt?: InputMaybe<Scalars['String']>
    token1_gte?: InputMaybe<Scalars['String']>
    token1_lte?: InputMaybe<Scalars['String']>
    token1_in?: InputMaybe<Array<Scalars['String']>>
    token1_not_in?: InputMaybe<Array<Scalars['String']>>
    token1_contains?: InputMaybe<Scalars['String']>
    token1_contains_nocase?: InputMaybe<Scalars['String']>
    token1_not_contains?: InputMaybe<Scalars['String']>
    token1_not_contains_nocase?: InputMaybe<Scalars['String']>
    token1_starts_with?: InputMaybe<Scalars['String']>
    token1_starts_with_nocase?: InputMaybe<Scalars['String']>
    token1_not_starts_with?: InputMaybe<Scalars['String']>
    token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    token1_ends_with?: InputMaybe<Scalars['String']>
    token1_ends_with_nocase?: InputMaybe<Scalars['String']>
    token1_not_ends_with?: InputMaybe<Scalars['String']>
    token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    reserve0?: InputMaybe<Scalars['BigDecimal']>
    reserve0_not?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1?: InputMaybe<Scalars['BigDecimal']>
    reserve1_not?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalSupply?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_not?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyTxns?: InputMaybe<Scalars['BigInt']>
    dailyTxns_not?: InputMaybe<Scalars['BigInt']>
    dailyTxns_gt?: InputMaybe<Scalars['BigInt']>
    dailyTxns_lt?: InputMaybe<Scalars['BigInt']>
    dailyTxns_gte?: InputMaybe<Scalars['BigInt']>
    dailyTxns_lte?: InputMaybe<Scalars['BigInt']>
    dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>
    dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type PairDayData_orderBy =
    | 'id'
    | 'date'
    | 'pairAddress'
    | 'token0'
    | 'token1'
    | 'reserve0'
    | 'reserve1'
    | 'totalSupply'
    | 'reserveUSD'
    | 'dailyVolumeToken0'
    | 'dailyVolumeToken1'
    | 'dailyVolumeUSD'
    | 'dailyTxns'

  export type PairHourData = {
    id: Scalars['ID']
    hourStartUnix: Scalars['Int']
    pair: Pair
    reserve0: Scalars['BigDecimal']
    reserve1: Scalars['BigDecimal']
    reserveUSD: Scalars['BigDecimal']
    hourlyVolumeToken0: Scalars['BigDecimal']
    hourlyVolumeToken1: Scalars['BigDecimal']
    hourlyVolumeUSD: Scalars['BigDecimal']
    hourlyTxns: Scalars['BigInt']
  }

  export type PairHourData_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    hourStartUnix?: InputMaybe<Scalars['Int']>
    hourStartUnix_not?: InputMaybe<Scalars['Int']>
    hourStartUnix_gt?: InputMaybe<Scalars['Int']>
    hourStartUnix_lt?: InputMaybe<Scalars['Int']>
    hourStartUnix_gte?: InputMaybe<Scalars['Int']>
    hourStartUnix_lte?: InputMaybe<Scalars['Int']>
    hourStartUnix_in?: InputMaybe<Array<Scalars['Int']>>
    hourStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_contains_nocase?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    reserve0?: InputMaybe<Scalars['BigDecimal']>
    reserve0_not?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1?: InputMaybe<Scalars['BigDecimal']>
    reserve1_not?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyTxns?: InputMaybe<Scalars['BigInt']>
    hourlyTxns_not?: InputMaybe<Scalars['BigInt']>
    hourlyTxns_gt?: InputMaybe<Scalars['BigInt']>
    hourlyTxns_lt?: InputMaybe<Scalars['BigInt']>
    hourlyTxns_gte?: InputMaybe<Scalars['BigInt']>
    hourlyTxns_lte?: InputMaybe<Scalars['BigInt']>
    hourlyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>
    hourlyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type PairHourData_orderBy =
    | 'id'
    | 'hourStartUnix'
    | 'pair'
    | 'reserve0'
    | 'reserve1'
    | 'reserveUSD'
    | 'hourlyVolumeToken0'
    | 'hourlyVolumeToken1'
    | 'hourlyVolumeUSD'
    | 'hourlyTxns'

  export type Pair_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    token0?: InputMaybe<Scalars['String']>
    token0_not?: InputMaybe<Scalars['String']>
    token0_gt?: InputMaybe<Scalars['String']>
    token0_lt?: InputMaybe<Scalars['String']>
    token0_gte?: InputMaybe<Scalars['String']>
    token0_lte?: InputMaybe<Scalars['String']>
    token0_in?: InputMaybe<Array<Scalars['String']>>
    token0_not_in?: InputMaybe<Array<Scalars['String']>>
    token0_contains?: InputMaybe<Scalars['String']>
    token0_contains_nocase?: InputMaybe<Scalars['String']>
    token0_not_contains?: InputMaybe<Scalars['String']>
    token0_not_contains_nocase?: InputMaybe<Scalars['String']>
    token0_starts_with?: InputMaybe<Scalars['String']>
    token0_starts_with_nocase?: InputMaybe<Scalars['String']>
    token0_not_starts_with?: InputMaybe<Scalars['String']>
    token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    token0_ends_with?: InputMaybe<Scalars['String']>
    token0_ends_with_nocase?: InputMaybe<Scalars['String']>
    token0_not_ends_with?: InputMaybe<Scalars['String']>
    token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    token1?: InputMaybe<Scalars['String']>
    token1_not?: InputMaybe<Scalars['String']>
    token1_gt?: InputMaybe<Scalars['String']>
    token1_lt?: InputMaybe<Scalars['String']>
    token1_gte?: InputMaybe<Scalars['String']>
    token1_lte?: InputMaybe<Scalars['String']>
    token1_in?: InputMaybe<Array<Scalars['String']>>
    token1_not_in?: InputMaybe<Array<Scalars['String']>>
    token1_contains?: InputMaybe<Scalars['String']>
    token1_contains_nocase?: InputMaybe<Scalars['String']>
    token1_not_contains?: InputMaybe<Scalars['String']>
    token1_not_contains_nocase?: InputMaybe<Scalars['String']>
    token1_starts_with?: InputMaybe<Scalars['String']>
    token1_starts_with_nocase?: InputMaybe<Scalars['String']>
    token1_not_starts_with?: InputMaybe<Scalars['String']>
    token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    token1_ends_with?: InputMaybe<Scalars['String']>
    token1_ends_with_nocase?: InputMaybe<Scalars['String']>
    token1_not_ends_with?: InputMaybe<Scalars['String']>
    token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    reserve0?: InputMaybe<Scalars['BigDecimal']>
    reserve0_not?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1?: InputMaybe<Scalars['BigDecimal']>
    reserve1_not?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalSupply?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_not?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveETH?: InputMaybe<Scalars['BigDecimal']>
    reserveETH_not?: InputMaybe<Scalars['BigDecimal']>
    reserveETH_gt?: InputMaybe<Scalars['BigDecimal']>
    reserveETH_lt?: InputMaybe<Scalars['BigDecimal']>
    reserveETH_gte?: InputMaybe<Scalars['BigDecimal']>
    reserveETH_lte?: InputMaybe<Scalars['BigDecimal']>
    reserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    trackedReserveETH?: InputMaybe<Scalars['BigDecimal']>
    trackedReserveETH_not?: InputMaybe<Scalars['BigDecimal']>
    trackedReserveETH_gt?: InputMaybe<Scalars['BigDecimal']>
    trackedReserveETH_lt?: InputMaybe<Scalars['BigDecimal']>
    trackedReserveETH_gte?: InputMaybe<Scalars['BigDecimal']>
    trackedReserveETH_lte?: InputMaybe<Scalars['BigDecimal']>
    trackedReserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    trackedReserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token0Price?: InputMaybe<Scalars['BigDecimal']>
    token0Price_not?: InputMaybe<Scalars['BigDecimal']>
    token0Price_gt?: InputMaybe<Scalars['BigDecimal']>
    token0Price_lt?: InputMaybe<Scalars['BigDecimal']>
    token0Price_gte?: InputMaybe<Scalars['BigDecimal']>
    token0Price_lte?: InputMaybe<Scalars['BigDecimal']>
    token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token1Price?: InputMaybe<Scalars['BigDecimal']>
    token1Price_not?: InputMaybe<Scalars['BigDecimal']>
    token1Price_gt?: InputMaybe<Scalars['BigDecimal']>
    token1Price_lt?: InputMaybe<Scalars['BigDecimal']>
    token1Price_gte?: InputMaybe<Scalars['BigDecimal']>
    token1Price_lte?: InputMaybe<Scalars['BigDecimal']>
    token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    volumeToken0?: InputMaybe<Scalars['BigDecimal']>
    volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>
    volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>
    volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>
    volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>
    volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>
    volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    volumeToken1?: InputMaybe<Scalars['BigDecimal']>
    volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>
    volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>
    volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>
    volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>
    volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>
    volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    volumeUSD?: InputMaybe<Scalars['BigDecimal']>
    volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    txCount?: InputMaybe<Scalars['BigInt']>
    txCount_not?: InputMaybe<Scalars['BigInt']>
    txCount_gt?: InputMaybe<Scalars['BigInt']>
    txCount_lt?: InputMaybe<Scalars['BigInt']>
    txCount_gte?: InputMaybe<Scalars['BigInt']>
    txCount_lte?: InputMaybe<Scalars['BigInt']>
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    createdAtTimestamp?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>
    createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>
    createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>
    createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>
    createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>
    createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>
    createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    liquidityProviderCount?: InputMaybe<Scalars['BigInt']>
    liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>
    liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>
    liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>
    liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>
    liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>
    liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>
    liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Pair_orderBy =
    | 'id'
    | 'token0'
    | 'token1'
    | 'reserve0'
    | 'reserve1'
    | 'totalSupply'
    | 'reserveETH'
    | 'reserveUSD'
    | 'trackedReserveETH'
    | 'token0Price'
    | 'token1Price'
    | 'volumeToken0'
    | 'volumeToken1'
    | 'volumeUSD'
    | 'untrackedVolumeUSD'
    | 'txCount'
    | 'createdAtTimestamp'
    | 'createdAtBlockNumber'
    | 'liquidityProviderCount'

  export type Query = {
    Chain2_uniswapFactory?: Maybe<UniswapFactory>
    Chain2_uniswapFactories: Array<UniswapFactory>
    Chain2_token?: Maybe<Token>
    Chain2_tokens: Array<Token>
    Chain2_pair?: Maybe<Pair>
    Chain2_pairs: Array<Pair>
    Chain2_user?: Maybe<User>
    Chain2_users: Array<User>
    Chain2_liquidityPosition?: Maybe<LiquidityPosition>
    Chain2_liquidityPositions: Array<LiquidityPosition>
    Chain2_liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>
    Chain2_liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>
    Chain2_transaction?: Maybe<Transaction>
    Chain2_transactions: Array<Transaction>
    Chain2_mint?: Maybe<Mint>
    Chain2_mints: Array<Mint>
    Chain2_burn?: Maybe<Burn>
    Chain2_burns: Array<Burn>
    Chain2_swap?: Maybe<Swap>
    Chain2_swaps: Array<Swap>
    Chain2_bundle?: Maybe<Bundle>
    Chain2_bundles: Array<Bundle>
    Chain2_uniswapDayData?: Maybe<UniswapDayData>
    Chain2_uniswapDayDatas: Array<UniswapDayData>
    Chain2_pairHourData?: Maybe<PairHourData>
    Chain2_pairHourDatas: Array<PairHourData>
    Chain2_pairDayData?: Maybe<PairDayData>
    Chain2_pairDayDatas: Array<PairDayData>
    Chain2_tokenDayData?: Maybe<TokenDayData>
    Chain2_tokenDayDatas: Array<TokenDayData>
    /** Access to subgraph metadata */
    Chain2__meta?: Maybe<_Meta_>
  }

  export type QueryChain2_uniswapFactoryArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_uniswapFactoriesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UniswapFactory_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UniswapFactory_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_tokenArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_tokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_pairArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_pairsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Pair_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Pair_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_userArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_usersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<User_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<User_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_liquidityPositionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_liquidityPositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPosition_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPosition_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_liquidityPositionSnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_liquidityPositionSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPositionSnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_transactionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_transactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Transaction_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Transaction_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_mintArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_mintsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Mint_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Mint_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_burnArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_burnsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Burn_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Burn_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_swapArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_swapsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Swap_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Swap_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_bundleArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_bundlesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Bundle_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Bundle_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_uniswapDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_uniswapDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UniswapDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UniswapDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_pairHourDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_pairHourDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairHourData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairHourData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_pairDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_pairDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_tokenDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2_tokenDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TokenDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TokenDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain2__metaArgs = {
    block?: InputMaybe<Block_height>
  }

  export type Subscription = {
    Chain2_uniswapFactory?: Maybe<UniswapFactory>
    Chain2_uniswapFactories: Array<UniswapFactory>
    Chain2_token?: Maybe<Token>
    Chain2_tokens: Array<Token>
    Chain2_pair?: Maybe<Pair>
    Chain2_pairs: Array<Pair>
    Chain2_user?: Maybe<User>
    Chain2_users: Array<User>
    Chain2_liquidityPosition?: Maybe<LiquidityPosition>
    Chain2_liquidityPositions: Array<LiquidityPosition>
    Chain2_liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>
    Chain2_liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>
    Chain2_transaction?: Maybe<Transaction>
    Chain2_transactions: Array<Transaction>
    Chain2_mint?: Maybe<Mint>
    Chain2_mints: Array<Mint>
    Chain2_burn?: Maybe<Burn>
    Chain2_burns: Array<Burn>
    Chain2_swap?: Maybe<Swap>
    Chain2_swaps: Array<Swap>
    Chain2_bundle?: Maybe<Bundle>
    Chain2_bundles: Array<Bundle>
    Chain2_uniswapDayData?: Maybe<UniswapDayData>
    Chain2_uniswapDayDatas: Array<UniswapDayData>
    Chain2_pairHourData?: Maybe<PairHourData>
    Chain2_pairHourDatas: Array<PairHourData>
    Chain2_pairDayData?: Maybe<PairDayData>
    Chain2_pairDayDatas: Array<PairDayData>
    Chain2_tokenDayData?: Maybe<TokenDayData>
    Chain2_tokenDayDatas: Array<TokenDayData>
    /** Access to subgraph metadata */
    Chain2__meta?: Maybe<_Meta_>
  }

  export type SubscriptionChain2_uniswapFactoryArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_uniswapFactoriesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UniswapFactory_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UniswapFactory_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_tokenArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_tokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_pairArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_pairsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Pair_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Pair_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_userArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_usersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<User_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<User_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_liquidityPositionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_liquidityPositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPosition_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPosition_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_liquidityPositionSnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_liquidityPositionSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPositionSnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_transactionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_transactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Transaction_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Transaction_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_mintArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_mintsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Mint_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Mint_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_burnArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_burnsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Burn_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Burn_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_swapArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_swapsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Swap_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Swap_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_bundleArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_bundlesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Bundle_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Bundle_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_uniswapDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_uniswapDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UniswapDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UniswapDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_pairHourDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_pairHourDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairHourData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairHourData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_pairDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_pairDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_tokenDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2_tokenDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TokenDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TokenDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain2__metaArgs = {
    block?: InputMaybe<Block_height>
  }

  export type Swap = {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pair: Pair
    sender: Scalars['Bytes']
    amount0In: Scalars['BigDecimal']
    amount1In: Scalars['BigDecimal']
    amount0Out: Scalars['BigDecimal']
    amount1Out: Scalars['BigDecimal']
    to: Scalars['Bytes']
    logIndex?: Maybe<Scalars['BigInt']>
    amountUSD: Scalars['BigDecimal']
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
    transaction?: InputMaybe<Scalars['String']>
    transaction_not?: InputMaybe<Scalars['String']>
    transaction_gt?: InputMaybe<Scalars['String']>
    transaction_lt?: InputMaybe<Scalars['String']>
    transaction_gte?: InputMaybe<Scalars['String']>
    transaction_lte?: InputMaybe<Scalars['String']>
    transaction_in?: InputMaybe<Array<Scalars['String']>>
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>
    transaction_contains?: InputMaybe<Scalars['String']>
    transaction_contains_nocase?: InputMaybe<Scalars['String']>
    transaction_not_contains?: InputMaybe<Scalars['String']>
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>
    transaction_starts_with?: InputMaybe<Scalars['String']>
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>
    transaction_not_starts_with?: InputMaybe<Scalars['String']>
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    transaction_ends_with?: InputMaybe<Scalars['String']>
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>
    transaction_not_ends_with?: InputMaybe<Scalars['String']>
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_contains_nocase?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    sender?: InputMaybe<Scalars['Bytes']>
    sender_not?: InputMaybe<Scalars['Bytes']>
    sender_in?: InputMaybe<Array<Scalars['Bytes']>>
    sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    sender_contains?: InputMaybe<Scalars['Bytes']>
    sender_not_contains?: InputMaybe<Scalars['Bytes']>
    amount0In?: InputMaybe<Scalars['BigDecimal']>
    amount0In_not?: InputMaybe<Scalars['BigDecimal']>
    amount0In_gt?: InputMaybe<Scalars['BigDecimal']>
    amount0In_lt?: InputMaybe<Scalars['BigDecimal']>
    amount0In_gte?: InputMaybe<Scalars['BigDecimal']>
    amount0In_lte?: InputMaybe<Scalars['BigDecimal']>
    amount0In_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount0In_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1In?: InputMaybe<Scalars['BigDecimal']>
    amount1In_not?: InputMaybe<Scalars['BigDecimal']>
    amount1In_gt?: InputMaybe<Scalars['BigDecimal']>
    amount1In_lt?: InputMaybe<Scalars['BigDecimal']>
    amount1In_gte?: InputMaybe<Scalars['BigDecimal']>
    amount1In_lte?: InputMaybe<Scalars['BigDecimal']>
    amount1In_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1In_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount0Out?: InputMaybe<Scalars['BigDecimal']>
    amount0Out_not?: InputMaybe<Scalars['BigDecimal']>
    amount0Out_gt?: InputMaybe<Scalars['BigDecimal']>
    amount0Out_lt?: InputMaybe<Scalars['BigDecimal']>
    amount0Out_gte?: InputMaybe<Scalars['BigDecimal']>
    amount0Out_lte?: InputMaybe<Scalars['BigDecimal']>
    amount0Out_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount0Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1Out?: InputMaybe<Scalars['BigDecimal']>
    amount1Out_not?: InputMaybe<Scalars['BigDecimal']>
    amount1Out_gt?: InputMaybe<Scalars['BigDecimal']>
    amount1Out_lt?: InputMaybe<Scalars['BigDecimal']>
    amount1Out_gte?: InputMaybe<Scalars['BigDecimal']>
    amount1Out_lte?: InputMaybe<Scalars['BigDecimal']>
    amount1Out_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    to?: InputMaybe<Scalars['Bytes']>
    to_not?: InputMaybe<Scalars['Bytes']>
    to_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_contains?: InputMaybe<Scalars['Bytes']>
    to_not_contains?: InputMaybe<Scalars['Bytes']>
    logIndex?: InputMaybe<Scalars['BigInt']>
    logIndex_not?: InputMaybe<Scalars['BigInt']>
    logIndex_gt?: InputMaybe<Scalars['BigInt']>
    logIndex_lt?: InputMaybe<Scalars['BigInt']>
    logIndex_gte?: InputMaybe<Scalars['BigInt']>
    logIndex_lte?: InputMaybe<Scalars['BigInt']>
    logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>
    logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    amountUSD?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Swap_orderBy =
    | 'id'
    | 'transaction'
    | 'timestamp'
    | 'pair'
    | 'sender'
    | 'amount0In'
    | 'amount1In'
    | 'amount0Out'
    | 'amount1Out'
    | 'to'
    | 'logIndex'
    | 'amountUSD'

  export type Token = {
    id: Scalars['ID']
    symbol: Scalars['String']
    name: Scalars['String']
    decimals: Scalars['BigInt']
    totalSupply: Scalars['BigInt']
    tradeVolume: Scalars['BigDecimal']
    tradeVolumeUSD: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    totalLiquidity: Scalars['BigDecimal']
    derivedETH?: Maybe<Scalars['BigDecimal']>
    mostLiquidPairs: Array<Maybe<PairDayData>>
  }

  export type TokenmostLiquidPairsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairDayData_filter>
  }

  export type TokenDayData = {
    id: Scalars['ID']
    date: Scalars['Int']
    token: Token
    dailyVolumeToken: Scalars['BigDecimal']
    dailyVolumeETH: Scalars['BigDecimal']
    dailyVolumeUSD: Scalars['BigDecimal']
    dailyTxns: Scalars['BigInt']
    totalLiquidityToken: Scalars['BigDecimal']
    totalLiquidityETH: Scalars['BigDecimal']
    totalLiquidityUSD: Scalars['BigDecimal']
    priceUSD: Scalars['BigDecimal']
    maxStored: Scalars['Int']
    mostLiquidPairs: Array<PairDayData>
  }

  export type TokenDayDatamostLiquidPairsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairDayData_filter>
  }

  export type TokenDayData_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    date?: InputMaybe<Scalars['Int']>
    date_not?: InputMaybe<Scalars['Int']>
    date_gt?: InputMaybe<Scalars['Int']>
    date_lt?: InputMaybe<Scalars['Int']>
    date_gte?: InputMaybe<Scalars['Int']>
    date_lte?: InputMaybe<Scalars['Int']>
    date_in?: InputMaybe<Array<Scalars['Int']>>
    date_not_in?: InputMaybe<Array<Scalars['Int']>>
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
    dailyVolumeToken?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyTxns?: InputMaybe<Scalars['BigInt']>
    dailyTxns_not?: InputMaybe<Scalars['BigInt']>
    dailyTxns_gt?: InputMaybe<Scalars['BigInt']>
    dailyTxns_lt?: InputMaybe<Scalars['BigInt']>
    dailyTxns_gte?: InputMaybe<Scalars['BigInt']>
    dailyTxns_lte?: InputMaybe<Scalars['BigInt']>
    dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>
    dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    totalLiquidityToken?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityToken_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityToken_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityToken_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityToken_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityToken_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    priceUSD?: InputMaybe<Scalars['BigDecimal']>
    priceUSD_not?: InputMaybe<Scalars['BigDecimal']>
    priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    maxStored?: InputMaybe<Scalars['Int']>
    maxStored_not?: InputMaybe<Scalars['Int']>
    maxStored_gt?: InputMaybe<Scalars['Int']>
    maxStored_lt?: InputMaybe<Scalars['Int']>
    maxStored_gte?: InputMaybe<Scalars['Int']>
    maxStored_lte?: InputMaybe<Scalars['Int']>
    maxStored_in?: InputMaybe<Array<Scalars['Int']>>
    maxStored_not_in?: InputMaybe<Array<Scalars['Int']>>
    mostLiquidPairs?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_not?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type TokenDayData_orderBy =
    | 'id'
    | 'date'
    | 'token'
    | 'dailyVolumeToken'
    | 'dailyVolumeETH'
    | 'dailyVolumeUSD'
    | 'dailyTxns'
    | 'totalLiquidityToken'
    | 'totalLiquidityETH'
    | 'totalLiquidityUSD'
    | 'priceUSD'
    | 'maxStored'
    | 'mostLiquidPairs'

  export type Token_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
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
    decimals?: InputMaybe<Scalars['BigInt']>
    decimals_not?: InputMaybe<Scalars['BigInt']>
    decimals_gt?: InputMaybe<Scalars['BigInt']>
    decimals_lt?: InputMaybe<Scalars['BigInt']>
    decimals_gte?: InputMaybe<Scalars['BigInt']>
    decimals_lte?: InputMaybe<Scalars['BigInt']>
    decimals_in?: InputMaybe<Array<Scalars['BigInt']>>
    decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    totalSupply?: InputMaybe<Scalars['BigInt']>
    totalSupply_not?: InputMaybe<Scalars['BigInt']>
    totalSupply_gt?: InputMaybe<Scalars['BigInt']>
    totalSupply_lt?: InputMaybe<Scalars['BigInt']>
    totalSupply_gte?: InputMaybe<Scalars['BigInt']>
    totalSupply_lte?: InputMaybe<Scalars['BigInt']>
    totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    tradeVolume?: InputMaybe<Scalars['BigDecimal']>
    tradeVolume_not?: InputMaybe<Scalars['BigDecimal']>
    tradeVolume_gt?: InputMaybe<Scalars['BigDecimal']>
    tradeVolume_lt?: InputMaybe<Scalars['BigDecimal']>
    tradeVolume_gte?: InputMaybe<Scalars['BigDecimal']>
    tradeVolume_lte?: InputMaybe<Scalars['BigDecimal']>
    tradeVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    tradeVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    tradeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    tradeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    tradeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    tradeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    tradeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    tradeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    tradeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    tradeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    txCount?: InputMaybe<Scalars['BigInt']>
    txCount_not?: InputMaybe<Scalars['BigInt']>
    txCount_gt?: InputMaybe<Scalars['BigInt']>
    txCount_lt?: InputMaybe<Scalars['BigInt']>
    txCount_gte?: InputMaybe<Scalars['BigInt']>
    txCount_lte?: InputMaybe<Scalars['BigInt']>
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    totalLiquidity?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    derivedETH?: InputMaybe<Scalars['BigDecimal']>
    derivedETH_not?: InputMaybe<Scalars['BigDecimal']>
    derivedETH_gt?: InputMaybe<Scalars['BigDecimal']>
    derivedETH_lt?: InputMaybe<Scalars['BigDecimal']>
    derivedETH_gte?: InputMaybe<Scalars['BigDecimal']>
    derivedETH_lte?: InputMaybe<Scalars['BigDecimal']>
    derivedETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    derivedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    mostLiquidPairs?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_not?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Token_orderBy =
    | 'id'
    | 'symbol'
    | 'name'
    | 'decimals'
    | 'totalSupply'
    | 'tradeVolume'
    | 'tradeVolumeUSD'
    | 'untrackedVolumeUSD'
    | 'txCount'
    | 'totalLiquidity'
    | 'derivedETH'
    | 'mostLiquidPairs'

  export type Transaction = {
    id: Scalars['ID']
    blockNumber: Scalars['BigInt']
    timestamp: Scalars['BigInt']
    mints: Array<Maybe<Mint>>
    burns: Array<Maybe<Burn>>
    swaps: Array<Maybe<Swap>>
  }

  export type TransactionmintsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Mint_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Mint_filter>
  }

  export type TransactionburnsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Burn_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Burn_filter>
  }

  export type TransactionswapsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Swap_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Swap_filter>
  }

  export type Transaction_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
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
    mints?: InputMaybe<Array<Scalars['String']>>
    mints_not?: InputMaybe<Array<Scalars['String']>>
    mints_contains?: InputMaybe<Array<Scalars['String']>>
    mints_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    mints_not_contains?: InputMaybe<Array<Scalars['String']>>
    mints_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    burns?: InputMaybe<Array<Scalars['String']>>
    burns_not?: InputMaybe<Array<Scalars['String']>>
    burns_contains?: InputMaybe<Array<Scalars['String']>>
    burns_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    burns_not_contains?: InputMaybe<Array<Scalars['String']>>
    burns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    swaps?: InputMaybe<Array<Scalars['String']>>
    swaps_not?: InputMaybe<Array<Scalars['String']>>
    swaps_contains?: InputMaybe<Array<Scalars['String']>>
    swaps_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    swaps_not_contains?: InputMaybe<Array<Scalars['String']>>
    swaps_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Transaction_orderBy = 'id' | 'blockNumber' | 'timestamp' | 'mints' | 'burns' | 'swaps'

  export type UniswapDayData = {
    id: Scalars['ID']
    date: Scalars['Int']
    dailyVolumeETH: Scalars['BigDecimal']
    dailyVolumeUSD: Scalars['BigDecimal']
    dailyVolumeUntracked: Scalars['BigDecimal']
    totalVolumeETH: Scalars['BigDecimal']
    totalLiquidityETH: Scalars['BigDecimal']
    totalVolumeUSD: Scalars['BigDecimal']
    totalLiquidityUSD: Scalars['BigDecimal']
    maxStored?: Maybe<Scalars['Int']>
    mostLiquidTokens: Array<TokenDayData>
    txCount: Scalars['BigInt']
  }

  export type UniswapDayDatamostLiquidTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TokenDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TokenDayData_filter>
  }

  export type UniswapDayData_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    date?: InputMaybe<Scalars['Int']>
    date_not?: InputMaybe<Scalars['Int']>
    date_gt?: InputMaybe<Scalars['Int']>
    date_lt?: InputMaybe<Scalars['Int']>
    date_gte?: InputMaybe<Scalars['Int']>
    date_lte?: InputMaybe<Scalars['Int']>
    date_in?: InputMaybe<Array<Scalars['Int']>>
    date_not_in?: InputMaybe<Array<Scalars['Int']>>
    dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUntracked?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUntracked_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUntracked_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUntracked_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUntracked_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUntracked_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    maxStored?: InputMaybe<Scalars['Int']>
    maxStored_not?: InputMaybe<Scalars['Int']>
    maxStored_gt?: InputMaybe<Scalars['Int']>
    maxStored_lt?: InputMaybe<Scalars['Int']>
    maxStored_gte?: InputMaybe<Scalars['Int']>
    maxStored_lte?: InputMaybe<Scalars['Int']>
    maxStored_in?: InputMaybe<Array<Scalars['Int']>>
    maxStored_not_in?: InputMaybe<Array<Scalars['Int']>>
    mostLiquidTokens?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_not?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    txCount?: InputMaybe<Scalars['BigInt']>
    txCount_not?: InputMaybe<Scalars['BigInt']>
    txCount_gt?: InputMaybe<Scalars['BigInt']>
    txCount_lt?: InputMaybe<Scalars['BigInt']>
    txCount_gte?: InputMaybe<Scalars['BigInt']>
    txCount_lte?: InputMaybe<Scalars['BigInt']>
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type UniswapDayData_orderBy =
    | 'id'
    | 'date'
    | 'dailyVolumeETH'
    | 'dailyVolumeUSD'
    | 'dailyVolumeUntracked'
    | 'totalVolumeETH'
    | 'totalLiquidityETH'
    | 'totalVolumeUSD'
    | 'totalLiquidityUSD'
    | 'maxStored'
    | 'mostLiquidTokens'
    | 'txCount'

  export type UniswapFactory = {
    id: Scalars['ID']
    pairCount: Scalars['Int']
    totalVolumeUSD: Scalars['BigDecimal']
    totalVolumeETH: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    totalLiquidityUSD: Scalars['BigDecimal']
    totalLiquidityETH: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    mostLiquidTokens: Array<TokenDayData>
  }

  export type UniswapFactorymostLiquidTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TokenDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TokenDayData_filter>
  }

  export type UniswapFactory_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    pairCount?: InputMaybe<Scalars['Int']>
    pairCount_not?: InputMaybe<Scalars['Int']>
    pairCount_gt?: InputMaybe<Scalars['Int']>
    pairCount_lt?: InputMaybe<Scalars['Int']>
    pairCount_gte?: InputMaybe<Scalars['Int']>
    pairCount_lte?: InputMaybe<Scalars['Int']>
    pairCount_in?: InputMaybe<Array<Scalars['Int']>>
    pairCount_not_in?: InputMaybe<Array<Scalars['Int']>>
    totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    txCount?: InputMaybe<Scalars['BigInt']>
    txCount_not?: InputMaybe<Scalars['BigInt']>
    txCount_gt?: InputMaybe<Scalars['BigInt']>
    txCount_lt?: InputMaybe<Scalars['BigInt']>
    txCount_gte?: InputMaybe<Scalars['BigInt']>
    txCount_lte?: InputMaybe<Scalars['BigInt']>
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    mostLiquidTokens?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_not?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type UniswapFactory_orderBy =
    | 'id'
    | 'pairCount'
    | 'totalVolumeUSD'
    | 'totalVolumeETH'
    | 'untrackedVolumeUSD'
    | 'totalLiquidityUSD'
    | 'totalLiquidityETH'
    | 'txCount'
    | 'mostLiquidTokens'

  export type User = {
    id: Scalars['ID']
    liquidityPositions?: Maybe<Array<LiquidityPosition>>
    usdSwapped: Scalars['BigDecimal']
  }

  export type UserliquidityPositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPosition_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPosition_filter>
  }

  export type User_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    usdSwapped?: InputMaybe<Scalars['BigDecimal']>
    usdSwapped_not?: InputMaybe<Scalars['BigDecimal']>
    usdSwapped_gt?: InputMaybe<Scalars['BigDecimal']>
    usdSwapped_lt?: InputMaybe<Scalars['BigDecimal']>
    usdSwapped_gte?: InputMaybe<Scalars['BigDecimal']>
    usdSwapped_lte?: InputMaybe<Scalars['BigDecimal']>
    usdSwapped_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    usdSwapped_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type User_orderBy = 'id' | 'liquidityPositions' | 'usdSwapped'

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
export type QueryChain2Sdk = {
  /** null **/
  Chain2_uniswapFactory: InContextSdkMethod<
    Chain2Types.Query['Chain2_uniswapFactory'],
    Chain2Types.QueryChain2_uniswapFactoryArgs,
    MeshContext
  >
  /** null **/
  Chain2_uniswapFactories: InContextSdkMethod<
    Chain2Types.Query['Chain2_uniswapFactories'],
    Chain2Types.QueryChain2_uniswapFactoriesArgs,
    MeshContext
  >
  /** null **/
  Chain2_token: InContextSdkMethod<Chain2Types.Query['Chain2_token'], Chain2Types.QueryChain2_tokenArgs, MeshContext>
  /** null **/
  Chain2_tokens: InContextSdkMethod<Chain2Types.Query['Chain2_tokens'], Chain2Types.QueryChain2_tokensArgs, MeshContext>
  /** null **/
  Chain2_pair: InContextSdkMethod<Chain2Types.Query['Chain2_pair'], Chain2Types.QueryChain2_pairArgs, MeshContext>
  /** null **/
  Chain2_pairs: InContextSdkMethod<Chain2Types.Query['Chain2_pairs'], Chain2Types.QueryChain2_pairsArgs, MeshContext>
  /** null **/
  Chain2_user: InContextSdkMethod<Chain2Types.Query['Chain2_user'], Chain2Types.QueryChain2_userArgs, MeshContext>
  /** null **/
  Chain2_users: InContextSdkMethod<Chain2Types.Query['Chain2_users'], Chain2Types.QueryChain2_usersArgs, MeshContext>
  /** null **/
  Chain2_liquidityPosition: InContextSdkMethod<
    Chain2Types.Query['Chain2_liquidityPosition'],
    Chain2Types.QueryChain2_liquidityPositionArgs,
    MeshContext
  >
  /** null **/
  Chain2_liquidityPositions: InContextSdkMethod<
    Chain2Types.Query['Chain2_liquidityPositions'],
    Chain2Types.QueryChain2_liquidityPositionsArgs,
    MeshContext
  >
  /** null **/
  Chain2_liquidityPositionSnapshot: InContextSdkMethod<
    Chain2Types.Query['Chain2_liquidityPositionSnapshot'],
    Chain2Types.QueryChain2_liquidityPositionSnapshotArgs,
    MeshContext
  >
  /** null **/
  Chain2_liquidityPositionSnapshots: InContextSdkMethod<
    Chain2Types.Query['Chain2_liquidityPositionSnapshots'],
    Chain2Types.QueryChain2_liquidityPositionSnapshotsArgs,
    MeshContext
  >
  /** null **/
  Chain2_transaction: InContextSdkMethod<
    Chain2Types.Query['Chain2_transaction'],
    Chain2Types.QueryChain2_transactionArgs,
    MeshContext
  >
  /** null **/
  Chain2_transactions: InContextSdkMethod<
    Chain2Types.Query['Chain2_transactions'],
    Chain2Types.QueryChain2_transactionsArgs,
    MeshContext
  >
  /** null **/
  Chain2_mint: InContextSdkMethod<Chain2Types.Query['Chain2_mint'], Chain2Types.QueryChain2_mintArgs, MeshContext>
  /** null **/
  Chain2_mints: InContextSdkMethod<Chain2Types.Query['Chain2_mints'], Chain2Types.QueryChain2_mintsArgs, MeshContext>
  /** null **/
  Chain2_burn: InContextSdkMethod<Chain2Types.Query['Chain2_burn'], Chain2Types.QueryChain2_burnArgs, MeshContext>
  /** null **/
  Chain2_burns: InContextSdkMethod<Chain2Types.Query['Chain2_burns'], Chain2Types.QueryChain2_burnsArgs, MeshContext>
  /** null **/
  Chain2_swap: InContextSdkMethod<Chain2Types.Query['Chain2_swap'], Chain2Types.QueryChain2_swapArgs, MeshContext>
  /** null **/
  Chain2_swaps: InContextSdkMethod<Chain2Types.Query['Chain2_swaps'], Chain2Types.QueryChain2_swapsArgs, MeshContext>
  /** null **/
  Chain2_bundle: InContextSdkMethod<Chain2Types.Query['Chain2_bundle'], Chain2Types.QueryChain2_bundleArgs, MeshContext>
  /** null **/
  Chain2_bundles: InContextSdkMethod<
    Chain2Types.Query['Chain2_bundles'],
    Chain2Types.QueryChain2_bundlesArgs,
    MeshContext
  >
  /** null **/
  Chain2_uniswapDayData: InContextSdkMethod<
    Chain2Types.Query['Chain2_uniswapDayData'],
    Chain2Types.QueryChain2_uniswapDayDataArgs,
    MeshContext
  >
  /** null **/
  Chain2_uniswapDayDatas: InContextSdkMethod<
    Chain2Types.Query['Chain2_uniswapDayDatas'],
    Chain2Types.QueryChain2_uniswapDayDatasArgs,
    MeshContext
  >
  /** null **/
  Chain2_pairHourData: InContextSdkMethod<
    Chain2Types.Query['Chain2_pairHourData'],
    Chain2Types.QueryChain2_pairHourDataArgs,
    MeshContext
  >
  /** null **/
  Chain2_pairHourDatas: InContextSdkMethod<
    Chain2Types.Query['Chain2_pairHourDatas'],
    Chain2Types.QueryChain2_pairHourDatasArgs,
    MeshContext
  >
  /** null **/
  Chain2_pairDayData: InContextSdkMethod<
    Chain2Types.Query['Chain2_pairDayData'],
    Chain2Types.QueryChain2_pairDayDataArgs,
    MeshContext
  >
  /** null **/
  Chain2_pairDayDatas: InContextSdkMethod<
    Chain2Types.Query['Chain2_pairDayDatas'],
    Chain2Types.QueryChain2_pairDayDatasArgs,
    MeshContext
  >
  /** null **/
  Chain2_tokenDayData: InContextSdkMethod<
    Chain2Types.Query['Chain2_tokenDayData'],
    Chain2Types.QueryChain2_tokenDayDataArgs,
    MeshContext
  >
  /** null **/
  Chain2_tokenDayDatas: InContextSdkMethod<
    Chain2Types.Query['Chain2_tokenDayDatas'],
    Chain2Types.QueryChain2_tokenDayDatasArgs,
    MeshContext
  >
  /** Access to subgraph metadata **/
  Chain2__meta: InContextSdkMethod<Chain2Types.Query['Chain2__meta'], Chain2Types.QueryChain2__metaArgs, MeshContext>
}

export type MutationChain2Sdk = {}

export type SubscriptionChain2Sdk = {
  /** null **/
  Chain2_uniswapFactory: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_uniswapFactory'],
    Chain2Types.SubscriptionChain2_uniswapFactoryArgs,
    MeshContext
  >
  /** null **/
  Chain2_uniswapFactories: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_uniswapFactories'],
    Chain2Types.SubscriptionChain2_uniswapFactoriesArgs,
    MeshContext
  >
  /** null **/
  Chain2_token: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_token'],
    Chain2Types.SubscriptionChain2_tokenArgs,
    MeshContext
  >
  /** null **/
  Chain2_tokens: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_tokens'],
    Chain2Types.SubscriptionChain2_tokensArgs,
    MeshContext
  >
  /** null **/
  Chain2_pair: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_pair'],
    Chain2Types.SubscriptionChain2_pairArgs,
    MeshContext
  >
  /** null **/
  Chain2_pairs: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_pairs'],
    Chain2Types.SubscriptionChain2_pairsArgs,
    MeshContext
  >
  /** null **/
  Chain2_user: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_user'],
    Chain2Types.SubscriptionChain2_userArgs,
    MeshContext
  >
  /** null **/
  Chain2_users: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_users'],
    Chain2Types.SubscriptionChain2_usersArgs,
    MeshContext
  >
  /** null **/
  Chain2_liquidityPosition: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_liquidityPosition'],
    Chain2Types.SubscriptionChain2_liquidityPositionArgs,
    MeshContext
  >
  /** null **/
  Chain2_liquidityPositions: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_liquidityPositions'],
    Chain2Types.SubscriptionChain2_liquidityPositionsArgs,
    MeshContext
  >
  /** null **/
  Chain2_liquidityPositionSnapshot: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_liquidityPositionSnapshot'],
    Chain2Types.SubscriptionChain2_liquidityPositionSnapshotArgs,
    MeshContext
  >
  /** null **/
  Chain2_liquidityPositionSnapshots: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_liquidityPositionSnapshots'],
    Chain2Types.SubscriptionChain2_liquidityPositionSnapshotsArgs,
    MeshContext
  >
  /** null **/
  Chain2_transaction: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_transaction'],
    Chain2Types.SubscriptionChain2_transactionArgs,
    MeshContext
  >
  /** null **/
  Chain2_transactions: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_transactions'],
    Chain2Types.SubscriptionChain2_transactionsArgs,
    MeshContext
  >
  /** null **/
  Chain2_mint: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_mint'],
    Chain2Types.SubscriptionChain2_mintArgs,
    MeshContext
  >
  /** null **/
  Chain2_mints: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_mints'],
    Chain2Types.SubscriptionChain2_mintsArgs,
    MeshContext
  >
  /** null **/
  Chain2_burn: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_burn'],
    Chain2Types.SubscriptionChain2_burnArgs,
    MeshContext
  >
  /** null **/
  Chain2_burns: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_burns'],
    Chain2Types.SubscriptionChain2_burnsArgs,
    MeshContext
  >
  /** null **/
  Chain2_swap: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_swap'],
    Chain2Types.SubscriptionChain2_swapArgs,
    MeshContext
  >
  /** null **/
  Chain2_swaps: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_swaps'],
    Chain2Types.SubscriptionChain2_swapsArgs,
    MeshContext
  >
  /** null **/
  Chain2_bundle: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_bundle'],
    Chain2Types.SubscriptionChain2_bundleArgs,
    MeshContext
  >
  /** null **/
  Chain2_bundles: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_bundles'],
    Chain2Types.SubscriptionChain2_bundlesArgs,
    MeshContext
  >
  /** null **/
  Chain2_uniswapDayData: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_uniswapDayData'],
    Chain2Types.SubscriptionChain2_uniswapDayDataArgs,
    MeshContext
  >
  /** null **/
  Chain2_uniswapDayDatas: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_uniswapDayDatas'],
    Chain2Types.SubscriptionChain2_uniswapDayDatasArgs,
    MeshContext
  >
  /** null **/
  Chain2_pairHourData: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_pairHourData'],
    Chain2Types.SubscriptionChain2_pairHourDataArgs,
    MeshContext
  >
  /** null **/
  Chain2_pairHourDatas: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_pairHourDatas'],
    Chain2Types.SubscriptionChain2_pairHourDatasArgs,
    MeshContext
  >
  /** null **/
  Chain2_pairDayData: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_pairDayData'],
    Chain2Types.SubscriptionChain2_pairDayDataArgs,
    MeshContext
  >
  /** null **/
  Chain2_pairDayDatas: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_pairDayDatas'],
    Chain2Types.SubscriptionChain2_pairDayDatasArgs,
    MeshContext
  >
  /** null **/
  Chain2_tokenDayData: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_tokenDayData'],
    Chain2Types.SubscriptionChain2_tokenDayDataArgs,
    MeshContext
  >
  /** null **/
  Chain2_tokenDayDatas: InContextSdkMethod<
    Chain2Types.Subscription['Chain2_tokenDayDatas'],
    Chain2Types.SubscriptionChain2_tokenDayDatasArgs,
    MeshContext
  >
  /** Access to subgraph metadata **/
  Chain2__meta: InContextSdkMethod<
    Chain2Types.Subscription['Chain2__meta'],
    Chain2Types.SubscriptionChain2__metaArgs,
    MeshContext
  >
}

export namespace Chain1Types {
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

  export type BlockChangedFilter = {
    number_gte: Scalars['Int']
  }

  export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>
    number?: InputMaybe<Scalars['Int']>
    number_gte?: InputMaybe<Scalars['Int']>
  }

  export type Bundle = {
    id: Scalars['ID']
    ethPrice: Scalars['BigDecimal']
  }

  export type Bundle_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    ethPrice?: InputMaybe<Scalars['BigDecimal']>
    ethPrice_not?: InputMaybe<Scalars['BigDecimal']>
    ethPrice_gt?: InputMaybe<Scalars['BigDecimal']>
    ethPrice_lt?: InputMaybe<Scalars['BigDecimal']>
    ethPrice_gte?: InputMaybe<Scalars['BigDecimal']>
    ethPrice_lte?: InputMaybe<Scalars['BigDecimal']>
    ethPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    ethPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Bundle_orderBy = 'id' | 'ethPrice'

  export type Burn = {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pair: Pair
    liquidity: Scalars['BigDecimal']
    sender?: Maybe<Scalars['Bytes']>
    amount0?: Maybe<Scalars['BigDecimal']>
    amount1?: Maybe<Scalars['BigDecimal']>
    to?: Maybe<Scalars['Bytes']>
    logIndex?: Maybe<Scalars['BigInt']>
    amountUSD?: Maybe<Scalars['BigDecimal']>
    needsComplete: Scalars['Boolean']
    feeTo?: Maybe<Scalars['Bytes']>
    feeLiquidity?: Maybe<Scalars['BigDecimal']>
  }

  export type Burn_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    transaction?: InputMaybe<Scalars['String']>
    transaction_not?: InputMaybe<Scalars['String']>
    transaction_gt?: InputMaybe<Scalars['String']>
    transaction_lt?: InputMaybe<Scalars['String']>
    transaction_gte?: InputMaybe<Scalars['String']>
    transaction_lte?: InputMaybe<Scalars['String']>
    transaction_in?: InputMaybe<Array<Scalars['String']>>
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>
    transaction_contains?: InputMaybe<Scalars['String']>
    transaction_contains_nocase?: InputMaybe<Scalars['String']>
    transaction_not_contains?: InputMaybe<Scalars['String']>
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>
    transaction_starts_with?: InputMaybe<Scalars['String']>
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>
    transaction_not_starts_with?: InputMaybe<Scalars['String']>
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    transaction_ends_with?: InputMaybe<Scalars['String']>
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>
    transaction_not_ends_with?: InputMaybe<Scalars['String']>
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_contains_nocase?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    liquidity?: InputMaybe<Scalars['BigDecimal']>
    liquidity_not?: InputMaybe<Scalars['BigDecimal']>
    liquidity_gt?: InputMaybe<Scalars['BigDecimal']>
    liquidity_lt?: InputMaybe<Scalars['BigDecimal']>
    liquidity_gte?: InputMaybe<Scalars['BigDecimal']>
    liquidity_lte?: InputMaybe<Scalars['BigDecimal']>
    liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    sender?: InputMaybe<Scalars['Bytes']>
    sender_not?: InputMaybe<Scalars['Bytes']>
    sender_in?: InputMaybe<Array<Scalars['Bytes']>>
    sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    sender_contains?: InputMaybe<Scalars['Bytes']>
    sender_not_contains?: InputMaybe<Scalars['Bytes']>
    amount0?: InputMaybe<Scalars['BigDecimal']>
    amount0_not?: InputMaybe<Scalars['BigDecimal']>
    amount0_gt?: InputMaybe<Scalars['BigDecimal']>
    amount0_lt?: InputMaybe<Scalars['BigDecimal']>
    amount0_gte?: InputMaybe<Scalars['BigDecimal']>
    amount0_lte?: InputMaybe<Scalars['BigDecimal']>
    amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1?: InputMaybe<Scalars['BigDecimal']>
    amount1_not?: InputMaybe<Scalars['BigDecimal']>
    amount1_gt?: InputMaybe<Scalars['BigDecimal']>
    amount1_lt?: InputMaybe<Scalars['BigDecimal']>
    amount1_gte?: InputMaybe<Scalars['BigDecimal']>
    amount1_lte?: InputMaybe<Scalars['BigDecimal']>
    amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    to?: InputMaybe<Scalars['Bytes']>
    to_not?: InputMaybe<Scalars['Bytes']>
    to_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_contains?: InputMaybe<Scalars['Bytes']>
    to_not_contains?: InputMaybe<Scalars['Bytes']>
    logIndex?: InputMaybe<Scalars['BigInt']>
    logIndex_not?: InputMaybe<Scalars['BigInt']>
    logIndex_gt?: InputMaybe<Scalars['BigInt']>
    logIndex_lt?: InputMaybe<Scalars['BigInt']>
    logIndex_gte?: InputMaybe<Scalars['BigInt']>
    logIndex_lte?: InputMaybe<Scalars['BigInt']>
    logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>
    logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    amountUSD?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    needsComplete?: InputMaybe<Scalars['Boolean']>
    needsComplete_not?: InputMaybe<Scalars['Boolean']>
    needsComplete_in?: InputMaybe<Array<Scalars['Boolean']>>
    needsComplete_not_in?: InputMaybe<Array<Scalars['Boolean']>>
    feeTo?: InputMaybe<Scalars['Bytes']>
    feeTo_not?: InputMaybe<Scalars['Bytes']>
    feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>
    feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    feeTo_contains?: InputMaybe<Scalars['Bytes']>
    feeTo_not_contains?: InputMaybe<Scalars['Bytes']>
    feeLiquidity?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Burn_orderBy =
    | 'id'
    | 'transaction'
    | 'timestamp'
    | 'pair'
    | 'liquidity'
    | 'sender'
    | 'amount0'
    | 'amount1'
    | 'to'
    | 'logIndex'
    | 'amountUSD'
    | 'needsComplete'
    | 'feeTo'
    | 'feeLiquidity'

  export type LiquidityPosition = {
    id: Scalars['ID']
    user: User
    pair: Pair
    liquidityTokenBalance: Scalars['BigDecimal']
  }

  export type LiquidityPositionSnapshot = {
    id: Scalars['ID']
    liquidityPosition: LiquidityPosition
    timestamp: Scalars['Int']
    block: Scalars['Int']
    user: User
    pair: Pair
    token0PriceUSD: Scalars['BigDecimal']
    token1PriceUSD: Scalars['BigDecimal']
    reserve0: Scalars['BigDecimal']
    reserve1: Scalars['BigDecimal']
    reserveUSD: Scalars['BigDecimal']
    liquidityTokenTotalSupply: Scalars['BigDecimal']
    liquidityTokenBalance: Scalars['BigDecimal']
  }

  export type LiquidityPositionSnapshot_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    liquidityPosition?: InputMaybe<Scalars['String']>
    liquidityPosition_not?: InputMaybe<Scalars['String']>
    liquidityPosition_gt?: InputMaybe<Scalars['String']>
    liquidityPosition_lt?: InputMaybe<Scalars['String']>
    liquidityPosition_gte?: InputMaybe<Scalars['String']>
    liquidityPosition_lte?: InputMaybe<Scalars['String']>
    liquidityPosition_in?: InputMaybe<Array<Scalars['String']>>
    liquidityPosition_not_in?: InputMaybe<Array<Scalars['String']>>
    liquidityPosition_contains?: InputMaybe<Scalars['String']>
    liquidityPosition_contains_nocase?: InputMaybe<Scalars['String']>
    liquidityPosition_not_contains?: InputMaybe<Scalars['String']>
    liquidityPosition_not_contains_nocase?: InputMaybe<Scalars['String']>
    liquidityPosition_starts_with?: InputMaybe<Scalars['String']>
    liquidityPosition_starts_with_nocase?: InputMaybe<Scalars['String']>
    liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>
    liquidityPosition_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    liquidityPosition_ends_with?: InputMaybe<Scalars['String']>
    liquidityPosition_ends_with_nocase?: InputMaybe<Scalars['String']>
    liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>
    liquidityPosition_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    timestamp?: InputMaybe<Scalars['Int']>
    timestamp_not?: InputMaybe<Scalars['Int']>
    timestamp_gt?: InputMaybe<Scalars['Int']>
    timestamp_lt?: InputMaybe<Scalars['Int']>
    timestamp_gte?: InputMaybe<Scalars['Int']>
    timestamp_lte?: InputMaybe<Scalars['Int']>
    timestamp_in?: InputMaybe<Array<Scalars['Int']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['Int']>>
    block?: InputMaybe<Scalars['Int']>
    block_not?: InputMaybe<Scalars['Int']>
    block_gt?: InputMaybe<Scalars['Int']>
    block_lt?: InputMaybe<Scalars['Int']>
    block_gte?: InputMaybe<Scalars['Int']>
    block_lte?: InputMaybe<Scalars['Int']>
    block_in?: InputMaybe<Array<Scalars['Int']>>
    block_not_in?: InputMaybe<Array<Scalars['Int']>>
    user?: InputMaybe<Scalars['String']>
    user_not?: InputMaybe<Scalars['String']>
    user_gt?: InputMaybe<Scalars['String']>
    user_lt?: InputMaybe<Scalars['String']>
    user_gte?: InputMaybe<Scalars['String']>
    user_lte?: InputMaybe<Scalars['String']>
    user_in?: InputMaybe<Array<Scalars['String']>>
    user_not_in?: InputMaybe<Array<Scalars['String']>>
    user_contains?: InputMaybe<Scalars['String']>
    user_contains_nocase?: InputMaybe<Scalars['String']>
    user_not_contains?: InputMaybe<Scalars['String']>
    user_not_contains_nocase?: InputMaybe<Scalars['String']>
    user_starts_with?: InputMaybe<Scalars['String']>
    user_starts_with_nocase?: InputMaybe<Scalars['String']>
    user_not_starts_with?: InputMaybe<Scalars['String']>
    user_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    user_ends_with?: InputMaybe<Scalars['String']>
    user_ends_with_nocase?: InputMaybe<Scalars['String']>
    user_not_ends_with?: InputMaybe<Scalars['String']>
    user_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_contains_nocase?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    token0PriceUSD?: InputMaybe<Scalars['BigDecimal']>
    token0PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
    token0PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    token0PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    token0PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    token0PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    token0PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token0PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token1PriceUSD?: InputMaybe<Scalars['BigDecimal']>
    token1PriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
    token1PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    token1PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    token1PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    token1PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    token1PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token1PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve0?: InputMaybe<Scalars['BigDecimal']>
    reserve0_not?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1?: InputMaybe<Scalars['BigDecimal']>
    reserve1_not?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidityTokenTotalSupply?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenTotalSupply_not?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidityTokenTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type LiquidityPositionSnapshot_orderBy =
    | 'id'
    | 'liquidityPosition'
    | 'timestamp'
    | 'block'
    | 'user'
    | 'pair'
    | 'token0PriceUSD'
    | 'token1PriceUSD'
    | 'reserve0'
    | 'reserve1'
    | 'reserveUSD'
    | 'liquidityTokenTotalSupply'
    | 'liquidityTokenBalance'

  export type LiquidityPosition_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    user?: InputMaybe<Scalars['String']>
    user_not?: InputMaybe<Scalars['String']>
    user_gt?: InputMaybe<Scalars['String']>
    user_lt?: InputMaybe<Scalars['String']>
    user_gte?: InputMaybe<Scalars['String']>
    user_lte?: InputMaybe<Scalars['String']>
    user_in?: InputMaybe<Array<Scalars['String']>>
    user_not_in?: InputMaybe<Array<Scalars['String']>>
    user_contains?: InputMaybe<Scalars['String']>
    user_contains_nocase?: InputMaybe<Scalars['String']>
    user_not_contains?: InputMaybe<Scalars['String']>
    user_not_contains_nocase?: InputMaybe<Scalars['String']>
    user_starts_with?: InputMaybe<Scalars['String']>
    user_starts_with_nocase?: InputMaybe<Scalars['String']>
    user_not_starts_with?: InputMaybe<Scalars['String']>
    user_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    user_ends_with?: InputMaybe<Scalars['String']>
    user_ends_with_nocase?: InputMaybe<Scalars['String']>
    user_not_ends_with?: InputMaybe<Scalars['String']>
    user_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_contains_nocase?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type LiquidityPosition_orderBy = 'id' | 'user' | 'pair' | 'liquidityTokenBalance'

  export type Mint = {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pair: Pair
    to: Scalars['Bytes']
    liquidity: Scalars['BigDecimal']
    sender?: Maybe<Scalars['Bytes']>
    amount0?: Maybe<Scalars['BigDecimal']>
    amount1?: Maybe<Scalars['BigDecimal']>
    logIndex?: Maybe<Scalars['BigInt']>
    amountUSD?: Maybe<Scalars['BigDecimal']>
    feeTo?: Maybe<Scalars['Bytes']>
    feeLiquidity?: Maybe<Scalars['BigDecimal']>
  }

  export type Mint_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    transaction?: InputMaybe<Scalars['String']>
    transaction_not?: InputMaybe<Scalars['String']>
    transaction_gt?: InputMaybe<Scalars['String']>
    transaction_lt?: InputMaybe<Scalars['String']>
    transaction_gte?: InputMaybe<Scalars['String']>
    transaction_lte?: InputMaybe<Scalars['String']>
    transaction_in?: InputMaybe<Array<Scalars['String']>>
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>
    transaction_contains?: InputMaybe<Scalars['String']>
    transaction_contains_nocase?: InputMaybe<Scalars['String']>
    transaction_not_contains?: InputMaybe<Scalars['String']>
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>
    transaction_starts_with?: InputMaybe<Scalars['String']>
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>
    transaction_not_starts_with?: InputMaybe<Scalars['String']>
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    transaction_ends_with?: InputMaybe<Scalars['String']>
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>
    transaction_not_ends_with?: InputMaybe<Scalars['String']>
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_contains_nocase?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    to?: InputMaybe<Scalars['Bytes']>
    to_not?: InputMaybe<Scalars['Bytes']>
    to_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_contains?: InputMaybe<Scalars['Bytes']>
    to_not_contains?: InputMaybe<Scalars['Bytes']>
    liquidity?: InputMaybe<Scalars['BigDecimal']>
    liquidity_not?: InputMaybe<Scalars['BigDecimal']>
    liquidity_gt?: InputMaybe<Scalars['BigDecimal']>
    liquidity_lt?: InputMaybe<Scalars['BigDecimal']>
    liquidity_gte?: InputMaybe<Scalars['BigDecimal']>
    liquidity_lte?: InputMaybe<Scalars['BigDecimal']>
    liquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    sender?: InputMaybe<Scalars['Bytes']>
    sender_not?: InputMaybe<Scalars['Bytes']>
    sender_in?: InputMaybe<Array<Scalars['Bytes']>>
    sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    sender_contains?: InputMaybe<Scalars['Bytes']>
    sender_not_contains?: InputMaybe<Scalars['Bytes']>
    amount0?: InputMaybe<Scalars['BigDecimal']>
    amount0_not?: InputMaybe<Scalars['BigDecimal']>
    amount0_gt?: InputMaybe<Scalars['BigDecimal']>
    amount0_lt?: InputMaybe<Scalars['BigDecimal']>
    amount0_gte?: InputMaybe<Scalars['BigDecimal']>
    amount0_lte?: InputMaybe<Scalars['BigDecimal']>
    amount0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1?: InputMaybe<Scalars['BigDecimal']>
    amount1_not?: InputMaybe<Scalars['BigDecimal']>
    amount1_gt?: InputMaybe<Scalars['BigDecimal']>
    amount1_lt?: InputMaybe<Scalars['BigDecimal']>
    amount1_gte?: InputMaybe<Scalars['BigDecimal']>
    amount1_lte?: InputMaybe<Scalars['BigDecimal']>
    amount1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    logIndex?: InputMaybe<Scalars['BigInt']>
    logIndex_not?: InputMaybe<Scalars['BigInt']>
    logIndex_gt?: InputMaybe<Scalars['BigInt']>
    logIndex_lt?: InputMaybe<Scalars['BigInt']>
    logIndex_gte?: InputMaybe<Scalars['BigInt']>
    logIndex_lte?: InputMaybe<Scalars['BigInt']>
    logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>
    logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    amountUSD?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    feeTo?: InputMaybe<Scalars['Bytes']>
    feeTo_not?: InputMaybe<Scalars['Bytes']>
    feeTo_in?: InputMaybe<Array<Scalars['Bytes']>>
    feeTo_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    feeTo_contains?: InputMaybe<Scalars['Bytes']>
    feeTo_not_contains?: InputMaybe<Scalars['Bytes']>
    feeLiquidity?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_not?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>
    feeLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    feeLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Mint_orderBy =
    | 'id'
    | 'transaction'
    | 'timestamp'
    | 'pair'
    | 'to'
    | 'liquidity'
    | 'sender'
    | 'amount0'
    | 'amount1'
    | 'logIndex'
    | 'amountUSD'
    | 'feeTo'
    | 'feeLiquidity'

  /** Defines the order direction, either ascending or descending */
  export type OrderDirection = 'asc' | 'desc'

  export type Pair = {
    id: Scalars['ID']
    token0: Token
    token1: Token
    reserve0: Scalars['BigDecimal']
    reserve1: Scalars['BigDecimal']
    totalSupply: Scalars['BigDecimal']
    reserveETH: Scalars['BigDecimal']
    reserveUSD: Scalars['BigDecimal']
    trackedReserveETH: Scalars['BigDecimal']
    token0Price: Scalars['BigDecimal']
    token1Price: Scalars['BigDecimal']
    volumeToken0: Scalars['BigDecimal']
    volumeToken1: Scalars['BigDecimal']
    volumeUSD: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    createdAtTimestamp: Scalars['BigInt']
    createdAtBlockNumber: Scalars['BigInt']
    liquidityProviderCount: Scalars['BigInt']
  }

  export type PairDayData = {
    id: Scalars['ID']
    date: Scalars['Int']
    pairAddress: Scalars['Bytes']
    token0: Token
    token1: Token
    reserve0: Scalars['BigDecimal']
    reserve1: Scalars['BigDecimal']
    totalSupply: Scalars['BigDecimal']
    reserveUSD: Scalars['BigDecimal']
    dailyVolumeToken0: Scalars['BigDecimal']
    dailyVolumeToken1: Scalars['BigDecimal']
    dailyVolumeUSD: Scalars['BigDecimal']
    dailyTxns: Scalars['BigInt']
  }

  export type PairDayData_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    date?: InputMaybe<Scalars['Int']>
    date_not?: InputMaybe<Scalars['Int']>
    date_gt?: InputMaybe<Scalars['Int']>
    date_lt?: InputMaybe<Scalars['Int']>
    date_gte?: InputMaybe<Scalars['Int']>
    date_lte?: InputMaybe<Scalars['Int']>
    date_in?: InputMaybe<Array<Scalars['Int']>>
    date_not_in?: InputMaybe<Array<Scalars['Int']>>
    pairAddress?: InputMaybe<Scalars['Bytes']>
    pairAddress_not?: InputMaybe<Scalars['Bytes']>
    pairAddress_in?: InputMaybe<Array<Scalars['Bytes']>>
    pairAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    pairAddress_contains?: InputMaybe<Scalars['Bytes']>
    pairAddress_not_contains?: InputMaybe<Scalars['Bytes']>
    token0?: InputMaybe<Scalars['String']>
    token0_not?: InputMaybe<Scalars['String']>
    token0_gt?: InputMaybe<Scalars['String']>
    token0_lt?: InputMaybe<Scalars['String']>
    token0_gte?: InputMaybe<Scalars['String']>
    token0_lte?: InputMaybe<Scalars['String']>
    token0_in?: InputMaybe<Array<Scalars['String']>>
    token0_not_in?: InputMaybe<Array<Scalars['String']>>
    token0_contains?: InputMaybe<Scalars['String']>
    token0_contains_nocase?: InputMaybe<Scalars['String']>
    token0_not_contains?: InputMaybe<Scalars['String']>
    token0_not_contains_nocase?: InputMaybe<Scalars['String']>
    token0_starts_with?: InputMaybe<Scalars['String']>
    token0_starts_with_nocase?: InputMaybe<Scalars['String']>
    token0_not_starts_with?: InputMaybe<Scalars['String']>
    token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    token0_ends_with?: InputMaybe<Scalars['String']>
    token0_ends_with_nocase?: InputMaybe<Scalars['String']>
    token0_not_ends_with?: InputMaybe<Scalars['String']>
    token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    token1?: InputMaybe<Scalars['String']>
    token1_not?: InputMaybe<Scalars['String']>
    token1_gt?: InputMaybe<Scalars['String']>
    token1_lt?: InputMaybe<Scalars['String']>
    token1_gte?: InputMaybe<Scalars['String']>
    token1_lte?: InputMaybe<Scalars['String']>
    token1_in?: InputMaybe<Array<Scalars['String']>>
    token1_not_in?: InputMaybe<Array<Scalars['String']>>
    token1_contains?: InputMaybe<Scalars['String']>
    token1_contains_nocase?: InputMaybe<Scalars['String']>
    token1_not_contains?: InputMaybe<Scalars['String']>
    token1_not_contains_nocase?: InputMaybe<Scalars['String']>
    token1_starts_with?: InputMaybe<Scalars['String']>
    token1_starts_with_nocase?: InputMaybe<Scalars['String']>
    token1_not_starts_with?: InputMaybe<Scalars['String']>
    token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    token1_ends_with?: InputMaybe<Scalars['String']>
    token1_ends_with_nocase?: InputMaybe<Scalars['String']>
    token1_not_ends_with?: InputMaybe<Scalars['String']>
    token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    reserve0?: InputMaybe<Scalars['BigDecimal']>
    reserve0_not?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1?: InputMaybe<Scalars['BigDecimal']>
    reserve1_not?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalSupply?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_not?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyTxns?: InputMaybe<Scalars['BigInt']>
    dailyTxns_not?: InputMaybe<Scalars['BigInt']>
    dailyTxns_gt?: InputMaybe<Scalars['BigInt']>
    dailyTxns_lt?: InputMaybe<Scalars['BigInt']>
    dailyTxns_gte?: InputMaybe<Scalars['BigInt']>
    dailyTxns_lte?: InputMaybe<Scalars['BigInt']>
    dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>
    dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type PairDayData_orderBy =
    | 'id'
    | 'date'
    | 'pairAddress'
    | 'token0'
    | 'token1'
    | 'reserve0'
    | 'reserve1'
    | 'totalSupply'
    | 'reserveUSD'
    | 'dailyVolumeToken0'
    | 'dailyVolumeToken1'
    | 'dailyVolumeUSD'
    | 'dailyTxns'

  export type PairHourData = {
    id: Scalars['ID']
    hourStartUnix: Scalars['Int']
    pair: Pair
    reserve0: Scalars['BigDecimal']
    reserve1: Scalars['BigDecimal']
    reserveUSD: Scalars['BigDecimal']
    hourlyVolumeToken0: Scalars['BigDecimal']
    hourlyVolumeToken1: Scalars['BigDecimal']
    hourlyVolumeUSD: Scalars['BigDecimal']
    hourlyTxns: Scalars['BigInt']
  }

  export type PairHourData_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    hourStartUnix?: InputMaybe<Scalars['Int']>
    hourStartUnix_not?: InputMaybe<Scalars['Int']>
    hourStartUnix_gt?: InputMaybe<Scalars['Int']>
    hourStartUnix_lt?: InputMaybe<Scalars['Int']>
    hourStartUnix_gte?: InputMaybe<Scalars['Int']>
    hourStartUnix_lte?: InputMaybe<Scalars['Int']>
    hourStartUnix_in?: InputMaybe<Array<Scalars['Int']>>
    hourStartUnix_not_in?: InputMaybe<Array<Scalars['Int']>>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_contains_nocase?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    reserve0?: InputMaybe<Scalars['BigDecimal']>
    reserve0_not?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1?: InputMaybe<Scalars['BigDecimal']>
    reserve1_not?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeToken0?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken0_not?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeToken1?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken1_not?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    hourlyTxns?: InputMaybe<Scalars['BigInt']>
    hourlyTxns_not?: InputMaybe<Scalars['BigInt']>
    hourlyTxns_gt?: InputMaybe<Scalars['BigInt']>
    hourlyTxns_lt?: InputMaybe<Scalars['BigInt']>
    hourlyTxns_gte?: InputMaybe<Scalars['BigInt']>
    hourlyTxns_lte?: InputMaybe<Scalars['BigInt']>
    hourlyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>
    hourlyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type PairHourData_orderBy =
    | 'id'
    | 'hourStartUnix'
    | 'pair'
    | 'reserve0'
    | 'reserve1'
    | 'reserveUSD'
    | 'hourlyVolumeToken0'
    | 'hourlyVolumeToken1'
    | 'hourlyVolumeUSD'
    | 'hourlyTxns'

  export type Pair_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    token0?: InputMaybe<Scalars['String']>
    token0_not?: InputMaybe<Scalars['String']>
    token0_gt?: InputMaybe<Scalars['String']>
    token0_lt?: InputMaybe<Scalars['String']>
    token0_gte?: InputMaybe<Scalars['String']>
    token0_lte?: InputMaybe<Scalars['String']>
    token0_in?: InputMaybe<Array<Scalars['String']>>
    token0_not_in?: InputMaybe<Array<Scalars['String']>>
    token0_contains?: InputMaybe<Scalars['String']>
    token0_contains_nocase?: InputMaybe<Scalars['String']>
    token0_not_contains?: InputMaybe<Scalars['String']>
    token0_not_contains_nocase?: InputMaybe<Scalars['String']>
    token0_starts_with?: InputMaybe<Scalars['String']>
    token0_starts_with_nocase?: InputMaybe<Scalars['String']>
    token0_not_starts_with?: InputMaybe<Scalars['String']>
    token0_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    token0_ends_with?: InputMaybe<Scalars['String']>
    token0_ends_with_nocase?: InputMaybe<Scalars['String']>
    token0_not_ends_with?: InputMaybe<Scalars['String']>
    token0_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    token1?: InputMaybe<Scalars['String']>
    token1_not?: InputMaybe<Scalars['String']>
    token1_gt?: InputMaybe<Scalars['String']>
    token1_lt?: InputMaybe<Scalars['String']>
    token1_gte?: InputMaybe<Scalars['String']>
    token1_lte?: InputMaybe<Scalars['String']>
    token1_in?: InputMaybe<Array<Scalars['String']>>
    token1_not_in?: InputMaybe<Array<Scalars['String']>>
    token1_contains?: InputMaybe<Scalars['String']>
    token1_contains_nocase?: InputMaybe<Scalars['String']>
    token1_not_contains?: InputMaybe<Scalars['String']>
    token1_not_contains_nocase?: InputMaybe<Scalars['String']>
    token1_starts_with?: InputMaybe<Scalars['String']>
    token1_starts_with_nocase?: InputMaybe<Scalars['String']>
    token1_not_starts_with?: InputMaybe<Scalars['String']>
    token1_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    token1_ends_with?: InputMaybe<Scalars['String']>
    token1_ends_with_nocase?: InputMaybe<Scalars['String']>
    token1_not_ends_with?: InputMaybe<Scalars['String']>
    token1_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    reserve0?: InputMaybe<Scalars['BigDecimal']>
    reserve0_not?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve0_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1?: InputMaybe<Scalars['BigDecimal']>
    reserve1_not?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lt?: InputMaybe<Scalars['BigDecimal']>
    reserve1_gte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_lte?: InputMaybe<Scalars['BigDecimal']>
    reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalSupply?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_not?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveETH?: InputMaybe<Scalars['BigDecimal']>
    reserveETH_not?: InputMaybe<Scalars['BigDecimal']>
    reserveETH_gt?: InputMaybe<Scalars['BigDecimal']>
    reserveETH_lt?: InputMaybe<Scalars['BigDecimal']>
    reserveETH_gte?: InputMaybe<Scalars['BigDecimal']>
    reserveETH_lte?: InputMaybe<Scalars['BigDecimal']>
    reserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_not?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    trackedReserveETH?: InputMaybe<Scalars['BigDecimal']>
    trackedReserveETH_not?: InputMaybe<Scalars['BigDecimal']>
    trackedReserveETH_gt?: InputMaybe<Scalars['BigDecimal']>
    trackedReserveETH_lt?: InputMaybe<Scalars['BigDecimal']>
    trackedReserveETH_gte?: InputMaybe<Scalars['BigDecimal']>
    trackedReserveETH_lte?: InputMaybe<Scalars['BigDecimal']>
    trackedReserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    trackedReserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token0Price?: InputMaybe<Scalars['BigDecimal']>
    token0Price_not?: InputMaybe<Scalars['BigDecimal']>
    token0Price_gt?: InputMaybe<Scalars['BigDecimal']>
    token0Price_lt?: InputMaybe<Scalars['BigDecimal']>
    token0Price_gte?: InputMaybe<Scalars['BigDecimal']>
    token0Price_lte?: InputMaybe<Scalars['BigDecimal']>
    token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token1Price?: InputMaybe<Scalars['BigDecimal']>
    token1Price_not?: InputMaybe<Scalars['BigDecimal']>
    token1Price_gt?: InputMaybe<Scalars['BigDecimal']>
    token1Price_lt?: InputMaybe<Scalars['BigDecimal']>
    token1Price_gte?: InputMaybe<Scalars['BigDecimal']>
    token1Price_lte?: InputMaybe<Scalars['BigDecimal']>
    token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    volumeToken0?: InputMaybe<Scalars['BigDecimal']>
    volumeToken0_not?: InputMaybe<Scalars['BigDecimal']>
    volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']>
    volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']>
    volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']>
    volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']>
    volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    volumeToken1?: InputMaybe<Scalars['BigDecimal']>
    volumeToken1_not?: InputMaybe<Scalars['BigDecimal']>
    volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']>
    volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']>
    volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']>
    volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']>
    volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    volumeUSD?: InputMaybe<Scalars['BigDecimal']>
    volumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    txCount?: InputMaybe<Scalars['BigInt']>
    txCount_not?: InputMaybe<Scalars['BigInt']>
    txCount_gt?: InputMaybe<Scalars['BigInt']>
    txCount_lt?: InputMaybe<Scalars['BigInt']>
    txCount_gte?: InputMaybe<Scalars['BigInt']>
    txCount_lte?: InputMaybe<Scalars['BigInt']>
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    createdAtTimestamp?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']>
    createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    createdAtBlockNumber?: InputMaybe<Scalars['BigInt']>
    createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']>
    createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']>
    createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']>
    createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']>
    createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']>
    createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    liquidityProviderCount?: InputMaybe<Scalars['BigInt']>
    liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']>
    liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']>
    liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']>
    liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']>
    liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']>
    liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']>>
    liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Pair_orderBy =
    | 'id'
    | 'token0'
    | 'token1'
    | 'reserve0'
    | 'reserve1'
    | 'totalSupply'
    | 'reserveETH'
    | 'reserveUSD'
    | 'trackedReserveETH'
    | 'token0Price'
    | 'token1Price'
    | 'volumeToken0'
    | 'volumeToken1'
    | 'volumeUSD'
    | 'untrackedVolumeUSD'
    | 'txCount'
    | 'createdAtTimestamp'
    | 'createdAtBlockNumber'
    | 'liquidityProviderCount'

  export type Query = {
    Chain1_uniswapFactory?: Maybe<UniswapFactory>
    Chain1_uniswapFactories: Array<UniswapFactory>
    Chain1_token?: Maybe<Token>
    Chain1_tokens: Array<Token>
    Chain1_pair?: Maybe<Pair>
    Chain1_pairs: Array<Pair>
    Chain1_user?: Maybe<User>
    Chain1_users: Array<User>
    Chain1_liquidityPosition?: Maybe<LiquidityPosition>
    Chain1_liquidityPositions: Array<LiquidityPosition>
    Chain1_liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>
    Chain1_liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>
    Chain1_transaction?: Maybe<Transaction>
    Chain1_transactions: Array<Transaction>
    Chain1_mint?: Maybe<Mint>
    Chain1_mints: Array<Mint>
    Chain1_burn?: Maybe<Burn>
    Chain1_burns: Array<Burn>
    Chain1_swap?: Maybe<Swap>
    Chain1_swaps: Array<Swap>
    Chain1_bundle?: Maybe<Bundle>
    Chain1_bundles: Array<Bundle>
    Chain1_uniswapDayData?: Maybe<UniswapDayData>
    Chain1_uniswapDayDatas: Array<UniswapDayData>
    Chain1_pairHourData?: Maybe<PairHourData>
    Chain1_pairHourDatas: Array<PairHourData>
    Chain1_pairDayData?: Maybe<PairDayData>
    Chain1_pairDayDatas: Array<PairDayData>
    Chain1_tokenDayData?: Maybe<TokenDayData>
    Chain1_tokenDayDatas: Array<TokenDayData>
    /** Access to subgraph metadata */
    Chain1__meta?: Maybe<_Meta_>
  }

  export type QueryChain1_uniswapFactoryArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_uniswapFactoriesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UniswapFactory_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UniswapFactory_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_tokenArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_tokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_pairArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_pairsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Pair_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Pair_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_userArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_usersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<User_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<User_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_liquidityPositionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_liquidityPositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPosition_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPosition_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_liquidityPositionSnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_liquidityPositionSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPositionSnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_transactionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_transactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Transaction_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Transaction_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_mintArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_mintsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Mint_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Mint_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_burnArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_burnsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Burn_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Burn_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_swapArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_swapsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Swap_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Swap_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_bundleArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_bundlesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Bundle_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Bundle_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_uniswapDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_uniswapDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UniswapDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UniswapDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_pairHourDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_pairHourDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairHourData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairHourData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_pairDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_pairDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_tokenDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1_tokenDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TokenDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TokenDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryChain1__metaArgs = {
    block?: InputMaybe<Block_height>
  }

  export type Subscription = {
    Chain1_uniswapFactory?: Maybe<UniswapFactory>
    Chain1_uniswapFactories: Array<UniswapFactory>
    Chain1_token?: Maybe<Token>
    Chain1_tokens: Array<Token>
    Chain1_pair?: Maybe<Pair>
    Chain1_pairs: Array<Pair>
    Chain1_user?: Maybe<User>
    Chain1_users: Array<User>
    Chain1_liquidityPosition?: Maybe<LiquidityPosition>
    Chain1_liquidityPositions: Array<LiquidityPosition>
    Chain1_liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>
    Chain1_liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>
    Chain1_transaction?: Maybe<Transaction>
    Chain1_transactions: Array<Transaction>
    Chain1_mint?: Maybe<Mint>
    Chain1_mints: Array<Mint>
    Chain1_burn?: Maybe<Burn>
    Chain1_burns: Array<Burn>
    Chain1_swap?: Maybe<Swap>
    Chain1_swaps: Array<Swap>
    Chain1_bundle?: Maybe<Bundle>
    Chain1_bundles: Array<Bundle>
    Chain1_uniswapDayData?: Maybe<UniswapDayData>
    Chain1_uniswapDayDatas: Array<UniswapDayData>
    Chain1_pairHourData?: Maybe<PairHourData>
    Chain1_pairHourDatas: Array<PairHourData>
    Chain1_pairDayData?: Maybe<PairDayData>
    Chain1_pairDayDatas: Array<PairDayData>
    Chain1_tokenDayData?: Maybe<TokenDayData>
    Chain1_tokenDayDatas: Array<TokenDayData>
    /** Access to subgraph metadata */
    Chain1__meta?: Maybe<_Meta_>
  }

  export type SubscriptionChain1_uniswapFactoryArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_uniswapFactoriesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UniswapFactory_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UniswapFactory_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_tokenArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_tokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Token_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Token_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_pairArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_pairsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Pair_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Pair_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_userArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_usersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<User_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<User_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_liquidityPositionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_liquidityPositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPosition_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPosition_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_liquidityPositionSnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_liquidityPositionSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPositionSnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_transactionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_transactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Transaction_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Transaction_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_mintArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_mintsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Mint_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Mint_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_burnArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_burnsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Burn_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Burn_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_swapArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_swapsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Swap_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Swap_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_bundleArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_bundlesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Bundle_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Bundle_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_uniswapDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_uniswapDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UniswapDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UniswapDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_pairHourDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_pairHourDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairHourData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairHourData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_pairDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_pairDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_tokenDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1_tokenDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TokenDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TokenDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionChain1__metaArgs = {
    block?: InputMaybe<Block_height>
  }

  export type Swap = {
    id: Scalars['ID']
    transaction: Transaction
    timestamp: Scalars['BigInt']
    pair: Pair
    sender: Scalars['Bytes']
    amount0In: Scalars['BigDecimal']
    amount1In: Scalars['BigDecimal']
    amount0Out: Scalars['BigDecimal']
    amount1Out: Scalars['BigDecimal']
    to: Scalars['Bytes']
    logIndex?: Maybe<Scalars['BigInt']>
    amountUSD: Scalars['BigDecimal']
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
    transaction?: InputMaybe<Scalars['String']>
    transaction_not?: InputMaybe<Scalars['String']>
    transaction_gt?: InputMaybe<Scalars['String']>
    transaction_lt?: InputMaybe<Scalars['String']>
    transaction_gte?: InputMaybe<Scalars['String']>
    transaction_lte?: InputMaybe<Scalars['String']>
    transaction_in?: InputMaybe<Array<Scalars['String']>>
    transaction_not_in?: InputMaybe<Array<Scalars['String']>>
    transaction_contains?: InputMaybe<Scalars['String']>
    transaction_contains_nocase?: InputMaybe<Scalars['String']>
    transaction_not_contains?: InputMaybe<Scalars['String']>
    transaction_not_contains_nocase?: InputMaybe<Scalars['String']>
    transaction_starts_with?: InputMaybe<Scalars['String']>
    transaction_starts_with_nocase?: InputMaybe<Scalars['String']>
    transaction_not_starts_with?: InputMaybe<Scalars['String']>
    transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    transaction_ends_with?: InputMaybe<Scalars['String']>
    transaction_ends_with_nocase?: InputMaybe<Scalars['String']>
    transaction_not_ends_with?: InputMaybe<Scalars['String']>
    transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_contains_nocase?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_not_contains_nocase?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with_nocase?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_ends_with_nocase?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with_nocase?: InputMaybe<Scalars['String']>
    sender?: InputMaybe<Scalars['Bytes']>
    sender_not?: InputMaybe<Scalars['Bytes']>
    sender_in?: InputMaybe<Array<Scalars['Bytes']>>
    sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    sender_contains?: InputMaybe<Scalars['Bytes']>
    sender_not_contains?: InputMaybe<Scalars['Bytes']>
    amount0In?: InputMaybe<Scalars['BigDecimal']>
    amount0In_not?: InputMaybe<Scalars['BigDecimal']>
    amount0In_gt?: InputMaybe<Scalars['BigDecimal']>
    amount0In_lt?: InputMaybe<Scalars['BigDecimal']>
    amount0In_gte?: InputMaybe<Scalars['BigDecimal']>
    amount0In_lte?: InputMaybe<Scalars['BigDecimal']>
    amount0In_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount0In_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1In?: InputMaybe<Scalars['BigDecimal']>
    amount1In_not?: InputMaybe<Scalars['BigDecimal']>
    amount1In_gt?: InputMaybe<Scalars['BigDecimal']>
    amount1In_lt?: InputMaybe<Scalars['BigDecimal']>
    amount1In_gte?: InputMaybe<Scalars['BigDecimal']>
    amount1In_lte?: InputMaybe<Scalars['BigDecimal']>
    amount1In_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1In_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount0Out?: InputMaybe<Scalars['BigDecimal']>
    amount0Out_not?: InputMaybe<Scalars['BigDecimal']>
    amount0Out_gt?: InputMaybe<Scalars['BigDecimal']>
    amount0Out_lt?: InputMaybe<Scalars['BigDecimal']>
    amount0Out_gte?: InputMaybe<Scalars['BigDecimal']>
    amount0Out_lte?: InputMaybe<Scalars['BigDecimal']>
    amount0Out_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount0Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1Out?: InputMaybe<Scalars['BigDecimal']>
    amount1Out_not?: InputMaybe<Scalars['BigDecimal']>
    amount1Out_gt?: InputMaybe<Scalars['BigDecimal']>
    amount1Out_lt?: InputMaybe<Scalars['BigDecimal']>
    amount1Out_gte?: InputMaybe<Scalars['BigDecimal']>
    amount1Out_lte?: InputMaybe<Scalars['BigDecimal']>
    amount1Out_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount1Out_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    to?: InputMaybe<Scalars['Bytes']>
    to_not?: InputMaybe<Scalars['Bytes']>
    to_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_contains?: InputMaybe<Scalars['Bytes']>
    to_not_contains?: InputMaybe<Scalars['Bytes']>
    logIndex?: InputMaybe<Scalars['BigInt']>
    logIndex_not?: InputMaybe<Scalars['BigInt']>
    logIndex_gt?: InputMaybe<Scalars['BigInt']>
    logIndex_lt?: InputMaybe<Scalars['BigInt']>
    logIndex_gte?: InputMaybe<Scalars['BigInt']>
    logIndex_lte?: InputMaybe<Scalars['BigInt']>
    logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>
    logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    amountUSD?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_not?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Swap_orderBy =
    | 'id'
    | 'transaction'
    | 'timestamp'
    | 'pair'
    | 'sender'
    | 'amount0In'
    | 'amount1In'
    | 'amount0Out'
    | 'amount1Out'
    | 'to'
    | 'logIndex'
    | 'amountUSD'

  export type Token = {
    id: Scalars['ID']
    symbol: Scalars['String']
    name: Scalars['String']
    decimals: Scalars['BigInt']
    totalSupply: Scalars['BigInt']
    tradeVolume: Scalars['BigDecimal']
    tradeVolumeUSD: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    totalLiquidity: Scalars['BigDecimal']
    derivedETH?: Maybe<Scalars['BigDecimal']>
    mostLiquidPairs: Array<Maybe<PairDayData>>
  }

  export type TokenmostLiquidPairsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairDayData_filter>
  }

  export type TokenDayData = {
    id: Scalars['ID']
    date: Scalars['Int']
    token: Token
    dailyVolumeToken: Scalars['BigDecimal']
    dailyVolumeETH: Scalars['BigDecimal']
    dailyVolumeUSD: Scalars['BigDecimal']
    dailyTxns: Scalars['BigInt']
    totalLiquidityToken: Scalars['BigDecimal']
    totalLiquidityETH: Scalars['BigDecimal']
    totalLiquidityUSD: Scalars['BigDecimal']
    priceUSD: Scalars['BigDecimal']
    maxStored: Scalars['Int']
    mostLiquidPairs: Array<PairDayData>
  }

  export type TokenDayDatamostLiquidPairsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairDayData_filter>
  }

  export type TokenDayData_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    date?: InputMaybe<Scalars['Int']>
    date_not?: InputMaybe<Scalars['Int']>
    date_gt?: InputMaybe<Scalars['Int']>
    date_lt?: InputMaybe<Scalars['Int']>
    date_gte?: InputMaybe<Scalars['Int']>
    date_lte?: InputMaybe<Scalars['Int']>
    date_in?: InputMaybe<Array<Scalars['Int']>>
    date_not_in?: InputMaybe<Array<Scalars['Int']>>
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
    dailyVolumeToken?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyTxns?: InputMaybe<Scalars['BigInt']>
    dailyTxns_not?: InputMaybe<Scalars['BigInt']>
    dailyTxns_gt?: InputMaybe<Scalars['BigInt']>
    dailyTxns_lt?: InputMaybe<Scalars['BigInt']>
    dailyTxns_gte?: InputMaybe<Scalars['BigInt']>
    dailyTxns_lte?: InputMaybe<Scalars['BigInt']>
    dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']>>
    dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    totalLiquidityToken?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityToken_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityToken_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityToken_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityToken_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityToken_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityToken_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    priceUSD?: InputMaybe<Scalars['BigDecimal']>
    priceUSD_not?: InputMaybe<Scalars['BigDecimal']>
    priceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    priceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    priceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    priceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    maxStored?: InputMaybe<Scalars['Int']>
    maxStored_not?: InputMaybe<Scalars['Int']>
    maxStored_gt?: InputMaybe<Scalars['Int']>
    maxStored_lt?: InputMaybe<Scalars['Int']>
    maxStored_gte?: InputMaybe<Scalars['Int']>
    maxStored_lte?: InputMaybe<Scalars['Int']>
    maxStored_in?: InputMaybe<Array<Scalars['Int']>>
    maxStored_not_in?: InputMaybe<Array<Scalars['Int']>>
    mostLiquidPairs?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_not?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type TokenDayData_orderBy =
    | 'id'
    | 'date'
    | 'token'
    | 'dailyVolumeToken'
    | 'dailyVolumeETH'
    | 'dailyVolumeUSD'
    | 'dailyTxns'
    | 'totalLiquidityToken'
    | 'totalLiquidityETH'
    | 'totalLiquidityUSD'
    | 'priceUSD'
    | 'maxStored'
    | 'mostLiquidPairs'

  export type Token_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
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
    decimals?: InputMaybe<Scalars['BigInt']>
    decimals_not?: InputMaybe<Scalars['BigInt']>
    decimals_gt?: InputMaybe<Scalars['BigInt']>
    decimals_lt?: InputMaybe<Scalars['BigInt']>
    decimals_gte?: InputMaybe<Scalars['BigInt']>
    decimals_lte?: InputMaybe<Scalars['BigInt']>
    decimals_in?: InputMaybe<Array<Scalars['BigInt']>>
    decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    totalSupply?: InputMaybe<Scalars['BigInt']>
    totalSupply_not?: InputMaybe<Scalars['BigInt']>
    totalSupply_gt?: InputMaybe<Scalars['BigInt']>
    totalSupply_lt?: InputMaybe<Scalars['BigInt']>
    totalSupply_gte?: InputMaybe<Scalars['BigInt']>
    totalSupply_lte?: InputMaybe<Scalars['BigInt']>
    totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    tradeVolume?: InputMaybe<Scalars['BigDecimal']>
    tradeVolume_not?: InputMaybe<Scalars['BigDecimal']>
    tradeVolume_gt?: InputMaybe<Scalars['BigDecimal']>
    tradeVolume_lt?: InputMaybe<Scalars['BigDecimal']>
    tradeVolume_gte?: InputMaybe<Scalars['BigDecimal']>
    tradeVolume_lte?: InputMaybe<Scalars['BigDecimal']>
    tradeVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    tradeVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    tradeVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    tradeVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    tradeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    tradeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    tradeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    tradeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    tradeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    tradeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    txCount?: InputMaybe<Scalars['BigInt']>
    txCount_not?: InputMaybe<Scalars['BigInt']>
    txCount_gt?: InputMaybe<Scalars['BigInt']>
    txCount_lt?: InputMaybe<Scalars['BigInt']>
    txCount_gte?: InputMaybe<Scalars['BigInt']>
    txCount_lte?: InputMaybe<Scalars['BigInt']>
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    totalLiquidity?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidity_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    derivedETH?: InputMaybe<Scalars['BigDecimal']>
    derivedETH_not?: InputMaybe<Scalars['BigDecimal']>
    derivedETH_gt?: InputMaybe<Scalars['BigDecimal']>
    derivedETH_lt?: InputMaybe<Scalars['BigDecimal']>
    derivedETH_gte?: InputMaybe<Scalars['BigDecimal']>
    derivedETH_lte?: InputMaybe<Scalars['BigDecimal']>
    derivedETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    derivedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    mostLiquidPairs?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_not?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidPairs_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Token_orderBy =
    | 'id'
    | 'symbol'
    | 'name'
    | 'decimals'
    | 'totalSupply'
    | 'tradeVolume'
    | 'tradeVolumeUSD'
    | 'untrackedVolumeUSD'
    | 'txCount'
    | 'totalLiquidity'
    | 'derivedETH'
    | 'mostLiquidPairs'

  export type Transaction = {
    id: Scalars['ID']
    blockNumber: Scalars['BigInt']
    timestamp: Scalars['BigInt']
    mints: Array<Maybe<Mint>>
    burns: Array<Maybe<Burn>>
    swaps: Array<Maybe<Swap>>
  }

  export type TransactionmintsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Mint_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Mint_filter>
  }

  export type TransactionburnsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Burn_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Burn_filter>
  }

  export type TransactionswapsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Swap_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Swap_filter>
  }

  export type Transaction_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
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
    mints?: InputMaybe<Array<Scalars['String']>>
    mints_not?: InputMaybe<Array<Scalars['String']>>
    mints_contains?: InputMaybe<Array<Scalars['String']>>
    mints_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    mints_not_contains?: InputMaybe<Array<Scalars['String']>>
    mints_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    burns?: InputMaybe<Array<Scalars['String']>>
    burns_not?: InputMaybe<Array<Scalars['String']>>
    burns_contains?: InputMaybe<Array<Scalars['String']>>
    burns_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    burns_not_contains?: InputMaybe<Array<Scalars['String']>>
    burns_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    swaps?: InputMaybe<Array<Scalars['String']>>
    swaps_not?: InputMaybe<Array<Scalars['String']>>
    swaps_contains?: InputMaybe<Array<Scalars['String']>>
    swaps_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    swaps_not_contains?: InputMaybe<Array<Scalars['String']>>
    swaps_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type Transaction_orderBy = 'id' | 'blockNumber' | 'timestamp' | 'mints' | 'burns' | 'swaps'

  export type UniswapDayData = {
    id: Scalars['ID']
    date: Scalars['Int']
    dailyVolumeETH: Scalars['BigDecimal']
    dailyVolumeUSD: Scalars['BigDecimal']
    dailyVolumeUntracked: Scalars['BigDecimal']
    totalVolumeETH: Scalars['BigDecimal']
    totalLiquidityETH: Scalars['BigDecimal']
    totalVolumeUSD: Scalars['BigDecimal']
    totalLiquidityUSD: Scalars['BigDecimal']
    maxStored?: Maybe<Scalars['Int']>
    mostLiquidTokens: Array<TokenDayData>
    txCount: Scalars['BigInt']
  }

  export type UniswapDayDatamostLiquidTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TokenDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TokenDayData_filter>
  }

  export type UniswapDayData_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    date?: InputMaybe<Scalars['Int']>
    date_not?: InputMaybe<Scalars['Int']>
    date_gt?: InputMaybe<Scalars['Int']>
    date_lt?: InputMaybe<Scalars['Int']>
    date_gte?: InputMaybe<Scalars['Int']>
    date_lte?: InputMaybe<Scalars['Int']>
    date_in?: InputMaybe<Array<Scalars['Int']>>
    date_not_in?: InputMaybe<Array<Scalars['Int']>>
    dailyVolumeETH?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUntracked?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUntracked_not?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUntracked_gt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUntracked_lt?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUntracked_gte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUntracked_lte?: InputMaybe<Scalars['BigDecimal']>
    dailyVolumeUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    dailyVolumeUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    maxStored?: InputMaybe<Scalars['Int']>
    maxStored_not?: InputMaybe<Scalars['Int']>
    maxStored_gt?: InputMaybe<Scalars['Int']>
    maxStored_lt?: InputMaybe<Scalars['Int']>
    maxStored_gte?: InputMaybe<Scalars['Int']>
    maxStored_lte?: InputMaybe<Scalars['Int']>
    maxStored_in?: InputMaybe<Array<Scalars['Int']>>
    maxStored_not_in?: InputMaybe<Array<Scalars['Int']>>
    mostLiquidTokens?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_not?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    txCount?: InputMaybe<Scalars['BigInt']>
    txCount_not?: InputMaybe<Scalars['BigInt']>
    txCount_gt?: InputMaybe<Scalars['BigInt']>
    txCount_lt?: InputMaybe<Scalars['BigInt']>
    txCount_gte?: InputMaybe<Scalars['BigInt']>
    txCount_lte?: InputMaybe<Scalars['BigInt']>
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type UniswapDayData_orderBy =
    | 'id'
    | 'date'
    | 'dailyVolumeETH'
    | 'dailyVolumeUSD'
    | 'dailyVolumeUntracked'
    | 'totalVolumeETH'
    | 'totalLiquidityETH'
    | 'totalVolumeUSD'
    | 'totalLiquidityUSD'
    | 'maxStored'
    | 'mostLiquidTokens'
    | 'txCount'

  export type UniswapFactory = {
    id: Scalars['ID']
    pairCount: Scalars['Int']
    totalVolumeUSD: Scalars['BigDecimal']
    totalVolumeETH: Scalars['BigDecimal']
    untrackedVolumeUSD: Scalars['BigDecimal']
    totalLiquidityUSD: Scalars['BigDecimal']
    totalLiquidityETH: Scalars['BigDecimal']
    txCount: Scalars['BigInt']
    mostLiquidTokens: Array<TokenDayData>
  }

  export type UniswapFactorymostLiquidTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TokenDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TokenDayData_filter>
  }

  export type UniswapFactory_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    pairCount?: InputMaybe<Scalars['Int']>
    pairCount_not?: InputMaybe<Scalars['Int']>
    pairCount_gt?: InputMaybe<Scalars['Int']>
    pairCount_lt?: InputMaybe<Scalars['Int']>
    pairCount_gte?: InputMaybe<Scalars['Int']>
    pairCount_lte?: InputMaybe<Scalars['Int']>
    pairCount_in?: InputMaybe<Array<Scalars['Int']>>
    pairCount_not_in?: InputMaybe<Array<Scalars['Int']>>
    totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeETH?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']>
    totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityUSD?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityETH?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_not?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']>
    totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    txCount?: InputMaybe<Scalars['BigInt']>
    txCount_not?: InputMaybe<Scalars['BigInt']>
    txCount_gt?: InputMaybe<Scalars['BigInt']>
    txCount_lt?: InputMaybe<Scalars['BigInt']>
    txCount_gte?: InputMaybe<Scalars['BigInt']>
    txCount_lte?: InputMaybe<Scalars['BigInt']>
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    mostLiquidTokens?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_not?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
    mostLiquidTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type UniswapFactory_orderBy =
    | 'id'
    | 'pairCount'
    | 'totalVolumeUSD'
    | 'totalVolumeETH'
    | 'untrackedVolumeUSD'
    | 'totalLiquidityUSD'
    | 'totalLiquidityETH'
    | 'txCount'
    | 'mostLiquidTokens'

  export type User = {
    id: Scalars['ID']
    liquidityPositions?: Maybe<Array<LiquidityPosition>>
    usdSwapped: Scalars['BigDecimal']
  }

  export type UserliquidityPositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPosition_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPosition_filter>
  }

  export type User_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    usdSwapped?: InputMaybe<Scalars['BigDecimal']>
    usdSwapped_not?: InputMaybe<Scalars['BigDecimal']>
    usdSwapped_gt?: InputMaybe<Scalars['BigDecimal']>
    usdSwapped_lt?: InputMaybe<Scalars['BigDecimal']>
    usdSwapped_gte?: InputMaybe<Scalars['BigDecimal']>
    usdSwapped_lte?: InputMaybe<Scalars['BigDecimal']>
    usdSwapped_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    usdSwapped_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    /** Filter for the block changed event. */
    _change_block?: InputMaybe<BlockChangedFilter>
  }

  export type User_orderBy = 'id' | 'liquidityPositions' | 'usdSwapped'

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
export type QueryChain1Sdk = {
  /** null **/
  Chain1_uniswapFactory: InContextSdkMethod<
    Chain1Types.Query['Chain1_uniswapFactory'],
    Chain1Types.QueryChain1_uniswapFactoryArgs,
    MeshContext
  >
  /** null **/
  Chain1_uniswapFactories: InContextSdkMethod<
    Chain1Types.Query['Chain1_uniswapFactories'],
    Chain1Types.QueryChain1_uniswapFactoriesArgs,
    MeshContext
  >
  /** null **/
  Chain1_token: InContextSdkMethod<Chain1Types.Query['Chain1_token'], Chain1Types.QueryChain1_tokenArgs, MeshContext>
  /** null **/
  Chain1_tokens: InContextSdkMethod<Chain1Types.Query['Chain1_tokens'], Chain1Types.QueryChain1_tokensArgs, MeshContext>
  /** null **/
  Chain1_pair: InContextSdkMethod<Chain1Types.Query['Chain1_pair'], Chain1Types.QueryChain1_pairArgs, MeshContext>
  /** null **/
  Chain1_pairs: InContextSdkMethod<Chain1Types.Query['Chain1_pairs'], Chain1Types.QueryChain1_pairsArgs, MeshContext>
  /** null **/
  Chain1_user: InContextSdkMethod<Chain1Types.Query['Chain1_user'], Chain1Types.QueryChain1_userArgs, MeshContext>
  /** null **/
  Chain1_users: InContextSdkMethod<Chain1Types.Query['Chain1_users'], Chain1Types.QueryChain1_usersArgs, MeshContext>
  /** null **/
  Chain1_liquidityPosition: InContextSdkMethod<
    Chain1Types.Query['Chain1_liquidityPosition'],
    Chain1Types.QueryChain1_liquidityPositionArgs,
    MeshContext
  >
  /** null **/
  Chain1_liquidityPositions: InContextSdkMethod<
    Chain1Types.Query['Chain1_liquidityPositions'],
    Chain1Types.QueryChain1_liquidityPositionsArgs,
    MeshContext
  >
  /** null **/
  Chain1_liquidityPositionSnapshot: InContextSdkMethod<
    Chain1Types.Query['Chain1_liquidityPositionSnapshot'],
    Chain1Types.QueryChain1_liquidityPositionSnapshotArgs,
    MeshContext
  >
  /** null **/
  Chain1_liquidityPositionSnapshots: InContextSdkMethod<
    Chain1Types.Query['Chain1_liquidityPositionSnapshots'],
    Chain1Types.QueryChain1_liquidityPositionSnapshotsArgs,
    MeshContext
  >
  /** null **/
  Chain1_transaction: InContextSdkMethod<
    Chain1Types.Query['Chain1_transaction'],
    Chain1Types.QueryChain1_transactionArgs,
    MeshContext
  >
  /** null **/
  Chain1_transactions: InContextSdkMethod<
    Chain1Types.Query['Chain1_transactions'],
    Chain1Types.QueryChain1_transactionsArgs,
    MeshContext
  >
  /** null **/
  Chain1_mint: InContextSdkMethod<Chain1Types.Query['Chain1_mint'], Chain1Types.QueryChain1_mintArgs, MeshContext>
  /** null **/
  Chain1_mints: InContextSdkMethod<Chain1Types.Query['Chain1_mints'], Chain1Types.QueryChain1_mintsArgs, MeshContext>
  /** null **/
  Chain1_burn: InContextSdkMethod<Chain1Types.Query['Chain1_burn'], Chain1Types.QueryChain1_burnArgs, MeshContext>
  /** null **/
  Chain1_burns: InContextSdkMethod<Chain1Types.Query['Chain1_burns'], Chain1Types.QueryChain1_burnsArgs, MeshContext>
  /** null **/
  Chain1_swap: InContextSdkMethod<Chain1Types.Query['Chain1_swap'], Chain1Types.QueryChain1_swapArgs, MeshContext>
  /** null **/
  Chain1_swaps: InContextSdkMethod<Chain1Types.Query['Chain1_swaps'], Chain1Types.QueryChain1_swapsArgs, MeshContext>
  /** null **/
  Chain1_bundle: InContextSdkMethod<Chain1Types.Query['Chain1_bundle'], Chain1Types.QueryChain1_bundleArgs, MeshContext>
  /** null **/
  Chain1_bundles: InContextSdkMethod<
    Chain1Types.Query['Chain1_bundles'],
    Chain1Types.QueryChain1_bundlesArgs,
    MeshContext
  >
  /** null **/
  Chain1_uniswapDayData: InContextSdkMethod<
    Chain1Types.Query['Chain1_uniswapDayData'],
    Chain1Types.QueryChain1_uniswapDayDataArgs,
    MeshContext
  >
  /** null **/
  Chain1_uniswapDayDatas: InContextSdkMethod<
    Chain1Types.Query['Chain1_uniswapDayDatas'],
    Chain1Types.QueryChain1_uniswapDayDatasArgs,
    MeshContext
  >
  /** null **/
  Chain1_pairHourData: InContextSdkMethod<
    Chain1Types.Query['Chain1_pairHourData'],
    Chain1Types.QueryChain1_pairHourDataArgs,
    MeshContext
  >
  /** null **/
  Chain1_pairHourDatas: InContextSdkMethod<
    Chain1Types.Query['Chain1_pairHourDatas'],
    Chain1Types.QueryChain1_pairHourDatasArgs,
    MeshContext
  >
  /** null **/
  Chain1_pairDayData: InContextSdkMethod<
    Chain1Types.Query['Chain1_pairDayData'],
    Chain1Types.QueryChain1_pairDayDataArgs,
    MeshContext
  >
  /** null **/
  Chain1_pairDayDatas: InContextSdkMethod<
    Chain1Types.Query['Chain1_pairDayDatas'],
    Chain1Types.QueryChain1_pairDayDatasArgs,
    MeshContext
  >
  /** null **/
  Chain1_tokenDayData: InContextSdkMethod<
    Chain1Types.Query['Chain1_tokenDayData'],
    Chain1Types.QueryChain1_tokenDayDataArgs,
    MeshContext
  >
  /** null **/
  Chain1_tokenDayDatas: InContextSdkMethod<
    Chain1Types.Query['Chain1_tokenDayDatas'],
    Chain1Types.QueryChain1_tokenDayDatasArgs,
    MeshContext
  >
  /** Access to subgraph metadata **/
  Chain1__meta: InContextSdkMethod<Chain1Types.Query['Chain1__meta'], Chain1Types.QueryChain1__metaArgs, MeshContext>
}

export type MutationChain1Sdk = {}

export type SubscriptionChain1Sdk = {
  /** null **/
  Chain1_uniswapFactory: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_uniswapFactory'],
    Chain1Types.SubscriptionChain1_uniswapFactoryArgs,
    MeshContext
  >
  /** null **/
  Chain1_uniswapFactories: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_uniswapFactories'],
    Chain1Types.SubscriptionChain1_uniswapFactoriesArgs,
    MeshContext
  >
  /** null **/
  Chain1_token: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_token'],
    Chain1Types.SubscriptionChain1_tokenArgs,
    MeshContext
  >
  /** null **/
  Chain1_tokens: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_tokens'],
    Chain1Types.SubscriptionChain1_tokensArgs,
    MeshContext
  >
  /** null **/
  Chain1_pair: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_pair'],
    Chain1Types.SubscriptionChain1_pairArgs,
    MeshContext
  >
  /** null **/
  Chain1_pairs: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_pairs'],
    Chain1Types.SubscriptionChain1_pairsArgs,
    MeshContext
  >
  /** null **/
  Chain1_user: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_user'],
    Chain1Types.SubscriptionChain1_userArgs,
    MeshContext
  >
  /** null **/
  Chain1_users: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_users'],
    Chain1Types.SubscriptionChain1_usersArgs,
    MeshContext
  >
  /** null **/
  Chain1_liquidityPosition: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_liquidityPosition'],
    Chain1Types.SubscriptionChain1_liquidityPositionArgs,
    MeshContext
  >
  /** null **/
  Chain1_liquidityPositions: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_liquidityPositions'],
    Chain1Types.SubscriptionChain1_liquidityPositionsArgs,
    MeshContext
  >
  /** null **/
  Chain1_liquidityPositionSnapshot: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_liquidityPositionSnapshot'],
    Chain1Types.SubscriptionChain1_liquidityPositionSnapshotArgs,
    MeshContext
  >
  /** null **/
  Chain1_liquidityPositionSnapshots: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_liquidityPositionSnapshots'],
    Chain1Types.SubscriptionChain1_liquidityPositionSnapshotsArgs,
    MeshContext
  >
  /** null **/
  Chain1_transaction: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_transaction'],
    Chain1Types.SubscriptionChain1_transactionArgs,
    MeshContext
  >
  /** null **/
  Chain1_transactions: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_transactions'],
    Chain1Types.SubscriptionChain1_transactionsArgs,
    MeshContext
  >
  /** null **/
  Chain1_mint: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_mint'],
    Chain1Types.SubscriptionChain1_mintArgs,
    MeshContext
  >
  /** null **/
  Chain1_mints: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_mints'],
    Chain1Types.SubscriptionChain1_mintsArgs,
    MeshContext
  >
  /** null **/
  Chain1_burn: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_burn'],
    Chain1Types.SubscriptionChain1_burnArgs,
    MeshContext
  >
  /** null **/
  Chain1_burns: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_burns'],
    Chain1Types.SubscriptionChain1_burnsArgs,
    MeshContext
  >
  /** null **/
  Chain1_swap: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_swap'],
    Chain1Types.SubscriptionChain1_swapArgs,
    MeshContext
  >
  /** null **/
  Chain1_swaps: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_swaps'],
    Chain1Types.SubscriptionChain1_swapsArgs,
    MeshContext
  >
  /** null **/
  Chain1_bundle: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_bundle'],
    Chain1Types.SubscriptionChain1_bundleArgs,
    MeshContext
  >
  /** null **/
  Chain1_bundles: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_bundles'],
    Chain1Types.SubscriptionChain1_bundlesArgs,
    MeshContext
  >
  /** null **/
  Chain1_uniswapDayData: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_uniswapDayData'],
    Chain1Types.SubscriptionChain1_uniswapDayDataArgs,
    MeshContext
  >
  /** null **/
  Chain1_uniswapDayDatas: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_uniswapDayDatas'],
    Chain1Types.SubscriptionChain1_uniswapDayDatasArgs,
    MeshContext
  >
  /** null **/
  Chain1_pairHourData: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_pairHourData'],
    Chain1Types.SubscriptionChain1_pairHourDataArgs,
    MeshContext
  >
  /** null **/
  Chain1_pairHourDatas: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_pairHourDatas'],
    Chain1Types.SubscriptionChain1_pairHourDatasArgs,
    MeshContext
  >
  /** null **/
  Chain1_pairDayData: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_pairDayData'],
    Chain1Types.SubscriptionChain1_pairDayDataArgs,
    MeshContext
  >
  /** null **/
  Chain1_pairDayDatas: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_pairDayDatas'],
    Chain1Types.SubscriptionChain1_pairDayDatasArgs,
    MeshContext
  >
  /** null **/
  Chain1_tokenDayData: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_tokenDayData'],
    Chain1Types.SubscriptionChain1_tokenDayDataArgs,
    MeshContext
  >
  /** null **/
  Chain1_tokenDayDatas: InContextSdkMethod<
    Chain1Types.Subscription['Chain1_tokenDayDatas'],
    Chain1Types.SubscriptionChain1_tokenDayDatasArgs,
    MeshContext
  >
  /** Access to subgraph metadata **/
  Chain1__meta: InContextSdkMethod<
    Chain1Types.Subscription['Chain1__meta'],
    Chain1Types.SubscriptionChain1__metaArgs,
    MeshContext
  >
}

export type Chain2Context = {
  ['Chain2']: { Query: QueryChain2Sdk; Mutation: MutationChain2Sdk; Subscription: SubscriptionChain2Sdk }
}

export type Chain1Context = {
  ['Chain1']: { Query: QueryChain1Sdk; Mutation: MutationChain1Sdk; Subscription: SubscriptionChain1Sdk }
}

export type MeshContext = Chain2Context & Chain1Context & BaseMeshContext

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

import { findAndParseConfig } from '@graphql-mesh/cli'
function getMeshOptions() {
  console.warn(
    'WARNING: These artifacts are built for development mode. Please run "graphclient build" to build production artifacts',
  )
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: '.graphclient',
    configName: 'graphclient',
    additionalPackagePrefixes: ['@graphprotocol/client-'],
  })
}

export const documentsInSDL = /*#__PURE__*/ []

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
