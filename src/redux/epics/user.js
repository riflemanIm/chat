import { combineEpics, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { getCookie } from '../../utils/cookies';
import * as request from '../../utils/request';
import {
    CHECK_AUTH, SIGNIN, FETCH_USER_DATA,
    authSuccess, authFailed, fetchUserDataSuccess, fetchUserDataFail,
} from '../actions/user';

const checkAuthEpic = (action$) => action$.pipe(
    ofType(CHECK_AUTH),
    switchMap(
        async ({ payload }) => getCookie('access_token') ? authSuccess() : authFailed(),
    ),
);

const signinEpic = (action$) => action$.pipe(
    ofType(SIGNIN),
    switchMap(
        ({ payload }) =>
            request
                .post({
                    url: 'auth/signin',
                    data: payload,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
                .then((response) => {
                    // setCookie('access_token', response.data.token);
                    return authSuccess(response.data);
                })
                .catch(() => authFailed('Не верные данные авторизации')),
    ),
);

const fetchUserDataEpic = (action$) => action$.pipe(
    ofType(FETCH_USER_DATA),
    switchMap(
        ({ payload }) =>
            request
                .get({
                    url: 'auth/get',
                    params: payload,
                })
                .then((response) => fetchUserDataSuccess(response.data))
                .catch(() => fetchUserDataFail('Не удалось получить данные пользователя')),
    ),
);

export const userEpics = combineEpics(
    checkAuthEpic, signinEpic, fetchUserDataEpic,
);
