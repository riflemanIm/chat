import React, { Component } from "react";
import moment from "moment";
import Compose from "../../../containers/Compose";
import Toolbar from "../Toolbar/index.tsx";
import ToolbarButton from "../ToolbarButton/index.tsx";
import Message from "../../../containers/Message";
import { getLocaleName } from "../../../utils/lang";
import "./MessageList.scss";

// const MY_USER_ID = 'user 1';

class MessageList extends Component {
  contentDiv = React.createRef();

  componentDidMount() {
    setTimeout(() => {
      if (this.contentDiv.current) {
        this.contentDiv.current.scrollTop =
          this.contentDiv.current.clientHeight + 10000;
      }
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    setTimeout(() => {
      if (this.contentDiv.current) {
        this.contentDiv.current.scrollTop =
          this.contentDiv.current.clientHeight + 10000;
      }
    }, 1000);
  }

  renderMessages = () => {
    const {
      chatMessages: messages,
      user,
      app: { lang },
    } = this.props;
    let i = 0;
    const messageCount = messages.length;
    const tempMessages = [];

    while (i < messageCount) {
      const previous = messages[i - 1];
      const current = messages[i];
      const next = messages[i + 1];
      const isMine = current.user === user.user;
      const currentMoment = moment(current.time);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        const previousMoment = moment(previous.time);
        const previousDuration = moment.duration(
          currentMoment.diff(previousMoment)
        );
        prevBySameAuthor = previous.user === current.user;

        if (prevBySameAuthor && previousDuration.as("hours") < 1) {
          startsSequence = false;
        }
        if (previousDuration.as("hours") < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        const nextMoment = moment(next.time);
        const nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.user === current.user;

        if (nextBySameAuthor && nextDuration.as("hours") < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
          lang={lang}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  };

  sendMessage = (text) => {
    console.log("send");
    const {
      app: { targetToken },
      websocket,
      //user,
      //sendChatMessage,
      resetFilesUploads,
      media: { uploads },
    } = this.props;
    const files = uploads.map((file) => file.id);
    /* this.Socket.send(JSON.stringify({
            userId: user.id,
            user: user.user,
            message: text,
        })); */
    /*sendChatMessage({
            // userId: user.id,
            // user: user.user,
            // chatRoom: '9416695019',
            message: text,
        });*/

    websocket.sendMessage({ text, files, targetToken });
    websocket.getMessages({ targetToken });
    resetFilesUploads();

    // window.location.reload();
    /* setMessages([...messages, {
            id: 5,
            author: 'apple',
            message: text,
            timestamp: new Date().getTime(),
        }]); */
  };

  sendFile = (event) => {
    const {
      //   uploadFileToChatMessage,
      startFileUploading,
      media: { uploads },
    } = this.props;
    const file = event.target.files[0];
    const data = new FormData();
    data.append("file", file);
    // uploadFileToChatMessage(data);
    startFileUploading({ file, index: uploads.length });
  };

  render() {
    // const { lang } = this.props.app;
    const userType = this.props.user.userType
      ? getLocaleName(this.props.user.userType)
      : getLocaleName("doctor");
    const { name } = this.props.user;
    return (
      <div className="message-list">
        <Toolbar
          title={`${name} (${userType})`}
          rightItems={[
            // <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-telephone" />,
          ]}
        />

        <div
          className="message-list-container scrollable"
          ref={this.contentDiv}
        >
          <div className="message-list-content">{this.renderMessages()}</div>
        </div>

        {this.props.isDragActive && <div className="dropzone-tip" />}

        <Compose
          isDragActive={this.props.isDragActive}
          rightItems={[
            <ToolbarButton
              key="send"
              icon="ion-paper-airplane"
              type="submit"
            />,
            <ToolbarButton
              key="photo"
              icon="ion-ios-camera"
              type="file"
              onSubmit={(file) => this.sendFile(file)}
            />,
            <ToolbarButton key="image" icon="ion-ios-image" />,
            <ToolbarButton key="audio" icon="ion-ios-mic" />,
          ]}
          onSubmit={(event) => this.sendMessage(event)}
        />
      </div>
    );
  }
}

export default MessageList;
