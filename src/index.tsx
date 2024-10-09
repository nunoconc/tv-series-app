import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import graphQLService from './services/graphQLService';
import { ApolloProvider } from '@apollo/client';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const client = graphQLService.init();

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);
