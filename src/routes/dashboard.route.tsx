import { lazy } from 'react';

const DashboardPage = lazy(() => import('../pages/dashboard.page'));

const DashboardRoute = {
    auth: ['user', 'admin'],
    routes: [
        {
            // auth: ['user'], we can set auth route and parent-based
            path: 'dashboard',
            element: <DashboardPage />,
        },
    ],
};

export default DashboardRoute;
