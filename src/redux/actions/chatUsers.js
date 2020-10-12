// import { setLoading, setLoaded } from './app';
// import chatUsers from '../../models/chatUsers';
import { createAction } from 'redux-actions';

export const FETCH_CHAT_USERS = 'FETCH_CHAT_USERS';
export const FETCH_CHAT_USERS_SUCCESS = 'FETCH_CHAT_USERS_SUCCESS';
export const FETCH_CHAT_USERS_ERROR = 'FETCH_CHAT_USERS_ERROR';

export const fetchChatUsers = createAction(FETCH_CHAT_USERS);
export const fetchChatUsersSuccess = (payload) => ({ type: FETCH_CHAT_USERS_SUCCESS, payload });
export const fetchChatUsersError = createAction(FETCH_CHAT_USERS_ERROR);

/* export const fetchChatUsers = () => async (dispatch) => {
    dispatch({ type: FETCH_CHAT_USERS });
    // dispatch(setLoading());
    try {
        // const { data } = await chatUsers.get();
        // dispatch(setLoaded());
        // dispatch({ type: FETCH_CHAT_USERS_SUCCESS, payload: data });
    } catch (error) {
        // dispatch(setLoaded());
        dispatch({
            type: FETCH_CHAT_USERS_ERROR,
            payload: { error },
        });
    }
}; */
