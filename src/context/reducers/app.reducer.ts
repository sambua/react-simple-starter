import {appContextInitialPureState} from '../providers/app.provider';
import {
  AppActionTypes,
  EAppActionTypes,
  EBootstrapMessageVariants,
  IAppState,
  TAppUserResponse,
} from '../../@types/context/app.d';
import {keys} from "lodash";

// NOTE: VERY IMPORTANT TO RETURN STATE TYPE
export default (state: IAppState = appContextInitialPureState, action: AppActionTypes): IAppState => {

  const alerts = typeof state.alerts !== "undefined" ? state.alerts : [];

  switch (action.type) {

    case EAppActionTypes.SHOW_APP_SUCCESS_MESSAGE:
      return {...state, alerts: [...alerts, {
        variant: EBootstrapMessageVariants.success, message: action.payload
        }]
      };

    case EAppActionTypes.SHOW_APP_ERROR_MESSAGE:
      return {...state, alerts: [...alerts, {
          variant: EBootstrapMessageVariants.error, message: action.payload
        }]
      };

    case EAppActionTypes.LOGOUT_USER:
      return {...state, token: null, alerts: [], user: {
          public_id: "",
          name: "",
          email: "",
          status: false,
          roles: [],
          createdAt: "",
          updatedAt: ""
      }};

    case EAppActionTypes.SET_USER_AFTER_LOGIN:
      return setUserAfterLogin(state, action.payload);

    default: {
      throw Error(
          `Unexpected action type in ApplicationContext reducer: '${action['type']}'.`
      )
    }
  }
};

/** BELOW I LEFT JUST AN EXAMPLE
 * IF STATE CHANGES NEED MORE CALCULATION BETTER TO MOVE AS A SEPARATE FUNCTION **/

/**
 * Set User as logged in
 *
 * @param state
 * @param payload
 */
const setUserAfterLogin = (state: IAppState, payload: TAppUserResponse) => {
  const { accessToken, user } = payload.data;
  return {...state, token: accessToken, user };
}
