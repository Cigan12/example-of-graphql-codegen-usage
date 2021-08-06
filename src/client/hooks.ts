import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};

export const ExampleQueryDocument = gql`
    query ExampleQuery($getChlenByIdId: Int!) {
        getChlen {
            length
        }
        getChlenById(id: $getChlenByIdId) {
            length
        }
    }
`;

/**
 * __useExampleQueryQuery__
 *
 * To run a query within a React component, call `useExampleQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useExampleQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExampleQueryQuery({
 *   variables: {
 *      getChlenByIdId: // value for 'getChlenByIdId'
 *   },
 * });
 */
export function useExampleQueryQuery(
    baseOptions: Apollo.QueryHookOptions<
        ExampleQueryQuery,
        ExampleQueryQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(
        ExampleQueryDocument,
        options
    );
}
export function useExampleQueryLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        ExampleQueryQuery,
        ExampleQueryQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<ExampleQueryQuery, ExampleQueryQueryVariables>(
        ExampleQueryDocument,
        options
    );
}
export type ExampleQueryQueryHookResult = ReturnType<
    typeof useExampleQueryQuery
>;
export type ExampleQueryLazyQueryHookResult = ReturnType<
    typeof useExampleQueryLazyQuery
>;
export type ExampleQueryQueryResult = Apollo.QueryResult<
    ExampleQueryQuery,
    ExampleQueryQueryVariables
>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Chlen = {
    __typename?: 'Chlen';
    length: Scalars['String'];
};

export type Query = {
    __typename?: 'Query';
    getChlen: Chlen;
    getChlenById?: Maybe<Chlen>;
};

export type QueryGetChlenByIdArgs = {
    id: Scalars['Int'];
};

export type ExampleQueryQueryVariables = Exact<{
    getChlenByIdId: Scalars['Int'];
}>;

export type ExampleQueryQuery = {
    __typename?: 'Query';
    getChlen: { __typename?: 'Chlen'; length: string };
    getChlenById?: Maybe<{ __typename?: 'Chlen'; length: string }>;
};
