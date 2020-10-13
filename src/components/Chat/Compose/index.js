import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import classnames from "classnames";
import FileUploadIndicate from "../../../containers/FileUploadIndicate";
import "./Compose.scss";
import { getLocaleName } from "../../../utils/lang";

export default function Compose(props) {
  const {
    app: { lang },
    media: { isDragActive: globalIsDragActive, uploads },
    rightItems,
    onSubmit,
    onDrop,
  } = props;

  const [text, setText] = useState("");

  const onDropHandler = useCallback(
    (acceptedFiles) => onDrop(acceptedFiles),
    []
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropHandler,
  });

  const renderDropZone = () => {
    if (!globalIsDragActive) return null;
    return (
      <div
        {...getRootProps({
          className: classnames("dropzone", { active: isDragActive }),
        })}
      >
        <input {...getInputProps()} />
        <p>Перетащите файлы сюда, чтобы прикрепить их к сообщению</p>
      </div>
    );
  };

  return (
    <>
      {renderDropZone()}
      <div className="compose">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (text !== "" || uploads.length > 0) {
              onSubmit(text);
            }
            setText("");
          }}
        >
          <input
            type="text"
            value={text}
            className="compose-input"
            placeholder={getLocaleName("enterMessage")}
            onChange={(event) => setText(event.target.value)}
          />
          {rightItems}
        </form>
        <div className="file-indicates">
          {uploads.map((file, index) => (
            <FileUploadIndicate
              index={index}
              file={file}
              percent={file.percent}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
