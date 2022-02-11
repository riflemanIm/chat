import React from "react";
import File from "./File";
import Video from "./Video";
import Image from "./Image";
import { ChatMessage } from "../../types";

const MessageContent = ({
  apiUrl,
  message
}: {
  apiUrl: string;
  message: ChatMessage;
}) => {
  switch (message.messageType) {
    case "text":
      return <React.Fragment>{message.content}</React.Fragment>;
    case "video":
    case "conference_video":
      return <Video message={message} apiUrl={apiUrl} isConference={message.messageType === "conference_video"} />;
    case "image":
      return <Image message={message} apiUrl={apiUrl} />;
    case "file":
      return <File message={message} />;
  }
  return null;
};

export default MessageContent;
