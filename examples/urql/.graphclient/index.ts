// @ts-nocheck
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'
import { GraphQLSchema, ExecutionResult } from 'graphql'
import { DocumentNode } from 'graphql'
import { compileQuery, isCompiledQuery, CompilerOptions } from 'graphql-jit'
import { AggregateError, isAsyncIterable, mapAsyncIterator } from '@graphql-tools/utils'
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
  uniswapFactory?: Maybe<UniswapFactory>
  uniswapFactories: Array<UniswapFactory>
  token?: Maybe<Token>
  tokens: Array<Token>
  pair?: Maybe<Pair>
  pairs: Array<Pair>
  user?: Maybe<User>
  users: Array<User>
  liquidityPosition?: Maybe<LiquidityPosition>
  liquidityPositions: Array<LiquidityPosition>
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>
  transaction?: Maybe<Transaction>
  transactions: Array<Transaction>
  mint?: Maybe<Mint>
  mints: Array<Mint>
  burn?: Maybe<Burn>
  burns: Array<Burn>
  swap?: Maybe<Swap>
  swaps: Array<Swap>
  bundle?: Maybe<Bundle>
  bundles: Array<Bundle>
  uniswapDayData?: Maybe<UniswapDayData>
  uniswapDayDatas: Array<UniswapDayData>
  pairHourData?: Maybe<PairHourData>
  pairHourDatas: Array<PairHourData>
  pairDayData?: Maybe<PairDayData>
  pairDayDatas: Array<PairDayData>
  tokenDayData?: Maybe<TokenDayData>
  tokenDayDatas: Array<TokenDayData>
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
  comptroller?: Maybe<Comptroller>
  comptrollers: Array<Comptroller>
  market?: Maybe<Market>
  markets: Array<Market>
  account?: Maybe<Account>
  accounts: Array<Account>
  accountCToken?: Maybe<AccountCToken>
  accountCTokens: Array<AccountCToken>
  accountCTokenTransaction?: Maybe<AccountCTokenTransaction>
  accountCTokenTransactions: Array<AccountCTokenTransaction>
  transferEvent?: Maybe<TransferEvent>
  transferEvents: Array<TransferEvent>
  mintEvent?: Maybe<MintEvent>
  mintEvents: Array<MintEvent>
  redeemEvent?: Maybe<RedeemEvent>
  redeemEvents: Array<RedeemEvent>
  liquidationEvent?: Maybe<LiquidationEvent>
  liquidationEvents: Array<LiquidationEvent>
  borrowEvent?: Maybe<BorrowEvent>
  borrowEvents: Array<BorrowEvent>
  repayEvent?: Maybe<RepayEvent>
  repayEvents: Array<RepayEvent>
  ctokenTransfer?: Maybe<CTokenTransfer>
  ctokenTransfers: Array<CTokenTransfer>
  underlyingTransfer?: Maybe<UnderlyingTransfer>
  underlyingTransfers: Array<UnderlyingTransfer>
}

export type QueryuniswapFactoryArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryuniswapFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UniswapFactory_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UniswapFactory_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
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

export type QuerypairArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerypairsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Pair_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Pair_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryuserArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidityPositionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPosition_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPosition_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidityPositionSnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPositionSnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytransactionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Transaction_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Transaction_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerymintArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerymintsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Mint_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Mint_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryburnArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Burn_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Burn_filter>
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

export type QuerybundleArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerybundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Bundle_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Bundle_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryuniswapDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryuniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UniswapDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UniswapDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerypairHourDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerypairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairHourData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairHourData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerypairDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerypairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytokenDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TokenDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TokenDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Query_metaArgs = {
  block?: InputMaybe<Block_height>
}

export type QuerycomptrollerArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerycomptrollersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Comptroller_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Comptroller_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerymarketArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerymarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Market_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Market_filter>
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

export type QueryaccountCTokenArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryaccountCTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<AccountCToken_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<AccountCToken_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryaccountCTokenTransactionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryaccountCTokenTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<AccountCTokenTransaction_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<AccountCTokenTransaction_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytransferEventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerytransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TransferEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TransferEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerymintEventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QuerymintEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MintEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<MintEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryredeemEventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryredeemEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<RedeemEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<RedeemEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidationEventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryliquidationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidationEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidationEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryborrowEventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryborrowEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<BorrowEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<BorrowEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryrepayEventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryrepayEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<RepayEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<RepayEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryctokenTransferArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryctokenTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<CTokenTransfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<CTokenTransfer_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryunderlyingTransferArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type QueryunderlyingTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UnderlyingTransfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UnderlyingTransfer_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscription = {
  uniswapFactory?: Maybe<UniswapFactory>
  uniswapFactories: Array<UniswapFactory>
  token?: Maybe<Token>
  tokens: Array<Token>
  pair?: Maybe<Pair>
  pairs: Array<Pair>
  user?: Maybe<User>
  users: Array<User>
  liquidityPosition?: Maybe<LiquidityPosition>
  liquidityPositions: Array<LiquidityPosition>
  liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>
  transaction?: Maybe<Transaction>
  transactions: Array<Transaction>
  mint?: Maybe<Mint>
  mints: Array<Mint>
  burn?: Maybe<Burn>
  burns: Array<Burn>
  swap?: Maybe<Swap>
  swaps: Array<Swap>
  bundle?: Maybe<Bundle>
  bundles: Array<Bundle>
  uniswapDayData?: Maybe<UniswapDayData>
  uniswapDayDatas: Array<UniswapDayData>
  pairHourData?: Maybe<PairHourData>
  pairHourDatas: Array<PairHourData>
  pairDayData?: Maybe<PairDayData>
  pairDayDatas: Array<PairDayData>
  tokenDayData?: Maybe<TokenDayData>
  tokenDayDatas: Array<TokenDayData>
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>
  comptroller?: Maybe<Comptroller>
  comptrollers: Array<Comptroller>
  market?: Maybe<Market>
  markets: Array<Market>
  account?: Maybe<Account>
  accounts: Array<Account>
  accountCToken?: Maybe<AccountCToken>
  accountCTokens: Array<AccountCToken>
  accountCTokenTransaction?: Maybe<AccountCTokenTransaction>
  accountCTokenTransactions: Array<AccountCTokenTransaction>
  transferEvent?: Maybe<TransferEvent>
  transferEvents: Array<TransferEvent>
  mintEvent?: Maybe<MintEvent>
  mintEvents: Array<MintEvent>
  redeemEvent?: Maybe<RedeemEvent>
  redeemEvents: Array<RedeemEvent>
  liquidationEvent?: Maybe<LiquidationEvent>
  liquidationEvents: Array<LiquidationEvent>
  borrowEvent?: Maybe<BorrowEvent>
  borrowEvents: Array<BorrowEvent>
  repayEvent?: Maybe<RepayEvent>
  repayEvents: Array<RepayEvent>
  ctokenTransfer?: Maybe<CTokenTransfer>
  ctokenTransfers: Array<CTokenTransfer>
  underlyingTransfer?: Maybe<UnderlyingTransfer>
  underlyingTransfers: Array<UnderlyingTransfer>
}

export type SubscriptionuniswapFactoryArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionuniswapFactoriesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UniswapFactory_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UniswapFactory_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
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

export type SubscriptionpairArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionpairsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Pair_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Pair_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionuserArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<User_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<User_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidityPositionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidityPositionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPosition_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPosition_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidityPositionSnapshotArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidityPositionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidityPositionSnapshot_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontransactionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Transaction_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Transaction_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionmintArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionmintsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Mint_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Mint_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionburnArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionburnsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Burn_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Burn_filter>
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

export type SubscriptionbundleArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionbundlesArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Bundle_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Bundle_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionuniswapDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionuniswapDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UniswapDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UniswapDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionpairHourDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionpairHourDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairHourData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairHourData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionpairDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionpairDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<PairDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<PairDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontokenDayDataArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontokenDayDatasArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TokenDayData_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TokenDayData_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>
}

export type SubscriptioncomptrollerArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptioncomptrollersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Comptroller_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Comptroller_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionmarketArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionmarketsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Market_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<Market_filter>
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

export type SubscriptionaccountCTokenArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionaccountCTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<AccountCToken_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<AccountCToken_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionaccountCTokenTransactionArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionaccountCTokenTransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<AccountCTokenTransaction_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<AccountCTokenTransaction_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontransferEventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptiontransferEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<TransferEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<TransferEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionmintEventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionmintEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<MintEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<MintEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionredeemEventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionredeemEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<RedeemEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<RedeemEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidationEventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionliquidationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<LiquidationEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<LiquidationEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionborrowEventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionborrowEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<BorrowEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<BorrowEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionrepayEventArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionrepayEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<RepayEvent_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<RepayEvent_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionctokenTransferArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionctokenTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<CTokenTransfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<CTokenTransfer_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionunderlyingTransferArgs = {
  id: Scalars['ID']
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
}

export type SubscriptionunderlyingTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<UnderlyingTransfer_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<UnderlyingTransfer_filter>
  block?: InputMaybe<Block_height>
  subgraphError?: _SubgraphErrorPolicy_
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
  transaction_not_contains?: InputMaybe<Scalars['String']>
  transaction_starts_with?: InputMaybe<Scalars['String']>
  transaction_not_starts_with?: InputMaybe<Scalars['String']>
  transaction_ends_with?: InputMaybe<Scalars['String']>
  transaction_not_ends_with?: InputMaybe<Scalars['String']>
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
  pair_not_contains?: InputMaybe<Scalars['String']>
  pair_starts_with?: InputMaybe<Scalars['String']>
  pair_not_starts_with?: InputMaybe<Scalars['String']>
  pair_ends_with?: InputMaybe<Scalars['String']>
  pair_not_ends_with?: InputMaybe<Scalars['String']>
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
  liquidityPosition_not_contains?: InputMaybe<Scalars['String']>
  liquidityPosition_starts_with?: InputMaybe<Scalars['String']>
  liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>
  liquidityPosition_ends_with?: InputMaybe<Scalars['String']>
  liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>
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
  user_not_contains?: InputMaybe<Scalars['String']>
  user_starts_with?: InputMaybe<Scalars['String']>
  user_not_starts_with?: InputMaybe<Scalars['String']>
  user_ends_with?: InputMaybe<Scalars['String']>
  user_not_ends_with?: InputMaybe<Scalars['String']>
  pair?: InputMaybe<Scalars['String']>
  pair_not?: InputMaybe<Scalars['String']>
  pair_gt?: InputMaybe<Scalars['String']>
  pair_lt?: InputMaybe<Scalars['String']>
  pair_gte?: InputMaybe<Scalars['String']>
  pair_lte?: InputMaybe<Scalars['String']>
  pair_in?: InputMaybe<Array<Scalars['String']>>
  pair_not_in?: InputMaybe<Array<Scalars['String']>>
  pair_contains?: InputMaybe<Scalars['String']>
  pair_not_contains?: InputMaybe<Scalars['String']>
  pair_starts_with?: InputMaybe<Scalars['String']>
  pair_not_starts_with?: InputMaybe<Scalars['String']>
  pair_ends_with?: InputMaybe<Scalars['String']>
  pair_not_ends_with?: InputMaybe<Scalars['String']>
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
  user_not_contains?: InputMaybe<Scalars['String']>
  user_starts_with?: InputMaybe<Scalars['String']>
  user_not_starts_with?: InputMaybe<Scalars['String']>
  user_ends_with?: InputMaybe<Scalars['String']>
  user_not_ends_with?: InputMaybe<Scalars['String']>
  pair?: InputMaybe<Scalars['String']>
  pair_not?: InputMaybe<Scalars['String']>
  pair_gt?: InputMaybe<Scalars['String']>
  pair_lt?: InputMaybe<Scalars['String']>
  pair_gte?: InputMaybe<Scalars['String']>
  pair_lte?: InputMaybe<Scalars['String']>
  pair_in?: InputMaybe<Array<Scalars['String']>>
  pair_not_in?: InputMaybe<Array<Scalars['String']>>
  pair_contains?: InputMaybe<Scalars['String']>
  pair_not_contains?: InputMaybe<Scalars['String']>
  pair_starts_with?: InputMaybe<Scalars['String']>
  pair_not_starts_with?: InputMaybe<Scalars['String']>
  pair_ends_with?: InputMaybe<Scalars['String']>
  pair_not_ends_with?: InputMaybe<Scalars['String']>
  liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
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
  transaction_not_contains?: InputMaybe<Scalars['String']>
  transaction_starts_with?: InputMaybe<Scalars['String']>
  transaction_not_starts_with?: InputMaybe<Scalars['String']>
  transaction_ends_with?: InputMaybe<Scalars['String']>
  transaction_not_ends_with?: InputMaybe<Scalars['String']>
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
  pair_not_contains?: InputMaybe<Scalars['String']>
  pair_starts_with?: InputMaybe<Scalars['String']>
  pair_not_starts_with?: InputMaybe<Scalars['String']>
  pair_ends_with?: InputMaybe<Scalars['String']>
  pair_not_ends_with?: InputMaybe<Scalars['String']>
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
  token0_not_contains?: InputMaybe<Scalars['String']>
  token0_starts_with?: InputMaybe<Scalars['String']>
  token0_not_starts_with?: InputMaybe<Scalars['String']>
  token0_ends_with?: InputMaybe<Scalars['String']>
  token0_not_ends_with?: InputMaybe<Scalars['String']>
  token1?: InputMaybe<Scalars['String']>
  token1_not?: InputMaybe<Scalars['String']>
  token1_gt?: InputMaybe<Scalars['String']>
  token1_lt?: InputMaybe<Scalars['String']>
  token1_gte?: InputMaybe<Scalars['String']>
  token1_lte?: InputMaybe<Scalars['String']>
  token1_in?: InputMaybe<Array<Scalars['String']>>
  token1_not_in?: InputMaybe<Array<Scalars['String']>>
  token1_contains?: InputMaybe<Scalars['String']>
  token1_not_contains?: InputMaybe<Scalars['String']>
  token1_starts_with?: InputMaybe<Scalars['String']>
  token1_not_starts_with?: InputMaybe<Scalars['String']>
  token1_ends_with?: InputMaybe<Scalars['String']>
  token1_not_ends_with?: InputMaybe<Scalars['String']>
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
  pair_not_contains?: InputMaybe<Scalars['String']>
  pair_starts_with?: InputMaybe<Scalars['String']>
  pair_not_starts_with?: InputMaybe<Scalars['String']>
  pair_ends_with?: InputMaybe<Scalars['String']>
  pair_not_ends_with?: InputMaybe<Scalars['String']>
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
  token0_not_contains?: InputMaybe<Scalars['String']>
  token0_starts_with?: InputMaybe<Scalars['String']>
  token0_not_starts_with?: InputMaybe<Scalars['String']>
  token0_ends_with?: InputMaybe<Scalars['String']>
  token0_not_ends_with?: InputMaybe<Scalars['String']>
  token1?: InputMaybe<Scalars['String']>
  token1_not?: InputMaybe<Scalars['String']>
  token1_gt?: InputMaybe<Scalars['String']>
  token1_lt?: InputMaybe<Scalars['String']>
  token1_gte?: InputMaybe<Scalars['String']>
  token1_lte?: InputMaybe<Scalars['String']>
  token1_in?: InputMaybe<Array<Scalars['String']>>
  token1_not_in?: InputMaybe<Array<Scalars['String']>>
  token1_contains?: InputMaybe<Scalars['String']>
  token1_not_contains?: InputMaybe<Scalars['String']>
  token1_starts_with?: InputMaybe<Scalars['String']>
  token1_not_starts_with?: InputMaybe<Scalars['String']>
  token1_ends_with?: InputMaybe<Scalars['String']>
  token1_not_ends_with?: InputMaybe<Scalars['String']>
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
  transaction_not_contains?: InputMaybe<Scalars['String']>
  transaction_starts_with?: InputMaybe<Scalars['String']>
  transaction_not_starts_with?: InputMaybe<Scalars['String']>
  transaction_ends_with?: InputMaybe<Scalars['String']>
  transaction_not_ends_with?: InputMaybe<Scalars['String']>
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
  pair_not_contains?: InputMaybe<Scalars['String']>
  pair_starts_with?: InputMaybe<Scalars['String']>
  pair_not_starts_with?: InputMaybe<Scalars['String']>
  pair_ends_with?: InputMaybe<Scalars['String']>
  pair_not_ends_with?: InputMaybe<Scalars['String']>
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
  token_not_contains?: InputMaybe<Scalars['String']>
  token_starts_with?: InputMaybe<Scalars['String']>
  token_not_starts_with?: InputMaybe<Scalars['String']>
  token_ends_with?: InputMaybe<Scalars['String']>
  token_not_ends_with?: InputMaybe<Scalars['String']>
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
  mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>
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
  symbol_not_contains?: InputMaybe<Scalars['String']>
  symbol_starts_with?: InputMaybe<Scalars['String']>
  symbol_not_starts_with?: InputMaybe<Scalars['String']>
  symbol_ends_with?: InputMaybe<Scalars['String']>
  symbol_not_ends_with?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_gt?: InputMaybe<Scalars['String']>
  name_lt?: InputMaybe<Scalars['String']>
  name_gte?: InputMaybe<Scalars['String']>
  name_lte?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_not_in?: InputMaybe<Array<Scalars['String']>>
  name_contains?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_starts_with?: InputMaybe<Scalars['String']>
  name_not_starts_with?: InputMaybe<Scalars['String']>
  name_ends_with?: InputMaybe<Scalars['String']>
  name_not_ends_with?: InputMaybe<Scalars['String']>
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
  mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>
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
  mints_not_contains?: InputMaybe<Array<Scalars['String']>>
  burns?: InputMaybe<Array<Scalars['String']>>
  burns_not?: InputMaybe<Array<Scalars['String']>>
  burns_contains?: InputMaybe<Array<Scalars['String']>>
  burns_not_contains?: InputMaybe<Array<Scalars['String']>>
  swaps?: InputMaybe<Array<Scalars['String']>>
  swaps_not?: InputMaybe<Array<Scalars['String']>>
  swaps_contains?: InputMaybe<Array<Scalars['String']>>
  swaps_not_contains?: InputMaybe<Array<Scalars['String']>>
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
  mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
  txCount?: InputMaybe<Scalars['BigInt']>
  txCount_not?: InputMaybe<Scalars['BigInt']>
  txCount_gt?: InputMaybe<Scalars['BigInt']>
  txCount_lt?: InputMaybe<Scalars['BigInt']>
  txCount_gte?: InputMaybe<Scalars['BigInt']>
  txCount_lte?: InputMaybe<Scalars['BigInt']>
  txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
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
  mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
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

/** The Comptroller type has protocol level variables stored */
export type Comptroller = {
  /** ID is set to 1 */
  id: Scalars['ID']
  /** Address of price oracle the comptroller uses */
  priceOracle?: Maybe<Scalars['Bytes']>
  /** Factor used to determine repayAmount for liquidating */
  closeFactor?: Maybe<Scalars['BigInt']>
  /** The percent bonus liquidators get for liquidating */
  liquidationIncentive?: Maybe<Scalars['BigInt']>
  /** Max assets a single user can enter */
  maxAssets?: Maybe<Scalars['BigInt']>
}

export type Comptroller_orderBy = 'id' | 'priceOracle' | 'closeFactor' | 'liquidationIncentive' | 'maxAssets'

export type Comptroller_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  priceOracle?: InputMaybe<Scalars['Bytes']>
  priceOracle_not?: InputMaybe<Scalars['Bytes']>
  priceOracle_in?: InputMaybe<Array<Scalars['Bytes']>>
  priceOracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  priceOracle_contains?: InputMaybe<Scalars['Bytes']>
  priceOracle_not_contains?: InputMaybe<Scalars['Bytes']>
  closeFactor?: InputMaybe<Scalars['BigInt']>
  closeFactor_not?: InputMaybe<Scalars['BigInt']>
  closeFactor_gt?: InputMaybe<Scalars['BigInt']>
  closeFactor_lt?: InputMaybe<Scalars['BigInt']>
  closeFactor_gte?: InputMaybe<Scalars['BigInt']>
  closeFactor_lte?: InputMaybe<Scalars['BigInt']>
  closeFactor_in?: InputMaybe<Array<Scalars['BigInt']>>
  closeFactor_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  liquidationIncentive?: InputMaybe<Scalars['BigInt']>
  liquidationIncentive_not?: InputMaybe<Scalars['BigInt']>
  liquidationIncentive_gt?: InputMaybe<Scalars['BigInt']>
  liquidationIncentive_lt?: InputMaybe<Scalars['BigInt']>
  liquidationIncentive_gte?: InputMaybe<Scalars['BigInt']>
  liquidationIncentive_lte?: InputMaybe<Scalars['BigInt']>
  liquidationIncentive_in?: InputMaybe<Array<Scalars['BigInt']>>
  liquidationIncentive_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  maxAssets?: InputMaybe<Scalars['BigInt']>
  maxAssets_not?: InputMaybe<Scalars['BigInt']>
  maxAssets_gt?: InputMaybe<Scalars['BigInt']>
  maxAssets_lt?: InputMaybe<Scalars['BigInt']>
  maxAssets_gte?: InputMaybe<Scalars['BigInt']>
  maxAssets_lte?: InputMaybe<Scalars['BigInt']>
  maxAssets_in?: InputMaybe<Array<Scalars['BigInt']>>
  maxAssets_not_in?: InputMaybe<Array<Scalars['BigInt']>>
}

/** Market stores all high level variables for a cToken market */
export type Market = {
  /** Yearly borrow rate. With 2102400 blocks per year */
  borrowRate: Scalars['BigDecimal']
  /** The cToken contract balance of ERC20 or ETH */
  cash: Scalars['BigDecimal']
  /** Collateral factor determining how much one can borrow */
  collateralFactor: Scalars['BigDecimal']
  /** Exchange rate of tokens / cTokens */
  exchangeRate: Scalars['BigDecimal']
  /** Address of the interest rate model */
  interestRateModelAddress: Scalars['Bytes']
  /** Name of the cToken */
  name: Scalars['String']
  /** Reserves stored in the contract */
  reserves: Scalars['BigDecimal']
  /** Yearly supply rate. With 2104400 blocks per year */
  supplyRate: Scalars['BigDecimal']
  /** CToken symbol */
  symbol: Scalars['String']
  /** CToken address */
  id: Scalars['ID']
  /** Borrows in the market */
  totalBorrows: Scalars['BigDecimal']
  /** CToken supply. CTokens have 8 decimals */
  totalSupply: Scalars['BigDecimal']
  /** Underlying token address */
  underlyingAddress: Scalars['Bytes']
  /** Underlying token name */
  underlyingName: Scalars['String']
  /** Underlying price of token in ETH (ex. 0.007 DAI) */
  underlyingPrice: Scalars['BigDecimal']
  /** Underlying token symbol */
  underlyingSymbol: Scalars['String']
  /** Block the market is updated to */
  accrualBlockNumber: Scalars['Int']
  /** Timestamp the market was most recently updated */
  blockTimestamp: Scalars['Int']
  /** The history of the markets borrow index return (Think S&P 500) */
  borrowIndex: Scalars['BigDecimal']
  /** The factor determining interest that goes to reserves */
  reserveFactor: Scalars['BigInt']
  /** Underlying token price in USD */
  underlyingPriceUSD: Scalars['BigDecimal']
  /** Underlying token decimal length */
  underlyingDecimals: Scalars['Int']
}

export type Market_orderBy =
  | 'borrowRate'
  | 'cash'
  | 'collateralFactor'
  | 'exchangeRate'
  | 'interestRateModelAddress'
  | 'name'
  | 'reserves'
  | 'supplyRate'
  | 'symbol'
  | 'id'
  | 'totalBorrows'
  | 'totalSupply'
  | 'underlyingAddress'
  | 'underlyingName'
  | 'underlyingPrice'
  | 'underlyingSymbol'
  | 'accrualBlockNumber'
  | 'blockTimestamp'
  | 'borrowIndex'
  | 'reserveFactor'
  | 'underlyingPriceUSD'
  | 'underlyingDecimals'

