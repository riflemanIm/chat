import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageMenu from '../../components/Chat/MessageMenu';
import * as messagesActions from '../../redux/actions/chatMessages';

@connect(
    (state) => ({
        selectedMessages: state.selectedChatMessages,
        websocket: state.websocket,
    }),
    (dispatch) => ({
        selectMessage: (data) => dispatch(messagesActions.selectMessage(data)),
        unselectMessage: (data) => dispatch(messagesActions.unselectMessage(data)),
        deleteMessage: (data) => dispatch(messagesActions.deleteMessage(data)),
    }),
)
class MessageMenuContainer extends Component {
    render() {
        return (<MessageMenu {...this.props} />);
    }
}

export default MessageMenuContainer;
