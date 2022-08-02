import { PropsWithChildren, useEffect, useState } from 'react';
import {useLocation} from "react-router-dom";
import history from './history.service';
import LoadingComponent from "../components/loading/loading.component";
import { appActionTypes, useAppContext } from '../context/providers/app.provider';

const AuthService = ({ children }: PropsWithChildren<any>) => {
    /* AS AN APP-PROVIDER COVERS THIS SERVICE, WE CAN USE BELOW useAppContext */
    const [{ token }, dispatch] = useAppContext();
    const { logout, showErrorMessage } = appActionTypes;
    const location = useLocation()
    const [waitAuthCheck, setWaitAuthCheck] = useState(true);

    useEffect(() => {
        // HERE SHOULD BE SOME LOGIC ON VERIFYING JWT in case expire send refresh to the server
        // IT is JUST an EXAMPLE
        setTimeout(() => {
            if (!token && location.pathname !== "/login") {
                logout(dispatch);
                showErrorMessage(dispatch, "YOU WAS LOGGED OUT!!");
                return history.push("login");
            } else {
                // NOT LOGGED OUT AND WILL PROCEED
            }
            setWaitAuthCheck(false);
        }, 2000)
    }, []);

    return waitAuthCheck ? <LoadingComponent /> : <>{children}</>;

}

export default AuthService;
