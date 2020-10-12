import { combineEpics, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import get from 'lodash/get';

import * as request from '../../utils/request';
// import chatUsers from '../../models/chatUsers';
import {
    FETCH_CHAT_USERS, fetchChatUsersSuccess, fetchChatUsersError,
} from '../actions/chatUsers';

const fetchChatUsersEpic = (action$) => action$.pipe(
    ofType(FETCH_CHAT_USERS),
    switchMap(
        ({ payload }) =>
            request
                .get({
                    url: 'chats/users',
                    params: payload,
                })
                .then((response) => fetchChatUsersSuccess(response.data))
                .catch(() => fetchChatUsersError('Не удалось получить список пользователей')),
    ),
);

export const chatUsersEpic = combineEpics(
    fetchChatUsersEpic,
);
