import { authRoles } from '../constants';
import LoginPage from '../pages/auth/login.auth.page';

const AuthRoutes = {
    settings: {},
    auth: authRoles.onlyGuest,
    routes: [
        {
            path: 'login',
            element: <LoginPage />,
        }
    ],
};

export default AuthRoutes;
