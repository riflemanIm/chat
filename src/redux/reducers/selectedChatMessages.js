import {
    SELECT_MESSAGE, UNSELECT_MESSAGE,
} from '../actions/chatMessages';

// [id, id, id]
const initialState = [];

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case SELECT_MESSAGE: {
            if (state.includes(payload)) return state.filter((item) => item === payload);
            return [...state, payload];
        }
        case UNSELECT_MESSAGE: {
            return state.filter((item) => item === payload);
            }
        default:
            return state;
        }
}
