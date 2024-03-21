import { ExecutionResult, ExecutionRequest, memoize1, getOperationASTFromRequest } from '@graphql-tools/utils'
import { Kind, ObjectFieldNode, ObjectValueNode, OperationTypeNode, SelectionNode, visit } from 'graphql'

export interface BlockTrackingConfig {
  ignoreOperationNames: string[]
  ignoreFieldNames: string[]
  metaTypeName: string
  blockFieldName: string
  blockNumberFieldName: string
  metaRootFieldName: string
  blockArgumentName: string
  minBlockArgumentName: string
}

export const DEFAULT_CONFIG: BlockTrackingConfig = {
  ignoreOperationNames: [],
  ignoreFieldNames: [],
  metaTypeName: '_Meta_',
  blockFieldName: 'block',
  blockNumberFieldName: 'number',
  metaRootFieldName: '_meta',
  blockArgumentName: 'block',
  minBlockArgumentName: 'number_gte',
}

export const createMetaSelectionNode = memoize1(function createMetaSelectionNode(
  config: BlockTrackingConfig,
): SelectionNode {
  return {
    kind: Kind.FIELD,
    name: {
      kind: Kind.NAME,
      value: config.metaRootFieldName,
    },
    selectionSet: {
      kind: Kind.SELECTION_SET,
      selections: [
        {
          kind: Kind.FIELD,
          name: {
            kind: Kind.NAME,
            value: config.blockFieldName,
          },
          selectionSet: {
            kind: Kind.SELECTION_SET,
            selections: [
              {
                kind: Kind.FIELD,
                name: {
                  kind: Kind.NAME,
                  value: config.blockNumberFieldName,
                },
              },
            ],
          },
        },
      ],
    },
  }
})

const metaFieldAddedByContext = new WeakMap<any, boolean>()
const GLOBAL_CONTEXT_IDENTIFIER = {}
function getRequestIdentifier(executionRequest: ExecutionRequest): any {
  return (
    executionRequest.context ??
    executionRequest.rootValue ??
    executionRequest.info?.operation ??
    GLOBAL_CONTEXT_IDENTIFIER
  )
}

export function transformExecutionRequest(
  executionRequest: ExecutionRequest,
  config: BlockTrackingConfig,
  batch = false,
  minBlock?: number,
): ExecutionRequest {
  const operationAst = getOperationASTFromRequest(executionRequest)
  const operationName = operationAst?.name?.value
  if (operationName != null && config.ignoreOperationNames.includes(operationName)) {
    return executionRequest
  }
  const document = visit(executionRequest.document, {
    Field: {
      leave: (fieldSelectionNode, _key, _parent, path) => {
        if (
          minBlock != null &&
          !fieldSelectionNode.name.value.startsWith('_') &&
          !config.ignoreFieldNames.includes(fieldSelectionNode.name.value) &&
          path.length < 7
        ) {
          const argNodes =
            fieldSelectionNode.arguments?.filter((argument) => argument.name.value !== config.blockArgumentName) || []
          const blockArgument = argNodes.find((argument) => argument.name.value === config.blockArgumentName) || {
            kind: Kind.ARGUMENT,
            name: {
              kind: Kind.NAME,
              value: config.blockArgumentName,
            },
            value: {
              kind: Kind.OBJECT,
              fields: [],
            },
          }
          const blockArgumentFields = (blockArgument.value as ObjectValueNode).fields as ObjectFieldNode[]
          if (!blockArgumentFields.some((field) => field.name.value === config.minBlockArgumentName)) {
            return {
              ...fieldSelectionNode,
              arguments: [
                ...argNodes,
                {
                  ...blockArgument,
                  value: {
                    ...blockArgument.value,
                    fields: [
                      ...blockArgumentFields,
                      {
                        kind: Kind.OBJECT_FIELD,
                        name: {
                          kind: Kind.NAME,
                          value: config.minBlockArgumentName,
                        },
                        value: {
                          kind: Kind.INT,
                          value: minBlock.toString(),
                        },
                      },
                    ],
                  },
                },
              ],
            }
          }
        }
        return fieldSelectionNode
      },
    },
    OperationDefinition: {
      leave: (operationNode) => {
        const requestIdentifier = getRequestIdentifier(executionRequest)
        let shouldAddMetaField = true
        if (batch) {
          if (requestIdentifier != null) {
            const isAddedBefore = metaFieldAddedByContext.get(requestIdentifier)
            if (isAddedBefore != null) {
              shouldAddMetaField = !isAddedBefore
            }
          }
        }
        if (operationNode.operation === OperationTypeNode.QUERY && shouldAddMetaField) {
          const metaSelectionNode = createMetaSelectionNode(config)
          metaFieldAddedByContext.set(requestIdentifier, true)
          return {
            ...operationNode,
            selectionSet: {
              ...operationNode.selectionSet,
              selections: [...operationNode.selectionSet.selections, metaSelectionNode],
            },
          }
        }
        return operationNode
      },
    },
  })
  return {
    ...executionRequest,
    document,
  }
}

export function getNewBlockNumberFromExecutionResult(
  originalResult: ExecutionResult<any>,
  config: BlockTrackingConfig,
) {
  return originalResult.data?.[config.metaRootFieldName]?.[config.blockFieldName]?.[config.blockNumberFieldName]
}
