import {Dispatch} from "react";

export enum EAppActionTypes {

    // Helper, message
    SHOW_APP_SUCCESS_MESSAGE = 'SHOW_APP_SUCCESS_MESSAGE',
    SHOW_APP_ERROR_MESSAGE = 'SHOW_APP_ERROR_MESSAGE',

    // User
    LOGOUT_USER = 'LOGOUT_USER',
    SET_USER_AFTER_LOGIN = 'SET_USER_AFTER_LOGIN',
}

// Set the type of state you want to handle with context, e.g.
export interface IAppState {
    token: string | null;
    user: TAppUser
    alerts?: {message: string; variant: EBootstrapMessageVariants}[]
}

export type AppContextType = [
    state: IAppState,
    dispatch: Dispatch<ActionType>
];

export type AppActionTypes = {
    type: string;
} & (
    | { type: EAppActionTypes.LOGOUT_USER }
    | { type: EAppActionTypes.SET_USER_AFTER_LOGIN; payload: TAppUserResponse }
    | { type: EAppActionTypes.SHOW_APP_ERROR_MESSAGE; payload: string}
    | { type: EAppActionTypes.SHOW_APP_SUCCESS_MESSAGE; payload: string}
    );

// This is what we should get from the server, and it's just an example.
// I prefer to use "errors" API response every time, and check if an array is not an empty
// catch and trow, otherwise proceed as a success
export type TAppUserResponse = {
    errors: {message?: string;}[];
    data: {
        expiresIn: number;
        accessToken: string;
        user: TAppUser
    }
}

export type TAppUser = {
    public_id: string;
    name: string;
    email: string
    status: boolean;
    roles: string[];
    createdAt: string;
    updatedAt: string;
}

export type TUserLoginFormFields = {
    email: string;
    password: string;
}

export type TAppMessagePayload = {

}

// Bootstrap variants
export enum EBootstrapMessageVariants {
    success = 'success',
    error = 'danger',
    info = 'info',
    warning = 'warning',
}