export type Market_filter = {
  borrowRate?: InputMaybe<Scalars['BigDecimal']>
  borrowRate_not?: InputMaybe<Scalars['BigDecimal']>
  borrowRate_gt?: InputMaybe<Scalars['BigDecimal']>
  borrowRate_lt?: InputMaybe<Scalars['BigDecimal']>
  borrowRate_gte?: InputMaybe<Scalars['BigDecimal']>
  borrowRate_lte?: InputMaybe<Scalars['BigDecimal']>
  borrowRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  borrowRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cash?: InputMaybe<Scalars['BigDecimal']>
  cash_not?: InputMaybe<Scalars['BigDecimal']>
  cash_gt?: InputMaybe<Scalars['BigDecimal']>
  cash_lt?: InputMaybe<Scalars['BigDecimal']>
  cash_gte?: InputMaybe<Scalars['BigDecimal']>
  cash_lte?: InputMaybe<Scalars['BigDecimal']>
  cash_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cash_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  collateralFactor?: InputMaybe<Scalars['BigDecimal']>
  collateralFactor_not?: InputMaybe<Scalars['BigDecimal']>
  collateralFactor_gt?: InputMaybe<Scalars['BigDecimal']>
  collateralFactor_lt?: InputMaybe<Scalars['BigDecimal']>
  collateralFactor_gte?: InputMaybe<Scalars['BigDecimal']>
  collateralFactor_lte?: InputMaybe<Scalars['BigDecimal']>
  collateralFactor_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  collateralFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  exchangeRate?: InputMaybe<Scalars['BigDecimal']>
  exchangeRate_not?: InputMaybe<Scalars['BigDecimal']>
  exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>
  exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>
  exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>
  exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>
  exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  interestRateModelAddress?: InputMaybe<Scalars['Bytes']>
  interestRateModelAddress_not?: InputMaybe<Scalars['Bytes']>
  interestRateModelAddress_in?: InputMaybe<Array<Scalars['Bytes']>>
  interestRateModelAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  interestRateModelAddress_contains?: InputMaybe<Scalars['Bytes']>
  interestRateModelAddress_not_contains?: InputMaybe<Scalars['Bytes']>
  name?: InputMaybe<Scalars['String']>
  name_not?: InputMaybe<Scalars['String']>
  name_gt?: InputMaybe<Scalars['String']>
  name_lt?: InputMaybe<Scalars['String']>
  name_gte?: InputMaybe<Scalars['String']>
  name_lte?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_not_in?: InputMaybe<Array<Scalars['String']>>
  name_contains?: InputMaybe<Scalars['String']>
  name_not_contains?: InputMaybe<Scalars['String']>
  name_starts_with?: InputMaybe<Scalars['String']>
  name_not_starts_with?: InputMaybe<Scalars['String']>
  name_ends_with?: InputMaybe<Scalars['String']>
  name_not_ends_with?: InputMaybe<Scalars['String']>
  reserves?: InputMaybe<Scalars['BigDecimal']>
  reserves_not?: InputMaybe<Scalars['BigDecimal']>
  reserves_gt?: InputMaybe<Scalars['BigDecimal']>
  reserves_lt?: InputMaybe<Scalars['BigDecimal']>
  reserves_gte?: InputMaybe<Scalars['BigDecimal']>
  reserves_lte?: InputMaybe<Scalars['BigDecimal']>
  reserves_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserves_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  supplyRate?: InputMaybe<Scalars['BigDecimal']>
  supplyRate_not?: InputMaybe<Scalars['BigDecimal']>
  supplyRate_gt?: InputMaybe<Scalars['BigDecimal']>
  supplyRate_lt?: InputMaybe<Scalars['BigDecimal']>
  supplyRate_gte?: InputMaybe<Scalars['BigDecimal']>
  supplyRate_lte?: InputMaybe<Scalars['BigDecimal']>
  supplyRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  supplyRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  symbol?: InputMaybe<Scalars['String']>
  symbol_not?: InputMaybe<Scalars['String']>
  symbol_gt?: InputMaybe<Scalars['String']>
  symbol_lt?: InputMaybe<Scalars['String']>
  symbol_gte?: InputMaybe<Scalars['String']>
  symbol_lte?: InputMaybe<Scalars['String']>
  symbol_in?: InputMaybe<Array<Scalars['String']>>
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>
  symbol_contains?: InputMaybe<Scalars['String']>
  symbol_not_contains?: InputMaybe<Scalars['String']>
  symbol_starts_with?: InputMaybe<Scalars['String']>
  symbol_not_starts_with?: InputMaybe<Scalars['String']>
  symbol_ends_with?: InputMaybe<Scalars['String']>
  symbol_not_ends_with?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  totalBorrows?: InputMaybe<Scalars['BigDecimal']>
  totalBorrows_not?: InputMaybe<Scalars['BigDecimal']>
  totalBorrows_gt?: InputMaybe<Scalars['BigDecimal']>
  totalBorrows_lt?: InputMaybe<Scalars['BigDecimal']>
  totalBorrows_gte?: InputMaybe<Scalars['BigDecimal']>
  totalBorrows_lte?: InputMaybe<Scalars['BigDecimal']>
  totalBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalSupply?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_not?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  underlyingAddress?: InputMaybe<Scalars['Bytes']>
  underlyingAddress_not?: InputMaybe<Scalars['Bytes']>
  underlyingAddress_in?: InputMaybe<Array<Scalars['Bytes']>>
  underlyingAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  underlyingAddress_contains?: InputMaybe<Scalars['Bytes']>
  underlyingAddress_not_contains?: InputMaybe<Scalars['Bytes']>
  underlyingName?: InputMaybe<Scalars['String']>
  underlyingName_not?: InputMaybe<Scalars['String']>
  underlyingName_gt?: InputMaybe<Scalars['String']>
  underlyingName_lt?: InputMaybe<Scalars['String']>
  underlyingName_gte?: InputMaybe<Scalars['String']>
  underlyingName_lte?: InputMaybe<Scalars['String']>
  underlyingName_in?: InputMaybe<Array<Scalars['String']>>
  underlyingName_not_in?: InputMaybe<Array<Scalars['String']>>
  underlyingName_contains?: InputMaybe<Scalars['String']>
  underlyingName_not_contains?: InputMaybe<Scalars['String']>
  underlyingName_starts_with?: InputMaybe<Scalars['String']>
  underlyingName_not_starts_with?: InputMaybe<Scalars['String']>
  underlyingName_ends_with?: InputMaybe<Scalars['String']>
  underlyingName_not_ends_with?: InputMaybe<Scalars['String']>
  underlyingPrice?: InputMaybe<Scalars['BigDecimal']>
  underlyingPrice_not?: InputMaybe<Scalars['BigDecimal']>
  underlyingPrice_gt?: InputMaybe<Scalars['BigDecimal']>
  underlyingPrice_lt?: InputMaybe<Scalars['BigDecimal']>
  underlyingPrice_gte?: InputMaybe<Scalars['BigDecimal']>
  underlyingPrice_lte?: InputMaybe<Scalars['BigDecimal']>
  underlyingPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  underlyingPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  underlyingSymbol?: InputMaybe<Scalars['String']>
  underlyingSymbol_not?: InputMaybe<Scalars['String']>
  underlyingSymbol_gt?: InputMaybe<Scalars['String']>
  underlyingSymbol_lt?: InputMaybe<Scalars['String']>
  underlyingSymbol_gte?: InputMaybe<Scalars['String']>
  underlyingSymbol_lte?: InputMaybe<Scalars['String']>
  underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>
  underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
  underlyingSymbol_contains?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>
  underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>
  accrualBlockNumber?: InputMaybe<Scalars['Int']>
  accrualBlockNumber_not?: InputMaybe<Scalars['Int']>
  accrualBlockNumber_gt?: InputMaybe<Scalars['Int']>
  accrualBlockNumber_lt?: InputMaybe<Scalars['Int']>
  accrualBlockNumber_gte?: InputMaybe<Scalars['Int']>
  accrualBlockNumber_lte?: InputMaybe<Scalars['Int']>
  accrualBlockNumber_in?: InputMaybe<Array<Scalars['Int']>>
  accrualBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
  blockTimestamp?: InputMaybe<Scalars['Int']>
  blockTimestamp_not?: InputMaybe<Scalars['Int']>
  blockTimestamp_gt?: InputMaybe<Scalars['Int']>
  blockTimestamp_lt?: InputMaybe<Scalars['Int']>
  blockTimestamp_gte?: InputMaybe<Scalars['Int']>
  blockTimestamp_lte?: InputMaybe<Scalars['Int']>
  blockTimestamp_in?: InputMaybe<Array<Scalars['Int']>>
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>
  borrowIndex?: InputMaybe<Scalars['BigDecimal']>
  borrowIndex_not?: InputMaybe<Scalars['BigDecimal']>
  borrowIndex_gt?: InputMaybe<Scalars['BigDecimal']>
  borrowIndex_lt?: InputMaybe<Scalars['BigDecimal']>
  borrowIndex_gte?: InputMaybe<Scalars['BigDecimal']>
  borrowIndex_lte?: InputMaybe<Scalars['BigDecimal']>
  borrowIndex_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  borrowIndex_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  reserveFactor?: InputMaybe<Scalars['BigInt']>
  reserveFactor_not?: InputMaybe<Scalars['BigInt']>
  reserveFactor_gt?: InputMaybe<Scalars['BigInt']>
  reserveFactor_lt?: InputMaybe<Scalars['BigInt']>
  reserveFactor_gte?: InputMaybe<Scalars['BigInt']>
  reserveFactor_lte?: InputMaybe<Scalars['BigInt']>
  reserveFactor_in?: InputMaybe<Array<Scalars['BigInt']>>
  reserveFactor_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  underlyingPriceUSD?: InputMaybe<Scalars['BigDecimal']>
  underlyingPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
  underlyingPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
  underlyingPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
  underlyingPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
  underlyingPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
  underlyingPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  underlyingPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  underlyingDecimals?: InputMaybe<Scalars['Int']>
  underlyingDecimals_not?: InputMaybe<Scalars['Int']>
  underlyingDecimals_gt?: InputMaybe<Scalars['Int']>
  underlyingDecimals_lt?: InputMaybe<Scalars['Int']>
  underlyingDecimals_gte?: InputMaybe<Scalars['Int']>
  underlyingDecimals_lte?: InputMaybe<Scalars['Int']>
  underlyingDecimals_in?: InputMaybe<Array<Scalars['Int']>>
  underlyingDecimals_not_in?: InputMaybe<Array<Scalars['Int']>>
}

/**
 * Account is an ETH address, with a list of all cToken markets the account has
 * participated in, along with liquidation information.
 */
export type Account = {
  /** User ETH address */
  id: Scalars['ID']
  /** Array of CTokens user is in */
  tokens: Array<AccountCToken>
  /** Count user has been liquidated */
  countLiquidated: Scalars['Int']
  /** Count user has liquidated others */
  countLiquidator: Scalars['Int']
  /** True if user has ever borrowed */
  hasBorrowed: Scalars['Boolean']
  health?: Maybe<Scalars['BigDecimal']>
  totalBorrowValueInEth: Scalars['BigDecimal']
  totalCollateralValueInEth: Scalars['BigDecimal']
}

/**
 * Account is an ETH address, with a list of all cToken markets the account has
 * participated in, along with liquidation information.
 */
export type AccounttokensArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<AccountCToken_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<AccountCToken_filter>
}

export type AccountCToken_orderBy =
  | 'id'
  | 'market'
  | 'symbol'
  | 'account'
  | 'transactions'
  | 'accrualBlockNumber'
  | 'enteredMarket'
  | 'cTokenBalance'
  | 'totalUnderlyingSupplied'
  | 'totalUnderlyingRedeemed'
  | 'accountBorrowIndex'
  | 'totalUnderlyingBorrowed'
  | 'totalUnderlyingRepaid'
  | 'storedBorrowBalance'

export type AccountCToken_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  market?: InputMaybe<Scalars['String']>
  market_not?: InputMaybe<Scalars['String']>
  market_gt?: InputMaybe<Scalars['String']>
  market_lt?: InputMaybe<Scalars['String']>
  market_gte?: InputMaybe<Scalars['String']>
  market_lte?: InputMaybe<Scalars['String']>
  market_in?: InputMaybe<Array<Scalars['String']>>
  market_not_in?: InputMaybe<Array<Scalars['String']>>
  market_contains?: InputMaybe<Scalars['String']>
  market_not_contains?: InputMaybe<Scalars['String']>
  market_starts_with?: InputMaybe<Scalars['String']>
  market_not_starts_with?: InputMaybe<Scalars['String']>
  market_ends_with?: InputMaybe<Scalars['String']>
  market_not_ends_with?: InputMaybe<Scalars['String']>
  symbol?: InputMaybe<Scalars['String']>
  symbol_not?: InputMaybe<Scalars['String']>
  symbol_gt?: InputMaybe<Scalars['String']>
  symbol_lt?: InputMaybe<Scalars['String']>
  symbol_gte?: InputMaybe<Scalars['String']>
  symbol_lte?: InputMaybe<Scalars['String']>
  symbol_in?: InputMaybe<Array<Scalars['String']>>
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>
  symbol_contains?: InputMaybe<Scalars['String']>
  symbol_not_contains?: InputMaybe<Scalars['String']>
  symbol_starts_with?: InputMaybe<Scalars['String']>
  symbol_not_starts_with?: InputMaybe<Scalars['String']>
  symbol_ends_with?: InputMaybe<Scalars['String']>
  symbol_not_ends_with?: InputMaybe<Scalars['String']>
  account?: InputMaybe<Scalars['String']>
  account_not?: InputMaybe<Scalars['String']>
  account_gt?: InputMaybe<Scalars['String']>
  account_lt?: InputMaybe<Scalars['String']>
  account_gte?: InputMaybe<Scalars['String']>
  account_lte?: InputMaybe<Scalars['String']>
  account_in?: InputMaybe<Array<Scalars['String']>>
  account_not_in?: InputMaybe<Array<Scalars['String']>>
  account_contains?: InputMaybe<Scalars['String']>
  account_not_contains?: InputMaybe<Scalars['String']>
  account_starts_with?: InputMaybe<Scalars['String']>
  account_not_starts_with?: InputMaybe<Scalars['String']>
  account_ends_with?: InputMaybe<Scalars['String']>
  account_not_ends_with?: InputMaybe<Scalars['String']>
  accrualBlockNumber?: InputMaybe<Scalars['BigInt']>
  accrualBlockNumber_not?: InputMaybe<Scalars['BigInt']>
  accrualBlockNumber_gt?: InputMaybe<Scalars['BigInt']>
  accrualBlockNumber_lt?: InputMaybe<Scalars['BigInt']>
  accrualBlockNumber_gte?: InputMaybe<Scalars['BigInt']>
  accrualBlockNumber_lte?: InputMaybe<Scalars['BigInt']>
  accrualBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
  accrualBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  enteredMarket?: InputMaybe<Scalars['Boolean']>
  enteredMarket_not?: InputMaybe<Scalars['Boolean']>
  enteredMarket_in?: InputMaybe<Array<Scalars['Boolean']>>
  enteredMarket_not_in?: InputMaybe<Array<Scalars['Boolean']>>
  cTokenBalance?: InputMaybe<Scalars['BigDecimal']>
  cTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>
  cTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>
  cTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>
  cTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>
  cTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>
  cTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  cTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalUnderlyingSupplied?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingSupplied_not?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingSupplied_gt?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingSupplied_lt?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingSupplied_gte?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingSupplied_lte?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingSupplied_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalUnderlyingSupplied_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalUnderlyingRedeemed?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingRedeemed_not?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingRedeemed_gt?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingRedeemed_lt?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingRedeemed_gte?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingRedeemed_lte?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingRedeemed_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalUnderlyingRedeemed_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  accountBorrowIndex?: InputMaybe<Scalars['BigDecimal']>
  accountBorrowIndex_not?: InputMaybe<Scalars['BigDecimal']>
  accountBorrowIndex_gt?: InputMaybe<Scalars['BigDecimal']>
  accountBorrowIndex_lt?: InputMaybe<Scalars['BigDecimal']>
  accountBorrowIndex_gte?: InputMaybe<Scalars['BigDecimal']>
  accountBorrowIndex_lte?: InputMaybe<Scalars['BigDecimal']>
  accountBorrowIndex_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  accountBorrowIndex_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalUnderlyingBorrowed?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingBorrowed_not?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingBorrowed_gt?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingBorrowed_lt?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingBorrowed_gte?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingBorrowed_lte?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingBorrowed_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalUnderlyingBorrowed_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalUnderlyingRepaid?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingRepaid_not?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingRepaid_gt?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingRepaid_lt?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingRepaid_gte?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingRepaid_lte?: InputMaybe<Scalars['BigDecimal']>
  totalUnderlyingRepaid_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  totalUnderlyingRepaid_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  storedBorrowBalance?: InputMaybe<Scalars['BigDecimal']>
  storedBorrowBalance_not?: InputMaybe<Scalars['BigDecimal']>
  storedBorrowBalance_gt?: InputMaybe<Scalars['BigDecimal']>
  storedBorrowBalance_lt?: InputMaybe<Scalars['BigDecimal']>
  storedBorrowBalance_gte?: InputMaybe<Scalars['BigDecimal']>
  storedBorrowBalance_lte?: InputMaybe<Scalars['BigDecimal']>
  storedBorrowBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  storedBorrowBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
}

/**
 * AccountCToken is a single account within a single cToken market, with data such
 * as interest earned or paid
 */
export type AccountCToken = {
  /** Concatenation of CToken address and user address */
  id: Scalars['ID']
  /** Relation to market */
  market: Market
  /** Symbol of the cToken */
  symbol: Scalars['String']
  /** Relation to user */
  account: Account
  /** Transactions data */
  transactions: Array<AccountCTokenTransaction>
  /** Block number this asset was updated at in the contract */
  accrualBlockNumber: Scalars['BigInt']
  /** True if user is entered, false if they are exited */
  enteredMarket: Scalars['Boolean']
  /** CToken balance of the user */
  cTokenBalance: Scalars['BigDecimal']
  /** Total amount of underlying supplied */
  totalUnderlyingSupplied: Scalars['BigDecimal']
  /** Total amount of underling redeemed */
  totalUnderlyingRedeemed: Scalars['BigDecimal']
  /** The value of the borrow index upon users last interaction */
  accountBorrowIndex: Scalars['BigDecimal']
  /** Total amount underlying borrowed, exclusive of interest */
  totalUnderlyingBorrowed: Scalars['BigDecimal']
  /** Total amount underlying repaid */
  totalUnderlyingRepaid: Scalars['BigDecimal']
  /** Current borrow balance stored in contract (exclusive of interest since accrualBlockNumber) */
  storedBorrowBalance: Scalars['BigDecimal']
  supplyBalanceUnderlying: Scalars['BigDecimal']
  lifetimeSupplyInterestAccrued: Scalars['BigDecimal']
  borrowBalanceUnderlying: Scalars['BigDecimal']
  lifetimeBorrowInterestAccrued: Scalars['BigDecimal']
}

/**
 * AccountCToken is a single account within a single cToken market, with data such
 * as interest earned or paid
 */
export type AccountCTokentransactionsArgs = {
  skip?: InputMaybe<Scalars['Int']>
  first?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<AccountCTokenTransaction_orderBy>
  orderDirection?: InputMaybe<OrderDirection>
  where?: InputMaybe<AccountCTokenTransaction_filter>
}

export type AccountCTokenTransaction_orderBy = 'id' | 'account' | 'tx_hash' | 'timestamp' | 'block' | 'logIndex'

export type AccountCTokenTransaction_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  account?: InputMaybe<Scalars['String']>
  account_not?: InputMaybe<Scalars['String']>
  account_gt?: InputMaybe<Scalars['String']>
  account_lt?: InputMaybe<Scalars['String']>
  account_gte?: InputMaybe<Scalars['String']>
  account_lte?: InputMaybe<Scalars['String']>
  account_in?: InputMaybe<Array<Scalars['String']>>
  account_not_in?: InputMaybe<Array<Scalars['String']>>
  account_contains?: InputMaybe<Scalars['String']>
  account_not_contains?: InputMaybe<Scalars['String']>
  account_starts_with?: InputMaybe<Scalars['String']>
  account_not_starts_with?: InputMaybe<Scalars['String']>
  account_ends_with?: InputMaybe<Scalars['String']>
  account_not_ends_with?: InputMaybe<Scalars['String']>
  tx_hash?: InputMaybe<Scalars['Bytes']>
  tx_hash_not?: InputMaybe<Scalars['Bytes']>
  tx_hash_in?: InputMaybe<Array<Scalars['Bytes']>>
  tx_hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  tx_hash_contains?: InputMaybe<Scalars['Bytes']>
  tx_hash_not_contains?: InputMaybe<Scalars['Bytes']>
  timestamp?: InputMaybe<Scalars['BigInt']>
  timestamp_not?: InputMaybe<Scalars['BigInt']>
  timestamp_gt?: InputMaybe<Scalars['BigInt']>
  timestamp_lt?: InputMaybe<Scalars['BigInt']>
  timestamp_gte?: InputMaybe<Scalars['BigInt']>
  timestamp_lte?: InputMaybe<Scalars['BigInt']>
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  block?: InputMaybe<Scalars['BigInt']>
  block_not?: InputMaybe<Scalars['BigInt']>
  block_gt?: InputMaybe<Scalars['BigInt']>
  block_lt?: InputMaybe<Scalars['BigInt']>
  block_gte?: InputMaybe<Scalars['BigInt']>
  block_lte?: InputMaybe<Scalars['BigInt']>
  block_in?: InputMaybe<Array<Scalars['BigInt']>>
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  logIndex?: InputMaybe<Scalars['BigInt']>
  logIndex_not?: InputMaybe<Scalars['BigInt']>
  logIndex_gt?: InputMaybe<Scalars['BigInt']>
  logIndex_lt?: InputMaybe<Scalars['BigInt']>
  logIndex_gte?: InputMaybe<Scalars['BigInt']>
  logIndex_lte?: InputMaybe<Scalars['BigInt']>
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>
}

/** Auxiliary entity for AccountCToken */
export type AccountCTokenTransaction = {
  id: Scalars['ID']
  account: AccountCToken
  tx_hash: Scalars['Bytes']
  timestamp: Scalars['BigInt']
  block: Scalars['BigInt']
  logIndex: Scalars['BigInt']
}

export type Account_orderBy = 'id' | 'tokens' | 'countLiquidated' | 'countLiquidator' | 'hasBorrowed'

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  countLiquidated?: InputMaybe<Scalars['Int']>
  countLiquidated_not?: InputMaybe<Scalars['Int']>
  countLiquidated_gt?: InputMaybe<Scalars['Int']>
  countLiquidated_lt?: InputMaybe<Scalars['Int']>
  countLiquidated_gte?: InputMaybe<Scalars['Int']>
  countLiquidated_lte?: InputMaybe<Scalars['Int']>
  countLiquidated_in?: InputMaybe<Array<Scalars['Int']>>
  countLiquidated_not_in?: InputMaybe<Array<Scalars['Int']>>
  countLiquidator?: InputMaybe<Scalars['Int']>
  countLiquidator_not?: InputMaybe<Scalars['Int']>
  countLiquidator_gt?: InputMaybe<Scalars['Int']>
  countLiquidator_lt?: InputMaybe<Scalars['Int']>
  countLiquidator_gte?: InputMaybe<Scalars['Int']>
  countLiquidator_lte?: InputMaybe<Scalars['Int']>
  countLiquidator_in?: InputMaybe<Array<Scalars['Int']>>
  countLiquidator_not_in?: InputMaybe<Array<Scalars['Int']>>
  hasBorrowed?: InputMaybe<Scalars['Boolean']>
  hasBorrowed_not?: InputMaybe<Scalars['Boolean']>
  hasBorrowed_in?: InputMaybe<Array<Scalars['Boolean']>>
  hasBorrowed_not_in?: InputMaybe<Array<Scalars['Boolean']>>
}

/**
 * TransferEvent will be stored for every mint, redeem, liquidation, and any normal
 * transfer between two accounts.
 */
export type TransferEvent = CTokenTransfer & {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']
  /** cTokens transferred */
  amount: Scalars['BigDecimal']
  /** Account that received tokens */
  to: Scalars['Bytes']
  /** Account that sent tokens */
  from: Scalars['Bytes']
  /** Block number */
  blockNumber: Scalars['Int']
  /** Block time */
  blockTime: Scalars['Int']
  /** Symbol of the cToken transferred */
  cTokenSymbol: Scalars['String']
}

/**
 * An interface for a transfer of any cToken. TransferEvent, MintEvent,
 * RedeemEvent, and LiquidationEvent all use this interface
 */
export type CTokenTransfer = {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']
  /** cTokens transferred */
  amount: Scalars['BigDecimal']
  /** Account that received tokens */
  to: Scalars['Bytes']
  /** Account that sent tokens */
  from: Scalars['Bytes']
  /** Block number */
  blockNumber: Scalars['Int']
  /** Block time */
  blockTime: Scalars['Int']
  /** Symbol of the cToken transferred */
  cTokenSymbol: Scalars['String']
}

export type TransferEvent_orderBy = 'id' | 'amount' | 'to' | 'from' | 'blockNumber' | 'blockTime' | 'cTokenSymbol'

export type TransferEvent_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  amount?: InputMaybe<Scalars['BigDecimal']>
  amount_not?: InputMaybe<Scalars['BigDecimal']>
  amount_gt?: InputMaybe<Scalars['BigDecimal']>
  amount_lt?: InputMaybe<Scalars['BigDecimal']>
  amount_gte?: InputMaybe<Scalars['BigDecimal']>
  amount_lte?: InputMaybe<Scalars['BigDecimal']>
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  to?: InputMaybe<Scalars['Bytes']>
  to_not?: InputMaybe<Scalars['Bytes']>
  to_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_contains?: InputMaybe<Scalars['Bytes']>
  to_not_contains?: InputMaybe<Scalars['Bytes']>
  from?: InputMaybe<Scalars['Bytes']>
  from_not?: InputMaybe<Scalars['Bytes']>
  from_in?: InputMaybe<Array<Scalars['Bytes']>>
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  from_contains?: InputMaybe<Scalars['Bytes']>
  from_not_contains?: InputMaybe<Scalars['Bytes']>
  blockNumber?: InputMaybe<Scalars['Int']>
  blockNumber_not?: InputMaybe<Scalars['Int']>
  blockNumber_gt?: InputMaybe<Scalars['Int']>
  blockNumber_lt?: InputMaybe<Scalars['Int']>
  blockNumber_gte?: InputMaybe<Scalars['Int']>
  blockNumber_lte?: InputMaybe<Scalars['Int']>
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime?: InputMaybe<Scalars['Int']>
  blockTime_not?: InputMaybe<Scalars['Int']>
  blockTime_gt?: InputMaybe<Scalars['Int']>
  blockTime_lt?: InputMaybe<Scalars['Int']>
  blockTime_gte?: InputMaybe<Scalars['Int']>
  blockTime_lte?: InputMaybe<Scalars['Int']>
  blockTime_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
  cTokenSymbol?: InputMaybe<Scalars['String']>
  cTokenSymbol_not?: InputMaybe<Scalars['String']>
  cTokenSymbol_gt?: InputMaybe<Scalars['String']>
  cTokenSymbol_lt?: InputMaybe<Scalars['String']>
  cTokenSymbol_gte?: InputMaybe<Scalars['String']>
  cTokenSymbol_lte?: InputMaybe<Scalars['String']>
  cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>
  cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
  cTokenSymbol_contains?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>
  cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>
}

/**
 * MintEvent stores information for mints. From address will always be a cToken
 * market address
 */
export type MintEvent = CTokenTransfer & {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']
  /** cTokens transferred */
  amount: Scalars['BigDecimal']
  /** Account that received tokens (minter) */
  to: Scalars['Bytes']
  /** Account that sent tokens (CToken contract) */
  from: Scalars['Bytes']
  /** Block number */
  blockNumber: Scalars['Int']
  /** Block time */
  blockTime: Scalars['Int']
  /** Symbol of the cToken transferred */
  cTokenSymbol: Scalars['String']
  /** Underlying token amount transferred */
  underlyingAmount?: Maybe<Scalars['BigDecimal']>
}

export type MintEvent_orderBy =
  | 'id'
  | 'amount'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'blockTime'
  | 'cTokenSymbol'
  | 'underlyingAmount'

