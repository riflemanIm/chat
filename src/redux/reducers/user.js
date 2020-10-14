// import qs from 'qs';
import {
  LOGIN,
  CHECK_AUTH,
  AUTH_SUCCESS,
  AUTH_FAILED,
  FETCH_USER_DATA_SUCCESS,
  // FETCH_USER_DATA,
} from "../actions/user";
import {
  AUTH_STATUS_UNKOWN,
  AUTH_STATUS_SUCCESS,
  AUTH_STATUS_FAILED,
  //   AUTH_WAITING,
} from "../../config";

const initialState = {
  id: null, // params.user || 1,
  user: null, // `user ${params.user || 1}`,
  userType: null,
  authStatus: AUTH_STATUS_UNKOWN,
  name: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, authStatus: AUTH_STATUS_FAILED };
    case CHECK_AUTH:
      return { ...state, authStatus: AUTH_STATUS_UNKOWN };
    case AUTH_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        // user: action.payload.userId,
        authStatus: AUTH_STATUS_SUCCESS,
      };
    }
    case AUTH_FAILED:
      return { ...state, authStatus: AUTH_STATUS_FAILED };

    /*case FETCH_USER_DATA:
            return {
                ...state,
                authStatus: AUTH_WAITING,
            };*/

    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
        // id: action.payload.patient.id,
        // user: `${action.payload.patient.id}`,
      };
    default:
      return state;
  }
}
