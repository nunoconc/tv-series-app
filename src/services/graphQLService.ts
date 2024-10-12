import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

// Graphql service helper init function to load both the http and ws links connecting to the graphql server
// Using ApolloClient to create the client instance
function init() {
    const httpUri = process.env.REACT_APP_GRAPHQL_HTTP_URL;
    const wsUri = process.env.REACT_APP_GRAPHQL_WS_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    if (!httpUri || !wsUri || !apiKey) {
        throw new Error(
            'GraphQLService - Invalid configuration - Check .env file for the api values'
        );
    }

    const httpLink = new HttpLink({
        uri: httpUri,
        headers: {
            'x-api-key': apiKey,
        },
    });

    const wsLink = new GraphQLWsLink(
        createClient({
            url: wsUri,
            connectionParams: {
                'x-api-key': apiKey,
            },
            shouldRetry: (error) => {
                console.log('shouldRetry', error);
                return false;
            },
            keepAlive: 10_000,
            lazy: true,
        })
    );

    const splitLink = split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        wsLink,
        httpLink
    );

    return new ApolloClient({
        link: splitLink,
        cache: new InMemoryCache({
            // configure cache options
        }),
        credentials: `{x-api-key : '${apiKey}'}`,
    });
}

export default {
    init,
};