export type MintEvent_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  amount?: InputMaybe<Scalars['BigDecimal']>
  amount_not?: InputMaybe<Scalars['BigDecimal']>
  amount_gt?: InputMaybe<Scalars['BigDecimal']>
  amount_lt?: InputMaybe<Scalars['BigDecimal']>
  amount_gte?: InputMaybe<Scalars['BigDecimal']>
  amount_lte?: InputMaybe<Scalars['BigDecimal']>
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  to?: InputMaybe<Scalars['Bytes']>
  to_not?: InputMaybe<Scalars['Bytes']>
  to_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_contains?: InputMaybe<Scalars['Bytes']>
  to_not_contains?: InputMaybe<Scalars['Bytes']>
  from?: InputMaybe<Scalars['Bytes']>
  from_not?: InputMaybe<Scalars['Bytes']>
  from_in?: InputMaybe<Array<Scalars['Bytes']>>
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  from_contains?: InputMaybe<Scalars['Bytes']>
  from_not_contains?: InputMaybe<Scalars['Bytes']>
  blockNumber?: InputMaybe<Scalars['Int']>
  blockNumber_not?: InputMaybe<Scalars['Int']>
  blockNumber_gt?: InputMaybe<Scalars['Int']>
  blockNumber_lt?: InputMaybe<Scalars['Int']>
  blockNumber_gte?: InputMaybe<Scalars['Int']>
  blockNumber_lte?: InputMaybe<Scalars['Int']>
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime?: InputMaybe<Scalars['Int']>
  blockTime_not?: InputMaybe<Scalars['Int']>
  blockTime_gt?: InputMaybe<Scalars['Int']>
  blockTime_lt?: InputMaybe<Scalars['Int']>
  blockTime_gte?: InputMaybe<Scalars['Int']>
  blockTime_lte?: InputMaybe<Scalars['Int']>
  blockTime_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
  cTokenSymbol?: InputMaybe<Scalars['String']>
  cTokenSymbol_not?: InputMaybe<Scalars['String']>
  cTokenSymbol_gt?: InputMaybe<Scalars['String']>
  cTokenSymbol_lt?: InputMaybe<Scalars['String']>
  cTokenSymbol_gte?: InputMaybe<Scalars['String']>
  cTokenSymbol_lte?: InputMaybe<Scalars['String']>
  cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>
  cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
  cTokenSymbol_contains?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>
  cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>
  underlyingAmount?: InputMaybe<Scalars['BigDecimal']>
  underlyingAmount_not?: InputMaybe<Scalars['BigDecimal']>
  underlyingAmount_gt?: InputMaybe<Scalars['BigDecimal']>
  underlyingAmount_lt?: InputMaybe<Scalars['BigDecimal']>
  underlyingAmount_gte?: InputMaybe<Scalars['BigDecimal']>
  underlyingAmount_lte?: InputMaybe<Scalars['BigDecimal']>
  underlyingAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  underlyingAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
}

/**
 * RedeemEvent stores information for redeems. To address will always be a
 * cToken market address
 */
export type RedeemEvent = CTokenTransfer & {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']
  /** cTokens transferred */
  amount: Scalars['BigDecimal']
  /** Account that received tokens (CToken contract) */
  to: Scalars['Bytes']
  /** Account that sent tokens (redeemer) */
  from: Scalars['Bytes']
  /** Block number */
  blockNumber: Scalars['Int']
  /** Block time */
  blockTime: Scalars['Int']
  /** Symbol of the cToken transferred */
  cTokenSymbol: Scalars['String']
  /** Underlying token amount transferred */
  underlyingAmount?: Maybe<Scalars['BigDecimal']>
}

export type RedeemEvent_orderBy =
  | 'id'
  | 'amount'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'blockTime'
  | 'cTokenSymbol'
  | 'underlyingAmount'

export type RedeemEvent_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  amount?: InputMaybe<Scalars['BigDecimal']>
  amount_not?: InputMaybe<Scalars['BigDecimal']>
  amount_gt?: InputMaybe<Scalars['BigDecimal']>
  amount_lt?: InputMaybe<Scalars['BigDecimal']>
  amount_gte?: InputMaybe<Scalars['BigDecimal']>
  amount_lte?: InputMaybe<Scalars['BigDecimal']>
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  to?: InputMaybe<Scalars['Bytes']>
  to_not?: InputMaybe<Scalars['Bytes']>
  to_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_contains?: InputMaybe<Scalars['Bytes']>
  to_not_contains?: InputMaybe<Scalars['Bytes']>
  from?: InputMaybe<Scalars['Bytes']>
  from_not?: InputMaybe<Scalars['Bytes']>
  from_in?: InputMaybe<Array<Scalars['Bytes']>>
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  from_contains?: InputMaybe<Scalars['Bytes']>
  from_not_contains?: InputMaybe<Scalars['Bytes']>
  blockNumber?: InputMaybe<Scalars['Int']>
  blockNumber_not?: InputMaybe<Scalars['Int']>
  blockNumber_gt?: InputMaybe<Scalars['Int']>
  blockNumber_lt?: InputMaybe<Scalars['Int']>
  blockNumber_gte?: InputMaybe<Scalars['Int']>
  blockNumber_lte?: InputMaybe<Scalars['Int']>
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime?: InputMaybe<Scalars['Int']>
  blockTime_not?: InputMaybe<Scalars['Int']>
  blockTime_gt?: InputMaybe<Scalars['Int']>
  blockTime_lt?: InputMaybe<Scalars['Int']>
  blockTime_gte?: InputMaybe<Scalars['Int']>
  blockTime_lte?: InputMaybe<Scalars['Int']>
  blockTime_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
  cTokenSymbol?: InputMaybe<Scalars['String']>
  cTokenSymbol_not?: InputMaybe<Scalars['String']>
  cTokenSymbol_gt?: InputMaybe<Scalars['String']>
  cTokenSymbol_lt?: InputMaybe<Scalars['String']>
  cTokenSymbol_gte?: InputMaybe<Scalars['String']>
  cTokenSymbol_lte?: InputMaybe<Scalars['String']>
  cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>
  cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
  cTokenSymbol_contains?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>
  cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>
  underlyingAmount?: InputMaybe<Scalars['BigDecimal']>
  underlyingAmount_not?: InputMaybe<Scalars['BigDecimal']>
  underlyingAmount_gt?: InputMaybe<Scalars['BigDecimal']>
  underlyingAmount_lt?: InputMaybe<Scalars['BigDecimal']>
  underlyingAmount_gte?: InputMaybe<Scalars['BigDecimal']>
  underlyingAmount_lte?: InputMaybe<Scalars['BigDecimal']>
  underlyingAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  underlyingAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
}

/**
 * LiquidationEvent stores information for liquidations. The event is emitted from
 * the cToken market address.
 */
export type LiquidationEvent = CTokenTransfer & {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']
  /** cTokens seized */
  amount: Scalars['BigDecimal']
  /** Liquidator receiving tokens */
  to: Scalars['Bytes']
  /** Account being liquidated (borrower) */
  from: Scalars['Bytes']
  /** Block number */
  blockNumber: Scalars['Int']
  /** Block time */
  blockTime: Scalars['Int']
  /** cToken that was sezied as collateral */
  cTokenSymbol: Scalars['String']
  /** Symbol of the underlying asset repaid through liquidation */
  underlyingSymbol: Scalars['String']
  /** Underlying cToken amount that was repaid by liquidator */
  underlyingRepayAmount: Scalars['BigDecimal']
}

export type LiquidationEvent_orderBy =
  | 'id'
  | 'amount'
  | 'to'
  | 'from'
  | 'blockNumber'
  | 'blockTime'
  | 'cTokenSymbol'
  | 'underlyingSymbol'
  | 'underlyingRepayAmount'

export type LiquidationEvent_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  amount?: InputMaybe<Scalars['BigDecimal']>
  amount_not?: InputMaybe<Scalars['BigDecimal']>
  amount_gt?: InputMaybe<Scalars['BigDecimal']>
  amount_lt?: InputMaybe<Scalars['BigDecimal']>
  amount_gte?: InputMaybe<Scalars['BigDecimal']>
  amount_lte?: InputMaybe<Scalars['BigDecimal']>
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  to?: InputMaybe<Scalars['Bytes']>
  to_not?: InputMaybe<Scalars['Bytes']>
  to_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_contains?: InputMaybe<Scalars['Bytes']>
  to_not_contains?: InputMaybe<Scalars['Bytes']>
  from?: InputMaybe<Scalars['Bytes']>
  from_not?: InputMaybe<Scalars['Bytes']>
  from_in?: InputMaybe<Array<Scalars['Bytes']>>
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  from_contains?: InputMaybe<Scalars['Bytes']>
  from_not_contains?: InputMaybe<Scalars['Bytes']>
  blockNumber?: InputMaybe<Scalars['Int']>
  blockNumber_not?: InputMaybe<Scalars['Int']>
  blockNumber_gt?: InputMaybe<Scalars['Int']>
  blockNumber_lt?: InputMaybe<Scalars['Int']>
  blockNumber_gte?: InputMaybe<Scalars['Int']>
  blockNumber_lte?: InputMaybe<Scalars['Int']>
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime?: InputMaybe<Scalars['Int']>
  blockTime_not?: InputMaybe<Scalars['Int']>
  blockTime_gt?: InputMaybe<Scalars['Int']>
  blockTime_lt?: InputMaybe<Scalars['Int']>
  blockTime_gte?: InputMaybe<Scalars['Int']>
  blockTime_lte?: InputMaybe<Scalars['Int']>
  blockTime_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
  cTokenSymbol?: InputMaybe<Scalars['String']>
  cTokenSymbol_not?: InputMaybe<Scalars['String']>
  cTokenSymbol_gt?: InputMaybe<Scalars['String']>
  cTokenSymbol_lt?: InputMaybe<Scalars['String']>
  cTokenSymbol_gte?: InputMaybe<Scalars['String']>
  cTokenSymbol_lte?: InputMaybe<Scalars['String']>
  cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>
  cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
  cTokenSymbol_contains?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>
  cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>
  underlyingSymbol?: InputMaybe<Scalars['String']>
  underlyingSymbol_not?: InputMaybe<Scalars['String']>
  underlyingSymbol_gt?: InputMaybe<Scalars['String']>
  underlyingSymbol_lt?: InputMaybe<Scalars['String']>
  underlyingSymbol_gte?: InputMaybe<Scalars['String']>
  underlyingSymbol_lte?: InputMaybe<Scalars['String']>
  underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>
  underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
  underlyingSymbol_contains?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>
  underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>
  underlyingRepayAmount?: InputMaybe<Scalars['BigDecimal']>
  underlyingRepayAmount_not?: InputMaybe<Scalars['BigDecimal']>
  underlyingRepayAmount_gt?: InputMaybe<Scalars['BigDecimal']>
  underlyingRepayAmount_lt?: InputMaybe<Scalars['BigDecimal']>
  underlyingRepayAmount_gte?: InputMaybe<Scalars['BigDecimal']>
  underlyingRepayAmount_lte?: InputMaybe<Scalars['BigDecimal']>
  underlyingRepayAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  underlyingRepayAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
}

/** BorrowEvent stores information for borrows */
export type BorrowEvent = UnderlyingTransfer & {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']
  /** Amount of underlying borrowed */
  amount: Scalars['BigDecimal']
  /** Total borrows of this asset the account has */
  accountBorrows: Scalars['BigDecimal']
  /** Account that borrowed the tokens */
  borrower: Scalars['Bytes']
  /** Block number */
  blockNumber: Scalars['Int']
  /** Block time */
  blockTime: Scalars['Int']
  /** Symbol of the borrowed underlying asset */
  underlyingSymbol: Scalars['String']
}

/**
 * Underlying transfers are transfers of underlying collateral for both borrows
 * and repays
 */
export type UnderlyingTransfer = {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']
  /** Amount of underlying borrowed */
  amount: Scalars['BigDecimal']
  /** Total borrows of this asset the account has */
  accountBorrows: Scalars['BigDecimal']
  /** Account that borrowed the tokens */
  borrower: Scalars['Bytes']
  /** Block number */
  blockNumber: Scalars['Int']
  /** Block time */
  blockTime: Scalars['Int']
  /** Symbol of the borrowed underlying asset */
  underlyingSymbol: Scalars['String']
}

export type BorrowEvent_orderBy =
  | 'id'
  | 'amount'
  | 'accountBorrows'
  | 'borrower'
  | 'blockNumber'
  | 'blockTime'
  | 'underlyingSymbol'

export type BorrowEvent_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  amount?: InputMaybe<Scalars['BigDecimal']>
  amount_not?: InputMaybe<Scalars['BigDecimal']>
  amount_gt?: InputMaybe<Scalars['BigDecimal']>
  amount_lt?: InputMaybe<Scalars['BigDecimal']>
  amount_gte?: InputMaybe<Scalars['BigDecimal']>
  amount_lte?: InputMaybe<Scalars['BigDecimal']>
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  accountBorrows?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_not?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_gt?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_lt?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_gte?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_lte?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  accountBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  borrower?: InputMaybe<Scalars['Bytes']>
  borrower_not?: InputMaybe<Scalars['Bytes']>
  borrower_in?: InputMaybe<Array<Scalars['Bytes']>>
  borrower_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  borrower_contains?: InputMaybe<Scalars['Bytes']>
  borrower_not_contains?: InputMaybe<Scalars['Bytes']>
  blockNumber?: InputMaybe<Scalars['Int']>
  blockNumber_not?: InputMaybe<Scalars['Int']>
  blockNumber_gt?: InputMaybe<Scalars['Int']>
  blockNumber_lt?: InputMaybe<Scalars['Int']>
  blockNumber_gte?: InputMaybe<Scalars['Int']>
  blockNumber_lte?: InputMaybe<Scalars['Int']>
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime?: InputMaybe<Scalars['Int']>
  blockTime_not?: InputMaybe<Scalars['Int']>
  blockTime_gt?: InputMaybe<Scalars['Int']>
  blockTime_lt?: InputMaybe<Scalars['Int']>
  blockTime_gte?: InputMaybe<Scalars['Int']>
  blockTime_lte?: InputMaybe<Scalars['Int']>
  blockTime_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
  underlyingSymbol?: InputMaybe<Scalars['String']>
  underlyingSymbol_not?: InputMaybe<Scalars['String']>
  underlyingSymbol_gt?: InputMaybe<Scalars['String']>
  underlyingSymbol_lt?: InputMaybe<Scalars['String']>
  underlyingSymbol_gte?: InputMaybe<Scalars['String']>
  underlyingSymbol_lte?: InputMaybe<Scalars['String']>
  underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>
  underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
  underlyingSymbol_contains?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>
  underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>
}

/**
 * RepayEvent stores information for repays. Payer is not always the same as
 * borrower, such as in the event of a Liquidation
 */
export type RepayEvent = UnderlyingTransfer & {
  /** Transaction hash concatenated with log index */
  id: Scalars['ID']
  /** Amount of underlying repaid */
  amount: Scalars['BigDecimal']
  /** Total borrows of this asset the account has */
  accountBorrows: Scalars['BigDecimal']
  /** Account that borrowed the tokens */
  borrower: Scalars['Bytes']
  /** Block number */
  blockNumber: Scalars['Int']
  /** Block time */
  blockTime: Scalars['Int']
  /** Symbol of the borrowed underlying asset */
  underlyingSymbol: Scalars['String']
  /** Payer of the borrow funds */
  payer: Scalars['Bytes']
}

export type RepayEvent_orderBy =
  | 'id'
  | 'amount'
  | 'accountBorrows'
  | 'borrower'
  | 'blockNumber'
  | 'blockTime'
  | 'underlyingSymbol'
  | 'payer'

export type RepayEvent_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  amount?: InputMaybe<Scalars['BigDecimal']>
  amount_not?: InputMaybe<Scalars['BigDecimal']>
  amount_gt?: InputMaybe<Scalars['BigDecimal']>
  amount_lt?: InputMaybe<Scalars['BigDecimal']>
  amount_gte?: InputMaybe<Scalars['BigDecimal']>
  amount_lte?: InputMaybe<Scalars['BigDecimal']>
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  accountBorrows?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_not?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_gt?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_lt?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_gte?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_lte?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  accountBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  borrower?: InputMaybe<Scalars['Bytes']>
  borrower_not?: InputMaybe<Scalars['Bytes']>
  borrower_in?: InputMaybe<Array<Scalars['Bytes']>>
  borrower_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  borrower_contains?: InputMaybe<Scalars['Bytes']>
  borrower_not_contains?: InputMaybe<Scalars['Bytes']>
  blockNumber?: InputMaybe<Scalars['Int']>
  blockNumber_not?: InputMaybe<Scalars['Int']>
  blockNumber_gt?: InputMaybe<Scalars['Int']>
  blockNumber_lt?: InputMaybe<Scalars['Int']>
  blockNumber_gte?: InputMaybe<Scalars['Int']>
  blockNumber_lte?: InputMaybe<Scalars['Int']>
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime?: InputMaybe<Scalars['Int']>
  blockTime_not?: InputMaybe<Scalars['Int']>
  blockTime_gt?: InputMaybe<Scalars['Int']>
  blockTime_lt?: InputMaybe<Scalars['Int']>
  blockTime_gte?: InputMaybe<Scalars['Int']>
  blockTime_lte?: InputMaybe<Scalars['Int']>
  blockTime_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
  underlyingSymbol?: InputMaybe<Scalars['String']>
  underlyingSymbol_not?: InputMaybe<Scalars['String']>
  underlyingSymbol_gt?: InputMaybe<Scalars['String']>
  underlyingSymbol_lt?: InputMaybe<Scalars['String']>
  underlyingSymbol_gte?: InputMaybe<Scalars['String']>
  underlyingSymbol_lte?: InputMaybe<Scalars['String']>
  underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>
  underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
  underlyingSymbol_contains?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>
  underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>
  payer?: InputMaybe<Scalars['Bytes']>
  payer_not?: InputMaybe<Scalars['Bytes']>
  payer_in?: InputMaybe<Array<Scalars['Bytes']>>
  payer_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  payer_contains?: InputMaybe<Scalars['Bytes']>
  payer_not_contains?: InputMaybe<Scalars['Bytes']>
}

export type CTokenTransfer_orderBy = 'id' | 'amount' | 'to' | 'from' | 'blockNumber' | 'blockTime' | 'cTokenSymbol'

export type CTokenTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  amount?: InputMaybe<Scalars['BigDecimal']>
  amount_not?: InputMaybe<Scalars['BigDecimal']>
  amount_gt?: InputMaybe<Scalars['BigDecimal']>
  amount_lt?: InputMaybe<Scalars['BigDecimal']>
  amount_gte?: InputMaybe<Scalars['BigDecimal']>
  amount_lte?: InputMaybe<Scalars['BigDecimal']>
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  to?: InputMaybe<Scalars['Bytes']>
  to_not?: InputMaybe<Scalars['Bytes']>
  to_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  to_contains?: InputMaybe<Scalars['Bytes']>
  to_not_contains?: InputMaybe<Scalars['Bytes']>
  from?: InputMaybe<Scalars['Bytes']>
  from_not?: InputMaybe<Scalars['Bytes']>
  from_in?: InputMaybe<Array<Scalars['Bytes']>>
  from_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  from_contains?: InputMaybe<Scalars['Bytes']>
  from_not_contains?: InputMaybe<Scalars['Bytes']>
  blockNumber?: InputMaybe<Scalars['Int']>
  blockNumber_not?: InputMaybe<Scalars['Int']>
  blockNumber_gt?: InputMaybe<Scalars['Int']>
  blockNumber_lt?: InputMaybe<Scalars['Int']>
  blockNumber_gte?: InputMaybe<Scalars['Int']>
  blockNumber_lte?: InputMaybe<Scalars['Int']>
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime?: InputMaybe<Scalars['Int']>
  blockTime_not?: InputMaybe<Scalars['Int']>
  blockTime_gt?: InputMaybe<Scalars['Int']>
  blockTime_lt?: InputMaybe<Scalars['Int']>
  blockTime_gte?: InputMaybe<Scalars['Int']>
  blockTime_lte?: InputMaybe<Scalars['Int']>
  blockTime_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
  cTokenSymbol?: InputMaybe<Scalars['String']>
  cTokenSymbol_not?: InputMaybe<Scalars['String']>
  cTokenSymbol_gt?: InputMaybe<Scalars['String']>
  cTokenSymbol_lt?: InputMaybe<Scalars['String']>
  cTokenSymbol_gte?: InputMaybe<Scalars['String']>
  cTokenSymbol_lte?: InputMaybe<Scalars['String']>
  cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>
  cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
  cTokenSymbol_contains?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>
  cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>
  cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>
}

export type UnderlyingTransfer_orderBy =
  | 'id'
  | 'amount'
  | 'accountBorrows'
  | 'borrower'
  | 'blockNumber'
  | 'blockTime'
  | 'underlyingSymbol'

export type UnderlyingTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>
  id_not?: InputMaybe<Scalars['ID']>
  id_gt?: InputMaybe<Scalars['ID']>
  id_lt?: InputMaybe<Scalars['ID']>
  id_gte?: InputMaybe<Scalars['ID']>
  id_lte?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  id_not_in?: InputMaybe<Array<Scalars['ID']>>
  amount?: InputMaybe<Scalars['BigDecimal']>
  amount_not?: InputMaybe<Scalars['BigDecimal']>
  amount_gt?: InputMaybe<Scalars['BigDecimal']>
  amount_lt?: InputMaybe<Scalars['BigDecimal']>
  amount_gte?: InputMaybe<Scalars['BigDecimal']>
  amount_lte?: InputMaybe<Scalars['BigDecimal']>
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  accountBorrows?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_not?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_gt?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_lt?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_gte?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_lte?: InputMaybe<Scalars['BigDecimal']>
  accountBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  accountBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  borrower?: InputMaybe<Scalars['Bytes']>
  borrower_not?: InputMaybe<Scalars['Bytes']>
  borrower_in?: InputMaybe<Array<Scalars['Bytes']>>
  borrower_not_in?: InputMaybe<Array<Scalars['Bytes']>>
  borrower_contains?: InputMaybe<Scalars['Bytes']>
  borrower_not_contains?: InputMaybe<Scalars['Bytes']>
  blockNumber?: InputMaybe<Scalars['Int']>
  blockNumber_not?: InputMaybe<Scalars['Int']>
  blockNumber_gt?: InputMaybe<Scalars['Int']>
  blockNumber_lt?: InputMaybe<Scalars['Int']>
  blockNumber_gte?: InputMaybe<Scalars['Int']>
  blockNumber_lte?: InputMaybe<Scalars['Int']>
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime?: InputMaybe<Scalars['Int']>
  blockTime_not?: InputMaybe<Scalars['Int']>
  blockTime_gt?: InputMaybe<Scalars['Int']>
  blockTime_lt?: InputMaybe<Scalars['Int']>
  blockTime_gte?: InputMaybe<Scalars['Int']>
  blockTime_lte?: InputMaybe<Scalars['Int']>
  blockTime_in?: InputMaybe<Array<Scalars['Int']>>
  blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
  underlyingSymbol?: InputMaybe<Scalars['String']>
  underlyingSymbol_not?: InputMaybe<Scalars['String']>
  underlyingSymbol_gt?: InputMaybe<Scalars['String']>
  underlyingSymbol_lt?: InputMaybe<Scalars['String']>
  underlyingSymbol_gte?: InputMaybe<Scalars['String']>
  underlyingSymbol_lte?: InputMaybe<Scalars['String']>
  underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>
  underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
  underlyingSymbol_contains?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>
  underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>
  underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>
}

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
  selectionSet: string
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
  Comptroller: ResolverTypeWrapper<Comptroller>
  Comptroller_orderBy: Comptroller_orderBy
  Comptroller_filter: Comptroller_filter
  Market: ResolverTypeWrapper<Market>
  Market_orderBy: Market_orderBy
  Market_filter: Market_filter
  Account: ResolverTypeWrapper<Account>
  AccountCToken_orderBy: AccountCToken_orderBy
  AccountCToken_filter: AccountCToken_filter
  AccountCToken: ResolverTypeWrapper<AccountCToken>
  AccountCTokenTransaction_orderBy: AccountCTokenTransaction_orderBy
  AccountCTokenTransaction_filter: AccountCTokenTransaction_filter
  AccountCTokenTransaction: ResolverTypeWrapper<AccountCTokenTransaction>
  Account_orderBy: Account_orderBy
  Account_filter: Account_filter
  TransferEvent: ResolverTypeWrapper<TransferEvent>
  CTokenTransfer:
    | ResolversTypes['TransferEvent']
    | ResolversTypes['MintEvent']
    | ResolversTypes['RedeemEvent']
    | ResolversTypes['LiquidationEvent']
  TransferEvent_orderBy: TransferEvent_orderBy
  TransferEvent_filter: TransferEvent_filter
  MintEvent: ResolverTypeWrapper<MintEvent>
  MintEvent_orderBy: MintEvent_orderBy
  MintEvent_filter: MintEvent_filter
  RedeemEvent: ResolverTypeWrapper<RedeemEvent>
  RedeemEvent_orderBy: RedeemEvent_orderBy
  RedeemEvent_filter: RedeemEvent_filter
  LiquidationEvent: ResolverTypeWrapper<LiquidationEvent>
  LiquidationEvent_orderBy: LiquidationEvent_orderBy
  LiquidationEvent_filter: LiquidationEvent_filter
  BorrowEvent: ResolverTypeWrapper<BorrowEvent>
  UnderlyingTransfer: ResolversTypes['BorrowEvent'] | ResolversTypes['RepayEvent']
  BorrowEvent_orderBy: BorrowEvent_orderBy
  BorrowEvent_filter: BorrowEvent_filter
  RepayEvent: ResolverTypeWrapper<RepayEvent>
  RepayEvent_orderBy: RepayEvent_orderBy
  RepayEvent_filter: RepayEvent_filter
  CTokenTransfer_orderBy: CTokenTransfer_orderBy
  CTokenTransfer_filter: CTokenTransfer_filter
  UnderlyingTransfer_orderBy: UnderlyingTransfer_orderBy
  UnderlyingTransfer_filter: UnderlyingTransfer_filter
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {}
  Subscription: {}
  BigDecimal: Scalars['BigDecimal']
  BigInt: Scalars['BigInt']
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
  Comptroller: Comptroller
  Comptroller_filter: Comptroller_filter
  Market: Market
  Market_filter: Market_filter
  Account: Account
  AccountCToken_filter: AccountCToken_filter
  AccountCToken: AccountCToken
  AccountCTokenTransaction_filter: AccountCTokenTransaction_filter
  AccountCTokenTransaction: AccountCTokenTransaction
  Account_filter: Account_filter
  TransferEvent: TransferEvent
  CTokenTransfer:
    | ResolversParentTypes['TransferEvent']
    | ResolversParentTypes['MintEvent']
    | ResolversParentTypes['RedeemEvent']
    | ResolversParentTypes['LiquidationEvent']
  TransferEvent_filter: TransferEvent_filter
  MintEvent: MintEvent
  MintEvent_filter: MintEvent_filter
  RedeemEvent: RedeemEvent
  RedeemEvent_filter: RedeemEvent_filter
  LiquidationEvent: LiquidationEvent
  LiquidationEvent_filter: LiquidationEvent_filter
  BorrowEvent: BorrowEvent
  UnderlyingTransfer: ResolversParentTypes['BorrowEvent'] | ResolversParentTypes['RepayEvent']
  BorrowEvent_filter: BorrowEvent_filter
  RepayEvent: RepayEvent
  RepayEvent_filter: RepayEvent_filter
  CTokenTransfer_filter: CTokenTransfer_filter
  UnderlyingTransfer_filter: UnderlyingTransfer_filter
}>

