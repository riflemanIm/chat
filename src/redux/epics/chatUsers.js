import { combineEpics, ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";

import * as request from "../../utils/request";
// import chatUsers from '../../models/chatUsers';
import {
  FETCH_CHAT_USERS,
  fetchChatUsersSuccess,
  fetchChatUsersError,
} from "../actions/chatUsers";

const fetchChatUsersEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_CHAT_USERS),
    switchMap(({ payload }) =>
      request
        .get({
          url: "chats/users",
          params: payload,
        })
        .then((response) => {
          console.log("=== response == ", response);
          return fetchChatUsersSuccess(response.data);
        })
        .catch(() =>
          fetchChatUsersError("Не удалось получить список пользователей")
        )
    )
  );

export const chatUsersEpic = combineEpics(fetchChatUsersEpic);
