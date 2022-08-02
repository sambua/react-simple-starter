// Here will be located routes implemented a lazy load and auth checks.
// This will make a possible split main.js to some url related small js files
// and give access to the users with a specific role

import { Navigate } from "react-router-dom";
import { generateRoutes } from "../utils";
import {DEFAULT_AFTER_LOGIN_REDIRECT} from "../constants";

import AuthRoutes from "./auth.routes";
import videoRoutes from "./video.routes";
import dashboardRoute from "./dashboard.route";
import ErrorRoutes from "./error.routes";

// All private routes
const restrictedRoutes = [
    videoRoutes,
    dashboardRoute,
    ErrorRoutes
];

console.log("0sd ", generateRoutes(restrictedRoutes, ['admin','staff','user']));

const routes = [
    // if you want to make whole app immediately protected by default:
    ...generateRoutes(restrictedRoutes, ['admin','staff','user']),
    // The individual route is configs which have an auth option won't be overridden.
    ...generateRoutes([AuthRoutes], null),
    // the below part always has to be at the end of route settings
    {
        path: '/',
        element: <Navigate to={DEFAULT_AFTER_LOGIN_REDIRECT} />,
    },
    {
        path: '*',
        element: <Navigate to="404" />,
    },
];

export default routes;

