### The Graph Client Architecture

To address the need to support a distributed network, we plan to take several actions to ensure The Graph client provides everything app needs:

1. Compose multiple Subgraphs (on the client-side)
2. Fallback to multiple indexers/sources/hosted services
3. Automatic/Manual source picking strategy 
4. Agnostic core, with the ability to run integrate with any GraphQL client

```mermaid 
graph LR;
    c[Any GraphQL Client]-->|fetch/Urql Exchange/Apollo Link|l[Compatibility Layer];
    l-->|executes|g[GraphQL Schema/Executor];
    g-->op[Orchestrator]
    op-->sA[Subgraph A]; 
    op-->sB[Subgraph B]; 
```

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
```
