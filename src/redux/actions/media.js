import { createAction } from 'redux-actions';

export const SET_FILE_DROPZONE_ACTIVE = 'SET_FILE_DROPZONE_ACTIVE';
export const setFileDropzoneActive = createAction(SET_FILE_DROPZONE_ACTIVE);
export const UNSET_UPLOAD_FILE_DROPZONE_ACTIVE = 'UNSET_UPLOAD_FILE_DROPZONE_ACTIVE';
export const unsetFileDropzoneActive = createAction(UNSET_UPLOAD_FILE_DROPZONE_ACTIVE);

export const START_FILE_UPLOADING = 'START_FILE_UPLOADING';
export const startFileUploading = createAction(START_FILE_UPLOADING);

export const FILE_UPLOAD_SUCCESS = 'FILE_UPLOAD_SUCCESS';
export const fileUploadSuccess = createAction(FILE_UPLOAD_SUCCESS);

export const FILE_UPLOAD_ERROR = 'FILE_UPLOAD_ERROR';
export const fileUploadError = createAction(FILE_UPLOAD_ERROR);

export const UPDATE_FILE_UPLOADED_PERCENTS = 'UPDATE_FILE_UPLOADED_PERCENTS';
export const updateFileUploadedPercents = createAction(UPDATE_FILE_UPLOADED_PERCENTS);

export const CANCEL_FILE_UPLOADING = 'CANCEL_FILE_UPLOADING';
export const cancelFileUploading = createAction(CANCEL_FILE_UPLOADING);

export const RESET_FILES_UPLOADS = 'RESET_FILES_UPLOADS';
export const resetFilesUploads = createAction(RESET_FILES_UPLOADS);
