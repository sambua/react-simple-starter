import {Dispatch} from "react";

enum EAuthActions {
    SET_AUTHORIZED = 'SET_AUTHORIZED'
}

interface TAuthState { // set the type of state you want to handle with context e.g.
    role: []; // guest
    data: {
        displayName: string;
        photoURL: string;
        email: string;
        shortcuts?: [];
    };
}

type TAuthContext = [
    state: TAuthState,
    dispatch: Dispatch<ActionType>
];

type TAuthActionTypes = {
    type: string
} & (
    { type: IAction.SET_AUTHORIZED; payload: TAuthState}
    );


export { EAuthActions, TAuthState, TAuthContext, TAuthActionTypes };
