import React from 'react';
import { Socket } from 'socket.io-client';
export interface ISocketContext {
    socket: Socket | null;
    online: boolean;
}
export declare const SocketContext: React.Context<ISocketContext>;
declare type SocketProviderProps = {
    wsUrl: string;
    wsPath: string;
    children: JSX.Element;
};
export declare const SocketProvider: React.FC<SocketProviderProps>;
export {};
