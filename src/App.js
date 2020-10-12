import * as React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import VideoConference from "./containers/VideoConference";
import { useDropzone } from "react-dropzone";
import { store, history } from "./redux/store";

import "./styles.scss";

export default function App() {
  const { getRootProps, isDragActive } = useDropzone();
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div
          {...getRootProps()}
          className={`App ${isDragActive ? "drag-active" : ""}`}
        >
          <VideoConference isDragActive={isDragActive} />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}
