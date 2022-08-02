import { lazy } from 'react';

const NotFoundPage = lazy(() => import('../pages/404.page'));

const ErrorRoutes = {
    routes: [
        {
            path: '404',
            element: <NotFoundPage />,
        },
    ],
};

export default ErrorRoutes;
