import { mergeResolvers } from '@graphql-tools/merge';
import { Resolvers } from '../generated/graphql';

const GetChlen: Resolvers = {
    Query: {
        getChlen: (arg) => ({
            length: '5 cm',
        }),
    },
};

const GetChlenById: Resolvers = {
    Query: {
        getChlenById: (parent, { id }, context) => ({
            length: '15',
        }),
    },
};

export const resolvers = mergeResolvers([GetChlen, GetChlenById]);
