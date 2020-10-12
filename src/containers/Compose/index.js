import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as mediaActions from '../../redux/actions/media';
import Compose from '../../components/Chat/Compose';

@connect(
    (state) => ({
        ...state,
        isDragActive: state.media.isDragActive,
    }),
    (dispatch) => ({
        setFileDropzoneActive: () => dispatch(mediaActions.setFileDropzoneActive()),
        unsetFileDropzoneActive: () => dispatch(mediaActions.unsetFileDropzoneActive()),
        startFileUploading: (data) => dispatch(mediaActions.startFileUploading(data)),
    }),
)
class ComposeContainer extends Component {
    onDrop = (acceptedFiles) => {
        // console.log('drop', acceptedFiles);
        const { media: { uploads }, startFileUploading } = this.props;
        acceptedFiles.forEach((file, index) => startFileUploading({ file, index: uploads.length + index }));
    }

    render() {
        return (<Compose {...this.props} onDrop={this.onDrop} />);
    }
}

export default ComposeContainer;
