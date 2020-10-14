import * as React from "react";
import { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";
import faFile from "@fortawesome/fontawesome-free-solid/faFile";
import "./FileUploadIndicate.scss";

export default function FileUploadIndicate({
  index,
  file = {},
  percent = 0,
  cancelFileUploading,
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onClose = useCallback(() => cancelFileUploading(index));
  // console.log('file', file.id);
  const pending = file.percent !== 100; // file.status === 'pending';
  const success = file.percent === 100; // file.status === 'success';
  const error = file.status === "error";
  return (
    <div className={`file-indicate ${success ? "success" : ""}`}>
      <div className="name">{file.file.file.name}</div>
      {pending && (
        <div className="indicator">
          <div style={{ width: `${percent}%` }} />
        </div>
      )}
      {success && (
        <div className="info">
          <FontAwesomeIcon icon={faFile} />
          {Math.floor(file.file.file.size / 1024)}K
        </div>
      )}
      {error && <div className="info">Ошибка</div>}
      <FontAwesomeIcon className="close" icon={faTimes} onClick={onClose} />
    </div>
  );
}
