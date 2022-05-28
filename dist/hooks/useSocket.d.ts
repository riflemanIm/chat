import { Socket } from "socket.io-client";
export declare const useSocket: (url: string, accessToken: string) => {
    socket: Socket | null;
    online: boolean;
    connectSocket: () => void;
    disconnectSocket: () => void;
};
