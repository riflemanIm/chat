import { useCallback, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

export const useSocket = (
  url: string,
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
      reconnection: true,
      extraHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setSocket(socketTemp);
  }, [url, accessToken]);

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

  return {
    socket,
    online,
    disconnectSocket,
    connectSocket,
  };
};
