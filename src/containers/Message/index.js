import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../../components/Chat/Message';
import * as messagesActions from '../../redux/actions/chatMessages';

@connect(
    (state, ownProps) => ({
        selectedMessages: state.selectedChatMessages,
    }),
    (dispatch) => ({
        selectMessage: (data) => dispatch(messagesActions.selectMessage(data)),
        unselectMessage: (data) => dispatch(messagesActions.unselectMessage(data)),
    }),
)
class MessageContainer extends Component {
    render() {
        return (
            <Message
                selected={this.props.selectedMessages.includes(this.props.data.id)}
                {...this.props}
            />
        );
    }
}

export default MessageContainer;
