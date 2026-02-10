import * as React from "react";
import { ConferenceData, User } from "../types";
import Conference from "./Conference";
import ConferenceCall from "./ConferenceCall";
import { isConferenceStarted } from "../utils/conference";

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
  apiUrl: string;
  onVideoEnd?: (conference: ConferenceData) => void;
}

const ConferenceSectionImpl: React.FC<ConferenceSectionProps> = ({
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
  const [resumeBlocked, setResumeBlocked] = React.useState(false);
  const canResume =
    (!isPaused || isOperatorRole) && (!isPaused || !resumeBlocked);
  const isStarted = isConferenceStarted(conference.data);
  const shouldRenderConference = conference.joined && !isPaused;
  const autoJoinRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    if (!conference.data) {
      autoJoinRef.current = null;
      return;
    }

    if (autoJoinRef.current === conference.data.id) return;
    if (!conference.joined && !isPaused && isStarted) {
      autoJoinRef.current = conference.data.id;
      onAccept(conference.data);
    }
  }, [conference.data, conference.joined, isPaused, isStarted, onAccept]);

  React.useEffect(() => {
    if (!isPaused) {
      setResumeBlocked(false);
      return;
    }

    setResumeBlocked(true);
    const timer = setTimeout(() => setResumeBlocked(false), 400);
    return () => clearTimeout(timer);
  }, [isPaused, conference.data?.id]);

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

export const ConferenceSection = React.memo(
  ConferenceSectionImpl,
  (prev, next) => {
    const prevConf = prev.conference;
    const nextConf = next.conference;
    const prevData = prevConf.data;
    const nextData = nextConf.data;

    if (prevConf.joined !== nextConf.joined) return false;
    if (Boolean(prevConf.paused) !== Boolean(nextConf.paused)) return false;
    if (prev.user.userId !== next.user.userId) return false;
    if (prev.user.role !== next.user.role) return false;
    if (prev.user.langCode !== next.user.langCode) return false;
    if (prev.apiUrl !== next.apiUrl) return false;
    if (prev.isMobile !== next.isMobile) return false;

    if (prevData == null || nextData == null) {
      return prevData == null && nextData == null;
    }

    return (
      prevData.id === nextData.id &&
      prevData.url === nextData.url &&
      prevData.finishDate === nextData.finishDate &&
      prevData.currentDate === nextData.currentDate &&
      prevData.remainingDuration === nextData.remainingDuration &&
      prevData.userId === nextData.userId &&
      prevData.contactId === nextData.contactId
    );
  }
);

export default ConferenceSection;
