import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faDown from "@fortawesome/fontawesome-free-solid/faAngleDown";
import classnames from "classnames";
import { getLocaleName } from "../../../utils/lang";
import "./MessageMenu.scss";

export default function Message(props) {
  const {
    data,
    isMine,
    deleteMessage,
    websocket,
    // lang
  } = props;
  const [isOpen, setOpen] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onMessageDelete = useCallback(() => {
    deleteMessage(data.id);
    setOpen(false);
    websocket.deleteMessages(data.id);
  });

  return (
    <div className={classnames("message-menu", { active: isOpen })}>
      <div className="message-menu__back" onClick={() => setOpen(false)} />
      <FontAwesomeIcon
        className="arrow"
        icon={faDown}
        onClick={() => setOpen(true)}
      />
      {/*<button type="button">Ответить</button>*/}
      {isMine && <button type="button">{getLocaleName("editMessage")}</button>}
      {/*<button type="button">Копировать</button>*/}
      {/*<button type="button">Переслать сообщение</button>*/}
      {isMine && (
        <button type="button" onClick={onMessageDelete}>
          {getLocaleName("deleteMessage")}
        </button>
      )}
      {/*<button type="button">Выбрать сообщение</button>*/}
    </div>
  );
}
