import {ReactNode} from "react";
// import { BrowserRouter } from 'react-router-dom';

export * as AppContextTypes from './app.d';
export * as AuthContextTypes from './auth.d';

export type ProvidePropType = {
    children?: ReactNode //JSX.Element | typeof BrowserRouter
}
