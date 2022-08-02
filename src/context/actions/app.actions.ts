import { Dispatch} from 'react';
import {
  EAppActionTypes, TAppUserResponse
} from '../../@types/context/app.d';


const appActionTypes = {
  setUserAfterLogin: (dispatch: Dispatch<any>, payload: TAppUserResponse) => {
    return dispatch({
      type: EAppActionTypes.SET_USER_AFTER_LOGIN, payload
    });
  },

  logout: (dispatch: Dispatch<any>) => {
    return dispatch({ type: EAppActionTypes.LOGOUT_USER});
  },

  showSuccessMessage: (dispatch: Dispatch<any>, payload: string) => {
    return dispatch({
      type: EAppActionTypes.SHOW_APP_SUCCESS_MESSAGE, payload
    });
  },

  showErrorMessage: (dispatch: Dispatch<any>, payload: string) => {
    return dispatch({
      type: EAppActionTypes.SHOW_APP_ERROR_MESSAGE, payload
    });
  },

};

export default appActionTypes;
