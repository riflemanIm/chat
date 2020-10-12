import React from 'react';
import classnames from 'classnames';
import Iframe from './Iframe';
import Messenger from '../../Chat/Messenger';
import ChatRooms from '../../Chat/ChatRooms';
import './VideoConference.scss';

export default function ({ video, url, app: { status, accessToken }, chatRooms, ...props }) {

    return (
        <div className={classnames('videoconf-container', { video }, { closed: status === 'stopped' })}>
            {(video || url) && <Iframe {...props} />}
            {Boolean(chatRooms.list.length) && <ChatRooms accessToken={accessToken} list={chatRooms.list} />}
            <Messenger {...props} />
        </div>
    );
}
