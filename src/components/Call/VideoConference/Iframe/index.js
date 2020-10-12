import React, { useMemo, useCallback } from 'react';
import qs from 'qs';
import { trueConfUrl } from '../../../../config';

export default function (props) {
    const { call: { url, conferenceId, conferenceToken }, user: { trueconfUser }, call, user } = props;
    const q = qs.parse(window.location.search.substring(1));
    const disable = `&disabled=chats,participants,showDesktop,header,${q.disable}`;
    const src = url !== null ? `${url}${disable}` :
        `${trueConfUrl}/webrtc/${conferenceId}?${(new Date).getTime()}#login=${trueconfUser}&token=${conferenceToken}&lang=auto${disable}`;
    const onLoadHandler = useCallback((event) => {
        if (window.frames.length > 0) {
            window.frames[0].navigator.mediaDevices &&
            window.frames[0].navigator.mediaDevices.getUserMedia &&
            window.frames[0].navigator.mediaDevices.getUserMedia({ audio: true, video: true });
        }
    });

    return useMemo(() => (
        <div className="video-frame">
            <iframe
                title="videoConfFrame"
                src={src}
                allow="microphone; camera; autoplay"
                // onLoad={onLoadHandler}
            />
        </div>
    ), [call, user]);
}
