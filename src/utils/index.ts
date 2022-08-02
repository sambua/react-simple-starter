// Here will be common JS functions shared within the whole application

// export const generateGUID = () => {
//     function S4() {
//         return Math.floor((1 + Math.random()) * 0x10000)
//             .toString(16)
//             .substring(1);
//     }
//
//     return S4() + S4();
// }

export const generateRoutes = (configs: any[], defaultAuth: string[] | null): any[] => {
    let allRoutes: any[] = [];
    configs?.forEach((config) => {
        allRoutes = [...allRoutes, ...setRoutes(config, defaultAuth)];
    });
    return allRoutes;
}

export const setRoutes = (config: any, defaultAuth: string[] | null) => {
    let routes = [...config.routes];

    routes = routes.map((route) => {
        let auth = config.auth || config.auth === null ? config.auth : defaultAuth || null;
        auth = route.auth || route.auth === null ? route.auth : auth;

        return {
            ...route,
            auth,
        };
    });

    return [...routes];
}

export const hasPermissionChecker = (authArr: any[] | null | undefined, userRole: string | any[]) => {
    /**
     * If an auth array is not defined
     * Pass and allow
     */
    if (authArr === null || authArr === undefined) {
        // console.info("auth is null || undefined:", authArr);
        return true;
    }
    if (authArr.length === 0) {
        /**
         * if an auth array is empty means,
         * allow only user role is guest (null or empty[])
         */
        // console.info("auth is empty[]:", authArr);
        return !userRole || userRole.length === 0;
    }
    /**
     * Check if user has grants
     */
    // console.info("auth arr:", authArr);
    /* Check if a user role is an array,  */
    if (userRole && Array.isArray(userRole)) {
        return authArr.some((r) => userRole.indexOf(r) >= 0);
    }

    /* Check if a user role is string, */
    return authArr.includes(userRole);
}