export type QueryResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  uniswapFactory?: Resolver<
    Maybe<ResolversTypes['UniswapFactory']>,
    ParentType,
    ContextType,
    RequireFields<QueryuniswapFactoryArgs, 'id' | 'subgraphError'>
  >
  uniswapFactories?: Resolver<
    Array<ResolversTypes['UniswapFactory']>,
    ParentType,
    ContextType,
    RequireFields<QueryuniswapFactoriesArgs, 'skip' | 'first' | 'subgraphError'>
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
  pair?: Resolver<
    Maybe<ResolversTypes['Pair']>,
    ParentType,
    ContextType,
    RequireFields<QuerypairArgs, 'id' | 'subgraphError'>
  >
  pairs?: Resolver<
    Array<ResolversTypes['Pair']>,
    ParentType,
    ContextType,
    RequireFields<QuerypairsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryuserArgs, 'id' | 'subgraphError'>
  >
  users?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidityPosition?: Resolver<
    Maybe<ResolversTypes['LiquidityPosition']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidityPositionArgs, 'id' | 'subgraphError'>
  >
  liquidityPositions?: Resolver<
    Array<ResolversTypes['LiquidityPosition']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidityPositionSnapshot?: Resolver<
    Maybe<ResolversTypes['LiquidityPositionSnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidityPositionSnapshotArgs, 'id' | 'subgraphError'>
  >
  liquidityPositionSnapshots?: Resolver<
    Array<ResolversTypes['LiquidityPositionSnapshot']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  transaction?: Resolver<
    Maybe<ResolversTypes['Transaction']>,
    ParentType,
    ContextType,
    RequireFields<QuerytransactionArgs, 'id' | 'subgraphError'>
  >
  transactions?: Resolver<
    Array<ResolversTypes['Transaction']>,
    ParentType,
    ContextType,
    RequireFields<QuerytransactionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  mint?: Resolver<
    Maybe<ResolversTypes['Mint']>,
    ParentType,
    ContextType,
    RequireFields<QuerymintArgs, 'id' | 'subgraphError'>
  >
  mints?: Resolver<
    Array<ResolversTypes['Mint']>,
    ParentType,
    ContextType,
    RequireFields<QuerymintsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  burn?: Resolver<
    Maybe<ResolversTypes['Burn']>,
    ParentType,
    ContextType,
    RequireFields<QueryburnArgs, 'id' | 'subgraphError'>
  >
  burns?: Resolver<
    Array<ResolversTypes['Burn']>,
    ParentType,
    ContextType,
    RequireFields<QueryburnsArgs, 'skip' | 'first' | 'subgraphError'>
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
  bundle?: Resolver<
    Maybe<ResolversTypes['Bundle']>,
    ParentType,
    ContextType,
    RequireFields<QuerybundleArgs, 'id' | 'subgraphError'>
  >
  bundles?: Resolver<
    Array<ResolversTypes['Bundle']>,
    ParentType,
    ContextType,
    RequireFields<QuerybundlesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  uniswapDayData?: Resolver<
    Maybe<ResolversTypes['UniswapDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryuniswapDayDataArgs, 'id' | 'subgraphError'>
  >
  uniswapDayDatas?: Resolver<
    Array<ResolversTypes['UniswapDayData']>,
    ParentType,
    ContextType,
    RequireFields<QueryuniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  pairHourData?: Resolver<
    Maybe<ResolversTypes['PairHourData']>,
    ParentType,
    ContextType,
    RequireFields<QuerypairHourDataArgs, 'id' | 'subgraphError'>
  >
  pairHourDatas?: Resolver<
    Array<ResolversTypes['PairHourData']>,
    ParentType,
    ContextType,
    RequireFields<QuerypairHourDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  pairDayData?: Resolver<
    Maybe<ResolversTypes['PairDayData']>,
    ParentType,
    ContextType,
    RequireFields<QuerypairDayDataArgs, 'id' | 'subgraphError'>
  >
  pairDayDatas?: Resolver<
    Array<ResolversTypes['PairDayData']>,
    ParentType,
    ContextType,
    RequireFields<QuerypairDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  tokenDayData?: Resolver<
    Maybe<ResolversTypes['TokenDayData']>,
    ParentType,
    ContextType,
    RequireFields<QuerytokenDayDataArgs, 'id' | 'subgraphError'>
  >
  tokenDayDatas?: Resolver<
    Array<ResolversTypes['TokenDayData']>,
    ParentType,
    ContextType,
    RequireFields<QuerytokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>
  comptroller?: Resolver<
    Maybe<ResolversTypes['Comptroller']>,
    ParentType,
    ContextType,
    RequireFields<QuerycomptrollerArgs, 'id' | 'subgraphError'>
  >
  comptrollers?: Resolver<
    Array<ResolversTypes['Comptroller']>,
    ParentType,
    ContextType,
    RequireFields<QuerycomptrollersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  market?: Resolver<
    Maybe<ResolversTypes['Market']>,
    ParentType,
    ContextType,
    RequireFields<QuerymarketArgs, 'id' | 'subgraphError'>
  >
  markets?: Resolver<
    Array<ResolversTypes['Market']>,
    ParentType,
    ContextType,
    RequireFields<QuerymarketsArgs, 'skip' | 'first' | 'subgraphError'>
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
  accountCToken?: Resolver<
    Maybe<ResolversTypes['AccountCToken']>,
    ParentType,
    ContextType,
    RequireFields<QueryaccountCTokenArgs, 'id' | 'subgraphError'>
  >
  accountCTokens?: Resolver<
    Array<ResolversTypes['AccountCToken']>,
    ParentType,
    ContextType,
    RequireFields<QueryaccountCTokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  accountCTokenTransaction?: Resolver<
    Maybe<ResolversTypes['AccountCTokenTransaction']>,
    ParentType,
    ContextType,
    RequireFields<QueryaccountCTokenTransactionArgs, 'id' | 'subgraphError'>
  >
  accountCTokenTransactions?: Resolver<
    Array<ResolversTypes['AccountCTokenTransaction']>,
    ParentType,
    ContextType,
    RequireFields<QueryaccountCTokenTransactionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  transferEvent?: Resolver<
    Maybe<ResolversTypes['TransferEvent']>,
    ParentType,
    ContextType,
    RequireFields<QuerytransferEventArgs, 'id' | 'subgraphError'>
  >
  transferEvents?: Resolver<
    Array<ResolversTypes['TransferEvent']>,
    ParentType,
    ContextType,
    RequireFields<QuerytransferEventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  mintEvent?: Resolver<
    Maybe<ResolversTypes['MintEvent']>,
    ParentType,
    ContextType,
    RequireFields<QuerymintEventArgs, 'id' | 'subgraphError'>
  >
  mintEvents?: Resolver<
    Array<ResolversTypes['MintEvent']>,
    ParentType,
    ContextType,
    RequireFields<QuerymintEventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  redeemEvent?: Resolver<
    Maybe<ResolversTypes['RedeemEvent']>,
    ParentType,
    ContextType,
    RequireFields<QueryredeemEventArgs, 'id' | 'subgraphError'>
  >
  redeemEvents?: Resolver<
    Array<ResolversTypes['RedeemEvent']>,
    ParentType,
    ContextType,
    RequireFields<QueryredeemEventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidationEvent?: Resolver<
    Maybe<ResolversTypes['LiquidationEvent']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidationEventArgs, 'id' | 'subgraphError'>
  >
  liquidationEvents?: Resolver<
    Array<ResolversTypes['LiquidationEvent']>,
    ParentType,
    ContextType,
    RequireFields<QueryliquidationEventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  borrowEvent?: Resolver<
    Maybe<ResolversTypes['BorrowEvent']>,
    ParentType,
    ContextType,
    RequireFields<QueryborrowEventArgs, 'id' | 'subgraphError'>
  >
  borrowEvents?: Resolver<
    Array<ResolversTypes['BorrowEvent']>,
    ParentType,
    ContextType,
    RequireFields<QueryborrowEventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  repayEvent?: Resolver<
    Maybe<ResolversTypes['RepayEvent']>,
    ParentType,
    ContextType,
    RequireFields<QueryrepayEventArgs, 'id' | 'subgraphError'>
  >
  repayEvents?: Resolver<
    Array<ResolversTypes['RepayEvent']>,
    ParentType,
    ContextType,
    RequireFields<QueryrepayEventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  ctokenTransfer?: Resolver<
    Maybe<ResolversTypes['CTokenTransfer']>,
    ParentType,
    ContextType,
    RequireFields<QueryctokenTransferArgs, 'id' | 'subgraphError'>
  >
  ctokenTransfers?: Resolver<
    Array<ResolversTypes['CTokenTransfer']>,
    ParentType,
    ContextType,
    RequireFields<QueryctokenTransfersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  underlyingTransfer?: Resolver<
    Maybe<ResolversTypes['UnderlyingTransfer']>,
    ParentType,
    ContextType,
    RequireFields<QueryunderlyingTransferArgs, 'id' | 'subgraphError'>
  >
  underlyingTransfers?: Resolver<
    Array<ResolversTypes['UnderlyingTransfer']>,
    ParentType,
    ContextType,
    RequireFields<QueryunderlyingTransfersArgs, 'skip' | 'first' | 'subgraphError'>
  >
}>

export type SubscriptionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = ResolversObject<{
  uniswapFactory?: SubscriptionResolver<
    Maybe<ResolversTypes['UniswapFactory']>,
    'uniswapFactory',
    ParentType,
    ContextType,
    RequireFields<SubscriptionuniswapFactoryArgs, 'id' | 'subgraphError'>
  >
  uniswapFactories?: SubscriptionResolver<
    Array<ResolversTypes['UniswapFactory']>,
    'uniswapFactories',
    ParentType,
    ContextType,
    RequireFields<SubscriptionuniswapFactoriesArgs, 'skip' | 'first' | 'subgraphError'>
  >
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
  pair?: SubscriptionResolver<
    Maybe<ResolversTypes['Pair']>,
    'pair',
    ParentType,
    ContextType,
    RequireFields<SubscriptionpairArgs, 'id' | 'subgraphError'>
  >
  pairs?: SubscriptionResolver<
    Array<ResolversTypes['Pair']>,
    'pairs',
    ParentType,
    ContextType,
    RequireFields<SubscriptionpairsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  user?: SubscriptionResolver<
    Maybe<ResolversTypes['User']>,
    'user',
    ParentType,
    ContextType,
    RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>
  >
  users?: SubscriptionResolver<
    Array<ResolversTypes['User']>,
    'users',
    ParentType,
    ContextType,
    RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidityPosition?: SubscriptionResolver<
    Maybe<ResolversTypes['LiquidityPosition']>,
    'liquidityPosition',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidityPositionArgs, 'id' | 'subgraphError'>
  >
  liquidityPositions?: SubscriptionResolver<
    Array<ResolversTypes['LiquidityPosition']>,
    'liquidityPositions',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidityPositionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidityPositionSnapshot?: SubscriptionResolver<
    Maybe<ResolversTypes['LiquidityPositionSnapshot']>,
    'liquidityPositionSnapshot',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidityPositionSnapshotArgs, 'id' | 'subgraphError'>
  >
  liquidityPositionSnapshots?: SubscriptionResolver<
    Array<ResolversTypes['LiquidityPositionSnapshot']>,
    'liquidityPositionSnapshots',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidityPositionSnapshotsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  transaction?: SubscriptionResolver<
    Maybe<ResolversTypes['Transaction']>,
    'transaction',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontransactionArgs, 'id' | 'subgraphError'>
  >
  transactions?: SubscriptionResolver<
    Array<ResolversTypes['Transaction']>,
    'transactions',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontransactionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  mint?: SubscriptionResolver<
    Maybe<ResolversTypes['Mint']>,
    'mint',
    ParentType,
    ContextType,
    RequireFields<SubscriptionmintArgs, 'id' | 'subgraphError'>
  >
  mints?: SubscriptionResolver<
    Array<ResolversTypes['Mint']>,
    'mints',
    ParentType,
    ContextType,
    RequireFields<SubscriptionmintsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  burn?: SubscriptionResolver<
    Maybe<ResolversTypes['Burn']>,
    'burn',
    ParentType,
    ContextType,
    RequireFields<SubscriptionburnArgs, 'id' | 'subgraphError'>
  >
  burns?: SubscriptionResolver<
    Array<ResolversTypes['Burn']>,
    'burns',
    ParentType,
    ContextType,
    RequireFields<SubscriptionburnsArgs, 'skip' | 'first' | 'subgraphError'>
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
  bundle?: SubscriptionResolver<
    Maybe<ResolversTypes['Bundle']>,
    'bundle',
    ParentType,
    ContextType,
    RequireFields<SubscriptionbundleArgs, 'id' | 'subgraphError'>
  >
  bundles?: SubscriptionResolver<
    Array<ResolversTypes['Bundle']>,
    'bundles',
    ParentType,
    ContextType,
    RequireFields<SubscriptionbundlesArgs, 'skip' | 'first' | 'subgraphError'>
  >
  uniswapDayData?: SubscriptionResolver<
    Maybe<ResolversTypes['UniswapDayData']>,
    'uniswapDayData',
    ParentType,
    ContextType,
    RequireFields<SubscriptionuniswapDayDataArgs, 'id' | 'subgraphError'>
  >
  uniswapDayDatas?: SubscriptionResolver<
    Array<ResolversTypes['UniswapDayData']>,
    'uniswapDayDatas',
    ParentType,
    ContextType,
    RequireFields<SubscriptionuniswapDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  pairHourData?: SubscriptionResolver<
    Maybe<ResolversTypes['PairHourData']>,
    'pairHourData',
    ParentType,
    ContextType,
    RequireFields<SubscriptionpairHourDataArgs, 'id' | 'subgraphError'>
  >
  pairHourDatas?: SubscriptionResolver<
    Array<ResolversTypes['PairHourData']>,
    'pairHourDatas',
    ParentType,
    ContextType,
    RequireFields<SubscriptionpairHourDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  pairDayData?: SubscriptionResolver<
    Maybe<ResolversTypes['PairDayData']>,
    'pairDayData',
    ParentType,
    ContextType,
    RequireFields<SubscriptionpairDayDataArgs, 'id' | 'subgraphError'>
  >
  pairDayDatas?: SubscriptionResolver<
    Array<ResolversTypes['PairDayData']>,
    'pairDayDatas',
    ParentType,
    ContextType,
    RequireFields<SubscriptionpairDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  tokenDayData?: SubscriptionResolver<
    Maybe<ResolversTypes['TokenDayData']>,
    'tokenDayData',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontokenDayDataArgs, 'id' | 'subgraphError'>
  >
  tokenDayDatas?: SubscriptionResolver<
    Array<ResolversTypes['TokenDayData']>,
    'tokenDayDatas',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontokenDayDatasArgs, 'skip' | 'first' | 'subgraphError'>
  >
  _meta?: SubscriptionResolver<
    Maybe<ResolversTypes['_Meta_']>,
    '_meta',
    ParentType,
    ContextType,
    Partial<Subscription_metaArgs>
  >
  comptroller?: SubscriptionResolver<
    Maybe<ResolversTypes['Comptroller']>,
    'comptroller',
    ParentType,
    ContextType,
    RequireFields<SubscriptioncomptrollerArgs, 'id' | 'subgraphError'>
  >
  comptrollers?: SubscriptionResolver<
    Array<ResolversTypes['Comptroller']>,
    'comptrollers',
    ParentType,
    ContextType,
    RequireFields<SubscriptioncomptrollersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  market?: SubscriptionResolver<
    Maybe<ResolversTypes['Market']>,
    'market',
    ParentType,
    ContextType,
    RequireFields<SubscriptionmarketArgs, 'id' | 'subgraphError'>
  >
  markets?: SubscriptionResolver<
    Array<ResolversTypes['Market']>,
    'markets',
    ParentType,
    ContextType,
    RequireFields<SubscriptionmarketsArgs, 'skip' | 'first' | 'subgraphError'>
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
  accountCToken?: SubscriptionResolver<
    Maybe<ResolversTypes['AccountCToken']>,
    'accountCToken',
    ParentType,
    ContextType,
    RequireFields<SubscriptionaccountCTokenArgs, 'id' | 'subgraphError'>
  >
  accountCTokens?: SubscriptionResolver<
    Array<ResolversTypes['AccountCToken']>,
    'accountCTokens',
    ParentType,
    ContextType,
    RequireFields<SubscriptionaccountCTokensArgs, 'skip' | 'first' | 'subgraphError'>
  >
  accountCTokenTransaction?: SubscriptionResolver<
    Maybe<ResolversTypes['AccountCTokenTransaction']>,
    'accountCTokenTransaction',
    ParentType,
    ContextType,
    RequireFields<SubscriptionaccountCTokenTransactionArgs, 'id' | 'subgraphError'>
  >
  accountCTokenTransactions?: SubscriptionResolver<
    Array<ResolversTypes['AccountCTokenTransaction']>,
    'accountCTokenTransactions',
    ParentType,
    ContextType,
    RequireFields<SubscriptionaccountCTokenTransactionsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  transferEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['TransferEvent']>,
    'transferEvent',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontransferEventArgs, 'id' | 'subgraphError'>
  >
  transferEvents?: SubscriptionResolver<
    Array<ResolversTypes['TransferEvent']>,
    'transferEvents',
    ParentType,
    ContextType,
    RequireFields<SubscriptiontransferEventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  mintEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['MintEvent']>,
    'mintEvent',
    ParentType,
    ContextType,
    RequireFields<SubscriptionmintEventArgs, 'id' | 'subgraphError'>
  >
  mintEvents?: SubscriptionResolver<
    Array<ResolversTypes['MintEvent']>,
    'mintEvents',
    ParentType,
    ContextType,
    RequireFields<SubscriptionmintEventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  redeemEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['RedeemEvent']>,
    'redeemEvent',
    ParentType,
    ContextType,
    RequireFields<SubscriptionredeemEventArgs, 'id' | 'subgraphError'>
  >
  redeemEvents?: SubscriptionResolver<
    Array<ResolversTypes['RedeemEvent']>,
    'redeemEvents',
    ParentType,
    ContextType,
    RequireFields<SubscriptionredeemEventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  liquidationEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['LiquidationEvent']>,
    'liquidationEvent',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidationEventArgs, 'id' | 'subgraphError'>
  >
  liquidationEvents?: SubscriptionResolver<
    Array<ResolversTypes['LiquidationEvent']>,
    'liquidationEvents',
    ParentType,
    ContextType,
    RequireFields<SubscriptionliquidationEventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  borrowEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['BorrowEvent']>,
    'borrowEvent',
    ParentType,
    ContextType,
    RequireFields<SubscriptionborrowEventArgs, 'id' | 'subgraphError'>
  >
  borrowEvents?: SubscriptionResolver<
    Array<ResolversTypes['BorrowEvent']>,
    'borrowEvents',
    ParentType,
    ContextType,
    RequireFields<SubscriptionborrowEventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  repayEvent?: SubscriptionResolver<
    Maybe<ResolversTypes['RepayEvent']>,
    'repayEvent',
    ParentType,
    ContextType,
    RequireFields<SubscriptionrepayEventArgs, 'id' | 'subgraphError'>
  >
  repayEvents?: SubscriptionResolver<
    Array<ResolversTypes['RepayEvent']>,
    'repayEvents',
    ParentType,
    ContextType,
    RequireFields<SubscriptionrepayEventsArgs, 'skip' | 'first' | 'subgraphError'>
  >
  ctokenTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes['CTokenTransfer']>,
    'ctokenTransfer',
    ParentType,
    ContextType,
    RequireFields<SubscriptionctokenTransferArgs, 'id' | 'subgraphError'>
  >
  ctokenTransfers?: SubscriptionResolver<
    Array<ResolversTypes['CTokenTransfer']>,
    'ctokenTransfers',
    ParentType,
    ContextType,
    RequireFields<SubscriptionctokenTransfersArgs, 'skip' | 'first' | 'subgraphError'>
  >
  underlyingTransfer?: SubscriptionResolver<
    Maybe<ResolversTypes['UnderlyingTransfer']>,
    'underlyingTransfer',
    ParentType,
    ContextType,
    RequireFields<SubscriptionunderlyingTransferArgs, 'id' | 'subgraphError'>
  >
  underlyingTransfers?: SubscriptionResolver<
    Array<ResolversTypes['UnderlyingTransfer']>,
    'underlyingTransfers',
    ParentType,
    ContextType,
    RequireFields<SubscriptionunderlyingTransfersArgs, 'skip' | 'first' | 'subgraphError'>
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

export type ComptrollerResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Comptroller'] = ResolversParentTypes['Comptroller'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  priceOracle?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>
  closeFactor?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  liquidationIncentive?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  maxAssets?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type MarketResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Market'] = ResolversParentTypes['Market'],
> = ResolversObject<{
  borrowRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  cash?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  collateralFactor?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  exchangeRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  interestRateModelAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  reserves?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  supplyRate?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  totalBorrows?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalSupply?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  underlyingAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  underlyingName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  underlyingPrice?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  underlyingSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  accrualBlockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  blockTimestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  borrowIndex?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  reserveFactor?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  underlyingPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  underlyingDecimals?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type AccountResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  tokens?: Resolver<
    Array<ResolversTypes['AccountCToken']>,
    ParentType,
    ContextType,
    RequireFields<AccounttokensArgs, 'skip' | 'first'>
  >
  countLiquidated?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  countLiquidator?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  hasBorrowed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  health?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  totalBorrowValueInEth?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalCollateralValueInEth?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type AccountCTokenResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['AccountCToken'] = ResolversParentTypes['AccountCToken'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  market?: Resolver<ResolversTypes['Market'], ParentType, ContextType>
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>
  transactions?: Resolver<
    Array<ResolversTypes['AccountCTokenTransaction']>,
    ParentType,
    ContextType,
    RequireFields<AccountCTokentransactionsArgs, 'skip' | 'first'>
  >
  accrualBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  enteredMarket?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  cTokenBalance?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalUnderlyingSupplied?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalUnderlyingRedeemed?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  accountBorrowIndex?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalUnderlyingBorrowed?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  totalUnderlyingRepaid?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  storedBorrowBalance?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  supplyBalanceUnderlying?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  lifetimeSupplyInterestAccrued?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  borrowBalanceUnderlying?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  lifetimeBorrowInterestAccrued?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type AccountCTokenTransactionResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['AccountCTokenTransaction'] = ResolversParentTypes['AccountCTokenTransaction'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  account?: Resolver<ResolversTypes['AccountCToken'], ParentType, ContextType>
  tx_hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  logIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type TransferEventResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['TransferEvent'] = ResolversParentTypes['TransferEvent'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  cTokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type CTokenTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['CTokenTransfer'] = ResolversParentTypes['CTokenTransfer'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'TransferEvent' | 'MintEvent' | 'RedeemEvent' | 'LiquidationEvent',
    ParentType,
    ContextType
  >
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  cTokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type MintEventResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['MintEvent'] = ResolversParentTypes['MintEvent'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  cTokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  underlyingAmount?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type RedeemEventResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['RedeemEvent'] = ResolversParentTypes['RedeemEvent'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  cTokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  underlyingAmount?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type LiquidationEventResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['LiquidationEvent'] = ResolversParentTypes['LiquidationEvent'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  to?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  cTokenSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  underlyingSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  underlyingRepayAmount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type BorrowEventResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['BorrowEvent'] = ResolversParentTypes['BorrowEvent'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  accountBorrows?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  borrower?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  underlyingSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type UnderlyingTransferResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['UnderlyingTransfer'] = ResolversParentTypes['UnderlyingTransfer'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'BorrowEvent' | 'RepayEvent', ParentType, ContextType>
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  accountBorrows?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  borrower?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  underlyingSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}>

export type RepayEventResolvers<
  ContextType = MeshContext,
  ParentType extends ResolversParentTypes['RepayEvent'] = ResolversParentTypes['RepayEvent'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  amount?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  accountBorrows?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>
  borrower?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  blockTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  underlyingSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  payer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>
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
  Comptroller?: ComptrollerResolvers<ContextType>
  Market?: MarketResolvers<ContextType>
  Account?: AccountResolvers<ContextType>
  AccountCToken?: AccountCTokenResolvers<ContextType>
  AccountCTokenTransaction?: AccountCTokenTransactionResolvers<ContextType>
  TransferEvent?: TransferEventResolvers<ContextType>
  CTokenTransfer?: CTokenTransferResolvers<ContextType>
  MintEvent?: MintEventResolvers<ContextType>
  RedeemEvent?: RedeemEventResolvers<ContextType>
  LiquidationEvent?: LiquidationEventResolvers<ContextType>
  BorrowEvent?: BorrowEventResolvers<ContextType>
  UnderlyingTransfer?: UnderlyingTransferResolvers<ContextType>
  RepayEvent?: RepayEventResolvers<ContextType>
}>

import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime'

import { InContextSdkMethod } from '@graphql-mesh/types'

export namespace Uniswapv2Types {
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

  /** The block at which the query should be executed. */
  export type Block_height = {
    /** Value containing a block hash */
    hash?: InputMaybe<Scalars['Bytes']>
    /** Value containing a block number */
    number?: InputMaybe<Scalars['Int']>
    /**
     * Value containing the minimum block number.
     * In the case of `number_gte`, the query will be executed on the latest block only if
     * the subgraph has progressed to or past the minimum block number.
     * Defaults to the latest block when omitted.
     *
     */
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
    transaction_not_contains?: InputMaybe<Scalars['String']>
    transaction_starts_with?: InputMaybe<Scalars['String']>
    transaction_not_starts_with?: InputMaybe<Scalars['String']>
    transaction_ends_with?: InputMaybe<Scalars['String']>
    transaction_not_ends_with?: InputMaybe<Scalars['String']>
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
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
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
    liquidityPosition_not_contains?: InputMaybe<Scalars['String']>
    liquidityPosition_starts_with?: InputMaybe<Scalars['String']>
    liquidityPosition_not_starts_with?: InputMaybe<Scalars['String']>
    liquidityPosition_ends_with?: InputMaybe<Scalars['String']>
    liquidityPosition_not_ends_with?: InputMaybe<Scalars['String']>
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
    user_not_contains?: InputMaybe<Scalars['String']>
    user_starts_with?: InputMaybe<Scalars['String']>
    user_not_starts_with?: InputMaybe<Scalars['String']>
    user_ends_with?: InputMaybe<Scalars['String']>
    user_not_ends_with?: InputMaybe<Scalars['String']>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
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
    user_not_contains?: InputMaybe<Scalars['String']>
    user_starts_with?: InputMaybe<Scalars['String']>
    user_not_starts_with?: InputMaybe<Scalars['String']>
    user_ends_with?: InputMaybe<Scalars['String']>
    user_not_ends_with?: InputMaybe<Scalars['String']>
    pair?: InputMaybe<Scalars['String']>
    pair_not?: InputMaybe<Scalars['String']>
    pair_gt?: InputMaybe<Scalars['String']>
    pair_lt?: InputMaybe<Scalars['String']>
    pair_gte?: InputMaybe<Scalars['String']>
    pair_lte?: InputMaybe<Scalars['String']>
    pair_in?: InputMaybe<Array<Scalars['String']>>
    pair_not_in?: InputMaybe<Array<Scalars['String']>>
    pair_contains?: InputMaybe<Scalars['String']>
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
    liquidityTokenBalance?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>
    liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    liquidityTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
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
    transaction_not_contains?: InputMaybe<Scalars['String']>
    transaction_starts_with?: InputMaybe<Scalars['String']>
    transaction_not_starts_with?: InputMaybe<Scalars['String']>
    transaction_ends_with?: InputMaybe<Scalars['String']>
    transaction_not_ends_with?: InputMaybe<Scalars['String']>
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
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
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
    token0_not_contains?: InputMaybe<Scalars['String']>
    token0_starts_with?: InputMaybe<Scalars['String']>
    token0_not_starts_with?: InputMaybe<Scalars['String']>
    token0_ends_with?: InputMaybe<Scalars['String']>
    token0_not_ends_with?: InputMaybe<Scalars['String']>
    token1?: InputMaybe<Scalars['String']>
    token1_not?: InputMaybe<Scalars['String']>
    token1_gt?: InputMaybe<Scalars['String']>
    token1_lt?: InputMaybe<Scalars['String']>
    token1_gte?: InputMaybe<Scalars['String']>
    token1_lte?: InputMaybe<Scalars['String']>
    token1_in?: InputMaybe<Array<Scalars['String']>>
    token1_not_in?: InputMaybe<Array<Scalars['String']>>
    token1_contains?: InputMaybe<Scalars['String']>
    token1_not_contains?: InputMaybe<Scalars['String']>
    token1_starts_with?: InputMaybe<Scalars['String']>
    token1_not_starts_with?: InputMaybe<Scalars['String']>
    token1_ends_with?: InputMaybe<Scalars['String']>
    token1_not_ends_with?: InputMaybe<Scalars['String']>
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
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
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
    token0_not_contains?: InputMaybe<Scalars['String']>
    token0_starts_with?: InputMaybe<Scalars['String']>
    token0_not_starts_with?: InputMaybe<Scalars['String']>
    token0_ends_with?: InputMaybe<Scalars['String']>
    token0_not_ends_with?: InputMaybe<Scalars['String']>
    token1?: InputMaybe<Scalars['String']>
    token1_not?: InputMaybe<Scalars['String']>
    token1_gt?: InputMaybe<Scalars['String']>
    token1_lt?: InputMaybe<Scalars['String']>
    token1_gte?: InputMaybe<Scalars['String']>
    token1_lte?: InputMaybe<Scalars['String']>
    token1_in?: InputMaybe<Array<Scalars['String']>>
    token1_not_in?: InputMaybe<Array<Scalars['String']>>
    token1_contains?: InputMaybe<Scalars['String']>
    token1_not_contains?: InputMaybe<Scalars['String']>
    token1_starts_with?: InputMaybe<Scalars['String']>
    token1_not_starts_with?: InputMaybe<Scalars['String']>
    token1_ends_with?: InputMaybe<Scalars['String']>
    token1_not_ends_with?: InputMaybe<Scalars['String']>
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
    uniswapFactory?: Maybe<UniswapFactory>
    uniswapFactories: Array<UniswapFactory>
    token?: Maybe<Token>
    tokens: Array<Token>
    pair?: Maybe<Pair>
    pairs: Array<Pair>
    user?: Maybe<User>
    users: Array<User>
    liquidityPosition?: Maybe<LiquidityPosition>
    liquidityPositions: Array<LiquidityPosition>
    liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>
    liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>
    transaction?: Maybe<Transaction>
    transactions: Array<Transaction>
    mint?: Maybe<Mint>
    mints: Array<Mint>
    burn?: Maybe<Burn>
    burns: Array<Burn>
    swap?: Maybe<Swap>
    swaps: Array<Swap>
    bundle?: Maybe<Bundle>
    bundles: Array<Bundle>
    uniswapDayData?: Maybe<UniswapDayData>
    uniswapDayDatas: Array<UniswapDayData>
    pairHourData?: Maybe<PairHourData>
    pairHourDatas: Array<PairHourData>
    pairDayData?: Maybe<PairDayData>
    pairDayDatas: Array<PairDayData>
    tokenDayData?: Maybe<TokenDayData>
    tokenDayDatas: Array<TokenDayData>
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>
  }

  export type QueryuniswapFactoryArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryuniswapFactoriesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UniswapFactory_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UniswapFactory_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
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

  export type QuerypairArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerypairsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Pair_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Pair_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryuserArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryusersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<User_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<User_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidityPositionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidityPositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPosition_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPosition_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidityPositionSnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidityPositionSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPositionSnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerytransactionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerytransactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Transaction_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Transaction_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerymintArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerymintsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Mint_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Mint_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryburnArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryburnsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Burn_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Burn_filter>
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

  export type QuerybundleArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerybundlesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Bundle_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Bundle_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryuniswapDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryuniswapDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UniswapDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UniswapDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerypairHourDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerypairHourDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairHourData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairHourData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerypairDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerypairDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerytokenDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerytokenDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TokenDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TokenDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type Query_metaArgs = {
    block?: InputMaybe<Block_height>
  }

  export type Subscription = {
    uniswapFactory?: Maybe<UniswapFactory>
    uniswapFactories: Array<UniswapFactory>
    token?: Maybe<Token>
    tokens: Array<Token>
    pair?: Maybe<Pair>
    pairs: Array<Pair>
    user?: Maybe<User>
    users: Array<User>
    liquidityPosition?: Maybe<LiquidityPosition>
    liquidityPositions: Array<LiquidityPosition>
    liquidityPositionSnapshot?: Maybe<LiquidityPositionSnapshot>
    liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>
    transaction?: Maybe<Transaction>
    transactions: Array<Transaction>
    mint?: Maybe<Mint>
    mints: Array<Mint>
    burn?: Maybe<Burn>
    burns: Array<Burn>
    swap?: Maybe<Swap>
    swaps: Array<Swap>
    bundle?: Maybe<Bundle>
    bundles: Array<Bundle>
    uniswapDayData?: Maybe<UniswapDayData>
    uniswapDayDatas: Array<UniswapDayData>
    pairHourData?: Maybe<PairHourData>
    pairHourDatas: Array<PairHourData>
    pairDayData?: Maybe<PairDayData>
    pairDayDatas: Array<PairDayData>
    tokenDayData?: Maybe<TokenDayData>
    tokenDayDatas: Array<TokenDayData>
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>
  }

  export type SubscriptionuniswapFactoryArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionuniswapFactoriesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UniswapFactory_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UniswapFactory_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
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

  export type SubscriptionpairArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionpairsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Pair_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Pair_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionuserArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionusersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<User_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<User_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidityPositionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidityPositionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPosition_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPosition_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidityPositionSnapshotArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidityPositionSnapshotsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidityPositionSnapshot_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidityPositionSnapshot_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiontransactionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiontransactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Transaction_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Transaction_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionmintArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionmintsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Mint_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Mint_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionburnArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionburnsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Burn_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Burn_filter>
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

  export type SubscriptionbundleArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionbundlesArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Bundle_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Bundle_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionuniswapDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionuniswapDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UniswapDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UniswapDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionpairHourDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionpairHourDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairHourData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairHourData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionpairDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionpairDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<PairDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<PairDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiontokenDayDataArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiontokenDayDatasArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TokenDayData_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TokenDayData_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type Subscription_metaArgs = {
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
    transaction_not_contains?: InputMaybe<Scalars['String']>
    transaction_starts_with?: InputMaybe<Scalars['String']>
    transaction_not_starts_with?: InputMaybe<Scalars['String']>
    transaction_ends_with?: InputMaybe<Scalars['String']>
    transaction_not_ends_with?: InputMaybe<Scalars['String']>
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
    pair_not_contains?: InputMaybe<Scalars['String']>
    pair_starts_with?: InputMaybe<Scalars['String']>
    pair_not_starts_with?: InputMaybe<Scalars['String']>
    pair_ends_with?: InputMaybe<Scalars['String']>
    pair_not_ends_with?: InputMaybe<Scalars['String']>
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
    token_not_contains?: InputMaybe<Scalars['String']>
    token_starts_with?: InputMaybe<Scalars['String']>
    token_not_starts_with?: InputMaybe<Scalars['String']>
    token_ends_with?: InputMaybe<Scalars['String']>
    token_not_ends_with?: InputMaybe<Scalars['String']>
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
    mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>
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
    symbol_not_contains?: InputMaybe<Scalars['String']>
    symbol_starts_with?: InputMaybe<Scalars['String']>
    symbol_not_starts_with?: InputMaybe<Scalars['String']>
    symbol_ends_with?: InputMaybe<Scalars['String']>
    symbol_not_ends_with?: InputMaybe<Scalars['String']>
    name?: InputMaybe<Scalars['String']>
    name_not?: InputMaybe<Scalars['String']>
    name_gt?: InputMaybe<Scalars['String']>
    name_lt?: InputMaybe<Scalars['String']>
    name_gte?: InputMaybe<Scalars['String']>
    name_lte?: InputMaybe<Scalars['String']>
    name_in?: InputMaybe<Array<Scalars['String']>>
    name_not_in?: InputMaybe<Array<Scalars['String']>>
    name_contains?: InputMaybe<Scalars['String']>
    name_not_contains?: InputMaybe<Scalars['String']>
    name_starts_with?: InputMaybe<Scalars['String']>
    name_not_starts_with?: InputMaybe<Scalars['String']>
    name_ends_with?: InputMaybe<Scalars['String']>
    name_not_ends_with?: InputMaybe<Scalars['String']>
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
    mostLiquidPairs_not_contains?: InputMaybe<Array<Scalars['String']>>
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
    mints_not_contains?: InputMaybe<Array<Scalars['String']>>
    burns?: InputMaybe<Array<Scalars['String']>>
    burns_not?: InputMaybe<Array<Scalars['String']>>
    burns_contains?: InputMaybe<Array<Scalars['String']>>
    burns_not_contains?: InputMaybe<Array<Scalars['String']>>
    swaps?: InputMaybe<Array<Scalars['String']>>
    swaps_not?: InputMaybe<Array<Scalars['String']>>
    swaps_contains?: InputMaybe<Array<Scalars['String']>>
    swaps_not_contains?: InputMaybe<Array<Scalars['String']>>
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
    mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
    txCount?: InputMaybe<Scalars['BigInt']>
    txCount_not?: InputMaybe<Scalars['BigInt']>
    txCount_gt?: InputMaybe<Scalars['BigInt']>
    txCount_lt?: InputMaybe<Scalars['BigInt']>
    txCount_gte?: InputMaybe<Scalars['BigInt']>
    txCount_lte?: InputMaybe<Scalars['BigInt']>
    txCount_in?: InputMaybe<Array<Scalars['BigInt']>>
    txCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>
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
    mostLiquidTokens_not_contains?: InputMaybe<Array<Scalars['String']>>
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
export type QueryUniswapv2Sdk = {
  /** null **/
  uniswapFactory: InContextSdkMethod<
    Uniswapv2Types.Query['uniswapFactory'],
    Uniswapv2Types.QueryuniswapFactoryArgs,
    MeshContext
  >
  /** null **/
  uniswapFactories: InContextSdkMethod<
    Uniswapv2Types.Query['uniswapFactories'],
    Uniswapv2Types.QueryuniswapFactoriesArgs,
    MeshContext
  >
  /** null **/
  token: InContextSdkMethod<Uniswapv2Types.Query['token'], Uniswapv2Types.QuerytokenArgs, MeshContext>
  /** null **/
  tokens: InContextSdkMethod<Uniswapv2Types.Query['tokens'], Uniswapv2Types.QuerytokensArgs, MeshContext>
  /** null **/
  pair: InContextSdkMethod<Uniswapv2Types.Query['pair'], Uniswapv2Types.QuerypairArgs, MeshContext>
  /** null **/
  pairs: InContextSdkMethod<Uniswapv2Types.Query['pairs'], Uniswapv2Types.QuerypairsArgs, MeshContext>
  /** null **/
  user: InContextSdkMethod<Uniswapv2Types.Query['user'], Uniswapv2Types.QueryuserArgs, MeshContext>
  /** null **/
  users: InContextSdkMethod<Uniswapv2Types.Query['users'], Uniswapv2Types.QueryusersArgs, MeshContext>
  /** null **/
  liquidityPosition: InContextSdkMethod<
    Uniswapv2Types.Query['liquidityPosition'],
    Uniswapv2Types.QueryliquidityPositionArgs,
    MeshContext
  >
  /** null **/
  liquidityPositions: InContextSdkMethod<
    Uniswapv2Types.Query['liquidityPositions'],
    Uniswapv2Types.QueryliquidityPositionsArgs,
    MeshContext
  >
  /** null **/
  liquidityPositionSnapshot: InContextSdkMethod<
    Uniswapv2Types.Query['liquidityPositionSnapshot'],
    Uniswapv2Types.QueryliquidityPositionSnapshotArgs,
    MeshContext
  >
  /** null **/
  liquidityPositionSnapshots: InContextSdkMethod<
    Uniswapv2Types.Query['liquidityPositionSnapshots'],
    Uniswapv2Types.QueryliquidityPositionSnapshotsArgs,
    MeshContext
  >
  /** null **/
  transaction: InContextSdkMethod<Uniswapv2Types.Query['transaction'], Uniswapv2Types.QuerytransactionArgs, MeshContext>
  /** null **/
  transactions: InContextSdkMethod<
    Uniswapv2Types.Query['transactions'],
    Uniswapv2Types.QuerytransactionsArgs,
    MeshContext
  >
  /** null **/
  mint: InContextSdkMethod<Uniswapv2Types.Query['mint'], Uniswapv2Types.QuerymintArgs, MeshContext>
  /** null **/
  mints: InContextSdkMethod<Uniswapv2Types.Query['mints'], Uniswapv2Types.QuerymintsArgs, MeshContext>
  /** null **/
  burn: InContextSdkMethod<Uniswapv2Types.Query['burn'], Uniswapv2Types.QueryburnArgs, MeshContext>
  /** null **/
  burns: InContextSdkMethod<Uniswapv2Types.Query['burns'], Uniswapv2Types.QueryburnsArgs, MeshContext>
  /** null **/
  swap: InContextSdkMethod<Uniswapv2Types.Query['swap'], Uniswapv2Types.QueryswapArgs, MeshContext>
  /** null **/
  swaps: InContextSdkMethod<Uniswapv2Types.Query['swaps'], Uniswapv2Types.QueryswapsArgs, MeshContext>
  /** null **/
  bundle: InContextSdkMethod<Uniswapv2Types.Query['bundle'], Uniswapv2Types.QuerybundleArgs, MeshContext>
  /** null **/
  bundles: InContextSdkMethod<Uniswapv2Types.Query['bundles'], Uniswapv2Types.QuerybundlesArgs, MeshContext>
  /** null **/
  uniswapDayData: InContextSdkMethod<
    Uniswapv2Types.Query['uniswapDayData'],
    Uniswapv2Types.QueryuniswapDayDataArgs,
    MeshContext
  >
  /** null **/
  uniswapDayDatas: InContextSdkMethod<
    Uniswapv2Types.Query['uniswapDayDatas'],
    Uniswapv2Types.QueryuniswapDayDatasArgs,
    MeshContext
  >
  /** null **/
  pairHourData: InContextSdkMethod<
    Uniswapv2Types.Query['pairHourData'],
    Uniswapv2Types.QuerypairHourDataArgs,
    MeshContext
  >
  /** null **/
  pairHourDatas: InContextSdkMethod<
    Uniswapv2Types.Query['pairHourDatas'],
    Uniswapv2Types.QuerypairHourDatasArgs,
    MeshContext
  >
  /** null **/
  pairDayData: InContextSdkMethod<Uniswapv2Types.Query['pairDayData'], Uniswapv2Types.QuerypairDayDataArgs, MeshContext>
  /** null **/
  pairDayDatas: InContextSdkMethod<
    Uniswapv2Types.Query['pairDayDatas'],
    Uniswapv2Types.QuerypairDayDatasArgs,
    MeshContext
  >
  /** null **/
  tokenDayData: InContextSdkMethod<
    Uniswapv2Types.Query['tokenDayData'],
    Uniswapv2Types.QuerytokenDayDataArgs,
    MeshContext
  >
  /** null **/
  tokenDayDatas: InContextSdkMethod<
    Uniswapv2Types.Query['tokenDayDatas'],
    Uniswapv2Types.QuerytokenDayDatasArgs,
    MeshContext
  >
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Uniswapv2Types.Query['_meta'], Uniswapv2Types.Query_metaArgs, MeshContext>
}

export type MutationUniswapv2Sdk = {}

export type SubscriptionUniswapv2Sdk = {
  /** null **/
  uniswapFactory: InContextSdkMethod<
    Uniswapv2Types.Subscription['uniswapFactory'],
    Uniswapv2Types.SubscriptionuniswapFactoryArgs,
    MeshContext
  >
  /** null **/
  uniswapFactories: InContextSdkMethod<
    Uniswapv2Types.Subscription['uniswapFactories'],
    Uniswapv2Types.SubscriptionuniswapFactoriesArgs,
    MeshContext
  >
  /** null **/
  token: InContextSdkMethod<Uniswapv2Types.Subscription['token'], Uniswapv2Types.SubscriptiontokenArgs, MeshContext>
  /** null **/
  tokens: InContextSdkMethod<Uniswapv2Types.Subscription['tokens'], Uniswapv2Types.SubscriptiontokensArgs, MeshContext>
  /** null **/
  pair: InContextSdkMethod<Uniswapv2Types.Subscription['pair'], Uniswapv2Types.SubscriptionpairArgs, MeshContext>
  /** null **/
  pairs: InContextSdkMethod<Uniswapv2Types.Subscription['pairs'], Uniswapv2Types.SubscriptionpairsArgs, MeshContext>
  /** null **/
  user: InContextSdkMethod<Uniswapv2Types.Subscription['user'], Uniswapv2Types.SubscriptionuserArgs, MeshContext>
  /** null **/
  users: InContextSdkMethod<Uniswapv2Types.Subscription['users'], Uniswapv2Types.SubscriptionusersArgs, MeshContext>
  /** null **/
  liquidityPosition: InContextSdkMethod<
    Uniswapv2Types.Subscription['liquidityPosition'],
    Uniswapv2Types.SubscriptionliquidityPositionArgs,
    MeshContext
  >
  /** null **/
  liquidityPositions: InContextSdkMethod<
    Uniswapv2Types.Subscription['liquidityPositions'],
    Uniswapv2Types.SubscriptionliquidityPositionsArgs,
    MeshContext
  >
  /** null **/
  liquidityPositionSnapshot: InContextSdkMethod<
    Uniswapv2Types.Subscription['liquidityPositionSnapshot'],
    Uniswapv2Types.SubscriptionliquidityPositionSnapshotArgs,
    MeshContext
  >
  /** null **/
  liquidityPositionSnapshots: InContextSdkMethod<
    Uniswapv2Types.Subscription['liquidityPositionSnapshots'],
    Uniswapv2Types.SubscriptionliquidityPositionSnapshotsArgs,
    MeshContext
  >
  /** null **/
  transaction: InContextSdkMethod<
    Uniswapv2Types.Subscription['transaction'],
    Uniswapv2Types.SubscriptiontransactionArgs,
    MeshContext
  >
  /** null **/
  transactions: InContextSdkMethod<
    Uniswapv2Types.Subscription['transactions'],
    Uniswapv2Types.SubscriptiontransactionsArgs,
    MeshContext
  >
  /** null **/
  mint: InContextSdkMethod<Uniswapv2Types.Subscription['mint'], Uniswapv2Types.SubscriptionmintArgs, MeshContext>
  /** null **/
  mints: InContextSdkMethod<Uniswapv2Types.Subscription['mints'], Uniswapv2Types.SubscriptionmintsArgs, MeshContext>
  /** null **/
  burn: InContextSdkMethod<Uniswapv2Types.Subscription['burn'], Uniswapv2Types.SubscriptionburnArgs, MeshContext>
  /** null **/
  burns: InContextSdkMethod<Uniswapv2Types.Subscription['burns'], Uniswapv2Types.SubscriptionburnsArgs, MeshContext>
  /** null **/
  swap: InContextSdkMethod<Uniswapv2Types.Subscription['swap'], Uniswapv2Types.SubscriptionswapArgs, MeshContext>
  /** null **/
  swaps: InContextSdkMethod<Uniswapv2Types.Subscription['swaps'], Uniswapv2Types.SubscriptionswapsArgs, MeshContext>
  /** null **/
  bundle: InContextSdkMethod<Uniswapv2Types.Subscription['bundle'], Uniswapv2Types.SubscriptionbundleArgs, MeshContext>
  /** null **/
  bundles: InContextSdkMethod<
    Uniswapv2Types.Subscription['bundles'],
    Uniswapv2Types.SubscriptionbundlesArgs,
    MeshContext
  >
  /** null **/
  uniswapDayData: InContextSdkMethod<
    Uniswapv2Types.Subscription['uniswapDayData'],
    Uniswapv2Types.SubscriptionuniswapDayDataArgs,
    MeshContext
  >
  /** null **/
  uniswapDayDatas: InContextSdkMethod<
    Uniswapv2Types.Subscription['uniswapDayDatas'],
    Uniswapv2Types.SubscriptionuniswapDayDatasArgs,
    MeshContext
  >
  /** null **/
  pairHourData: InContextSdkMethod<
    Uniswapv2Types.Subscription['pairHourData'],
    Uniswapv2Types.SubscriptionpairHourDataArgs,
    MeshContext
  >
  /** null **/
  pairHourDatas: InContextSdkMethod<
    Uniswapv2Types.Subscription['pairHourDatas'],
    Uniswapv2Types.SubscriptionpairHourDatasArgs,
    MeshContext
  >
  /** null **/
  pairDayData: InContextSdkMethod<
    Uniswapv2Types.Subscription['pairDayData'],
    Uniswapv2Types.SubscriptionpairDayDataArgs,
    MeshContext
  >
  /** null **/
  pairDayDatas: InContextSdkMethod<
    Uniswapv2Types.Subscription['pairDayDatas'],
    Uniswapv2Types.SubscriptionpairDayDatasArgs,
    MeshContext
  >
  /** null **/
  tokenDayData: InContextSdkMethod<
    Uniswapv2Types.Subscription['tokenDayData'],
    Uniswapv2Types.SubscriptiontokenDayDataArgs,
    MeshContext
  >
  /** null **/
  tokenDayDatas: InContextSdkMethod<
    Uniswapv2Types.Subscription['tokenDayDatas'],
    Uniswapv2Types.SubscriptiontokenDayDatasArgs,
    MeshContext
  >
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Uniswapv2Types.Subscription['_meta'], Uniswapv2Types.Subscription_metaArgs, MeshContext>
}

export namespace Compoundv2Types {
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
    Bytes: any
    BigInt: any
    BigDecimal: any
  }

  export type Query = {
    comptroller?: Maybe<Comptroller>
    comptrollers: Array<Comptroller>
    market?: Maybe<Market>
    markets: Array<Market>
    account?: Maybe<Account>
    accounts: Array<Account>
    accountCToken?: Maybe<AccountCToken>
    accountCTokens: Array<AccountCToken>
    accountCTokenTransaction?: Maybe<AccountCTokenTransaction>
    accountCTokenTransactions: Array<AccountCTokenTransaction>
    transferEvent?: Maybe<TransferEvent>
    transferEvents: Array<TransferEvent>
    mintEvent?: Maybe<MintEvent>
    mintEvents: Array<MintEvent>
    redeemEvent?: Maybe<RedeemEvent>
    redeemEvents: Array<RedeemEvent>
    liquidationEvent?: Maybe<LiquidationEvent>
    liquidationEvents: Array<LiquidationEvent>
    borrowEvent?: Maybe<BorrowEvent>
    borrowEvents: Array<BorrowEvent>
    repayEvent?: Maybe<RepayEvent>
    repayEvents: Array<RepayEvent>
    ctokenTransfer?: Maybe<CTokenTransfer>
    ctokenTransfers: Array<CTokenTransfer>
    underlyingTransfer?: Maybe<UnderlyingTransfer>
    underlyingTransfers: Array<UnderlyingTransfer>
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>
  }

  export type QuerycomptrollerArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerycomptrollersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Comptroller_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Comptroller_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerymarketArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerymarketsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Market_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Market_filter>
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

  export type QueryaccountCTokenArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryaccountCTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<AccountCToken_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<AccountCToken_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryaccountCTokenTransactionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryaccountCTokenTransactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<AccountCTokenTransaction_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<AccountCTokenTransaction_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerytransferEventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerytransferEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TransferEvent_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TransferEvent_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerymintEventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QuerymintEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<MintEvent_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<MintEvent_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryredeemEventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryredeemEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<RedeemEvent_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<RedeemEvent_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidationEventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryliquidationEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidationEvent_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidationEvent_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryborrowEventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryborrowEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<BorrowEvent_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<BorrowEvent_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryrepayEventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryrepayEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<RepayEvent_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<RepayEvent_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryctokenTransferArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryctokenTransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<CTokenTransfer_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<CTokenTransfer_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryunderlyingTransferArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type QueryunderlyingTransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UnderlyingTransfer_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UnderlyingTransfer_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type Query_metaArgs = {
    block?: InputMaybe<Block_height>
  }

  export type Block_height = {
    hash?: InputMaybe<Scalars['Bytes']>
    number?: InputMaybe<Scalars['Int']>
    number_gte?: InputMaybe<Scalars['Int']>
  }

  export type _SubgraphErrorPolicy_ =
    /** Data will be returned even if the subgraph has indexing errors */
    | 'allow'
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    | 'deny'

  /** The Comptroller type has protocol level variables stored */
  export type Comptroller = {
    /** ID is set to 1 */
    id: Scalars['ID']
    /** Address of price oracle the comptroller uses */
    priceOracle?: Maybe<Scalars['Bytes']>
    /** Factor used to determine repayAmount for liquidating */
    closeFactor?: Maybe<Scalars['BigInt']>
    /** The percent bonus liquidators get for liquidating */
    liquidationIncentive?: Maybe<Scalars['BigInt']>
    /** Max assets a single user can enter */
    maxAssets?: Maybe<Scalars['BigInt']>
  }

  export type Comptroller_orderBy = 'id' | 'priceOracle' | 'closeFactor' | 'liquidationIncentive' | 'maxAssets'

  export type OrderDirection = 'asc' | 'desc'

  export type Comptroller_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    priceOracle?: InputMaybe<Scalars['Bytes']>
    priceOracle_not?: InputMaybe<Scalars['Bytes']>
    priceOracle_in?: InputMaybe<Array<Scalars['Bytes']>>
    priceOracle_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    priceOracle_contains?: InputMaybe<Scalars['Bytes']>
    priceOracle_not_contains?: InputMaybe<Scalars['Bytes']>
    closeFactor?: InputMaybe<Scalars['BigInt']>
    closeFactor_not?: InputMaybe<Scalars['BigInt']>
    closeFactor_gt?: InputMaybe<Scalars['BigInt']>
    closeFactor_lt?: InputMaybe<Scalars['BigInt']>
    closeFactor_gte?: InputMaybe<Scalars['BigInt']>
    closeFactor_lte?: InputMaybe<Scalars['BigInt']>
    closeFactor_in?: InputMaybe<Array<Scalars['BigInt']>>
    closeFactor_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    liquidationIncentive?: InputMaybe<Scalars['BigInt']>
    liquidationIncentive_not?: InputMaybe<Scalars['BigInt']>
    liquidationIncentive_gt?: InputMaybe<Scalars['BigInt']>
    liquidationIncentive_lt?: InputMaybe<Scalars['BigInt']>
    liquidationIncentive_gte?: InputMaybe<Scalars['BigInt']>
    liquidationIncentive_lte?: InputMaybe<Scalars['BigInt']>
    liquidationIncentive_in?: InputMaybe<Array<Scalars['BigInt']>>
    liquidationIncentive_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    maxAssets?: InputMaybe<Scalars['BigInt']>
    maxAssets_not?: InputMaybe<Scalars['BigInt']>
    maxAssets_gt?: InputMaybe<Scalars['BigInt']>
    maxAssets_lt?: InputMaybe<Scalars['BigInt']>
    maxAssets_gte?: InputMaybe<Scalars['BigInt']>
    maxAssets_lte?: InputMaybe<Scalars['BigInt']>
    maxAssets_in?: InputMaybe<Array<Scalars['BigInt']>>
    maxAssets_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  }

  /** Market stores all high level variables for a cToken market */
  export type Market = {
    /** Yearly borrow rate. With 2102400 blocks per year */
    borrowRate: Scalars['BigDecimal']
    /** The cToken contract balance of ERC20 or ETH */
    cash: Scalars['BigDecimal']
    /** Collateral factor determining how much one can borrow */
    collateralFactor: Scalars['BigDecimal']
    /** Exchange rate of tokens / cTokens */
    exchangeRate: Scalars['BigDecimal']
    /** Address of the interest rate model */
    interestRateModelAddress: Scalars['Bytes']
    /** Name of the cToken */
    name: Scalars['String']
    /** Reserves stored in the contract */
    reserves: Scalars['BigDecimal']
    /** Yearly supply rate. With 2104400 blocks per year */
    supplyRate: Scalars['BigDecimal']
    /** CToken symbol */
    symbol: Scalars['String']
    /** CToken address */
    id: Scalars['ID']
    /** Borrows in the market */
    totalBorrows: Scalars['BigDecimal']
    /** CToken supply. CTokens have 8 decimals */
    totalSupply: Scalars['BigDecimal']
    /** Underlying token address */
    underlyingAddress: Scalars['Bytes']
    /** Underlying token name */
    underlyingName: Scalars['String']
    /** Underlying price of token in ETH (ex. 0.007 DAI) */
    underlyingPrice: Scalars['BigDecimal']
    /** Underlying token symbol */
    underlyingSymbol: Scalars['String']
    /** Block the market is updated to */
    accrualBlockNumber: Scalars['Int']
    /** Timestamp the market was most recently updated */
    blockTimestamp: Scalars['Int']
    /** The history of the markets borrow index return (Think S&P 500) */
    borrowIndex: Scalars['BigDecimal']
    /** The factor determining interest that goes to reserves */
    reserveFactor: Scalars['BigInt']
    /** Underlying token price in USD */
    underlyingPriceUSD: Scalars['BigDecimal']
    /** Underlying token decimal length */
    underlyingDecimals: Scalars['Int']
  }

  export type Market_orderBy =
    | 'borrowRate'
    | 'cash'
    | 'collateralFactor'
    | 'exchangeRate'
    | 'interestRateModelAddress'
    | 'name'
    | 'reserves'
    | 'supplyRate'
    | 'symbol'
    | 'id'
    | 'totalBorrows'
    | 'totalSupply'
    | 'underlyingAddress'
    | 'underlyingName'
    | 'underlyingPrice'
    | 'underlyingSymbol'
    | 'accrualBlockNumber'
    | 'blockTimestamp'
    | 'borrowIndex'
    | 'reserveFactor'
    | 'underlyingPriceUSD'
    | 'underlyingDecimals'

  export type Market_filter = {
    borrowRate?: InputMaybe<Scalars['BigDecimal']>
    borrowRate_not?: InputMaybe<Scalars['BigDecimal']>
    borrowRate_gt?: InputMaybe<Scalars['BigDecimal']>
    borrowRate_lt?: InputMaybe<Scalars['BigDecimal']>
    borrowRate_gte?: InputMaybe<Scalars['BigDecimal']>
    borrowRate_lte?: InputMaybe<Scalars['BigDecimal']>
    borrowRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    borrowRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cash?: InputMaybe<Scalars['BigDecimal']>
    cash_not?: InputMaybe<Scalars['BigDecimal']>
    cash_gt?: InputMaybe<Scalars['BigDecimal']>
    cash_lt?: InputMaybe<Scalars['BigDecimal']>
    cash_gte?: InputMaybe<Scalars['BigDecimal']>
    cash_lte?: InputMaybe<Scalars['BigDecimal']>
    cash_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cash_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    collateralFactor?: InputMaybe<Scalars['BigDecimal']>
    collateralFactor_not?: InputMaybe<Scalars['BigDecimal']>
    collateralFactor_gt?: InputMaybe<Scalars['BigDecimal']>
    collateralFactor_lt?: InputMaybe<Scalars['BigDecimal']>
    collateralFactor_gte?: InputMaybe<Scalars['BigDecimal']>
    collateralFactor_lte?: InputMaybe<Scalars['BigDecimal']>
    collateralFactor_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    collateralFactor_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    exchangeRate?: InputMaybe<Scalars['BigDecimal']>
    exchangeRate_not?: InputMaybe<Scalars['BigDecimal']>
    exchangeRate_gt?: InputMaybe<Scalars['BigDecimal']>
    exchangeRate_lt?: InputMaybe<Scalars['BigDecimal']>
    exchangeRate_gte?: InputMaybe<Scalars['BigDecimal']>
    exchangeRate_lte?: InputMaybe<Scalars['BigDecimal']>
    exchangeRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    exchangeRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    interestRateModelAddress?: InputMaybe<Scalars['Bytes']>
    interestRateModelAddress_not?: InputMaybe<Scalars['Bytes']>
    interestRateModelAddress_in?: InputMaybe<Array<Scalars['Bytes']>>
    interestRateModelAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    interestRateModelAddress_contains?: InputMaybe<Scalars['Bytes']>
    interestRateModelAddress_not_contains?: InputMaybe<Scalars['Bytes']>
    name?: InputMaybe<Scalars['String']>
    name_not?: InputMaybe<Scalars['String']>
    name_gt?: InputMaybe<Scalars['String']>
    name_lt?: InputMaybe<Scalars['String']>
    name_gte?: InputMaybe<Scalars['String']>
    name_lte?: InputMaybe<Scalars['String']>
    name_in?: InputMaybe<Array<Scalars['String']>>
    name_not_in?: InputMaybe<Array<Scalars['String']>>
    name_contains?: InputMaybe<Scalars['String']>
    name_not_contains?: InputMaybe<Scalars['String']>
    name_starts_with?: InputMaybe<Scalars['String']>
    name_not_starts_with?: InputMaybe<Scalars['String']>
    name_ends_with?: InputMaybe<Scalars['String']>
    name_not_ends_with?: InputMaybe<Scalars['String']>
    reserves?: InputMaybe<Scalars['BigDecimal']>
    reserves_not?: InputMaybe<Scalars['BigDecimal']>
    reserves_gt?: InputMaybe<Scalars['BigDecimal']>
    reserves_lt?: InputMaybe<Scalars['BigDecimal']>
    reserves_gte?: InputMaybe<Scalars['BigDecimal']>
    reserves_lte?: InputMaybe<Scalars['BigDecimal']>
    reserves_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserves_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    supplyRate?: InputMaybe<Scalars['BigDecimal']>
    supplyRate_not?: InputMaybe<Scalars['BigDecimal']>
    supplyRate_gt?: InputMaybe<Scalars['BigDecimal']>
    supplyRate_lt?: InputMaybe<Scalars['BigDecimal']>
    supplyRate_gte?: InputMaybe<Scalars['BigDecimal']>
    supplyRate_lte?: InputMaybe<Scalars['BigDecimal']>
    supplyRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    supplyRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    symbol?: InputMaybe<Scalars['String']>
    symbol_not?: InputMaybe<Scalars['String']>
    symbol_gt?: InputMaybe<Scalars['String']>
    symbol_lt?: InputMaybe<Scalars['String']>
    symbol_gte?: InputMaybe<Scalars['String']>
    symbol_lte?: InputMaybe<Scalars['String']>
    symbol_in?: InputMaybe<Array<Scalars['String']>>
    symbol_not_in?: InputMaybe<Array<Scalars['String']>>
    symbol_contains?: InputMaybe<Scalars['String']>
    symbol_not_contains?: InputMaybe<Scalars['String']>
    symbol_starts_with?: InputMaybe<Scalars['String']>
    symbol_not_starts_with?: InputMaybe<Scalars['String']>
    symbol_ends_with?: InputMaybe<Scalars['String']>
    symbol_not_ends_with?: InputMaybe<Scalars['String']>
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    totalBorrows?: InputMaybe<Scalars['BigDecimal']>
    totalBorrows_not?: InputMaybe<Scalars['BigDecimal']>
    totalBorrows_gt?: InputMaybe<Scalars['BigDecimal']>
    totalBorrows_lt?: InputMaybe<Scalars['BigDecimal']>
    totalBorrows_gte?: InputMaybe<Scalars['BigDecimal']>
    totalBorrows_lte?: InputMaybe<Scalars['BigDecimal']>
    totalBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalSupply?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_not?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_gt?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_lt?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_gte?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_lte?: InputMaybe<Scalars['BigDecimal']>
    totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    underlyingAddress?: InputMaybe<Scalars['Bytes']>
    underlyingAddress_not?: InputMaybe<Scalars['Bytes']>
    underlyingAddress_in?: InputMaybe<Array<Scalars['Bytes']>>
    underlyingAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    underlyingAddress_contains?: InputMaybe<Scalars['Bytes']>
    underlyingAddress_not_contains?: InputMaybe<Scalars['Bytes']>
    underlyingName?: InputMaybe<Scalars['String']>
    underlyingName_not?: InputMaybe<Scalars['String']>
    underlyingName_gt?: InputMaybe<Scalars['String']>
    underlyingName_lt?: InputMaybe<Scalars['String']>
    underlyingName_gte?: InputMaybe<Scalars['String']>
    underlyingName_lte?: InputMaybe<Scalars['String']>
    underlyingName_in?: InputMaybe<Array<Scalars['String']>>
    underlyingName_not_in?: InputMaybe<Array<Scalars['String']>>
    underlyingName_contains?: InputMaybe<Scalars['String']>
    underlyingName_not_contains?: InputMaybe<Scalars['String']>
    underlyingName_starts_with?: InputMaybe<Scalars['String']>
    underlyingName_not_starts_with?: InputMaybe<Scalars['String']>
    underlyingName_ends_with?: InputMaybe<Scalars['String']>
    underlyingName_not_ends_with?: InputMaybe<Scalars['String']>
    underlyingPrice?: InputMaybe<Scalars['BigDecimal']>
    underlyingPrice_not?: InputMaybe<Scalars['BigDecimal']>
    underlyingPrice_gt?: InputMaybe<Scalars['BigDecimal']>
    underlyingPrice_lt?: InputMaybe<Scalars['BigDecimal']>
    underlyingPrice_gte?: InputMaybe<Scalars['BigDecimal']>
    underlyingPrice_lte?: InputMaybe<Scalars['BigDecimal']>
    underlyingPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    underlyingPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    underlyingSymbol?: InputMaybe<Scalars['String']>
    underlyingSymbol_not?: InputMaybe<Scalars['String']>
    underlyingSymbol_gt?: InputMaybe<Scalars['String']>
    underlyingSymbol_lt?: InputMaybe<Scalars['String']>
    underlyingSymbol_gte?: InputMaybe<Scalars['String']>
    underlyingSymbol_lte?: InputMaybe<Scalars['String']>
    underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>
    underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
    underlyingSymbol_contains?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>
    underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>
    accrualBlockNumber?: InputMaybe<Scalars['Int']>
    accrualBlockNumber_not?: InputMaybe<Scalars['Int']>
    accrualBlockNumber_gt?: InputMaybe<Scalars['Int']>
    accrualBlockNumber_lt?: InputMaybe<Scalars['Int']>
    accrualBlockNumber_gte?: InputMaybe<Scalars['Int']>
    accrualBlockNumber_lte?: InputMaybe<Scalars['Int']>
    accrualBlockNumber_in?: InputMaybe<Array<Scalars['Int']>>
    accrualBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
    blockTimestamp?: InputMaybe<Scalars['Int']>
    blockTimestamp_not?: InputMaybe<Scalars['Int']>
    blockTimestamp_gt?: InputMaybe<Scalars['Int']>
    blockTimestamp_lt?: InputMaybe<Scalars['Int']>
    blockTimestamp_gte?: InputMaybe<Scalars['Int']>
    blockTimestamp_lte?: InputMaybe<Scalars['Int']>
    blockTimestamp_in?: InputMaybe<Array<Scalars['Int']>>
    blockTimestamp_not_in?: InputMaybe<Array<Scalars['Int']>>
    borrowIndex?: InputMaybe<Scalars['BigDecimal']>
    borrowIndex_not?: InputMaybe<Scalars['BigDecimal']>
    borrowIndex_gt?: InputMaybe<Scalars['BigDecimal']>
    borrowIndex_lt?: InputMaybe<Scalars['BigDecimal']>
    borrowIndex_gte?: InputMaybe<Scalars['BigDecimal']>
    borrowIndex_lte?: InputMaybe<Scalars['BigDecimal']>
    borrowIndex_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    borrowIndex_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    reserveFactor?: InputMaybe<Scalars['BigInt']>
    reserveFactor_not?: InputMaybe<Scalars['BigInt']>
    reserveFactor_gt?: InputMaybe<Scalars['BigInt']>
    reserveFactor_lt?: InputMaybe<Scalars['BigInt']>
    reserveFactor_gte?: InputMaybe<Scalars['BigInt']>
    reserveFactor_lte?: InputMaybe<Scalars['BigInt']>
    reserveFactor_in?: InputMaybe<Array<Scalars['BigInt']>>
    reserveFactor_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    underlyingPriceUSD?: InputMaybe<Scalars['BigDecimal']>
    underlyingPriceUSD_not?: InputMaybe<Scalars['BigDecimal']>
    underlyingPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']>
    underlyingPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']>
    underlyingPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']>
    underlyingPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']>
    underlyingPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    underlyingPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    underlyingDecimals?: InputMaybe<Scalars['Int']>
    underlyingDecimals_not?: InputMaybe<Scalars['Int']>
    underlyingDecimals_gt?: InputMaybe<Scalars['Int']>
    underlyingDecimals_lt?: InputMaybe<Scalars['Int']>
    underlyingDecimals_gte?: InputMaybe<Scalars['Int']>
    underlyingDecimals_lte?: InputMaybe<Scalars['Int']>
    underlyingDecimals_in?: InputMaybe<Array<Scalars['Int']>>
    underlyingDecimals_not_in?: InputMaybe<Array<Scalars['Int']>>
  }

  /**
   * Account is an ETH address, with a list of all cToken markets the account has
   * participated in, along with liquidation information.
   */
  export type Account = {
    /** User ETH address */
    id: Scalars['ID']
    /** Array of CTokens user is in */
    tokens: Array<AccountCToken>
    /** Count user has been liquidated */
    countLiquidated: Scalars['Int']
    /** Count user has liquidated others */
    countLiquidator: Scalars['Int']
    /** True if user has ever borrowed */
    hasBorrowed: Scalars['Boolean']
    health?: Maybe<Scalars['BigDecimal']>
    totalBorrowValueInEth: Scalars['BigDecimal']
    totalCollateralValueInEth: Scalars['BigDecimal']
  }

  /**
   * Account is an ETH address, with a list of all cToken markets the account has
   * participated in, along with liquidation information.
   */
  export type AccounttokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<AccountCToken_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<AccountCToken_filter>
  }

  export type AccountCToken_orderBy =
    | 'id'
    | 'market'
    | 'symbol'
    | 'account'
    | 'transactions'
    | 'accrualBlockNumber'
    | 'enteredMarket'
    | 'cTokenBalance'
    | 'totalUnderlyingSupplied'
    | 'totalUnderlyingRedeemed'
    | 'accountBorrowIndex'
    | 'totalUnderlyingBorrowed'
    | 'totalUnderlyingRepaid'
    | 'storedBorrowBalance'

  export type AccountCToken_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    market?: InputMaybe<Scalars['String']>
    market_not?: InputMaybe<Scalars['String']>
    market_gt?: InputMaybe<Scalars['String']>
    market_lt?: InputMaybe<Scalars['String']>
    market_gte?: InputMaybe<Scalars['String']>
    market_lte?: InputMaybe<Scalars['String']>
    market_in?: InputMaybe<Array<Scalars['String']>>
    market_not_in?: InputMaybe<Array<Scalars['String']>>
    market_contains?: InputMaybe<Scalars['String']>
    market_not_contains?: InputMaybe<Scalars['String']>
    market_starts_with?: InputMaybe<Scalars['String']>
    market_not_starts_with?: InputMaybe<Scalars['String']>
    market_ends_with?: InputMaybe<Scalars['String']>
    market_not_ends_with?: InputMaybe<Scalars['String']>
    symbol?: InputMaybe<Scalars['String']>
    symbol_not?: InputMaybe<Scalars['String']>
    symbol_gt?: InputMaybe<Scalars['String']>
    symbol_lt?: InputMaybe<Scalars['String']>
    symbol_gte?: InputMaybe<Scalars['String']>
    symbol_lte?: InputMaybe<Scalars['String']>
    symbol_in?: InputMaybe<Array<Scalars['String']>>
    symbol_not_in?: InputMaybe<Array<Scalars['String']>>
    symbol_contains?: InputMaybe<Scalars['String']>
    symbol_not_contains?: InputMaybe<Scalars['String']>
    symbol_starts_with?: InputMaybe<Scalars['String']>
    symbol_not_starts_with?: InputMaybe<Scalars['String']>
    symbol_ends_with?: InputMaybe<Scalars['String']>
    symbol_not_ends_with?: InputMaybe<Scalars['String']>
    account?: InputMaybe<Scalars['String']>
    account_not?: InputMaybe<Scalars['String']>
    account_gt?: InputMaybe<Scalars['String']>
    account_lt?: InputMaybe<Scalars['String']>
    account_gte?: InputMaybe<Scalars['String']>
    account_lte?: InputMaybe<Scalars['String']>
    account_in?: InputMaybe<Array<Scalars['String']>>
    account_not_in?: InputMaybe<Array<Scalars['String']>>
    account_contains?: InputMaybe<Scalars['String']>
    account_not_contains?: InputMaybe<Scalars['String']>
    account_starts_with?: InputMaybe<Scalars['String']>
    account_not_starts_with?: InputMaybe<Scalars['String']>
    account_ends_with?: InputMaybe<Scalars['String']>
    account_not_ends_with?: InputMaybe<Scalars['String']>
    accrualBlockNumber?: InputMaybe<Scalars['BigInt']>
    accrualBlockNumber_not?: InputMaybe<Scalars['BigInt']>
    accrualBlockNumber_gt?: InputMaybe<Scalars['BigInt']>
    accrualBlockNumber_lt?: InputMaybe<Scalars['BigInt']>
    accrualBlockNumber_gte?: InputMaybe<Scalars['BigInt']>
    accrualBlockNumber_lte?: InputMaybe<Scalars['BigInt']>
    accrualBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>
    accrualBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    enteredMarket?: InputMaybe<Scalars['Boolean']>
    enteredMarket_not?: InputMaybe<Scalars['Boolean']>
    enteredMarket_in?: InputMaybe<Array<Scalars['Boolean']>>
    enteredMarket_not_in?: InputMaybe<Array<Scalars['Boolean']>>
    cTokenBalance?: InputMaybe<Scalars['BigDecimal']>
    cTokenBalance_not?: InputMaybe<Scalars['BigDecimal']>
    cTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']>
    cTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']>
    cTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']>
    cTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']>
    cTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    cTokenBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalUnderlyingSupplied?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingSupplied_not?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingSupplied_gt?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingSupplied_lt?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingSupplied_gte?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingSupplied_lte?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingSupplied_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalUnderlyingSupplied_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalUnderlyingRedeemed?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingRedeemed_not?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingRedeemed_gt?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingRedeemed_lt?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingRedeemed_gte?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingRedeemed_lte?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingRedeemed_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalUnderlyingRedeemed_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    accountBorrowIndex?: InputMaybe<Scalars['BigDecimal']>
    accountBorrowIndex_not?: InputMaybe<Scalars['BigDecimal']>
    accountBorrowIndex_gt?: InputMaybe<Scalars['BigDecimal']>
    accountBorrowIndex_lt?: InputMaybe<Scalars['BigDecimal']>
    accountBorrowIndex_gte?: InputMaybe<Scalars['BigDecimal']>
    accountBorrowIndex_lte?: InputMaybe<Scalars['BigDecimal']>
    accountBorrowIndex_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    accountBorrowIndex_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalUnderlyingBorrowed?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingBorrowed_not?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingBorrowed_gt?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingBorrowed_lt?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingBorrowed_gte?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingBorrowed_lte?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingBorrowed_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalUnderlyingBorrowed_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalUnderlyingRepaid?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingRepaid_not?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingRepaid_gt?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingRepaid_lt?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingRepaid_gte?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingRepaid_lte?: InputMaybe<Scalars['BigDecimal']>
    totalUnderlyingRepaid_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    totalUnderlyingRepaid_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    storedBorrowBalance?: InputMaybe<Scalars['BigDecimal']>
    storedBorrowBalance_not?: InputMaybe<Scalars['BigDecimal']>
    storedBorrowBalance_gt?: InputMaybe<Scalars['BigDecimal']>
    storedBorrowBalance_lt?: InputMaybe<Scalars['BigDecimal']>
    storedBorrowBalance_gte?: InputMaybe<Scalars['BigDecimal']>
    storedBorrowBalance_lte?: InputMaybe<Scalars['BigDecimal']>
    storedBorrowBalance_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    storedBorrowBalance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  }

  /**
   * AccountCToken is a single account within a single cToken market, with data such
   * as interest earned or paid
   */
  export type AccountCToken = {
    /** Concatenation of CToken address and user address */
    id: Scalars['ID']
    /** Relation to market */
    market: Market
    /** Symbol of the cToken */
    symbol: Scalars['String']
    /** Relation to user */
    account: Account
    /** Transactions data */
    transactions: Array<AccountCTokenTransaction>
    /** Block number this asset was updated at in the contract */
    accrualBlockNumber: Scalars['BigInt']
    /** True if user is entered, false if they are exited */
    enteredMarket: Scalars['Boolean']
    /** CToken balance of the user */
    cTokenBalance: Scalars['BigDecimal']
    /** Total amount of underlying supplied */
    totalUnderlyingSupplied: Scalars['BigDecimal']
    /** Total amount of underling redeemed */
    totalUnderlyingRedeemed: Scalars['BigDecimal']
    /** The value of the borrow index upon users last interaction */
    accountBorrowIndex: Scalars['BigDecimal']
    /** Total amount underlying borrowed, exclusive of interest */
    totalUnderlyingBorrowed: Scalars['BigDecimal']
    /** Total amount underlying repaid */
    totalUnderlyingRepaid: Scalars['BigDecimal']
    /** Current borrow balance stored in contract (exclusive of interest since accrualBlockNumber) */
    storedBorrowBalance: Scalars['BigDecimal']
    supplyBalanceUnderlying: Scalars['BigDecimal']
    lifetimeSupplyInterestAccrued: Scalars['BigDecimal']
    borrowBalanceUnderlying: Scalars['BigDecimal']
    lifetimeBorrowInterestAccrued: Scalars['BigDecimal']
  }

  /**
   * AccountCToken is a single account within a single cToken market, with data such
   * as interest earned or paid
   */
  export type AccountCTokentransactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<AccountCTokenTransaction_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<AccountCTokenTransaction_filter>
  }

  export type AccountCTokenTransaction_orderBy = 'id' | 'account' | 'tx_hash' | 'timestamp' | 'block' | 'logIndex'

  export type AccountCTokenTransaction_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    account?: InputMaybe<Scalars['String']>
    account_not?: InputMaybe<Scalars['String']>
    account_gt?: InputMaybe<Scalars['String']>
    account_lt?: InputMaybe<Scalars['String']>
    account_gte?: InputMaybe<Scalars['String']>
    account_lte?: InputMaybe<Scalars['String']>
    account_in?: InputMaybe<Array<Scalars['String']>>
    account_not_in?: InputMaybe<Array<Scalars['String']>>
    account_contains?: InputMaybe<Scalars['String']>
    account_not_contains?: InputMaybe<Scalars['String']>
    account_starts_with?: InputMaybe<Scalars['String']>
    account_not_starts_with?: InputMaybe<Scalars['String']>
    account_ends_with?: InputMaybe<Scalars['String']>
    account_not_ends_with?: InputMaybe<Scalars['String']>
    tx_hash?: InputMaybe<Scalars['Bytes']>
    tx_hash_not?: InputMaybe<Scalars['Bytes']>
    tx_hash_in?: InputMaybe<Array<Scalars['Bytes']>>
    tx_hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    tx_hash_contains?: InputMaybe<Scalars['Bytes']>
    tx_hash_not_contains?: InputMaybe<Scalars['Bytes']>
    timestamp?: InputMaybe<Scalars['BigInt']>
    timestamp_not?: InputMaybe<Scalars['BigInt']>
    timestamp_gt?: InputMaybe<Scalars['BigInt']>
    timestamp_lt?: InputMaybe<Scalars['BigInt']>
    timestamp_gte?: InputMaybe<Scalars['BigInt']>
    timestamp_lte?: InputMaybe<Scalars['BigInt']>
    timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>
    timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    block?: InputMaybe<Scalars['BigInt']>
    block_not?: InputMaybe<Scalars['BigInt']>
    block_gt?: InputMaybe<Scalars['BigInt']>
    block_lt?: InputMaybe<Scalars['BigInt']>
    block_gte?: InputMaybe<Scalars['BigInt']>
    block_lte?: InputMaybe<Scalars['BigInt']>
    block_in?: InputMaybe<Array<Scalars['BigInt']>>
    block_not_in?: InputMaybe<Array<Scalars['BigInt']>>
    logIndex?: InputMaybe<Scalars['BigInt']>
    logIndex_not?: InputMaybe<Scalars['BigInt']>
    logIndex_gt?: InputMaybe<Scalars['BigInt']>
    logIndex_lt?: InputMaybe<Scalars['BigInt']>
    logIndex_gte?: InputMaybe<Scalars['BigInt']>
    logIndex_lte?: InputMaybe<Scalars['BigInt']>
    logIndex_in?: InputMaybe<Array<Scalars['BigInt']>>
    logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>
  }

  /** Auxiliary entity for AccountCToken */
  export type AccountCTokenTransaction = {
    id: Scalars['ID']
    account: AccountCToken
    tx_hash: Scalars['Bytes']
    timestamp: Scalars['BigInt']
    block: Scalars['BigInt']
    logIndex: Scalars['BigInt']
  }

  export type Account_orderBy = 'id' | 'tokens' | 'countLiquidated' | 'countLiquidator' | 'hasBorrowed'

  export type Account_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    countLiquidated?: InputMaybe<Scalars['Int']>
    countLiquidated_not?: InputMaybe<Scalars['Int']>
    countLiquidated_gt?: InputMaybe<Scalars['Int']>
    countLiquidated_lt?: InputMaybe<Scalars['Int']>
    countLiquidated_gte?: InputMaybe<Scalars['Int']>
    countLiquidated_lte?: InputMaybe<Scalars['Int']>
    countLiquidated_in?: InputMaybe<Array<Scalars['Int']>>
    countLiquidated_not_in?: InputMaybe<Array<Scalars['Int']>>
    countLiquidator?: InputMaybe<Scalars['Int']>
    countLiquidator_not?: InputMaybe<Scalars['Int']>
    countLiquidator_gt?: InputMaybe<Scalars['Int']>
    countLiquidator_lt?: InputMaybe<Scalars['Int']>
    countLiquidator_gte?: InputMaybe<Scalars['Int']>
    countLiquidator_lte?: InputMaybe<Scalars['Int']>
    countLiquidator_in?: InputMaybe<Array<Scalars['Int']>>
    countLiquidator_not_in?: InputMaybe<Array<Scalars['Int']>>
    hasBorrowed?: InputMaybe<Scalars['Boolean']>
    hasBorrowed_not?: InputMaybe<Scalars['Boolean']>
    hasBorrowed_in?: InputMaybe<Array<Scalars['Boolean']>>
    hasBorrowed_not_in?: InputMaybe<Array<Scalars['Boolean']>>
  }

  /**
   * TransferEvent will be stored for every mint, redeem, liquidation, and any normal
   * transfer between two accounts.
   */
  export type TransferEvent = CTokenTransfer & {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID']
    /** cTokens transferred */
    amount: Scalars['BigDecimal']
    /** Account that received tokens */
    to: Scalars['Bytes']
    /** Account that sent tokens */
    from: Scalars['Bytes']
    /** Block number */
    blockNumber: Scalars['Int']
    /** Block time */
    blockTime: Scalars['Int']
    /** Symbol of the cToken transferred */
    cTokenSymbol: Scalars['String']
  }

  /**
   * An interface for a transfer of any cToken. TransferEvent, MintEvent,
   * RedeemEvent, and LiquidationEvent all use this interface
   */
  export type CTokenTransfer = {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID']
    /** cTokens transferred */
    amount: Scalars['BigDecimal']
    /** Account that received tokens */
    to: Scalars['Bytes']
    /** Account that sent tokens */
    from: Scalars['Bytes']
    /** Block number */
    blockNumber: Scalars['Int']
    /** Block time */
    blockTime: Scalars['Int']
    /** Symbol of the cToken transferred */
    cTokenSymbol: Scalars['String']
  }

  export type TransferEvent_orderBy = 'id' | 'amount' | 'to' | 'from' | 'blockNumber' | 'blockTime' | 'cTokenSymbol'

  export type TransferEvent_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    amount?: InputMaybe<Scalars['BigDecimal']>
    amount_not?: InputMaybe<Scalars['BigDecimal']>
    amount_gt?: InputMaybe<Scalars['BigDecimal']>
    amount_lt?: InputMaybe<Scalars['BigDecimal']>
    amount_gte?: InputMaybe<Scalars['BigDecimal']>
    amount_lte?: InputMaybe<Scalars['BigDecimal']>
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    to?: InputMaybe<Scalars['Bytes']>
    to_not?: InputMaybe<Scalars['Bytes']>
    to_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_contains?: InputMaybe<Scalars['Bytes']>
    to_not_contains?: InputMaybe<Scalars['Bytes']>
    from?: InputMaybe<Scalars['Bytes']>
    from_not?: InputMaybe<Scalars['Bytes']>
    from_in?: InputMaybe<Array<Scalars['Bytes']>>
    from_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    from_contains?: InputMaybe<Scalars['Bytes']>
    from_not_contains?: InputMaybe<Scalars['Bytes']>
    blockNumber?: InputMaybe<Scalars['Int']>
    blockNumber_not?: InputMaybe<Scalars['Int']>
    blockNumber_gt?: InputMaybe<Scalars['Int']>
    blockNumber_lt?: InputMaybe<Scalars['Int']>
    blockNumber_gte?: InputMaybe<Scalars['Int']>
    blockNumber_lte?: InputMaybe<Scalars['Int']>
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime?: InputMaybe<Scalars['Int']>
    blockTime_not?: InputMaybe<Scalars['Int']>
    blockTime_gt?: InputMaybe<Scalars['Int']>
    blockTime_lt?: InputMaybe<Scalars['Int']>
    blockTime_gte?: InputMaybe<Scalars['Int']>
    blockTime_lte?: InputMaybe<Scalars['Int']>
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
    cTokenSymbol?: InputMaybe<Scalars['String']>
    cTokenSymbol_not?: InputMaybe<Scalars['String']>
    cTokenSymbol_gt?: InputMaybe<Scalars['String']>
    cTokenSymbol_lt?: InputMaybe<Scalars['String']>
    cTokenSymbol_gte?: InputMaybe<Scalars['String']>
    cTokenSymbol_lte?: InputMaybe<Scalars['String']>
    cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>
    cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
    cTokenSymbol_contains?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>
    cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>
  }

  /**
   * MintEvent stores information for mints. From address will always be a cToken
   * market address
   */
  export type MintEvent = CTokenTransfer & {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID']
    /** cTokens transferred */
    amount: Scalars['BigDecimal']
    /** Account that received tokens (minter) */
    to: Scalars['Bytes']
    /** Account that sent tokens (CToken contract) */
    from: Scalars['Bytes']
    /** Block number */
    blockNumber: Scalars['Int']
    /** Block time */
    blockTime: Scalars['Int']
    /** Symbol of the cToken transferred */
    cTokenSymbol: Scalars['String']
    /** Underlying token amount transferred */
    underlyingAmount?: Maybe<Scalars['BigDecimal']>
  }

  export type MintEvent_orderBy =
    | 'id'
    | 'amount'
    | 'to'
    | 'from'
    | 'blockNumber'
    | 'blockTime'
    | 'cTokenSymbol'
    | 'underlyingAmount'

  export type MintEvent_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    amount?: InputMaybe<Scalars['BigDecimal']>
    amount_not?: InputMaybe<Scalars['BigDecimal']>
    amount_gt?: InputMaybe<Scalars['BigDecimal']>
    amount_lt?: InputMaybe<Scalars['BigDecimal']>
    amount_gte?: InputMaybe<Scalars['BigDecimal']>
    amount_lte?: InputMaybe<Scalars['BigDecimal']>
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    to?: InputMaybe<Scalars['Bytes']>
    to_not?: InputMaybe<Scalars['Bytes']>
    to_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_contains?: InputMaybe<Scalars['Bytes']>
    to_not_contains?: InputMaybe<Scalars['Bytes']>
    from?: InputMaybe<Scalars['Bytes']>
    from_not?: InputMaybe<Scalars['Bytes']>
    from_in?: InputMaybe<Array<Scalars['Bytes']>>
    from_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    from_contains?: InputMaybe<Scalars['Bytes']>
    from_not_contains?: InputMaybe<Scalars['Bytes']>
    blockNumber?: InputMaybe<Scalars['Int']>
    blockNumber_not?: InputMaybe<Scalars['Int']>
    blockNumber_gt?: InputMaybe<Scalars['Int']>
    blockNumber_lt?: InputMaybe<Scalars['Int']>
    blockNumber_gte?: InputMaybe<Scalars['Int']>
    blockNumber_lte?: InputMaybe<Scalars['Int']>
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime?: InputMaybe<Scalars['Int']>
    blockTime_not?: InputMaybe<Scalars['Int']>
    blockTime_gt?: InputMaybe<Scalars['Int']>
    blockTime_lt?: InputMaybe<Scalars['Int']>
    blockTime_gte?: InputMaybe<Scalars['Int']>
    blockTime_lte?: InputMaybe<Scalars['Int']>
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
    cTokenSymbol?: InputMaybe<Scalars['String']>
    cTokenSymbol_not?: InputMaybe<Scalars['String']>
    cTokenSymbol_gt?: InputMaybe<Scalars['String']>
    cTokenSymbol_lt?: InputMaybe<Scalars['String']>
    cTokenSymbol_gte?: InputMaybe<Scalars['String']>
    cTokenSymbol_lte?: InputMaybe<Scalars['String']>
    cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>
    cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
    cTokenSymbol_contains?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>
    cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>
    underlyingAmount?: InputMaybe<Scalars['BigDecimal']>
    underlyingAmount_not?: InputMaybe<Scalars['BigDecimal']>
    underlyingAmount_gt?: InputMaybe<Scalars['BigDecimal']>
    underlyingAmount_lt?: InputMaybe<Scalars['BigDecimal']>
    underlyingAmount_gte?: InputMaybe<Scalars['BigDecimal']>
    underlyingAmount_lte?: InputMaybe<Scalars['BigDecimal']>
    underlyingAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    underlyingAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  }

  /**
   * RedeemEvent stores information for redeems. To address will always be a
   * cToken market address
   */
  export type RedeemEvent = CTokenTransfer & {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID']
    /** cTokens transferred */
    amount: Scalars['BigDecimal']
    /** Account that received tokens (CToken contract) */
    to: Scalars['Bytes']
    /** Account that sent tokens (redeemer) */
    from: Scalars['Bytes']
    /** Block number */
    blockNumber: Scalars['Int']
    /** Block time */
    blockTime: Scalars['Int']
    /** Symbol of the cToken transferred */
    cTokenSymbol: Scalars['String']
    /** Underlying token amount transferred */
    underlyingAmount?: Maybe<Scalars['BigDecimal']>
  }

  export type RedeemEvent_orderBy =
    | 'id'
    | 'amount'
    | 'to'
    | 'from'
    | 'blockNumber'
    | 'blockTime'
    | 'cTokenSymbol'
    | 'underlyingAmount'

  export type RedeemEvent_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    amount?: InputMaybe<Scalars['BigDecimal']>
    amount_not?: InputMaybe<Scalars['BigDecimal']>
    amount_gt?: InputMaybe<Scalars['BigDecimal']>
    amount_lt?: InputMaybe<Scalars['BigDecimal']>
    amount_gte?: InputMaybe<Scalars['BigDecimal']>
    amount_lte?: InputMaybe<Scalars['BigDecimal']>
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    to?: InputMaybe<Scalars['Bytes']>
    to_not?: InputMaybe<Scalars['Bytes']>
    to_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_contains?: InputMaybe<Scalars['Bytes']>
    to_not_contains?: InputMaybe<Scalars['Bytes']>
    from?: InputMaybe<Scalars['Bytes']>
    from_not?: InputMaybe<Scalars['Bytes']>
    from_in?: InputMaybe<Array<Scalars['Bytes']>>
    from_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    from_contains?: InputMaybe<Scalars['Bytes']>
    from_not_contains?: InputMaybe<Scalars['Bytes']>
    blockNumber?: InputMaybe<Scalars['Int']>
    blockNumber_not?: InputMaybe<Scalars['Int']>
    blockNumber_gt?: InputMaybe<Scalars['Int']>
    blockNumber_lt?: InputMaybe<Scalars['Int']>
    blockNumber_gte?: InputMaybe<Scalars['Int']>
    blockNumber_lte?: InputMaybe<Scalars['Int']>
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime?: InputMaybe<Scalars['Int']>
    blockTime_not?: InputMaybe<Scalars['Int']>
    blockTime_gt?: InputMaybe<Scalars['Int']>
    blockTime_lt?: InputMaybe<Scalars['Int']>
    blockTime_gte?: InputMaybe<Scalars['Int']>
    blockTime_lte?: InputMaybe<Scalars['Int']>
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
    cTokenSymbol?: InputMaybe<Scalars['String']>
    cTokenSymbol_not?: InputMaybe<Scalars['String']>
    cTokenSymbol_gt?: InputMaybe<Scalars['String']>
    cTokenSymbol_lt?: InputMaybe<Scalars['String']>
    cTokenSymbol_gte?: InputMaybe<Scalars['String']>
    cTokenSymbol_lte?: InputMaybe<Scalars['String']>
    cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>
    cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
    cTokenSymbol_contains?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>
    cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>
    underlyingAmount?: InputMaybe<Scalars['BigDecimal']>
    underlyingAmount_not?: InputMaybe<Scalars['BigDecimal']>
    underlyingAmount_gt?: InputMaybe<Scalars['BigDecimal']>
    underlyingAmount_lt?: InputMaybe<Scalars['BigDecimal']>
    underlyingAmount_gte?: InputMaybe<Scalars['BigDecimal']>
    underlyingAmount_lte?: InputMaybe<Scalars['BigDecimal']>
    underlyingAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    underlyingAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  }

  /**
   * LiquidationEvent stores information for liquidations. The event is emitted from
   * the cToken market address.
   */
  export type LiquidationEvent = CTokenTransfer & {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID']
    /** cTokens seized */
    amount: Scalars['BigDecimal']
    /** Liquidator receiving tokens */
    to: Scalars['Bytes']
    /** Account being liquidated (borrower) */
    from: Scalars['Bytes']
    /** Block number */
    blockNumber: Scalars['Int']
    /** Block time */
    blockTime: Scalars['Int']
    /** cToken that was sezied as collateral */
    cTokenSymbol: Scalars['String']
    /** Symbol of the underlying asset repaid through liquidation */
    underlyingSymbol: Scalars['String']
    /** Underlying cToken amount that was repaid by liquidator */
    underlyingRepayAmount: Scalars['BigDecimal']
  }

  export type LiquidationEvent_orderBy =
    | 'id'
    | 'amount'
    | 'to'
    | 'from'
    | 'blockNumber'
    | 'blockTime'
    | 'cTokenSymbol'
    | 'underlyingSymbol'
    | 'underlyingRepayAmount'

  export type LiquidationEvent_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    amount?: InputMaybe<Scalars['BigDecimal']>
    amount_not?: InputMaybe<Scalars['BigDecimal']>
    amount_gt?: InputMaybe<Scalars['BigDecimal']>
    amount_lt?: InputMaybe<Scalars['BigDecimal']>
    amount_gte?: InputMaybe<Scalars['BigDecimal']>
    amount_lte?: InputMaybe<Scalars['BigDecimal']>
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    to?: InputMaybe<Scalars['Bytes']>
    to_not?: InputMaybe<Scalars['Bytes']>
    to_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_contains?: InputMaybe<Scalars['Bytes']>
    to_not_contains?: InputMaybe<Scalars['Bytes']>
    from?: InputMaybe<Scalars['Bytes']>
    from_not?: InputMaybe<Scalars['Bytes']>
    from_in?: InputMaybe<Array<Scalars['Bytes']>>
    from_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    from_contains?: InputMaybe<Scalars['Bytes']>
    from_not_contains?: InputMaybe<Scalars['Bytes']>
    blockNumber?: InputMaybe<Scalars['Int']>
    blockNumber_not?: InputMaybe<Scalars['Int']>
    blockNumber_gt?: InputMaybe<Scalars['Int']>
    blockNumber_lt?: InputMaybe<Scalars['Int']>
    blockNumber_gte?: InputMaybe<Scalars['Int']>
    blockNumber_lte?: InputMaybe<Scalars['Int']>
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime?: InputMaybe<Scalars['Int']>
    blockTime_not?: InputMaybe<Scalars['Int']>
    blockTime_gt?: InputMaybe<Scalars['Int']>
    blockTime_lt?: InputMaybe<Scalars['Int']>
    blockTime_gte?: InputMaybe<Scalars['Int']>
    blockTime_lte?: InputMaybe<Scalars['Int']>
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
    cTokenSymbol?: InputMaybe<Scalars['String']>
    cTokenSymbol_not?: InputMaybe<Scalars['String']>
    cTokenSymbol_gt?: InputMaybe<Scalars['String']>
    cTokenSymbol_lt?: InputMaybe<Scalars['String']>
    cTokenSymbol_gte?: InputMaybe<Scalars['String']>
    cTokenSymbol_lte?: InputMaybe<Scalars['String']>
    cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>
    cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
    cTokenSymbol_contains?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>
    cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>
    underlyingSymbol?: InputMaybe<Scalars['String']>
    underlyingSymbol_not?: InputMaybe<Scalars['String']>
    underlyingSymbol_gt?: InputMaybe<Scalars['String']>
    underlyingSymbol_lt?: InputMaybe<Scalars['String']>
    underlyingSymbol_gte?: InputMaybe<Scalars['String']>
    underlyingSymbol_lte?: InputMaybe<Scalars['String']>
    underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>
    underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
    underlyingSymbol_contains?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>
    underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>
    underlyingRepayAmount?: InputMaybe<Scalars['BigDecimal']>
    underlyingRepayAmount_not?: InputMaybe<Scalars['BigDecimal']>
    underlyingRepayAmount_gt?: InputMaybe<Scalars['BigDecimal']>
    underlyingRepayAmount_lt?: InputMaybe<Scalars['BigDecimal']>
    underlyingRepayAmount_gte?: InputMaybe<Scalars['BigDecimal']>
    underlyingRepayAmount_lte?: InputMaybe<Scalars['BigDecimal']>
    underlyingRepayAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    underlyingRepayAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
  }

  /** BorrowEvent stores information for borrows */
  export type BorrowEvent = UnderlyingTransfer & {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID']
    /** Amount of underlying borrowed */
    amount: Scalars['BigDecimal']
    /** Total borrows of this asset the account has */
    accountBorrows: Scalars['BigDecimal']
    /** Account that borrowed the tokens */
    borrower: Scalars['Bytes']
    /** Block number */
    blockNumber: Scalars['Int']
    /** Block time */
    blockTime: Scalars['Int']
    /** Symbol of the borrowed underlying asset */
    underlyingSymbol: Scalars['String']
  }

  /**
   * Underlying transfers are transfers of underlying collateral for both borrows
   * and repays
   */
  export type UnderlyingTransfer = {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID']
    /** Amount of underlying borrowed */
    amount: Scalars['BigDecimal']
    /** Total borrows of this asset the account has */
    accountBorrows: Scalars['BigDecimal']
    /** Account that borrowed the tokens */
    borrower: Scalars['Bytes']
    /** Block number */
    blockNumber: Scalars['Int']
    /** Block time */
    blockTime: Scalars['Int']
    /** Symbol of the borrowed underlying asset */
    underlyingSymbol: Scalars['String']
  }

  export type BorrowEvent_orderBy =
    | 'id'
    | 'amount'
    | 'accountBorrows'
    | 'borrower'
    | 'blockNumber'
    | 'blockTime'
    | 'underlyingSymbol'

  export type BorrowEvent_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    amount?: InputMaybe<Scalars['BigDecimal']>
    amount_not?: InputMaybe<Scalars['BigDecimal']>
    amount_gt?: InputMaybe<Scalars['BigDecimal']>
    amount_lt?: InputMaybe<Scalars['BigDecimal']>
    amount_gte?: InputMaybe<Scalars['BigDecimal']>
    amount_lte?: InputMaybe<Scalars['BigDecimal']>
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    accountBorrows?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_not?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_gt?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_lt?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_gte?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_lte?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    accountBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    borrower?: InputMaybe<Scalars['Bytes']>
    borrower_not?: InputMaybe<Scalars['Bytes']>
    borrower_in?: InputMaybe<Array<Scalars['Bytes']>>
    borrower_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    borrower_contains?: InputMaybe<Scalars['Bytes']>
    borrower_not_contains?: InputMaybe<Scalars['Bytes']>
    blockNumber?: InputMaybe<Scalars['Int']>
    blockNumber_not?: InputMaybe<Scalars['Int']>
    blockNumber_gt?: InputMaybe<Scalars['Int']>
    blockNumber_lt?: InputMaybe<Scalars['Int']>
    blockNumber_gte?: InputMaybe<Scalars['Int']>
    blockNumber_lte?: InputMaybe<Scalars['Int']>
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime?: InputMaybe<Scalars['Int']>
    blockTime_not?: InputMaybe<Scalars['Int']>
    blockTime_gt?: InputMaybe<Scalars['Int']>
    blockTime_lt?: InputMaybe<Scalars['Int']>
    blockTime_gte?: InputMaybe<Scalars['Int']>
    blockTime_lte?: InputMaybe<Scalars['Int']>
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
    underlyingSymbol?: InputMaybe<Scalars['String']>
    underlyingSymbol_not?: InputMaybe<Scalars['String']>
    underlyingSymbol_gt?: InputMaybe<Scalars['String']>
    underlyingSymbol_lt?: InputMaybe<Scalars['String']>
    underlyingSymbol_gte?: InputMaybe<Scalars['String']>
    underlyingSymbol_lte?: InputMaybe<Scalars['String']>
    underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>
    underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
    underlyingSymbol_contains?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>
    underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>
  }

  /**
   * RepayEvent stores information for repays. Payer is not always the same as
   * borrower, such as in the event of a Liquidation
   */
  export type RepayEvent = UnderlyingTransfer & {
    /** Transaction hash concatenated with log index */
    id: Scalars['ID']
    /** Amount of underlying repaid */
    amount: Scalars['BigDecimal']
    /** Total borrows of this asset the account has */
    accountBorrows: Scalars['BigDecimal']
    /** Account that borrowed the tokens */
    borrower: Scalars['Bytes']
    /** Block number */
    blockNumber: Scalars['Int']
    /** Block time */
    blockTime: Scalars['Int']
    /** Symbol of the borrowed underlying asset */
    underlyingSymbol: Scalars['String']
    /** Payer of the borrow funds */
    payer: Scalars['Bytes']
  }

  export type RepayEvent_orderBy =
    | 'id'
    | 'amount'
    | 'accountBorrows'
    | 'borrower'
    | 'blockNumber'
    | 'blockTime'
    | 'underlyingSymbol'
    | 'payer'

  export type RepayEvent_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    amount?: InputMaybe<Scalars['BigDecimal']>
    amount_not?: InputMaybe<Scalars['BigDecimal']>
    amount_gt?: InputMaybe<Scalars['BigDecimal']>
    amount_lt?: InputMaybe<Scalars['BigDecimal']>
    amount_gte?: InputMaybe<Scalars['BigDecimal']>
    amount_lte?: InputMaybe<Scalars['BigDecimal']>
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    accountBorrows?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_not?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_gt?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_lt?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_gte?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_lte?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    accountBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    borrower?: InputMaybe<Scalars['Bytes']>
    borrower_not?: InputMaybe<Scalars['Bytes']>
    borrower_in?: InputMaybe<Array<Scalars['Bytes']>>
    borrower_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    borrower_contains?: InputMaybe<Scalars['Bytes']>
    borrower_not_contains?: InputMaybe<Scalars['Bytes']>
    blockNumber?: InputMaybe<Scalars['Int']>
    blockNumber_not?: InputMaybe<Scalars['Int']>
    blockNumber_gt?: InputMaybe<Scalars['Int']>
    blockNumber_lt?: InputMaybe<Scalars['Int']>
    blockNumber_gte?: InputMaybe<Scalars['Int']>
    blockNumber_lte?: InputMaybe<Scalars['Int']>
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime?: InputMaybe<Scalars['Int']>
    blockTime_not?: InputMaybe<Scalars['Int']>
    blockTime_gt?: InputMaybe<Scalars['Int']>
    blockTime_lt?: InputMaybe<Scalars['Int']>
    blockTime_gte?: InputMaybe<Scalars['Int']>
    blockTime_lte?: InputMaybe<Scalars['Int']>
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
    underlyingSymbol?: InputMaybe<Scalars['String']>
    underlyingSymbol_not?: InputMaybe<Scalars['String']>
    underlyingSymbol_gt?: InputMaybe<Scalars['String']>
    underlyingSymbol_lt?: InputMaybe<Scalars['String']>
    underlyingSymbol_gte?: InputMaybe<Scalars['String']>
    underlyingSymbol_lte?: InputMaybe<Scalars['String']>
    underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>
    underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
    underlyingSymbol_contains?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>
    underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>
    payer?: InputMaybe<Scalars['Bytes']>
    payer_not?: InputMaybe<Scalars['Bytes']>
    payer_in?: InputMaybe<Array<Scalars['Bytes']>>
    payer_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    payer_contains?: InputMaybe<Scalars['Bytes']>
    payer_not_contains?: InputMaybe<Scalars['Bytes']>
  }

  export type CTokenTransfer_orderBy = 'id' | 'amount' | 'to' | 'from' | 'blockNumber' | 'blockTime' | 'cTokenSymbol'

  export type CTokenTransfer_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    amount?: InputMaybe<Scalars['BigDecimal']>
    amount_not?: InputMaybe<Scalars['BigDecimal']>
    amount_gt?: InputMaybe<Scalars['BigDecimal']>
    amount_lt?: InputMaybe<Scalars['BigDecimal']>
    amount_gte?: InputMaybe<Scalars['BigDecimal']>
    amount_lte?: InputMaybe<Scalars['BigDecimal']>
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    to?: InputMaybe<Scalars['Bytes']>
    to_not?: InputMaybe<Scalars['Bytes']>
    to_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    to_contains?: InputMaybe<Scalars['Bytes']>
    to_not_contains?: InputMaybe<Scalars['Bytes']>
    from?: InputMaybe<Scalars['Bytes']>
    from_not?: InputMaybe<Scalars['Bytes']>
    from_in?: InputMaybe<Array<Scalars['Bytes']>>
    from_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    from_contains?: InputMaybe<Scalars['Bytes']>
    from_not_contains?: InputMaybe<Scalars['Bytes']>
    blockNumber?: InputMaybe<Scalars['Int']>
    blockNumber_not?: InputMaybe<Scalars['Int']>
    blockNumber_gt?: InputMaybe<Scalars['Int']>
    blockNumber_lt?: InputMaybe<Scalars['Int']>
    blockNumber_gte?: InputMaybe<Scalars['Int']>
    blockNumber_lte?: InputMaybe<Scalars['Int']>
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime?: InputMaybe<Scalars['Int']>
    blockTime_not?: InputMaybe<Scalars['Int']>
    blockTime_gt?: InputMaybe<Scalars['Int']>
    blockTime_lt?: InputMaybe<Scalars['Int']>
    blockTime_gte?: InputMaybe<Scalars['Int']>
    blockTime_lte?: InputMaybe<Scalars['Int']>
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
    cTokenSymbol?: InputMaybe<Scalars['String']>
    cTokenSymbol_not?: InputMaybe<Scalars['String']>
    cTokenSymbol_gt?: InputMaybe<Scalars['String']>
    cTokenSymbol_lt?: InputMaybe<Scalars['String']>
    cTokenSymbol_gte?: InputMaybe<Scalars['String']>
    cTokenSymbol_lte?: InputMaybe<Scalars['String']>
    cTokenSymbol_in?: InputMaybe<Array<Scalars['String']>>
    cTokenSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
    cTokenSymbol_contains?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_contains?: InputMaybe<Scalars['String']>
    cTokenSymbol_starts_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_starts_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_ends_with?: InputMaybe<Scalars['String']>
    cTokenSymbol_not_ends_with?: InputMaybe<Scalars['String']>
  }

  export type UnderlyingTransfer_orderBy =
    | 'id'
    | 'amount'
    | 'accountBorrows'
    | 'borrower'
    | 'blockNumber'
    | 'blockTime'
    | 'underlyingSymbol'

  export type UnderlyingTransfer_filter = {
    id?: InputMaybe<Scalars['ID']>
    id_not?: InputMaybe<Scalars['ID']>
    id_gt?: InputMaybe<Scalars['ID']>
    id_lt?: InputMaybe<Scalars['ID']>
    id_gte?: InputMaybe<Scalars['ID']>
    id_lte?: InputMaybe<Scalars['ID']>
    id_in?: InputMaybe<Array<Scalars['ID']>>
    id_not_in?: InputMaybe<Array<Scalars['ID']>>
    amount?: InputMaybe<Scalars['BigDecimal']>
    amount_not?: InputMaybe<Scalars['BigDecimal']>
    amount_gt?: InputMaybe<Scalars['BigDecimal']>
    amount_lt?: InputMaybe<Scalars['BigDecimal']>
    amount_gte?: InputMaybe<Scalars['BigDecimal']>
    amount_lte?: InputMaybe<Scalars['BigDecimal']>
    amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    accountBorrows?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_not?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_gt?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_lt?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_gte?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_lte?: InputMaybe<Scalars['BigDecimal']>
    accountBorrows_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    accountBorrows_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>
    borrower?: InputMaybe<Scalars['Bytes']>
    borrower_not?: InputMaybe<Scalars['Bytes']>
    borrower_in?: InputMaybe<Array<Scalars['Bytes']>>
    borrower_not_in?: InputMaybe<Array<Scalars['Bytes']>>
    borrower_contains?: InputMaybe<Scalars['Bytes']>
    borrower_not_contains?: InputMaybe<Scalars['Bytes']>
    blockNumber?: InputMaybe<Scalars['Int']>
    blockNumber_not?: InputMaybe<Scalars['Int']>
    blockNumber_gt?: InputMaybe<Scalars['Int']>
    blockNumber_lt?: InputMaybe<Scalars['Int']>
    blockNumber_gte?: InputMaybe<Scalars['Int']>
    blockNumber_lte?: InputMaybe<Scalars['Int']>
    blockNumber_in?: InputMaybe<Array<Scalars['Int']>>
    blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime?: InputMaybe<Scalars['Int']>
    blockTime_not?: InputMaybe<Scalars['Int']>
    blockTime_gt?: InputMaybe<Scalars['Int']>
    blockTime_lt?: InputMaybe<Scalars['Int']>
    blockTime_gte?: InputMaybe<Scalars['Int']>
    blockTime_lte?: InputMaybe<Scalars['Int']>
    blockTime_in?: InputMaybe<Array<Scalars['Int']>>
    blockTime_not_in?: InputMaybe<Array<Scalars['Int']>>
    underlyingSymbol?: InputMaybe<Scalars['String']>
    underlyingSymbol_not?: InputMaybe<Scalars['String']>
    underlyingSymbol_gt?: InputMaybe<Scalars['String']>
    underlyingSymbol_lt?: InputMaybe<Scalars['String']>
    underlyingSymbol_gte?: InputMaybe<Scalars['String']>
    underlyingSymbol_lte?: InputMaybe<Scalars['String']>
    underlyingSymbol_in?: InputMaybe<Array<Scalars['String']>>
    underlyingSymbol_not_in?: InputMaybe<Array<Scalars['String']>>
    underlyingSymbol_contains?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_contains?: InputMaybe<Scalars['String']>
    underlyingSymbol_starts_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_starts_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_ends_with?: InputMaybe<Scalars['String']>
    underlyingSymbol_not_ends_with?: InputMaybe<Scalars['String']>
  }

  /** The type for the top-level _meta field */
  export type _Meta_ = {
    /**
     * Information about a specific subgraph block. The hash of the block
     * will be null if the _meta field has a block constraint that asks for
     * a block number. It will be filled if the _meta field has no block constraint
     * and therefore asks for the latest  block
     */
    block: _Block_
    /** The deployment ID */
    deployment: Scalars['String']
    /** If `true`, the subgraph encountered indexing errors at some past block */
    hasIndexingErrors: Scalars['Boolean']
  }

  export type _Block_ = {
    /** The hash of the block */
    hash?: Maybe<Scalars['Bytes']>
    /** The block number */
    number: Scalars['Int']
  }

  export type Subscription = {
    comptroller?: Maybe<Comptroller>
    comptrollers: Array<Comptroller>
    market?: Maybe<Market>
    markets: Array<Market>
    account?: Maybe<Account>
    accounts: Array<Account>
    accountCToken?: Maybe<AccountCToken>
    accountCTokens: Array<AccountCToken>
    accountCTokenTransaction?: Maybe<AccountCTokenTransaction>
    accountCTokenTransactions: Array<AccountCTokenTransaction>
    transferEvent?: Maybe<TransferEvent>
    transferEvents: Array<TransferEvent>
    mintEvent?: Maybe<MintEvent>
    mintEvents: Array<MintEvent>
    redeemEvent?: Maybe<RedeemEvent>
    redeemEvents: Array<RedeemEvent>
    liquidationEvent?: Maybe<LiquidationEvent>
    liquidationEvents: Array<LiquidationEvent>
    borrowEvent?: Maybe<BorrowEvent>
    borrowEvents: Array<BorrowEvent>
    repayEvent?: Maybe<RepayEvent>
    repayEvents: Array<RepayEvent>
    ctokenTransfer?: Maybe<CTokenTransfer>
    ctokenTransfers: Array<CTokenTransfer>
    underlyingTransfer?: Maybe<UnderlyingTransfer>
    underlyingTransfers: Array<UnderlyingTransfer>
    /** Access to subgraph metadata */
    _meta?: Maybe<_Meta_>
  }

  export type SubscriptioncomptrollerArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptioncomptrollersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Comptroller_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Comptroller_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionmarketArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionmarketsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<Market_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<Market_filter>
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

  export type SubscriptionaccountCTokenArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionaccountCTokensArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<AccountCToken_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<AccountCToken_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionaccountCTokenTransactionArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionaccountCTokenTransactionsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<AccountCTokenTransaction_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<AccountCTokenTransaction_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiontransferEventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptiontransferEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<TransferEvent_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<TransferEvent_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionmintEventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionmintEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<MintEvent_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<MintEvent_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionredeemEventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionredeemEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<RedeemEvent_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<RedeemEvent_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidationEventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionliquidationEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<LiquidationEvent_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<LiquidationEvent_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionborrowEventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionborrowEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<BorrowEvent_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<BorrowEvent_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionrepayEventArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionrepayEventsArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<RepayEvent_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<RepayEvent_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionctokenTransferArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionctokenTransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<CTokenTransfer_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<CTokenTransfer_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionunderlyingTransferArgs = {
    id: Scalars['ID']
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type SubscriptionunderlyingTransfersArgs = {
    skip?: InputMaybe<Scalars['Int']>
    first?: InputMaybe<Scalars['Int']>
    orderBy?: InputMaybe<UnderlyingTransfer_orderBy>
    orderDirection?: InputMaybe<OrderDirection>
    where?: InputMaybe<UnderlyingTransfer_filter>
    block?: InputMaybe<Block_height>
    subgraphError?: _SubgraphErrorPolicy_
  }

  export type Subscription_metaArgs = {
    block?: InputMaybe<Block_height>
  }
}
export type QueryCompoundv2Sdk = {
  /**  **/
  comptroller: InContextSdkMethod<
    Compoundv2Types.Query['comptroller'],
    Compoundv2Types.QuerycomptrollerArgs,
    MeshContext
  >
  /**  **/
  comptrollers: InContextSdkMethod<
    Compoundv2Types.Query['comptrollers'],
    Compoundv2Types.QuerycomptrollersArgs,
    MeshContext
  >
  /**  **/
  market: InContextSdkMethod<Compoundv2Types.Query['market'], Compoundv2Types.QuerymarketArgs, MeshContext>
  /**  **/
  markets: InContextSdkMethod<Compoundv2Types.Query['markets'], Compoundv2Types.QuerymarketsArgs, MeshContext>
  /**  **/
  account: InContextSdkMethod<Compoundv2Types.Query['account'], Compoundv2Types.QueryaccountArgs, MeshContext>
  /**  **/
  accounts: InContextSdkMethod<Compoundv2Types.Query['accounts'], Compoundv2Types.QueryaccountsArgs, MeshContext>
  /**  **/
  accountCToken: InContextSdkMethod<
    Compoundv2Types.Query['accountCToken'],
    Compoundv2Types.QueryaccountCTokenArgs,
    MeshContext
  >
  /**  **/
  accountCTokens: InContextSdkMethod<
    Compoundv2Types.Query['accountCTokens'],
    Compoundv2Types.QueryaccountCTokensArgs,
    MeshContext
  >
  /**  **/
  accountCTokenTransaction: InContextSdkMethod<
    Compoundv2Types.Query['accountCTokenTransaction'],
    Compoundv2Types.QueryaccountCTokenTransactionArgs,
    MeshContext
  >
  /**  **/
  accountCTokenTransactions: InContextSdkMethod<
    Compoundv2Types.Query['accountCTokenTransactions'],
    Compoundv2Types.QueryaccountCTokenTransactionsArgs,
    MeshContext
  >
  /**  **/
  transferEvent: InContextSdkMethod<
    Compoundv2Types.Query['transferEvent'],
    Compoundv2Types.QuerytransferEventArgs,
    MeshContext
  >
  /**  **/
  transferEvents: InContextSdkMethod<
    Compoundv2Types.Query['transferEvents'],
    Compoundv2Types.QuerytransferEventsArgs,
    MeshContext
  >
  /**  **/
  mintEvent: InContextSdkMethod<Compoundv2Types.Query['mintEvent'], Compoundv2Types.QuerymintEventArgs, MeshContext>
  /**  **/
  mintEvents: InContextSdkMethod<Compoundv2Types.Query['mintEvents'], Compoundv2Types.QuerymintEventsArgs, MeshContext>
  /**  **/
  redeemEvent: InContextSdkMethod<
    Compoundv2Types.Query['redeemEvent'],
    Compoundv2Types.QueryredeemEventArgs,
    MeshContext
  >
  /**  **/
  redeemEvents: InContextSdkMethod<
    Compoundv2Types.Query['redeemEvents'],
    Compoundv2Types.QueryredeemEventsArgs,
    MeshContext
  >
  /**  **/
  liquidationEvent: InContextSdkMethod<
    Compoundv2Types.Query['liquidationEvent'],
    Compoundv2Types.QueryliquidationEventArgs,
    MeshContext
  >
  /**  **/
  liquidationEvents: InContextSdkMethod<
    Compoundv2Types.Query['liquidationEvents'],
    Compoundv2Types.QueryliquidationEventsArgs,
    MeshContext
  >
  /**  **/
  borrowEvent: InContextSdkMethod<
    Compoundv2Types.Query['borrowEvent'],
    Compoundv2Types.QueryborrowEventArgs,
    MeshContext
  >
  /**  **/
  borrowEvents: InContextSdkMethod<
    Compoundv2Types.Query['borrowEvents'],
    Compoundv2Types.QueryborrowEventsArgs,
    MeshContext
  >
  /**  **/
  repayEvent: InContextSdkMethod<Compoundv2Types.Query['repayEvent'], Compoundv2Types.QueryrepayEventArgs, MeshContext>
  /**  **/
  repayEvents: InContextSdkMethod<
    Compoundv2Types.Query['repayEvents'],
    Compoundv2Types.QueryrepayEventsArgs,
    MeshContext
  >
  /**  **/
  ctokenTransfer: InContextSdkMethod<
    Compoundv2Types.Query['ctokenTransfer'],
    Compoundv2Types.QueryctokenTransferArgs,
    MeshContext
  >
  /**  **/
  ctokenTransfers: InContextSdkMethod<
    Compoundv2Types.Query['ctokenTransfers'],
    Compoundv2Types.QueryctokenTransfersArgs,
    MeshContext
  >
  /**  **/
  underlyingTransfer: InContextSdkMethod<
    Compoundv2Types.Query['underlyingTransfer'],
    Compoundv2Types.QueryunderlyingTransferArgs,
    MeshContext
  >
  /**  **/
  underlyingTransfers: InContextSdkMethod<
    Compoundv2Types.Query['underlyingTransfers'],
    Compoundv2Types.QueryunderlyingTransfersArgs,
    MeshContext
  >
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Compoundv2Types.Query['_meta'], Compoundv2Types.Query_metaArgs, MeshContext>
}

