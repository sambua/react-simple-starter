import {
    createContext,
    Dispatch,
    FC,
    PropsWithChildren,
    Reducer,
    useContext,
    useEffect,
    useMemo,
    useReducer,
} from 'react';
import { DateTime } from 'luxon';
import appReducer from '../reducers/app.reducer';
import appActionTypes from '../actions/app.actions';
import { ProvidePropType } from '../../@types/context/index.d';
import { AppActionTypes, AppContextType, IAppState } from '../../@types/context/app.d';
import { APP_STORAGE_KEY } from '../../constants';
import { getStorageKey, saveStorageKey } from '../../utils/localStorage';

export let appContextInitialPureState: IAppState = {
    token: getStorageKey(APP_STORAGE_KEY),
    user: {
        public_id: "",
        name: "",
        email: "",
        status: false,
        roles: [], // ['user'], // NOTE: I'm setting as a user role by default for testing
        createdAt: "",
        updatedAt: ""
    }
}

const localAppState = getStorageKey(APP_STORAGE_KEY);

// We have removed routes from localStorage
if (localAppState) appContextInitialPureState = localAppState;

const Context = createContext<[IAppState, Dispatch<AppActionTypes>]>([
  appContextInitialPureState, () => {}
]);

/** APP PROVIDER IS A HIGHEST PROVIDER VISIBLE FROM ANY PART OF THE APPLICATION **/
export const AppProvider: FC<ProvidePropType> = (props: PropsWithChildren<{}>) => {
    const [appState, dispatch] = useReducer<Reducer<IAppState, AppActionTypes>>(
        appReducer, appContextInitialPureState
    );

    useEffect(() => {
        saveStorageKey(APP_STORAGE_KEY, {
            ...appState,
            // someKEY: null,
            // You can set here any time localStorage should be reset.
            // It's just an option in case if you want to store something for a long time period
            validTill: DateTime.now().plus({'days': 1}).valueOf()
        });
    }, [appState]);

    const value = useMemo<[
        IAppState, Dispatch<AppActionTypes>
    ]>(() => [appState, dispatch], [appState]);

    return(
        <Context.Provider value={value} {...props} />
    );
};

export const useAppContext = (): AppContextType => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error(`registerApp must be used within a AppContext`);
    }
    return context;
};

export { appActionTypes };
