import React from 'react';
import Router from './router';
import graphQLService from './services/graphQLService';
import { ApolloProvider } from '@apollo/client';
import OMDBService from './services/ombdService';
import { WithAppContext } from './context/appContext';

// Here we are initializing the GraphQL service and the OMDB service.
// We are also wrapping the Router with both with the ApolloProvider and the AppContext provider (with the OMDB service instance).
function App() {
    const graphQLServiceClient = graphQLService.init();
    const omdbServiceInstance = new OMDBService();

    return (
        <ApolloProvider client={graphQLServiceClient}>
            <WithAppContext context={{ omdbServiceInstance }}>
                <Router />
            </WithAppContext>
        </ApolloProvider>
    );
}

export default App;
