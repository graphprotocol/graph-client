import { isAsyncIterable, mapAsyncIterator } from "@graphql-tools/utils";
import { AutoPaginationOptions, DEFAULT_OPTIONS, transformExecutionRequest, transformExecutionResponse } from "./shared.js";
import { FusiongraphPlugin } from "@graphql-mesh/fusion-runtime";

export function useAutoPagination(options: AutoPaginationOptions = DEFAULT_OPTIONS): FusiongraphPlugin {
    return {
        onSubgraphExecute({ executionRequest, setExecutionRequest }) {
            setExecutionRequest(
                transformExecutionRequest(executionRequest, options),
            );
            return ({ result, setResult }) => {
                if (isAsyncIterable(result)) {
                    const iterator = result[Symbol.asyncIterator]();
                    setResult(mapAsyncIterator(iterator, transformExecutionResponse));
                } else {
                    setResult(transformExecutionResponse(result));
                }
            }
        }
    }
}