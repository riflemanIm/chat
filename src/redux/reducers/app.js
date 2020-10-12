import qs from 'qs';
import {
    SET_LOADED, SET_LOADING,
    CATCH_ERROR, SET_ACTIVE, SET_ACCESS_TOKEN,
    LANG_UPDATED,
} from '../actions/app';
import { FETCH_USER_DATA_SUCCESS, AUTH_SUCCESS, AUTH_FAILED } from '../actions/user';

const initialState = {
    accessToken: null,
    targetToken: null,
    isLoading: false,
    networkError: false,
    status: 'pending',//'closed',
    errors: [],
    lang: null,
    authFail: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS: {
            const accessToken = action.payload && action.payload.token
            const params = qs.parse(window.location.search.substring(1));
            return { ...state, accessToken, targetToken: params.target_token }
        }
        case AUTH_FAILED: {
            return { ...state, authFail: action.payload }
        }
        case SET_ACCESS_TOKEN:
            return { ...state, accessToken: action.payload };
        case LANG_UPDATED:
            return { ...state, lang: action.payload };
        case FETCH_USER_DATA_SUCCESS: {
            return {...state, status: action.payload.status, accessToken: action.payload.accessToken };
        }
        case SET_ACTIVE:
            return { ...state, status: 'active' };
        case SET_LOADING:
            return { ...state, isLoading: true };
        case SET_LOADED:
            return { ...state, isLoading: false };
        case CATCH_ERROR: {
            const { errors } = state;
            return { ...state, errors: [...errors, action.payload] };
        }
        default:
            return state;
    }
}
