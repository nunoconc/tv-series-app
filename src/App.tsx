import React from 'react';
import Router from './router';
import graphQLService from './services/graphQLService';
import { ApolloProvider } from '@apollo/client';

function App() {
    const client = graphQLService.init();

    return (
        <ApolloProvider client={client}>
            <Router />
        </ApolloProvider>
    );
}

export default App;
