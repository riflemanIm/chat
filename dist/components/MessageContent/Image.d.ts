import { default as React } from 'react';
import { ChatMessage } from '../../types';
type ImageProps = {
    apiUrl: string;
    message: ChatMessage;
    setViewerData: (value: {
        visible: boolean;
        src: string;
    }) => void;
};
declare const Image: React.FC<ImageProps>;
export default Image;
//# sourceMappingURL=Image.d.ts.map