import { DelegationContext } from "@graphql-tools/delegate"
import { ExecutionRequest, ExecutionResult } from "@graphql-tools/utils"
import { visit, SelectionNode, Kind, ArgumentNode } from "graphql"

export interface AutoPaginationOptions {
    limitOfRecords: number
    firstArgumentName: string
    skipArgumentName: string
    lastIdArgumentName: string
    skipArgumentLimit: number
}

export const DEFAULT_OPTIONS: AutoPaginationOptions = {
    limitOfRecords: 1000,
    firstArgumentName: 'first',
    skipArgumentName: 'skip',
    lastIdArgumentName: 'where.id_gte',
    skipArgumentLimit: 5000,
};

export function transformExecutionRequest(
    executionRequest: ExecutionRequest,
    options: AutoPaginationOptions,
    delegationContext?: DelegationContext,
): ExecutionRequest {
    const document = visit(executionRequest.document, {
        SelectionSet: {
            leave: (selectionSet) => {
                const newSelections: SelectionNode[] = []
                for (const selectionNode of selectionSet.selections) {
                    if (
                        selectionNode.kind === Kind.FIELD &&
                        !selectionNode.name.value.startsWith('_') &&
                        !selectionNode.arguments?.some((argNode) => argNode.name.value === 'id')
                    ) {
                        const existingArgs: ArgumentNode[] = []
                        let firstArg: ArgumentNode | undefined
                        let skipArg: ArgumentNode | undefined
                        for (const existingArg of selectionNode.arguments ?? []) {
                            if (existingArg.name.value === options.firstArgumentName) {
                                firstArg = existingArg
                            } else if (existingArg.name.value === options.skipArgumentName) {
                                skipArg = existingArg
                            } else {
                                existingArgs.push(existingArg)
                            }
                        }
                        if (firstArg != null) {
                            let numberOfTotalRecords: number | undefined
                            if (firstArg.value.kind === Kind.INT) {
                                numberOfTotalRecords = parseInt(firstArg.value.value)
                            } else if (firstArg.value.kind === Kind.VARIABLE) {
                                numberOfTotalRecords = executionRequest.variables?.[firstArg.value.name.value]
                                delete executionRequest.variables?.[firstArg.value.name.value]
                            }
                            if (numberOfTotalRecords != null && numberOfTotalRecords > options.limitOfRecords) {
                                const fieldName = selectionNode.name.value
                                const aliasName = selectionNode.alias?.value || fieldName
                                let initialSkip = 0
                                if (skipArg?.value?.kind === Kind.INT) {
                                    initialSkip = parseInt(skipArg.value.value)
                                } else if (skipArg?.value?.kind === Kind.VARIABLE) {
                                    initialSkip = executionRequest.variables?.[skipArg.value.name.value]
                                    delete executionRequest.variables?.[skipArg.value.name.value]
                                }
                                let skip: number
                                for (
                                    skip = initialSkip;
                                    numberOfTotalRecords - skip + initialSkip > 0;
                                    skip += options.limitOfRecords
                                ) {
                                    newSelections.push({
                                        ...selectionNode,
                                        alias: {
                                            kind: Kind.NAME,
                                            value: `splitted_${skip}_${aliasName}`,
                                        },
                                        arguments: [
                                            ...existingArgs,
                                            {
                                                kind: Kind.ARGUMENT,
                                                name: {
                                                    kind: Kind.NAME,
                                                    value: options.firstArgumentName,
                                                },
                                                value: {
                                                    kind: Kind.INT,
                                                    value: Math.min(
                                                        numberOfTotalRecords - skip + initialSkip,
                                                        options.limitOfRecords,
                                                    ).toString(),
                                                },
                                            },
                                            {
                                                kind: Kind.ARGUMENT,
                                                name: {
                                                    kind: Kind.NAME,
                                                    value: options.skipArgumentName,
                                                },
                                                value: {
                                                    kind: Kind.INT,
                                                    value: skip.toString(),
                                                },
                                            },
                                        ],
                                    })
                                }
                                continue
                            }
                        }
                    }
                    newSelections.push(selectionNode)
                }
                return {
                    ...selectionSet,
                    selections: newSelections,
                }
            },
        },
    })
    if (delegationContext) {
        delete delegationContext.args
    }
    return {
        ...executionRequest,
        document,
    }
}

export function transformExecutionResponse(originalResult: ExecutionResult) {
    if (originalResult.data != null) {
        return {
            ...originalResult,
            data: mergeSplittedResults(originalResult.data),
        }
    }
    return originalResult
}

function mergeSplittedResults(originalData: any): any {
    if (originalData != null && typeof originalData === 'object') {
        if (Array.isArray(originalData)) {
            return originalData.map((record) => mergeSplittedResults(record))
        }
        const finalData: any = {}
        for (const fullAliasName in originalData) {
            if (fullAliasName.startsWith('splitted_')) {
                const [, , ...rest] = fullAliasName.split('_')
                const aliasName = rest.join('_')
                finalData[aliasName] = finalData[aliasName] || []
                for (const record of originalData[fullAliasName]) {
                    finalData[aliasName].push(mergeSplittedResults(record))
                }
            } else {
                finalData[fullAliasName] = mergeSplittedResults(originalData[fullAliasName])
            }
        }
        return finalData
    }
    return originalData
}