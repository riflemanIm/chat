import React, { useCallback } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faFile from "@fortawesome/fontawesome-free-solid/faFile";
import faCheck from "@fortawesome/fontawesome-free-solid/faCheck";
import MessageMenu from "../../../containers/MessageMenu";
import { getLocaleName } from "../../../utils/lang";
import "./Message.scss";

const getFriendlyTimestamp = (time, lang) => {
  const currentMoment = moment(new Date());
  const previousMoment = moment(time);
  const previousDuration = moment.duration(currentMoment.diff(previousMoment));
  if (previousDuration.as("hours") > 48 && previousDuration.as("hours") <= 64) {
    // return `Позавчера, ${moment(time).format('HH:MM')}`;
    return getLocaleName("beforeYesterday");
  }
  if (
    previousDuration.as("hours") >= 24 &&
    previousDuration.as("hours") <= 48
  ) {
    // return `Вчера, ${moment(time).format('HH:MM')}`;
    return getLocaleName("yesterday");
  }
  if (previousDuration.as("hours") < 24) {
    // return `Сегодня, ${moment(time).format('HH:MM')}`;
    return getLocaleName("today");
  }
  return moment(time).format("LLLL");
};

const getMessageTime = (time) => moment(time).format("HH:MM");

const getStatus = (status = "sent") => {
  const statuses = {
    sent: <FontAwesomeIcon className="sent" icon={faCheck} />,
    received: (
      <>
        <FontAwesomeIcon className="received" icon={faCheck} />
        <FontAwesomeIcon className="received" icon={faCheck} />
      </>
    ),
    read: (
      <>
        <FontAwesomeIcon className="read" icon={faCheck} />
        <FontAwesomeIcon className="read" icon={faCheck} />
      </>
    ),
  };
  return statuses[status];
};

export default function Message(props) {
  const {
    lang,
    data,
    isMine,
    startsSequence,
    endsSequence,
    showTimestamp,
    selected,
    selectMessage,
    // unselectMessage,
  } = props;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onMessageSelect = useCallback(() => selectMessage(data.id));
  // console.log(data)
  const content =
    typeof data.files === "object" && data.files.length > 0 ? (
      <>
        {data.files.map((file) => (
          <a
            key={file.name}
            href={file.url}
            className="file"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <FontAwesomeIcon icon={faFile} />
            {getLocaleName("downloadFile")}
          </a>
        ))}
        <span>{data.text}</span>
      </>
    ) : (
      data.text
    );
  return (
    <div
      className={[
        "message",
        `${isMine ? "mine" : ""}`,
        `${startsSequence ? "start" : ""}`,
        `${endsSequence ? "end" : ""}`,
        `${selected ? "selected" : ""}`,
      ].join(" ")}
    >
      {showTimestamp && data.time && (
        <div className="timestamp">{getFriendlyTimestamp(data.time, lang)}</div>
      )}

      <div className="bubble-container">
        <div className="bubble" title={getFriendlyTimestamp(data.time)}>
          <div className="text-mess">{content}</div>
          <div className={`status ${data.status}`}>
            {getStatus(data.status)}
          </div>
          <div className="time">{getMessageTime(data.time)}</div>
          {isMine && <MessageMenu {...props} />}
          <label htmlFor={`message-${data.id}`} className="selector">
            <input
              type="checkbox"
              className=""
              name={`message-${data.id}`}
              id={`message-${data.id}`}
              onClick={onMessageSelect}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
