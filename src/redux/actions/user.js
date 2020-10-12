import { createAction } from 'redux-actions';

export const CHECK_AUTH = 'CHECK_AUTH';
export const checkAuth = createAction(CHECK_AUTH);

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = createAction(AUTH_SUCCESS);

export const AUTH_FAILED = 'AUTH_FAIL';
export const authFailed = createAction(AUTH_FAILED);

export const LOGIN = 'LOGIN';
export const login = createAction(LOGIN);

export const SIGNIN = 'SIGNIN';
export const signin = createAction(SIGNIN);

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const fetchUserData = createAction(FETCH_USER_DATA);

export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export const fetchUserDataSuccess = createAction(FETCH_USER_DATA_SUCCESS);

export const FETCH_USER_DATA_FAIL = 'FETCH_USER_DATA_FAIL';
export const fetchUserDataFail = createAction(FETCH_USER_DATA_FAIL);
