import React from 'react';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import ListPage from '../pages/ListPage';
import DetailsPage from '../pages/DetailsPage';

function Router() {
    const router = createBrowserRouter([
        {
            path: '/list',
            element: <ListPage />,
            hydrateFallbackElement: <p>loading..</p>,
            errorElement: <p>list error..</p>,
        },
        {
            path: '/details/:id',
            element: <DetailsPage />,
            hydrateFallbackElement: <p>loading..</p>,
            errorElement: <p>details error..</p>,
        },
        {
            path: '*',
            element: <Navigate to="/list" replace={true} />,
            hydrateFallbackElement: <p>loading..</p>,
            errorElement: <p>error..</p>,
        },
    ]);

    return  <RouterProvider router={router} />;
}

export default Router;
