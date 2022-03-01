import { ApolloLink, FetchResult, Observable, Operation } from '@apollo/client'
import { MeshInstance } from '@graphql-mesh/runtime'
import { getOperationAST } from 'graphql'

export class GraphApolloLink extends ApolloLink {
  constructor(private graphClient: MeshInstance) {
    super()
  }

  request(operation: Operation): Observable<FetchResult> {
    const operationAst = getOperationAST(operation.query, operation.operationName)
    if (!operationAst) {
      throw new Error('GraphQL operation not found')
    }
    return new Observable((observer) => {
      Promise.resolve().then(async () => {
        try {
          if (operationAst.operation === 'subscription') {
            const subscriptionResult = await this.graphClient.subscribe(
              operation.query,
              operation.variables,
              operation.getContext(),
              {},
              operation.operationName,
            )
            if (Symbol.asyncIterator in subscriptionResult) {
              for await (const result of subscriptionResult) {
                if (observer.closed) {
                  return
                }
                observer.next(result)
              }
              observer.complete()
            }
          } else {
            const result = await this.graphClient.execute(
              operation.query,
              operation.variables,
              operation.getContext(),
              {},
              operation.operationName,
            )

            if (!observer.closed) {
              observer.next(result)
              observer.complete()
            }
          }
        } catch (error) {
          if (!observer.closed) {
            observer.error(error)
          }
        }
      })
    })
  }
}