export type MutationCompoundv2Sdk = {}

export type SubscriptionCompoundv2Sdk = {
  /**  **/
  comptroller: InContextSdkMethod<
    Compoundv2Types.Subscription['comptroller'],
    Compoundv2Types.SubscriptioncomptrollerArgs,
    MeshContext
  >
  /**  **/
  comptrollers: InContextSdkMethod<
    Compoundv2Types.Subscription['comptrollers'],
    Compoundv2Types.SubscriptioncomptrollersArgs,
    MeshContext
  >
  /**  **/
  market: InContextSdkMethod<
    Compoundv2Types.Subscription['market'],
    Compoundv2Types.SubscriptionmarketArgs,
    MeshContext
  >
  /**  **/
  markets: InContextSdkMethod<
    Compoundv2Types.Subscription['markets'],
    Compoundv2Types.SubscriptionmarketsArgs,
    MeshContext
  >
  /**  **/
  account: InContextSdkMethod<
    Compoundv2Types.Subscription['account'],
    Compoundv2Types.SubscriptionaccountArgs,
    MeshContext
  >
  /**  **/
  accounts: InContextSdkMethod<
    Compoundv2Types.Subscription['accounts'],
    Compoundv2Types.SubscriptionaccountsArgs,
    MeshContext
  >
  /**  **/
  accountCToken: InContextSdkMethod<
    Compoundv2Types.Subscription['accountCToken'],
    Compoundv2Types.SubscriptionaccountCTokenArgs,
    MeshContext
  >
  /**  **/
  accountCTokens: InContextSdkMethod<
    Compoundv2Types.Subscription['accountCTokens'],
    Compoundv2Types.SubscriptionaccountCTokensArgs,
    MeshContext
  >
  /**  **/
  accountCTokenTransaction: InContextSdkMethod<
    Compoundv2Types.Subscription['accountCTokenTransaction'],
    Compoundv2Types.SubscriptionaccountCTokenTransactionArgs,
    MeshContext
  >
  /**  **/
  accountCTokenTransactions: InContextSdkMethod<
    Compoundv2Types.Subscription['accountCTokenTransactions'],
    Compoundv2Types.SubscriptionaccountCTokenTransactionsArgs,
    MeshContext
  >
  /**  **/
  transferEvent: InContextSdkMethod<
    Compoundv2Types.Subscription['transferEvent'],
    Compoundv2Types.SubscriptiontransferEventArgs,
    MeshContext
  >
  /**  **/
  transferEvents: InContextSdkMethod<
    Compoundv2Types.Subscription['transferEvents'],
    Compoundv2Types.SubscriptiontransferEventsArgs,
    MeshContext
  >
  /**  **/
  mintEvent: InContextSdkMethod<
    Compoundv2Types.Subscription['mintEvent'],
    Compoundv2Types.SubscriptionmintEventArgs,
    MeshContext
  >
  /**  **/
  mintEvents: InContextSdkMethod<
    Compoundv2Types.Subscription['mintEvents'],
    Compoundv2Types.SubscriptionmintEventsArgs,
    MeshContext
  >
  /**  **/
  redeemEvent: InContextSdkMethod<
    Compoundv2Types.Subscription['redeemEvent'],
    Compoundv2Types.SubscriptionredeemEventArgs,
    MeshContext
  >
  /**  **/
  redeemEvents: InContextSdkMethod<
    Compoundv2Types.Subscription['redeemEvents'],
    Compoundv2Types.SubscriptionredeemEventsArgs,
    MeshContext
  >
  /**  **/
  liquidationEvent: InContextSdkMethod<
    Compoundv2Types.Subscription['liquidationEvent'],
    Compoundv2Types.SubscriptionliquidationEventArgs,
    MeshContext
  >
  /**  **/
  liquidationEvents: InContextSdkMethod<
    Compoundv2Types.Subscription['liquidationEvents'],
    Compoundv2Types.SubscriptionliquidationEventsArgs,
    MeshContext
  >
  /**  **/
  borrowEvent: InContextSdkMethod<
    Compoundv2Types.Subscription['borrowEvent'],
    Compoundv2Types.SubscriptionborrowEventArgs,
    MeshContext
  >
  /**  **/
  borrowEvents: InContextSdkMethod<
    Compoundv2Types.Subscription['borrowEvents'],
    Compoundv2Types.SubscriptionborrowEventsArgs,
    MeshContext
  >
  /**  **/
  repayEvent: InContextSdkMethod<
    Compoundv2Types.Subscription['repayEvent'],
    Compoundv2Types.SubscriptionrepayEventArgs,
    MeshContext
  >
  /**  **/
  repayEvents: InContextSdkMethod<
    Compoundv2Types.Subscription['repayEvents'],
    Compoundv2Types.SubscriptionrepayEventsArgs,
    MeshContext
  >
  /**  **/
  ctokenTransfer: InContextSdkMethod<
    Compoundv2Types.Subscription['ctokenTransfer'],
    Compoundv2Types.SubscriptionctokenTransferArgs,
    MeshContext
  >
  /**  **/
  ctokenTransfers: InContextSdkMethod<
    Compoundv2Types.Subscription['ctokenTransfers'],
    Compoundv2Types.SubscriptionctokenTransfersArgs,
    MeshContext
  >
  /**  **/
  underlyingTransfer: InContextSdkMethod<
    Compoundv2Types.Subscription['underlyingTransfer'],
    Compoundv2Types.SubscriptionunderlyingTransferArgs,
    MeshContext
  >
  /**  **/
  underlyingTransfers: InContextSdkMethod<
    Compoundv2Types.Subscription['underlyingTransfers'],
    Compoundv2Types.SubscriptionunderlyingTransfersArgs,
    MeshContext
  >
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Compoundv2Types.Subscription['_meta'], Compoundv2Types.Subscription_metaArgs, MeshContext>
}

