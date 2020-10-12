import { combineEpics, ofType } from 'redux-observable';
import { switchMap, mergeMap } from 'rxjs/operators';
import toBuffer from 'typedarray-to-buffer';

import * as request from '../../utils/request';
import {
    START_FILE_UPLOADING, updateFileUploadedPercents, fileUploadSuccess, fileUploadError
} from '../actions/media';
import {uploadFileToChatMessageError, uploadFileToChatMessageSuccess} from "../actions/chatMessages";
import { store } from '../store';

const startFileUploadingEpic = (action$) => action$.pipe(
    ofType(START_FILE_UPLOADING),
    mergeMap(
        ({ payload: { file, index } }) => {

            const fileData = new FormData();
            const fr = new FileReader();
            fileData.append('file', file);
            fr.readAsArrayBuffer(file);
            // console.log('f', fr.readAsArrayBuffer(file))
            /*return new Promise(() => {
                // fr.addEventListener('loadend', function() {
                    // console.log(fr.result)
                store.getState().websocket.uploadFile({ file, requestId: index });
                store.getState().websocket.on('fileUploadProgress', ({ requestId, percent }) => {
                    store.dispatch(updateFileUploadedPercents({ index: requestId, percent: percent * 100 }));
                    // console.log('fileUploadProgress', requestId, event);
                })
                store.getState().websocket.on('fileUploadSuccess', ({ requestId, data }) => {
                    store.dispatch(fileUploadSuccess({ id: data.id, index: requestId }));
                    // console.log('fileUploadSuccess epic', event);
                })
                store.getState().websocket.on('fileUploadError', (event) => {
                    // console.log('fileUploadError', event);
                })
                // });
            });*/

            return request
                .post({
                    url: 'media/upload',
                    data: fileData,
                    onUploadProgress: (event) => {
                        // console.log('progress', event)
                        store.dispatch(updateFileUploadedPercents({ index, percent: (event.loaded / event.total) * 100 }));
                    }
                })
                .then((response) => {
                    // const normalizedData = this.normalizer(response.data);
                    return fileUploadSuccess({id: response.data.id, index})
                    // return setDoctor(normalizedData);
                })
                .catch((error) => fileUploadError({ index, error }))
        }
    ),
);

export const mediaEpics = combineEpics(
    startFileUploadingEpic,
);
