import { createRenameFieldTransform, createRenameTypeTransform, defineConfig as defineComposeConfig, loadGraphQLHTTPSubgraph } from '@graphprotocol/client-compose-cli';
import { GraphQLID } from 'graphql';

export const composeConfig = defineComposeConfig({
    subgraphs: [
        {
            sourceHandler: loadGraphQLHTTPSubgraph('nft', {
                endpoint: 'https://api.thegraph.com/subgraphs/name/amxx/eip721-subgraph',
            }),
            transforms: [
                // Resolve conflicts between subgraphs
                createRenameFieldTransform((field, fieldName, typeName) => {
                    if (typeName === 'Account' && fieldName === 'id') {
                        field.type = GraphQLID;
                    }
                    return fieldName;
                }),
                createRenameTypeTransform(type => {
                    if (type.name === 'Account') {
                        return 'User';
                    }
                    return type.name;
                })
            ]
        },
        {
            sourceHandler: loadGraphQLHTTPSubgraph('uniswap', {
                endpoint: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
            })
        }
    ]
})