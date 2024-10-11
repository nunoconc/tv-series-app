import React from 'react';
import Router from './router';
import graphQLService from './services/graphQLService';
import { ApolloProvider } from '@apollo/client';
import OMDBService from './services/ombdService';
import { WithAppContext } from './context/appContext';

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
