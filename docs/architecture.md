# The Graph Client Architecture

To address the need to support a distributed network, we plan to take several actions to ensure The Graph client provides everything app needs:

1. Compose multiple Subgraphs (on the client-side)
2. Fallback to multiple indexers/sources/hosted services
3. Automatic/Manual source picking strategy
4. Agnostic core, with the ability to run integrate with any GraphQL client

## Standalone mode

```mermaid
graph LR;
    c[Browser/Node]-->|executes|g[Graph-Client];
    g-->op[Orchestrator/Query Planner]
    op-->sA[Subgraph A];
    op-->sB[Subgraph B];
```

## With any GraphQL client

```mermaid
graph LR;
    c[Any GraphQL Client]-->|fetch/Urql Exchange/Apollo Link|l[Compatibility Layer];
    l-->|executes|g[Graph-Client];
    g-->op[Orchestrator/Query Planner]
    op-->sA[Subgraph A];
    op-->sB[Subgraph B];
```

## Subgraph Composition

To allow simple and efficient client-side composition, we'll use [`graphql-tools`](https://graphql-tools.com) to create a remote schema / Executor, then can be hooked into the GraphQL client.

API could be either raw `graphql-tools` transformers, or using [GraphQL-Mesh declarative API](https://graphql-mesh.com/docs/transforms/transforms-introduction) for composing the schema.

```mermaid
graph LR;
    g[GraphQL Schema/Executor]-->m{Composer};
    m-->s1[Subgraph A GraphQL schema];
    m-->s2[Subgraph B GraphQL schema];
    m-->s3[Subgraph C GraphQL schema];
```

## Subgraph Execution Strategies

Within every Subgraph defined as source, there will be a way to define it's source(s) indexer and the querying strategy, here are a few options:

```mermaid
graph LR;
    subgraph race
    req(Outgoing Query)-->sA[Subgraph A];
    sA-->d{RaceStrategy};
    d-->s1[Source 1];
    d-->s2[Source 2];
    s1-->d;
    s2-->d;
    end

    subgraph fallback
    req2(Outgoing Query)-->sA2[Subgraph A];
    sA2-->d2{FallbackStrategy};
    d2-->s3[Source 1];
    s3-->|error|s4[Source 2];
    s4-->|ok|d2;
    s3-->|ok|d2;
    end

    subgraph retry
    req3(Outgoing Query)-->sA3[Subgraph A];
    sA3-->d3{RetryStrategy};
    d3-->s5[Source 1];
    s5-->|error|s5;
    s5-->|ok|d3;
    end

    subgraph highestValue
    req4(Outgoing Query)-->sA4[Subgraph A];
    sA4-->d4{HighestValueStrategy};
    d4-->s14[Source 1];
    d4-->s24[Source 2];
    s14-->synced4["process"]
    s24-->synced4
    synced4-->|"max(_meta.block_number)"|d4
    end
```

> We can ship a several built-in strategies, along with a simple interfaces to allow developers to write their own.

To take the concept of strategies to the extreme, we can even build a magical layer that does subscription-as-query, with any hook, and provide a smooth DX for dapps:

```mermaid
graph LR;
    app[App]-->|subscription somedata|c;
    c[Any GraphQL Client]-->l[Compatibility Layer];
    l-->|executes|g[GraphQL Schema/Executor];
    g-->op[Orchestrator]
    op-->|query somedata|sA[Subgraph];
    sc[Smart Contract]-->|change event|op;
```

With this mechanism, developers can write and execute GraphQL `subscription`, but under the hood we'll execute a GraphQL `query` to The Graph indexers, and allow to connect any external hook/probe for re-running the operation.
This way, we can watch for changes on the Smart Contract itself, and the GraphQL client will fill the gap on the need to real-time changes from The Graph.
