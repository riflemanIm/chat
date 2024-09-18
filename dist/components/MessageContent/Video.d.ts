import React from 'react';
import { ChatMessage } from '../../types';
declare type VideoProps = {
    apiUrl: string;
    message: ChatMessage;
    isConference: boolean;
};
declare const Video: React.FC<VideoProps>;
export default Video;
