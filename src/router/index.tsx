import React, { useCallback } from 'react';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import ListPage from '../pages/ListPage';
import DetailsPage from '../pages/DetailsPage';
import Header from '../components/header';
import Loading from '../components/loading';
import Error from '../components/error';

function Router() {
    const LoadingOrError = useCallback(
        (error?: boolean) => (
            <>
                <Header />
                {error ? <Error /> : <Loading />}
            </>
        ),
        []
    );

    const router = createBrowserRouter([
        {
            path: '/list',
            element: <ListPage />,
            hydrateFallbackElement: LoadingOrError(),
            errorElement: LoadingOrError(true),
        },
        {
            path: '/details/:id',
            element: <DetailsPage />,
            hydrateFallbackElement: LoadingOrError(),
            errorElement: LoadingOrError(true),
        },
        {
            path: '*',
            element: <Navigate to="/list" replace={true} />,
            hydrateFallbackElement: LoadingOrError(),
            errorElement: LoadingOrError(true),
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Router;