export type Uniswapv2Context = {
  ['uniswapv2']: { Query: QueryUniswapv2Sdk; Mutation: MutationUniswapv2Sdk; Subscription: SubscriptionUniswapv2Sdk }
}

export type Compoundv2Context = {
  ['compoundv2']: {
    Query: QueryCompoundv2Sdk
    Mutation: MutationCompoundv2Sdk
    Subscription: SubscriptionCompoundv2Sdk
  }
}

export type MeshContext = Uniswapv2Context & Compoundv2Context & BaseMeshContext

import { getMesh } from '@graphql-mesh/runtime'
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store'
import { join, relative, isAbsolute, dirname } from 'path'
import { fileURLToPath } from 'url'
import ExternalModule_0 from '@graphql-mesh/cache-inmemory-lru'
import ExternalModule_1 from '@graphql-mesh/graphql'
import ExternalModule_2 from '@graphql-mesh/merger-stitching'
import ExternalModule_3 from './sources/uniswapv2/schema.graphql.ts'
import ExternalModule_4 from './sources/compoundv2/schema.graphql.ts'

const importedModules: Record<string, any> = {
  // @ts-ignore
  ['@graphql-mesh/cache-inmemory-lru']: ExternalModule_0,
  // @ts-ignore
  ['@graphql-mesh/graphql']: ExternalModule_1,
  // @ts-ignore
  ['@graphql-mesh/merger-stitching']: ExternalModule_2,
  // @ts-ignore
  ['.graphclient/sources/uniswapv2/schema.graphql.ts']: ExternalModule_3,
  // @ts-ignore
  ['.graphclient/sources/compoundv2/schema.graphql.ts']: ExternalModule_4,
}

