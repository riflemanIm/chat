import { default as React } from 'react';
import { Socket } from 'socket.io-client';
export interface ISocketContext {
    socket: Socket | null;
    online: boolean;
}
export declare const SocketContext: React.Context<ISocketContext>;
type SocketProviderProps = {
    wsUrl: string;
    wsPath: string;
    baseUrl: string;
    children: React.JSX.Element;
};
export declare const SocketProvider: React.FC<SocketProviderProps>;
export {};
//# sourceMappingURL=SocketContext.d.ts.map