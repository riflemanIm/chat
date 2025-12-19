import { ConferenceData, VisitData } from "../types";

type RawStatus = number | string | null | undefined;

const normalizeStatus = (rawStatus: RawStatus) => {
  if (rawStatus == null) return null;
  if (typeof rawStatus === "string") return rawStatus.toLowerCase();
  const numeric = Number(rawStatus);
  return Number.isNaN(numeric) ? null : numeric;
};

export const getConferenceStatus = (
  conference: ConferenceData | null | undefined
) => {
  if (!conference) return null;
  return typeof (conference as any)?.status !== "undefined"
    ? (conference as any).status
    : (conference as any)?.conferenceStatus;
};

export const isConferencePaused = (
  conference: ConferenceData | null | undefined,
  visitData: VisitData[]
) => {
  return Boolean(getConferencePauseState(conference, visitData));
};

export const getConferencePauseState = (
  conference: ConferenceData | null | undefined,
  visitData: VisitData[]
) => {
  if (!conference) return null;
  const normalized = normalizeStatus(getConferenceStatus(conference));

  if (normalized != null) {
    return normalized === 2 || normalized === "paused";
  }

  if (Array.isArray(visitData) && conference.contactId != null) {
    const byConferenceId =
      conference.id != null
        ? visitData.find((item) => item.conferenceId === conference.id)
        : undefined;
    const visit =
      byConferenceId ??
      visitData
        .filter(
          (item) =>
            item.contactId === conference.contactId &&
            item.conferenceStatus !== "none"
        )
        .sort(
          (a, b) =>
            new Date(b.visitDate).getTime() -
            new Date(a.visitDate).getTime()
        )[0];
    if (!visit) return null;
    return visit.conferenceStatus === "paused";
  }

  return null;
};

export const isConferenceStarted = (
  conference: ConferenceData | null | undefined
) => {
  const normalized = normalizeStatus(getConferenceStatus(conference));
  if (normalized == null) return Boolean(conference?.url);
  return normalized === 1 || normalized === "started";
};
