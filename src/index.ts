import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { ApolloServer } from 'apollo-server';
import { resolvers } from './graphapi';

const typesArray = loadFilesSync('./src/graphapi', {
    extensions: ['gql'],
    recursive: true,
});

const typeDefs = mergeTypeDefs(typesArray);

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({
    port: 3005,
});
