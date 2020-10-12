import { createAction } from 'redux-actions';
// import { setLoaded, setLoading } from './app';
// import Doctor from '../../models/doctor';

export const FETCH_CHAT_MESSAGES = 'FETCH_CHAT_MESSAGES';
export const FETCH_CHAT_MESSAGES_SUCCESS = 'FETCH_CHAT_MESSAGES_SUCCESS';
export const FETCH_CHAT_MESSAGES_ERROR = 'FETCH_CHAT_MESSAGES_ERROR';
export const fetchChatMessages = (payload) => ({ type: FETCH_CHAT_MESSAGES, payload });
export const fetchChatMessagesSuccess = createAction(FETCH_CHAT_MESSAGES_SUCCESS);
export const fetchChatMessagesError = createAction(FETCH_CHAT_MESSAGES_ERROR);

export const SEND_CHAT_MESSAGE = 'SEND_CHAT_MESSAGE';
export const SEND_CHAT_MESSAGE_SUCCESS = 'SEND_CHAT_MESSAGE_SUCCESS';
export const SEND_CHAT_MESSAGE_ERROR = 'SEND_CHAT_MESSAGE_ERROR';
export const sendChatMessage = (payload) => ({ type: SEND_CHAT_MESSAGE, payload });
export const sendChatMessageSuccess = createAction(SEND_CHAT_MESSAGE_SUCCESS);
export const sendChatMessageError = createAction(SEND_CHAT_MESSAGE_ERROR);

export const UPLOAD_FILE_TO_CHAT = 'UPLOAD_FILE_TO_CHAT';
export const UPLOAD_FILE_TO_CHAT_SUCCESS = 'UPLOAD_FILE_TO_CHAT_SUCCESS';
export const UPLOAD_FILE_TO_CHAT_ERROR = 'UPLOAD_FILE_TO_CHAT_ERROR';
export const uploadFileToChatMessage = (payload) => ({ type: UPLOAD_FILE_TO_CHAT, payload });
export const uploadFileToChatMessageSuccess = createAction(UPLOAD_FILE_TO_CHAT_SUCCESS);
export const uploadFileToChatMessageError = createAction(UPLOAD_FILE_TO_CHAT_ERROR);

export const SELECT_MESSAGE = 'SELECT_MESSAGE';
export const selectMessage = createAction(SELECT_MESSAGE);

export const UNSELECT_MESSAGE = 'UNSELECT_MESSAGE';
export const unselectMessage = createAction(UNSELECT_MESSAGE);

export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const deleteMessage = createAction(DELETE_MESSAGE);

export const MARK_MESSAGES = 'MARK_MESSAGES';
export const markMessages = createAction(MARK_MESSAGES);
