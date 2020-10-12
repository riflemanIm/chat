import {
    CREATE_VIDEO_CALL_SUCCESS, DELETE_VIDEO_CALL_SUCCESS,
    SET_CONFERENCE_ID, SET_CONFERENCE_TOKEN,
    REFRESH_VIDEO_URL_SUCCESS,
    CHECK_CALL_STATUS_SUCCESS, CHECK_CALL_STATUS_ERROR,
    UPDATE_VIDEO_URL,
} from '../actions/call';

import { getCookie } from '../../utils/cookies';

const conferenceId = getCookie('conference_id');
const conferenceToken = getCookie('conference_token');

const initialState = {
    conferenceId: conferenceId,
    conferenceToken: conferenceToken,
    url: null,
    conferenceStatus: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHECK_CALL_STATUS_SUCCESS: {
            if (state.conferenceStatus !== action.payload) {
                return { ...state, conferenceStatus: action.payload }
            }
            return state;
        }
        case CHECK_CALL_STATUS_ERROR: {
            if (state.conferenceStatus !== action.payload.status) {
                return { ...state, conferenceStatus: action.payload.status }
            }
            return state;
        }
        case REFRESH_VIDEO_URL_SUCCESS: {
            return { ...state, url: action.payload }
        }
        case UPDATE_VIDEO_URL: {
            return { ...state, url: action.payload }
        }
        case SET_CONFERENCE_ID: {
            return { ...state, conferenceId: action.payload }
        }
        case SET_CONFERENCE_TOKEN: {
            return { ...state, conferenceToken: action.payload }
        }
        case CREATE_VIDEO_CALL_SUCCESS: {
            const { conference } = action.payload;
            return { ...state, conferences: [...state.conferences, conference] };
        }
        case DELETE_VIDEO_CALL_SUCCESS: {
            const { conference } = action.payload;
            return { ...state, conferences: [...state.conferences, conference] };
        }
    default:
        return state;
    }
}