const baseDir = join(import.meta.url, '..')

const importFn = (moduleId: string) => {
  const relativeModuleId = (isAbsolute(moduleId) ? relative(baseDir, moduleId) : moduleId)
    .split('\\')
    .join('/')
    .replace(baseDir + '/', '')
  if (!(relativeModuleId in importedModules)) {
    throw new Error(`Cannot find module '${relativeModuleId}'.`)
  }
  return Promise.resolve(importedModules[relativeModuleId])
}

const rootStore = new MeshStore(
  '.graphclient',
  new FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
  }),
  {
    readonly: true,
    validate: false,
  },
)

import { GetMeshOptions } from '@graphql-mesh/runtime'
import { YamlConfig } from '@graphql-mesh/types'
import { parse } from 'graphql'
import MeshCache from '@graphql-mesh/cache-inmemory-lru'
import { PubSub } from '@graphql-mesh/utils'
import { DefaultLogger } from '@graphql-mesh/utils'
import GraphqlHandler from '@graphql-mesh/graphql'
import StitchingMerger from '@graphql-mesh/merger-stitching'
import { resolveAdditionalResolvers } from '@graphql-mesh/utils'
export const rawConfig: YamlConfig.Config = {
  sources: [
    {
      name: 'uniswapv2',
      handler: { graphql: { endpoint: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2' } },
    },
    {
      name: 'compoundv2',
      handler: { graphql: { endpoint: 'https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2' } },
    },
  ],
} as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
  const cache = new (MeshCache as any)({
    ...(rawConfig.cache || {}),
    importFn,
    store: rootStore.child('cache'),
  } as any)
  const pubsub = new PubSub()
  const sourcesStore = rootStore.child('sources')
  const logger = new DefaultLogger('🕸️')
  const sources = []
  const transforms = []
  const uniswapv2Transforms = []
  const compoundv2Transforms = []
  const additionalTypeDefs: DocumentNode[] = [] as any[]
  const uniswapv2Handler = new GraphqlHandler({
    name: rawConfig.sources[0].name,
    config: rawConfig.sources[0].handler['graphql'],
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child(rawConfig.sources[0].name),
    logger: logger.child(rawConfig.sources[0].name),
    importFn,
  })
  const compoundv2Handler = new GraphqlHandler({
    name: rawConfig.sources[1].name,
    config: rawConfig.sources[1].handler['graphql'],
    baseDir,
    cache,
    pubsub,
    store: sourcesStore.child(rawConfig.sources[1].name),
    logger: logger.child(rawConfig.sources[1].name),
    importFn,
  })
  sources.push({
    name: 'uniswapv2',
    handler: uniswapv2Handler,
    transforms: uniswapv2Transforms,
  })
  sources.push({
    name: 'compoundv2',
    handler: compoundv2Handler,
    transforms: compoundv2Transforms,
  })
  const merger = new (StitchingMerger as any)({
    cache,
    pubsub,
    logger: logger.child('StitchingMerger'),
    store: rootStore.child('stitchingMerger'),
  })
  const additionalResolversRawConfig = []
  const additionalResolvers = await resolveAdditionalResolvers(baseDir, additionalResolversRawConfig, importFn, pubsub)
  const liveQueryInvalidations = rawConfig.liveQueryInvalidations
  const additionalEnvelopPlugins = []

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    liveQueryInvalidations,
    additionalEnvelopPlugins,
  }
}

