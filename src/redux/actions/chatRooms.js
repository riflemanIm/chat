import { createAction } from 'redux-actions';

export const FETCH_CHAT_ROOMS = 'FETCH_CHAT_ROOMS';
export const FETCH_CHAT_ROOMS_SUCCESS = 'FETCH_CHAT_ROOMS_SUCCESS';
export const FETCH_CHAT_ROOMS_ERROR = 'FETCH_CHAT_ROOMS_ERROR';
export const fetchChatRooms = createAction(FETCH_CHAT_ROOMS);
export const fetchChatRoomsSuccess = createAction(FETCH_CHAT_ROOMS_SUCCESS);
export const fetchChatRoomsError = createAction(FETCH_CHAT_ROOMS);
