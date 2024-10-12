# TV Series App

Search and save your favorite TV series episodes.

## Description

This project is a web application designed to help users search for TV series and store their favorite episodes.\
The application is built using React and TypeScript.\
It utilizes a GraphQL API to fetch TV series and episode data, which can be stored within the application.\
Additionally, extra images and information are fetched from the OMDB API.

## Wire-Frames

![TV Series wire-frame SVG image](/wire-frames/tv-series-wf.svg)

## Setup

### Installing

For this project, it is necessary to install `npm` and `node`.\
Before running, first execute the installation command `npm install`.\
The version of node used for this project is `v18.3.0` and npm `6.14.13`.

### Run

Just run the global command `npm run start`.

### Commands

-   **start** - starts the web application
-   **test** - runs tests
-   **build** - builds the web application
-   **serve** - builds and serves the built application
-   **precommit** - used as a precommit hook to validate lint
-   **lint** - validates the code
-   **lint:fix** - validates and fixes the code
-   **prettier** - validates the code
-   **prettier:fix** - validates and fixes the code

### Environment Variables

-   **REACT_APP_OMDB_KEY** - The API key to access the OMDB API
-   **REACT_APP_OMDB_API** - The URL to access the OMDB API
-   **REACT_APP_GRAPHQL_API_URL** - The URL to access the GraphQL API
-   **REACT_APP_GRAPHQL_WS_URL** - The URL to access the GraphQL API with Websockets
-   **REACT_APP_API_KEY** - The API key to access the GraphQL API both HTTP and WebSocket

## Structure

### Components

This folder contains reusable UI components that can be used across different parts of the application.

### Context

Manages the state of the application, specifically for the singleton service OMDB.

### Graphql

Contains the GraphQL queries, mutations, and subscriptions used to interact with the API.

### Pages

Includes the main pages of the application: the list of series and the detail of the series.

### Router

Holds the router configuration of the application, including the subscription async navigations.

### Services

Provides services to interact with both GraphQL and OMDB APIs.

### Types

Defines the types used across the application.

## Libraries

### For Setup

-   **Typescript** - Used to bring typification to the code
-   **Husky** - Manages git hooks in conjunction with lint-staged
-   **Lint-staged** - Executes linters on staged git files
-   **Prettier** - Formats the code
-   **Eslint** - Lints the code
-   **Webpack** - Bundles the application
-   **Babel** - Transpiles the code
-   **Jest** - Runs tests

### For Development

-   **React** - Development of the components
-   **Apollo Client** - Needed to work with GraphQL both WebSocket and HTTP with queries, mutations, and subscriptions
-   **React Router** - Routing the application was possible with this library
-   **Axios** - Used for handling HTTP requests to the OMDB API
-   **Tailwind CSS** - Used to style the application
-   **Lodash** - Used to handle arrays and objects

## Performance

### Cache & Storage

-   **Apollo Client** store the data that is fetched from the API (in-memory cache)
-   **Axios Cache** store the data and images that are fetched from the OMDB API (in local storage)

### Screen Size

-   **Tailwind CSS** helps to make the application responsive to different screen sizes.\
    However, it was necessary to handle the list to fit smaller screens.

## Deployment

**NOT WORKING**\
This application could be deployed in the gh-pages of the repository.\
GitHub can access it and deploy the application at the following URL:\
[TV Series App](https://nunoconc.github.io/tv-series-app/)
