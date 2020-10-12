import {
    FETCH_CHAT_MESSAGES_SUCCESS,
    DELETE_MESSAGE,
    MARK_MESSAGES,
} from '../actions/chatMessages';

const initialState = [];

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_CHAT_MESSAGES_SUCCESS: {
            const { data } = payload;
            return [...data.messages];
        }
        case MARK_MESSAGES: {
            const markedMessages = payload;
            return state.map((item, index) => {
                const message = markedMessages.find(m => m.id === item.id);
                return {
                    ...item,
                    status: typeof message !== 'undefined' ? message.status : item.status,
                }
            });
        }
        case DELETE_MESSAGE: {
            return state.filter((item) => item.id !== payload);
        }
    default:
        return state;
    }
}
