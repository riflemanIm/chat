import * as React from "react";
import { ChatRoom, ConferenceData, User } from "../types";
import Conference from "./Conference";
import ConferenceCall from "./ConferenceCall";

interface ConferenceSectionProps {
  conference: {
    data: ConferenceData | null;
    joined: boolean;
    paused?: boolean;
  };
  onClose: (conference: ConferenceData | null) => void;
  onAccept: (conference: ConferenceData) => void;
  isMobile: boolean;
  user: User;
  activeRoom: ChatRoom | null;
  onChangeChat: (chat: ChatRoom) => void;
  apiUrl: string;
  onVideoEnd?: (conference: ConferenceData) => void;
}

export const ConferenceSection: React.FC<ConferenceSectionProps> = ({
  conference,
  onClose,
  onAccept,
  isMobile,
  user,
  apiUrl,
  onVideoEnd,
}) => {
  if (!conference.data) return null;

  const isOperatorRole = user?.role != null && [3, 4].includes(user.role);
  const isPaused = Boolean(conference.paused);
  const canResume = !isPaused || isOperatorRole;
  const shouldRenderConference = conference.joined && !isPaused;

  if (shouldRenderConference) {
    return (
      <>
        <Conference
          conference={conference.data}
          onClose={onClose}
          langCode={user.langCode}
          user={user}
          conferenceJoined={conference.joined}
          conferencePaused={Boolean(conference.paused)}
          onVideoEnd={onVideoEnd}
          onConferencePause={onClose}
        />
        {/* {((!activeRoom && isMobile) || !isMobile) && (
          <ConferenceControls user={user} />
        )} */}
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
      canResume={canResume}
      isPaused={isPaused}
    />
  );
};

export default ConferenceSection;
