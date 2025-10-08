import { ChatRoom, VisitData } from '../types';
type ConferenceButtonProps = {
    visitData: VisitData[];
    chat: ChatRoom;
    onVideoCall: (chat: ChatRoom, visitId?: number, recreate?: boolean) => void;
};
export default function ConferenceButton(props: ConferenceButtonProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=ConferenceButton.d.ts.map