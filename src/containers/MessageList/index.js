import React, { Component } from "react";
import { connect } from "react-redux";
// import WebSocket from 'mobiappwebsockets';
// import WebSocket from '../../models/wsConnection';
import * as webSocketActions from "../../redux/actions/websocket";
import * as chatMessagesActions from "../../redux/actions/chatMessages";
import * as chatUsersActions from "../../redux/actions/chatUsers";
import * as mediaActions from "../../redux/actions/media";
import MessageList from "../../components/Chat/MessageList";

@connect(
  (state) => ({ ...state, isDragActive: state.media.isDragActive }),
  (dispatch) => ({
    connectToWebSocket: (data) =>
      dispatch(webSocketActions.connectToWebSocket(data)),
    fetchChatUsers: () => dispatch(chatUsersActions.fetchChatUsers()),
    fetchChatMessages: () => dispatch(chatMessagesActions.fetchChatMessages()),
    sendChatMessage: (data) =>
      dispatch(chatMessagesActions.sendChatMessage(data)),
    uploadFileToChatMessage: (data) =>
      dispatch(chatMessagesActions.uploadFileToChatMessage(data)),
    resetFilesUploads: () => dispatch(mediaActions.resetFilesUploads()),
    startFileUploading: (data) =>
      dispatch(mediaActions.startFileUploading(data)),
  })
)
class MessageListContainer extends Component {
  //   componentDidMount() {
  // const { fetchChatMessages, connectToWebSocket } = this.props;
  // this.WebSocket = WebSocket.connect(WS_URL);
  // connectToWebSocket();
  /* this.WebSocket.addEventListener('open', () => {
            // console.log('dfdf');
        }); */
  // console.log(this.WebSocket)
  /* this.WebSocket.onmessage = (message) => {
            if (message.data === 'update') {
                fetchChatMessages();
            }
        }; */
  // WebSocket.send({ action: 'send', payload: {} });
  // console.log(this.Socket);
  //   }

  render() {
    return <MessageList {...this.props} />;
  }
}

export default MessageListContainer;
