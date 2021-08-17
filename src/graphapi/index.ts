import { mergeResolvers } from '@graphql-tools/merge';
import { Resolvers } from '../generated/graphql';

const GetTestById: Resolvers = {
    Query: {
        getTestById: (parent, { id }, context) => ({
            length: '15',
            test: 10,
        }),
    },
};

export const resolvers = mergeResolvers([GetTestById]);
