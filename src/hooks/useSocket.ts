import { useCallback, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

export const useSocket = (
  url: string,
  path: string,
  accessToken: string
): {
  socket: Socket | null;
  online: boolean;
  connectSocket: () => void;
  disconnectSocket: () => void;
} => {
  const [socket, setSocket] = useState<Socket | null>(null);

  const connectSocket = useCallback(() => {
    // console.log("do connect");
    const socketTemp = io(url, {
      path,
      reconnection: true,
      extraHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setSocket(socketTemp);
  }, [url, path, accessToken]);

  const disconnectSocket = useCallback(() => {
    // console.log("do disconnect");
    socket?.disconnect();
    setSocket(null);
  }, [socket]);

  const [online, setOnline] = useState<boolean>(false);

  useEffect(() => {
    setOnline(socket?.connected ? true : false);
  }, [socket]);

  useEffect(() => {
    socket?.on("connect", () => {
      // console.log("connected");
      setOnline(true);
      socket.emit("chatData");
    });
  }, [socket]);

  useEffect(() => {
    socket?.on("disconnect", () => {
      // console.log("disconnected");
      setOnline(false);
    });
  }, [socket]);

  useEffect(() => {
    if (!socket) return;
    const onDisconnect = (reason: string) => {
      console.log("[socket] disconnect", reason);
    };
    const onReconnectAttempt = (attempt: number) => {
      console.log("[socket] reconnect_attempt", attempt);
    };
    socket.on("disconnect", onDisconnect);
    socket.io.on("reconnect_attempt", onReconnectAttempt);
    return () => {
      socket.off("disconnect", onDisconnect);
      socket.io.off("reconnect_attempt", onReconnectAttempt);
    };
  }, [socket]);

  return {
    socket,
    online,
    disconnectSocket,
    connectSocket,
  };
};
