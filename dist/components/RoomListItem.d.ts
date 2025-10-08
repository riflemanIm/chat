import { default as React } from 'react';
import { ChatRoom, SetTyping } from '../types';
type RoomListItemProps = {
    apiUrl: string;
    chat: ChatRoom;
    active: boolean;
    typing: SetTyping | null;
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
};
declare const RoomListItem: React.FC<RoomListItemProps>;
export default RoomListItem;
//# sourceMappingURL=RoomListItem.d.ts.map