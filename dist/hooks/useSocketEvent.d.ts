import { Socket } from "socket.io-client";
export declare function useSocketEvent<T>(socket: Socket | null, event: string, handler: (data: T) => void, deps?: any[]): void;
