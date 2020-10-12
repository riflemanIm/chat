import React from "react";
import ReactDOM from "react-dom";
import qs from "qs";

import App from "./App";

//import { setCookie, deleteAllCookies } from './utils/cookies';

import "./assets/index.css";

const params = qs.parse(window.location.search.substring(1));
// if (typeof params.access_token === 'string') {
// deleteAllCookies();
// setCookie('access_token', params.access_token);
// if (typeof params.conference_token === 'string') setCookie('conference_token', params.conference_token);
// if (typeof params.conference_id === 'string') setCookie('conference_id', params.conference_id);
// let origin;
// if (window.location.host === 'localhost:4010') { origin = window.location.origin; }
// if (window.location.host === process.env.REACT_APP_API_HOST || window.location.host === 'localhost:4000') { origin = `${window.location.origin}/api/v1/widget/render/`; }
// window.location.href = origin;
// }

setTimeout(() => {
  navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia &&
    navigator.mediaDevices.getUserMedia({ audio: true, video: true });
}, 100);

ReactDOM.render(<App params={params} />, document.getElementById("root"));
