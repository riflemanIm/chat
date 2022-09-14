import React from 'react';
import { ChatRoom, Contact, Group, SetTyping, User } from '../types';
declare type RoomListProps = {
    apiUrl: string;
    user: User;
    activeRoom: ChatRoom | null;
    groups: Group[];
    contacts: Contact[];
    typing: SetTyping | null;
    onChangeChat?: (chat: ChatRoom) => void;
};
declare const RoomList: React.FC<RoomListProps>;
export default RoomList;
