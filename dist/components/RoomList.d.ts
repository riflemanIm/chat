import { FC } from "react";
import { ChatRoom, Contact, Group, SetTyping, User } from "../types";
declare type RoomListProps = {
    user: User;
    activeRoom: ChatRoom | null;
    groups: Group[];
    contacts: Contact[];
    typing: SetTyping | null;
    onChangeChat: (chat: ChatRoom) => void;
};
declare const RoomList: FC<RoomListProps>;
export default RoomList;
