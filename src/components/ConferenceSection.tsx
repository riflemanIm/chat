import * as React from "react";
import Conference from "./Conference";
import ConferenceCall from "./ConferenceCall";
import ConferenceControls from "./ConferenceControls";
import { ChatRoom } from "../types";

interface ConferenceSectionProps {
  conference: {
    data: any;
    joined: boolean;
  };
  onClose: (conference: any) => void;
  onAccept: (conference: any) => void;
  isMobile: boolean;
  user: any;
  chatOld: ChatRoom | null;
  onChangeChat: (chat: ChatRoom) => void;
  apiUrl: string;
}

export const ConferenceSection: React.FC<ConferenceSectionProps> = ({
  conference,
  onClose,
  onAccept,
  isMobile,
  user,
  chatOld,
  onChangeChat,
  apiUrl,
}) => {
  if (!conference.data) return null;

  if (conference.joined) {
    return (
      <>
        <Conference
          conference={conference.data}
          onClose={onClose}
          langCode={user.langCode}
        />
        {(!chatOld || !isMobile) && (
          <ConferenceControls
            isMobile={isMobile}
            user={user}
            onBackToChat={() => chatOld && onChangeChat(chatOld)}
          />
        )}
      </>
    );
  }

  return (
    <ConferenceCall
      apiUrl={apiUrl}
      contact={
        user.userId === conference.data.userId
          ? conference.data.contactId
          : conference.data.userId
      }
      conference={conference.data}
      onAccept={onAccept}
    />
  );
};

export default ConferenceSection;
