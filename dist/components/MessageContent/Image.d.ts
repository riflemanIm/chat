import React from "react";
import { ChatMessage } from "../../types";
declare type ImageProrps = {
    apiUrl: string;
    message: ChatMessage;
    setViewerData: (value: {
        visible: boolean;
        src: string;
    }) => void;
};
declare const Image: React.FC<ImageProrps>;
export default Image;