export const documentsInSDL = /*#__PURE__*/ []

export async function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  const meshConfig = await getMeshOptions()
  return getMesh<MeshContext>(meshConfig)
}

export async function getBuiltGraphSDK<
  TGlobalContext = any,
  TGlobalRoot = any,
  TOperationContext = any,
  TOperationRoot = any,
>(sdkOptions?: SdkOptions<TGlobalContext, TGlobalRoot>) {
  const { schema } = await getBuiltGraphClient()
  return getSdk<TGlobalContext, TGlobalRoot, TOperationContext, TOperationRoot>(schema, sdkOptions)
}

function handleExecutionResult<T>(result: ExecutionResult, operationName: string) {
  if (result.errors) {
    const originalErrors = result.errors.map((error) => error.originalError || error)
    throw new AggregateError(originalErrors, `Failed to execute ${operationName}: \n\t${originalErrors.join('\n\t')}`)
  }
  return result.data as unknown as T
}
export interface SdkOptions<TGlobalContext = any, TGlobalRoot = any> {
  globalContext?: TGlobalContext
  globalRoot?: TGlobalRoot
  jitOptions?: Partial<CompilerOptions>
}
export function getSdk<TGlobalContext = any, TGlobalRoot = any, TOperationContext = any, TOperationRoot = any>(
  schema: GraphQLSchema,
  { globalContext, globalRoot, jitOptions = {} }: SdkOptions<TGlobalContext, TGlobalRoot> = {},
) {
  return {}
}
export type Sdk = ReturnType<typeof getSdk>
