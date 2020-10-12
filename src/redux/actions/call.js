import { createAction } from 'redux-actions';

export const SET_CONFERENCE_ID = 'SET_CONFERENCE_ID';
export const setConferenceId = createAction(SET_CONFERENCE_ID);

export const SET_CONFERENCE_TOKEN = 'SET_CONFERENCE_TOKEN';
export const setConferenceToken = createAction(SET_CONFERENCE_TOKEN);

export const REFRESH_VIDEO_URL = 'REFRESH_VIDEO_URL';
export const refreshVideoUrl = createAction(REFRESH_VIDEO_URL);
export const REFRESH_VIDEO_URL_SUCCESS = 'REFRESH_VIDEO_URL_SUCCESS';
export const refreshVideoUrlSuccess = createAction(REFRESH_VIDEO_URL_SUCCESS);
export const REFRESH_VIDEO_URL_ERROR = 'REFRESH_VIDEO_URL_ERROR';
export const refreshVideoUrlError = createAction(REFRESH_VIDEO_URL_ERROR);

export const UPDATE_VIDEO_URL = 'UPDATE_VIDEO_URL';
export const updateVideoUrl = createAction(UPDATE_VIDEO_URL);

export const CHECK_CALL_STATUS = 'CHECK_CALL_STATUS';
export const checkCallStatus = createAction(CHECK_CALL_STATUS);
export const CHECK_CALL_STATUS_SUCCESS = 'CHECK_CALL_STATUS_SUCCESS';
export const checkCallStatusSuccess = createAction(CHECK_CALL_STATUS_SUCCESS);
export const CHECK_CALL_STATUS_ERROR = 'CHECK_CALL_STATUS_ERROR';
export const checkCallStatusError = createAction(CHECK_CALL_STATUS_ERROR);

export const CREATE_VIDEO_CALL = 'CREATE_VIDEO_CALL';
export const createVideoCall = createAction(CREATE_VIDEO_CALL);
export const CREATE_VIDEO_CALL_SUCCESS = 'CREATE_VIDEO_CALL_SUCCESS';
export const createVideoCallSuccess = createAction(CREATE_VIDEO_CALL_SUCCESS);
export const CREATE_VIDEO_CALL_FAIL = 'CREATE_VIDEO_CALL_FAIL';
export const createVideoCallFail = createAction(CREATE_VIDEO_CALL_FAIL);

export const DELETE_VIDEO_CALL = 'DELETE_VIDEO_CALL';
export const deleteVideoCall = createAction(DELETE_VIDEO_CALL);
export const DELETE_VIDEO_CALL_SUCCESS = 'DELETE_VIDEO_CALL_SUCCESS';
export const deleteVideoCallSuccess = createAction(DELETE_VIDEO_CALL_SUCCESS);
export const DELETE_VIDEO_CALL_FAIL = 'DELETE_VIDEO_CALL_FAIL';
export const deleteVideoCallFail = createAction(DELETE_VIDEO_CALL_FAIL);
