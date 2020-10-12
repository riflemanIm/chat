import {
    SET_FILE_DROPZONE_ACTIVE,
    UNSET_UPLOAD_FILE_DROPZONE_ACTIVE,
    START_FILE_UPLOADING,
    CANCEL_FILE_UPLOADING,
    UPDATE_FILE_UPLOADED_PERCENTS,
    FILE_UPLOAD_SUCCESS,
    FILE_UPLOAD_ERROR,
    RESET_FILES_UPLOADS,
} from '../actions/media';

const initialState = {
    list: [],
    uploads: [],
    isDragActive: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_FILE_DROPZONE_ACTIVE:
            return {
                ...state,
                isDragActive: true,
            };

        case UNSET_UPLOAD_FILE_DROPZONE_ACTIVE:
            return {
                ...state,
                isDragActive: false,
            };

        case START_FILE_UPLOADING: {
            const { payload } = action; // console.log(action);
            return {
                ...state,
                uploads: [...state.uploads, { file: payload, percent: 0, id: null, status: 'pending' }],
            };
        }

        case UPDATE_FILE_UPLOADED_PERCENTS: {
            const { payload: { index, percent } } = action;
            const uploads = [...state.uploads];
            uploads[index].percent = percent;
            return {
                ...state,
                uploads
            };
        }

        case CANCEL_FILE_UPLOADING: {
            const { payload } = action;
            const uploads = [...state.uploads];
            uploads.splice(payload, 1);
            return {
                ...state,
                uploads,
            };
        }

        case FILE_UPLOAD_SUCCESS: {
            const { payload: { id, index } } = action;
            const uploads = [...state.uploads];
            uploads[index].id = id;
            uploads[index].status = 'success';
            return {
                ...state,
                uploads
            };
        }

        case FILE_UPLOAD_ERROR: {
            const { payload: { index } } = action;
            const uploads = [...state.uploads];
            uploads[index].status = 'error';
            return {
                ...state,
                uploads
            };
        }

        case RESET_FILES_UPLOADS: {
            return {
                ...state,
                uploads: []
            };
        }

    default: return state;
    }
}
