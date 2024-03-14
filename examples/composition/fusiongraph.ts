export default /* GraphQL */`
schema @transport(kind: "http", subgraph: "nft", location: "https://api.thegraph.com/subgraphs/name/amxx/eip721-subgraph", options: {}) @transport(kind: "http", subgraph: "uniswap", location: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2", options: {}) {
  query: Query
  subscription: Subscription
}

"""
Marks the GraphQL type as indexable entity.  Each type that should be an entity is required to be annotated with this directive.
"""
directive @entity on OBJECT

"""Defined a Subgraph ID for an object type"""
directive @subgraphId(id: String!) on OBJECT

"""
creates a virtual field on the entity that may be queried but cannot be set manually through the mappings API.
"""
directive @derivedFrom(field: String!) on FIELD_DEFINITION

type User @source(subgraph: "nft", name: "Account") @source(subgraph: "uniswap", name: "User") @resolver(subgraph: "nft", operation: "query GetAccountById($Account_id: Bytes!) { accounts(where: { id: $Account_id) } }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetAccountsByIds($Account_id: [Bytes!]!) { accounts(where: { id_in: $Account_id }) }", kind: "BATCH") @resolver(subgraph: "uniswap", operation: "query UserById($User_id: ID!) { user(id: $User_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetUserById($User_id: ID!) { users(where: { id: $User_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetUsersByIds($User_id: [ID!]!) { users(where: { id_in: $User_id }) }", kind: "BATCH") @variable(subgraph: "nft", name: "Account_id", select: "id") @variable(subgraph: "nft", name: "User_id", select: "id") @variable(subgraph: "uniswap", name: "User_id", select: "id") {
  id: ID! @source(subgraph: "nft", name: "id", type: "Bytes!") @source(subgraph: "uniswap", name: "id", type: "ID!")
  asERC721: ERC721Contract @source(subgraph: "nft", name: "asERC721", type: "ERC721Contract")
  ERC721tokens(skip: Int = 0, first: Int = 100, orderBy: ERC721Token_orderBy, orderDirection: OrderDirection, where: ERC721Token_filter): [ERC721Token!]! @source(subgraph: "nft", name: "ERC721tokens", type: "[ERC721Token!]!")
  ERC721operatorOwner(skip: Int = 0, first: Int = 100, orderBy: ERC721Operator_orderBy, orderDirection: OrderDirection, where: ERC721Operator_filter): [ERC721Operator!]! @source(subgraph: "nft", name: "ERC721operatorOwner", type: "[ERC721Operator!]!")
  ERC721operatorOperator(skip: Int = 0, first: Int = 100, orderBy: ERC721Operator_orderBy, orderDirection: OrderDirection, where: ERC721Operator_filter): [ERC721Operator!]! @source(subgraph: "nft", name: "ERC721operatorOperator", type: "[ERC721Operator!]!")
  ERC721transferFromEvent(skip: Int = 0, first: Int = 100, orderBy: ERC721Transfer_orderBy, orderDirection: OrderDirection, where: ERC721Transfer_filter): [ERC721Transfer!]! @source(subgraph: "nft", name: "ERC721transferFromEvent", type: "[ERC721Transfer!]!")
  ERC721transferToEvent(skip: Int = 0, first: Int = 100, orderBy: ERC721Transfer_orderBy, orderDirection: OrderDirection, where: ERC721Transfer_filter): [ERC721Transfer!]! @source(subgraph: "nft", name: "ERC721transferToEvent", type: "[ERC721Transfer!]!")
  events(skip: Int = 0, first: Int = 100, orderBy: Event_orderBy, orderDirection: OrderDirection, where: Event_filter): [Event!]! @source(subgraph: "nft", name: "events", type: "[Event!]!")
  liquidityPositions(skip: Int = 0, first: Int = 100, orderBy: LiquidityPosition_orderBy, orderDirection: OrderDirection, where: LiquidityPosition_filter): [LiquidityPosition!] @source(subgraph: "uniswap", name: "liquidityPositions", type: "[LiquidityPosition!]")
  usdSwapped: BigDecimal! @source(subgraph: "uniswap", name: "usdSwapped", type: "BigDecimal!")
}

input Account_filter @source(subgraph: "nft", name: "Account_filter") {
  id: Bytes @source(subgraph: "nft", name: "id", type: "Bytes")
  id_not: Bytes @source(subgraph: "nft", name: "id_not", type: "Bytes")
  id_gt: Bytes @source(subgraph: "nft", name: "id_gt", type: "Bytes")
  id_lt: Bytes @source(subgraph: "nft", name: "id_lt", type: "Bytes")
  id_gte: Bytes @source(subgraph: "nft", name: "id_gte", type: "Bytes")
  id_lte: Bytes @source(subgraph: "nft", name: "id_lte", type: "Bytes")
  id_in: [Bytes!] @source(subgraph: "nft", name: "id_in", type: "[Bytes!]")
  id_not_in: [Bytes!] @source(subgraph: "nft", name: "id_not_in", type: "[Bytes!]")
  id_contains: Bytes @source(subgraph: "nft", name: "id_contains", type: "Bytes")
  id_not_contains: Bytes @source(subgraph: "nft", name: "id_not_contains", type: "Bytes")
  asERC721: String @source(subgraph: "nft", name: "asERC721", type: "String")
  asERC721_not: String @source(subgraph: "nft", name: "asERC721_not", type: "String")
  asERC721_gt: String @source(subgraph: "nft", name: "asERC721_gt", type: "String")
  asERC721_lt: String @source(subgraph: "nft", name: "asERC721_lt", type: "String")
  asERC721_gte: String @source(subgraph: "nft", name: "asERC721_gte", type: "String")
  asERC721_lte: String @source(subgraph: "nft", name: "asERC721_lte", type: "String")
  asERC721_in: [String!] @source(subgraph: "nft", name: "asERC721_in", type: "[String!]")
  asERC721_not_in: [String!] @source(subgraph: "nft", name: "asERC721_not_in", type: "[String!]")
  asERC721_contains: String @source(subgraph: "nft", name: "asERC721_contains", type: "String")
  asERC721_contains_nocase: String @source(subgraph: "nft", name: "asERC721_contains_nocase", type: "String")
  asERC721_not_contains: String @source(subgraph: "nft", name: "asERC721_not_contains", type: "String")
  asERC721_not_contains_nocase: String @source(subgraph: "nft", name: "asERC721_not_contains_nocase", type: "String")
  asERC721_starts_with: String @source(subgraph: "nft", name: "asERC721_starts_with", type: "String")
  asERC721_starts_with_nocase: String @source(subgraph: "nft", name: "asERC721_starts_with_nocase", type: "String")
  asERC721_not_starts_with: String @source(subgraph: "nft", name: "asERC721_not_starts_with", type: "String")
  asERC721_not_starts_with_nocase: String @source(subgraph: "nft", name: "asERC721_not_starts_with_nocase", type: "String")
  asERC721_ends_with: String @source(subgraph: "nft", name: "asERC721_ends_with", type: "String")
  asERC721_ends_with_nocase: String @source(subgraph: "nft", name: "asERC721_ends_with_nocase", type: "String")
  asERC721_not_ends_with: String @source(subgraph: "nft", name: "asERC721_not_ends_with", type: "String")
  asERC721_not_ends_with_nocase: String @source(subgraph: "nft", name: "asERC721_not_ends_with_nocase", type: "String")
  asERC721_: ERC721Contract_filter @source(subgraph: "nft", name: "asERC721_", type: "ERC721Contract_filter")
  ERC721tokens_: ERC721Token_filter @source(subgraph: "nft", name: "ERC721tokens_", type: "ERC721Token_filter")
  ERC721operatorOwner_: ERC721Operator_filter @source(subgraph: "nft", name: "ERC721operatorOwner_", type: "ERC721Operator_filter")
  ERC721operatorOperator_: ERC721Operator_filter @source(subgraph: "nft", name: "ERC721operatorOperator_", type: "ERC721Operator_filter")
  ERC721transferFromEvent_: ERC721Transfer_filter @source(subgraph: "nft", name: "ERC721transferFromEvent_", type: "ERC721Transfer_filter")
  ERC721transferToEvent_: ERC721Transfer_filter @source(subgraph: "nft", name: "ERC721transferToEvent_", type: "ERC721Transfer_filter")
  events_: Event_filter @source(subgraph: "nft", name: "events_", type: "Event_filter")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "nft", name: "_change_block", type: "BlockChangedFilter")
  and: [Account_filter] @source(subgraph: "nft", name: "and", type: "[Account_filter]")
  or: [Account_filter] @source(subgraph: "nft", name: "or", type: "[Account_filter]")
}

enum Account_orderBy @source(subgraph: "nft", name: "Account_orderBy") {
  id @source(subgraph: "nft", name: "id")
  asERC721 @source(subgraph: "nft", name: "asERC721")
  asERC721__id @source(subgraph: "nft", name: "asERC721__id")
  asERC721__supportsMetadata @source(subgraph: "nft", name: "asERC721__supportsMetadata")
  asERC721__name @source(subgraph: "nft", name: "asERC721__name")
  asERC721__symbol @source(subgraph: "nft", name: "asERC721__symbol")
  ERC721tokens @source(subgraph: "nft", name: "ERC721tokens")
  ERC721operatorOwner @source(subgraph: "nft", name: "ERC721operatorOwner")
  ERC721operatorOperator @source(subgraph: "nft", name: "ERC721operatorOperator")
  ERC721transferFromEvent @source(subgraph: "nft", name: "ERC721transferFromEvent")
  ERC721transferToEvent @source(subgraph: "nft", name: "ERC721transferToEvent")
  events @source(subgraph: "nft", name: "events")
}

enum Aggregation_interval @source(subgraph: "nft", name: "Aggregation_interval") @source(subgraph: "uniswap", name: "Aggregation_interval") {
  hour @source(subgraph: "nft", name: "hour") @source(subgraph: "uniswap", name: "hour")
  day @source(subgraph: "nft", name: "day") @source(subgraph: "uniswap", name: "day")
}

scalar BigDecimal @source(subgraph: "uniswap", name: "BigDecimal") @source(subgraph: "nft", name: "BigDecimal") @source(subgraph: "uniswap", name: "BigDecimal")

scalar BigInt @source(subgraph: "uniswap", name: "BigInt") @source(subgraph: "nft", name: "BigInt") @source(subgraph: "uniswap", name: "BigInt")

input BlockChangedFilter @source(subgraph: "nft", name: "BlockChangedFilter") @source(subgraph: "uniswap", name: "BlockChangedFilter") {
  number_gte: Int! @source(subgraph: "nft", name: "number_gte", type: "Int!") @source(subgraph: "uniswap", name: "number_gte", type: "Int!")
}

input Block_height @source(subgraph: "nft", name: "Block_height") @source(subgraph: "uniswap", name: "Block_height") {
  hash: Bytes @source(subgraph: "nft", name: "hash", type: "Bytes") @source(subgraph: "uniswap", name: "hash", type: "Bytes")
  number: Int @source(subgraph: "nft", name: "number", type: "Int") @source(subgraph: "uniswap", name: "number", type: "Int")
  number_gte: Int @source(subgraph: "nft", name: "number_gte", type: "Int") @source(subgraph: "uniswap", name: "number_gte", type: "Int")
}

scalar Bytes @source(subgraph: "uniswap", name: "Bytes") @source(subgraph: "nft", name: "Bytes") @source(subgraph: "uniswap", name: "Bytes")

type ERC721Contract @source(subgraph: "nft", name: "ERC721Contract") @resolver(subgraph: "nft", operation: "query GetErc721ContractById($ERC721Contract_id: Bytes!) { erc721Contracts(where: { id: $ERC721Contract_id) } }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721ContractsByIds($ERC721Contract_id: [Bytes!]!) { erc721Contracts(where: { id_in: $ERC721Contract_id }) }", kind: "BATCH") @resolver(subgraph: "nft", operation: "query GetErc721ContractById($ERC721Contract_id: Bytes!) { erc721Contracts(where: { id: $ERC721Contract_id) } }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721ContractsByIds($ERC721Contract_id: [Bytes!]!) { erc721Contracts(where: { id_in: $ERC721Contract_id }) }", kind: "BATCH") @variable(subgraph: "nft", name: "ERC721Contract_id", select: "id") {
  id: Bytes! @source(subgraph: "nft", name: "id", type: "Bytes!")
  asAccount: User! @source(subgraph: "nft", name: "asAccount", type: "Account!")
  supportsMetadata: Boolean @source(subgraph: "nft", name: "supportsMetadata", type: "Boolean")
  name: String @source(subgraph: "nft", name: "name", type: "String")
  symbol: String @source(subgraph: "nft", name: "symbol", type: "String")
  tokens(skip: Int = 0, first: Int = 100, orderBy: ERC721Token_orderBy, orderDirection: OrderDirection, where: ERC721Token_filter): [ERC721Token!]! @source(subgraph: "nft", name: "tokens", type: "[ERC721Token!]!")
  operators(skip: Int = 0, first: Int = 100, orderBy: ERC721Operator_orderBy, orderDirection: OrderDirection, where: ERC721Operator_filter): [ERC721Operator!]! @source(subgraph: "nft", name: "operators", type: "[ERC721Operator!]!")
  transfers(skip: Int = 0, first: Int = 100, orderBy: ERC721Transfer_orderBy, orderDirection: OrderDirection, where: ERC721Transfer_filter): [ERC721Transfer!]! @source(subgraph: "nft", name: "transfers", type: "[ERC721Transfer!]!")
}

input ERC721Contract_filter @source(subgraph: "nft", name: "ERC721Contract_filter") {
  id: Bytes @source(subgraph: "nft", name: "id", type: "Bytes")
  id_not: Bytes @source(subgraph: "nft", name: "id_not", type: "Bytes")
  id_gt: Bytes @source(subgraph: "nft", name: "id_gt", type: "Bytes")
  id_lt: Bytes @source(subgraph: "nft", name: "id_lt", type: "Bytes")
  id_gte: Bytes @source(subgraph: "nft", name: "id_gte", type: "Bytes")
  id_lte: Bytes @source(subgraph: "nft", name: "id_lte", type: "Bytes")
  id_in: [Bytes!] @source(subgraph: "nft", name: "id_in", type: "[Bytes!]")
  id_not_in: [Bytes!] @source(subgraph: "nft", name: "id_not_in", type: "[Bytes!]")
  id_contains: Bytes @source(subgraph: "nft", name: "id_contains", type: "Bytes")
  id_not_contains: Bytes @source(subgraph: "nft", name: "id_not_contains", type: "Bytes")
  asAccount: String @source(subgraph: "nft", name: "asAccount", type: "String")
  asAccount_not: String @source(subgraph: "nft", name: "asAccount_not", type: "String")
  asAccount_gt: String @source(subgraph: "nft", name: "asAccount_gt", type: "String")
  asAccount_lt: String @source(subgraph: "nft", name: "asAccount_lt", type: "String")
  asAccount_gte: String @source(subgraph: "nft", name: "asAccount_gte", type: "String")
  asAccount_lte: String @source(subgraph: "nft", name: "asAccount_lte", type: "String")
  asAccount_in: [String!] @source(subgraph: "nft", name: "asAccount_in", type: "[String!]")
  asAccount_not_in: [String!] @source(subgraph: "nft", name: "asAccount_not_in", type: "[String!]")
  asAccount_contains: String @source(subgraph: "nft", name: "asAccount_contains", type: "String")
  asAccount_contains_nocase: String @source(subgraph: "nft", name: "asAccount_contains_nocase", type: "String")
  asAccount_not_contains: String @source(subgraph: "nft", name: "asAccount_not_contains", type: "String")
  asAccount_not_contains_nocase: String @source(subgraph: "nft", name: "asAccount_not_contains_nocase", type: "String")
  asAccount_starts_with: String @source(subgraph: "nft", name: "asAccount_starts_with", type: "String")
  asAccount_starts_with_nocase: String @source(subgraph: "nft", name: "asAccount_starts_with_nocase", type: "String")
  asAccount_not_starts_with: String @source(subgraph: "nft", name: "asAccount_not_starts_with", type: "String")
  asAccount_not_starts_with_nocase: String @source(subgraph: "nft", name: "asAccount_not_starts_with_nocase", type: "String")
  asAccount_ends_with: String @source(subgraph: "nft", name: "asAccount_ends_with", type: "String")
  asAccount_ends_with_nocase: String @source(subgraph: "nft", name: "asAccount_ends_with_nocase", type: "String")
  asAccount_not_ends_with: String @source(subgraph: "nft", name: "asAccount_not_ends_with", type: "String")
  asAccount_not_ends_with_nocase: String @source(subgraph: "nft", name: "asAccount_not_ends_with_nocase", type: "String")
  asAccount_: Account_filter @source(subgraph: "nft", name: "asAccount_", type: "Account_filter")
  supportsMetadata: Boolean @source(subgraph: "nft", name: "supportsMetadata", type: "Boolean")
  supportsMetadata_not: Boolean @source(subgraph: "nft", name: "supportsMetadata_not", type: "Boolean")
  supportsMetadata_in: [Boolean!] @source(subgraph: "nft", name: "supportsMetadata_in", type: "[Boolean!]")
  supportsMetadata_not_in: [Boolean!] @source(subgraph: "nft", name: "supportsMetadata_not_in", type: "[Boolean!]")
  name: String @source(subgraph: "nft", name: "name", type: "String")
  name_not: String @source(subgraph: "nft", name: "name_not", type: "String")
  name_gt: String @source(subgraph: "nft", name: "name_gt", type: "String")
  name_lt: String @source(subgraph: "nft", name: "name_lt", type: "String")
  name_gte: String @source(subgraph: "nft", name: "name_gte", type: "String")
  name_lte: String @source(subgraph: "nft", name: "name_lte", type: "String")
  name_in: [String!] @source(subgraph: "nft", name: "name_in", type: "[String!]")
  name_not_in: [String!] @source(subgraph: "nft", name: "name_not_in", type: "[String!]")
  name_contains: String @source(subgraph: "nft", name: "name_contains", type: "String")
  name_contains_nocase: String @source(subgraph: "nft", name: "name_contains_nocase", type: "String")
  name_not_contains: String @source(subgraph: "nft", name: "name_not_contains", type: "String")
  name_not_contains_nocase: String @source(subgraph: "nft", name: "name_not_contains_nocase", type: "String")
  name_starts_with: String @source(subgraph: "nft", name: "name_starts_with", type: "String")
  name_starts_with_nocase: String @source(subgraph: "nft", name: "name_starts_with_nocase", type: "String")
  name_not_starts_with: String @source(subgraph: "nft", name: "name_not_starts_with", type: "String")
  name_not_starts_with_nocase: String @source(subgraph: "nft", name: "name_not_starts_with_nocase", type: "String")
  name_ends_with: String @source(subgraph: "nft", name: "name_ends_with", type: "String")
  name_ends_with_nocase: String @source(subgraph: "nft", name: "name_ends_with_nocase", type: "String")
  name_not_ends_with: String @source(subgraph: "nft", name: "name_not_ends_with", type: "String")
  name_not_ends_with_nocase: String @source(subgraph: "nft", name: "name_not_ends_with_nocase", type: "String")
  symbol: String @source(subgraph: "nft", name: "symbol", type: "String")
  symbol_not: String @source(subgraph: "nft", name: "symbol_not", type: "String")
  symbol_gt: String @source(subgraph: "nft", name: "symbol_gt", type: "String")
  symbol_lt: String @source(subgraph: "nft", name: "symbol_lt", type: "String")
  symbol_gte: String @source(subgraph: "nft", name: "symbol_gte", type: "String")
  symbol_lte: String @source(subgraph: "nft", name: "symbol_lte", type: "String")
  symbol_in: [String!] @source(subgraph: "nft", name: "symbol_in", type: "[String!]")
  symbol_not_in: [String!] @source(subgraph: "nft", name: "symbol_not_in", type: "[String!]")
  symbol_contains: String @source(subgraph: "nft", name: "symbol_contains", type: "String")
  symbol_contains_nocase: String @source(subgraph: "nft", name: "symbol_contains_nocase", type: "String")
  symbol_not_contains: String @source(subgraph: "nft", name: "symbol_not_contains", type: "String")
  symbol_not_contains_nocase: String @source(subgraph: "nft", name: "symbol_not_contains_nocase", type: "String")
  symbol_starts_with: String @source(subgraph: "nft", name: "symbol_starts_with", type: "String")
  symbol_starts_with_nocase: String @source(subgraph: "nft", name: "symbol_starts_with_nocase", type: "String")
  symbol_not_starts_with: String @source(subgraph: "nft", name: "symbol_not_starts_with", type: "String")
  symbol_not_starts_with_nocase: String @source(subgraph: "nft", name: "symbol_not_starts_with_nocase", type: "String")
  symbol_ends_with: String @source(subgraph: "nft", name: "symbol_ends_with", type: "String")
  symbol_ends_with_nocase: String @source(subgraph: "nft", name: "symbol_ends_with_nocase", type: "String")
  symbol_not_ends_with: String @source(subgraph: "nft", name: "symbol_not_ends_with", type: "String")
  symbol_not_ends_with_nocase: String @source(subgraph: "nft", name: "symbol_not_ends_with_nocase", type: "String")
  tokens_: ERC721Token_filter @source(subgraph: "nft", name: "tokens_", type: "ERC721Token_filter")
  operators_: ERC721Operator_filter @source(subgraph: "nft", name: "operators_", type: "ERC721Operator_filter")
  transfers_: ERC721Transfer_filter @source(subgraph: "nft", name: "transfers_", type: "ERC721Transfer_filter")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "nft", name: "_change_block", type: "BlockChangedFilter")
  and: [ERC721Contract_filter] @source(subgraph: "nft", name: "and", type: "[ERC721Contract_filter]")
  or: [ERC721Contract_filter] @source(subgraph: "nft", name: "or", type: "[ERC721Contract_filter]")
}

enum ERC721Contract_orderBy @source(subgraph: "nft", name: "ERC721Contract_orderBy") {
  id @source(subgraph: "nft", name: "id")
  asAccount @source(subgraph: "nft", name: "asAccount")
  asAccount__id @source(subgraph: "nft", name: "asAccount__id")
  supportsMetadata @source(subgraph: "nft", name: "supportsMetadata")
  name @source(subgraph: "nft", name: "name")
  symbol @source(subgraph: "nft", name: "symbol")
  tokens @source(subgraph: "nft", name: "tokens")
  operators @source(subgraph: "nft", name: "operators")
  transfers @source(subgraph: "nft", name: "transfers")
}

type ERC721Operator @source(subgraph: "nft", name: "ERC721Operator") @resolver(subgraph: "nft", operation: "query Erc721OperatorById($ERC721Operator_id: ID!) { erc721Operator(id: $ERC721Operator_id) }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721OperatorById($ERC721Operator_id: ID!) { erc721Operators(where: { id: $ERC721Operator_id) } }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721OperatorsByIds($ERC721Operator_id: [ID!]!) { erc721Operators(where: { id_in: $ERC721Operator_id }) }", kind: "BATCH") @resolver(subgraph: "nft", operation: "query Erc721OperatorById($ERC721Operator_id: ID!) { erc721Operator(id: $ERC721Operator_id) }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721OperatorById($ERC721Operator_id: ID!) { erc721Operators(where: { id: $ERC721Operator_id) } }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721OperatorsByIds($ERC721Operator_id: [ID!]!) { erc721Operators(where: { id_in: $ERC721Operator_id }) }", kind: "BATCH") @variable(subgraph: "nft", name: "ERC721Operator_id", select: "id") {
  id: ID! @source(subgraph: "nft", name: "id", type: "ID!")
  contract: ERC721Contract! @source(subgraph: "nft", name: "contract", type: "ERC721Contract!")
  owner: User! @source(subgraph: "nft", name: "owner", type: "Account!")
  operator: User! @source(subgraph: "nft", name: "operator", type: "Account!")
  approved: Boolean! @source(subgraph: "nft", name: "approved", type: "Boolean!")
}

input ERC721Operator_filter @source(subgraph: "nft", name: "ERC721Operator_filter") {
  id: ID @source(subgraph: "nft", name: "id", type: "ID")
  id_not: ID @source(subgraph: "nft", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "nft", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "nft", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "nft", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "nft", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "nft", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "nft", name: "id_not_in", type: "[ID!]")
  contract: String @source(subgraph: "nft", name: "contract", type: "String")
  contract_not: String @source(subgraph: "nft", name: "contract_not", type: "String")
  contract_gt: String @source(subgraph: "nft", name: "contract_gt", type: "String")
  contract_lt: String @source(subgraph: "nft", name: "contract_lt", type: "String")
  contract_gte: String @source(subgraph: "nft", name: "contract_gte", type: "String")
  contract_lte: String @source(subgraph: "nft", name: "contract_lte", type: "String")
  contract_in: [String!] @source(subgraph: "nft", name: "contract_in", type: "[String!]")
  contract_not_in: [String!] @source(subgraph: "nft", name: "contract_not_in", type: "[String!]")
  contract_contains: String @source(subgraph: "nft", name: "contract_contains", type: "String")
  contract_contains_nocase: String @source(subgraph: "nft", name: "contract_contains_nocase", type: "String")
  contract_not_contains: String @source(subgraph: "nft", name: "contract_not_contains", type: "String")
  contract_not_contains_nocase: String @source(subgraph: "nft", name: "contract_not_contains_nocase", type: "String")
  contract_starts_with: String @source(subgraph: "nft", name: "contract_starts_with", type: "String")
  contract_starts_with_nocase: String @source(subgraph: "nft", name: "contract_starts_with_nocase", type: "String")
  contract_not_starts_with: String @source(subgraph: "nft", name: "contract_not_starts_with", type: "String")
  contract_not_starts_with_nocase: String @source(subgraph: "nft", name: "contract_not_starts_with_nocase", type: "String")
  contract_ends_with: String @source(subgraph: "nft", name: "contract_ends_with", type: "String")
  contract_ends_with_nocase: String @source(subgraph: "nft", name: "contract_ends_with_nocase", type: "String")
  contract_not_ends_with: String @source(subgraph: "nft", name: "contract_not_ends_with", type: "String")
  contract_not_ends_with_nocase: String @source(subgraph: "nft", name: "contract_not_ends_with_nocase", type: "String")
  contract_: ERC721Contract_filter @source(subgraph: "nft", name: "contract_", type: "ERC721Contract_filter")
  owner: String @source(subgraph: "nft", name: "owner", type: "String")
  owner_not: String @source(subgraph: "nft", name: "owner_not", type: "String")
  owner_gt: String @source(subgraph: "nft", name: "owner_gt", type: "String")
  owner_lt: String @source(subgraph: "nft", name: "owner_lt", type: "String")
  owner_gte: String @source(subgraph: "nft", name: "owner_gte", type: "String")
  owner_lte: String @source(subgraph: "nft", name: "owner_lte", type: "String")
  owner_in: [String!] @source(subgraph: "nft", name: "owner_in", type: "[String!]")
  owner_not_in: [String!] @source(subgraph: "nft", name: "owner_not_in", type: "[String!]")
  owner_contains: String @source(subgraph: "nft", name: "owner_contains", type: "String")
  owner_contains_nocase: String @source(subgraph: "nft", name: "owner_contains_nocase", type: "String")
  owner_not_contains: String @source(subgraph: "nft", name: "owner_not_contains", type: "String")
  owner_not_contains_nocase: String @source(subgraph: "nft", name: "owner_not_contains_nocase", type: "String")
  owner_starts_with: String @source(subgraph: "nft", name: "owner_starts_with", type: "String")
  owner_starts_with_nocase: String @source(subgraph: "nft", name: "owner_starts_with_nocase", type: "String")
  owner_not_starts_with: String @source(subgraph: "nft", name: "owner_not_starts_with", type: "String")
  owner_not_starts_with_nocase: String @source(subgraph: "nft", name: "owner_not_starts_with_nocase", type: "String")
  owner_ends_with: String @source(subgraph: "nft", name: "owner_ends_with", type: "String")
  owner_ends_with_nocase: String @source(subgraph: "nft", name: "owner_ends_with_nocase", type: "String")
  owner_not_ends_with: String @source(subgraph: "nft", name: "owner_not_ends_with", type: "String")
  owner_not_ends_with_nocase: String @source(subgraph: "nft", name: "owner_not_ends_with_nocase", type: "String")
  owner_: Account_filter @source(subgraph: "nft", name: "owner_", type: "Account_filter")
  operator: String @source(subgraph: "nft", name: "operator", type: "String")
  operator_not: String @source(subgraph: "nft", name: "operator_not", type: "String")
  operator_gt: String @source(subgraph: "nft", name: "operator_gt", type: "String")
  operator_lt: String @source(subgraph: "nft", name: "operator_lt", type: "String")
  operator_gte: String @source(subgraph: "nft", name: "operator_gte", type: "String")
  operator_lte: String @source(subgraph: "nft", name: "operator_lte", type: "String")
  operator_in: [String!] @source(subgraph: "nft", name: "operator_in", type: "[String!]")
  operator_not_in: [String!] @source(subgraph: "nft", name: "operator_not_in", type: "[String!]")
  operator_contains: String @source(subgraph: "nft", name: "operator_contains", type: "String")
  operator_contains_nocase: String @source(subgraph: "nft", name: "operator_contains_nocase", type: "String")
  operator_not_contains: String @source(subgraph: "nft", name: "operator_not_contains", type: "String")
  operator_not_contains_nocase: String @source(subgraph: "nft", name: "operator_not_contains_nocase", type: "String")
  operator_starts_with: String @source(subgraph: "nft", name: "operator_starts_with", type: "String")
  operator_starts_with_nocase: String @source(subgraph: "nft", name: "operator_starts_with_nocase", type: "String")
  operator_not_starts_with: String @source(subgraph: "nft", name: "operator_not_starts_with", type: "String")
  operator_not_starts_with_nocase: String @source(subgraph: "nft", name: "operator_not_starts_with_nocase", type: "String")
  operator_ends_with: String @source(subgraph: "nft", name: "operator_ends_with", type: "String")
  operator_ends_with_nocase: String @source(subgraph: "nft", name: "operator_ends_with_nocase", type: "String")
  operator_not_ends_with: String @source(subgraph: "nft", name: "operator_not_ends_with", type: "String")
  operator_not_ends_with_nocase: String @source(subgraph: "nft", name: "operator_not_ends_with_nocase", type: "String")
  operator_: Account_filter @source(subgraph: "nft", name: "operator_", type: "Account_filter")
  approved: Boolean @source(subgraph: "nft", name: "approved", type: "Boolean")
  approved_not: Boolean @source(subgraph: "nft", name: "approved_not", type: "Boolean")
  approved_in: [Boolean!] @source(subgraph: "nft", name: "approved_in", type: "[Boolean!]")
  approved_not_in: [Boolean!] @source(subgraph: "nft", name: "approved_not_in", type: "[Boolean!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "nft", name: "_change_block", type: "BlockChangedFilter")
  and: [ERC721Operator_filter] @source(subgraph: "nft", name: "and", type: "[ERC721Operator_filter]")
  or: [ERC721Operator_filter] @source(subgraph: "nft", name: "or", type: "[ERC721Operator_filter]")
}

enum ERC721Operator_orderBy @source(subgraph: "nft", name: "ERC721Operator_orderBy") {
  id @source(subgraph: "nft", name: "id")
  contract @source(subgraph: "nft", name: "contract")
  contract__id @source(subgraph: "nft", name: "contract__id")
  contract__supportsMetadata @source(subgraph: "nft", name: "contract__supportsMetadata")
  contract__name @source(subgraph: "nft", name: "contract__name")
  contract__symbol @source(subgraph: "nft", name: "contract__symbol")
  owner @source(subgraph: "nft", name: "owner")
  owner__id @source(subgraph: "nft", name: "owner__id")
  operator @source(subgraph: "nft", name: "operator")
  operator__id @source(subgraph: "nft", name: "operator__id")
  approved @source(subgraph: "nft", name: "approved")
}

type ERC721Token @source(subgraph: "nft", name: "ERC721Token") @resolver(subgraph: "nft", operation: "query Erc721TokenById($ERC721Token_id: ID!) { erc721Token(id: $ERC721Token_id) }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721TokenById($ERC721Token_id: ID!) { erc721Tokens(where: { id: $ERC721Token_id) } }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721TokensByIds($ERC721Token_id: [ID!]!) { erc721Tokens(where: { id_in: $ERC721Token_id }) }", kind: "BATCH") @resolver(subgraph: "nft", operation: "query Erc721TokenById($ERC721Token_id: ID!) { erc721Token(id: $ERC721Token_id) }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721TokenById($ERC721Token_id: ID!) { erc721Tokens(where: { id: $ERC721Token_id) } }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721TokensByIds($ERC721Token_id: [ID!]!) { erc721Tokens(where: { id_in: $ERC721Token_id }) }", kind: "BATCH") @variable(subgraph: "nft", name: "ERC721Token_id", select: "id") {
  id: ID! @source(subgraph: "nft", name: "id", type: "ID!")
  contract: ERC721Contract! @source(subgraph: "nft", name: "contract", type: "ERC721Contract!")
  identifier: BigInt! @source(subgraph: "nft", name: "identifier", type: "BigInt!")
  owner: User! @source(subgraph: "nft", name: "owner", type: "Account!")
  approval: User! @source(subgraph: "nft", name: "approval", type: "Account!")
  uri: String @source(subgraph: "nft", name: "uri", type: "String")
  transfers(skip: Int = 0, first: Int = 100, orderBy: ERC721Transfer_orderBy, orderDirection: OrderDirection, where: ERC721Transfer_filter): [ERC721Transfer!]! @source(subgraph: "nft", name: "transfers", type: "[ERC721Transfer!]!")
}

input ERC721Token_filter @source(subgraph: "nft", name: "ERC721Token_filter") {
  id: ID @source(subgraph: "nft", name: "id", type: "ID")
  id_not: ID @source(subgraph: "nft", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "nft", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "nft", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "nft", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "nft", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "nft", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "nft", name: "id_not_in", type: "[ID!]")
  contract: String @source(subgraph: "nft", name: "contract", type: "String")
  contract_not: String @source(subgraph: "nft", name: "contract_not", type: "String")
  contract_gt: String @source(subgraph: "nft", name: "contract_gt", type: "String")
  contract_lt: String @source(subgraph: "nft", name: "contract_lt", type: "String")
  contract_gte: String @source(subgraph: "nft", name: "contract_gte", type: "String")
  contract_lte: String @source(subgraph: "nft", name: "contract_lte", type: "String")
  contract_in: [String!] @source(subgraph: "nft", name: "contract_in", type: "[String!]")
  contract_not_in: [String!] @source(subgraph: "nft", name: "contract_not_in", type: "[String!]")
  contract_contains: String @source(subgraph: "nft", name: "contract_contains", type: "String")
  contract_contains_nocase: String @source(subgraph: "nft", name: "contract_contains_nocase", type: "String")
  contract_not_contains: String @source(subgraph: "nft", name: "contract_not_contains", type: "String")
  contract_not_contains_nocase: String @source(subgraph: "nft", name: "contract_not_contains_nocase", type: "String")
  contract_starts_with: String @source(subgraph: "nft", name: "contract_starts_with", type: "String")
  contract_starts_with_nocase: String @source(subgraph: "nft", name: "contract_starts_with_nocase", type: "String")
  contract_not_starts_with: String @source(subgraph: "nft", name: "contract_not_starts_with", type: "String")
  contract_not_starts_with_nocase: String @source(subgraph: "nft", name: "contract_not_starts_with_nocase", type: "String")
  contract_ends_with: String @source(subgraph: "nft", name: "contract_ends_with", type: "String")
  contract_ends_with_nocase: String @source(subgraph: "nft", name: "contract_ends_with_nocase", type: "String")
  contract_not_ends_with: String @source(subgraph: "nft", name: "contract_not_ends_with", type: "String")
  contract_not_ends_with_nocase: String @source(subgraph: "nft", name: "contract_not_ends_with_nocase", type: "String")
  contract_: ERC721Contract_filter @source(subgraph: "nft", name: "contract_", type: "ERC721Contract_filter")
  identifier: BigInt @source(subgraph: "nft", name: "identifier", type: "BigInt")
  identifier_not: BigInt @source(subgraph: "nft", name: "identifier_not", type: "BigInt")
  identifier_gt: BigInt @source(subgraph: "nft", name: "identifier_gt", type: "BigInt")
  identifier_lt: BigInt @source(subgraph: "nft", name: "identifier_lt", type: "BigInt")
  identifier_gte: BigInt @source(subgraph: "nft", name: "identifier_gte", type: "BigInt")
  identifier_lte: BigInt @source(subgraph: "nft", name: "identifier_lte", type: "BigInt")
  identifier_in: [BigInt!] @source(subgraph: "nft", name: "identifier_in", type: "[BigInt!]")
  identifier_not_in: [BigInt!] @source(subgraph: "nft", name: "identifier_not_in", type: "[BigInt!]")
  owner: String @source(subgraph: "nft", name: "owner", type: "String")
  owner_not: String @source(subgraph: "nft", name: "owner_not", type: "String")
  owner_gt: String @source(subgraph: "nft", name: "owner_gt", type: "String")
  owner_lt: String @source(subgraph: "nft", name: "owner_lt", type: "String")
  owner_gte: String @source(subgraph: "nft", name: "owner_gte", type: "String")
  owner_lte: String @source(subgraph: "nft", name: "owner_lte", type: "String")
  owner_in: [String!] @source(subgraph: "nft", name: "owner_in", type: "[String!]")
  owner_not_in: [String!] @source(subgraph: "nft", name: "owner_not_in", type: "[String!]")
  owner_contains: String @source(subgraph: "nft", name: "owner_contains", type: "String")
  owner_contains_nocase: String @source(subgraph: "nft", name: "owner_contains_nocase", type: "String")
  owner_not_contains: String @source(subgraph: "nft", name: "owner_not_contains", type: "String")
  owner_not_contains_nocase: String @source(subgraph: "nft", name: "owner_not_contains_nocase", type: "String")
  owner_starts_with: String @source(subgraph: "nft", name: "owner_starts_with", type: "String")
  owner_starts_with_nocase: String @source(subgraph: "nft", name: "owner_starts_with_nocase", type: "String")
  owner_not_starts_with: String @source(subgraph: "nft", name: "owner_not_starts_with", type: "String")
  owner_not_starts_with_nocase: String @source(subgraph: "nft", name: "owner_not_starts_with_nocase", type: "String")
  owner_ends_with: String @source(subgraph: "nft", name: "owner_ends_with", type: "String")
  owner_ends_with_nocase: String @source(subgraph: "nft", name: "owner_ends_with_nocase", type: "String")
  owner_not_ends_with: String @source(subgraph: "nft", name: "owner_not_ends_with", type: "String")
  owner_not_ends_with_nocase: String @source(subgraph: "nft", name: "owner_not_ends_with_nocase", type: "String")
  owner_: Account_filter @source(subgraph: "nft", name: "owner_", type: "Account_filter")
  approval: String @source(subgraph: "nft", name: "approval", type: "String")
  approval_not: String @source(subgraph: "nft", name: "approval_not", type: "String")
  approval_gt: String @source(subgraph: "nft", name: "approval_gt", type: "String")
  approval_lt: String @source(subgraph: "nft", name: "approval_lt", type: "String")
  approval_gte: String @source(subgraph: "nft", name: "approval_gte", type: "String")
  approval_lte: String @source(subgraph: "nft", name: "approval_lte", type: "String")
  approval_in: [String!] @source(subgraph: "nft", name: "approval_in", type: "[String!]")
  approval_not_in: [String!] @source(subgraph: "nft", name: "approval_not_in", type: "[String!]")
  approval_contains: String @source(subgraph: "nft", name: "approval_contains", type: "String")
  approval_contains_nocase: String @source(subgraph: "nft", name: "approval_contains_nocase", type: "String")
  approval_not_contains: String @source(subgraph: "nft", name: "approval_not_contains", type: "String")
  approval_not_contains_nocase: String @source(subgraph: "nft", name: "approval_not_contains_nocase", type: "String")
  approval_starts_with: String @source(subgraph: "nft", name: "approval_starts_with", type: "String")
  approval_starts_with_nocase: String @source(subgraph: "nft", name: "approval_starts_with_nocase", type: "String")
  approval_not_starts_with: String @source(subgraph: "nft", name: "approval_not_starts_with", type: "String")
  approval_not_starts_with_nocase: String @source(subgraph: "nft", name: "approval_not_starts_with_nocase", type: "String")
  approval_ends_with: String @source(subgraph: "nft", name: "approval_ends_with", type: "String")
  approval_ends_with_nocase: String @source(subgraph: "nft", name: "approval_ends_with_nocase", type: "String")
  approval_not_ends_with: String @source(subgraph: "nft", name: "approval_not_ends_with", type: "String")
  approval_not_ends_with_nocase: String @source(subgraph: "nft", name: "approval_not_ends_with_nocase", type: "String")
  approval_: Account_filter @source(subgraph: "nft", name: "approval_", type: "Account_filter")
  uri: String @source(subgraph: "nft", name: "uri", type: "String")
  uri_not: String @source(subgraph: "nft", name: "uri_not", type: "String")
  uri_gt: String @source(subgraph: "nft", name: "uri_gt", type: "String")
  uri_lt: String @source(subgraph: "nft", name: "uri_lt", type: "String")
  uri_gte: String @source(subgraph: "nft", name: "uri_gte", type: "String")
  uri_lte: String @source(subgraph: "nft", name: "uri_lte", type: "String")
  uri_in: [String!] @source(subgraph: "nft", name: "uri_in", type: "[String!]")
  uri_not_in: [String!] @source(subgraph: "nft", name: "uri_not_in", type: "[String!]")
  uri_contains: String @source(subgraph: "nft", name: "uri_contains", type: "String")
  uri_contains_nocase: String @source(subgraph: "nft", name: "uri_contains_nocase", type: "String")
  uri_not_contains: String @source(subgraph: "nft", name: "uri_not_contains", type: "String")
  uri_not_contains_nocase: String @source(subgraph: "nft", name: "uri_not_contains_nocase", type: "String")
  uri_starts_with: String @source(subgraph: "nft", name: "uri_starts_with", type: "String")
  uri_starts_with_nocase: String @source(subgraph: "nft", name: "uri_starts_with_nocase", type: "String")
  uri_not_starts_with: String @source(subgraph: "nft", name: "uri_not_starts_with", type: "String")
  uri_not_starts_with_nocase: String @source(subgraph: "nft", name: "uri_not_starts_with_nocase", type: "String")
  uri_ends_with: String @source(subgraph: "nft", name: "uri_ends_with", type: "String")
  uri_ends_with_nocase: String @source(subgraph: "nft", name: "uri_ends_with_nocase", type: "String")
  uri_not_ends_with: String @source(subgraph: "nft", name: "uri_not_ends_with", type: "String")
  uri_not_ends_with_nocase: String @source(subgraph: "nft", name: "uri_not_ends_with_nocase", type: "String")
  transfers_: ERC721Transfer_filter @source(subgraph: "nft", name: "transfers_", type: "ERC721Transfer_filter")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "nft", name: "_change_block", type: "BlockChangedFilter")
  and: [ERC721Token_filter] @source(subgraph: "nft", name: "and", type: "[ERC721Token_filter]")
  or: [ERC721Token_filter] @source(subgraph: "nft", name: "or", type: "[ERC721Token_filter]")
}

enum ERC721Token_orderBy @source(subgraph: "nft", name: "ERC721Token_orderBy") {
  id @source(subgraph: "nft", name: "id")
  contract @source(subgraph: "nft", name: "contract")
  contract__id @source(subgraph: "nft", name: "contract__id")
  contract__supportsMetadata @source(subgraph: "nft", name: "contract__supportsMetadata")
  contract__name @source(subgraph: "nft", name: "contract__name")
  contract__symbol @source(subgraph: "nft", name: "contract__symbol")
  identifier @source(subgraph: "nft", name: "identifier")
  owner @source(subgraph: "nft", name: "owner")
  owner__id @source(subgraph: "nft", name: "owner__id")
  approval @source(subgraph: "nft", name: "approval")
  approval__id @source(subgraph: "nft", name: "approval__id")
  uri @source(subgraph: "nft", name: "uri")
  transfers @source(subgraph: "nft", name: "transfers")
}

type ERC721Transfer implements Event @source(subgraph: "nft", name: "ERC721Transfer") @resolver(subgraph: "nft", operation: "query Erc721TransferById($ERC721Transfer_id: ID!) { erc721Transfer(id: $ERC721Transfer_id) }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721TransferById($ERC721Transfer_id: ID!) { erc721Transfers(where: { id: $ERC721Transfer_id) } }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721TransfersByIds($ERC721Transfer_id: [ID!]!) { erc721Transfers(where: { id_in: $ERC721Transfer_id }) }", kind: "BATCH") @resolver(subgraph: "nft", operation: "query Erc721TransferById($ERC721Transfer_id: ID!) { erc721Transfer(id: $ERC721Transfer_id) }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721TransferById($ERC721Transfer_id: ID!) { erc721Transfers(where: { id: $ERC721Transfer_id) } }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetErc721TransfersByIds($ERC721Transfer_id: [ID!]!) { erc721Transfers(where: { id_in: $ERC721Transfer_id }) }", kind: "BATCH") @variable(subgraph: "nft", name: "ERC721Transfer_id", select: "id") {
  id: ID! @source(subgraph: "nft", name: "id", type: "ID!")
  emitter: User! @source(subgraph: "nft", name: "emitter", type: "Account!")
  transaction: Transaction! @source(subgraph: "nft", name: "transaction", type: "Transaction!")
  timestamp: BigInt! @source(subgraph: "nft", name: "timestamp", type: "BigInt!")
  contract: ERC721Contract! @source(subgraph: "nft", name: "contract", type: "ERC721Contract!")
  token: ERC721Token! @source(subgraph: "nft", name: "token", type: "ERC721Token!")
  from: User! @source(subgraph: "nft", name: "from", type: "Account!")
  to: User! @source(subgraph: "nft", name: "to", type: "Account!")
}

input ERC721Transfer_filter @source(subgraph: "nft", name: "ERC721Transfer_filter") {
  id: ID @source(subgraph: "nft", name: "id", type: "ID")
  id_not: ID @source(subgraph: "nft", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "nft", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "nft", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "nft", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "nft", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "nft", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "nft", name: "id_not_in", type: "[ID!]")
  emitter: String @source(subgraph: "nft", name: "emitter", type: "String")
  emitter_not: String @source(subgraph: "nft", name: "emitter_not", type: "String")
  emitter_gt: String @source(subgraph: "nft", name: "emitter_gt", type: "String")
  emitter_lt: String @source(subgraph: "nft", name: "emitter_lt", type: "String")
  emitter_gte: String @source(subgraph: "nft", name: "emitter_gte", type: "String")
  emitter_lte: String @source(subgraph: "nft", name: "emitter_lte", type: "String")
  emitter_in: [String!] @source(subgraph: "nft", name: "emitter_in", type: "[String!]")
  emitter_not_in: [String!] @source(subgraph: "nft", name: "emitter_not_in", type: "[String!]")
  emitter_contains: String @source(subgraph: "nft", name: "emitter_contains", type: "String")
  emitter_contains_nocase: String @source(subgraph: "nft", name: "emitter_contains_nocase", type: "String")
  emitter_not_contains: String @source(subgraph: "nft", name: "emitter_not_contains", type: "String")
  emitter_not_contains_nocase: String @source(subgraph: "nft", name: "emitter_not_contains_nocase", type: "String")
  emitter_starts_with: String @source(subgraph: "nft", name: "emitter_starts_with", type: "String")
  emitter_starts_with_nocase: String @source(subgraph: "nft", name: "emitter_starts_with_nocase", type: "String")
  emitter_not_starts_with: String @source(subgraph: "nft", name: "emitter_not_starts_with", type: "String")
  emitter_not_starts_with_nocase: String @source(subgraph: "nft", name: "emitter_not_starts_with_nocase", type: "String")
  emitter_ends_with: String @source(subgraph: "nft", name: "emitter_ends_with", type: "String")
  emitter_ends_with_nocase: String @source(subgraph: "nft", name: "emitter_ends_with_nocase", type: "String")
  emitter_not_ends_with: String @source(subgraph: "nft", name: "emitter_not_ends_with", type: "String")
  emitter_not_ends_with_nocase: String @source(subgraph: "nft", name: "emitter_not_ends_with_nocase", type: "String")
  emitter_: Account_filter @source(subgraph: "nft", name: "emitter_", type: "Account_filter")
  transaction: String @source(subgraph: "nft", name: "transaction", type: "String")
  transaction_not: String @source(subgraph: "nft", name: "transaction_not", type: "String")
  transaction_gt: String @source(subgraph: "nft", name: "transaction_gt", type: "String")
  transaction_lt: String @source(subgraph: "nft", name: "transaction_lt", type: "String")
  transaction_gte: String @source(subgraph: "nft", name: "transaction_gte", type: "String")
  transaction_lte: String @source(subgraph: "nft", name: "transaction_lte", type: "String")
  transaction_in: [String!] @source(subgraph: "nft", name: "transaction_in", type: "[String!]")
  transaction_not_in: [String!] @source(subgraph: "nft", name: "transaction_not_in", type: "[String!]")
  transaction_contains: String @source(subgraph: "nft", name: "transaction_contains", type: "String")
  transaction_contains_nocase: String @source(subgraph: "nft", name: "transaction_contains_nocase", type: "String")
  transaction_not_contains: String @source(subgraph: "nft", name: "transaction_not_contains", type: "String")
  transaction_not_contains_nocase: String @source(subgraph: "nft", name: "transaction_not_contains_nocase", type: "String")
  transaction_starts_with: String @source(subgraph: "nft", name: "transaction_starts_with", type: "String")
  transaction_starts_with_nocase: String @source(subgraph: "nft", name: "transaction_starts_with_nocase", type: "String")
  transaction_not_starts_with: String @source(subgraph: "nft", name: "transaction_not_starts_with", type: "String")
  transaction_not_starts_with_nocase: String @source(subgraph: "nft", name: "transaction_not_starts_with_nocase", type: "String")
  transaction_ends_with: String @source(subgraph: "nft", name: "transaction_ends_with", type: "String")
  transaction_ends_with_nocase: String @source(subgraph: "nft", name: "transaction_ends_with_nocase", type: "String")
  transaction_not_ends_with: String @source(subgraph: "nft", name: "transaction_not_ends_with", type: "String")
  transaction_not_ends_with_nocase: String @source(subgraph: "nft", name: "transaction_not_ends_with_nocase", type: "String")
  transaction_: Transaction_filter @source(subgraph: "nft", name: "transaction_", type: "Transaction_filter")
  timestamp: BigInt @source(subgraph: "nft", name: "timestamp", type: "BigInt")
  timestamp_not: BigInt @source(subgraph: "nft", name: "timestamp_not", type: "BigInt")
  timestamp_gt: BigInt @source(subgraph: "nft", name: "timestamp_gt", type: "BigInt")
  timestamp_lt: BigInt @source(subgraph: "nft", name: "timestamp_lt", type: "BigInt")
  timestamp_gte: BigInt @source(subgraph: "nft", name: "timestamp_gte", type: "BigInt")
  timestamp_lte: BigInt @source(subgraph: "nft", name: "timestamp_lte", type: "BigInt")
  timestamp_in: [BigInt!] @source(subgraph: "nft", name: "timestamp_in", type: "[BigInt!]")
  timestamp_not_in: [BigInt!] @source(subgraph: "nft", name: "timestamp_not_in", type: "[BigInt!]")
  contract: String @source(subgraph: "nft", name: "contract", type: "String")
  contract_not: String @source(subgraph: "nft", name: "contract_not", type: "String")
  contract_gt: String @source(subgraph: "nft", name: "contract_gt", type: "String")
  contract_lt: String @source(subgraph: "nft", name: "contract_lt", type: "String")
  contract_gte: String @source(subgraph: "nft", name: "contract_gte", type: "String")
  contract_lte: String @source(subgraph: "nft", name: "contract_lte", type: "String")
  contract_in: [String!] @source(subgraph: "nft", name: "contract_in", type: "[String!]")
  contract_not_in: [String!] @source(subgraph: "nft", name: "contract_not_in", type: "[String!]")
  contract_contains: String @source(subgraph: "nft", name: "contract_contains", type: "String")
  contract_contains_nocase: String @source(subgraph: "nft", name: "contract_contains_nocase", type: "String")
  contract_not_contains: String @source(subgraph: "nft", name: "contract_not_contains", type: "String")
  contract_not_contains_nocase: String @source(subgraph: "nft", name: "contract_not_contains_nocase", type: "String")
  contract_starts_with: String @source(subgraph: "nft", name: "contract_starts_with", type: "String")
  contract_starts_with_nocase: String @source(subgraph: "nft", name: "contract_starts_with_nocase", type: "String")
  contract_not_starts_with: String @source(subgraph: "nft", name: "contract_not_starts_with", type: "String")
  contract_not_starts_with_nocase: String @source(subgraph: "nft", name: "contract_not_starts_with_nocase", type: "String")
  contract_ends_with: String @source(subgraph: "nft", name: "contract_ends_with", type: "String")
  contract_ends_with_nocase: String @source(subgraph: "nft", name: "contract_ends_with_nocase", type: "String")
  contract_not_ends_with: String @source(subgraph: "nft", name: "contract_not_ends_with", type: "String")
  contract_not_ends_with_nocase: String @source(subgraph: "nft", name: "contract_not_ends_with_nocase", type: "String")
  contract_: ERC721Contract_filter @source(subgraph: "nft", name: "contract_", type: "ERC721Contract_filter")
  token: String @source(subgraph: "nft", name: "token", type: "String")
  token_not: String @source(subgraph: "nft", name: "token_not", type: "String")
  token_gt: String @source(subgraph: "nft", name: "token_gt", type: "String")
  token_lt: String @source(subgraph: "nft", name: "token_lt", type: "String")
  token_gte: String @source(subgraph: "nft", name: "token_gte", type: "String")
  token_lte: String @source(subgraph: "nft", name: "token_lte", type: "String")
  token_in: [String!] @source(subgraph: "nft", name: "token_in", type: "[String!]")
  token_not_in: [String!] @source(subgraph: "nft", name: "token_not_in", type: "[String!]")
  token_contains: String @source(subgraph: "nft", name: "token_contains", type: "String")
  token_contains_nocase: String @source(subgraph: "nft", name: "token_contains_nocase", type: "String")
  token_not_contains: String @source(subgraph: "nft", name: "token_not_contains", type: "String")
  token_not_contains_nocase: String @source(subgraph: "nft", name: "token_not_contains_nocase", type: "String")
  token_starts_with: String @source(subgraph: "nft", name: "token_starts_with", type: "String")
  token_starts_with_nocase: String @source(subgraph: "nft", name: "token_starts_with_nocase", type: "String")
  token_not_starts_with: String @source(subgraph: "nft", name: "token_not_starts_with", type: "String")
  token_not_starts_with_nocase: String @source(subgraph: "nft", name: "token_not_starts_with_nocase", type: "String")
  token_ends_with: String @source(subgraph: "nft", name: "token_ends_with", type: "String")
  token_ends_with_nocase: String @source(subgraph: "nft", name: "token_ends_with_nocase", type: "String")
  token_not_ends_with: String @source(subgraph: "nft", name: "token_not_ends_with", type: "String")
  token_not_ends_with_nocase: String @source(subgraph: "nft", name: "token_not_ends_with_nocase", type: "String")
  token_: ERC721Token_filter @source(subgraph: "nft", name: "token_", type: "ERC721Token_filter")
  from: String @source(subgraph: "nft", name: "from", type: "String")
  from_not: String @source(subgraph: "nft", name: "from_not", type: "String")
  from_gt: String @source(subgraph: "nft", name: "from_gt", type: "String")
  from_lt: String @source(subgraph: "nft", name: "from_lt", type: "String")
  from_gte: String @source(subgraph: "nft", name: "from_gte", type: "String")
  from_lte: String @source(subgraph: "nft", name: "from_lte", type: "String")
  from_in: [String!] @source(subgraph: "nft", name: "from_in", type: "[String!]")
  from_not_in: [String!] @source(subgraph: "nft", name: "from_not_in", type: "[String!]")
  from_contains: String @source(subgraph: "nft", name: "from_contains", type: "String")
  from_contains_nocase: String @source(subgraph: "nft", name: "from_contains_nocase", type: "String")
  from_not_contains: String @source(subgraph: "nft", name: "from_not_contains", type: "String")
  from_not_contains_nocase: String @source(subgraph: "nft", name: "from_not_contains_nocase", type: "String")
  from_starts_with: String @source(subgraph: "nft", name: "from_starts_with", type: "String")
  from_starts_with_nocase: String @source(subgraph: "nft", name: "from_starts_with_nocase", type: "String")
  from_not_starts_with: String @source(subgraph: "nft", name: "from_not_starts_with", type: "String")
  from_not_starts_with_nocase: String @source(subgraph: "nft", name: "from_not_starts_with_nocase", type: "String")
  from_ends_with: String @source(subgraph: "nft", name: "from_ends_with", type: "String")
  from_ends_with_nocase: String @source(subgraph: "nft", name: "from_ends_with_nocase", type: "String")
  from_not_ends_with: String @source(subgraph: "nft", name: "from_not_ends_with", type: "String")
  from_not_ends_with_nocase: String @source(subgraph: "nft", name: "from_not_ends_with_nocase", type: "String")
  from_: Account_filter @source(subgraph: "nft", name: "from_", type: "Account_filter")
  to: String @source(subgraph: "nft", name: "to", type: "String")
  to_not: String @source(subgraph: "nft", name: "to_not", type: "String")
  to_gt: String @source(subgraph: "nft", name: "to_gt", type: "String")
  to_lt: String @source(subgraph: "nft", name: "to_lt", type: "String")
  to_gte: String @source(subgraph: "nft", name: "to_gte", type: "String")
  to_lte: String @source(subgraph: "nft", name: "to_lte", type: "String")
  to_in: [String!] @source(subgraph: "nft", name: "to_in", type: "[String!]")
  to_not_in: [String!] @source(subgraph: "nft", name: "to_not_in", type: "[String!]")
  to_contains: String @source(subgraph: "nft", name: "to_contains", type: "String")
  to_contains_nocase: String @source(subgraph: "nft", name: "to_contains_nocase", type: "String")
  to_not_contains: String @source(subgraph: "nft", name: "to_not_contains", type: "String")
  to_not_contains_nocase: String @source(subgraph: "nft", name: "to_not_contains_nocase", type: "String")
  to_starts_with: String @source(subgraph: "nft", name: "to_starts_with", type: "String")
  to_starts_with_nocase: String @source(subgraph: "nft", name: "to_starts_with_nocase", type: "String")
  to_not_starts_with: String @source(subgraph: "nft", name: "to_not_starts_with", type: "String")
  to_not_starts_with_nocase: String @source(subgraph: "nft", name: "to_not_starts_with_nocase", type: "String")
  to_ends_with: String @source(subgraph: "nft", name: "to_ends_with", type: "String")
  to_ends_with_nocase: String @source(subgraph: "nft", name: "to_ends_with_nocase", type: "String")
  to_not_ends_with: String @source(subgraph: "nft", name: "to_not_ends_with", type: "String")
  to_not_ends_with_nocase: String @source(subgraph: "nft", name: "to_not_ends_with_nocase", type: "String")
  to_: Account_filter @source(subgraph: "nft", name: "to_", type: "Account_filter")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "nft", name: "_change_block", type: "BlockChangedFilter")
  and: [ERC721Transfer_filter] @source(subgraph: "nft", name: "and", type: "[ERC721Transfer_filter]")
  or: [ERC721Transfer_filter] @source(subgraph: "nft", name: "or", type: "[ERC721Transfer_filter]")
}

enum ERC721Transfer_orderBy @source(subgraph: "nft", name: "ERC721Transfer_orderBy") {
  id @source(subgraph: "nft", name: "id")
  emitter @source(subgraph: "nft", name: "emitter")
  emitter__id @source(subgraph: "nft", name: "emitter__id")
  transaction @source(subgraph: "nft", name: "transaction")
  transaction__id @source(subgraph: "nft", name: "transaction__id")
  transaction__timestamp @source(subgraph: "nft", name: "transaction__timestamp")
  transaction__blockNumber @source(subgraph: "nft", name: "transaction__blockNumber")
  timestamp @source(subgraph: "nft", name: "timestamp")
  contract @source(subgraph: "nft", name: "contract")
  contract__id @source(subgraph: "nft", name: "contract__id")
  contract__supportsMetadata @source(subgraph: "nft", name: "contract__supportsMetadata")
  contract__name @source(subgraph: "nft", name: "contract__name")
  contract__symbol @source(subgraph: "nft", name: "contract__symbol")
  token @source(subgraph: "nft", name: "token")
  token__id @source(subgraph: "nft", name: "token__id")
  token__identifier @source(subgraph: "nft", name: "token__identifier")
  token__uri @source(subgraph: "nft", name: "token__uri")
  from @source(subgraph: "nft", name: "from")
  from__id @source(subgraph: "nft", name: "from__id")
  to @source(subgraph: "nft", name: "to")
  to__id @source(subgraph: "nft", name: "to__id")
}

interface Event @source(subgraph: "nft", name: "Event") {
  id: ID! @source(subgraph: "nft", name: "id", type: "ID!")
  transaction: Transaction! @source(subgraph: "nft", name: "transaction", type: "Transaction!")
  emitter: User! @source(subgraph: "nft", name: "emitter", type: "Account!")
  timestamp: BigInt! @source(subgraph: "nft", name: "timestamp", type: "BigInt!")
}

input Event_filter @source(subgraph: "nft", name: "Event_filter") {
  id: ID @source(subgraph: "nft", name: "id", type: "ID")
  id_not: ID @source(subgraph: "nft", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "nft", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "nft", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "nft", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "nft", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "nft", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "nft", name: "id_not_in", type: "[ID!]")
  transaction: String @source(subgraph: "nft", name: "transaction", type: "String")
  transaction_not: String @source(subgraph: "nft", name: "transaction_not", type: "String")
  transaction_gt: String @source(subgraph: "nft", name: "transaction_gt", type: "String")
  transaction_lt: String @source(subgraph: "nft", name: "transaction_lt", type: "String")
  transaction_gte: String @source(subgraph: "nft", name: "transaction_gte", type: "String")
  transaction_lte: String @source(subgraph: "nft", name: "transaction_lte", type: "String")
  transaction_in: [String!] @source(subgraph: "nft", name: "transaction_in", type: "[String!]")
  transaction_not_in: [String!] @source(subgraph: "nft", name: "transaction_not_in", type: "[String!]")
  transaction_contains: String @source(subgraph: "nft", name: "transaction_contains", type: "String")
  transaction_contains_nocase: String @source(subgraph: "nft", name: "transaction_contains_nocase", type: "String")
  transaction_not_contains: String @source(subgraph: "nft", name: "transaction_not_contains", type: "String")
  transaction_not_contains_nocase: String @source(subgraph: "nft", name: "transaction_not_contains_nocase", type: "String")
  transaction_starts_with: String @source(subgraph: "nft", name: "transaction_starts_with", type: "String")
  transaction_starts_with_nocase: String @source(subgraph: "nft", name: "transaction_starts_with_nocase", type: "String")
  transaction_not_starts_with: String @source(subgraph: "nft", name: "transaction_not_starts_with", type: "String")
  transaction_not_starts_with_nocase: String @source(subgraph: "nft", name: "transaction_not_starts_with_nocase", type: "String")
  transaction_ends_with: String @source(subgraph: "nft", name: "transaction_ends_with", type: "String")
  transaction_ends_with_nocase: String @source(subgraph: "nft", name: "transaction_ends_with_nocase", type: "String")
  transaction_not_ends_with: String @source(subgraph: "nft", name: "transaction_not_ends_with", type: "String")
  transaction_not_ends_with_nocase: String @source(subgraph: "nft", name: "transaction_not_ends_with_nocase", type: "String")
  transaction_: Transaction_filter @source(subgraph: "nft", name: "transaction_", type: "Transaction_filter")
  emitter: String @source(subgraph: "nft", name: "emitter", type: "String")
  emitter_not: String @source(subgraph: "nft", name: "emitter_not", type: "String")
  emitter_gt: String @source(subgraph: "nft", name: "emitter_gt", type: "String")
  emitter_lt: String @source(subgraph: "nft", name: "emitter_lt", type: "String")
  emitter_gte: String @source(subgraph: "nft", name: "emitter_gte", type: "String")
  emitter_lte: String @source(subgraph: "nft", name: "emitter_lte", type: "String")
  emitter_in: [String!] @source(subgraph: "nft", name: "emitter_in", type: "[String!]")
  emitter_not_in: [String!] @source(subgraph: "nft", name: "emitter_not_in", type: "[String!]")
  emitter_contains: String @source(subgraph: "nft", name: "emitter_contains", type: "String")
  emitter_contains_nocase: String @source(subgraph: "nft", name: "emitter_contains_nocase", type: "String")
  emitter_not_contains: String @source(subgraph: "nft", name: "emitter_not_contains", type: "String")
  emitter_not_contains_nocase: String @source(subgraph: "nft", name: "emitter_not_contains_nocase", type: "String")
  emitter_starts_with: String @source(subgraph: "nft", name: "emitter_starts_with", type: "String")
  emitter_starts_with_nocase: String @source(subgraph: "nft", name: "emitter_starts_with_nocase", type: "String")
  emitter_not_starts_with: String @source(subgraph: "nft", name: "emitter_not_starts_with", type: "String")
  emitter_not_starts_with_nocase: String @source(subgraph: "nft", name: "emitter_not_starts_with_nocase", type: "String")
  emitter_ends_with: String @source(subgraph: "nft", name: "emitter_ends_with", type: "String")
  emitter_ends_with_nocase: String @source(subgraph: "nft", name: "emitter_ends_with_nocase", type: "String")
  emitter_not_ends_with: String @source(subgraph: "nft", name: "emitter_not_ends_with", type: "String")
  emitter_not_ends_with_nocase: String @source(subgraph: "nft", name: "emitter_not_ends_with_nocase", type: "String")
  emitter_: Account_filter @source(subgraph: "nft", name: "emitter_", type: "Account_filter")
  timestamp: BigInt @source(subgraph: "nft", name: "timestamp", type: "BigInt")
  timestamp_not: BigInt @source(subgraph: "nft", name: "timestamp_not", type: "BigInt")
  timestamp_gt: BigInt @source(subgraph: "nft", name: "timestamp_gt", type: "BigInt")
  timestamp_lt: BigInt @source(subgraph: "nft", name: "timestamp_lt", type: "BigInt")
  timestamp_gte: BigInt @source(subgraph: "nft", name: "timestamp_gte", type: "BigInt")
  timestamp_lte: BigInt @source(subgraph: "nft", name: "timestamp_lte", type: "BigInt")
  timestamp_in: [BigInt!] @source(subgraph: "nft", name: "timestamp_in", type: "[BigInt!]")
  timestamp_not_in: [BigInt!] @source(subgraph: "nft", name: "timestamp_not_in", type: "[BigInt!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "nft", name: "_change_block", type: "BlockChangedFilter")
  and: [Event_filter] @source(subgraph: "nft", name: "and", type: "[Event_filter]")
  or: [Event_filter] @source(subgraph: "nft", name: "or", type: "[Event_filter]")
}

enum Event_orderBy @source(subgraph: "nft", name: "Event_orderBy") {
  id @source(subgraph: "nft", name: "id")
  transaction @source(subgraph: "nft", name: "transaction")
  transaction__id @source(subgraph: "nft", name: "transaction__id")
  transaction__timestamp @source(subgraph: "nft", name: "transaction__timestamp")
  transaction__blockNumber @source(subgraph: "nft", name: "transaction__blockNumber")
  emitter @source(subgraph: "nft", name: "emitter")
  emitter__id @source(subgraph: "nft", name: "emitter__id")
  timestamp @source(subgraph: "nft", name: "timestamp")
}

"""
8 bytes signed integer

"""
scalar Int8 @source(subgraph: "uniswap", name: "Int8") @source(subgraph: "nft", name: "Int8") @source(subgraph: "uniswap", name: "Int8")

"""Defines the order direction, either ascending or descending"""
enum OrderDirection @source(subgraph: "nft", name: "OrderDirection") @source(subgraph: "uniswap", name: "OrderDirection") {
  asc @source(subgraph: "nft", name: "asc") @source(subgraph: "uniswap", name: "asc")
  desc @source(subgraph: "nft", name: "desc") @source(subgraph: "uniswap", name: "desc")
}

type Query {
  account(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): User @resolver(subgraph: "nft", operation: "query account($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { account(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "account", type: "Account")
  accounts(
    skip: Int = 0
    first: Int = 100
    orderBy: Account_orderBy
    orderDirection: OrderDirection
    where: Account_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [User!]! @resolver(subgraph: "nft", operation: "query accounts($skip: Int, $first: Int = 100, $orderBy: Account_orderBy, $orderDirection: OrderDirection, $where: Account_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { accounts(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "accounts", type: "[Account!]!")
  erc721Contract(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): ERC721Contract @resolver(subgraph: "nft", operation: "query erc721Contract($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Contract(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Contract", type: "ERC721Contract")
  erc721Contracts(
    skip: Int = 0
    first: Int = 100
    orderBy: ERC721Contract_orderBy
    orderDirection: OrderDirection
    where: ERC721Contract_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [ERC721Contract!]! @resolver(subgraph: "nft", operation: "query erc721Contracts($skip: Int, $first: Int = 100, $orderBy: ERC721Contract_orderBy, $orderDirection: OrderDirection, $where: ERC721Contract_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Contracts(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Contracts", type: "[ERC721Contract!]!")
  erc721Token(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): ERC721Token @resolver(subgraph: "nft", operation: "query erc721Token($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Token(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Token", type: "ERC721Token")
  erc721Tokens(
    skip: Int = 0
    first: Int = 100
    orderBy: ERC721Token_orderBy
    orderDirection: OrderDirection
    where: ERC721Token_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [ERC721Token!]! @resolver(subgraph: "nft", operation: "query erc721Tokens($skip: Int, $first: Int = 100, $orderBy: ERC721Token_orderBy, $orderDirection: OrderDirection, $where: ERC721Token_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Tokens(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Tokens", type: "[ERC721Token!]!")
  erc721Operator(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): ERC721Operator @resolver(subgraph: "nft", operation: "query erc721Operator($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Operator(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Operator", type: "ERC721Operator")
  erc721Operators(
    skip: Int = 0
    first: Int = 100
    orderBy: ERC721Operator_orderBy
    orderDirection: OrderDirection
    where: ERC721Operator_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [ERC721Operator!]! @resolver(subgraph: "nft", operation: "query erc721Operators($skip: Int, $first: Int = 100, $orderBy: ERC721Operator_orderBy, $orderDirection: OrderDirection, $where: ERC721Operator_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Operators(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Operators", type: "[ERC721Operator!]!")
  erc721Transfer(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): ERC721Transfer @resolver(subgraph: "nft", operation: "query erc721Transfer($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Transfer(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Transfer", type: "ERC721Transfer")
  erc721Transfers(
    skip: Int = 0
    first: Int = 100
    orderBy: ERC721Transfer_orderBy
    orderDirection: OrderDirection
    where: ERC721Transfer_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [ERC721Transfer!]! @resolver(subgraph: "nft", operation: "query erc721Transfers($skip: Int, $first: Int = 100, $orderBy: ERC721Transfer_orderBy, $orderDirection: OrderDirection, $where: ERC721Transfer_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Transfers(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Transfers", type: "[ERC721Transfer!]!")
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
  ): Transaction @resolver(subgraph: "nft", operation: "query transaction($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { transaction(id: $id, block: $block, subgraphError: $subgraphError) }") @resolver(subgraph: "uniswap", operation: "query transaction($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { transaction(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "transaction", type: "Transaction") @source(subgraph: "uniswap", name: "transaction", type: "Transaction")
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
  ): [Transaction!]! @resolver(subgraph: "nft", operation: "query transactions($skip: Int, $first: Int = 100, $orderBy: Transaction_orderBy, $orderDirection: OrderDirection, $where: Transaction_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { transactions(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @resolver(subgraph: "uniswap", operation: "query transactions($skip: Int, $first: Int = 100, $orderBy: Transaction_orderBy, $orderDirection: OrderDirection, $where: Transaction_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { transactions(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "transactions", type: "[Transaction!]!") @source(subgraph: "uniswap", name: "transactions", type: "[Transaction!]!")
  event(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Event @resolver(subgraph: "nft", operation: "query event($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { event(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "event", type: "Event")
  events(
    skip: Int = 0
    first: Int = 100
    orderBy: Event_orderBy
    orderDirection: OrderDirection
    where: Event_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Event!]! @resolver(subgraph: "nft", operation: "query events($skip: Int, $first: Int = 100, $orderBy: Event_orderBy, $orderDirection: OrderDirection, $where: Event_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { events(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "events", type: "[Event!]!")
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_ @resolver(subgraph: "nft", operation: "query _meta($block: Block_height) { _meta(block: $block) }") @resolver(subgraph: "uniswap", operation: "query _meta($block: Block_height) { _meta(block: $block) }") @source(subgraph: "nft", name: "_meta", type: "_Meta_") @source(subgraph: "uniswap", name: "_meta", type: "_Meta_")
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
  ): UniswapFactory @resolver(subgraph: "uniswap", operation: "query uniswapFactory($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { uniswapFactory(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "uniswapFactory", type: "UniswapFactory")
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
  ): [UniswapFactory!]! @resolver(subgraph: "uniswap", operation: "query uniswapFactories($skip: Int, $first: Int = 100, $orderBy: UniswapFactory_orderBy, $orderDirection: OrderDirection, $where: UniswapFactory_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { uniswapFactories(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "uniswapFactories", type: "[UniswapFactory!]!")
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
  ): Token @resolver(subgraph: "uniswap", operation: "query token($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { token(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "token", type: "Token")
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
  ): [Token!]! @resolver(subgraph: "uniswap", operation: "query tokens($skip: Int, $first: Int = 100, $orderBy: Token_orderBy, $orderDirection: OrderDirection, $where: Token_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { tokens(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "tokens", type: "[Token!]!")
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
  ): Pair @resolver(subgraph: "uniswap", operation: "query pair($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { pair(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "pair", type: "Pair")
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
  ): [Pair!]! @resolver(subgraph: "uniswap", operation: "query pairs($skip: Int, $first: Int = 100, $orderBy: Pair_orderBy, $orderDirection: OrderDirection, $where: Pair_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { pairs(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "pairs", type: "[Pair!]!")
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
  ): User @resolver(subgraph: "uniswap", operation: "query user($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { user(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "user", type: "User")
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
  ): [User!]! @resolver(subgraph: "uniswap", operation: "query users($skip: Int, $first: Int = 100, $orderBy: User_orderBy, $orderDirection: OrderDirection, $where: User_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { users(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "users", type: "[User!]!")
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
  ): LiquidityPosition @resolver(subgraph: "uniswap", operation: "query liquidityPosition($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { liquidityPosition(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "liquidityPosition", type: "LiquidityPosition")
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
  ): [LiquidityPosition!]! @resolver(subgraph: "uniswap", operation: "query liquidityPositions($skip: Int, $first: Int = 100, $orderBy: LiquidityPosition_orderBy, $orderDirection: OrderDirection, $where: LiquidityPosition_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { liquidityPositions(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "liquidityPositions", type: "[LiquidityPosition!]!")
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
  ): LiquidityPositionSnapshot @resolver(subgraph: "uniswap", operation: "query liquidityPositionSnapshot($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { liquidityPositionSnapshot(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "liquidityPositionSnapshot", type: "LiquidityPositionSnapshot")
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
  ): [LiquidityPositionSnapshot!]! @resolver(subgraph: "uniswap", operation: "query liquidityPositionSnapshots($skip: Int, $first: Int = 100, $orderBy: LiquidityPositionSnapshot_orderBy, $orderDirection: OrderDirection, $where: LiquidityPositionSnapshot_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { liquidityPositionSnapshots(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "liquidityPositionSnapshots", type: "[LiquidityPositionSnapshot!]!")
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
  ): Mint @resolver(subgraph: "uniswap", operation: "query mint($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { mint(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "mint", type: "Mint")
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
  ): [Mint!]! @resolver(subgraph: "uniswap", operation: "query mints($skip: Int, $first: Int = 100, $orderBy: Mint_orderBy, $orderDirection: OrderDirection, $where: Mint_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { mints(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "mints", type: "[Mint!]!")
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
  ): Burn @resolver(subgraph: "uniswap", operation: "query burn($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { burn(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "burn", type: "Burn")
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
  ): [Burn!]! @resolver(subgraph: "uniswap", operation: "query burns($skip: Int, $first: Int = 100, $orderBy: Burn_orderBy, $orderDirection: OrderDirection, $where: Burn_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { burns(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "burns", type: "[Burn!]!")
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
  ): Swap @resolver(subgraph: "uniswap", operation: "query swap($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { swap(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "swap", type: "Swap")
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
  ): [Swap!]! @resolver(subgraph: "uniswap", operation: "query swaps($skip: Int, $first: Int = 100, $orderBy: Swap_orderBy, $orderDirection: OrderDirection, $where: Swap_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { swaps(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "swaps", type: "[Swap!]!")
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
  ): Bundle @resolver(subgraph: "uniswap", operation: "query bundle($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { bundle(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "bundle", type: "Bundle")
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
  ): [Bundle!]! @resolver(subgraph: "uniswap", operation: "query bundles($skip: Int, $first: Int = 100, $orderBy: Bundle_orderBy, $orderDirection: OrderDirection, $where: Bundle_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { bundles(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "bundles", type: "[Bundle!]!")
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
  ): UniswapDayData @resolver(subgraph: "uniswap", operation: "query uniswapDayData($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { uniswapDayData(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "uniswapDayData", type: "UniswapDayData")
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
  ): [UniswapDayData!]! @resolver(subgraph: "uniswap", operation: "query uniswapDayDatas($skip: Int, $first: Int = 100, $orderBy: UniswapDayData_orderBy, $orderDirection: OrderDirection, $where: UniswapDayData_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { uniswapDayDatas(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "uniswapDayDatas", type: "[UniswapDayData!]!")
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
  ): PairHourData @resolver(subgraph: "uniswap", operation: "query pairHourData($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { pairHourData(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "pairHourData", type: "PairHourData")
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
  ): [PairHourData!]! @resolver(subgraph: "uniswap", operation: "query pairHourDatas($skip: Int, $first: Int = 100, $orderBy: PairHourData_orderBy, $orderDirection: OrderDirection, $where: PairHourData_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { pairHourDatas(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "pairHourDatas", type: "[PairHourData!]!")
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
  ): PairDayData @resolver(subgraph: "uniswap", operation: "query pairDayData($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { pairDayData(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "pairDayData", type: "PairDayData")
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
  ): [PairDayData!]! @resolver(subgraph: "uniswap", operation: "query pairDayDatas($skip: Int, $first: Int = 100, $orderBy: PairDayData_orderBy, $orderDirection: OrderDirection, $where: PairDayData_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { pairDayDatas(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "pairDayDatas", type: "[PairDayData!]!")
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
  ): TokenDayData @resolver(subgraph: "uniswap", operation: "query tokenDayData($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { tokenDayData(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "tokenDayData", type: "TokenDayData")
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
  ): [TokenDayData!]! @resolver(subgraph: "uniswap", operation: "query tokenDayDatas($skip: Int, $first: Int = 100, $orderBy: TokenDayData_orderBy, $orderDirection: OrderDirection, $where: TokenDayData_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { tokenDayDatas(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "tokenDayDatas", type: "[TokenDayData!]!")
}

type Subscription {
  account(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): User @resolver(subgraph: "nft", operation: "subscription subscriptionaccount($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { account(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "account", type: "Account")
  accounts(
    skip: Int = 0
    first: Int = 100
    orderBy: Account_orderBy
    orderDirection: OrderDirection
    where: Account_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [User!]! @resolver(subgraph: "nft", operation: "subscription subscriptionaccounts($skip: Int, $first: Int = 100, $orderBy: Account_orderBy, $orderDirection: OrderDirection, $where: Account_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { accounts(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "accounts", type: "[Account!]!")
  erc721Contract(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): ERC721Contract @resolver(subgraph: "nft", operation: "subscription subscriptionerc721Contract($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Contract(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Contract", type: "ERC721Contract")
  erc721Contracts(
    skip: Int = 0
    first: Int = 100
    orderBy: ERC721Contract_orderBy
    orderDirection: OrderDirection
    where: ERC721Contract_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [ERC721Contract!]! @resolver(subgraph: "nft", operation: "subscription subscriptionerc721Contracts($skip: Int, $first: Int = 100, $orderBy: ERC721Contract_orderBy, $orderDirection: OrderDirection, $where: ERC721Contract_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Contracts(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Contracts", type: "[ERC721Contract!]!")
  erc721Token(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): ERC721Token @resolver(subgraph: "nft", operation: "subscription subscriptionerc721Token($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Token(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Token", type: "ERC721Token")
  erc721Tokens(
    skip: Int = 0
    first: Int = 100
    orderBy: ERC721Token_orderBy
    orderDirection: OrderDirection
    where: ERC721Token_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [ERC721Token!]! @resolver(subgraph: "nft", operation: "subscription subscriptionerc721Tokens($skip: Int, $first: Int = 100, $orderBy: ERC721Token_orderBy, $orderDirection: OrderDirection, $where: ERC721Token_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Tokens(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Tokens", type: "[ERC721Token!]!")
  erc721Operator(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): ERC721Operator @resolver(subgraph: "nft", operation: "subscription subscriptionerc721Operator($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Operator(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Operator", type: "ERC721Operator")
  erc721Operators(
    skip: Int = 0
    first: Int = 100
    orderBy: ERC721Operator_orderBy
    orderDirection: OrderDirection
    where: ERC721Operator_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [ERC721Operator!]! @resolver(subgraph: "nft", operation: "subscription subscriptionerc721Operators($skip: Int, $first: Int = 100, $orderBy: ERC721Operator_orderBy, $orderDirection: OrderDirection, $where: ERC721Operator_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Operators(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Operators", type: "[ERC721Operator!]!")
  erc721Transfer(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): ERC721Transfer @resolver(subgraph: "nft", operation: "subscription subscriptionerc721Transfer($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Transfer(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Transfer", type: "ERC721Transfer")
  erc721Transfers(
    skip: Int = 0
    first: Int = 100
    orderBy: ERC721Transfer_orderBy
    orderDirection: OrderDirection
    where: ERC721Transfer_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [ERC721Transfer!]! @resolver(subgraph: "nft", operation: "subscription subscriptionerc721Transfers($skip: Int, $first: Int = 100, $orderBy: ERC721Transfer_orderBy, $orderDirection: OrderDirection, $where: ERC721Transfer_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { erc721Transfers(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "erc721Transfers", type: "[ERC721Transfer!]!")
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
  ): Transaction @resolver(subgraph: "nft", operation: "subscription subscriptiontransaction($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { transaction(id: $id, block: $block, subgraphError: $subgraphError) }") @resolver(subgraph: "uniswap", operation: "subscription subscriptiontransaction($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { transaction(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "transaction", type: "Transaction") @source(subgraph: "uniswap", name: "transaction", type: "Transaction")
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
  ): [Transaction!]! @resolver(subgraph: "nft", operation: "subscription subscriptiontransactions($skip: Int, $first: Int = 100, $orderBy: Transaction_orderBy, $orderDirection: OrderDirection, $where: Transaction_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { transactions(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @resolver(subgraph: "uniswap", operation: "subscription subscriptiontransactions($skip: Int, $first: Int = 100, $orderBy: Transaction_orderBy, $orderDirection: OrderDirection, $where: Transaction_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { transactions(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "transactions", type: "[Transaction!]!") @source(subgraph: "uniswap", name: "transactions", type: "[Transaction!]!")
  event(
    id: ID!
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): Event @resolver(subgraph: "nft", operation: "subscription subscriptionevent($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { event(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "event", type: "Event")
  events(
    skip: Int = 0
    first: Int = 100
    orderBy: Event_orderBy
    orderDirection: OrderDirection
    where: Event_filter
    """
    The block at which the query should be executed. Can either be a \`{ hash: Bytes }\` value containing a block hash, a \`{ number: Int }\` containing the block number, or a \`{ number_gte: Int }\` containing the minimum block number. In the case of \`number_gte\`, the query will be executed on the latest block only if the subgraph has progressed to or past the minimum block number. Defaults to the latest block when omitted.
    """
    block: Block_height
    """
    Set to \`allow\` to receive data even if the subgraph has skipped over errors while syncing.
    """
    subgraphError: _SubgraphErrorPolicy_! = deny
  ): [Event!]! @resolver(subgraph: "nft", operation: "subscription subscriptionevents($skip: Int, $first: Int = 100, $orderBy: Event_orderBy, $orderDirection: OrderDirection, $where: Event_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { events(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "nft", name: "events", type: "[Event!]!")
  """Access to subgraph metadata"""
  _meta(block: Block_height): _Meta_ @resolver(subgraph: "nft", operation: "subscription subscription_meta($block: Block_height) { _meta(block: $block) }") @resolver(subgraph: "uniswap", operation: "subscription subscription_meta($block: Block_height) { _meta(block: $block) }") @source(subgraph: "nft", name: "_meta", type: "_Meta_") @source(subgraph: "uniswap", name: "_meta", type: "_Meta_")
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
  ): UniswapFactory @resolver(subgraph: "uniswap", operation: "subscription subscriptionuniswapFactory($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { uniswapFactory(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "uniswapFactory", type: "UniswapFactory")
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
  ): [UniswapFactory!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptionuniswapFactories($skip: Int, $first: Int = 100, $orderBy: UniswapFactory_orderBy, $orderDirection: OrderDirection, $where: UniswapFactory_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { uniswapFactories(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "uniswapFactories", type: "[UniswapFactory!]!")
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
  ): Token @resolver(subgraph: "uniswap", operation: "subscription subscriptiontoken($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { token(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "token", type: "Token")
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
  ): [Token!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptiontokens($skip: Int, $first: Int = 100, $orderBy: Token_orderBy, $orderDirection: OrderDirection, $where: Token_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { tokens(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "tokens", type: "[Token!]!")
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
  ): Pair @resolver(subgraph: "uniswap", operation: "subscription subscriptionpair($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { pair(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "pair", type: "Pair")
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
  ): [Pair!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptionpairs($skip: Int, $first: Int = 100, $orderBy: Pair_orderBy, $orderDirection: OrderDirection, $where: Pair_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { pairs(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "pairs", type: "[Pair!]!")
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
  ): User @resolver(subgraph: "uniswap", operation: "subscription subscriptionuser($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { user(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "user", type: "User")
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
  ): [User!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptionusers($skip: Int, $first: Int = 100, $orderBy: User_orderBy, $orderDirection: OrderDirection, $where: User_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { users(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "users", type: "[User!]!")
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
  ): LiquidityPosition @resolver(subgraph: "uniswap", operation: "subscription subscriptionliquidityPosition($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { liquidityPosition(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "liquidityPosition", type: "LiquidityPosition")
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
  ): [LiquidityPosition!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptionliquidityPositions($skip: Int, $first: Int = 100, $orderBy: LiquidityPosition_orderBy, $orderDirection: OrderDirection, $where: LiquidityPosition_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { liquidityPositions(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "liquidityPositions", type: "[LiquidityPosition!]!")
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
  ): LiquidityPositionSnapshot @resolver(subgraph: "uniswap", operation: "subscription subscriptionliquidityPositionSnapshot($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { liquidityPositionSnapshot(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "liquidityPositionSnapshot", type: "LiquidityPositionSnapshot")
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
  ): [LiquidityPositionSnapshot!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptionliquidityPositionSnapshots($skip: Int, $first: Int = 100, $orderBy: LiquidityPositionSnapshot_orderBy, $orderDirection: OrderDirection, $where: LiquidityPositionSnapshot_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { liquidityPositionSnapshots(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "liquidityPositionSnapshots", type: "[LiquidityPositionSnapshot!]!")
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
  ): Mint @resolver(subgraph: "uniswap", operation: "subscription subscriptionmint($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { mint(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "mint", type: "Mint")
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
  ): [Mint!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptionmints($skip: Int, $first: Int = 100, $orderBy: Mint_orderBy, $orderDirection: OrderDirection, $where: Mint_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { mints(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "mints", type: "[Mint!]!")
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
  ): Burn @resolver(subgraph: "uniswap", operation: "subscription subscriptionburn($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { burn(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "burn", type: "Burn")
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
  ): [Burn!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptionburns($skip: Int, $first: Int = 100, $orderBy: Burn_orderBy, $orderDirection: OrderDirection, $where: Burn_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { burns(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "burns", type: "[Burn!]!")
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
  ): Swap @resolver(subgraph: "uniswap", operation: "subscription subscriptionswap($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { swap(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "swap", type: "Swap")
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
  ): [Swap!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptionswaps($skip: Int, $first: Int = 100, $orderBy: Swap_orderBy, $orderDirection: OrderDirection, $where: Swap_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { swaps(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "swaps", type: "[Swap!]!")
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
  ): Bundle @resolver(subgraph: "uniswap", operation: "subscription subscriptionbundle($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { bundle(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "bundle", type: "Bundle")
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
  ): [Bundle!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptionbundles($skip: Int, $first: Int = 100, $orderBy: Bundle_orderBy, $orderDirection: OrderDirection, $where: Bundle_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { bundles(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "bundles", type: "[Bundle!]!")
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
  ): UniswapDayData @resolver(subgraph: "uniswap", operation: "subscription subscriptionuniswapDayData($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { uniswapDayData(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "uniswapDayData", type: "UniswapDayData")
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
  ): [UniswapDayData!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptionuniswapDayDatas($skip: Int, $first: Int = 100, $orderBy: UniswapDayData_orderBy, $orderDirection: OrderDirection, $where: UniswapDayData_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { uniswapDayDatas(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "uniswapDayDatas", type: "[UniswapDayData!]!")
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
  ): PairHourData @resolver(subgraph: "uniswap", operation: "subscription subscriptionpairHourData($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { pairHourData(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "pairHourData", type: "PairHourData")
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
  ): [PairHourData!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptionpairHourDatas($skip: Int, $first: Int = 100, $orderBy: PairHourData_orderBy, $orderDirection: OrderDirection, $where: PairHourData_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { pairHourDatas(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "pairHourDatas", type: "[PairHourData!]!")
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
  ): PairDayData @resolver(subgraph: "uniswap", operation: "subscription subscriptionpairDayData($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { pairDayData(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "pairDayData", type: "PairDayData")
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
  ): [PairDayData!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptionpairDayDatas($skip: Int, $first: Int = 100, $orderBy: PairDayData_orderBy, $orderDirection: OrderDirection, $where: PairDayData_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { pairDayDatas(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "pairDayDatas", type: "[PairDayData!]!")
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
  ): TokenDayData @resolver(subgraph: "uniswap", operation: "subscription subscriptiontokenDayData($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { tokenDayData(id: $id, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "tokenDayData", type: "TokenDayData")
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
  ): [TokenDayData!]! @resolver(subgraph: "uniswap", operation: "subscription subscriptiontokenDayDatas($skip: Int, $first: Int = 100, $orderBy: TokenDayData_orderBy, $orderDirection: OrderDirection, $where: TokenDayData_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = \"deny\") { tokenDayDatas(skip: $skip, first: $first, orderBy: $orderBy, orderDirection: $orderDirection, where: $where, block: $block, subgraphError: $subgraphError) }") @source(subgraph: "uniswap", name: "tokenDayDatas", type: "[TokenDayData!]!")
}

type Transaction @source(subgraph: "nft", name: "Transaction") @source(subgraph: "uniswap", name: "Transaction") @resolver(subgraph: "nft", operation: "query TransactionById($Transaction_id: ID!) { transaction(id: $Transaction_id) }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetTransactionById($Transaction_id: ID!) { transactions(where: { id: $Transaction_id) } }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetTransactionsByIds($Transaction_id: [ID!]!) { transactions(where: { id_in: $Transaction_id }) }", kind: "BATCH") @resolver(subgraph: "nft", operation: "query TransactionById($Transaction_id: ID!) { transaction(id: $Transaction_id) }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetTransactionById($Transaction_id: ID!) { transactions(where: { id: $Transaction_id) } }", kind: "FETCH") @resolver(subgraph: "nft", operation: "query GetTransactionsByIds($Transaction_id: [ID!]!) { transactions(where: { id_in: $Transaction_id }) }", kind: "BATCH") @resolver(subgraph: "uniswap", operation: "query TransactionById($Transaction_id: ID!) { transaction(id: $Transaction_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetTransactionById($Transaction_id: ID!) { transactions(where: { id: $Transaction_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetTransactionsByIds($Transaction_id: [ID!]!) { transactions(where: { id_in: $Transaction_id }) }", kind: "BATCH") @variable(subgraph: "nft", name: "Transaction_id", select: "id") @variable(subgraph: "uniswap", name: "Transaction_id", select: "id") @variable(subgraph: "nft", name: "Transaction_id", select: "id") @variable(subgraph: "uniswap", name: "Transaction_id", select: "id") {
  id: ID! @source(subgraph: "nft", name: "id", type: "ID!") @source(subgraph: "uniswap", name: "id", type: "ID!")
  timestamp: BigInt! @source(subgraph: "nft", name: "timestamp", type: "BigInt!") @source(subgraph: "uniswap", name: "timestamp", type: "BigInt!")
  blockNumber: BigInt! @source(subgraph: "nft", name: "blockNumber", type: "BigInt!") @source(subgraph: "uniswap", name: "blockNumber", type: "BigInt!")
  events(skip: Int = 0, first: Int = 100, orderBy: Event_orderBy, orderDirection: OrderDirection, where: Event_filter): [Event!]! @source(subgraph: "nft", name: "events", type: "[Event!]!")
  mints(skip: Int = 0, first: Int = 100, orderBy: Mint_orderBy, orderDirection: OrderDirection, where: Mint_filter): [Mint]! @source(subgraph: "uniswap", name: "mints", type: "[Mint]!")
  burns(skip: Int = 0, first: Int = 100, orderBy: Burn_orderBy, orderDirection: OrderDirection, where: Burn_filter): [Burn]! @source(subgraph: "uniswap", name: "burns", type: "[Burn]!")
  swaps(skip: Int = 0, first: Int = 100, orderBy: Swap_orderBy, orderDirection: OrderDirection, where: Swap_filter): [Swap]! @source(subgraph: "uniswap", name: "swaps", type: "[Swap]!")
}

input Transaction_filter @source(subgraph: "nft", name: "Transaction_filter") @source(subgraph: "uniswap", name: "Transaction_filter") {
  id: ID @source(subgraph: "nft", name: "id", type: "ID") @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "nft", name: "id_not", type: "ID") @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "nft", name: "id_gt", type: "ID") @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "nft", name: "id_lt", type: "ID") @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "nft", name: "id_gte", type: "ID") @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "nft", name: "id_lte", type: "ID") @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "nft", name: "id_in", type: "[ID!]") @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "nft", name: "id_not_in", type: "[ID!]") @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  timestamp: BigInt @source(subgraph: "nft", name: "timestamp", type: "BigInt") @source(subgraph: "uniswap", name: "timestamp", type: "BigInt")
  timestamp_not: BigInt @source(subgraph: "nft", name: "timestamp_not", type: "BigInt") @source(subgraph: "uniswap", name: "timestamp_not", type: "BigInt")
  timestamp_gt: BigInt @source(subgraph: "nft", name: "timestamp_gt", type: "BigInt") @source(subgraph: "uniswap", name: "timestamp_gt", type: "BigInt")
  timestamp_lt: BigInt @source(subgraph: "nft", name: "timestamp_lt", type: "BigInt") @source(subgraph: "uniswap", name: "timestamp_lt", type: "BigInt")
  timestamp_gte: BigInt @source(subgraph: "nft", name: "timestamp_gte", type: "BigInt") @source(subgraph: "uniswap", name: "timestamp_gte", type: "BigInt")
  timestamp_lte: BigInt @source(subgraph: "nft", name: "timestamp_lte", type: "BigInt") @source(subgraph: "uniswap", name: "timestamp_lte", type: "BigInt")
  timestamp_in: [BigInt!] @source(subgraph: "nft", name: "timestamp_in", type: "[BigInt!]") @source(subgraph: "uniswap", name: "timestamp_in", type: "[BigInt!]")
  timestamp_not_in: [BigInt!] @source(subgraph: "nft", name: "timestamp_not_in", type: "[BigInt!]") @source(subgraph: "uniswap", name: "timestamp_not_in", type: "[BigInt!]")
  blockNumber: BigInt @source(subgraph: "nft", name: "blockNumber", type: "BigInt") @source(subgraph: "uniswap", name: "blockNumber", type: "BigInt")
  blockNumber_not: BigInt @source(subgraph: "nft", name: "blockNumber_not", type: "BigInt") @source(subgraph: "uniswap", name: "blockNumber_not", type: "BigInt")
  blockNumber_gt: BigInt @source(subgraph: "nft", name: "blockNumber_gt", type: "BigInt") @source(subgraph: "uniswap", name: "blockNumber_gt", type: "BigInt")
  blockNumber_lt: BigInt @source(subgraph: "nft", name: "blockNumber_lt", type: "BigInt") @source(subgraph: "uniswap", name: "blockNumber_lt", type: "BigInt")
  blockNumber_gte: BigInt @source(subgraph: "nft", name: "blockNumber_gte", type: "BigInt") @source(subgraph: "uniswap", name: "blockNumber_gte", type: "BigInt")
  blockNumber_lte: BigInt @source(subgraph: "nft", name: "blockNumber_lte", type: "BigInt") @source(subgraph: "uniswap", name: "blockNumber_lte", type: "BigInt")
  blockNumber_in: [BigInt!] @source(subgraph: "nft", name: "blockNumber_in", type: "[BigInt!]") @source(subgraph: "uniswap", name: "blockNumber_in", type: "[BigInt!]")
  blockNumber_not_in: [BigInt!] @source(subgraph: "nft", name: "blockNumber_not_in", type: "[BigInt!]") @source(subgraph: "uniswap", name: "blockNumber_not_in", type: "[BigInt!]")
  events_: Event_filter @source(subgraph: "nft", name: "events_", type: "Event_filter")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "nft", name: "_change_block", type: "BlockChangedFilter") @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [Transaction_filter] @source(subgraph: "nft", name: "and", type: "[Transaction_filter]") @source(subgraph: "uniswap", name: "and", type: "[Transaction_filter]")
  or: [Transaction_filter] @source(subgraph: "nft", name: "or", type: "[Transaction_filter]") @source(subgraph: "uniswap", name: "or", type: "[Transaction_filter]")
  mints: [String!] @source(subgraph: "uniswap", name: "mints", type: "[String!]")
  mints_not: [String!] @source(subgraph: "uniswap", name: "mints_not", type: "[String!]")
  mints_contains: [String!] @source(subgraph: "uniswap", name: "mints_contains", type: "[String!]")
  mints_contains_nocase: [String!] @source(subgraph: "uniswap", name: "mints_contains_nocase", type: "[String!]")
  mints_not_contains: [String!] @source(subgraph: "uniswap", name: "mints_not_contains", type: "[String!]")
  mints_not_contains_nocase: [String!] @source(subgraph: "uniswap", name: "mints_not_contains_nocase", type: "[String!]")
  mints_: Mint_filter @source(subgraph: "uniswap", name: "mints_", type: "Mint_filter")
  burns: [String!] @source(subgraph: "uniswap", name: "burns", type: "[String!]")
  burns_not: [String!] @source(subgraph: "uniswap", name: "burns_not", type: "[String!]")
  burns_contains: [String!] @source(subgraph: "uniswap", name: "burns_contains", type: "[String!]")
  burns_contains_nocase: [String!] @source(subgraph: "uniswap", name: "burns_contains_nocase", type: "[String!]")
  burns_not_contains: [String!] @source(subgraph: "uniswap", name: "burns_not_contains", type: "[String!]")
  burns_not_contains_nocase: [String!] @source(subgraph: "uniswap", name: "burns_not_contains_nocase", type: "[String!]")
  burns_: Burn_filter @source(subgraph: "uniswap", name: "burns_", type: "Burn_filter")
  swaps: [String!] @source(subgraph: "uniswap", name: "swaps", type: "[String!]")
  swaps_not: [String!] @source(subgraph: "uniswap", name: "swaps_not", type: "[String!]")
  swaps_contains: [String!] @source(subgraph: "uniswap", name: "swaps_contains", type: "[String!]")
  swaps_contains_nocase: [String!] @source(subgraph: "uniswap", name: "swaps_contains_nocase", type: "[String!]")
  swaps_not_contains: [String!] @source(subgraph: "uniswap", name: "swaps_not_contains", type: "[String!]")
  swaps_not_contains_nocase: [String!] @source(subgraph: "uniswap", name: "swaps_not_contains_nocase", type: "[String!]")
  swaps_: Swap_filter @source(subgraph: "uniswap", name: "swaps_", type: "Swap_filter")
}

enum Transaction_orderBy @source(subgraph: "nft", name: "Transaction_orderBy") @source(subgraph: "uniswap", name: "Transaction_orderBy") {
  id @source(subgraph: "nft", name: "id") @source(subgraph: "uniswap", name: "id")
  blockNumber @source(subgraph: "nft", name: "blockNumber") @source(subgraph: "uniswap", name: "blockNumber")
  timestamp @source(subgraph: "nft", name: "timestamp") @source(subgraph: "uniswap", name: "timestamp")
  mints @source(subgraph: "uniswap", name: "mints")
  burns @source(subgraph: "uniswap", name: "burns")
  swaps @source(subgraph: "uniswap", name: "swaps")
  events @source(subgraph: "nft", name: "events")
}

type _Block_ @source(subgraph: "nft", name: "_Block_") @source(subgraph: "uniswap", name: "_Block_") {
  """The hash of the block"""
  hash: Bytes @source(subgraph: "nft", name: "hash", type: "Bytes") @source(subgraph: "uniswap", name: "hash", type: "Bytes")
  """The block number"""
  number: Int! @source(subgraph: "nft", name: "number", type: "Int!") @source(subgraph: "uniswap", name: "number", type: "Int!")
  """Integer representation of the timestamp stored in blocks for the chain"""
  timestamp: Int @source(subgraph: "nft", name: "timestamp", type: "Int") @source(subgraph: "uniswap", name: "timestamp", type: "Int")
  """The hash of the parent block"""
  parentHash: Bytes @source(subgraph: "nft", name: "parentHash", type: "Bytes") @source(subgraph: "uniswap", name: "parentHash", type: "Bytes")
}

"""The type for the top-level _meta field"""
type _Meta_ @source(subgraph: "nft", name: "_Meta_") @source(subgraph: "uniswap", name: "_Meta_") {
  """
  Information about a specific subgraph block. The hash of the block
  will be null if the _meta field has a block constraint that asks for
  a block number. It will be filled if the _meta field has no block constraint
  and therefore asks for the latest  block
  
  """
  block: _Block_! @source(subgraph: "nft", name: "block", type: "_Block_!") @source(subgraph: "uniswap", name: "block", type: "_Block_!")
  """The deployment ID"""
  deployment: String! @source(subgraph: "nft", name: "deployment", type: "String!") @source(subgraph: "uniswap", name: "deployment", type: "String!")
  """If \`true\`, the subgraph encountered indexing errors at some past block"""
  hasIndexingErrors: Boolean! @source(subgraph: "nft", name: "hasIndexingErrors", type: "Boolean!") @source(subgraph: "uniswap", name: "hasIndexingErrors", type: "Boolean!")
}

enum _SubgraphErrorPolicy_ @source(subgraph: "nft", name: "_SubgraphErrorPolicy_") @source(subgraph: "uniswap", name: "_SubgraphErrorPolicy_") {
  """Data will be returned even if the subgraph has indexing errors"""
  allow @source(subgraph: "nft", name: "allow") @source(subgraph: "uniswap", name: "allow")
  """
  If the subgraph has indexing errors, data will be omitted. The default.
  """
  deny @source(subgraph: "nft", name: "deny") @source(subgraph: "uniswap", name: "deny")
}

type Bundle @source(subgraph: "uniswap", name: "Bundle") @resolver(subgraph: "uniswap", operation: "query BundleById($Bundle_id: ID!) { bundle(id: $Bundle_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetBundleById($Bundle_id: ID!) { bundles(where: { id: $Bundle_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetBundlesByIds($Bundle_id: [ID!]!) { bundles(where: { id_in: $Bundle_id }) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "Bundle_id", select: "id") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  ethPrice: BigDecimal! @source(subgraph: "uniswap", name: "ethPrice", type: "BigDecimal!")
}

input Bundle_filter @source(subgraph: "uniswap", name: "Bundle_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  ethPrice: BigDecimal @source(subgraph: "uniswap", name: "ethPrice", type: "BigDecimal")
  ethPrice_not: BigDecimal @source(subgraph: "uniswap", name: "ethPrice_not", type: "BigDecimal")
  ethPrice_gt: BigDecimal @source(subgraph: "uniswap", name: "ethPrice_gt", type: "BigDecimal")
  ethPrice_lt: BigDecimal @source(subgraph: "uniswap", name: "ethPrice_lt", type: "BigDecimal")
  ethPrice_gte: BigDecimal @source(subgraph: "uniswap", name: "ethPrice_gte", type: "BigDecimal")
  ethPrice_lte: BigDecimal @source(subgraph: "uniswap", name: "ethPrice_lte", type: "BigDecimal")
  ethPrice_in: [BigDecimal!] @source(subgraph: "uniswap", name: "ethPrice_in", type: "[BigDecimal!]")
  ethPrice_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "ethPrice_not_in", type: "[BigDecimal!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [Bundle_filter] @source(subgraph: "uniswap", name: "and", type: "[Bundle_filter]")
  or: [Bundle_filter] @source(subgraph: "uniswap", name: "or", type: "[Bundle_filter]")
}

enum Bundle_orderBy @source(subgraph: "uniswap", name: "Bundle_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  ethPrice @source(subgraph: "uniswap", name: "ethPrice")
}

type Burn @source(subgraph: "uniswap", name: "Burn") @resolver(subgraph: "uniswap", operation: "query BurnById($Burn_id: ID!) { burn(id: $Burn_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetBurnById($Burn_id: ID!) { burns(where: { id: $Burn_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetBurnsByIds($Burn_id: [ID!]!) { burns(where: { id_in: $Burn_id }) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "Burn_id", select: "id") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  transaction: Transaction! @source(subgraph: "uniswap", name: "transaction", type: "Transaction!")
  timestamp: BigInt! @source(subgraph: "uniswap", name: "timestamp", type: "BigInt!")
  pair: Pair! @source(subgraph: "uniswap", name: "pair", type: "Pair!")
  liquidity: BigDecimal! @source(subgraph: "uniswap", name: "liquidity", type: "BigDecimal!")
  sender: Bytes @source(subgraph: "uniswap", name: "sender", type: "Bytes")
  amount0: BigDecimal @source(subgraph: "uniswap", name: "amount0", type: "BigDecimal")
  amount1: BigDecimal @source(subgraph: "uniswap", name: "amount1", type: "BigDecimal")
  to: Bytes @source(subgraph: "uniswap", name: "to", type: "Bytes")
  logIndex: BigInt @source(subgraph: "uniswap", name: "logIndex", type: "BigInt")
  amountUSD: BigDecimal @source(subgraph: "uniswap", name: "amountUSD", type: "BigDecimal")
  needsComplete: Boolean! @source(subgraph: "uniswap", name: "needsComplete", type: "Boolean!")
  feeTo: Bytes @source(subgraph: "uniswap", name: "feeTo", type: "Bytes")
  feeLiquidity: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity", type: "BigDecimal")
}

input Burn_filter @source(subgraph: "uniswap", name: "Burn_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  transaction: String @source(subgraph: "uniswap", name: "transaction", type: "String")
  transaction_not: String @source(subgraph: "uniswap", name: "transaction_not", type: "String")
  transaction_gt: String @source(subgraph: "uniswap", name: "transaction_gt", type: "String")
  transaction_lt: String @source(subgraph: "uniswap", name: "transaction_lt", type: "String")
  transaction_gte: String @source(subgraph: "uniswap", name: "transaction_gte", type: "String")
  transaction_lte: String @source(subgraph: "uniswap", name: "transaction_lte", type: "String")
  transaction_in: [String!] @source(subgraph: "uniswap", name: "transaction_in", type: "[String!]")
  transaction_not_in: [String!] @source(subgraph: "uniswap", name: "transaction_not_in", type: "[String!]")
  transaction_contains: String @source(subgraph: "uniswap", name: "transaction_contains", type: "String")
  transaction_contains_nocase: String @source(subgraph: "uniswap", name: "transaction_contains_nocase", type: "String")
  transaction_not_contains: String @source(subgraph: "uniswap", name: "transaction_not_contains", type: "String")
  transaction_not_contains_nocase: String @source(subgraph: "uniswap", name: "transaction_not_contains_nocase", type: "String")
  transaction_starts_with: String @source(subgraph: "uniswap", name: "transaction_starts_with", type: "String")
  transaction_starts_with_nocase: String @source(subgraph: "uniswap", name: "transaction_starts_with_nocase", type: "String")
  transaction_not_starts_with: String @source(subgraph: "uniswap", name: "transaction_not_starts_with", type: "String")
  transaction_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "transaction_not_starts_with_nocase", type: "String")
  transaction_ends_with: String @source(subgraph: "uniswap", name: "transaction_ends_with", type: "String")
  transaction_ends_with_nocase: String @source(subgraph: "uniswap", name: "transaction_ends_with_nocase", type: "String")
  transaction_not_ends_with: String @source(subgraph: "uniswap", name: "transaction_not_ends_with", type: "String")
  transaction_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "transaction_not_ends_with_nocase", type: "String")
  transaction_: Transaction_filter @source(subgraph: "uniswap", name: "transaction_", type: "Transaction_filter")
  timestamp: BigInt @source(subgraph: "uniswap", name: "timestamp", type: "BigInt")
  timestamp_not: BigInt @source(subgraph: "uniswap", name: "timestamp_not", type: "BigInt")
  timestamp_gt: BigInt @source(subgraph: "uniswap", name: "timestamp_gt", type: "BigInt")
  timestamp_lt: BigInt @source(subgraph: "uniswap", name: "timestamp_lt", type: "BigInt")
  timestamp_gte: BigInt @source(subgraph: "uniswap", name: "timestamp_gte", type: "BigInt")
  timestamp_lte: BigInt @source(subgraph: "uniswap", name: "timestamp_lte", type: "BigInt")
  timestamp_in: [BigInt!] @source(subgraph: "uniswap", name: "timestamp_in", type: "[BigInt!]")
  timestamp_not_in: [BigInt!] @source(subgraph: "uniswap", name: "timestamp_not_in", type: "[BigInt!]")
  pair: String @source(subgraph: "uniswap", name: "pair", type: "String")
  pair_not: String @source(subgraph: "uniswap", name: "pair_not", type: "String")
  pair_gt: String @source(subgraph: "uniswap", name: "pair_gt", type: "String")
  pair_lt: String @source(subgraph: "uniswap", name: "pair_lt", type: "String")
  pair_gte: String @source(subgraph: "uniswap", name: "pair_gte", type: "String")
  pair_lte: String @source(subgraph: "uniswap", name: "pair_lte", type: "String")
  pair_in: [String!] @source(subgraph: "uniswap", name: "pair_in", type: "[String!]")
  pair_not_in: [String!] @source(subgraph: "uniswap", name: "pair_not_in", type: "[String!]")
  pair_contains: String @source(subgraph: "uniswap", name: "pair_contains", type: "String")
  pair_contains_nocase: String @source(subgraph: "uniswap", name: "pair_contains_nocase", type: "String")
  pair_not_contains: String @source(subgraph: "uniswap", name: "pair_not_contains", type: "String")
  pair_not_contains_nocase: String @source(subgraph: "uniswap", name: "pair_not_contains_nocase", type: "String")
  pair_starts_with: String @source(subgraph: "uniswap", name: "pair_starts_with", type: "String")
  pair_starts_with_nocase: String @source(subgraph: "uniswap", name: "pair_starts_with_nocase", type: "String")
  pair_not_starts_with: String @source(subgraph: "uniswap", name: "pair_not_starts_with", type: "String")
  pair_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "pair_not_starts_with_nocase", type: "String")
  pair_ends_with: String @source(subgraph: "uniswap", name: "pair_ends_with", type: "String")
  pair_ends_with_nocase: String @source(subgraph: "uniswap", name: "pair_ends_with_nocase", type: "String")
  pair_not_ends_with: String @source(subgraph: "uniswap", name: "pair_not_ends_with", type: "String")
  pair_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "pair_not_ends_with_nocase", type: "String")
  pair_: Pair_filter @source(subgraph: "uniswap", name: "pair_", type: "Pair_filter")
  liquidity: BigDecimal @source(subgraph: "uniswap", name: "liquidity", type: "BigDecimal")
  liquidity_not: BigDecimal @source(subgraph: "uniswap", name: "liquidity_not", type: "BigDecimal")
  liquidity_gt: BigDecimal @source(subgraph: "uniswap", name: "liquidity_gt", type: "BigDecimal")
  liquidity_lt: BigDecimal @source(subgraph: "uniswap", name: "liquidity_lt", type: "BigDecimal")
  liquidity_gte: BigDecimal @source(subgraph: "uniswap", name: "liquidity_gte", type: "BigDecimal")
  liquidity_lte: BigDecimal @source(subgraph: "uniswap", name: "liquidity_lte", type: "BigDecimal")
  liquidity_in: [BigDecimal!] @source(subgraph: "uniswap", name: "liquidity_in", type: "[BigDecimal!]")
  liquidity_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "liquidity_not_in", type: "[BigDecimal!]")
  sender: Bytes @source(subgraph: "uniswap", name: "sender", type: "Bytes")
  sender_not: Bytes @source(subgraph: "uniswap", name: "sender_not", type: "Bytes")
  sender_gt: Bytes @source(subgraph: "uniswap", name: "sender_gt", type: "Bytes")
  sender_lt: Bytes @source(subgraph: "uniswap", name: "sender_lt", type: "Bytes")
  sender_gte: Bytes @source(subgraph: "uniswap", name: "sender_gte", type: "Bytes")
  sender_lte: Bytes @source(subgraph: "uniswap", name: "sender_lte", type: "Bytes")
  sender_in: [Bytes!] @source(subgraph: "uniswap", name: "sender_in", type: "[Bytes!]")
  sender_not_in: [Bytes!] @source(subgraph: "uniswap", name: "sender_not_in", type: "[Bytes!]")
  sender_contains: Bytes @source(subgraph: "uniswap", name: "sender_contains", type: "Bytes")
  sender_not_contains: Bytes @source(subgraph: "uniswap", name: "sender_not_contains", type: "Bytes")
  amount0: BigDecimal @source(subgraph: "uniswap", name: "amount0", type: "BigDecimal")
  amount0_not: BigDecimal @source(subgraph: "uniswap", name: "amount0_not", type: "BigDecimal")
  amount0_gt: BigDecimal @source(subgraph: "uniswap", name: "amount0_gt", type: "BigDecimal")
  amount0_lt: BigDecimal @source(subgraph: "uniswap", name: "amount0_lt", type: "BigDecimal")
  amount0_gte: BigDecimal @source(subgraph: "uniswap", name: "amount0_gte", type: "BigDecimal")
  amount0_lte: BigDecimal @source(subgraph: "uniswap", name: "amount0_lte", type: "BigDecimal")
  amount0_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount0_in", type: "[BigDecimal!]")
  amount0_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount0_not_in", type: "[BigDecimal!]")
  amount1: BigDecimal @source(subgraph: "uniswap", name: "amount1", type: "BigDecimal")
  amount1_not: BigDecimal @source(subgraph: "uniswap", name: "amount1_not", type: "BigDecimal")
  amount1_gt: BigDecimal @source(subgraph: "uniswap", name: "amount1_gt", type: "BigDecimal")
  amount1_lt: BigDecimal @source(subgraph: "uniswap", name: "amount1_lt", type: "BigDecimal")
  amount1_gte: BigDecimal @source(subgraph: "uniswap", name: "amount1_gte", type: "BigDecimal")
  amount1_lte: BigDecimal @source(subgraph: "uniswap", name: "amount1_lte", type: "BigDecimal")
  amount1_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount1_in", type: "[BigDecimal!]")
  amount1_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount1_not_in", type: "[BigDecimal!]")
  to: Bytes @source(subgraph: "uniswap", name: "to", type: "Bytes")
  to_not: Bytes @source(subgraph: "uniswap", name: "to_not", type: "Bytes")
  to_gt: Bytes @source(subgraph: "uniswap", name: "to_gt", type: "Bytes")
  to_lt: Bytes @source(subgraph: "uniswap", name: "to_lt", type: "Bytes")
  to_gte: Bytes @source(subgraph: "uniswap", name: "to_gte", type: "Bytes")
  to_lte: Bytes @source(subgraph: "uniswap", name: "to_lte", type: "Bytes")
  to_in: [Bytes!] @source(subgraph: "uniswap", name: "to_in", type: "[Bytes!]")
  to_not_in: [Bytes!] @source(subgraph: "uniswap", name: "to_not_in", type: "[Bytes!]")
  to_contains: Bytes @source(subgraph: "uniswap", name: "to_contains", type: "Bytes")
  to_not_contains: Bytes @source(subgraph: "uniswap", name: "to_not_contains", type: "Bytes")
  logIndex: BigInt @source(subgraph: "uniswap", name: "logIndex", type: "BigInt")
  logIndex_not: BigInt @source(subgraph: "uniswap", name: "logIndex_not", type: "BigInt")
  logIndex_gt: BigInt @source(subgraph: "uniswap", name: "logIndex_gt", type: "BigInt")
  logIndex_lt: BigInt @source(subgraph: "uniswap", name: "logIndex_lt", type: "BigInt")
  logIndex_gte: BigInt @source(subgraph: "uniswap", name: "logIndex_gte", type: "BigInt")
  logIndex_lte: BigInt @source(subgraph: "uniswap", name: "logIndex_lte", type: "BigInt")
  logIndex_in: [BigInt!] @source(subgraph: "uniswap", name: "logIndex_in", type: "[BigInt!]")
  logIndex_not_in: [BigInt!] @source(subgraph: "uniswap", name: "logIndex_not_in", type: "[BigInt!]")
  amountUSD: BigDecimal @source(subgraph: "uniswap", name: "amountUSD", type: "BigDecimal")
  amountUSD_not: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_not", type: "BigDecimal")
  amountUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_gt", type: "BigDecimal")
  amountUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_lt", type: "BigDecimal")
  amountUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_gte", type: "BigDecimal")
  amountUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_lte", type: "BigDecimal")
  amountUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amountUSD_in", type: "[BigDecimal!]")
  amountUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amountUSD_not_in", type: "[BigDecimal!]")
  needsComplete: Boolean @source(subgraph: "uniswap", name: "needsComplete", type: "Boolean")
  needsComplete_not: Boolean @source(subgraph: "uniswap", name: "needsComplete_not", type: "Boolean")
  needsComplete_in: [Boolean!] @source(subgraph: "uniswap", name: "needsComplete_in", type: "[Boolean!]")
  needsComplete_not_in: [Boolean!] @source(subgraph: "uniswap", name: "needsComplete_not_in", type: "[Boolean!]")
  feeTo: Bytes @source(subgraph: "uniswap", name: "feeTo", type: "Bytes")
  feeTo_not: Bytes @source(subgraph: "uniswap", name: "feeTo_not", type: "Bytes")
  feeTo_gt: Bytes @source(subgraph: "uniswap", name: "feeTo_gt", type: "Bytes")
  feeTo_lt: Bytes @source(subgraph: "uniswap", name: "feeTo_lt", type: "Bytes")
  feeTo_gte: Bytes @source(subgraph: "uniswap", name: "feeTo_gte", type: "Bytes")
  feeTo_lte: Bytes @source(subgraph: "uniswap", name: "feeTo_lte", type: "Bytes")
  feeTo_in: [Bytes!] @source(subgraph: "uniswap", name: "feeTo_in", type: "[Bytes!]")
  feeTo_not_in: [Bytes!] @source(subgraph: "uniswap", name: "feeTo_not_in", type: "[Bytes!]")
  feeTo_contains: Bytes @source(subgraph: "uniswap", name: "feeTo_contains", type: "Bytes")
  feeTo_not_contains: Bytes @source(subgraph: "uniswap", name: "feeTo_not_contains", type: "Bytes")
  feeLiquidity: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity", type: "BigDecimal")
  feeLiquidity_not: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity_not", type: "BigDecimal")
  feeLiquidity_gt: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity_gt", type: "BigDecimal")
  feeLiquidity_lt: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity_lt", type: "BigDecimal")
  feeLiquidity_gte: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity_gte", type: "BigDecimal")
  feeLiquidity_lte: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity_lte", type: "BigDecimal")
  feeLiquidity_in: [BigDecimal!] @source(subgraph: "uniswap", name: "feeLiquidity_in", type: "[BigDecimal!]")
  feeLiquidity_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "feeLiquidity_not_in", type: "[BigDecimal!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [Burn_filter] @source(subgraph: "uniswap", name: "and", type: "[Burn_filter]")
  or: [Burn_filter] @source(subgraph: "uniswap", name: "or", type: "[Burn_filter]")
}

enum Burn_orderBy @source(subgraph: "uniswap", name: "Burn_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  transaction @source(subgraph: "uniswap", name: "transaction")
  transaction__id @source(subgraph: "uniswap", name: "transaction__id")
  transaction__blockNumber @source(subgraph: "uniswap", name: "transaction__blockNumber")
  transaction__timestamp @source(subgraph: "uniswap", name: "transaction__timestamp")
  timestamp @source(subgraph: "uniswap", name: "timestamp")
  pair @source(subgraph: "uniswap", name: "pair")
  pair__id @source(subgraph: "uniswap", name: "pair__id")
  pair__reserve0 @source(subgraph: "uniswap", name: "pair__reserve0")
  pair__reserve1 @source(subgraph: "uniswap", name: "pair__reserve1")
  pair__totalSupply @source(subgraph: "uniswap", name: "pair__totalSupply")
  pair__reserveETH @source(subgraph: "uniswap", name: "pair__reserveETH")
  pair__reserveUSD @source(subgraph: "uniswap", name: "pair__reserveUSD")
  pair__trackedReserveETH @source(subgraph: "uniswap", name: "pair__trackedReserveETH")
  pair__token0Price @source(subgraph: "uniswap", name: "pair__token0Price")
  pair__token1Price @source(subgraph: "uniswap", name: "pair__token1Price")
  pair__volumeToken0 @source(subgraph: "uniswap", name: "pair__volumeToken0")
  pair__volumeToken1 @source(subgraph: "uniswap", name: "pair__volumeToken1")
  pair__volumeUSD @source(subgraph: "uniswap", name: "pair__volumeUSD")
  pair__untrackedVolumeUSD @source(subgraph: "uniswap", name: "pair__untrackedVolumeUSD")
  pair__txCount @source(subgraph: "uniswap", name: "pair__txCount")
  pair__createdAtTimestamp @source(subgraph: "uniswap", name: "pair__createdAtTimestamp")
  pair__createdAtBlockNumber @source(subgraph: "uniswap", name: "pair__createdAtBlockNumber")
  pair__liquidityProviderCount @source(subgraph: "uniswap", name: "pair__liquidityProviderCount")
  liquidity @source(subgraph: "uniswap", name: "liquidity")
  sender @source(subgraph: "uniswap", name: "sender")
  amount0 @source(subgraph: "uniswap", name: "amount0")
  amount1 @source(subgraph: "uniswap", name: "amount1")
  to @source(subgraph: "uniswap", name: "to")
  logIndex @source(subgraph: "uniswap", name: "logIndex")
  amountUSD @source(subgraph: "uniswap", name: "amountUSD")
  needsComplete @source(subgraph: "uniswap", name: "needsComplete")
  feeTo @source(subgraph: "uniswap", name: "feeTo")
  feeLiquidity @source(subgraph: "uniswap", name: "feeLiquidity")
}

type LiquidityPosition @source(subgraph: "uniswap", name: "LiquidityPosition") @resolver(subgraph: "uniswap", operation: "query LiquidityPositionById($LiquidityPosition_id: ID!) { liquidityPosition(id: $LiquidityPosition_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetLiquidityPositionById($LiquidityPosition_id: ID!) { liquidityPositions(where: { id: $LiquidityPosition_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetLiquidityPositionsByIds($LiquidityPosition_id: [ID!]!) { liquidityPositions(where: { id_in: $LiquidityPosition_id }) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "LiquidityPosition_id", select: "id") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  user: User! @source(subgraph: "uniswap", name: "user", type: "User!")
  pair: Pair! @source(subgraph: "uniswap", name: "pair", type: "Pair!")
  liquidityTokenBalance: BigDecimal! @source(subgraph: "uniswap", name: "liquidityTokenBalance", type: "BigDecimal!")
}

type LiquidityPositionSnapshot @source(subgraph: "uniswap", name: "LiquidityPositionSnapshot") @resolver(subgraph: "uniswap", operation: "query LiquidityPositionSnapshotById($LiquidityPositionSnapshot_id: ID!) { liquidityPositionSnapshot(id: $LiquidityPositionSnapshot_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetLiquidityPositionSnapshotById($LiquidityPositionSnapshot_id: ID!) { liquidityPositionSnapshots(where: { id: $LiquidityPositionSnapshot_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetLiquidityPositionSnapshotsByIds($LiquidityPositionSnapshot_id: [ID!]!) { liquidityPositionSnapshots(where: { id_in: $LiquidityPositionSnapshot_id }) }", kind: "BATCH") @resolver(subgraph: "uniswap", operation: "query LiquidityPositionSnapshotsByTimestamps($LiquidityPositionSnapshot_timestamp: Int) { liquidityPositionSnapshots(skip: $LiquidityPositionSnapshot_timestamp) }", kind: "BATCH") @resolver(subgraph: "uniswap", operation: "query LiquidityPositionSnapshotsByBlocks($LiquidityPositionSnapshot_block: Int) { liquidityPositionSnapshots(skip: $LiquidityPositionSnapshot_block) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "LiquidityPositionSnapshot_id", select: "id") @variable(subgraph: "uniswap", name: "LiquidityPositionSnapshot_timestamp", select: "timestamp") @variable(subgraph: "uniswap", name: "LiquidityPositionSnapshot_block", select: "block") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  liquidityPosition: LiquidityPosition! @source(subgraph: "uniswap", name: "liquidityPosition", type: "LiquidityPosition!")
  timestamp: Int! @source(subgraph: "uniswap", name: "timestamp", type: "Int!")
  block: Int! @source(subgraph: "uniswap", name: "block", type: "Int!")
  user: User! @source(subgraph: "uniswap", name: "user", type: "User!")
  pair: Pair! @source(subgraph: "uniswap", name: "pair", type: "Pair!")
  token0PriceUSD: BigDecimal! @source(subgraph: "uniswap", name: "token0PriceUSD", type: "BigDecimal!")
  token1PriceUSD: BigDecimal! @source(subgraph: "uniswap", name: "token1PriceUSD", type: "BigDecimal!")
  reserve0: BigDecimal! @source(subgraph: "uniswap", name: "reserve0", type: "BigDecimal!")
  reserve1: BigDecimal! @source(subgraph: "uniswap", name: "reserve1", type: "BigDecimal!")
  reserveUSD: BigDecimal! @source(subgraph: "uniswap", name: "reserveUSD", type: "BigDecimal!")
  liquidityTokenTotalSupply: BigDecimal! @source(subgraph: "uniswap", name: "liquidityTokenTotalSupply", type: "BigDecimal!")
  liquidityTokenBalance: BigDecimal! @source(subgraph: "uniswap", name: "liquidityTokenBalance", type: "BigDecimal!")
}

input LiquidityPositionSnapshot_filter @source(subgraph: "uniswap", name: "LiquidityPositionSnapshot_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  liquidityPosition: String @source(subgraph: "uniswap", name: "liquidityPosition", type: "String")
  liquidityPosition_not: String @source(subgraph: "uniswap", name: "liquidityPosition_not", type: "String")
  liquidityPosition_gt: String @source(subgraph: "uniswap", name: "liquidityPosition_gt", type: "String")
  liquidityPosition_lt: String @source(subgraph: "uniswap", name: "liquidityPosition_lt", type: "String")
  liquidityPosition_gte: String @source(subgraph: "uniswap", name: "liquidityPosition_gte", type: "String")
  liquidityPosition_lte: String @source(subgraph: "uniswap", name: "liquidityPosition_lte", type: "String")
  liquidityPosition_in: [String!] @source(subgraph: "uniswap", name: "liquidityPosition_in", type: "[String!]")
  liquidityPosition_not_in: [String!] @source(subgraph: "uniswap", name: "liquidityPosition_not_in", type: "[String!]")
  liquidityPosition_contains: String @source(subgraph: "uniswap", name: "liquidityPosition_contains", type: "String")
  liquidityPosition_contains_nocase: String @source(subgraph: "uniswap", name: "liquidityPosition_contains_nocase", type: "String")
  liquidityPosition_not_contains: String @source(subgraph: "uniswap", name: "liquidityPosition_not_contains", type: "String")
  liquidityPosition_not_contains_nocase: String @source(subgraph: "uniswap", name: "liquidityPosition_not_contains_nocase", type: "String")
  liquidityPosition_starts_with: String @source(subgraph: "uniswap", name: "liquidityPosition_starts_with", type: "String")
  liquidityPosition_starts_with_nocase: String @source(subgraph: "uniswap", name: "liquidityPosition_starts_with_nocase", type: "String")
  liquidityPosition_not_starts_with: String @source(subgraph: "uniswap", name: "liquidityPosition_not_starts_with", type: "String")
  liquidityPosition_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "liquidityPosition_not_starts_with_nocase", type: "String")
  liquidityPosition_ends_with: String @source(subgraph: "uniswap", name: "liquidityPosition_ends_with", type: "String")
  liquidityPosition_ends_with_nocase: String @source(subgraph: "uniswap", name: "liquidityPosition_ends_with_nocase", type: "String")
  liquidityPosition_not_ends_with: String @source(subgraph: "uniswap", name: "liquidityPosition_not_ends_with", type: "String")
  liquidityPosition_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "liquidityPosition_not_ends_with_nocase", type: "String")
  liquidityPosition_: LiquidityPosition_filter @source(subgraph: "uniswap", name: "liquidityPosition_", type: "LiquidityPosition_filter")
  timestamp: Int @source(subgraph: "uniswap", name: "timestamp", type: "Int")
  timestamp_not: Int @source(subgraph: "uniswap", name: "timestamp_not", type: "Int")
  timestamp_gt: Int @source(subgraph: "uniswap", name: "timestamp_gt", type: "Int")
  timestamp_lt: Int @source(subgraph: "uniswap", name: "timestamp_lt", type: "Int")
  timestamp_gte: Int @source(subgraph: "uniswap", name: "timestamp_gte", type: "Int")
  timestamp_lte: Int @source(subgraph: "uniswap", name: "timestamp_lte", type: "Int")
  timestamp_in: [Int!] @source(subgraph: "uniswap", name: "timestamp_in", type: "[Int!]")
  timestamp_not_in: [Int!] @source(subgraph: "uniswap", name: "timestamp_not_in", type: "[Int!]")
  block: Int @source(subgraph: "uniswap", name: "block", type: "Int")
  block_not: Int @source(subgraph: "uniswap", name: "block_not", type: "Int")
  block_gt: Int @source(subgraph: "uniswap", name: "block_gt", type: "Int")
  block_lt: Int @source(subgraph: "uniswap", name: "block_lt", type: "Int")
  block_gte: Int @source(subgraph: "uniswap", name: "block_gte", type: "Int")
  block_lte: Int @source(subgraph: "uniswap", name: "block_lte", type: "Int")
  block_in: [Int!] @source(subgraph: "uniswap", name: "block_in", type: "[Int!]")
  block_not_in: [Int!] @source(subgraph: "uniswap", name: "block_not_in", type: "[Int!]")
  user: String @source(subgraph: "uniswap", name: "user", type: "String")
  user_not: String @source(subgraph: "uniswap", name: "user_not", type: "String")
  user_gt: String @source(subgraph: "uniswap", name: "user_gt", type: "String")
  user_lt: String @source(subgraph: "uniswap", name: "user_lt", type: "String")
  user_gte: String @source(subgraph: "uniswap", name: "user_gte", type: "String")
  user_lte: String @source(subgraph: "uniswap", name: "user_lte", type: "String")
  user_in: [String!] @source(subgraph: "uniswap", name: "user_in", type: "[String!]")
  user_not_in: [String!] @source(subgraph: "uniswap", name: "user_not_in", type: "[String!]")
  user_contains: String @source(subgraph: "uniswap", name: "user_contains", type: "String")
  user_contains_nocase: String @source(subgraph: "uniswap", name: "user_contains_nocase", type: "String")
  user_not_contains: String @source(subgraph: "uniswap", name: "user_not_contains", type: "String")
  user_not_contains_nocase: String @source(subgraph: "uniswap", name: "user_not_contains_nocase", type: "String")
  user_starts_with: String @source(subgraph: "uniswap", name: "user_starts_with", type: "String")
  user_starts_with_nocase: String @source(subgraph: "uniswap", name: "user_starts_with_nocase", type: "String")
  user_not_starts_with: String @source(subgraph: "uniswap", name: "user_not_starts_with", type: "String")
  user_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "user_not_starts_with_nocase", type: "String")
  user_ends_with: String @source(subgraph: "uniswap", name: "user_ends_with", type: "String")
  user_ends_with_nocase: String @source(subgraph: "uniswap", name: "user_ends_with_nocase", type: "String")
  user_not_ends_with: String @source(subgraph: "uniswap", name: "user_not_ends_with", type: "String")
  user_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "user_not_ends_with_nocase", type: "String")
  user_: User_filter @source(subgraph: "uniswap", name: "user_", type: "User_filter")
  pair: String @source(subgraph: "uniswap", name: "pair", type: "String")
  pair_not: String @source(subgraph: "uniswap", name: "pair_not", type: "String")
  pair_gt: String @source(subgraph: "uniswap", name: "pair_gt", type: "String")
  pair_lt: String @source(subgraph: "uniswap", name: "pair_lt", type: "String")
  pair_gte: String @source(subgraph: "uniswap", name: "pair_gte", type: "String")
  pair_lte: String @source(subgraph: "uniswap", name: "pair_lte", type: "String")
  pair_in: [String!] @source(subgraph: "uniswap", name: "pair_in", type: "[String!]")
  pair_not_in: [String!] @source(subgraph: "uniswap", name: "pair_not_in", type: "[String!]")
  pair_contains: String @source(subgraph: "uniswap", name: "pair_contains", type: "String")
  pair_contains_nocase: String @source(subgraph: "uniswap", name: "pair_contains_nocase", type: "String")
  pair_not_contains: String @source(subgraph: "uniswap", name: "pair_not_contains", type: "String")
  pair_not_contains_nocase: String @source(subgraph: "uniswap", name: "pair_not_contains_nocase", type: "String")
  pair_starts_with: String @source(subgraph: "uniswap", name: "pair_starts_with", type: "String")
  pair_starts_with_nocase: String @source(subgraph: "uniswap", name: "pair_starts_with_nocase", type: "String")
  pair_not_starts_with: String @source(subgraph: "uniswap", name: "pair_not_starts_with", type: "String")
  pair_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "pair_not_starts_with_nocase", type: "String")
  pair_ends_with: String @source(subgraph: "uniswap", name: "pair_ends_with", type: "String")
  pair_ends_with_nocase: String @source(subgraph: "uniswap", name: "pair_ends_with_nocase", type: "String")
  pair_not_ends_with: String @source(subgraph: "uniswap", name: "pair_not_ends_with", type: "String")
  pair_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "pair_not_ends_with_nocase", type: "String")
  pair_: Pair_filter @source(subgraph: "uniswap", name: "pair_", type: "Pair_filter")
  token0PriceUSD: BigDecimal @source(subgraph: "uniswap", name: "token0PriceUSD", type: "BigDecimal")
  token0PriceUSD_not: BigDecimal @source(subgraph: "uniswap", name: "token0PriceUSD_not", type: "BigDecimal")
  token0PriceUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "token0PriceUSD_gt", type: "BigDecimal")
  token0PriceUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "token0PriceUSD_lt", type: "BigDecimal")
  token0PriceUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "token0PriceUSD_gte", type: "BigDecimal")
  token0PriceUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "token0PriceUSD_lte", type: "BigDecimal")
  token0PriceUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "token0PriceUSD_in", type: "[BigDecimal!]")
  token0PriceUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "token0PriceUSD_not_in", type: "[BigDecimal!]")
  token1PriceUSD: BigDecimal @source(subgraph: "uniswap", name: "token1PriceUSD", type: "BigDecimal")
  token1PriceUSD_not: BigDecimal @source(subgraph: "uniswap", name: "token1PriceUSD_not", type: "BigDecimal")
  token1PriceUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "token1PriceUSD_gt", type: "BigDecimal")
  token1PriceUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "token1PriceUSD_lt", type: "BigDecimal")
  token1PriceUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "token1PriceUSD_gte", type: "BigDecimal")
  token1PriceUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "token1PriceUSD_lte", type: "BigDecimal")
  token1PriceUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "token1PriceUSD_in", type: "[BigDecimal!]")
  token1PriceUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "token1PriceUSD_not_in", type: "[BigDecimal!]")
  reserve0: BigDecimal @source(subgraph: "uniswap", name: "reserve0", type: "BigDecimal")
  reserve0_not: BigDecimal @source(subgraph: "uniswap", name: "reserve0_not", type: "BigDecimal")
  reserve0_gt: BigDecimal @source(subgraph: "uniswap", name: "reserve0_gt", type: "BigDecimal")
  reserve0_lt: BigDecimal @source(subgraph: "uniswap", name: "reserve0_lt", type: "BigDecimal")
  reserve0_gte: BigDecimal @source(subgraph: "uniswap", name: "reserve0_gte", type: "BigDecimal")
  reserve0_lte: BigDecimal @source(subgraph: "uniswap", name: "reserve0_lte", type: "BigDecimal")
  reserve0_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve0_in", type: "[BigDecimal!]")
  reserve0_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve0_not_in", type: "[BigDecimal!]")
  reserve1: BigDecimal @source(subgraph: "uniswap", name: "reserve1", type: "BigDecimal")
  reserve1_not: BigDecimal @source(subgraph: "uniswap", name: "reserve1_not", type: "BigDecimal")
  reserve1_gt: BigDecimal @source(subgraph: "uniswap", name: "reserve1_gt", type: "BigDecimal")
  reserve1_lt: BigDecimal @source(subgraph: "uniswap", name: "reserve1_lt", type: "BigDecimal")
  reserve1_gte: BigDecimal @source(subgraph: "uniswap", name: "reserve1_gte", type: "BigDecimal")
  reserve1_lte: BigDecimal @source(subgraph: "uniswap", name: "reserve1_lte", type: "BigDecimal")
  reserve1_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve1_in", type: "[BigDecimal!]")
  reserve1_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve1_not_in", type: "[BigDecimal!]")
  reserveUSD: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD", type: "BigDecimal")
  reserveUSD_not: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_not", type: "BigDecimal")
  reserveUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_gt", type: "BigDecimal")
  reserveUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_lt", type: "BigDecimal")
  reserveUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_gte", type: "BigDecimal")
  reserveUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_lte", type: "BigDecimal")
  reserveUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserveUSD_in", type: "[BigDecimal!]")
  reserveUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserveUSD_not_in", type: "[BigDecimal!]")
  liquidityTokenTotalSupply: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenTotalSupply", type: "BigDecimal")
  liquidityTokenTotalSupply_not: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenTotalSupply_not", type: "BigDecimal")
  liquidityTokenTotalSupply_gt: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenTotalSupply_gt", type: "BigDecimal")
  liquidityTokenTotalSupply_lt: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenTotalSupply_lt", type: "BigDecimal")
  liquidityTokenTotalSupply_gte: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenTotalSupply_gte", type: "BigDecimal")
  liquidityTokenTotalSupply_lte: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenTotalSupply_lte", type: "BigDecimal")
  liquidityTokenTotalSupply_in: [BigDecimal!] @source(subgraph: "uniswap", name: "liquidityTokenTotalSupply_in", type: "[BigDecimal!]")
  liquidityTokenTotalSupply_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "liquidityTokenTotalSupply_not_in", type: "[BigDecimal!]")
  liquidityTokenBalance: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenBalance", type: "BigDecimal")
  liquidityTokenBalance_not: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenBalance_not", type: "BigDecimal")
  liquidityTokenBalance_gt: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenBalance_gt", type: "BigDecimal")
  liquidityTokenBalance_lt: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenBalance_lt", type: "BigDecimal")
  liquidityTokenBalance_gte: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenBalance_gte", type: "BigDecimal")
  liquidityTokenBalance_lte: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenBalance_lte", type: "BigDecimal")
  liquidityTokenBalance_in: [BigDecimal!] @source(subgraph: "uniswap", name: "liquidityTokenBalance_in", type: "[BigDecimal!]")
  liquidityTokenBalance_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "liquidityTokenBalance_not_in", type: "[BigDecimal!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [LiquidityPositionSnapshot_filter] @source(subgraph: "uniswap", name: "and", type: "[LiquidityPositionSnapshot_filter]")
  or: [LiquidityPositionSnapshot_filter] @source(subgraph: "uniswap", name: "or", type: "[LiquidityPositionSnapshot_filter]")
}

enum LiquidityPositionSnapshot_orderBy @source(subgraph: "uniswap", name: "LiquidityPositionSnapshot_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  liquidityPosition @source(subgraph: "uniswap", name: "liquidityPosition")
  liquidityPosition__id @source(subgraph: "uniswap", name: "liquidityPosition__id")
  liquidityPosition__liquidityTokenBalance @source(subgraph: "uniswap", name: "liquidityPosition__liquidityTokenBalance")
  timestamp @source(subgraph: "uniswap", name: "timestamp")
  block @source(subgraph: "uniswap", name: "block")
  user @source(subgraph: "uniswap", name: "user")
  user__id @source(subgraph: "uniswap", name: "user__id")
  user__usdSwapped @source(subgraph: "uniswap", name: "user__usdSwapped")
  pair @source(subgraph: "uniswap", name: "pair")
  pair__id @source(subgraph: "uniswap", name: "pair__id")
  pair__reserve0 @source(subgraph: "uniswap", name: "pair__reserve0")
  pair__reserve1 @source(subgraph: "uniswap", name: "pair__reserve1")
  pair__totalSupply @source(subgraph: "uniswap", name: "pair__totalSupply")
  pair__reserveETH @source(subgraph: "uniswap", name: "pair__reserveETH")
  pair__reserveUSD @source(subgraph: "uniswap", name: "pair__reserveUSD")
  pair__trackedReserveETH @source(subgraph: "uniswap", name: "pair__trackedReserveETH")
  pair__token0Price @source(subgraph: "uniswap", name: "pair__token0Price")
  pair__token1Price @source(subgraph: "uniswap", name: "pair__token1Price")
  pair__volumeToken0 @source(subgraph: "uniswap", name: "pair__volumeToken0")
  pair__volumeToken1 @source(subgraph: "uniswap", name: "pair__volumeToken1")
  pair__volumeUSD @source(subgraph: "uniswap", name: "pair__volumeUSD")
  pair__untrackedVolumeUSD @source(subgraph: "uniswap", name: "pair__untrackedVolumeUSD")
  pair__txCount @source(subgraph: "uniswap", name: "pair__txCount")
  pair__createdAtTimestamp @source(subgraph: "uniswap", name: "pair__createdAtTimestamp")
  pair__createdAtBlockNumber @source(subgraph: "uniswap", name: "pair__createdAtBlockNumber")
  pair__liquidityProviderCount @source(subgraph: "uniswap", name: "pair__liquidityProviderCount")
  token0PriceUSD @source(subgraph: "uniswap", name: "token0PriceUSD")
  token1PriceUSD @source(subgraph: "uniswap", name: "token1PriceUSD")
  reserve0 @source(subgraph: "uniswap", name: "reserve0")
  reserve1 @source(subgraph: "uniswap", name: "reserve1")
  reserveUSD @source(subgraph: "uniswap", name: "reserveUSD")
  liquidityTokenTotalSupply @source(subgraph: "uniswap", name: "liquidityTokenTotalSupply")
  liquidityTokenBalance @source(subgraph: "uniswap", name: "liquidityTokenBalance")
}

input LiquidityPosition_filter @source(subgraph: "uniswap", name: "LiquidityPosition_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  user: String @source(subgraph: "uniswap", name: "user", type: "String")
  user_not: String @source(subgraph: "uniswap", name: "user_not", type: "String")
  user_gt: String @source(subgraph: "uniswap", name: "user_gt", type: "String")
  user_lt: String @source(subgraph: "uniswap", name: "user_lt", type: "String")
  user_gte: String @source(subgraph: "uniswap", name: "user_gte", type: "String")
  user_lte: String @source(subgraph: "uniswap", name: "user_lte", type: "String")
  user_in: [String!] @source(subgraph: "uniswap", name: "user_in", type: "[String!]")
  user_not_in: [String!] @source(subgraph: "uniswap", name: "user_not_in", type: "[String!]")
  user_contains: String @source(subgraph: "uniswap", name: "user_contains", type: "String")
  user_contains_nocase: String @source(subgraph: "uniswap", name: "user_contains_nocase", type: "String")
  user_not_contains: String @source(subgraph: "uniswap", name: "user_not_contains", type: "String")
  user_not_contains_nocase: String @source(subgraph: "uniswap", name: "user_not_contains_nocase", type: "String")
  user_starts_with: String @source(subgraph: "uniswap", name: "user_starts_with", type: "String")
  user_starts_with_nocase: String @source(subgraph: "uniswap", name: "user_starts_with_nocase", type: "String")
  user_not_starts_with: String @source(subgraph: "uniswap", name: "user_not_starts_with", type: "String")
  user_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "user_not_starts_with_nocase", type: "String")
  user_ends_with: String @source(subgraph: "uniswap", name: "user_ends_with", type: "String")
  user_ends_with_nocase: String @source(subgraph: "uniswap", name: "user_ends_with_nocase", type: "String")
  user_not_ends_with: String @source(subgraph: "uniswap", name: "user_not_ends_with", type: "String")
  user_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "user_not_ends_with_nocase", type: "String")
  user_: User_filter @source(subgraph: "uniswap", name: "user_", type: "User_filter")
  pair: String @source(subgraph: "uniswap", name: "pair", type: "String")
  pair_not: String @source(subgraph: "uniswap", name: "pair_not", type: "String")
  pair_gt: String @source(subgraph: "uniswap", name: "pair_gt", type: "String")
  pair_lt: String @source(subgraph: "uniswap", name: "pair_lt", type: "String")
  pair_gte: String @source(subgraph: "uniswap", name: "pair_gte", type: "String")
  pair_lte: String @source(subgraph: "uniswap", name: "pair_lte", type: "String")
  pair_in: [String!] @source(subgraph: "uniswap", name: "pair_in", type: "[String!]")
  pair_not_in: [String!] @source(subgraph: "uniswap", name: "pair_not_in", type: "[String!]")
  pair_contains: String @source(subgraph: "uniswap", name: "pair_contains", type: "String")
  pair_contains_nocase: String @source(subgraph: "uniswap", name: "pair_contains_nocase", type: "String")
  pair_not_contains: String @source(subgraph: "uniswap", name: "pair_not_contains", type: "String")
  pair_not_contains_nocase: String @source(subgraph: "uniswap", name: "pair_not_contains_nocase", type: "String")
  pair_starts_with: String @source(subgraph: "uniswap", name: "pair_starts_with", type: "String")
  pair_starts_with_nocase: String @source(subgraph: "uniswap", name: "pair_starts_with_nocase", type: "String")
  pair_not_starts_with: String @source(subgraph: "uniswap", name: "pair_not_starts_with", type: "String")
  pair_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "pair_not_starts_with_nocase", type: "String")
  pair_ends_with: String @source(subgraph: "uniswap", name: "pair_ends_with", type: "String")
  pair_ends_with_nocase: String @source(subgraph: "uniswap", name: "pair_ends_with_nocase", type: "String")
  pair_not_ends_with: String @source(subgraph: "uniswap", name: "pair_not_ends_with", type: "String")
  pair_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "pair_not_ends_with_nocase", type: "String")
  pair_: Pair_filter @source(subgraph: "uniswap", name: "pair_", type: "Pair_filter")
  liquidityTokenBalance: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenBalance", type: "BigDecimal")
  liquidityTokenBalance_not: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenBalance_not", type: "BigDecimal")
  liquidityTokenBalance_gt: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenBalance_gt", type: "BigDecimal")
  liquidityTokenBalance_lt: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenBalance_lt", type: "BigDecimal")
  liquidityTokenBalance_gte: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenBalance_gte", type: "BigDecimal")
  liquidityTokenBalance_lte: BigDecimal @source(subgraph: "uniswap", name: "liquidityTokenBalance_lte", type: "BigDecimal")
  liquidityTokenBalance_in: [BigDecimal!] @source(subgraph: "uniswap", name: "liquidityTokenBalance_in", type: "[BigDecimal!]")
  liquidityTokenBalance_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "liquidityTokenBalance_not_in", type: "[BigDecimal!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [LiquidityPosition_filter] @source(subgraph: "uniswap", name: "and", type: "[LiquidityPosition_filter]")
  or: [LiquidityPosition_filter] @source(subgraph: "uniswap", name: "or", type: "[LiquidityPosition_filter]")
}

enum LiquidityPosition_orderBy @source(subgraph: "uniswap", name: "LiquidityPosition_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  user @source(subgraph: "uniswap", name: "user")
  user__id @source(subgraph: "uniswap", name: "user__id")
  user__usdSwapped @source(subgraph: "uniswap", name: "user__usdSwapped")
  pair @source(subgraph: "uniswap", name: "pair")
  pair__id @source(subgraph: "uniswap", name: "pair__id")
  pair__reserve0 @source(subgraph: "uniswap", name: "pair__reserve0")
  pair__reserve1 @source(subgraph: "uniswap", name: "pair__reserve1")
  pair__totalSupply @source(subgraph: "uniswap", name: "pair__totalSupply")
  pair__reserveETH @source(subgraph: "uniswap", name: "pair__reserveETH")
  pair__reserveUSD @source(subgraph: "uniswap", name: "pair__reserveUSD")
  pair__trackedReserveETH @source(subgraph: "uniswap", name: "pair__trackedReserveETH")
  pair__token0Price @source(subgraph: "uniswap", name: "pair__token0Price")
  pair__token1Price @source(subgraph: "uniswap", name: "pair__token1Price")
  pair__volumeToken0 @source(subgraph: "uniswap", name: "pair__volumeToken0")
  pair__volumeToken1 @source(subgraph: "uniswap", name: "pair__volumeToken1")
  pair__volumeUSD @source(subgraph: "uniswap", name: "pair__volumeUSD")
  pair__untrackedVolumeUSD @source(subgraph: "uniswap", name: "pair__untrackedVolumeUSD")
  pair__txCount @source(subgraph: "uniswap", name: "pair__txCount")
  pair__createdAtTimestamp @source(subgraph: "uniswap", name: "pair__createdAtTimestamp")
  pair__createdAtBlockNumber @source(subgraph: "uniswap", name: "pair__createdAtBlockNumber")
  pair__liquidityProviderCount @source(subgraph: "uniswap", name: "pair__liquidityProviderCount")
  liquidityTokenBalance @source(subgraph: "uniswap", name: "liquidityTokenBalance")
}

type Mint @source(subgraph: "uniswap", name: "Mint") @resolver(subgraph: "uniswap", operation: "query MintById($Mint_id: ID!) { mint(id: $Mint_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetMintById($Mint_id: ID!) { mints(where: { id: $Mint_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetMintsByIds($Mint_id: [ID!]!) { mints(where: { id_in: $Mint_id }) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "Mint_id", select: "id") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  transaction: Transaction! @source(subgraph: "uniswap", name: "transaction", type: "Transaction!")
  timestamp: BigInt! @source(subgraph: "uniswap", name: "timestamp", type: "BigInt!")
  pair: Pair! @source(subgraph: "uniswap", name: "pair", type: "Pair!")
  to: Bytes! @source(subgraph: "uniswap", name: "to", type: "Bytes!")
  liquidity: BigDecimal! @source(subgraph: "uniswap", name: "liquidity", type: "BigDecimal!")
  sender: Bytes @source(subgraph: "uniswap", name: "sender", type: "Bytes")
  amount0: BigDecimal @source(subgraph: "uniswap", name: "amount0", type: "BigDecimal")
  amount1: BigDecimal @source(subgraph: "uniswap", name: "amount1", type: "BigDecimal")
  logIndex: BigInt @source(subgraph: "uniswap", name: "logIndex", type: "BigInt")
  amountUSD: BigDecimal @source(subgraph: "uniswap", name: "amountUSD", type: "BigDecimal")
  feeTo: Bytes @source(subgraph: "uniswap", name: "feeTo", type: "Bytes")
  feeLiquidity: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity", type: "BigDecimal")
}

input Mint_filter @source(subgraph: "uniswap", name: "Mint_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  transaction: String @source(subgraph: "uniswap", name: "transaction", type: "String")
  transaction_not: String @source(subgraph: "uniswap", name: "transaction_not", type: "String")
  transaction_gt: String @source(subgraph: "uniswap", name: "transaction_gt", type: "String")
  transaction_lt: String @source(subgraph: "uniswap", name: "transaction_lt", type: "String")
  transaction_gte: String @source(subgraph: "uniswap", name: "transaction_gte", type: "String")
  transaction_lte: String @source(subgraph: "uniswap", name: "transaction_lte", type: "String")
  transaction_in: [String!] @source(subgraph: "uniswap", name: "transaction_in", type: "[String!]")
  transaction_not_in: [String!] @source(subgraph: "uniswap", name: "transaction_not_in", type: "[String!]")
  transaction_contains: String @source(subgraph: "uniswap", name: "transaction_contains", type: "String")
  transaction_contains_nocase: String @source(subgraph: "uniswap", name: "transaction_contains_nocase", type: "String")
  transaction_not_contains: String @source(subgraph: "uniswap", name: "transaction_not_contains", type: "String")
  transaction_not_contains_nocase: String @source(subgraph: "uniswap", name: "transaction_not_contains_nocase", type: "String")
  transaction_starts_with: String @source(subgraph: "uniswap", name: "transaction_starts_with", type: "String")
  transaction_starts_with_nocase: String @source(subgraph: "uniswap", name: "transaction_starts_with_nocase", type: "String")
  transaction_not_starts_with: String @source(subgraph: "uniswap", name: "transaction_not_starts_with", type: "String")
  transaction_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "transaction_not_starts_with_nocase", type: "String")
  transaction_ends_with: String @source(subgraph: "uniswap", name: "transaction_ends_with", type: "String")
  transaction_ends_with_nocase: String @source(subgraph: "uniswap", name: "transaction_ends_with_nocase", type: "String")
  transaction_not_ends_with: String @source(subgraph: "uniswap", name: "transaction_not_ends_with", type: "String")
  transaction_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "transaction_not_ends_with_nocase", type: "String")
  transaction_: Transaction_filter @source(subgraph: "uniswap", name: "transaction_", type: "Transaction_filter")
  timestamp: BigInt @source(subgraph: "uniswap", name: "timestamp", type: "BigInt")
  timestamp_not: BigInt @source(subgraph: "uniswap", name: "timestamp_not", type: "BigInt")
  timestamp_gt: BigInt @source(subgraph: "uniswap", name: "timestamp_gt", type: "BigInt")
  timestamp_lt: BigInt @source(subgraph: "uniswap", name: "timestamp_lt", type: "BigInt")
  timestamp_gte: BigInt @source(subgraph: "uniswap", name: "timestamp_gte", type: "BigInt")
  timestamp_lte: BigInt @source(subgraph: "uniswap", name: "timestamp_lte", type: "BigInt")
  timestamp_in: [BigInt!] @source(subgraph: "uniswap", name: "timestamp_in", type: "[BigInt!]")
  timestamp_not_in: [BigInt!] @source(subgraph: "uniswap", name: "timestamp_not_in", type: "[BigInt!]")
  pair: String @source(subgraph: "uniswap", name: "pair", type: "String")
  pair_not: String @source(subgraph: "uniswap", name: "pair_not", type: "String")
  pair_gt: String @source(subgraph: "uniswap", name: "pair_gt", type: "String")
  pair_lt: String @source(subgraph: "uniswap", name: "pair_lt", type: "String")
  pair_gte: String @source(subgraph: "uniswap", name: "pair_gte", type: "String")
  pair_lte: String @source(subgraph: "uniswap", name: "pair_lte", type: "String")
  pair_in: [String!] @source(subgraph: "uniswap", name: "pair_in", type: "[String!]")
  pair_not_in: [String!] @source(subgraph: "uniswap", name: "pair_not_in", type: "[String!]")
  pair_contains: String @source(subgraph: "uniswap", name: "pair_contains", type: "String")
  pair_contains_nocase: String @source(subgraph: "uniswap", name: "pair_contains_nocase", type: "String")
  pair_not_contains: String @source(subgraph: "uniswap", name: "pair_not_contains", type: "String")
  pair_not_contains_nocase: String @source(subgraph: "uniswap", name: "pair_not_contains_nocase", type: "String")
  pair_starts_with: String @source(subgraph: "uniswap", name: "pair_starts_with", type: "String")
  pair_starts_with_nocase: String @source(subgraph: "uniswap", name: "pair_starts_with_nocase", type: "String")
  pair_not_starts_with: String @source(subgraph: "uniswap", name: "pair_not_starts_with", type: "String")
  pair_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "pair_not_starts_with_nocase", type: "String")
  pair_ends_with: String @source(subgraph: "uniswap", name: "pair_ends_with", type: "String")
  pair_ends_with_nocase: String @source(subgraph: "uniswap", name: "pair_ends_with_nocase", type: "String")
  pair_not_ends_with: String @source(subgraph: "uniswap", name: "pair_not_ends_with", type: "String")
  pair_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "pair_not_ends_with_nocase", type: "String")
  pair_: Pair_filter @source(subgraph: "uniswap", name: "pair_", type: "Pair_filter")
  to: Bytes @source(subgraph: "uniswap", name: "to", type: "Bytes")
  to_not: Bytes @source(subgraph: "uniswap", name: "to_not", type: "Bytes")
  to_gt: Bytes @source(subgraph: "uniswap", name: "to_gt", type: "Bytes")
  to_lt: Bytes @source(subgraph: "uniswap", name: "to_lt", type: "Bytes")
  to_gte: Bytes @source(subgraph: "uniswap", name: "to_gte", type: "Bytes")
  to_lte: Bytes @source(subgraph: "uniswap", name: "to_lte", type: "Bytes")
  to_in: [Bytes!] @source(subgraph: "uniswap", name: "to_in", type: "[Bytes!]")
  to_not_in: [Bytes!] @source(subgraph: "uniswap", name: "to_not_in", type: "[Bytes!]")
  to_contains: Bytes @source(subgraph: "uniswap", name: "to_contains", type: "Bytes")
  to_not_contains: Bytes @source(subgraph: "uniswap", name: "to_not_contains", type: "Bytes")
  liquidity: BigDecimal @source(subgraph: "uniswap", name: "liquidity", type: "BigDecimal")
  liquidity_not: BigDecimal @source(subgraph: "uniswap", name: "liquidity_not", type: "BigDecimal")
  liquidity_gt: BigDecimal @source(subgraph: "uniswap", name: "liquidity_gt", type: "BigDecimal")
  liquidity_lt: BigDecimal @source(subgraph: "uniswap", name: "liquidity_lt", type: "BigDecimal")
  liquidity_gte: BigDecimal @source(subgraph: "uniswap", name: "liquidity_gte", type: "BigDecimal")
  liquidity_lte: BigDecimal @source(subgraph: "uniswap", name: "liquidity_lte", type: "BigDecimal")
  liquidity_in: [BigDecimal!] @source(subgraph: "uniswap", name: "liquidity_in", type: "[BigDecimal!]")
  liquidity_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "liquidity_not_in", type: "[BigDecimal!]")
  sender: Bytes @source(subgraph: "uniswap", name: "sender", type: "Bytes")
  sender_not: Bytes @source(subgraph: "uniswap", name: "sender_not", type: "Bytes")
  sender_gt: Bytes @source(subgraph: "uniswap", name: "sender_gt", type: "Bytes")
  sender_lt: Bytes @source(subgraph: "uniswap", name: "sender_lt", type: "Bytes")
  sender_gte: Bytes @source(subgraph: "uniswap", name: "sender_gte", type: "Bytes")
  sender_lte: Bytes @source(subgraph: "uniswap", name: "sender_lte", type: "Bytes")
  sender_in: [Bytes!] @source(subgraph: "uniswap", name: "sender_in", type: "[Bytes!]")
  sender_not_in: [Bytes!] @source(subgraph: "uniswap", name: "sender_not_in", type: "[Bytes!]")
  sender_contains: Bytes @source(subgraph: "uniswap", name: "sender_contains", type: "Bytes")
  sender_not_contains: Bytes @source(subgraph: "uniswap", name: "sender_not_contains", type: "Bytes")
  amount0: BigDecimal @source(subgraph: "uniswap", name: "amount0", type: "BigDecimal")
  amount0_not: BigDecimal @source(subgraph: "uniswap", name: "amount0_not", type: "BigDecimal")
  amount0_gt: BigDecimal @source(subgraph: "uniswap", name: "amount0_gt", type: "BigDecimal")
  amount0_lt: BigDecimal @source(subgraph: "uniswap", name: "amount0_lt", type: "BigDecimal")
  amount0_gte: BigDecimal @source(subgraph: "uniswap", name: "amount0_gte", type: "BigDecimal")
  amount0_lte: BigDecimal @source(subgraph: "uniswap", name: "amount0_lte", type: "BigDecimal")
  amount0_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount0_in", type: "[BigDecimal!]")
  amount0_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount0_not_in", type: "[BigDecimal!]")
  amount1: BigDecimal @source(subgraph: "uniswap", name: "amount1", type: "BigDecimal")
  amount1_not: BigDecimal @source(subgraph: "uniswap", name: "amount1_not", type: "BigDecimal")
  amount1_gt: BigDecimal @source(subgraph: "uniswap", name: "amount1_gt", type: "BigDecimal")
  amount1_lt: BigDecimal @source(subgraph: "uniswap", name: "amount1_lt", type: "BigDecimal")
  amount1_gte: BigDecimal @source(subgraph: "uniswap", name: "amount1_gte", type: "BigDecimal")
  amount1_lte: BigDecimal @source(subgraph: "uniswap", name: "amount1_lte", type: "BigDecimal")
  amount1_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount1_in", type: "[BigDecimal!]")
  amount1_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount1_not_in", type: "[BigDecimal!]")
  logIndex: BigInt @source(subgraph: "uniswap", name: "logIndex", type: "BigInt")
  logIndex_not: BigInt @source(subgraph: "uniswap", name: "logIndex_not", type: "BigInt")
  logIndex_gt: BigInt @source(subgraph: "uniswap", name: "logIndex_gt", type: "BigInt")
  logIndex_lt: BigInt @source(subgraph: "uniswap", name: "logIndex_lt", type: "BigInt")
  logIndex_gte: BigInt @source(subgraph: "uniswap", name: "logIndex_gte", type: "BigInt")
  logIndex_lte: BigInt @source(subgraph: "uniswap", name: "logIndex_lte", type: "BigInt")
  logIndex_in: [BigInt!] @source(subgraph: "uniswap", name: "logIndex_in", type: "[BigInt!]")
  logIndex_not_in: [BigInt!] @source(subgraph: "uniswap", name: "logIndex_not_in", type: "[BigInt!]")
  amountUSD: BigDecimal @source(subgraph: "uniswap", name: "amountUSD", type: "BigDecimal")
  amountUSD_not: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_not", type: "BigDecimal")
  amountUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_gt", type: "BigDecimal")
  amountUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_lt", type: "BigDecimal")
  amountUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_gte", type: "BigDecimal")
  amountUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_lte", type: "BigDecimal")
  amountUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amountUSD_in", type: "[BigDecimal!]")
  amountUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amountUSD_not_in", type: "[BigDecimal!]")
  feeTo: Bytes @source(subgraph: "uniswap", name: "feeTo", type: "Bytes")
  feeTo_not: Bytes @source(subgraph: "uniswap", name: "feeTo_not", type: "Bytes")
  feeTo_gt: Bytes @source(subgraph: "uniswap", name: "feeTo_gt", type: "Bytes")
  feeTo_lt: Bytes @source(subgraph: "uniswap", name: "feeTo_lt", type: "Bytes")
  feeTo_gte: Bytes @source(subgraph: "uniswap", name: "feeTo_gte", type: "Bytes")
  feeTo_lte: Bytes @source(subgraph: "uniswap", name: "feeTo_lte", type: "Bytes")
  feeTo_in: [Bytes!] @source(subgraph: "uniswap", name: "feeTo_in", type: "[Bytes!]")
  feeTo_not_in: [Bytes!] @source(subgraph: "uniswap", name: "feeTo_not_in", type: "[Bytes!]")
  feeTo_contains: Bytes @source(subgraph: "uniswap", name: "feeTo_contains", type: "Bytes")
  feeTo_not_contains: Bytes @source(subgraph: "uniswap", name: "feeTo_not_contains", type: "Bytes")
  feeLiquidity: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity", type: "BigDecimal")
  feeLiquidity_not: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity_not", type: "BigDecimal")
  feeLiquidity_gt: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity_gt", type: "BigDecimal")
  feeLiquidity_lt: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity_lt", type: "BigDecimal")
  feeLiquidity_gte: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity_gte", type: "BigDecimal")
  feeLiquidity_lte: BigDecimal @source(subgraph: "uniswap", name: "feeLiquidity_lte", type: "BigDecimal")
  feeLiquidity_in: [BigDecimal!] @source(subgraph: "uniswap", name: "feeLiquidity_in", type: "[BigDecimal!]")
  feeLiquidity_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "feeLiquidity_not_in", type: "[BigDecimal!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [Mint_filter] @source(subgraph: "uniswap", name: "and", type: "[Mint_filter]")
  or: [Mint_filter] @source(subgraph: "uniswap", name: "or", type: "[Mint_filter]")
}

enum Mint_orderBy @source(subgraph: "uniswap", name: "Mint_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  transaction @source(subgraph: "uniswap", name: "transaction")
  transaction__id @source(subgraph: "uniswap", name: "transaction__id")
  transaction__blockNumber @source(subgraph: "uniswap", name: "transaction__blockNumber")
  transaction__timestamp @source(subgraph: "uniswap", name: "transaction__timestamp")
  timestamp @source(subgraph: "uniswap", name: "timestamp")
  pair @source(subgraph: "uniswap", name: "pair")
  pair__id @source(subgraph: "uniswap", name: "pair__id")
  pair__reserve0 @source(subgraph: "uniswap", name: "pair__reserve0")
  pair__reserve1 @source(subgraph: "uniswap", name: "pair__reserve1")
  pair__totalSupply @source(subgraph: "uniswap", name: "pair__totalSupply")
  pair__reserveETH @source(subgraph: "uniswap", name: "pair__reserveETH")
  pair__reserveUSD @source(subgraph: "uniswap", name: "pair__reserveUSD")
  pair__trackedReserveETH @source(subgraph: "uniswap", name: "pair__trackedReserveETH")
  pair__token0Price @source(subgraph: "uniswap", name: "pair__token0Price")
  pair__token1Price @source(subgraph: "uniswap", name: "pair__token1Price")
  pair__volumeToken0 @source(subgraph: "uniswap", name: "pair__volumeToken0")
  pair__volumeToken1 @source(subgraph: "uniswap", name: "pair__volumeToken1")
  pair__volumeUSD @source(subgraph: "uniswap", name: "pair__volumeUSD")
  pair__untrackedVolumeUSD @source(subgraph: "uniswap", name: "pair__untrackedVolumeUSD")
  pair__txCount @source(subgraph: "uniswap", name: "pair__txCount")
  pair__createdAtTimestamp @source(subgraph: "uniswap", name: "pair__createdAtTimestamp")
  pair__createdAtBlockNumber @source(subgraph: "uniswap", name: "pair__createdAtBlockNumber")
  pair__liquidityProviderCount @source(subgraph: "uniswap", name: "pair__liquidityProviderCount")
  to @source(subgraph: "uniswap", name: "to")
  liquidity @source(subgraph: "uniswap", name: "liquidity")
  sender @source(subgraph: "uniswap", name: "sender")
  amount0 @source(subgraph: "uniswap", name: "amount0")
  amount1 @source(subgraph: "uniswap", name: "amount1")
  logIndex @source(subgraph: "uniswap", name: "logIndex")
  amountUSD @source(subgraph: "uniswap", name: "amountUSD")
  feeTo @source(subgraph: "uniswap", name: "feeTo")
  feeLiquidity @source(subgraph: "uniswap", name: "feeLiquidity")
}

type Pair @source(subgraph: "uniswap", name: "Pair") @resolver(subgraph: "uniswap", operation: "query PairById($Pair_id: ID!) { pair(id: $Pair_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetPairById($Pair_id: ID!) { pairs(where: { id: $Pair_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetPairsByIds($Pair_id: [ID!]!) { pairs(where: { id_in: $Pair_id }) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "Pair_id", select: "id") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  token0: Token! @source(subgraph: "uniswap", name: "token0", type: "Token!")
  token1: Token! @source(subgraph: "uniswap", name: "token1", type: "Token!")
  reserve0: BigDecimal! @source(subgraph: "uniswap", name: "reserve0", type: "BigDecimal!")
  reserve1: BigDecimal! @source(subgraph: "uniswap", name: "reserve1", type: "BigDecimal!")
  totalSupply: BigDecimal! @source(subgraph: "uniswap", name: "totalSupply", type: "BigDecimal!")
  reserveETH: BigDecimal! @source(subgraph: "uniswap", name: "reserveETH", type: "BigDecimal!")
  reserveUSD: BigDecimal! @source(subgraph: "uniswap", name: "reserveUSD", type: "BigDecimal!")
  trackedReserveETH: BigDecimal! @source(subgraph: "uniswap", name: "trackedReserveETH", type: "BigDecimal!")
  token0Price: BigDecimal! @source(subgraph: "uniswap", name: "token0Price", type: "BigDecimal!")
  token1Price: BigDecimal! @source(subgraph: "uniswap", name: "token1Price", type: "BigDecimal!")
  volumeToken0: BigDecimal! @source(subgraph: "uniswap", name: "volumeToken0", type: "BigDecimal!")
  volumeToken1: BigDecimal! @source(subgraph: "uniswap", name: "volumeToken1", type: "BigDecimal!")
  volumeUSD: BigDecimal! @source(subgraph: "uniswap", name: "volumeUSD", type: "BigDecimal!")
  untrackedVolumeUSD: BigDecimal! @source(subgraph: "uniswap", name: "untrackedVolumeUSD", type: "BigDecimal!")
  txCount: BigInt! @source(subgraph: "uniswap", name: "txCount", type: "BigInt!")
  createdAtTimestamp: BigInt! @source(subgraph: "uniswap", name: "createdAtTimestamp", type: "BigInt!")
  createdAtBlockNumber: BigInt! @source(subgraph: "uniswap", name: "createdAtBlockNumber", type: "BigInt!")
  liquidityProviderCount: BigInt! @source(subgraph: "uniswap", name: "liquidityProviderCount", type: "BigInt!")
  pairHourData(skip: Int = 0, first: Int = 100, orderBy: PairHourData_orderBy, orderDirection: OrderDirection, where: PairHourData_filter): [PairHourData!]! @source(subgraph: "uniswap", name: "pairHourData", type: "[PairHourData!]!")
  liquidityPositions(skip: Int = 0, first: Int = 100, orderBy: LiquidityPosition_orderBy, orderDirection: OrderDirection, where: LiquidityPosition_filter): [LiquidityPosition!]! @source(subgraph: "uniswap", name: "liquidityPositions", type: "[LiquidityPosition!]!")
  liquidityPositionSnapshots(skip: Int = 0, first: Int = 100, orderBy: LiquidityPositionSnapshot_orderBy, orderDirection: OrderDirection, where: LiquidityPositionSnapshot_filter): [LiquidityPositionSnapshot!]! @source(subgraph: "uniswap", name: "liquidityPositionSnapshots", type: "[LiquidityPositionSnapshot!]!")
  mints(skip: Int = 0, first: Int = 100, orderBy: Mint_orderBy, orderDirection: OrderDirection, where: Mint_filter): [Mint!]! @source(subgraph: "uniswap", name: "mints", type: "[Mint!]!")
  burns(skip: Int = 0, first: Int = 100, orderBy: Burn_orderBy, orderDirection: OrderDirection, where: Burn_filter): [Burn!]! @source(subgraph: "uniswap", name: "burns", type: "[Burn!]!")
  swaps(skip: Int = 0, first: Int = 100, orderBy: Swap_orderBy, orderDirection: OrderDirection, where: Swap_filter): [Swap!]! @source(subgraph: "uniswap", name: "swaps", type: "[Swap!]!")
}

type PairDayData @source(subgraph: "uniswap", name: "PairDayData") @resolver(subgraph: "uniswap", operation: "query PairDayDataById($PairDayData_id: ID!) { pairDayData(id: $PairDayData_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetPairDayDataById($PairDayData_id: ID!) { pairDayDatas(where: { id: $PairDayData_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetPairDayDataByIds($PairDayData_id: [ID!]!) { pairDayDatas(where: { id_in: $PairDayData_id }) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "PairDayData_id", select: "id") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  date: Int! @source(subgraph: "uniswap", name: "date", type: "Int!")
  pairAddress: Bytes! @source(subgraph: "uniswap", name: "pairAddress", type: "Bytes!")
  token0: Token! @source(subgraph: "uniswap", name: "token0", type: "Token!")
  token1: Token! @source(subgraph: "uniswap", name: "token1", type: "Token!")
  reserve0: BigDecimal! @source(subgraph: "uniswap", name: "reserve0", type: "BigDecimal!")
  reserve1: BigDecimal! @source(subgraph: "uniswap", name: "reserve1", type: "BigDecimal!")
  totalSupply: BigDecimal @source(subgraph: "uniswap", name: "totalSupply", type: "BigDecimal")
  reserveUSD: BigDecimal! @source(subgraph: "uniswap", name: "reserveUSD", type: "BigDecimal!")
  dailyVolumeToken0: BigDecimal! @source(subgraph: "uniswap", name: "dailyVolumeToken0", type: "BigDecimal!")
  dailyVolumeToken1: BigDecimal! @source(subgraph: "uniswap", name: "dailyVolumeToken1", type: "BigDecimal!")
  dailyVolumeUSD: BigDecimal! @source(subgraph: "uniswap", name: "dailyVolumeUSD", type: "BigDecimal!")
  dailyTxns: BigInt! @source(subgraph: "uniswap", name: "dailyTxns", type: "BigInt!")
}

input PairDayData_filter @source(subgraph: "uniswap", name: "PairDayData_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  date: Int @source(subgraph: "uniswap", name: "date", type: "Int")
  date_not: Int @source(subgraph: "uniswap", name: "date_not", type: "Int")
  date_gt: Int @source(subgraph: "uniswap", name: "date_gt", type: "Int")
  date_lt: Int @source(subgraph: "uniswap", name: "date_lt", type: "Int")
  date_gte: Int @source(subgraph: "uniswap", name: "date_gte", type: "Int")
  date_lte: Int @source(subgraph: "uniswap", name: "date_lte", type: "Int")
  date_in: [Int!] @source(subgraph: "uniswap", name: "date_in", type: "[Int!]")
  date_not_in: [Int!] @source(subgraph: "uniswap", name: "date_not_in", type: "[Int!]")
  pairAddress: Bytes @source(subgraph: "uniswap", name: "pairAddress", type: "Bytes")
  pairAddress_not: Bytes @source(subgraph: "uniswap", name: "pairAddress_not", type: "Bytes")
  pairAddress_gt: Bytes @source(subgraph: "uniswap", name: "pairAddress_gt", type: "Bytes")
  pairAddress_lt: Bytes @source(subgraph: "uniswap", name: "pairAddress_lt", type: "Bytes")
  pairAddress_gte: Bytes @source(subgraph: "uniswap", name: "pairAddress_gte", type: "Bytes")
  pairAddress_lte: Bytes @source(subgraph: "uniswap", name: "pairAddress_lte", type: "Bytes")
  pairAddress_in: [Bytes!] @source(subgraph: "uniswap", name: "pairAddress_in", type: "[Bytes!]")
  pairAddress_not_in: [Bytes!] @source(subgraph: "uniswap", name: "pairAddress_not_in", type: "[Bytes!]")
  pairAddress_contains: Bytes @source(subgraph: "uniswap", name: "pairAddress_contains", type: "Bytes")
  pairAddress_not_contains: Bytes @source(subgraph: "uniswap", name: "pairAddress_not_contains", type: "Bytes")
  token0: String @source(subgraph: "uniswap", name: "token0", type: "String")
  token0_not: String @source(subgraph: "uniswap", name: "token0_not", type: "String")
  token0_gt: String @source(subgraph: "uniswap", name: "token0_gt", type: "String")
  token0_lt: String @source(subgraph: "uniswap", name: "token0_lt", type: "String")
  token0_gte: String @source(subgraph: "uniswap", name: "token0_gte", type: "String")
  token0_lte: String @source(subgraph: "uniswap", name: "token0_lte", type: "String")
  token0_in: [String!] @source(subgraph: "uniswap", name: "token0_in", type: "[String!]")
  token0_not_in: [String!] @source(subgraph: "uniswap", name: "token0_not_in", type: "[String!]")
  token0_contains: String @source(subgraph: "uniswap", name: "token0_contains", type: "String")
  token0_contains_nocase: String @source(subgraph: "uniswap", name: "token0_contains_nocase", type: "String")
  token0_not_contains: String @source(subgraph: "uniswap", name: "token0_not_contains", type: "String")
  token0_not_contains_nocase: String @source(subgraph: "uniswap", name: "token0_not_contains_nocase", type: "String")
  token0_starts_with: String @source(subgraph: "uniswap", name: "token0_starts_with", type: "String")
  token0_starts_with_nocase: String @source(subgraph: "uniswap", name: "token0_starts_with_nocase", type: "String")
  token0_not_starts_with: String @source(subgraph: "uniswap", name: "token0_not_starts_with", type: "String")
  token0_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "token0_not_starts_with_nocase", type: "String")
  token0_ends_with: String @source(subgraph: "uniswap", name: "token0_ends_with", type: "String")
  token0_ends_with_nocase: String @source(subgraph: "uniswap", name: "token0_ends_with_nocase", type: "String")
  token0_not_ends_with: String @source(subgraph: "uniswap", name: "token0_not_ends_with", type: "String")
  token0_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "token0_not_ends_with_nocase", type: "String")
  token0_: Token_filter @source(subgraph: "uniswap", name: "token0_", type: "Token_filter")
  token1: String @source(subgraph: "uniswap", name: "token1", type: "String")
  token1_not: String @source(subgraph: "uniswap", name: "token1_not", type: "String")
  token1_gt: String @source(subgraph: "uniswap", name: "token1_gt", type: "String")
  token1_lt: String @source(subgraph: "uniswap", name: "token1_lt", type: "String")
  token1_gte: String @source(subgraph: "uniswap", name: "token1_gte", type: "String")
  token1_lte: String @source(subgraph: "uniswap", name: "token1_lte", type: "String")
  token1_in: [String!] @source(subgraph: "uniswap", name: "token1_in", type: "[String!]")
  token1_not_in: [String!] @source(subgraph: "uniswap", name: "token1_not_in", type: "[String!]")
  token1_contains: String @source(subgraph: "uniswap", name: "token1_contains", type: "String")
  token1_contains_nocase: String @source(subgraph: "uniswap", name: "token1_contains_nocase", type: "String")
  token1_not_contains: String @source(subgraph: "uniswap", name: "token1_not_contains", type: "String")
  token1_not_contains_nocase: String @source(subgraph: "uniswap", name: "token1_not_contains_nocase", type: "String")
  token1_starts_with: String @source(subgraph: "uniswap", name: "token1_starts_with", type: "String")
  token1_starts_with_nocase: String @source(subgraph: "uniswap", name: "token1_starts_with_nocase", type: "String")
  token1_not_starts_with: String @source(subgraph: "uniswap", name: "token1_not_starts_with", type: "String")
  token1_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "token1_not_starts_with_nocase", type: "String")
  token1_ends_with: String @source(subgraph: "uniswap", name: "token1_ends_with", type: "String")
  token1_ends_with_nocase: String @source(subgraph: "uniswap", name: "token1_ends_with_nocase", type: "String")
  token1_not_ends_with: String @source(subgraph: "uniswap", name: "token1_not_ends_with", type: "String")
  token1_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "token1_not_ends_with_nocase", type: "String")
  token1_: Token_filter @source(subgraph: "uniswap", name: "token1_", type: "Token_filter")
  reserve0: BigDecimal @source(subgraph: "uniswap", name: "reserve0", type: "BigDecimal")
  reserve0_not: BigDecimal @source(subgraph: "uniswap", name: "reserve0_not", type: "BigDecimal")
  reserve0_gt: BigDecimal @source(subgraph: "uniswap", name: "reserve0_gt", type: "BigDecimal")
  reserve0_lt: BigDecimal @source(subgraph: "uniswap", name: "reserve0_lt", type: "BigDecimal")
  reserve0_gte: BigDecimal @source(subgraph: "uniswap", name: "reserve0_gte", type: "BigDecimal")
  reserve0_lte: BigDecimal @source(subgraph: "uniswap", name: "reserve0_lte", type: "BigDecimal")
  reserve0_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve0_in", type: "[BigDecimal!]")
  reserve0_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve0_not_in", type: "[BigDecimal!]")
  reserve1: BigDecimal @source(subgraph: "uniswap", name: "reserve1", type: "BigDecimal")
  reserve1_not: BigDecimal @source(subgraph: "uniswap", name: "reserve1_not", type: "BigDecimal")
  reserve1_gt: BigDecimal @source(subgraph: "uniswap", name: "reserve1_gt", type: "BigDecimal")
  reserve1_lt: BigDecimal @source(subgraph: "uniswap", name: "reserve1_lt", type: "BigDecimal")
  reserve1_gte: BigDecimal @source(subgraph: "uniswap", name: "reserve1_gte", type: "BigDecimal")
  reserve1_lte: BigDecimal @source(subgraph: "uniswap", name: "reserve1_lte", type: "BigDecimal")
  reserve1_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve1_in", type: "[BigDecimal!]")
  reserve1_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve1_not_in", type: "[BigDecimal!]")
  totalSupply: BigDecimal @source(subgraph: "uniswap", name: "totalSupply", type: "BigDecimal")
  totalSupply_not: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_not", type: "BigDecimal")
  totalSupply_gt: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_gt", type: "BigDecimal")
  totalSupply_lt: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_lt", type: "BigDecimal")
  totalSupply_gte: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_gte", type: "BigDecimal")
  totalSupply_lte: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_lte", type: "BigDecimal")
  totalSupply_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalSupply_in", type: "[BigDecimal!]")
  totalSupply_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalSupply_not_in", type: "[BigDecimal!]")
  reserveUSD: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD", type: "BigDecimal")
  reserveUSD_not: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_not", type: "BigDecimal")
  reserveUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_gt", type: "BigDecimal")
  reserveUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_lt", type: "BigDecimal")
  reserveUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_gte", type: "BigDecimal")
  reserveUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_lte", type: "BigDecimal")
  reserveUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserveUSD_in", type: "[BigDecimal!]")
  reserveUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserveUSD_not_in", type: "[BigDecimal!]")
  dailyVolumeToken0: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken0", type: "BigDecimal")
  dailyVolumeToken0_not: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken0_not", type: "BigDecimal")
  dailyVolumeToken0_gt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken0_gt", type: "BigDecimal")
  dailyVolumeToken0_lt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken0_lt", type: "BigDecimal")
  dailyVolumeToken0_gte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken0_gte", type: "BigDecimal")
  dailyVolumeToken0_lte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken0_lte", type: "BigDecimal")
  dailyVolumeToken0_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeToken0_in", type: "[BigDecimal!]")
  dailyVolumeToken0_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeToken0_not_in", type: "[BigDecimal!]")
  dailyVolumeToken1: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken1", type: "BigDecimal")
  dailyVolumeToken1_not: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken1_not", type: "BigDecimal")
  dailyVolumeToken1_gt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken1_gt", type: "BigDecimal")
  dailyVolumeToken1_lt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken1_lt", type: "BigDecimal")
  dailyVolumeToken1_gte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken1_gte", type: "BigDecimal")
  dailyVolumeToken1_lte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken1_lte", type: "BigDecimal")
  dailyVolumeToken1_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeToken1_in", type: "[BigDecimal!]")
  dailyVolumeToken1_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeToken1_not_in", type: "[BigDecimal!]")
  dailyVolumeUSD: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD", type: "BigDecimal")
  dailyVolumeUSD_not: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_not", type: "BigDecimal")
  dailyVolumeUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_gt", type: "BigDecimal")
  dailyVolumeUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_lt", type: "BigDecimal")
  dailyVolumeUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_gte", type: "BigDecimal")
  dailyVolumeUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_lte", type: "BigDecimal")
  dailyVolumeUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeUSD_in", type: "[BigDecimal!]")
  dailyVolumeUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeUSD_not_in", type: "[BigDecimal!]")
  dailyTxns: BigInt @source(subgraph: "uniswap", name: "dailyTxns", type: "BigInt")
  dailyTxns_not: BigInt @source(subgraph: "uniswap", name: "dailyTxns_not", type: "BigInt")
  dailyTxns_gt: BigInt @source(subgraph: "uniswap", name: "dailyTxns_gt", type: "BigInt")
  dailyTxns_lt: BigInt @source(subgraph: "uniswap", name: "dailyTxns_lt", type: "BigInt")
  dailyTxns_gte: BigInt @source(subgraph: "uniswap", name: "dailyTxns_gte", type: "BigInt")
  dailyTxns_lte: BigInt @source(subgraph: "uniswap", name: "dailyTxns_lte", type: "BigInt")
  dailyTxns_in: [BigInt!] @source(subgraph: "uniswap", name: "dailyTxns_in", type: "[BigInt!]")
  dailyTxns_not_in: [BigInt!] @source(subgraph: "uniswap", name: "dailyTxns_not_in", type: "[BigInt!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [PairDayData_filter] @source(subgraph: "uniswap", name: "and", type: "[PairDayData_filter]")
  or: [PairDayData_filter] @source(subgraph: "uniswap", name: "or", type: "[PairDayData_filter]")
}

enum PairDayData_orderBy @source(subgraph: "uniswap", name: "PairDayData_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  date @source(subgraph: "uniswap", name: "date")
  pairAddress @source(subgraph: "uniswap", name: "pairAddress")
  token0 @source(subgraph: "uniswap", name: "token0")
  token0__id @source(subgraph: "uniswap", name: "token0__id")
  token0__symbol @source(subgraph: "uniswap", name: "token0__symbol")
  token0__name @source(subgraph: "uniswap", name: "token0__name")
  token0__decimals @source(subgraph: "uniswap", name: "token0__decimals")
  token0__totalSupply @source(subgraph: "uniswap", name: "token0__totalSupply")
  token0__tradeVolume @source(subgraph: "uniswap", name: "token0__tradeVolume")
  token0__tradeVolumeUSD @source(subgraph: "uniswap", name: "token0__tradeVolumeUSD")
  token0__untrackedVolumeUSD @source(subgraph: "uniswap", name: "token0__untrackedVolumeUSD")
  token0__txCount @source(subgraph: "uniswap", name: "token0__txCount")
  token0__totalLiquidity @source(subgraph: "uniswap", name: "token0__totalLiquidity")
  token0__derivedETH @source(subgraph: "uniswap", name: "token0__derivedETH")
  token1 @source(subgraph: "uniswap", name: "token1")
  token1__id @source(subgraph: "uniswap", name: "token1__id")
  token1__symbol @source(subgraph: "uniswap", name: "token1__symbol")
  token1__name @source(subgraph: "uniswap", name: "token1__name")
  token1__decimals @source(subgraph: "uniswap", name: "token1__decimals")
  token1__totalSupply @source(subgraph: "uniswap", name: "token1__totalSupply")
  token1__tradeVolume @source(subgraph: "uniswap", name: "token1__tradeVolume")
  token1__tradeVolumeUSD @source(subgraph: "uniswap", name: "token1__tradeVolumeUSD")
  token1__untrackedVolumeUSD @source(subgraph: "uniswap", name: "token1__untrackedVolumeUSD")
  token1__txCount @source(subgraph: "uniswap", name: "token1__txCount")
  token1__totalLiquidity @source(subgraph: "uniswap", name: "token1__totalLiquidity")
  token1__derivedETH @source(subgraph: "uniswap", name: "token1__derivedETH")
  reserve0 @source(subgraph: "uniswap", name: "reserve0")
  reserve1 @source(subgraph: "uniswap", name: "reserve1")
  totalSupply @source(subgraph: "uniswap", name: "totalSupply")
  reserveUSD @source(subgraph: "uniswap", name: "reserveUSD")
  dailyVolumeToken0 @source(subgraph: "uniswap", name: "dailyVolumeToken0")
  dailyVolumeToken1 @source(subgraph: "uniswap", name: "dailyVolumeToken1")
  dailyVolumeUSD @source(subgraph: "uniswap", name: "dailyVolumeUSD")
  dailyTxns @source(subgraph: "uniswap", name: "dailyTxns")
}

type PairHourData @source(subgraph: "uniswap", name: "PairHourData") @resolver(subgraph: "uniswap", operation: "query PairHourDataById($PairHourData_id: ID!) { pairHourData(id: $PairHourData_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetPairHourDataById($PairHourData_id: ID!) { pairHourDatas(where: { id: $PairHourData_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetPairHourDataByIds($PairHourData_id: [ID!]!) { pairHourDatas(where: { id_in: $PairHourData_id }) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "PairHourData_id", select: "id") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  hourStartUnix: Int! @source(subgraph: "uniswap", name: "hourStartUnix", type: "Int!")
  pair: Pair! @source(subgraph: "uniswap", name: "pair", type: "Pair!")
  reserve0: BigDecimal! @source(subgraph: "uniswap", name: "reserve0", type: "BigDecimal!")
  reserve1: BigDecimal! @source(subgraph: "uniswap", name: "reserve1", type: "BigDecimal!")
  totalSupply: BigDecimal @source(subgraph: "uniswap", name: "totalSupply", type: "BigDecimal")
  reserveUSD: BigDecimal! @source(subgraph: "uniswap", name: "reserveUSD", type: "BigDecimal!")
  hourlyVolumeToken0: BigDecimal! @source(subgraph: "uniswap", name: "hourlyVolumeToken0", type: "BigDecimal!")
  hourlyVolumeToken1: BigDecimal! @source(subgraph: "uniswap", name: "hourlyVolumeToken1", type: "BigDecimal!")
  hourlyVolumeUSD: BigDecimal! @source(subgraph: "uniswap", name: "hourlyVolumeUSD", type: "BigDecimal!")
  hourlyTxns: BigInt! @source(subgraph: "uniswap", name: "hourlyTxns", type: "BigInt!")
}

input PairHourData_filter @source(subgraph: "uniswap", name: "PairHourData_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  hourStartUnix: Int @source(subgraph: "uniswap", name: "hourStartUnix", type: "Int")
  hourStartUnix_not: Int @source(subgraph: "uniswap", name: "hourStartUnix_not", type: "Int")
  hourStartUnix_gt: Int @source(subgraph: "uniswap", name: "hourStartUnix_gt", type: "Int")
  hourStartUnix_lt: Int @source(subgraph: "uniswap", name: "hourStartUnix_lt", type: "Int")
  hourStartUnix_gte: Int @source(subgraph: "uniswap", name: "hourStartUnix_gte", type: "Int")
  hourStartUnix_lte: Int @source(subgraph: "uniswap", name: "hourStartUnix_lte", type: "Int")
  hourStartUnix_in: [Int!] @source(subgraph: "uniswap", name: "hourStartUnix_in", type: "[Int!]")
  hourStartUnix_not_in: [Int!] @source(subgraph: "uniswap", name: "hourStartUnix_not_in", type: "[Int!]")
  pair: String @source(subgraph: "uniswap", name: "pair", type: "String")
  pair_not: String @source(subgraph: "uniswap", name: "pair_not", type: "String")
  pair_gt: String @source(subgraph: "uniswap", name: "pair_gt", type: "String")
  pair_lt: String @source(subgraph: "uniswap", name: "pair_lt", type: "String")
  pair_gte: String @source(subgraph: "uniswap", name: "pair_gte", type: "String")
  pair_lte: String @source(subgraph: "uniswap", name: "pair_lte", type: "String")
  pair_in: [String!] @source(subgraph: "uniswap", name: "pair_in", type: "[String!]")
  pair_not_in: [String!] @source(subgraph: "uniswap", name: "pair_not_in", type: "[String!]")
  pair_contains: String @source(subgraph: "uniswap", name: "pair_contains", type: "String")
  pair_contains_nocase: String @source(subgraph: "uniswap", name: "pair_contains_nocase", type: "String")
  pair_not_contains: String @source(subgraph: "uniswap", name: "pair_not_contains", type: "String")
  pair_not_contains_nocase: String @source(subgraph: "uniswap", name: "pair_not_contains_nocase", type: "String")
  pair_starts_with: String @source(subgraph: "uniswap", name: "pair_starts_with", type: "String")
  pair_starts_with_nocase: String @source(subgraph: "uniswap", name: "pair_starts_with_nocase", type: "String")
  pair_not_starts_with: String @source(subgraph: "uniswap", name: "pair_not_starts_with", type: "String")
  pair_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "pair_not_starts_with_nocase", type: "String")
  pair_ends_with: String @source(subgraph: "uniswap", name: "pair_ends_with", type: "String")
  pair_ends_with_nocase: String @source(subgraph: "uniswap", name: "pair_ends_with_nocase", type: "String")
  pair_not_ends_with: String @source(subgraph: "uniswap", name: "pair_not_ends_with", type: "String")
  pair_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "pair_not_ends_with_nocase", type: "String")
  pair_: Pair_filter @source(subgraph: "uniswap", name: "pair_", type: "Pair_filter")
  reserve0: BigDecimal @source(subgraph: "uniswap", name: "reserve0", type: "BigDecimal")
  reserve0_not: BigDecimal @source(subgraph: "uniswap", name: "reserve0_not", type: "BigDecimal")
  reserve0_gt: BigDecimal @source(subgraph: "uniswap", name: "reserve0_gt", type: "BigDecimal")
  reserve0_lt: BigDecimal @source(subgraph: "uniswap", name: "reserve0_lt", type: "BigDecimal")
  reserve0_gte: BigDecimal @source(subgraph: "uniswap", name: "reserve0_gte", type: "BigDecimal")
  reserve0_lte: BigDecimal @source(subgraph: "uniswap", name: "reserve0_lte", type: "BigDecimal")
  reserve0_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve0_in", type: "[BigDecimal!]")
  reserve0_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve0_not_in", type: "[BigDecimal!]")
  reserve1: BigDecimal @source(subgraph: "uniswap", name: "reserve1", type: "BigDecimal")
  reserve1_not: BigDecimal @source(subgraph: "uniswap", name: "reserve1_not", type: "BigDecimal")
  reserve1_gt: BigDecimal @source(subgraph: "uniswap", name: "reserve1_gt", type: "BigDecimal")
  reserve1_lt: BigDecimal @source(subgraph: "uniswap", name: "reserve1_lt", type: "BigDecimal")
  reserve1_gte: BigDecimal @source(subgraph: "uniswap", name: "reserve1_gte", type: "BigDecimal")
  reserve1_lte: BigDecimal @source(subgraph: "uniswap", name: "reserve1_lte", type: "BigDecimal")
  reserve1_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve1_in", type: "[BigDecimal!]")
  reserve1_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve1_not_in", type: "[BigDecimal!]")
  totalSupply: BigDecimal @source(subgraph: "uniswap", name: "totalSupply", type: "BigDecimal")
  totalSupply_not: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_not", type: "BigDecimal")
  totalSupply_gt: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_gt", type: "BigDecimal")
  totalSupply_lt: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_lt", type: "BigDecimal")
  totalSupply_gte: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_gte", type: "BigDecimal")
  totalSupply_lte: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_lte", type: "BigDecimal")
  totalSupply_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalSupply_in", type: "[BigDecimal!]")
  totalSupply_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalSupply_not_in", type: "[BigDecimal!]")
  reserveUSD: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD", type: "BigDecimal")
  reserveUSD_not: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_not", type: "BigDecimal")
  reserveUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_gt", type: "BigDecimal")
  reserveUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_lt", type: "BigDecimal")
  reserveUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_gte", type: "BigDecimal")
  reserveUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_lte", type: "BigDecimal")
  reserveUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserveUSD_in", type: "[BigDecimal!]")
  reserveUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserveUSD_not_in", type: "[BigDecimal!]")
  hourlyVolumeToken0: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeToken0", type: "BigDecimal")
  hourlyVolumeToken0_not: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeToken0_not", type: "BigDecimal")
  hourlyVolumeToken0_gt: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeToken0_gt", type: "BigDecimal")
  hourlyVolumeToken0_lt: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeToken0_lt", type: "BigDecimal")
  hourlyVolumeToken0_gte: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeToken0_gte", type: "BigDecimal")
  hourlyVolumeToken0_lte: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeToken0_lte", type: "BigDecimal")
  hourlyVolumeToken0_in: [BigDecimal!] @source(subgraph: "uniswap", name: "hourlyVolumeToken0_in", type: "[BigDecimal!]")
  hourlyVolumeToken0_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "hourlyVolumeToken0_not_in", type: "[BigDecimal!]")
  hourlyVolumeToken1: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeToken1", type: "BigDecimal")
  hourlyVolumeToken1_not: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeToken1_not", type: "BigDecimal")
  hourlyVolumeToken1_gt: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeToken1_gt", type: "BigDecimal")
  hourlyVolumeToken1_lt: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeToken1_lt", type: "BigDecimal")
  hourlyVolumeToken1_gte: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeToken1_gte", type: "BigDecimal")
  hourlyVolumeToken1_lte: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeToken1_lte", type: "BigDecimal")
  hourlyVolumeToken1_in: [BigDecimal!] @source(subgraph: "uniswap", name: "hourlyVolumeToken1_in", type: "[BigDecimal!]")
  hourlyVolumeToken1_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "hourlyVolumeToken1_not_in", type: "[BigDecimal!]")
  hourlyVolumeUSD: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeUSD", type: "BigDecimal")
  hourlyVolumeUSD_not: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeUSD_not", type: "BigDecimal")
  hourlyVolumeUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeUSD_gt", type: "BigDecimal")
  hourlyVolumeUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeUSD_lt", type: "BigDecimal")
  hourlyVolumeUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeUSD_gte", type: "BigDecimal")
  hourlyVolumeUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "hourlyVolumeUSD_lte", type: "BigDecimal")
  hourlyVolumeUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "hourlyVolumeUSD_in", type: "[BigDecimal!]")
  hourlyVolumeUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "hourlyVolumeUSD_not_in", type: "[BigDecimal!]")
  hourlyTxns: BigInt @source(subgraph: "uniswap", name: "hourlyTxns", type: "BigInt")
  hourlyTxns_not: BigInt @source(subgraph: "uniswap", name: "hourlyTxns_not", type: "BigInt")
  hourlyTxns_gt: BigInt @source(subgraph: "uniswap", name: "hourlyTxns_gt", type: "BigInt")
  hourlyTxns_lt: BigInt @source(subgraph: "uniswap", name: "hourlyTxns_lt", type: "BigInt")
  hourlyTxns_gte: BigInt @source(subgraph: "uniswap", name: "hourlyTxns_gte", type: "BigInt")
  hourlyTxns_lte: BigInt @source(subgraph: "uniswap", name: "hourlyTxns_lte", type: "BigInt")
  hourlyTxns_in: [BigInt!] @source(subgraph: "uniswap", name: "hourlyTxns_in", type: "[BigInt!]")
  hourlyTxns_not_in: [BigInt!] @source(subgraph: "uniswap", name: "hourlyTxns_not_in", type: "[BigInt!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [PairHourData_filter] @source(subgraph: "uniswap", name: "and", type: "[PairHourData_filter]")
  or: [PairHourData_filter] @source(subgraph: "uniswap", name: "or", type: "[PairHourData_filter]")
}

enum PairHourData_orderBy @source(subgraph: "uniswap", name: "PairHourData_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  hourStartUnix @source(subgraph: "uniswap", name: "hourStartUnix")
  pair @source(subgraph: "uniswap", name: "pair")
  pair__id @source(subgraph: "uniswap", name: "pair__id")
  pair__reserve0 @source(subgraph: "uniswap", name: "pair__reserve0")
  pair__reserve1 @source(subgraph: "uniswap", name: "pair__reserve1")
  pair__totalSupply @source(subgraph: "uniswap", name: "pair__totalSupply")
  pair__reserveETH @source(subgraph: "uniswap", name: "pair__reserveETH")
  pair__reserveUSD @source(subgraph: "uniswap", name: "pair__reserveUSD")
  pair__trackedReserveETH @source(subgraph: "uniswap", name: "pair__trackedReserveETH")
  pair__token0Price @source(subgraph: "uniswap", name: "pair__token0Price")
  pair__token1Price @source(subgraph: "uniswap", name: "pair__token1Price")
  pair__volumeToken0 @source(subgraph: "uniswap", name: "pair__volumeToken0")
  pair__volumeToken1 @source(subgraph: "uniswap", name: "pair__volumeToken1")
  pair__volumeUSD @source(subgraph: "uniswap", name: "pair__volumeUSD")
  pair__untrackedVolumeUSD @source(subgraph: "uniswap", name: "pair__untrackedVolumeUSD")
  pair__txCount @source(subgraph: "uniswap", name: "pair__txCount")
  pair__createdAtTimestamp @source(subgraph: "uniswap", name: "pair__createdAtTimestamp")
  pair__createdAtBlockNumber @source(subgraph: "uniswap", name: "pair__createdAtBlockNumber")
  pair__liquidityProviderCount @source(subgraph: "uniswap", name: "pair__liquidityProviderCount")
  reserve0 @source(subgraph: "uniswap", name: "reserve0")
  reserve1 @source(subgraph: "uniswap", name: "reserve1")
  totalSupply @source(subgraph: "uniswap", name: "totalSupply")
  reserveUSD @source(subgraph: "uniswap", name: "reserveUSD")
  hourlyVolumeToken0 @source(subgraph: "uniswap", name: "hourlyVolumeToken0")
  hourlyVolumeToken1 @source(subgraph: "uniswap", name: "hourlyVolumeToken1")
  hourlyVolumeUSD @source(subgraph: "uniswap", name: "hourlyVolumeUSD")
  hourlyTxns @source(subgraph: "uniswap", name: "hourlyTxns")
}

input Pair_filter @source(subgraph: "uniswap", name: "Pair_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  token0: String @source(subgraph: "uniswap", name: "token0", type: "String")
  token0_not: String @source(subgraph: "uniswap", name: "token0_not", type: "String")
  token0_gt: String @source(subgraph: "uniswap", name: "token0_gt", type: "String")
  token0_lt: String @source(subgraph: "uniswap", name: "token0_lt", type: "String")
  token0_gte: String @source(subgraph: "uniswap", name: "token0_gte", type: "String")
  token0_lte: String @source(subgraph: "uniswap", name: "token0_lte", type: "String")
  token0_in: [String!] @source(subgraph: "uniswap", name: "token0_in", type: "[String!]")
  token0_not_in: [String!] @source(subgraph: "uniswap", name: "token0_not_in", type: "[String!]")
  token0_contains: String @source(subgraph: "uniswap", name: "token0_contains", type: "String")
  token0_contains_nocase: String @source(subgraph: "uniswap", name: "token0_contains_nocase", type: "String")
  token0_not_contains: String @source(subgraph: "uniswap", name: "token0_not_contains", type: "String")
  token0_not_contains_nocase: String @source(subgraph: "uniswap", name: "token0_not_contains_nocase", type: "String")
  token0_starts_with: String @source(subgraph: "uniswap", name: "token0_starts_with", type: "String")
  token0_starts_with_nocase: String @source(subgraph: "uniswap", name: "token0_starts_with_nocase", type: "String")
  token0_not_starts_with: String @source(subgraph: "uniswap", name: "token0_not_starts_with", type: "String")
  token0_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "token0_not_starts_with_nocase", type: "String")
  token0_ends_with: String @source(subgraph: "uniswap", name: "token0_ends_with", type: "String")
  token0_ends_with_nocase: String @source(subgraph: "uniswap", name: "token0_ends_with_nocase", type: "String")
  token0_not_ends_with: String @source(subgraph: "uniswap", name: "token0_not_ends_with", type: "String")
  token0_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "token0_not_ends_with_nocase", type: "String")
  token0_: Token_filter @source(subgraph: "uniswap", name: "token0_", type: "Token_filter")
  token1: String @source(subgraph: "uniswap", name: "token1", type: "String")
  token1_not: String @source(subgraph: "uniswap", name: "token1_not", type: "String")
  token1_gt: String @source(subgraph: "uniswap", name: "token1_gt", type: "String")
  token1_lt: String @source(subgraph: "uniswap", name: "token1_lt", type: "String")
  token1_gte: String @source(subgraph: "uniswap", name: "token1_gte", type: "String")
  token1_lte: String @source(subgraph: "uniswap", name: "token1_lte", type: "String")
  token1_in: [String!] @source(subgraph: "uniswap", name: "token1_in", type: "[String!]")
  token1_not_in: [String!] @source(subgraph: "uniswap", name: "token1_not_in", type: "[String!]")
  token1_contains: String @source(subgraph: "uniswap", name: "token1_contains", type: "String")
  token1_contains_nocase: String @source(subgraph: "uniswap", name: "token1_contains_nocase", type: "String")
  token1_not_contains: String @source(subgraph: "uniswap", name: "token1_not_contains", type: "String")
  token1_not_contains_nocase: String @source(subgraph: "uniswap", name: "token1_not_contains_nocase", type: "String")
  token1_starts_with: String @source(subgraph: "uniswap", name: "token1_starts_with", type: "String")
  token1_starts_with_nocase: String @source(subgraph: "uniswap", name: "token1_starts_with_nocase", type: "String")
  token1_not_starts_with: String @source(subgraph: "uniswap", name: "token1_not_starts_with", type: "String")
  token1_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "token1_not_starts_with_nocase", type: "String")
  token1_ends_with: String @source(subgraph: "uniswap", name: "token1_ends_with", type: "String")
  token1_ends_with_nocase: String @source(subgraph: "uniswap", name: "token1_ends_with_nocase", type: "String")
  token1_not_ends_with: String @source(subgraph: "uniswap", name: "token1_not_ends_with", type: "String")
  token1_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "token1_not_ends_with_nocase", type: "String")
  token1_: Token_filter @source(subgraph: "uniswap", name: "token1_", type: "Token_filter")
  reserve0: BigDecimal @source(subgraph: "uniswap", name: "reserve0", type: "BigDecimal")
  reserve0_not: BigDecimal @source(subgraph: "uniswap", name: "reserve0_not", type: "BigDecimal")
  reserve0_gt: BigDecimal @source(subgraph: "uniswap", name: "reserve0_gt", type: "BigDecimal")
  reserve0_lt: BigDecimal @source(subgraph: "uniswap", name: "reserve0_lt", type: "BigDecimal")
  reserve0_gte: BigDecimal @source(subgraph: "uniswap", name: "reserve0_gte", type: "BigDecimal")
  reserve0_lte: BigDecimal @source(subgraph: "uniswap", name: "reserve0_lte", type: "BigDecimal")
  reserve0_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve0_in", type: "[BigDecimal!]")
  reserve0_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve0_not_in", type: "[BigDecimal!]")
  reserve1: BigDecimal @source(subgraph: "uniswap", name: "reserve1", type: "BigDecimal")
  reserve1_not: BigDecimal @source(subgraph: "uniswap", name: "reserve1_not", type: "BigDecimal")
  reserve1_gt: BigDecimal @source(subgraph: "uniswap", name: "reserve1_gt", type: "BigDecimal")
  reserve1_lt: BigDecimal @source(subgraph: "uniswap", name: "reserve1_lt", type: "BigDecimal")
  reserve1_gte: BigDecimal @source(subgraph: "uniswap", name: "reserve1_gte", type: "BigDecimal")
  reserve1_lte: BigDecimal @source(subgraph: "uniswap", name: "reserve1_lte", type: "BigDecimal")
  reserve1_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve1_in", type: "[BigDecimal!]")
  reserve1_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserve1_not_in", type: "[BigDecimal!]")
  totalSupply: BigDecimal @source(subgraph: "uniswap", name: "totalSupply", type: "BigDecimal")
  totalSupply_not: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_not", type: "BigDecimal")
  totalSupply_gt: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_gt", type: "BigDecimal")
  totalSupply_lt: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_lt", type: "BigDecimal")
  totalSupply_gte: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_gte", type: "BigDecimal")
  totalSupply_lte: BigDecimal @source(subgraph: "uniswap", name: "totalSupply_lte", type: "BigDecimal")
  totalSupply_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalSupply_in", type: "[BigDecimal!]")
  totalSupply_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalSupply_not_in", type: "[BigDecimal!]")
  reserveETH: BigDecimal @source(subgraph: "uniswap", name: "reserveETH", type: "BigDecimal")
  reserveETH_not: BigDecimal @source(subgraph: "uniswap", name: "reserveETH_not", type: "BigDecimal")
  reserveETH_gt: BigDecimal @source(subgraph: "uniswap", name: "reserveETH_gt", type: "BigDecimal")
  reserveETH_lt: BigDecimal @source(subgraph: "uniswap", name: "reserveETH_lt", type: "BigDecimal")
  reserveETH_gte: BigDecimal @source(subgraph: "uniswap", name: "reserveETH_gte", type: "BigDecimal")
  reserveETH_lte: BigDecimal @source(subgraph: "uniswap", name: "reserveETH_lte", type: "BigDecimal")
  reserveETH_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserveETH_in", type: "[BigDecimal!]")
  reserveETH_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserveETH_not_in", type: "[BigDecimal!]")
  reserveUSD: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD", type: "BigDecimal")
  reserveUSD_not: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_not", type: "BigDecimal")
  reserveUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_gt", type: "BigDecimal")
  reserveUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_lt", type: "BigDecimal")
  reserveUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_gte", type: "BigDecimal")
  reserveUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "reserveUSD_lte", type: "BigDecimal")
  reserveUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserveUSD_in", type: "[BigDecimal!]")
  reserveUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "reserveUSD_not_in", type: "[BigDecimal!]")
  trackedReserveETH: BigDecimal @source(subgraph: "uniswap", name: "trackedReserveETH", type: "BigDecimal")
  trackedReserveETH_not: BigDecimal @source(subgraph: "uniswap", name: "trackedReserveETH_not", type: "BigDecimal")
  trackedReserveETH_gt: BigDecimal @source(subgraph: "uniswap", name: "trackedReserveETH_gt", type: "BigDecimal")
  trackedReserveETH_lt: BigDecimal @source(subgraph: "uniswap", name: "trackedReserveETH_lt", type: "BigDecimal")
  trackedReserveETH_gte: BigDecimal @source(subgraph: "uniswap", name: "trackedReserveETH_gte", type: "BigDecimal")
  trackedReserveETH_lte: BigDecimal @source(subgraph: "uniswap", name: "trackedReserveETH_lte", type: "BigDecimal")
  trackedReserveETH_in: [BigDecimal!] @source(subgraph: "uniswap", name: "trackedReserveETH_in", type: "[BigDecimal!]")
  trackedReserveETH_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "trackedReserveETH_not_in", type: "[BigDecimal!]")
  token0Price: BigDecimal @source(subgraph: "uniswap", name: "token0Price", type: "BigDecimal")
  token0Price_not: BigDecimal @source(subgraph: "uniswap", name: "token0Price_not", type: "BigDecimal")
  token0Price_gt: BigDecimal @source(subgraph: "uniswap", name: "token0Price_gt", type: "BigDecimal")
  token0Price_lt: BigDecimal @source(subgraph: "uniswap", name: "token0Price_lt", type: "BigDecimal")
  token0Price_gte: BigDecimal @source(subgraph: "uniswap", name: "token0Price_gte", type: "BigDecimal")
  token0Price_lte: BigDecimal @source(subgraph: "uniswap", name: "token0Price_lte", type: "BigDecimal")
  token0Price_in: [BigDecimal!] @source(subgraph: "uniswap", name: "token0Price_in", type: "[BigDecimal!]")
  token0Price_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "token0Price_not_in", type: "[BigDecimal!]")
  token1Price: BigDecimal @source(subgraph: "uniswap", name: "token1Price", type: "BigDecimal")
  token1Price_not: BigDecimal @source(subgraph: "uniswap", name: "token1Price_not", type: "BigDecimal")
  token1Price_gt: BigDecimal @source(subgraph: "uniswap", name: "token1Price_gt", type: "BigDecimal")
  token1Price_lt: BigDecimal @source(subgraph: "uniswap", name: "token1Price_lt", type: "BigDecimal")
  token1Price_gte: BigDecimal @source(subgraph: "uniswap", name: "token1Price_gte", type: "BigDecimal")
  token1Price_lte: BigDecimal @source(subgraph: "uniswap", name: "token1Price_lte", type: "BigDecimal")
  token1Price_in: [BigDecimal!] @source(subgraph: "uniswap", name: "token1Price_in", type: "[BigDecimal!]")
  token1Price_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "token1Price_not_in", type: "[BigDecimal!]")
  volumeToken0: BigDecimal @source(subgraph: "uniswap", name: "volumeToken0", type: "BigDecimal")
  volumeToken0_not: BigDecimal @source(subgraph: "uniswap", name: "volumeToken0_not", type: "BigDecimal")
  volumeToken0_gt: BigDecimal @source(subgraph: "uniswap", name: "volumeToken0_gt", type: "BigDecimal")
  volumeToken0_lt: BigDecimal @source(subgraph: "uniswap", name: "volumeToken0_lt", type: "BigDecimal")
  volumeToken0_gte: BigDecimal @source(subgraph: "uniswap", name: "volumeToken0_gte", type: "BigDecimal")
  volumeToken0_lte: BigDecimal @source(subgraph: "uniswap", name: "volumeToken0_lte", type: "BigDecimal")
  volumeToken0_in: [BigDecimal!] @source(subgraph: "uniswap", name: "volumeToken0_in", type: "[BigDecimal!]")
  volumeToken0_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "volumeToken0_not_in", type: "[BigDecimal!]")
  volumeToken1: BigDecimal @source(subgraph: "uniswap", name: "volumeToken1", type: "BigDecimal")
  volumeToken1_not: BigDecimal @source(subgraph: "uniswap", name: "volumeToken1_not", type: "BigDecimal")
  volumeToken1_gt: BigDecimal @source(subgraph: "uniswap", name: "volumeToken1_gt", type: "BigDecimal")
  volumeToken1_lt: BigDecimal @source(subgraph: "uniswap", name: "volumeToken1_lt", type: "BigDecimal")
  volumeToken1_gte: BigDecimal @source(subgraph: "uniswap", name: "volumeToken1_gte", type: "BigDecimal")
  volumeToken1_lte: BigDecimal @source(subgraph: "uniswap", name: "volumeToken1_lte", type: "BigDecimal")
  volumeToken1_in: [BigDecimal!] @source(subgraph: "uniswap", name: "volumeToken1_in", type: "[BigDecimal!]")
  volumeToken1_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "volumeToken1_not_in", type: "[BigDecimal!]")
  volumeUSD: BigDecimal @source(subgraph: "uniswap", name: "volumeUSD", type: "BigDecimal")
  volumeUSD_not: BigDecimal @source(subgraph: "uniswap", name: "volumeUSD_not", type: "BigDecimal")
  volumeUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "volumeUSD_gt", type: "BigDecimal")
  volumeUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "volumeUSD_lt", type: "BigDecimal")
  volumeUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "volumeUSD_gte", type: "BigDecimal")
  volumeUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "volumeUSD_lte", type: "BigDecimal")
  volumeUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "volumeUSD_in", type: "[BigDecimal!]")
  volumeUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "volumeUSD_not_in", type: "[BigDecimal!]")
  untrackedVolumeUSD: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD", type: "BigDecimal")
  untrackedVolumeUSD_not: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_not", type: "BigDecimal")
  untrackedVolumeUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_gt", type: "BigDecimal")
  untrackedVolumeUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_lt", type: "BigDecimal")
  untrackedVolumeUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_gte", type: "BigDecimal")
  untrackedVolumeUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_lte", type: "BigDecimal")
  untrackedVolumeUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "untrackedVolumeUSD_in", type: "[BigDecimal!]")
  untrackedVolumeUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "untrackedVolumeUSD_not_in", type: "[BigDecimal!]")
  txCount: BigInt @source(subgraph: "uniswap", name: "txCount", type: "BigInt")
  txCount_not: BigInt @source(subgraph: "uniswap", name: "txCount_not", type: "BigInt")
  txCount_gt: BigInt @source(subgraph: "uniswap", name: "txCount_gt", type: "BigInt")
  txCount_lt: BigInt @source(subgraph: "uniswap", name: "txCount_lt", type: "BigInt")
  txCount_gte: BigInt @source(subgraph: "uniswap", name: "txCount_gte", type: "BigInt")
  txCount_lte: BigInt @source(subgraph: "uniswap", name: "txCount_lte", type: "BigInt")
  txCount_in: [BigInt!] @source(subgraph: "uniswap", name: "txCount_in", type: "[BigInt!]")
  txCount_not_in: [BigInt!] @source(subgraph: "uniswap", name: "txCount_not_in", type: "[BigInt!]")
  createdAtTimestamp: BigInt @source(subgraph: "uniswap", name: "createdAtTimestamp", type: "BigInt")
  createdAtTimestamp_not: BigInt @source(subgraph: "uniswap", name: "createdAtTimestamp_not", type: "BigInt")
  createdAtTimestamp_gt: BigInt @source(subgraph: "uniswap", name: "createdAtTimestamp_gt", type: "BigInt")
  createdAtTimestamp_lt: BigInt @source(subgraph: "uniswap", name: "createdAtTimestamp_lt", type: "BigInt")
  createdAtTimestamp_gte: BigInt @source(subgraph: "uniswap", name: "createdAtTimestamp_gte", type: "BigInt")
  createdAtTimestamp_lte: BigInt @source(subgraph: "uniswap", name: "createdAtTimestamp_lte", type: "BigInt")
  createdAtTimestamp_in: [BigInt!] @source(subgraph: "uniswap", name: "createdAtTimestamp_in", type: "[BigInt!]")
  createdAtTimestamp_not_in: [BigInt!] @source(subgraph: "uniswap", name: "createdAtTimestamp_not_in", type: "[BigInt!]")
  createdAtBlockNumber: BigInt @source(subgraph: "uniswap", name: "createdAtBlockNumber", type: "BigInt")
  createdAtBlockNumber_not: BigInt @source(subgraph: "uniswap", name: "createdAtBlockNumber_not", type: "BigInt")
  createdAtBlockNumber_gt: BigInt @source(subgraph: "uniswap", name: "createdAtBlockNumber_gt", type: "BigInt")
  createdAtBlockNumber_lt: BigInt @source(subgraph: "uniswap", name: "createdAtBlockNumber_lt", type: "BigInt")
  createdAtBlockNumber_gte: BigInt @source(subgraph: "uniswap", name: "createdAtBlockNumber_gte", type: "BigInt")
  createdAtBlockNumber_lte: BigInt @source(subgraph: "uniswap", name: "createdAtBlockNumber_lte", type: "BigInt")
  createdAtBlockNumber_in: [BigInt!] @source(subgraph: "uniswap", name: "createdAtBlockNumber_in", type: "[BigInt!]")
  createdAtBlockNumber_not_in: [BigInt!] @source(subgraph: "uniswap", name: "createdAtBlockNumber_not_in", type: "[BigInt!]")
  liquidityProviderCount: BigInt @source(subgraph: "uniswap", name: "liquidityProviderCount", type: "BigInt")
  liquidityProviderCount_not: BigInt @source(subgraph: "uniswap", name: "liquidityProviderCount_not", type: "BigInt")
  liquidityProviderCount_gt: BigInt @source(subgraph: "uniswap", name: "liquidityProviderCount_gt", type: "BigInt")
  liquidityProviderCount_lt: BigInt @source(subgraph: "uniswap", name: "liquidityProviderCount_lt", type: "BigInt")
  liquidityProviderCount_gte: BigInt @source(subgraph: "uniswap", name: "liquidityProviderCount_gte", type: "BigInt")
  liquidityProviderCount_lte: BigInt @source(subgraph: "uniswap", name: "liquidityProviderCount_lte", type: "BigInt")
  liquidityProviderCount_in: [BigInt!] @source(subgraph: "uniswap", name: "liquidityProviderCount_in", type: "[BigInt!]")
  liquidityProviderCount_not_in: [BigInt!] @source(subgraph: "uniswap", name: "liquidityProviderCount_not_in", type: "[BigInt!]")
  pairHourData_: PairHourData_filter @source(subgraph: "uniswap", name: "pairHourData_", type: "PairHourData_filter")
  liquidityPositions_: LiquidityPosition_filter @source(subgraph: "uniswap", name: "liquidityPositions_", type: "LiquidityPosition_filter")
  liquidityPositionSnapshots_: LiquidityPositionSnapshot_filter @source(subgraph: "uniswap", name: "liquidityPositionSnapshots_", type: "LiquidityPositionSnapshot_filter")
  mints_: Mint_filter @source(subgraph: "uniswap", name: "mints_", type: "Mint_filter")
  burns_: Burn_filter @source(subgraph: "uniswap", name: "burns_", type: "Burn_filter")
  swaps_: Swap_filter @source(subgraph: "uniswap", name: "swaps_", type: "Swap_filter")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [Pair_filter] @source(subgraph: "uniswap", name: "and", type: "[Pair_filter]")
  or: [Pair_filter] @source(subgraph: "uniswap", name: "or", type: "[Pair_filter]")
}

enum Pair_orderBy @source(subgraph: "uniswap", name: "Pair_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  token0 @source(subgraph: "uniswap", name: "token0")
  token0__id @source(subgraph: "uniswap", name: "token0__id")
  token0__symbol @source(subgraph: "uniswap", name: "token0__symbol")
  token0__name @source(subgraph: "uniswap", name: "token0__name")
  token0__decimals @source(subgraph: "uniswap", name: "token0__decimals")
  token0__totalSupply @source(subgraph: "uniswap", name: "token0__totalSupply")
  token0__tradeVolume @source(subgraph: "uniswap", name: "token0__tradeVolume")
  token0__tradeVolumeUSD @source(subgraph: "uniswap", name: "token0__tradeVolumeUSD")
  token0__untrackedVolumeUSD @source(subgraph: "uniswap", name: "token0__untrackedVolumeUSD")
  token0__txCount @source(subgraph: "uniswap", name: "token0__txCount")
  token0__totalLiquidity @source(subgraph: "uniswap", name: "token0__totalLiquidity")
  token0__derivedETH @source(subgraph: "uniswap", name: "token0__derivedETH")
  token1 @source(subgraph: "uniswap", name: "token1")
  token1__id @source(subgraph: "uniswap", name: "token1__id")
  token1__symbol @source(subgraph: "uniswap", name: "token1__symbol")
  token1__name @source(subgraph: "uniswap", name: "token1__name")
  token1__decimals @source(subgraph: "uniswap", name: "token1__decimals")
  token1__totalSupply @source(subgraph: "uniswap", name: "token1__totalSupply")
  token1__tradeVolume @source(subgraph: "uniswap", name: "token1__tradeVolume")
  token1__tradeVolumeUSD @source(subgraph: "uniswap", name: "token1__tradeVolumeUSD")
  token1__untrackedVolumeUSD @source(subgraph: "uniswap", name: "token1__untrackedVolumeUSD")
  token1__txCount @source(subgraph: "uniswap", name: "token1__txCount")
  token1__totalLiquidity @source(subgraph: "uniswap", name: "token1__totalLiquidity")
  token1__derivedETH @source(subgraph: "uniswap", name: "token1__derivedETH")
  reserve0 @source(subgraph: "uniswap", name: "reserve0")
  reserve1 @source(subgraph: "uniswap", name: "reserve1")
  totalSupply @source(subgraph: "uniswap", name: "totalSupply")
  reserveETH @source(subgraph: "uniswap", name: "reserveETH")
  reserveUSD @source(subgraph: "uniswap", name: "reserveUSD")
  trackedReserveETH @source(subgraph: "uniswap", name: "trackedReserveETH")
  token0Price @source(subgraph: "uniswap", name: "token0Price")
  token1Price @source(subgraph: "uniswap", name: "token1Price")
  volumeToken0 @source(subgraph: "uniswap", name: "volumeToken0")
  volumeToken1 @source(subgraph: "uniswap", name: "volumeToken1")
  volumeUSD @source(subgraph: "uniswap", name: "volumeUSD")
  untrackedVolumeUSD @source(subgraph: "uniswap", name: "untrackedVolumeUSD")
  txCount @source(subgraph: "uniswap", name: "txCount")
  createdAtTimestamp @source(subgraph: "uniswap", name: "createdAtTimestamp")
  createdAtBlockNumber @source(subgraph: "uniswap", name: "createdAtBlockNumber")
  liquidityProviderCount @source(subgraph: "uniswap", name: "liquidityProviderCount")
  pairHourData @source(subgraph: "uniswap", name: "pairHourData")
  liquidityPositions @source(subgraph: "uniswap", name: "liquidityPositions")
  liquidityPositionSnapshots @source(subgraph: "uniswap", name: "liquidityPositionSnapshots")
  mints @source(subgraph: "uniswap", name: "mints")
  burns @source(subgraph: "uniswap", name: "burns")
  swaps @source(subgraph: "uniswap", name: "swaps")
}

type Swap @source(subgraph: "uniswap", name: "Swap") @resolver(subgraph: "uniswap", operation: "query SwapById($Swap_id: ID!) { swap(id: $Swap_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetSwapById($Swap_id: ID!) { swaps(where: { id: $Swap_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetSwapsByIds($Swap_id: [ID!]!) { swaps(where: { id_in: $Swap_id }) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "Swap_id", select: "id") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  transaction: Transaction! @source(subgraph: "uniswap", name: "transaction", type: "Transaction!")
  timestamp: BigInt! @source(subgraph: "uniswap", name: "timestamp", type: "BigInt!")
  pair: Pair! @source(subgraph: "uniswap", name: "pair", type: "Pair!")
  sender: Bytes! @source(subgraph: "uniswap", name: "sender", type: "Bytes!")
  from: Bytes! @source(subgraph: "uniswap", name: "from", type: "Bytes!")
  amount0In: BigDecimal! @source(subgraph: "uniswap", name: "amount0In", type: "BigDecimal!")
  amount1In: BigDecimal! @source(subgraph: "uniswap", name: "amount1In", type: "BigDecimal!")
  amount0Out: BigDecimal! @source(subgraph: "uniswap", name: "amount0Out", type: "BigDecimal!")
  amount1Out: BigDecimal! @source(subgraph: "uniswap", name: "amount1Out", type: "BigDecimal!")
  to: Bytes! @source(subgraph: "uniswap", name: "to", type: "Bytes!")
  logIndex: BigInt @source(subgraph: "uniswap", name: "logIndex", type: "BigInt")
  amountUSD: BigDecimal! @source(subgraph: "uniswap", name: "amountUSD", type: "BigDecimal!")
}

input Swap_filter @source(subgraph: "uniswap", name: "Swap_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  transaction: String @source(subgraph: "uniswap", name: "transaction", type: "String")
  transaction_not: String @source(subgraph: "uniswap", name: "transaction_not", type: "String")
  transaction_gt: String @source(subgraph: "uniswap", name: "transaction_gt", type: "String")
  transaction_lt: String @source(subgraph: "uniswap", name: "transaction_lt", type: "String")
  transaction_gte: String @source(subgraph: "uniswap", name: "transaction_gte", type: "String")
  transaction_lte: String @source(subgraph: "uniswap", name: "transaction_lte", type: "String")
  transaction_in: [String!] @source(subgraph: "uniswap", name: "transaction_in", type: "[String!]")
  transaction_not_in: [String!] @source(subgraph: "uniswap", name: "transaction_not_in", type: "[String!]")
  transaction_contains: String @source(subgraph: "uniswap", name: "transaction_contains", type: "String")
  transaction_contains_nocase: String @source(subgraph: "uniswap", name: "transaction_contains_nocase", type: "String")
  transaction_not_contains: String @source(subgraph: "uniswap", name: "transaction_not_contains", type: "String")
  transaction_not_contains_nocase: String @source(subgraph: "uniswap", name: "transaction_not_contains_nocase", type: "String")
  transaction_starts_with: String @source(subgraph: "uniswap", name: "transaction_starts_with", type: "String")
  transaction_starts_with_nocase: String @source(subgraph: "uniswap", name: "transaction_starts_with_nocase", type: "String")
  transaction_not_starts_with: String @source(subgraph: "uniswap", name: "transaction_not_starts_with", type: "String")
  transaction_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "transaction_not_starts_with_nocase", type: "String")
  transaction_ends_with: String @source(subgraph: "uniswap", name: "transaction_ends_with", type: "String")
  transaction_ends_with_nocase: String @source(subgraph: "uniswap", name: "transaction_ends_with_nocase", type: "String")
  transaction_not_ends_with: String @source(subgraph: "uniswap", name: "transaction_not_ends_with", type: "String")
  transaction_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "transaction_not_ends_with_nocase", type: "String")
  transaction_: Transaction_filter @source(subgraph: "uniswap", name: "transaction_", type: "Transaction_filter")
  timestamp: BigInt @source(subgraph: "uniswap", name: "timestamp", type: "BigInt")
  timestamp_not: BigInt @source(subgraph: "uniswap", name: "timestamp_not", type: "BigInt")
  timestamp_gt: BigInt @source(subgraph: "uniswap", name: "timestamp_gt", type: "BigInt")
  timestamp_lt: BigInt @source(subgraph: "uniswap", name: "timestamp_lt", type: "BigInt")
  timestamp_gte: BigInt @source(subgraph: "uniswap", name: "timestamp_gte", type: "BigInt")
  timestamp_lte: BigInt @source(subgraph: "uniswap", name: "timestamp_lte", type: "BigInt")
  timestamp_in: [BigInt!] @source(subgraph: "uniswap", name: "timestamp_in", type: "[BigInt!]")
  timestamp_not_in: [BigInt!] @source(subgraph: "uniswap", name: "timestamp_not_in", type: "[BigInt!]")
  pair: String @source(subgraph: "uniswap", name: "pair", type: "String")
  pair_not: String @source(subgraph: "uniswap", name: "pair_not", type: "String")
  pair_gt: String @source(subgraph: "uniswap", name: "pair_gt", type: "String")
  pair_lt: String @source(subgraph: "uniswap", name: "pair_lt", type: "String")
  pair_gte: String @source(subgraph: "uniswap", name: "pair_gte", type: "String")
  pair_lte: String @source(subgraph: "uniswap", name: "pair_lte", type: "String")
  pair_in: [String!] @source(subgraph: "uniswap", name: "pair_in", type: "[String!]")
  pair_not_in: [String!] @source(subgraph: "uniswap", name: "pair_not_in", type: "[String!]")
  pair_contains: String @source(subgraph: "uniswap", name: "pair_contains", type: "String")
  pair_contains_nocase: String @source(subgraph: "uniswap", name: "pair_contains_nocase", type: "String")
  pair_not_contains: String @source(subgraph: "uniswap", name: "pair_not_contains", type: "String")
  pair_not_contains_nocase: String @source(subgraph: "uniswap", name: "pair_not_contains_nocase", type: "String")
  pair_starts_with: String @source(subgraph: "uniswap", name: "pair_starts_with", type: "String")
  pair_starts_with_nocase: String @source(subgraph: "uniswap", name: "pair_starts_with_nocase", type: "String")
  pair_not_starts_with: String @source(subgraph: "uniswap", name: "pair_not_starts_with", type: "String")
  pair_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "pair_not_starts_with_nocase", type: "String")
  pair_ends_with: String @source(subgraph: "uniswap", name: "pair_ends_with", type: "String")
  pair_ends_with_nocase: String @source(subgraph: "uniswap", name: "pair_ends_with_nocase", type: "String")
  pair_not_ends_with: String @source(subgraph: "uniswap", name: "pair_not_ends_with", type: "String")
  pair_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "pair_not_ends_with_nocase", type: "String")
  pair_: Pair_filter @source(subgraph: "uniswap", name: "pair_", type: "Pair_filter")
  sender: Bytes @source(subgraph: "uniswap", name: "sender", type: "Bytes")
  sender_not: Bytes @source(subgraph: "uniswap", name: "sender_not", type: "Bytes")
  sender_gt: Bytes @source(subgraph: "uniswap", name: "sender_gt", type: "Bytes")
  sender_lt: Bytes @source(subgraph: "uniswap", name: "sender_lt", type: "Bytes")
  sender_gte: Bytes @source(subgraph: "uniswap", name: "sender_gte", type: "Bytes")
  sender_lte: Bytes @source(subgraph: "uniswap", name: "sender_lte", type: "Bytes")
  sender_in: [Bytes!] @source(subgraph: "uniswap", name: "sender_in", type: "[Bytes!]")
  sender_not_in: [Bytes!] @source(subgraph: "uniswap", name: "sender_not_in", type: "[Bytes!]")
  sender_contains: Bytes @source(subgraph: "uniswap", name: "sender_contains", type: "Bytes")
  sender_not_contains: Bytes @source(subgraph: "uniswap", name: "sender_not_contains", type: "Bytes")
  from: Bytes @source(subgraph: "uniswap", name: "from", type: "Bytes")
  from_not: Bytes @source(subgraph: "uniswap", name: "from_not", type: "Bytes")
  from_gt: Bytes @source(subgraph: "uniswap", name: "from_gt", type: "Bytes")
  from_lt: Bytes @source(subgraph: "uniswap", name: "from_lt", type: "Bytes")
  from_gte: Bytes @source(subgraph: "uniswap", name: "from_gte", type: "Bytes")
  from_lte: Bytes @source(subgraph: "uniswap", name: "from_lte", type: "Bytes")
  from_in: [Bytes!] @source(subgraph: "uniswap", name: "from_in", type: "[Bytes!]")
  from_not_in: [Bytes!] @source(subgraph: "uniswap", name: "from_not_in", type: "[Bytes!]")
  from_contains: Bytes @source(subgraph: "uniswap", name: "from_contains", type: "Bytes")
  from_not_contains: Bytes @source(subgraph: "uniswap", name: "from_not_contains", type: "Bytes")
  amount0In: BigDecimal @source(subgraph: "uniswap", name: "amount0In", type: "BigDecimal")
  amount0In_not: BigDecimal @source(subgraph: "uniswap", name: "amount0In_not", type: "BigDecimal")
  amount0In_gt: BigDecimal @source(subgraph: "uniswap", name: "amount0In_gt", type: "BigDecimal")
  amount0In_lt: BigDecimal @source(subgraph: "uniswap", name: "amount0In_lt", type: "BigDecimal")
  amount0In_gte: BigDecimal @source(subgraph: "uniswap", name: "amount0In_gte", type: "BigDecimal")
  amount0In_lte: BigDecimal @source(subgraph: "uniswap", name: "amount0In_lte", type: "BigDecimal")
  amount0In_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount0In_in", type: "[BigDecimal!]")
  amount0In_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount0In_not_in", type: "[BigDecimal!]")
  amount1In: BigDecimal @source(subgraph: "uniswap", name: "amount1In", type: "BigDecimal")
  amount1In_not: BigDecimal @source(subgraph: "uniswap", name: "amount1In_not", type: "BigDecimal")
  amount1In_gt: BigDecimal @source(subgraph: "uniswap", name: "amount1In_gt", type: "BigDecimal")
  amount1In_lt: BigDecimal @source(subgraph: "uniswap", name: "amount1In_lt", type: "BigDecimal")
  amount1In_gte: BigDecimal @source(subgraph: "uniswap", name: "amount1In_gte", type: "BigDecimal")
  amount1In_lte: BigDecimal @source(subgraph: "uniswap", name: "amount1In_lte", type: "BigDecimal")
  amount1In_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount1In_in", type: "[BigDecimal!]")
  amount1In_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount1In_not_in", type: "[BigDecimal!]")
  amount0Out: BigDecimal @source(subgraph: "uniswap", name: "amount0Out", type: "BigDecimal")
  amount0Out_not: BigDecimal @source(subgraph: "uniswap", name: "amount0Out_not", type: "BigDecimal")
  amount0Out_gt: BigDecimal @source(subgraph: "uniswap", name: "amount0Out_gt", type: "BigDecimal")
  amount0Out_lt: BigDecimal @source(subgraph: "uniswap", name: "amount0Out_lt", type: "BigDecimal")
  amount0Out_gte: BigDecimal @source(subgraph: "uniswap", name: "amount0Out_gte", type: "BigDecimal")
  amount0Out_lte: BigDecimal @source(subgraph: "uniswap", name: "amount0Out_lte", type: "BigDecimal")
  amount0Out_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount0Out_in", type: "[BigDecimal!]")
  amount0Out_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount0Out_not_in", type: "[BigDecimal!]")
  amount1Out: BigDecimal @source(subgraph: "uniswap", name: "amount1Out", type: "BigDecimal")
  amount1Out_not: BigDecimal @source(subgraph: "uniswap", name: "amount1Out_not", type: "BigDecimal")
  amount1Out_gt: BigDecimal @source(subgraph: "uniswap", name: "amount1Out_gt", type: "BigDecimal")
  amount1Out_lt: BigDecimal @source(subgraph: "uniswap", name: "amount1Out_lt", type: "BigDecimal")
  amount1Out_gte: BigDecimal @source(subgraph: "uniswap", name: "amount1Out_gte", type: "BigDecimal")
  amount1Out_lte: BigDecimal @source(subgraph: "uniswap", name: "amount1Out_lte", type: "BigDecimal")
  amount1Out_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount1Out_in", type: "[BigDecimal!]")
  amount1Out_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amount1Out_not_in", type: "[BigDecimal!]")
  to: Bytes @source(subgraph: "uniswap", name: "to", type: "Bytes")
  to_not: Bytes @source(subgraph: "uniswap", name: "to_not", type: "Bytes")
  to_gt: Bytes @source(subgraph: "uniswap", name: "to_gt", type: "Bytes")
  to_lt: Bytes @source(subgraph: "uniswap", name: "to_lt", type: "Bytes")
  to_gte: Bytes @source(subgraph: "uniswap", name: "to_gte", type: "Bytes")
  to_lte: Bytes @source(subgraph: "uniswap", name: "to_lte", type: "Bytes")
  to_in: [Bytes!] @source(subgraph: "uniswap", name: "to_in", type: "[Bytes!]")
  to_not_in: [Bytes!] @source(subgraph: "uniswap", name: "to_not_in", type: "[Bytes!]")
  to_contains: Bytes @source(subgraph: "uniswap", name: "to_contains", type: "Bytes")
  to_not_contains: Bytes @source(subgraph: "uniswap", name: "to_not_contains", type: "Bytes")
  logIndex: BigInt @source(subgraph: "uniswap", name: "logIndex", type: "BigInt")
  logIndex_not: BigInt @source(subgraph: "uniswap", name: "logIndex_not", type: "BigInt")
  logIndex_gt: BigInt @source(subgraph: "uniswap", name: "logIndex_gt", type: "BigInt")
  logIndex_lt: BigInt @source(subgraph: "uniswap", name: "logIndex_lt", type: "BigInt")
  logIndex_gte: BigInt @source(subgraph: "uniswap", name: "logIndex_gte", type: "BigInt")
  logIndex_lte: BigInt @source(subgraph: "uniswap", name: "logIndex_lte", type: "BigInt")
  logIndex_in: [BigInt!] @source(subgraph: "uniswap", name: "logIndex_in", type: "[BigInt!]")
  logIndex_not_in: [BigInt!] @source(subgraph: "uniswap", name: "logIndex_not_in", type: "[BigInt!]")
  amountUSD: BigDecimal @source(subgraph: "uniswap", name: "amountUSD", type: "BigDecimal")
  amountUSD_not: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_not", type: "BigDecimal")
  amountUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_gt", type: "BigDecimal")
  amountUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_lt", type: "BigDecimal")
  amountUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_gte", type: "BigDecimal")
  amountUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "amountUSD_lte", type: "BigDecimal")
  amountUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amountUSD_in", type: "[BigDecimal!]")
  amountUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "amountUSD_not_in", type: "[BigDecimal!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [Swap_filter] @source(subgraph: "uniswap", name: "and", type: "[Swap_filter]")
  or: [Swap_filter] @source(subgraph: "uniswap", name: "or", type: "[Swap_filter]")
}

enum Swap_orderBy @source(subgraph: "uniswap", name: "Swap_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  transaction @source(subgraph: "uniswap", name: "transaction")
  transaction__id @source(subgraph: "uniswap", name: "transaction__id")
  transaction__blockNumber @source(subgraph: "uniswap", name: "transaction__blockNumber")
  transaction__timestamp @source(subgraph: "uniswap", name: "transaction__timestamp")
  timestamp @source(subgraph: "uniswap", name: "timestamp")
  pair @source(subgraph: "uniswap", name: "pair")
  pair__id @source(subgraph: "uniswap", name: "pair__id")
  pair__reserve0 @source(subgraph: "uniswap", name: "pair__reserve0")
  pair__reserve1 @source(subgraph: "uniswap", name: "pair__reserve1")
  pair__totalSupply @source(subgraph: "uniswap", name: "pair__totalSupply")
  pair__reserveETH @source(subgraph: "uniswap", name: "pair__reserveETH")
  pair__reserveUSD @source(subgraph: "uniswap", name: "pair__reserveUSD")
  pair__trackedReserveETH @source(subgraph: "uniswap", name: "pair__trackedReserveETH")
  pair__token0Price @source(subgraph: "uniswap", name: "pair__token0Price")
  pair__token1Price @source(subgraph: "uniswap", name: "pair__token1Price")
  pair__volumeToken0 @source(subgraph: "uniswap", name: "pair__volumeToken0")
  pair__volumeToken1 @source(subgraph: "uniswap", name: "pair__volumeToken1")
  pair__volumeUSD @source(subgraph: "uniswap", name: "pair__volumeUSD")
  pair__untrackedVolumeUSD @source(subgraph: "uniswap", name: "pair__untrackedVolumeUSD")
  pair__txCount @source(subgraph: "uniswap", name: "pair__txCount")
  pair__createdAtTimestamp @source(subgraph: "uniswap", name: "pair__createdAtTimestamp")
  pair__createdAtBlockNumber @source(subgraph: "uniswap", name: "pair__createdAtBlockNumber")
  pair__liquidityProviderCount @source(subgraph: "uniswap", name: "pair__liquidityProviderCount")
  sender @source(subgraph: "uniswap", name: "sender")
  from @source(subgraph: "uniswap", name: "from")
  amount0In @source(subgraph: "uniswap", name: "amount0In")
  amount1In @source(subgraph: "uniswap", name: "amount1In")
  amount0Out @source(subgraph: "uniswap", name: "amount0Out")
  amount1Out @source(subgraph: "uniswap", name: "amount1Out")
  to @source(subgraph: "uniswap", name: "to")
  logIndex @source(subgraph: "uniswap", name: "logIndex")
  amountUSD @source(subgraph: "uniswap", name: "amountUSD")
}

type Token @source(subgraph: "uniswap", name: "Token") @resolver(subgraph: "uniswap", operation: "query TokenById($Token_id: ID!) { token(id: $Token_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetTokenById($Token_id: ID!) { tokens(where: { id: $Token_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetTokensByIds($Token_id: [ID!]!) { tokens(where: { id_in: $Token_id }) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "Token_id", select: "id") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  symbol: String! @source(subgraph: "uniswap", name: "symbol", type: "String!")
  name: String! @source(subgraph: "uniswap", name: "name", type: "String!")
  decimals: BigInt! @source(subgraph: "uniswap", name: "decimals", type: "BigInt!")
  totalSupply: BigInt! @source(subgraph: "uniswap", name: "totalSupply", type: "BigInt!")
  tradeVolume: BigDecimal! @source(subgraph: "uniswap", name: "tradeVolume", type: "BigDecimal!")
  tradeVolumeUSD: BigDecimal! @source(subgraph: "uniswap", name: "tradeVolumeUSD", type: "BigDecimal!")
  untrackedVolumeUSD: BigDecimal! @source(subgraph: "uniswap", name: "untrackedVolumeUSD", type: "BigDecimal!")
  txCount: BigInt! @source(subgraph: "uniswap", name: "txCount", type: "BigInt!")
  totalLiquidity: BigDecimal! @source(subgraph: "uniswap", name: "totalLiquidity", type: "BigDecimal!")
  derivedETH: BigDecimal @source(subgraph: "uniswap", name: "derivedETH", type: "BigDecimal")
  tokenDayData(skip: Int = 0, first: Int = 100, orderBy: TokenDayData_orderBy, orderDirection: OrderDirection, where: TokenDayData_filter): [TokenDayData!]! @source(subgraph: "uniswap", name: "tokenDayData", type: "[TokenDayData!]!")
  pairDayDataBase(skip: Int = 0, first: Int = 100, orderBy: PairDayData_orderBy, orderDirection: OrderDirection, where: PairDayData_filter): [PairDayData!]! @source(subgraph: "uniswap", name: "pairDayDataBase", type: "[PairDayData!]!")
  pairDayDataQuote(skip: Int = 0, first: Int = 100, orderBy: PairDayData_orderBy, orderDirection: OrderDirection, where: PairDayData_filter): [PairDayData!]! @source(subgraph: "uniswap", name: "pairDayDataQuote", type: "[PairDayData!]!")
  pairBase(skip: Int = 0, first: Int = 100, orderBy: Pair_orderBy, orderDirection: OrderDirection, where: Pair_filter): [Pair!]! @source(subgraph: "uniswap", name: "pairBase", type: "[Pair!]!")
  pairQuote(skip: Int = 0, first: Int = 100, orderBy: Pair_orderBy, orderDirection: OrderDirection, where: Pair_filter): [Pair!]! @source(subgraph: "uniswap", name: "pairQuote", type: "[Pair!]!")
}

type TokenDayData @source(subgraph: "uniswap", name: "TokenDayData") @resolver(subgraph: "uniswap", operation: "query TokenDayDataById($TokenDayData_id: ID!) { tokenDayData(id: $TokenDayData_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetTokenDayDataById($TokenDayData_id: ID!) { tokenDayDatas(where: { id: $TokenDayData_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetTokenDayDataByIds($TokenDayData_id: [ID!]!) { tokenDayDatas(where: { id_in: $TokenDayData_id }) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "TokenDayData_id", select: "id") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  date: Int! @source(subgraph: "uniswap", name: "date", type: "Int!")
  token: Token! @source(subgraph: "uniswap", name: "token", type: "Token!")
  dailyVolumeToken: BigDecimal! @source(subgraph: "uniswap", name: "dailyVolumeToken", type: "BigDecimal!")
  dailyVolumeETH: BigDecimal! @source(subgraph: "uniswap", name: "dailyVolumeETH", type: "BigDecimal!")
  dailyVolumeUSD: BigDecimal! @source(subgraph: "uniswap", name: "dailyVolumeUSD", type: "BigDecimal!")
  dailyTxns: BigInt! @source(subgraph: "uniswap", name: "dailyTxns", type: "BigInt!")
  totalLiquidityToken: BigDecimal! @source(subgraph: "uniswap", name: "totalLiquidityToken", type: "BigDecimal!")
  totalLiquidityETH: BigDecimal! @source(subgraph: "uniswap", name: "totalLiquidityETH", type: "BigDecimal!")
  totalLiquidityUSD: BigDecimal! @source(subgraph: "uniswap", name: "totalLiquidityUSD", type: "BigDecimal!")
  priceUSD: BigDecimal! @source(subgraph: "uniswap", name: "priceUSD", type: "BigDecimal!")
}

input TokenDayData_filter @source(subgraph: "uniswap", name: "TokenDayData_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  date: Int @source(subgraph: "uniswap", name: "date", type: "Int")
  date_not: Int @source(subgraph: "uniswap", name: "date_not", type: "Int")
  date_gt: Int @source(subgraph: "uniswap", name: "date_gt", type: "Int")
  date_lt: Int @source(subgraph: "uniswap", name: "date_lt", type: "Int")
  date_gte: Int @source(subgraph: "uniswap", name: "date_gte", type: "Int")
  date_lte: Int @source(subgraph: "uniswap", name: "date_lte", type: "Int")
  date_in: [Int!] @source(subgraph: "uniswap", name: "date_in", type: "[Int!]")
  date_not_in: [Int!] @source(subgraph: "uniswap", name: "date_not_in", type: "[Int!]")
  token: String @source(subgraph: "uniswap", name: "token", type: "String")
  token_not: String @source(subgraph: "uniswap", name: "token_not", type: "String")
  token_gt: String @source(subgraph: "uniswap", name: "token_gt", type: "String")
  token_lt: String @source(subgraph: "uniswap", name: "token_lt", type: "String")
  token_gte: String @source(subgraph: "uniswap", name: "token_gte", type: "String")
  token_lte: String @source(subgraph: "uniswap", name: "token_lte", type: "String")
  token_in: [String!] @source(subgraph: "uniswap", name: "token_in", type: "[String!]")
  token_not_in: [String!] @source(subgraph: "uniswap", name: "token_not_in", type: "[String!]")
  token_contains: String @source(subgraph: "uniswap", name: "token_contains", type: "String")
  token_contains_nocase: String @source(subgraph: "uniswap", name: "token_contains_nocase", type: "String")
  token_not_contains: String @source(subgraph: "uniswap", name: "token_not_contains", type: "String")
  token_not_contains_nocase: String @source(subgraph: "uniswap", name: "token_not_contains_nocase", type: "String")
  token_starts_with: String @source(subgraph: "uniswap", name: "token_starts_with", type: "String")
  token_starts_with_nocase: String @source(subgraph: "uniswap", name: "token_starts_with_nocase", type: "String")
  token_not_starts_with: String @source(subgraph: "uniswap", name: "token_not_starts_with", type: "String")
  token_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "token_not_starts_with_nocase", type: "String")
  token_ends_with: String @source(subgraph: "uniswap", name: "token_ends_with", type: "String")
  token_ends_with_nocase: String @source(subgraph: "uniswap", name: "token_ends_with_nocase", type: "String")
  token_not_ends_with: String @source(subgraph: "uniswap", name: "token_not_ends_with", type: "String")
  token_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "token_not_ends_with_nocase", type: "String")
  token_: Token_filter @source(subgraph: "uniswap", name: "token_", type: "Token_filter")
  dailyVolumeToken: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken", type: "BigDecimal")
  dailyVolumeToken_not: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken_not", type: "BigDecimal")
  dailyVolumeToken_gt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken_gt", type: "BigDecimal")
  dailyVolumeToken_lt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken_lt", type: "BigDecimal")
  dailyVolumeToken_gte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken_gte", type: "BigDecimal")
  dailyVolumeToken_lte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeToken_lte", type: "BigDecimal")
  dailyVolumeToken_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeToken_in", type: "[BigDecimal!]")
  dailyVolumeToken_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeToken_not_in", type: "[BigDecimal!]")
  dailyVolumeETH: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeETH", type: "BigDecimal")
  dailyVolumeETH_not: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeETH_not", type: "BigDecimal")
  dailyVolumeETH_gt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeETH_gt", type: "BigDecimal")
  dailyVolumeETH_lt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeETH_lt", type: "BigDecimal")
  dailyVolumeETH_gte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeETH_gte", type: "BigDecimal")
  dailyVolumeETH_lte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeETH_lte", type: "BigDecimal")
  dailyVolumeETH_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeETH_in", type: "[BigDecimal!]")
  dailyVolumeETH_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeETH_not_in", type: "[BigDecimal!]")
  dailyVolumeUSD: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD", type: "BigDecimal")
  dailyVolumeUSD_not: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_not", type: "BigDecimal")
  dailyVolumeUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_gt", type: "BigDecimal")
  dailyVolumeUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_lt", type: "BigDecimal")
  dailyVolumeUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_gte", type: "BigDecimal")
  dailyVolumeUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_lte", type: "BigDecimal")
  dailyVolumeUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeUSD_in", type: "[BigDecimal!]")
  dailyVolumeUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeUSD_not_in", type: "[BigDecimal!]")
  dailyTxns: BigInt @source(subgraph: "uniswap", name: "dailyTxns", type: "BigInt")
  dailyTxns_not: BigInt @source(subgraph: "uniswap", name: "dailyTxns_not", type: "BigInt")
  dailyTxns_gt: BigInt @source(subgraph: "uniswap", name: "dailyTxns_gt", type: "BigInt")
  dailyTxns_lt: BigInt @source(subgraph: "uniswap", name: "dailyTxns_lt", type: "BigInt")
  dailyTxns_gte: BigInt @source(subgraph: "uniswap", name: "dailyTxns_gte", type: "BigInt")
  dailyTxns_lte: BigInt @source(subgraph: "uniswap", name: "dailyTxns_lte", type: "BigInt")
  dailyTxns_in: [BigInt!] @source(subgraph: "uniswap", name: "dailyTxns_in", type: "[BigInt!]")
  dailyTxns_not_in: [BigInt!] @source(subgraph: "uniswap", name: "dailyTxns_not_in", type: "[BigInt!]")
  totalLiquidityToken: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityToken", type: "BigDecimal")
  totalLiquidityToken_not: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityToken_not", type: "BigDecimal")
  totalLiquidityToken_gt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityToken_gt", type: "BigDecimal")
  totalLiquidityToken_lt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityToken_lt", type: "BigDecimal")
  totalLiquidityToken_gte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityToken_gte", type: "BigDecimal")
  totalLiquidityToken_lte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityToken_lte", type: "BigDecimal")
  totalLiquidityToken_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityToken_in", type: "[BigDecimal!]")
  totalLiquidityToken_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityToken_not_in", type: "[BigDecimal!]")
  totalLiquidityETH: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH", type: "BigDecimal")
  totalLiquidityETH_not: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_not", type: "BigDecimal")
  totalLiquidityETH_gt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_gt", type: "BigDecimal")
  totalLiquidityETH_lt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_lt", type: "BigDecimal")
  totalLiquidityETH_gte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_gte", type: "BigDecimal")
  totalLiquidityETH_lte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_lte", type: "BigDecimal")
  totalLiquidityETH_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityETH_in", type: "[BigDecimal!]")
  totalLiquidityETH_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityETH_not_in", type: "[BigDecimal!]")
  totalLiquidityUSD: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD", type: "BigDecimal")
  totalLiquidityUSD_not: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_not", type: "BigDecimal")
  totalLiquidityUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_gt", type: "BigDecimal")
  totalLiquidityUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_lt", type: "BigDecimal")
  totalLiquidityUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_gte", type: "BigDecimal")
  totalLiquidityUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_lte", type: "BigDecimal")
  totalLiquidityUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityUSD_in", type: "[BigDecimal!]")
  totalLiquidityUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityUSD_not_in", type: "[BigDecimal!]")
  priceUSD: BigDecimal @source(subgraph: "uniswap", name: "priceUSD", type: "BigDecimal")
  priceUSD_not: BigDecimal @source(subgraph: "uniswap", name: "priceUSD_not", type: "BigDecimal")
  priceUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "priceUSD_gt", type: "BigDecimal")
  priceUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "priceUSD_lt", type: "BigDecimal")
  priceUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "priceUSD_gte", type: "BigDecimal")
  priceUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "priceUSD_lte", type: "BigDecimal")
  priceUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "priceUSD_in", type: "[BigDecimal!]")
  priceUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "priceUSD_not_in", type: "[BigDecimal!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [TokenDayData_filter] @source(subgraph: "uniswap", name: "and", type: "[TokenDayData_filter]")
  or: [TokenDayData_filter] @source(subgraph: "uniswap", name: "or", type: "[TokenDayData_filter]")
}

enum TokenDayData_orderBy @source(subgraph: "uniswap", name: "TokenDayData_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  date @source(subgraph: "uniswap", name: "date")
  token @source(subgraph: "uniswap", name: "token")
  token__id @source(subgraph: "uniswap", name: "token__id")
  token__symbol @source(subgraph: "uniswap", name: "token__symbol")
  token__name @source(subgraph: "uniswap", name: "token__name")
  token__decimals @source(subgraph: "uniswap", name: "token__decimals")
  token__totalSupply @source(subgraph: "uniswap", name: "token__totalSupply")
  token__tradeVolume @source(subgraph: "uniswap", name: "token__tradeVolume")
  token__tradeVolumeUSD @source(subgraph: "uniswap", name: "token__tradeVolumeUSD")
  token__untrackedVolumeUSD @source(subgraph: "uniswap", name: "token__untrackedVolumeUSD")
  token__txCount @source(subgraph: "uniswap", name: "token__txCount")
  token__totalLiquidity @source(subgraph: "uniswap", name: "token__totalLiquidity")
  token__derivedETH @source(subgraph: "uniswap", name: "token__derivedETH")
  dailyVolumeToken @source(subgraph: "uniswap", name: "dailyVolumeToken")
  dailyVolumeETH @source(subgraph: "uniswap", name: "dailyVolumeETH")
  dailyVolumeUSD @source(subgraph: "uniswap", name: "dailyVolumeUSD")
  dailyTxns @source(subgraph: "uniswap", name: "dailyTxns")
  totalLiquidityToken @source(subgraph: "uniswap", name: "totalLiquidityToken")
  totalLiquidityETH @source(subgraph: "uniswap", name: "totalLiquidityETH")
  totalLiquidityUSD @source(subgraph: "uniswap", name: "totalLiquidityUSD")
  priceUSD @source(subgraph: "uniswap", name: "priceUSD")
}

input Token_filter @source(subgraph: "uniswap", name: "Token_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  symbol: String @source(subgraph: "uniswap", name: "symbol", type: "String")
  symbol_not: String @source(subgraph: "uniswap", name: "symbol_not", type: "String")
  symbol_gt: String @source(subgraph: "uniswap", name: "symbol_gt", type: "String")
  symbol_lt: String @source(subgraph: "uniswap", name: "symbol_lt", type: "String")
  symbol_gte: String @source(subgraph: "uniswap", name: "symbol_gte", type: "String")
  symbol_lte: String @source(subgraph: "uniswap", name: "symbol_lte", type: "String")
  symbol_in: [String!] @source(subgraph: "uniswap", name: "symbol_in", type: "[String!]")
  symbol_not_in: [String!] @source(subgraph: "uniswap", name: "symbol_not_in", type: "[String!]")
  symbol_contains: String @source(subgraph: "uniswap", name: "symbol_contains", type: "String")
  symbol_contains_nocase: String @source(subgraph: "uniswap", name: "symbol_contains_nocase", type: "String")
  symbol_not_contains: String @source(subgraph: "uniswap", name: "symbol_not_contains", type: "String")
  symbol_not_contains_nocase: String @source(subgraph: "uniswap", name: "symbol_not_contains_nocase", type: "String")
  symbol_starts_with: String @source(subgraph: "uniswap", name: "symbol_starts_with", type: "String")
  symbol_starts_with_nocase: String @source(subgraph: "uniswap", name: "symbol_starts_with_nocase", type: "String")
  symbol_not_starts_with: String @source(subgraph: "uniswap", name: "symbol_not_starts_with", type: "String")
  symbol_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "symbol_not_starts_with_nocase", type: "String")
  symbol_ends_with: String @source(subgraph: "uniswap", name: "symbol_ends_with", type: "String")
  symbol_ends_with_nocase: String @source(subgraph: "uniswap", name: "symbol_ends_with_nocase", type: "String")
  symbol_not_ends_with: String @source(subgraph: "uniswap", name: "symbol_not_ends_with", type: "String")
  symbol_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "symbol_not_ends_with_nocase", type: "String")
  name: String @source(subgraph: "uniswap", name: "name", type: "String")
  name_not: String @source(subgraph: "uniswap", name: "name_not", type: "String")
  name_gt: String @source(subgraph: "uniswap", name: "name_gt", type: "String")
  name_lt: String @source(subgraph: "uniswap", name: "name_lt", type: "String")
  name_gte: String @source(subgraph: "uniswap", name: "name_gte", type: "String")
  name_lte: String @source(subgraph: "uniswap", name: "name_lte", type: "String")
  name_in: [String!] @source(subgraph: "uniswap", name: "name_in", type: "[String!]")
  name_not_in: [String!] @source(subgraph: "uniswap", name: "name_not_in", type: "[String!]")
  name_contains: String @source(subgraph: "uniswap", name: "name_contains", type: "String")
  name_contains_nocase: String @source(subgraph: "uniswap", name: "name_contains_nocase", type: "String")
  name_not_contains: String @source(subgraph: "uniswap", name: "name_not_contains", type: "String")
  name_not_contains_nocase: String @source(subgraph: "uniswap", name: "name_not_contains_nocase", type: "String")
  name_starts_with: String @source(subgraph: "uniswap", name: "name_starts_with", type: "String")
  name_starts_with_nocase: String @source(subgraph: "uniswap", name: "name_starts_with_nocase", type: "String")
  name_not_starts_with: String @source(subgraph: "uniswap", name: "name_not_starts_with", type: "String")
  name_not_starts_with_nocase: String @source(subgraph: "uniswap", name: "name_not_starts_with_nocase", type: "String")
  name_ends_with: String @source(subgraph: "uniswap", name: "name_ends_with", type: "String")
  name_ends_with_nocase: String @source(subgraph: "uniswap", name: "name_ends_with_nocase", type: "String")
  name_not_ends_with: String @source(subgraph: "uniswap", name: "name_not_ends_with", type: "String")
  name_not_ends_with_nocase: String @source(subgraph: "uniswap", name: "name_not_ends_with_nocase", type: "String")
  decimals: BigInt @source(subgraph: "uniswap", name: "decimals", type: "BigInt")
  decimals_not: BigInt @source(subgraph: "uniswap", name: "decimals_not", type: "BigInt")
  decimals_gt: BigInt @source(subgraph: "uniswap", name: "decimals_gt", type: "BigInt")
  decimals_lt: BigInt @source(subgraph: "uniswap", name: "decimals_lt", type: "BigInt")
  decimals_gte: BigInt @source(subgraph: "uniswap", name: "decimals_gte", type: "BigInt")
  decimals_lte: BigInt @source(subgraph: "uniswap", name: "decimals_lte", type: "BigInt")
  decimals_in: [BigInt!] @source(subgraph: "uniswap", name: "decimals_in", type: "[BigInt!]")
  decimals_not_in: [BigInt!] @source(subgraph: "uniswap", name: "decimals_not_in", type: "[BigInt!]")
  totalSupply: BigInt @source(subgraph: "uniswap", name: "totalSupply", type: "BigInt")
  totalSupply_not: BigInt @source(subgraph: "uniswap", name: "totalSupply_not", type: "BigInt")
  totalSupply_gt: BigInt @source(subgraph: "uniswap", name: "totalSupply_gt", type: "BigInt")
  totalSupply_lt: BigInt @source(subgraph: "uniswap", name: "totalSupply_lt", type: "BigInt")
  totalSupply_gte: BigInt @source(subgraph: "uniswap", name: "totalSupply_gte", type: "BigInt")
  totalSupply_lte: BigInt @source(subgraph: "uniswap", name: "totalSupply_lte", type: "BigInt")
  totalSupply_in: [BigInt!] @source(subgraph: "uniswap", name: "totalSupply_in", type: "[BigInt!]")
  totalSupply_not_in: [BigInt!] @source(subgraph: "uniswap", name: "totalSupply_not_in", type: "[BigInt!]")
  tradeVolume: BigDecimal @source(subgraph: "uniswap", name: "tradeVolume", type: "BigDecimal")
  tradeVolume_not: BigDecimal @source(subgraph: "uniswap", name: "tradeVolume_not", type: "BigDecimal")
  tradeVolume_gt: BigDecimal @source(subgraph: "uniswap", name: "tradeVolume_gt", type: "BigDecimal")
  tradeVolume_lt: BigDecimal @source(subgraph: "uniswap", name: "tradeVolume_lt", type: "BigDecimal")
  tradeVolume_gte: BigDecimal @source(subgraph: "uniswap", name: "tradeVolume_gte", type: "BigDecimal")
  tradeVolume_lte: BigDecimal @source(subgraph: "uniswap", name: "tradeVolume_lte", type: "BigDecimal")
  tradeVolume_in: [BigDecimal!] @source(subgraph: "uniswap", name: "tradeVolume_in", type: "[BigDecimal!]")
  tradeVolume_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "tradeVolume_not_in", type: "[BigDecimal!]")
  tradeVolumeUSD: BigDecimal @source(subgraph: "uniswap", name: "tradeVolumeUSD", type: "BigDecimal")
  tradeVolumeUSD_not: BigDecimal @source(subgraph: "uniswap", name: "tradeVolumeUSD_not", type: "BigDecimal")
  tradeVolumeUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "tradeVolumeUSD_gt", type: "BigDecimal")
  tradeVolumeUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "tradeVolumeUSD_lt", type: "BigDecimal")
  tradeVolumeUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "tradeVolumeUSD_gte", type: "BigDecimal")
  tradeVolumeUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "tradeVolumeUSD_lte", type: "BigDecimal")
  tradeVolumeUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "tradeVolumeUSD_in", type: "[BigDecimal!]")
  tradeVolumeUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "tradeVolumeUSD_not_in", type: "[BigDecimal!]")
  untrackedVolumeUSD: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD", type: "BigDecimal")
  untrackedVolumeUSD_not: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_not", type: "BigDecimal")
  untrackedVolumeUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_gt", type: "BigDecimal")
  untrackedVolumeUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_lt", type: "BigDecimal")
  untrackedVolumeUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_gte", type: "BigDecimal")
  untrackedVolumeUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_lte", type: "BigDecimal")
  untrackedVolumeUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "untrackedVolumeUSD_in", type: "[BigDecimal!]")
  untrackedVolumeUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "untrackedVolumeUSD_not_in", type: "[BigDecimal!]")
  txCount: BigInt @source(subgraph: "uniswap", name: "txCount", type: "BigInt")
  txCount_not: BigInt @source(subgraph: "uniswap", name: "txCount_not", type: "BigInt")
  txCount_gt: BigInt @source(subgraph: "uniswap", name: "txCount_gt", type: "BigInt")
  txCount_lt: BigInt @source(subgraph: "uniswap", name: "txCount_lt", type: "BigInt")
  txCount_gte: BigInt @source(subgraph: "uniswap", name: "txCount_gte", type: "BigInt")
  txCount_lte: BigInt @source(subgraph: "uniswap", name: "txCount_lte", type: "BigInt")
  txCount_in: [BigInt!] @source(subgraph: "uniswap", name: "txCount_in", type: "[BigInt!]")
  txCount_not_in: [BigInt!] @source(subgraph: "uniswap", name: "txCount_not_in", type: "[BigInt!]")
  totalLiquidity: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidity", type: "BigDecimal")
  totalLiquidity_not: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidity_not", type: "BigDecimal")
  totalLiquidity_gt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidity_gt", type: "BigDecimal")
  totalLiquidity_lt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidity_lt", type: "BigDecimal")
  totalLiquidity_gte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidity_gte", type: "BigDecimal")
  totalLiquidity_lte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidity_lte", type: "BigDecimal")
  totalLiquidity_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidity_in", type: "[BigDecimal!]")
  totalLiquidity_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidity_not_in", type: "[BigDecimal!]")
  derivedETH: BigDecimal @source(subgraph: "uniswap", name: "derivedETH", type: "BigDecimal")
  derivedETH_not: BigDecimal @source(subgraph: "uniswap", name: "derivedETH_not", type: "BigDecimal")
  derivedETH_gt: BigDecimal @source(subgraph: "uniswap", name: "derivedETH_gt", type: "BigDecimal")
  derivedETH_lt: BigDecimal @source(subgraph: "uniswap", name: "derivedETH_lt", type: "BigDecimal")
  derivedETH_gte: BigDecimal @source(subgraph: "uniswap", name: "derivedETH_gte", type: "BigDecimal")
  derivedETH_lte: BigDecimal @source(subgraph: "uniswap", name: "derivedETH_lte", type: "BigDecimal")
  derivedETH_in: [BigDecimal!] @source(subgraph: "uniswap", name: "derivedETH_in", type: "[BigDecimal!]")
  derivedETH_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "derivedETH_not_in", type: "[BigDecimal!]")
  tokenDayData_: TokenDayData_filter @source(subgraph: "uniswap", name: "tokenDayData_", type: "TokenDayData_filter")
  pairDayDataBase_: PairDayData_filter @source(subgraph: "uniswap", name: "pairDayDataBase_", type: "PairDayData_filter")
  pairDayDataQuote_: PairDayData_filter @source(subgraph: "uniswap", name: "pairDayDataQuote_", type: "PairDayData_filter")
  pairBase_: Pair_filter @source(subgraph: "uniswap", name: "pairBase_", type: "Pair_filter")
  pairQuote_: Pair_filter @source(subgraph: "uniswap", name: "pairQuote_", type: "Pair_filter")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [Token_filter] @source(subgraph: "uniswap", name: "and", type: "[Token_filter]")
  or: [Token_filter] @source(subgraph: "uniswap", name: "or", type: "[Token_filter]")
}

enum Token_orderBy @source(subgraph: "uniswap", name: "Token_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  symbol @source(subgraph: "uniswap", name: "symbol")
  name @source(subgraph: "uniswap", name: "name")
  decimals @source(subgraph: "uniswap", name: "decimals")
  totalSupply @source(subgraph: "uniswap", name: "totalSupply")
  tradeVolume @source(subgraph: "uniswap", name: "tradeVolume")
  tradeVolumeUSD @source(subgraph: "uniswap", name: "tradeVolumeUSD")
  untrackedVolumeUSD @source(subgraph: "uniswap", name: "untrackedVolumeUSD")
  txCount @source(subgraph: "uniswap", name: "txCount")
  totalLiquidity @source(subgraph: "uniswap", name: "totalLiquidity")
  derivedETH @source(subgraph: "uniswap", name: "derivedETH")
  tokenDayData @source(subgraph: "uniswap", name: "tokenDayData")
  pairDayDataBase @source(subgraph: "uniswap", name: "pairDayDataBase")
  pairDayDataQuote @source(subgraph: "uniswap", name: "pairDayDataQuote")
  pairBase @source(subgraph: "uniswap", name: "pairBase")
  pairQuote @source(subgraph: "uniswap", name: "pairQuote")
}

type UniswapDayData @source(subgraph: "uniswap", name: "UniswapDayData") @resolver(subgraph: "uniswap", operation: "query UniswapDayDataById($UniswapDayData_id: ID!) { uniswapDayData(id: $UniswapDayData_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetUniswapDayDataById($UniswapDayData_id: ID!) { uniswapDayDatas(where: { id: $UniswapDayData_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetUniswapDayDataByIds($UniswapDayData_id: [ID!]!) { uniswapDayDatas(where: { id_in: $UniswapDayData_id }) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "UniswapDayData_id", select: "id") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  date: Int! @source(subgraph: "uniswap", name: "date", type: "Int!")
  dailyVolumeETH: BigDecimal! @source(subgraph: "uniswap", name: "dailyVolumeETH", type: "BigDecimal!")
  dailyVolumeUSD: BigDecimal! @source(subgraph: "uniswap", name: "dailyVolumeUSD", type: "BigDecimal!")
  dailyVolumeUntracked: BigDecimal! @source(subgraph: "uniswap", name: "dailyVolumeUntracked", type: "BigDecimal!")
  totalVolumeETH: BigDecimal! @source(subgraph: "uniswap", name: "totalVolumeETH", type: "BigDecimal!")
  totalLiquidityETH: BigDecimal! @source(subgraph: "uniswap", name: "totalLiquidityETH", type: "BigDecimal!")
  totalVolumeUSD: BigDecimal! @source(subgraph: "uniswap", name: "totalVolumeUSD", type: "BigDecimal!")
  totalLiquidityUSD: BigDecimal! @source(subgraph: "uniswap", name: "totalLiquidityUSD", type: "BigDecimal!")
  txCount: BigInt! @source(subgraph: "uniswap", name: "txCount", type: "BigInt!")
}

input UniswapDayData_filter @source(subgraph: "uniswap", name: "UniswapDayData_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  date: Int @source(subgraph: "uniswap", name: "date", type: "Int")
  date_not: Int @source(subgraph: "uniswap", name: "date_not", type: "Int")
  date_gt: Int @source(subgraph: "uniswap", name: "date_gt", type: "Int")
  date_lt: Int @source(subgraph: "uniswap", name: "date_lt", type: "Int")
  date_gte: Int @source(subgraph: "uniswap", name: "date_gte", type: "Int")
  date_lte: Int @source(subgraph: "uniswap", name: "date_lte", type: "Int")
  date_in: [Int!] @source(subgraph: "uniswap", name: "date_in", type: "[Int!]")
  date_not_in: [Int!] @source(subgraph: "uniswap", name: "date_not_in", type: "[Int!]")
  dailyVolumeETH: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeETH", type: "BigDecimal")
  dailyVolumeETH_not: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeETH_not", type: "BigDecimal")
  dailyVolumeETH_gt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeETH_gt", type: "BigDecimal")
  dailyVolumeETH_lt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeETH_lt", type: "BigDecimal")
  dailyVolumeETH_gte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeETH_gte", type: "BigDecimal")
  dailyVolumeETH_lte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeETH_lte", type: "BigDecimal")
  dailyVolumeETH_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeETH_in", type: "[BigDecimal!]")
  dailyVolumeETH_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeETH_not_in", type: "[BigDecimal!]")
  dailyVolumeUSD: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD", type: "BigDecimal")
  dailyVolumeUSD_not: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_not", type: "BigDecimal")
  dailyVolumeUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_gt", type: "BigDecimal")
  dailyVolumeUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_lt", type: "BigDecimal")
  dailyVolumeUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_gte", type: "BigDecimal")
  dailyVolumeUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUSD_lte", type: "BigDecimal")
  dailyVolumeUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeUSD_in", type: "[BigDecimal!]")
  dailyVolumeUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeUSD_not_in", type: "[BigDecimal!]")
  dailyVolumeUntracked: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUntracked", type: "BigDecimal")
  dailyVolumeUntracked_not: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUntracked_not", type: "BigDecimal")
  dailyVolumeUntracked_gt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUntracked_gt", type: "BigDecimal")
  dailyVolumeUntracked_lt: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUntracked_lt", type: "BigDecimal")
  dailyVolumeUntracked_gte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUntracked_gte", type: "BigDecimal")
  dailyVolumeUntracked_lte: BigDecimal @source(subgraph: "uniswap", name: "dailyVolumeUntracked_lte", type: "BigDecimal")
  dailyVolumeUntracked_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeUntracked_in", type: "[BigDecimal!]")
  dailyVolumeUntracked_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "dailyVolumeUntracked_not_in", type: "[BigDecimal!]")
  totalVolumeETH: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeETH", type: "BigDecimal")
  totalVolumeETH_not: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeETH_not", type: "BigDecimal")
  totalVolumeETH_gt: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeETH_gt", type: "BigDecimal")
  totalVolumeETH_lt: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeETH_lt", type: "BigDecimal")
  totalVolumeETH_gte: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeETH_gte", type: "BigDecimal")
  totalVolumeETH_lte: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeETH_lte", type: "BigDecimal")
  totalVolumeETH_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalVolumeETH_in", type: "[BigDecimal!]")
  totalVolumeETH_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalVolumeETH_not_in", type: "[BigDecimal!]")
  totalLiquidityETH: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH", type: "BigDecimal")
  totalLiquidityETH_not: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_not", type: "BigDecimal")
  totalLiquidityETH_gt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_gt", type: "BigDecimal")
  totalLiquidityETH_lt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_lt", type: "BigDecimal")
  totalLiquidityETH_gte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_gte", type: "BigDecimal")
  totalLiquidityETH_lte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_lte", type: "BigDecimal")
  totalLiquidityETH_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityETH_in", type: "[BigDecimal!]")
  totalLiquidityETH_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityETH_not_in", type: "[BigDecimal!]")
  totalVolumeUSD: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeUSD", type: "BigDecimal")
  totalVolumeUSD_not: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeUSD_not", type: "BigDecimal")
  totalVolumeUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeUSD_gt", type: "BigDecimal")
  totalVolumeUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeUSD_lt", type: "BigDecimal")
  totalVolumeUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeUSD_gte", type: "BigDecimal")
  totalVolumeUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeUSD_lte", type: "BigDecimal")
  totalVolumeUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalVolumeUSD_in", type: "[BigDecimal!]")
  totalVolumeUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalVolumeUSD_not_in", type: "[BigDecimal!]")
  totalLiquidityUSD: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD", type: "BigDecimal")
  totalLiquidityUSD_not: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_not", type: "BigDecimal")
  totalLiquidityUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_gt", type: "BigDecimal")
  totalLiquidityUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_lt", type: "BigDecimal")
  totalLiquidityUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_gte", type: "BigDecimal")
  totalLiquidityUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_lte", type: "BigDecimal")
  totalLiquidityUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityUSD_in", type: "[BigDecimal!]")
  totalLiquidityUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityUSD_not_in", type: "[BigDecimal!]")
  txCount: BigInt @source(subgraph: "uniswap", name: "txCount", type: "BigInt")
  txCount_not: BigInt @source(subgraph: "uniswap", name: "txCount_not", type: "BigInt")
  txCount_gt: BigInt @source(subgraph: "uniswap", name: "txCount_gt", type: "BigInt")
  txCount_lt: BigInt @source(subgraph: "uniswap", name: "txCount_lt", type: "BigInt")
  txCount_gte: BigInt @source(subgraph: "uniswap", name: "txCount_gte", type: "BigInt")
  txCount_lte: BigInt @source(subgraph: "uniswap", name: "txCount_lte", type: "BigInt")
  txCount_in: [BigInt!] @source(subgraph: "uniswap", name: "txCount_in", type: "[BigInt!]")
  txCount_not_in: [BigInt!] @source(subgraph: "uniswap", name: "txCount_not_in", type: "[BigInt!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [UniswapDayData_filter] @source(subgraph: "uniswap", name: "and", type: "[UniswapDayData_filter]")
  or: [UniswapDayData_filter] @source(subgraph: "uniswap", name: "or", type: "[UniswapDayData_filter]")
}

enum UniswapDayData_orderBy @source(subgraph: "uniswap", name: "UniswapDayData_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  date @source(subgraph: "uniswap", name: "date")
  dailyVolumeETH @source(subgraph: "uniswap", name: "dailyVolumeETH")
  dailyVolumeUSD @source(subgraph: "uniswap", name: "dailyVolumeUSD")
  dailyVolumeUntracked @source(subgraph: "uniswap", name: "dailyVolumeUntracked")
  totalVolumeETH @source(subgraph: "uniswap", name: "totalVolumeETH")
  totalLiquidityETH @source(subgraph: "uniswap", name: "totalLiquidityETH")
  totalVolumeUSD @source(subgraph: "uniswap", name: "totalVolumeUSD")
  totalLiquidityUSD @source(subgraph: "uniswap", name: "totalLiquidityUSD")
  txCount @source(subgraph: "uniswap", name: "txCount")
}

type UniswapFactory @source(subgraph: "uniswap", name: "UniswapFactory") @resolver(subgraph: "uniswap", operation: "query UniswapFactoryById($UniswapFactory_id: ID!) { uniswapFactory(id: $UniswapFactory_id) }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetUniswapFactoryById($UniswapFactory_id: ID!) { uniswapFactories(where: { id: $UniswapFactory_id) } }", kind: "FETCH") @resolver(subgraph: "uniswap", operation: "query GetUniswapFactoriesByIds($UniswapFactory_id: [ID!]!) { uniswapFactories(where: { id_in: $UniswapFactory_id }) }", kind: "BATCH") @resolver(subgraph: "uniswap", operation: "query UniswapFactoriesByPairCounts($UniswapFactory_pairCount: Int) { uniswapFactories(skip: $UniswapFactory_pairCount) }", kind: "BATCH") @variable(subgraph: "uniswap", name: "UniswapFactory_id", select: "id") @variable(subgraph: "uniswap", name: "UniswapFactory_pairCount", select: "pairCount") {
  id: ID! @source(subgraph: "uniswap", name: "id", type: "ID!")
  pairCount: Int! @source(subgraph: "uniswap", name: "pairCount", type: "Int!")
  totalVolumeUSD: BigDecimal! @source(subgraph: "uniswap", name: "totalVolumeUSD", type: "BigDecimal!")
  totalVolumeETH: BigDecimal! @source(subgraph: "uniswap", name: "totalVolumeETH", type: "BigDecimal!")
  untrackedVolumeUSD: BigDecimal! @source(subgraph: "uniswap", name: "untrackedVolumeUSD", type: "BigDecimal!")
  totalLiquidityUSD: BigDecimal! @source(subgraph: "uniswap", name: "totalLiquidityUSD", type: "BigDecimal!")
  totalLiquidityETH: BigDecimal! @source(subgraph: "uniswap", name: "totalLiquidityETH", type: "BigDecimal!")
  txCount: BigInt! @source(subgraph: "uniswap", name: "txCount", type: "BigInt!")
}

input UniswapFactory_filter @source(subgraph: "uniswap", name: "UniswapFactory_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  pairCount: Int @source(subgraph: "uniswap", name: "pairCount", type: "Int")
  pairCount_not: Int @source(subgraph: "uniswap", name: "pairCount_not", type: "Int")
  pairCount_gt: Int @source(subgraph: "uniswap", name: "pairCount_gt", type: "Int")
  pairCount_lt: Int @source(subgraph: "uniswap", name: "pairCount_lt", type: "Int")
  pairCount_gte: Int @source(subgraph: "uniswap", name: "pairCount_gte", type: "Int")
  pairCount_lte: Int @source(subgraph: "uniswap", name: "pairCount_lte", type: "Int")
  pairCount_in: [Int!] @source(subgraph: "uniswap", name: "pairCount_in", type: "[Int!]")
  pairCount_not_in: [Int!] @source(subgraph: "uniswap", name: "pairCount_not_in", type: "[Int!]")
  totalVolumeUSD: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeUSD", type: "BigDecimal")
  totalVolumeUSD_not: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeUSD_not", type: "BigDecimal")
  totalVolumeUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeUSD_gt", type: "BigDecimal")
  totalVolumeUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeUSD_lt", type: "BigDecimal")
  totalVolumeUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeUSD_gte", type: "BigDecimal")
  totalVolumeUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeUSD_lte", type: "BigDecimal")
  totalVolumeUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalVolumeUSD_in", type: "[BigDecimal!]")
  totalVolumeUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalVolumeUSD_not_in", type: "[BigDecimal!]")
  totalVolumeETH: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeETH", type: "BigDecimal")
  totalVolumeETH_not: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeETH_not", type: "BigDecimal")
  totalVolumeETH_gt: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeETH_gt", type: "BigDecimal")
  totalVolumeETH_lt: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeETH_lt", type: "BigDecimal")
  totalVolumeETH_gte: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeETH_gte", type: "BigDecimal")
  totalVolumeETH_lte: BigDecimal @source(subgraph: "uniswap", name: "totalVolumeETH_lte", type: "BigDecimal")
  totalVolumeETH_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalVolumeETH_in", type: "[BigDecimal!]")
  totalVolumeETH_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalVolumeETH_not_in", type: "[BigDecimal!]")
  untrackedVolumeUSD: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD", type: "BigDecimal")
  untrackedVolumeUSD_not: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_not", type: "BigDecimal")
  untrackedVolumeUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_gt", type: "BigDecimal")
  untrackedVolumeUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_lt", type: "BigDecimal")
  untrackedVolumeUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_gte", type: "BigDecimal")
  untrackedVolumeUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "untrackedVolumeUSD_lte", type: "BigDecimal")
  untrackedVolumeUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "untrackedVolumeUSD_in", type: "[BigDecimal!]")
  untrackedVolumeUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "untrackedVolumeUSD_not_in", type: "[BigDecimal!]")
  totalLiquidityUSD: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD", type: "BigDecimal")
  totalLiquidityUSD_not: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_not", type: "BigDecimal")
  totalLiquidityUSD_gt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_gt", type: "BigDecimal")
  totalLiquidityUSD_lt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_lt", type: "BigDecimal")
  totalLiquidityUSD_gte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_gte", type: "BigDecimal")
  totalLiquidityUSD_lte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityUSD_lte", type: "BigDecimal")
  totalLiquidityUSD_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityUSD_in", type: "[BigDecimal!]")
  totalLiquidityUSD_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityUSD_not_in", type: "[BigDecimal!]")
  totalLiquidityETH: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH", type: "BigDecimal")
  totalLiquidityETH_not: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_not", type: "BigDecimal")
  totalLiquidityETH_gt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_gt", type: "BigDecimal")
  totalLiquidityETH_lt: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_lt", type: "BigDecimal")
  totalLiquidityETH_gte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_gte", type: "BigDecimal")
  totalLiquidityETH_lte: BigDecimal @source(subgraph: "uniswap", name: "totalLiquidityETH_lte", type: "BigDecimal")
  totalLiquidityETH_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityETH_in", type: "[BigDecimal!]")
  totalLiquidityETH_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "totalLiquidityETH_not_in", type: "[BigDecimal!]")
  txCount: BigInt @source(subgraph: "uniswap", name: "txCount", type: "BigInt")
  txCount_not: BigInt @source(subgraph: "uniswap", name: "txCount_not", type: "BigInt")
  txCount_gt: BigInt @source(subgraph: "uniswap", name: "txCount_gt", type: "BigInt")
  txCount_lt: BigInt @source(subgraph: "uniswap", name: "txCount_lt", type: "BigInt")
  txCount_gte: BigInt @source(subgraph: "uniswap", name: "txCount_gte", type: "BigInt")
  txCount_lte: BigInt @source(subgraph: "uniswap", name: "txCount_lte", type: "BigInt")
  txCount_in: [BigInt!] @source(subgraph: "uniswap", name: "txCount_in", type: "[BigInt!]")
  txCount_not_in: [BigInt!] @source(subgraph: "uniswap", name: "txCount_not_in", type: "[BigInt!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [UniswapFactory_filter] @source(subgraph: "uniswap", name: "and", type: "[UniswapFactory_filter]")
  or: [UniswapFactory_filter] @source(subgraph: "uniswap", name: "or", type: "[UniswapFactory_filter]")
}

enum UniswapFactory_orderBy @source(subgraph: "uniswap", name: "UniswapFactory_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  pairCount @source(subgraph: "uniswap", name: "pairCount")
  totalVolumeUSD @source(subgraph: "uniswap", name: "totalVolumeUSD")
  totalVolumeETH @source(subgraph: "uniswap", name: "totalVolumeETH")
  untrackedVolumeUSD @source(subgraph: "uniswap", name: "untrackedVolumeUSD")
  totalLiquidityUSD @source(subgraph: "uniswap", name: "totalLiquidityUSD")
  totalLiquidityETH @source(subgraph: "uniswap", name: "totalLiquidityETH")
  txCount @source(subgraph: "uniswap", name: "txCount")
}

input User_filter @source(subgraph: "uniswap", name: "User_filter") {
  id: ID @source(subgraph: "uniswap", name: "id", type: "ID")
  id_not: ID @source(subgraph: "uniswap", name: "id_not", type: "ID")
  id_gt: ID @source(subgraph: "uniswap", name: "id_gt", type: "ID")
  id_lt: ID @source(subgraph: "uniswap", name: "id_lt", type: "ID")
  id_gte: ID @source(subgraph: "uniswap", name: "id_gte", type: "ID")
  id_lte: ID @source(subgraph: "uniswap", name: "id_lte", type: "ID")
  id_in: [ID!] @source(subgraph: "uniswap", name: "id_in", type: "[ID!]")
  id_not_in: [ID!] @source(subgraph: "uniswap", name: "id_not_in", type: "[ID!]")
  liquidityPositions_: LiquidityPosition_filter @source(subgraph: "uniswap", name: "liquidityPositions_", type: "LiquidityPosition_filter")
  usdSwapped: BigDecimal @source(subgraph: "uniswap", name: "usdSwapped", type: "BigDecimal")
  usdSwapped_not: BigDecimal @source(subgraph: "uniswap", name: "usdSwapped_not", type: "BigDecimal")
  usdSwapped_gt: BigDecimal @source(subgraph: "uniswap", name: "usdSwapped_gt", type: "BigDecimal")
  usdSwapped_lt: BigDecimal @source(subgraph: "uniswap", name: "usdSwapped_lt", type: "BigDecimal")
  usdSwapped_gte: BigDecimal @source(subgraph: "uniswap", name: "usdSwapped_gte", type: "BigDecimal")
  usdSwapped_lte: BigDecimal @source(subgraph: "uniswap", name: "usdSwapped_lte", type: "BigDecimal")
  usdSwapped_in: [BigDecimal!] @source(subgraph: "uniswap", name: "usdSwapped_in", type: "[BigDecimal!]")
  usdSwapped_not_in: [BigDecimal!] @source(subgraph: "uniswap", name: "usdSwapped_not_in", type: "[BigDecimal!]")
  """Filter for the block changed event."""
  _change_block: BlockChangedFilter @source(subgraph: "uniswap", name: "_change_block", type: "BlockChangedFilter")
  and: [User_filter] @source(subgraph: "uniswap", name: "and", type: "[User_filter]")
  or: [User_filter] @source(subgraph: "uniswap", name: "or", type: "[User_filter]")
}

enum User_orderBy @source(subgraph: "uniswap", name: "User_orderBy") {
  id @source(subgraph: "uniswap", name: "id")
  liquidityPositions @source(subgraph: "uniswap", name: "liquidityPositions")
  usdSwapped @source(subgraph: "uniswap", name: "usdSwapped")
}
`;