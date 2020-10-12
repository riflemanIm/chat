import { createAction } from 'redux-actions';
import { getLang } from '../../utils/lang';

export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const setAccessToken = createAction(SET_ACCESS_TOKEN);

export const FETCH_ALL_DATA = 'FETCH_ALL_DATA';
export const FETCH_ALL_DATA_SUCCESS = 'FETCH_ALL_DATA_SUCCESS';
export const FETCH_ALL_DATA_ERROR = 'FETCH_ALL_DATA_ERROR';

export const CONNECT_TO_WEB_SOCKET = 'CONNECT_TO_WEB_SOCKET';
export const CONNECT_TO_WEB_SOCKET_SUCCESS = 'CONNECT_TO_WEB_SOCKET_SUCCESS';
export const CONNECT_TO_WEB_SOCKET_ERROR = 'CONNECT_TO_WEB_SOCKET_ERROR';

export const SET_ACTIVE = 'SET_ACTIVE';
export const setActive = createAction(SET_ACTIVE);

export const SET_NOT_FOUND = 'SET_NOT_FOUND';
export const setNotFound = createAction(SET_NOT_FOUND);

export const SET_LANG = 'SET_LOCALE';
export const LANG_UPDATED = 'LOCALE_UPDATED';
export const setLang = () => (dispatch) => {
    dispatch({ type: LANG_UPDATED, payload: getLang() });
};

export const SET_LOADING = 'SET_LOADING';
export const SET_LOADED = 'SET_LOADED';

export const CATCH_ERROR = 'CATCH_ERROR';
export const catchError = createAction(CATCH_ERROR);

const connectToWebSocketSuccess = () => ({ type: CONNECT_TO_WEB_SOCKET_SUCCESS });

export const setLoading = (payload) => ({ type: SET_LOADING, payload });
export const setLoaded = (payload) => ({ type: SET_LOADED, payload });

export const fetchAllData = () => async (dispatch) => {
    dispatch({ type: FETCH_ALL_DATA });
    dispatch(setLoading());
    try {
        /* const {
            data: {
                cabinet, doctor, queue,
            },
        } = await App.get(); */
        dispatch(setLoaded());
        dispatch({ type: FETCH_ALL_DATA_SUCCESS });
        // dispatch(setCabinet(cabinet));
        // dispatch(setDoctor(doctor));
        // dispatch(setQueue(queue));
    } catch (error) {
        dispatch(setLoaded());
        dispatch({
            type: FETCH_ALL_DATA_ERROR,
            payload: { error: error.message },
        });
    }
};

export const connectToWebSocket = (deviceId) => async (dispatch) => {
    dispatch({ type: CONNECT_TO_WEB_SOCKET });
    try {
        /* const Socket = await App.connectWS({
            deviceId,
            dispatch,
            connectToWebSocketSuccess,
            setCabinet,
            setStatus,
            setDoctor,
            setQueue,
        }); */
    } catch (error) {
        dispatch({
            type: CONNECT_TO_WEB_SOCKET_ERROR,
            payload: { error },
        });
    }
};
