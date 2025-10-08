import { ChatData, GroupMessage, PrivateMessage } from '../types';
export declare const createSocketHandlers: (dispatch: any, socket: any, state: any) => {
    handleChatData: (data: ChatData) => void;
    handleGroupMessage: (data: GroupMessage) => void;
    handlePrivateMessage: (data: PrivateMessage) => void;
};
//# sourceMappingURL=socketHandlers.d.ts.map