import { combineEpics, ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";

import { store } from "../store";
import {
  FETCH_CHAT_ROOMS,
  // fetchChatRoomsSuccess,
  // fetchChatRoomsError,
  // setCabinet,
} from "../actions/chatRooms";

const fetchCabinetEpic = (action$) =>
  action$.pipe(
    ofType(FETCH_CHAT_ROOMS),
    switchMap(
      ({ payload }) =>
        new Promise(() => {
          const timer = setInterval(() => {
            if (store.getState().websocket.getChatRooms) {
              store.getState().websocket.getChatRooms();
              clearInterval(timer);
            }
          }, 1000);
        })
    )
  );

export const cabinetEpic = combineEpics(fetchCabinetEpic);
