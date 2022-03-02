import { buildSchema, Source } from 'graphql'

const source = new Source(
  /* GraphQL */ `
    schema {
      query: Query
      subscription: Subscription
    }

    type Query {
      comptroller(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Comptroller
      comptrollers(
        skip: Int = 0
        first: Int = 100
        orderBy: Comptroller_orderBy
        orderDirection: OrderDirection
        where: Comptroller_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Comptroller!]!
      market(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Market
      markets(
        skip: Int = 0
        first: Int = 100
        orderBy: Market_orderBy
        orderDirection: OrderDirection
        where: Market_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Market!]!
      account(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Account
      accounts(
        skip: Int = 0
        first: Int = 100
        orderBy: Account_orderBy
        orderDirection: OrderDirection
        where: Account_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Account!]!
      accountCToken(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): AccountCToken
      accountCTokens(
        skip: Int = 0
        first: Int = 100
        orderBy: AccountCToken_orderBy
        orderDirection: OrderDirection
        where: AccountCToken_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [AccountCToken!]!
      accountCTokenTransaction(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): AccountCTokenTransaction
      accountCTokenTransactions(
        skip: Int = 0
        first: Int = 100
        orderBy: AccountCTokenTransaction_orderBy
        orderDirection: OrderDirection
        where: AccountCTokenTransaction_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [AccountCTokenTransaction!]!
      transferEvent(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): TransferEvent
      transferEvents(
        skip: Int = 0
        first: Int = 100
        orderBy: TransferEvent_orderBy
        orderDirection: OrderDirection
        where: TransferEvent_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [TransferEvent!]!
      mintEvent(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): MintEvent
      mintEvents(
        skip: Int = 0
        first: Int = 100
        orderBy: MintEvent_orderBy
        orderDirection: OrderDirection
        where: MintEvent_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [MintEvent!]!
      redeemEvent(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): RedeemEvent
      redeemEvents(
        skip: Int = 0
        first: Int = 100
        orderBy: RedeemEvent_orderBy
        orderDirection: OrderDirection
        where: RedeemEvent_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [RedeemEvent!]!
      liquidationEvent(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): LiquidationEvent
      liquidationEvents(
        skip: Int = 0
        first: Int = 100
        orderBy: LiquidationEvent_orderBy
        orderDirection: OrderDirection
        where: LiquidationEvent_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [LiquidationEvent!]!
      borrowEvent(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): BorrowEvent
      borrowEvents(
        skip: Int = 0
        first: Int = 100
        orderBy: BorrowEvent_orderBy
        orderDirection: OrderDirection
        where: BorrowEvent_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [BorrowEvent!]!
      repayEvent(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): RepayEvent
      repayEvents(
        skip: Int = 0
        first: Int = 100
        orderBy: RepayEvent_orderBy
        orderDirection: OrderDirection
        where: RepayEvent_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [RepayEvent!]!
      ctokenTransfer(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): CTokenTransfer
      ctokenTransfers(
        skip: Int = 0
        first: Int = 100
        orderBy: CTokenTransfer_orderBy
        orderDirection: OrderDirection
        where: CTokenTransfer_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [CTokenTransfer!]!
      underlyingTransfer(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): UnderlyingTransfer
      underlyingTransfers(
        skip: Int = 0
        first: Int = 100
        orderBy: UnderlyingTransfer_orderBy
        orderDirection: OrderDirection
        where: UnderlyingTransfer_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [UnderlyingTransfer!]!
      """
      Access to subgraph metadata
      """
      _meta(block: Block_height): _Meta_
    }

    input Block_height {
      hash: Bytes
      number: Int
      number_gte: Int
    }

    scalar Bytes

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

    """
    The Comptroller type has protocol level variables stored
    """
    type Comptroller {
      """
      ID is set to 1
      """
      id: ID!
      """
      Address of price oracle the comptroller uses
      """
      priceOracle: Bytes
      """
      Factor used to determine repayAmount for liquidating
      """
      closeFactor: BigInt
      """
      The percent bonus liquidators get for liquidating
      """
      liquidationIncentive: BigInt
      """
      Max assets a single user can enter
      """
      maxAssets: BigInt
    }

    scalar BigInt

    enum Comptroller_orderBy {
      id
      priceOracle
      closeFactor
      liquidationIncentive
      maxAssets
    }

    enum OrderDirection {
      asc
      desc
    }

    input Comptroller_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      priceOracle: Bytes
      priceOracle_not: Bytes
      priceOracle_in: [Bytes!]
      priceOracle_not_in: [Bytes!]
      priceOracle_contains: Bytes
      priceOracle_not_contains: Bytes
      closeFactor: BigInt
      closeFactor_not: BigInt
      closeFactor_gt: BigInt
      closeFactor_lt: BigInt
      closeFactor_gte: BigInt
      closeFactor_lte: BigInt
      closeFactor_in: [BigInt!]
      closeFactor_not_in: [BigInt!]
      liquidationIncentive: BigInt
      liquidationIncentive_not: BigInt
      liquidationIncentive_gt: BigInt
      liquidationIncentive_lt: BigInt
      liquidationIncentive_gte: BigInt
      liquidationIncentive_lte: BigInt
      liquidationIncentive_in: [BigInt!]
      liquidationIncentive_not_in: [BigInt!]
      maxAssets: BigInt
      maxAssets_not: BigInt
      maxAssets_gt: BigInt
      maxAssets_lt: BigInt
      maxAssets_gte: BigInt
      maxAssets_lte: BigInt
      maxAssets_in: [BigInt!]
      maxAssets_not_in: [BigInt!]
    }

    """
    Market stores all high level variables for a cToken market
    """
    type Market {
      """
      Yearly borrow rate. With 2102400 blocks per year
      """
      borrowRate: BigDecimal!
      """
      The cToken contract balance of ERC20 or ETH
      """
      cash: BigDecimal!
      """
      Collateral factor determining how much one can borrow
      """
      collateralFactor: BigDecimal!
      """
      Exchange rate of tokens / cTokens
      """
      exchangeRate: BigDecimal!
      """
      Address of the interest rate model
      """
      interestRateModelAddress: Bytes!
      """
      Name of the cToken
      """
      name: String!
      """
      Reserves stored in the contract
      """
      reserves: BigDecimal!
      """
      Yearly supply rate. With 2104400 blocks per year
      """
      supplyRate: BigDecimal!
      """
      CToken symbol
      """
      symbol: String!
      """
      CToken address
      """
      id: ID!
      """
      Borrows in the market
      """
      totalBorrows: BigDecimal!
      """
      CToken supply. CTokens have 8 decimals
      """
      totalSupply: BigDecimal!
      """
      Underlying token address
      """
      underlyingAddress: Bytes!
      """
      Underlying token name
      """
      underlyingName: String!
      """
      Underlying price of token in ETH (ex. 0.007 DAI)
      """
      underlyingPrice: BigDecimal!
      """
      Underlying token symbol
      """
      underlyingSymbol: String!
      """
      Block the market is updated to
      """
      accrualBlockNumber: Int!
      """
      Timestamp the market was most recently updated
      """
      blockTimestamp: Int!
      """
      The history of the markets borrow index return (Think S&P 500)
      """
      borrowIndex: BigDecimal!
      """
      The factor determining interest that goes to reserves
      """
      reserveFactor: BigInt!
      """
      Underlying token price in USD
      """
      underlyingPriceUSD: BigDecimal!
      """
      Underlying token decimal length
      """
      underlyingDecimals: Int!
    }

    scalar BigDecimal

    enum Market_orderBy {
      borrowRate
      cash
      collateralFactor
      exchangeRate
      interestRateModelAddress
      name
      reserves
      supplyRate
      symbol
      id
      totalBorrows
      totalSupply
      underlyingAddress
      underlyingName
      underlyingPrice
      underlyingSymbol
      accrualBlockNumber
      blockTimestamp
      borrowIndex
      reserveFactor
      underlyingPriceUSD
      underlyingDecimals
    }

    input Market_filter {
      borrowRate: BigDecimal
      borrowRate_not: BigDecimal
      borrowRate_gt: BigDecimal
      borrowRate_lt: BigDecimal
      borrowRate_gte: BigDecimal
      borrowRate_lte: BigDecimal
      borrowRate_in: [BigDecimal!]
      borrowRate_not_in: [BigDecimal!]
      cash: BigDecimal
      cash_not: BigDecimal
      cash_gt: BigDecimal
      cash_lt: BigDecimal
      cash_gte: BigDecimal
      cash_lte: BigDecimal
      cash_in: [BigDecimal!]
      cash_not_in: [BigDecimal!]
      collateralFactor: BigDecimal
      collateralFactor_not: BigDecimal
      collateralFactor_gt: BigDecimal
      collateralFactor_lt: BigDecimal
      collateralFactor_gte: BigDecimal
      collateralFactor_lte: BigDecimal
      collateralFactor_in: [BigDecimal!]
      collateralFactor_not_in: [BigDecimal!]
      exchangeRate: BigDecimal
      exchangeRate_not: BigDecimal
      exchangeRate_gt: BigDecimal
      exchangeRate_lt: BigDecimal
      exchangeRate_gte: BigDecimal
      exchangeRate_lte: BigDecimal
      exchangeRate_in: [BigDecimal!]
      exchangeRate_not_in: [BigDecimal!]
      interestRateModelAddress: Bytes
      interestRateModelAddress_not: Bytes
      interestRateModelAddress_in: [Bytes!]
      interestRateModelAddress_not_in: [Bytes!]
      interestRateModelAddress_contains: Bytes
      interestRateModelAddress_not_contains: Bytes
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
      reserves: BigDecimal
      reserves_not: BigDecimal
      reserves_gt: BigDecimal
      reserves_lt: BigDecimal
      reserves_gte: BigDecimal
      reserves_lte: BigDecimal
      reserves_in: [BigDecimal!]
      reserves_not_in: [BigDecimal!]
      supplyRate: BigDecimal
      supplyRate_not: BigDecimal
      supplyRate_gt: BigDecimal
      supplyRate_lt: BigDecimal
      supplyRate_gte: BigDecimal
      supplyRate_lte: BigDecimal
      supplyRate_in: [BigDecimal!]
      supplyRate_not_in: [BigDecimal!]
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
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      totalBorrows: BigDecimal
      totalBorrows_not: BigDecimal
      totalBorrows_gt: BigDecimal
      totalBorrows_lt: BigDecimal
      totalBorrows_gte: BigDecimal
      totalBorrows_lte: BigDecimal
      totalBorrows_in: [BigDecimal!]
      totalBorrows_not_in: [BigDecimal!]
      totalSupply: BigDecimal
      totalSupply_not: BigDecimal
      totalSupply_gt: BigDecimal
      totalSupply_lt: BigDecimal
      totalSupply_gte: BigDecimal
      totalSupply_lte: BigDecimal
      totalSupply_in: [BigDecimal!]
      totalSupply_not_in: [BigDecimal!]
      underlyingAddress: Bytes
      underlyingAddress_not: Bytes
      underlyingAddress_in: [Bytes!]
      underlyingAddress_not_in: [Bytes!]
      underlyingAddress_contains: Bytes
      underlyingAddress_not_contains: Bytes
      underlyingName: String
      underlyingName_not: String
      underlyingName_gt: String
      underlyingName_lt: String
      underlyingName_gte: String
      underlyingName_lte: String
      underlyingName_in: [String!]
      underlyingName_not_in: [String!]
      underlyingName_contains: String
      underlyingName_not_contains: String
      underlyingName_starts_with: String
      underlyingName_not_starts_with: String
      underlyingName_ends_with: String
      underlyingName_not_ends_with: String
      underlyingPrice: BigDecimal
      underlyingPrice_not: BigDecimal
      underlyingPrice_gt: BigDecimal
      underlyingPrice_lt: BigDecimal
      underlyingPrice_gte: BigDecimal
      underlyingPrice_lte: BigDecimal
      underlyingPrice_in: [BigDecimal!]
      underlyingPrice_not_in: [BigDecimal!]
      underlyingSymbol: String
      underlyingSymbol_not: String
      underlyingSymbol_gt: String
      underlyingSymbol_lt: String
      underlyingSymbol_gte: String
      underlyingSymbol_lte: String
      underlyingSymbol_in: [String!]
      underlyingSymbol_not_in: [String!]
      underlyingSymbol_contains: String
      underlyingSymbol_not_contains: String
      underlyingSymbol_starts_with: String
      underlyingSymbol_not_starts_with: String
      underlyingSymbol_ends_with: String
      underlyingSymbol_not_ends_with: String
      accrualBlockNumber: Int
      accrualBlockNumber_not: Int
      accrualBlockNumber_gt: Int
      accrualBlockNumber_lt: Int
      accrualBlockNumber_gte: Int
      accrualBlockNumber_lte: Int
      accrualBlockNumber_in: [Int!]
      accrualBlockNumber_not_in: [Int!]
      blockTimestamp: Int
      blockTimestamp_not: Int
      blockTimestamp_gt: Int
      blockTimestamp_lt: Int
      blockTimestamp_gte: Int
      blockTimestamp_lte: Int
      blockTimestamp_in: [Int!]
      blockTimestamp_not_in: [Int!]
      borrowIndex: BigDecimal
      borrowIndex_not: BigDecimal
      borrowIndex_gt: BigDecimal
      borrowIndex_lt: BigDecimal
      borrowIndex_gte: BigDecimal
      borrowIndex_lte: BigDecimal
      borrowIndex_in: [BigDecimal!]
      borrowIndex_not_in: [BigDecimal!]
      reserveFactor: BigInt
      reserveFactor_not: BigInt
      reserveFactor_gt: BigInt
      reserveFactor_lt: BigInt
      reserveFactor_gte: BigInt
      reserveFactor_lte: BigInt
      reserveFactor_in: [BigInt!]
      reserveFactor_not_in: [BigInt!]
      underlyingPriceUSD: BigDecimal
      underlyingPriceUSD_not: BigDecimal
      underlyingPriceUSD_gt: BigDecimal
      underlyingPriceUSD_lt: BigDecimal
      underlyingPriceUSD_gte: BigDecimal
      underlyingPriceUSD_lte: BigDecimal
      underlyingPriceUSD_in: [BigDecimal!]
      underlyingPriceUSD_not_in: [BigDecimal!]
      underlyingDecimals: Int
      underlyingDecimals_not: Int
      underlyingDecimals_gt: Int
      underlyingDecimals_lt: Int
      underlyingDecimals_gte: Int
      underlyingDecimals_lte: Int
      underlyingDecimals_in: [Int!]
      underlyingDecimals_not_in: [Int!]
    }

    """
    Account is an ETH address, with a list of all cToken markets the account has
    participated in, along with liquidation information.
    """
    type Account {
      """
      User ETH address
      """
      id: ID!
      """
      Array of CTokens user is in
      """
      tokens(
        skip: Int = 0
        first: Int = 100
        orderBy: AccountCToken_orderBy
        orderDirection: OrderDirection
        where: AccountCToken_filter
      ): [AccountCToken!]!
      """
      Count user has been liquidated
      """
      countLiquidated: Int!
      """
      Count user has liquidated others
      """
      countLiquidator: Int!
      """
      True if user has ever borrowed
      """
      hasBorrowed: Boolean!
      health: BigDecimal
      totalBorrowValueInEth: BigDecimal!
      totalCollateralValueInEth: BigDecimal!
    }

    enum AccountCToken_orderBy {
      id
      market
      symbol
      account
      transactions
      accrualBlockNumber
      enteredMarket
      cTokenBalance
      totalUnderlyingSupplied
      totalUnderlyingRedeemed
      accountBorrowIndex
      totalUnderlyingBorrowed
      totalUnderlyingRepaid
      storedBorrowBalance
    }

    input AccountCToken_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      market: String
      market_not: String
      market_gt: String
      market_lt: String
      market_gte: String
      market_lte: String
      market_in: [String!]
      market_not_in: [String!]
      market_contains: String
      market_not_contains: String
      market_starts_with: String
      market_not_starts_with: String
      market_ends_with: String
      market_not_ends_with: String
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
      account: String
      account_not: String
      account_gt: String
      account_lt: String
      account_gte: String
      account_lte: String
      account_in: [String!]
      account_not_in: [String!]
      account_contains: String
      account_not_contains: String
      account_starts_with: String
      account_not_starts_with: String
      account_ends_with: String
      account_not_ends_with: String
      accrualBlockNumber: BigInt
      accrualBlockNumber_not: BigInt
      accrualBlockNumber_gt: BigInt
      accrualBlockNumber_lt: BigInt
      accrualBlockNumber_gte: BigInt
      accrualBlockNumber_lte: BigInt
      accrualBlockNumber_in: [BigInt!]
      accrualBlockNumber_not_in: [BigInt!]
      enteredMarket: Boolean
      enteredMarket_not: Boolean
      enteredMarket_in: [Boolean!]
      enteredMarket_not_in: [Boolean!]
      cTokenBalance: BigDecimal
      cTokenBalance_not: BigDecimal
      cTokenBalance_gt: BigDecimal
      cTokenBalance_lt: BigDecimal
      cTokenBalance_gte: BigDecimal
      cTokenBalance_lte: BigDecimal
      cTokenBalance_in: [BigDecimal!]
      cTokenBalance_not_in: [BigDecimal!]
      totalUnderlyingSupplied: BigDecimal
      totalUnderlyingSupplied_not: BigDecimal
      totalUnderlyingSupplied_gt: BigDecimal
      totalUnderlyingSupplied_lt: BigDecimal
      totalUnderlyingSupplied_gte: BigDecimal
      totalUnderlyingSupplied_lte: BigDecimal
      totalUnderlyingSupplied_in: [BigDecimal!]
      totalUnderlyingSupplied_not_in: [BigDecimal!]
      totalUnderlyingRedeemed: BigDecimal
      totalUnderlyingRedeemed_not: BigDecimal
      totalUnderlyingRedeemed_gt: BigDecimal
      totalUnderlyingRedeemed_lt: BigDecimal
      totalUnderlyingRedeemed_gte: BigDecimal
      totalUnderlyingRedeemed_lte: BigDecimal
      totalUnderlyingRedeemed_in: [BigDecimal!]
      totalUnderlyingRedeemed_not_in: [BigDecimal!]
      accountBorrowIndex: BigDecimal
      accountBorrowIndex_not: BigDecimal
      accountBorrowIndex_gt: BigDecimal
      accountBorrowIndex_lt: BigDecimal
      accountBorrowIndex_gte: BigDecimal
      accountBorrowIndex_lte: BigDecimal
      accountBorrowIndex_in: [BigDecimal!]
      accountBorrowIndex_not_in: [BigDecimal!]
      totalUnderlyingBorrowed: BigDecimal
      totalUnderlyingBorrowed_not: BigDecimal
      totalUnderlyingBorrowed_gt: BigDecimal
      totalUnderlyingBorrowed_lt: BigDecimal
      totalUnderlyingBorrowed_gte: BigDecimal
      totalUnderlyingBorrowed_lte: BigDecimal
      totalUnderlyingBorrowed_in: [BigDecimal!]
      totalUnderlyingBorrowed_not_in: [BigDecimal!]
      totalUnderlyingRepaid: BigDecimal
      totalUnderlyingRepaid_not: BigDecimal
      totalUnderlyingRepaid_gt: BigDecimal
      totalUnderlyingRepaid_lt: BigDecimal
      totalUnderlyingRepaid_gte: BigDecimal
      totalUnderlyingRepaid_lte: BigDecimal
      totalUnderlyingRepaid_in: [BigDecimal!]
      totalUnderlyingRepaid_not_in: [BigDecimal!]
      storedBorrowBalance: BigDecimal
      storedBorrowBalance_not: BigDecimal
      storedBorrowBalance_gt: BigDecimal
      storedBorrowBalance_lt: BigDecimal
      storedBorrowBalance_gte: BigDecimal
      storedBorrowBalance_lte: BigDecimal
      storedBorrowBalance_in: [BigDecimal!]
      storedBorrowBalance_not_in: [BigDecimal!]
    }

    """
    AccountCToken is a single account within a single cToken market, with data such
    as interest earned or paid
    """
    type AccountCToken {
      """
      Concatenation of CToken address and user address
      """
      id: ID!
      """
      Relation to market
      """
      market: Market!
      """
      Symbol of the cToken
      """
      symbol: String!
      """
      Relation to user
      """
      account: Account!
      """
      Transactions data
      """
      transactions(
        skip: Int = 0
        first: Int = 100
        orderBy: AccountCTokenTransaction_orderBy
        orderDirection: OrderDirection
        where: AccountCTokenTransaction_filter
      ): [AccountCTokenTransaction!]!
      """
      Block number this asset was updated at in the contract
      """
      accrualBlockNumber: BigInt!
      """
      True if user is entered, false if they are exited
      """
      enteredMarket: Boolean!
      """
      CToken balance of the user
      """
      cTokenBalance: BigDecimal!
      """
      Total amount of underlying supplied
      """
      totalUnderlyingSupplied: BigDecimal!
      """
      Total amount of underling redeemed
      """
      totalUnderlyingRedeemed: BigDecimal!
      """
      The value of the borrow index upon users last interaction
      """
      accountBorrowIndex: BigDecimal!
      """
      Total amount underlying borrowed, exclusive of interest
      """
      totalUnderlyingBorrowed: BigDecimal!
      """
      Total amount underlying repaid
      """
      totalUnderlyingRepaid: BigDecimal!
      """
      Current borrow balance stored in contract (exclusive of interest since accrualBlockNumber)
      """
      storedBorrowBalance: BigDecimal!
      supplyBalanceUnderlying: BigDecimal!
      lifetimeSupplyInterestAccrued: BigDecimal!
      borrowBalanceUnderlying: BigDecimal!
      lifetimeBorrowInterestAccrued: BigDecimal!
    }

    enum AccountCTokenTransaction_orderBy {
      id
      account
      tx_hash
      timestamp
      block
      logIndex
    }

    input AccountCTokenTransaction_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      account: String
      account_not: String
      account_gt: String
      account_lt: String
      account_gte: String
      account_lte: String
      account_in: [String!]
      account_not_in: [String!]
      account_contains: String
      account_not_contains: String
      account_starts_with: String
      account_not_starts_with: String
      account_ends_with: String
      account_not_ends_with: String
      tx_hash: Bytes
      tx_hash_not: Bytes
      tx_hash_in: [Bytes!]
      tx_hash_not_in: [Bytes!]
      tx_hash_contains: Bytes
      tx_hash_not_contains: Bytes
      timestamp: BigInt
      timestamp_not: BigInt
      timestamp_gt: BigInt
      timestamp_lt: BigInt
      timestamp_gte: BigInt
      timestamp_lte: BigInt
      timestamp_in: [BigInt!]
      timestamp_not_in: [BigInt!]
      block: BigInt
      block_not: BigInt
      block_gt: BigInt
      block_lt: BigInt
      block_gte: BigInt
      block_lte: BigInt
      block_in: [BigInt!]
      block_not_in: [BigInt!]
      logIndex: BigInt
      logIndex_not: BigInt
      logIndex_gt: BigInt
      logIndex_lt: BigInt
      logIndex_gte: BigInt
      logIndex_lte: BigInt
      logIndex_in: [BigInt!]
      logIndex_not_in: [BigInt!]
    }

    """
    Auxiliary entity for AccountCToken
    """
    type AccountCTokenTransaction {
      id: ID!
      account: AccountCToken!
      tx_hash: Bytes!
      timestamp: BigInt!
      block: BigInt!
      logIndex: BigInt!
    }

    enum Account_orderBy {
      id
      tokens
      countLiquidated
      countLiquidator
      hasBorrowed
    }

    input Account_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      countLiquidated: Int
      countLiquidated_not: Int
      countLiquidated_gt: Int
      countLiquidated_lt: Int
      countLiquidated_gte: Int
      countLiquidated_lte: Int
      countLiquidated_in: [Int!]
      countLiquidated_not_in: [Int!]
      countLiquidator: Int
      countLiquidator_not: Int
      countLiquidator_gt: Int
      countLiquidator_lt: Int
      countLiquidator_gte: Int
      countLiquidator_lte: Int
      countLiquidator_in: [Int!]
      countLiquidator_not_in: [Int!]
      hasBorrowed: Boolean
      hasBorrowed_not: Boolean
      hasBorrowed_in: [Boolean!]
      hasBorrowed_not_in: [Boolean!]
    }

    """
    TransferEvent will be stored for every mint, redeem, liquidation, and any normal
    transfer between two accounts.
    """
    type TransferEvent implements CTokenTransfer {
      """
      Transaction hash concatenated with log index
      """
      id: ID!
      """
      cTokens transferred
      """
      amount: BigDecimal!
      """
      Account that received tokens
      """
      to: Bytes!
      """
      Account that sent tokens
      """
      from: Bytes!
      """
      Block number
      """
      blockNumber: Int!
      """
      Block time
      """
      blockTime: Int!
      """
      Symbol of the cToken transferred
      """
      cTokenSymbol: String!
    }

    """
    An interface for a transfer of any cToken. TransferEvent, MintEvent,
    RedeemEvent, and LiquidationEvent all use this interface
    """
    interface CTokenTransfer {
      """
      Transaction hash concatenated with log index
      """
      id: ID!
      """
      cTokens transferred
      """
      amount: BigDecimal!
      """
      Account that received tokens
      """
      to: Bytes!
      """
      Account that sent tokens
      """
      from: Bytes!
      """
      Block number
      """
      blockNumber: Int!
      """
      Block time
      """
      blockTime: Int!
      """
      Symbol of the cToken transferred
      """
      cTokenSymbol: String!
    }

    enum TransferEvent_orderBy {
      id
      amount
      to
      from
      blockNumber
      blockTime
      cTokenSymbol
    }

    input TransferEvent_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      amount: BigDecimal
      amount_not: BigDecimal
      amount_gt: BigDecimal
      amount_lt: BigDecimal
      amount_gte: BigDecimal
      amount_lte: BigDecimal
      amount_in: [BigDecimal!]
      amount_not_in: [BigDecimal!]
      to: Bytes
      to_not: Bytes
      to_in: [Bytes!]
      to_not_in: [Bytes!]
      to_contains: Bytes
      to_not_contains: Bytes
      from: Bytes
      from_not: Bytes
      from_in: [Bytes!]
      from_not_in: [Bytes!]
      from_contains: Bytes
      from_not_contains: Bytes
      blockNumber: Int
      blockNumber_not: Int
      blockNumber_gt: Int
      blockNumber_lt: Int
      blockNumber_gte: Int
      blockNumber_lte: Int
      blockNumber_in: [Int!]
      blockNumber_not_in: [Int!]
      blockTime: Int
      blockTime_not: Int
      blockTime_gt: Int
      blockTime_lt: Int
      blockTime_gte: Int
      blockTime_lte: Int
      blockTime_in: [Int!]
      blockTime_not_in: [Int!]
      cTokenSymbol: String
      cTokenSymbol_not: String
      cTokenSymbol_gt: String
      cTokenSymbol_lt: String
      cTokenSymbol_gte: String
      cTokenSymbol_lte: String
      cTokenSymbol_in: [String!]
      cTokenSymbol_not_in: [String!]
      cTokenSymbol_contains: String
      cTokenSymbol_not_contains: String
      cTokenSymbol_starts_with: String
      cTokenSymbol_not_starts_with: String
      cTokenSymbol_ends_with: String
      cTokenSymbol_not_ends_with: String
    }

    """
    MintEvent stores information for mints. From address will always be a cToken
    market address
    """
    type MintEvent implements CTokenTransfer {
      """
      Transaction hash concatenated with log index
      """
      id: ID!
      """
      cTokens transferred
      """
      amount: BigDecimal!
      """
      Account that received tokens (minter)
      """
      to: Bytes!
      """
      Account that sent tokens (CToken contract)
      """
      from: Bytes!
      """
      Block number
      """
      blockNumber: Int!
      """
      Block time
      """
      blockTime: Int!
      """
      Symbol of the cToken transferred
      """
      cTokenSymbol: String!
      """
      Underlying token amount transferred
      """
      underlyingAmount: BigDecimal
    }

    enum MintEvent_orderBy {
      id
      amount
      to
      from
      blockNumber
      blockTime
      cTokenSymbol
      underlyingAmount
    }

    input MintEvent_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      amount: BigDecimal
      amount_not: BigDecimal
      amount_gt: BigDecimal
      amount_lt: BigDecimal
      amount_gte: BigDecimal
      amount_lte: BigDecimal
      amount_in: [BigDecimal!]
      amount_not_in: [BigDecimal!]
      to: Bytes
      to_not: Bytes
      to_in: [Bytes!]
      to_not_in: [Bytes!]
      to_contains: Bytes
      to_not_contains: Bytes
      from: Bytes
      from_not: Bytes
      from_in: [Bytes!]
      from_not_in: [Bytes!]
      from_contains: Bytes
      from_not_contains: Bytes
      blockNumber: Int
      blockNumber_not: Int
      blockNumber_gt: Int
      blockNumber_lt: Int
      blockNumber_gte: Int
      blockNumber_lte: Int
      blockNumber_in: [Int!]
      blockNumber_not_in: [Int!]
      blockTime: Int
      blockTime_not: Int
      blockTime_gt: Int
      blockTime_lt: Int
      blockTime_gte: Int
      blockTime_lte: Int
      blockTime_in: [Int!]
      blockTime_not_in: [Int!]
      cTokenSymbol: String
      cTokenSymbol_not: String
      cTokenSymbol_gt: String
      cTokenSymbol_lt: String
      cTokenSymbol_gte: String
      cTokenSymbol_lte: String
      cTokenSymbol_in: [String!]
      cTokenSymbol_not_in: [String!]
      cTokenSymbol_contains: String
      cTokenSymbol_not_contains: String
      cTokenSymbol_starts_with: String
      cTokenSymbol_not_starts_with: String
      cTokenSymbol_ends_with: String
      cTokenSymbol_not_ends_with: String
      underlyingAmount: BigDecimal
      underlyingAmount_not: BigDecimal
      underlyingAmount_gt: BigDecimal
      underlyingAmount_lt: BigDecimal
      underlyingAmount_gte: BigDecimal
      underlyingAmount_lte: BigDecimal
      underlyingAmount_in: [BigDecimal!]
      underlyingAmount_not_in: [BigDecimal!]
    }

    """
    RedeemEvent stores information for redeems. To address will always be a
    cToken market address
    """
    type RedeemEvent implements CTokenTransfer {
      """
      Transaction hash concatenated with log index
      """
      id: ID!
      """
      cTokens transferred
      """
      amount: BigDecimal!
      """
      Account that received tokens (CToken contract)
      """
      to: Bytes!
      """
      Account that sent tokens (redeemer)
      """
      from: Bytes!
      """
      Block number
      """
      blockNumber: Int!
      """
      Block time
      """
      blockTime: Int!
      """
      Symbol of the cToken transferred
      """
      cTokenSymbol: String!
      """
      Underlying token amount transferred
      """
      underlyingAmount: BigDecimal
    }

    enum RedeemEvent_orderBy {
      id
      amount
      to
      from
      blockNumber
      blockTime
      cTokenSymbol
      underlyingAmount
    }

    input RedeemEvent_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      amount: BigDecimal
      amount_not: BigDecimal
      amount_gt: BigDecimal
      amount_lt: BigDecimal
      amount_gte: BigDecimal
      amount_lte: BigDecimal
      amount_in: [BigDecimal!]
      amount_not_in: [BigDecimal!]
      to: Bytes
      to_not: Bytes
      to_in: [Bytes!]
      to_not_in: [Bytes!]
      to_contains: Bytes
      to_not_contains: Bytes
      from: Bytes
      from_not: Bytes
      from_in: [Bytes!]
      from_not_in: [Bytes!]
      from_contains: Bytes
      from_not_contains: Bytes
      blockNumber: Int
      blockNumber_not: Int
      blockNumber_gt: Int
      blockNumber_lt: Int
      blockNumber_gte: Int
      blockNumber_lte: Int
      blockNumber_in: [Int!]
      blockNumber_not_in: [Int!]
      blockTime: Int
      blockTime_not: Int
      blockTime_gt: Int
      blockTime_lt: Int
      blockTime_gte: Int
      blockTime_lte: Int
      blockTime_in: [Int!]
      blockTime_not_in: [Int!]
      cTokenSymbol: String
      cTokenSymbol_not: String
      cTokenSymbol_gt: String
      cTokenSymbol_lt: String
      cTokenSymbol_gte: String
      cTokenSymbol_lte: String
      cTokenSymbol_in: [String!]
      cTokenSymbol_not_in: [String!]
      cTokenSymbol_contains: String
      cTokenSymbol_not_contains: String
      cTokenSymbol_starts_with: String
      cTokenSymbol_not_starts_with: String
      cTokenSymbol_ends_with: String
      cTokenSymbol_not_ends_with: String
      underlyingAmount: BigDecimal
      underlyingAmount_not: BigDecimal
      underlyingAmount_gt: BigDecimal
      underlyingAmount_lt: BigDecimal
      underlyingAmount_gte: BigDecimal
      underlyingAmount_lte: BigDecimal
      underlyingAmount_in: [BigDecimal!]
      underlyingAmount_not_in: [BigDecimal!]
    }

    """
    LiquidationEvent stores information for liquidations. The event is emitted from
    the cToken market address.
    """
    type LiquidationEvent implements CTokenTransfer {
      """
      Transaction hash concatenated with log index
      """
      id: ID!
      """
      cTokens seized
      """
      amount: BigDecimal!
      """
      Liquidator receiving tokens
      """
      to: Bytes!
      """
      Account being liquidated (borrower)
      """
      from: Bytes!
      """
      Block number
      """
      blockNumber: Int!
      """
      Block time
      """
      blockTime: Int!
      """
      cToken that was sezied as collateral
      """
      cTokenSymbol: String!
      """
      Symbol of the underlying asset repaid through liquidation
      """
      underlyingSymbol: String!
      """
      Underlying cToken amount that was repaid by liquidator
      """
      underlyingRepayAmount: BigDecimal!
    }

    enum LiquidationEvent_orderBy {
      id
      amount
      to
      from
      blockNumber
      blockTime
      cTokenSymbol
      underlyingSymbol
      underlyingRepayAmount
    }

    input LiquidationEvent_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      amount: BigDecimal
      amount_not: BigDecimal
      amount_gt: BigDecimal
      amount_lt: BigDecimal
      amount_gte: BigDecimal
      amount_lte: BigDecimal
      amount_in: [BigDecimal!]
      amount_not_in: [BigDecimal!]
      to: Bytes
      to_not: Bytes
      to_in: [Bytes!]
      to_not_in: [Bytes!]
      to_contains: Bytes
      to_not_contains: Bytes
      from: Bytes
      from_not: Bytes
      from_in: [Bytes!]
      from_not_in: [Bytes!]
      from_contains: Bytes
      from_not_contains: Bytes
      blockNumber: Int
      blockNumber_not: Int
      blockNumber_gt: Int
      blockNumber_lt: Int
      blockNumber_gte: Int
      blockNumber_lte: Int
      blockNumber_in: [Int!]
      blockNumber_not_in: [Int!]
      blockTime: Int
      blockTime_not: Int
      blockTime_gt: Int
      blockTime_lt: Int
      blockTime_gte: Int
      blockTime_lte: Int
      blockTime_in: [Int!]
      blockTime_not_in: [Int!]
      cTokenSymbol: String
      cTokenSymbol_not: String
      cTokenSymbol_gt: String
      cTokenSymbol_lt: String
      cTokenSymbol_gte: String
      cTokenSymbol_lte: String
      cTokenSymbol_in: [String!]
      cTokenSymbol_not_in: [String!]
      cTokenSymbol_contains: String
      cTokenSymbol_not_contains: String
      cTokenSymbol_starts_with: String
      cTokenSymbol_not_starts_with: String
      cTokenSymbol_ends_with: String
      cTokenSymbol_not_ends_with: String
      underlyingSymbol: String
      underlyingSymbol_not: String
      underlyingSymbol_gt: String
      underlyingSymbol_lt: String
      underlyingSymbol_gte: String
      underlyingSymbol_lte: String
      underlyingSymbol_in: [String!]
      underlyingSymbol_not_in: [String!]
      underlyingSymbol_contains: String
      underlyingSymbol_not_contains: String
      underlyingSymbol_starts_with: String
      underlyingSymbol_not_starts_with: String
      underlyingSymbol_ends_with: String
      underlyingSymbol_not_ends_with: String
      underlyingRepayAmount: BigDecimal
      underlyingRepayAmount_not: BigDecimal
      underlyingRepayAmount_gt: BigDecimal
      underlyingRepayAmount_lt: BigDecimal
      underlyingRepayAmount_gte: BigDecimal
      underlyingRepayAmount_lte: BigDecimal
      underlyingRepayAmount_in: [BigDecimal!]
      underlyingRepayAmount_not_in: [BigDecimal!]
    }

    """
    BorrowEvent stores information for borrows
    """
    type BorrowEvent implements UnderlyingTransfer {
      """
      Transaction hash concatenated with log index
      """
      id: ID!
      """
      Amount of underlying borrowed
      """
      amount: BigDecimal!
      """
      Total borrows of this asset the account has
      """
      accountBorrows: BigDecimal!
      """
      Account that borrowed the tokens
      """
      borrower: Bytes!
      """
      Block number
      """
      blockNumber: Int!
      """
      Block time
      """
      blockTime: Int!
      """
      Symbol of the borrowed underlying asset
      """
      underlyingSymbol: String!
    }

    """
    Underlying transfers are transfers of underlying collateral for both borrows
    and repays
    """
    interface UnderlyingTransfer {
      """
      Transaction hash concatenated with log index
      """
      id: ID!
      """
      Amount of underlying borrowed
      """
      amount: BigDecimal!
      """
      Total borrows of this asset the account has
      """
      accountBorrows: BigDecimal!
      """
      Account that borrowed the tokens
      """
      borrower: Bytes!
      """
      Block number
      """
      blockNumber: Int!
      """
      Block time
      """
      blockTime: Int!
      """
      Symbol of the borrowed underlying asset
      """
      underlyingSymbol: String!
    }

    enum BorrowEvent_orderBy {
      id
      amount
      accountBorrows
      borrower
      blockNumber
      blockTime
      underlyingSymbol
    }

    input BorrowEvent_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      amount: BigDecimal
      amount_not: BigDecimal
      amount_gt: BigDecimal
      amount_lt: BigDecimal
      amount_gte: BigDecimal
      amount_lte: BigDecimal
      amount_in: [BigDecimal!]
      amount_not_in: [BigDecimal!]
      accountBorrows: BigDecimal
      accountBorrows_not: BigDecimal
      accountBorrows_gt: BigDecimal
      accountBorrows_lt: BigDecimal
      accountBorrows_gte: BigDecimal
      accountBorrows_lte: BigDecimal
      accountBorrows_in: [BigDecimal!]
      accountBorrows_not_in: [BigDecimal!]
      borrower: Bytes
      borrower_not: Bytes
      borrower_in: [Bytes!]
      borrower_not_in: [Bytes!]
      borrower_contains: Bytes
      borrower_not_contains: Bytes
      blockNumber: Int
      blockNumber_not: Int
      blockNumber_gt: Int
      blockNumber_lt: Int
      blockNumber_gte: Int
      blockNumber_lte: Int
      blockNumber_in: [Int!]
      blockNumber_not_in: [Int!]
      blockTime: Int
      blockTime_not: Int
      blockTime_gt: Int
      blockTime_lt: Int
      blockTime_gte: Int
      blockTime_lte: Int
      blockTime_in: [Int!]
      blockTime_not_in: [Int!]
      underlyingSymbol: String
      underlyingSymbol_not: String
      underlyingSymbol_gt: String
      underlyingSymbol_lt: String
      underlyingSymbol_gte: String
      underlyingSymbol_lte: String
      underlyingSymbol_in: [String!]
      underlyingSymbol_not_in: [String!]
      underlyingSymbol_contains: String
      underlyingSymbol_not_contains: String
      underlyingSymbol_starts_with: String
      underlyingSymbol_not_starts_with: String
      underlyingSymbol_ends_with: String
      underlyingSymbol_not_ends_with: String
    }

    """
    RepayEvent stores information for repays. Payer is not always the same as
    borrower, such as in the event of a Liquidation
    """
    type RepayEvent implements UnderlyingTransfer {
      """
      Transaction hash concatenated with log index
      """
      id: ID!
      """
      Amount of underlying repaid
      """
      amount: BigDecimal!
      """
      Total borrows of this asset the account has
      """
      accountBorrows: BigDecimal!
      """
      Account that borrowed the tokens
      """
      borrower: Bytes!
      """
      Block number
      """
      blockNumber: Int!
      """
      Block time
      """
      blockTime: Int!
      """
      Symbol of the borrowed underlying asset
      """
      underlyingSymbol: String!
      """
      Payer of the borrow funds
      """
      payer: Bytes!
    }

    enum RepayEvent_orderBy {
      id
      amount
      accountBorrows
      borrower
      blockNumber
      blockTime
      underlyingSymbol
      payer
    }

    input RepayEvent_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      amount: BigDecimal
      amount_not: BigDecimal
      amount_gt: BigDecimal
      amount_lt: BigDecimal
      amount_gte: BigDecimal
      amount_lte: BigDecimal
      amount_in: [BigDecimal!]
      amount_not_in: [BigDecimal!]
      accountBorrows: BigDecimal
      accountBorrows_not: BigDecimal
      accountBorrows_gt: BigDecimal
      accountBorrows_lt: BigDecimal
      accountBorrows_gte: BigDecimal
      accountBorrows_lte: BigDecimal
      accountBorrows_in: [BigDecimal!]
      accountBorrows_not_in: [BigDecimal!]
      borrower: Bytes
      borrower_not: Bytes
      borrower_in: [Bytes!]
      borrower_not_in: [Bytes!]
      borrower_contains: Bytes
      borrower_not_contains: Bytes
      blockNumber: Int
      blockNumber_not: Int
      blockNumber_gt: Int
      blockNumber_lt: Int
      blockNumber_gte: Int
      blockNumber_lte: Int
      blockNumber_in: [Int!]
      blockNumber_not_in: [Int!]
      blockTime: Int
      blockTime_not: Int
      blockTime_gt: Int
      blockTime_lt: Int
      blockTime_gte: Int
      blockTime_lte: Int
      blockTime_in: [Int!]
      blockTime_not_in: [Int!]
      underlyingSymbol: String
      underlyingSymbol_not: String
      underlyingSymbol_gt: String
      underlyingSymbol_lt: String
      underlyingSymbol_gte: String
      underlyingSymbol_lte: String
      underlyingSymbol_in: [String!]
      underlyingSymbol_not_in: [String!]
      underlyingSymbol_contains: String
      underlyingSymbol_not_contains: String
      underlyingSymbol_starts_with: String
      underlyingSymbol_not_starts_with: String
      underlyingSymbol_ends_with: String
      underlyingSymbol_not_ends_with: String
      payer: Bytes
      payer_not: Bytes
      payer_in: [Bytes!]
      payer_not_in: [Bytes!]
      payer_contains: Bytes
      payer_not_contains: Bytes
    }

    enum CTokenTransfer_orderBy {
      id
      amount
      to
      from
      blockNumber
      blockTime
      cTokenSymbol
    }

    input CTokenTransfer_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      amount: BigDecimal
      amount_not: BigDecimal
      amount_gt: BigDecimal
      amount_lt: BigDecimal
      amount_gte: BigDecimal
      amount_lte: BigDecimal
      amount_in: [BigDecimal!]
      amount_not_in: [BigDecimal!]
      to: Bytes
      to_not: Bytes
      to_in: [Bytes!]
      to_not_in: [Bytes!]
      to_contains: Bytes
      to_not_contains: Bytes
      from: Bytes
      from_not: Bytes
      from_in: [Bytes!]
      from_not_in: [Bytes!]
      from_contains: Bytes
      from_not_contains: Bytes
      blockNumber: Int
      blockNumber_not: Int
      blockNumber_gt: Int
      blockNumber_lt: Int
      blockNumber_gte: Int
      blockNumber_lte: Int
      blockNumber_in: [Int!]
      blockNumber_not_in: [Int!]
      blockTime: Int
      blockTime_not: Int
      blockTime_gt: Int
      blockTime_lt: Int
      blockTime_gte: Int
      blockTime_lte: Int
      blockTime_in: [Int!]
      blockTime_not_in: [Int!]
      cTokenSymbol: String
      cTokenSymbol_not: String
      cTokenSymbol_gt: String
      cTokenSymbol_lt: String
      cTokenSymbol_gte: String
      cTokenSymbol_lte: String
      cTokenSymbol_in: [String!]
      cTokenSymbol_not_in: [String!]
      cTokenSymbol_contains: String
      cTokenSymbol_not_contains: String
      cTokenSymbol_starts_with: String
      cTokenSymbol_not_starts_with: String
      cTokenSymbol_ends_with: String
      cTokenSymbol_not_ends_with: String
    }

    enum UnderlyingTransfer_orderBy {
      id
      amount
      accountBorrows
      borrower
      blockNumber
      blockTime
      underlyingSymbol
    }

    input UnderlyingTransfer_filter {
      id: ID
      id_not: ID
      id_gt: ID
      id_lt: ID
      id_gte: ID
      id_lte: ID
      id_in: [ID!]
      id_not_in: [ID!]
      amount: BigDecimal
      amount_not: BigDecimal
      amount_gt: BigDecimal
      amount_lt: BigDecimal
      amount_gte: BigDecimal
      amount_lte: BigDecimal
      amount_in: [BigDecimal!]
      amount_not_in: [BigDecimal!]
      accountBorrows: BigDecimal
      accountBorrows_not: BigDecimal
      accountBorrows_gt: BigDecimal
      accountBorrows_lt: BigDecimal
      accountBorrows_gte: BigDecimal
      accountBorrows_lte: BigDecimal
      accountBorrows_in: [BigDecimal!]
      accountBorrows_not_in: [BigDecimal!]
      borrower: Bytes
      borrower_not: Bytes
      borrower_in: [Bytes!]
      borrower_not_in: [Bytes!]
      borrower_contains: Bytes
      borrower_not_contains: Bytes
      blockNumber: Int
      blockNumber_not: Int
      blockNumber_gt: Int
      blockNumber_lt: Int
      blockNumber_gte: Int
      blockNumber_lte: Int
      blockNumber_in: [Int!]
      blockNumber_not_in: [Int!]
      blockTime: Int
      blockTime_not: Int
      blockTime_gt: Int
      blockTime_lt: Int
      blockTime_gte: Int
      blockTime_lte: Int
      blockTime_in: [Int!]
      blockTime_not_in: [Int!]
      underlyingSymbol: String
      underlyingSymbol_not: String
      underlyingSymbol_gt: String
      underlyingSymbol_lt: String
      underlyingSymbol_gte: String
      underlyingSymbol_lte: String
      underlyingSymbol_in: [String!]
      underlyingSymbol_not_in: [String!]
      underlyingSymbol_contains: String
      underlyingSymbol_not_contains: String
      underlyingSymbol_starts_with: String
      underlyingSymbol_not_starts_with: String
      underlyingSymbol_ends_with: String
      underlyingSymbol_not_ends_with: String
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

    type Subscription {
      comptroller(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Comptroller
      comptrollers(
        skip: Int = 0
        first: Int = 100
        orderBy: Comptroller_orderBy
        orderDirection: OrderDirection
        where: Comptroller_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Comptroller!]!
      market(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Market
      markets(
        skip: Int = 0
        first: Int = 100
        orderBy: Market_orderBy
        orderDirection: OrderDirection
        where: Market_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Market!]!
      account(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): Account
      accounts(
        skip: Int = 0
        first: Int = 100
        orderBy: Account_orderBy
        orderDirection: OrderDirection
        where: Account_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [Account!]!
      accountCToken(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): AccountCToken
      accountCTokens(
        skip: Int = 0
        first: Int = 100
        orderBy: AccountCToken_orderBy
        orderDirection: OrderDirection
        where: AccountCToken_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [AccountCToken!]!
      accountCTokenTransaction(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): AccountCTokenTransaction
      accountCTokenTransactions(
        skip: Int = 0
        first: Int = 100
        orderBy: AccountCTokenTransaction_orderBy
        orderDirection: OrderDirection
        where: AccountCTokenTransaction_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [AccountCTokenTransaction!]!
      transferEvent(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): TransferEvent
      transferEvents(
        skip: Int = 0
        first: Int = 100
        orderBy: TransferEvent_orderBy
        orderDirection: OrderDirection
        where: TransferEvent_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [TransferEvent!]!
      mintEvent(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): MintEvent
      mintEvents(
        skip: Int = 0
        first: Int = 100
        orderBy: MintEvent_orderBy
        orderDirection: OrderDirection
        where: MintEvent_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [MintEvent!]!
      redeemEvent(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): RedeemEvent
      redeemEvents(
        skip: Int = 0
        first: Int = 100
        orderBy: RedeemEvent_orderBy
        orderDirection: OrderDirection
        where: RedeemEvent_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [RedeemEvent!]!
      liquidationEvent(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): LiquidationEvent
      liquidationEvents(
        skip: Int = 0
        first: Int = 100
        orderBy: LiquidationEvent_orderBy
        orderDirection: OrderDirection
        where: LiquidationEvent_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [LiquidationEvent!]!
      borrowEvent(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): BorrowEvent
      borrowEvents(
        skip: Int = 0
        first: Int = 100
        orderBy: BorrowEvent_orderBy
        orderDirection: OrderDirection
        where: BorrowEvent_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [BorrowEvent!]!
      repayEvent(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): RepayEvent
      repayEvents(
        skip: Int = 0
        first: Int = 100
        orderBy: RepayEvent_orderBy
        orderDirection: OrderDirection
        where: RepayEvent_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [RepayEvent!]!
      ctokenTransfer(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): CTokenTransfer
      ctokenTransfers(
        skip: Int = 0
        first: Int = 100
        orderBy: CTokenTransfer_orderBy
        orderDirection: OrderDirection
        where: CTokenTransfer_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [CTokenTransfer!]!
      underlyingTransfer(
        id: ID!
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): UnderlyingTransfer
      underlyingTransfers(
        skip: Int = 0
        first: Int = 100
        orderBy: UnderlyingTransfer_orderBy
        orderDirection: OrderDirection
        where: UnderlyingTransfer_filter
        """
        The block at which the query should be executed. Can either be a \`{ hash:
        Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the
        block number, or a \`{ number_gte: Int }\` containing the minimum block
        number. In the case of \`number_gte\`, the query will be executed on the
        latest block only if the subgraph has progressed to or past the minimum
        block number. Defaults to the latest block when omitted.
        """
        block: Block_height
        """
        Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
        """
        subgraphError: _SubgraphErrorPolicy_! = deny
      ): [UnderlyingTransfer!]!
      """
      Access to subgraph metadata
      """
      _meta(block: Block_height): _Meta_
    }
  `,
  `.graphclient/sources/compoundv2/schema.graphql`,
)

export default buildSchema(source, {
  assumeValid: true,
  assumeValidSDL: true,
})
