import { useEffect } from "react";
import { Socket } from "socket.io-client";
import { ServerRes } from "../types";

export function useSocketEvent<T>(
  socket: Socket | null,
  event: string,
  handler: (data: T) => void,
  deps: any[] = []
) {
  useEffect(() => {
    if (!socket) return;

    const wrappedHandler = (res: ServerRes) => {
      if (res.code) {
        console.error(`Error in ${event}:`, res.msg);
        return;
      }
      handler(res.data as T);
    };

    socket.on(event, wrappedHandler);

    return () => {
      socket.off(event, wrappedHandler);
    };
  }, [socket?.id, ...deps]);
}
