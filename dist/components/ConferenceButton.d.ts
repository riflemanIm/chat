/// <reference types="react" />
import { ChatRoom, VisitData } from '../types';
declare type ConferenceButtonProps = {
    visitData: VisitData[];
    chat: ChatRoom;
    onVideoCall: (chat: ChatRoom, visitId?: number, recreate?: boolean) => void;
};
export default function ConferenceButton(props: ConferenceButtonProps): JSX.Element;
export {};
