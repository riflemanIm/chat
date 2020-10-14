import { combineEpics, ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";

import ChatMessages from "../../models/chatMessages";
import {
  FETCH_CHAT_MESSAGES,
  //fetchChatMessagesSuccess,
  //fetchChatMessagesError,
  SEND_CHAT_MESSAGE,
  UPLOAD_FILE_TO_CHAT,
} from "../actions/chatMessages";

const fetchChatMessagesEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_CHAT_MESSAGES),
    switchMap(({ payload }) => ChatMessages.get(payload))
  );

const sendChatMessageEpic = (action$) =>
  action$.pipe(
    ofType(SEND_CHAT_MESSAGE),
    switchMap(({ payload }) => ChatMessages.send(payload))
  );

const uploadFileToChatEpic = (action$) =>
  action$.pipe(
    ofType(UPLOAD_FILE_TO_CHAT),
    switchMap(({ payload }) => ChatMessages.upload(payload))
  );

export const chatMessagesEpic = combineEpics(
  fetchChatMessagesEpic,
  sendChatMessageEpic,
  uploadFileToChatEpic
);
