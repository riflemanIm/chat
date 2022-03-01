import React from "react";
import File from "./File";
import Video from "./Video";
import Image from "./Image";
import { ChatMessage } from "../../types";

type MessageProps = {
  apiUrl: string;
  message: ChatMessage;
};
const MessageContent: React.FC<MessageProps> = ({
  apiUrl,
  message,
}: MessageProps) => {
  switch (message.messageType) {
    case "text":
      return <React.Fragment>{message.content}</React.Fragment>;
    case "video":
    case "video_conference":
      return (
        <Video
          message={message}
          apiUrl={apiUrl}
          isConference={message.messageType === "video_conference"}
        />
      );
    case "image":
      return <Image message={message} apiUrl={apiUrl} />;
    case "file":
      return <File message={message} />;
  }
  return null;
};

export default MessageContent;
