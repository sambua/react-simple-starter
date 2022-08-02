import { PropsWithChildren, useState, useEffect } from 'react';
import { matchRoutes } from 'react-router-dom';

import history from './history.service';
import {hasPermissionChecker} from "../utils";
import withRouter from './with-router-hoc.service';
import { useAppContext } from '../context/providers/app.provider';
import routes from "../routes";
import {DEFAULT_AFTER_LOGIN_REDIRECT} from "../constants";

const AuthorizationService = ({children, ...props}: PropsWithChildren<any>) => {
    const { location, navigate } = props;
    const [{user: { roles }}] = useAppContext();
    const [accessGranted, setAccessGranted] = useState<boolean>(true);

    /**
     *
     */
    useEffect(() => {
        const checkRoleAccess = () => {
            const { pathname } = location;
            const matchedRoutes = matchRoutes(routes, pathname);
            const matched = matchedRoutes ? matchedRoutes[0] : false;

            // @ts-ignore as auth is something was added later it's not recognized by ts
            setAccessGranted(matched ? hasPermissionChecker(matched.route.auth, roles) : true);
        }
        if (routes) checkRoleAccess();
        // if (!accessGranted) redirectRoute();
    }, [location, roles]);


    useEffect(() => {
        const redirectRoute = () => {
            const loginRedirectUrl = DEFAULT_AFTER_LOGIN_REDIRECT;

            /*
                The user is guest
                Redirect to Login Page
                */
            if (!roles || roles.length === 0) {
                setTimeout(() => history.push('/login'), 0);
            } else {
                /*
                  User is member
                  User must be on an unAuthorized page or just logged in
                  Redirect to the dashboard or loginRedirectUrl
                  */
                setTimeout(() => history.push(loginRedirectUrl), 0);
            }
        }
        // checkRoleAccess();
        if (!accessGranted) redirectRoute();
    }, [accessGranted, roles]);

    return accessGranted ? <>{children}</> : null;
}

// @ts-ignore
export default withRouter(AuthorizationService);
