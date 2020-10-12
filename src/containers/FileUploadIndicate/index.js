import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileUploadIndicate from '../../components/Chat/FileUploadIndicate';
import * as mediaActions from '../../redux/actions/media';

@connect(
    (state, ownProps) => ({
        selectedMessages: state.selectedChatMessages,
    }),
    (dispatch) => ({
        startFileUploading: (data) => dispatch(mediaActions.startFileUploading(data)),
        cancelFileUploading: (data) => dispatch(mediaActions.cancelFileUploading(data)),
    }),
)
class FileUploadIndicateContainer extends Component {
    render() {
        return (
            <FileUploadIndicate {...this.props} />
        );
    }
}

export default FileUploadIndicateContainer;
