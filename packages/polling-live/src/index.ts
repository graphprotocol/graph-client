import { isAsyncIterable, Plugin } from '@envelop/core'
import { DirectiveNode, GraphQLError, Kind, visit } from 'graphql'
import { Repeater } from '@repeaterjs/repeater'
import { mergeSchemas } from '@graphql-tools/schema'

export default function usePollingLive({ config: { defaultInterval = 1000 } = {} } = {}): Plugin<{}> {
  return {
    onSchemaChange({ schema, replaceSchema }) {
      if (!schema.getDirective('live')) {
        replaceSchema(
          mergeSchemas({
            schemas: [schema],
            typeDefs: /* GraphQL */ `
              directive @live(interval: Int) on QUERY
            `,
          }),
        )
      }
    },
    onExecute({ args, executeFn, setExecuteFn }) {
      let liveDirectiveNode: DirectiveNode | undefined
      args.document = visit(args.document, {
        OperationDefinition(node) {
          if (args.operationName != null && node.name?.value !== args.operationName) {
            return
          }
          const directives: DirectiveNode[] = []
          if (node.directives && node.operation === 'query') {
            for (const directive of node.directives) {
              if (directive.name.value === 'live') {
                liveDirectiveNode = directive
              } else {
                directives.push(directive)
              }
            }
            return {
              ...node,
              directives,
            }
          }
          return node
        },
      })
      if (liveDirectiveNode) {
        const intervalArgNode = liveDirectiveNode.arguments?.find((argNode) => argNode.name.value === 'interval')
        let intervalMs = defaultInterval
        if (intervalArgNode?.value?.kind === Kind.INT) {
          intervalMs = parseInt(intervalArgNode.value.value)
        }

        setExecuteFn(
          (args) =>
            new Repeater((push, stop) => {
              let finished = false
              async function pump() {
                if (finished) {
                  return
                }
                const result: any = await executeFn(args)
                if (isAsyncIterable(result)) {
                  push({
                    data: null,
                    errors: [new GraphQLError('Execution returned AsyncIterable which is not supported!')],
                    isLive: true,
                  })
                  stop()
                  return
                }
                result.isLive = true
                if (finished) {
                  return
                }
                push(result)
                setTimeout(pump, intervalMs)
              }
              pump()
              stop.then(() => {
                finished = true
              })
            }) as any,
        )
      }
    },
  }
}
