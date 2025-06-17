import React from "react";
import { ChatProps } from "../../types"; // TODO: upgrade to latest eslint tooling

import { ChatProvider } from "../../context/ChatContext";
import { RestProvider } from "../../context/RestContext";
import { SocketProvider } from "../../context/SocketContext";
import { ChatPage } from "../../pages/chat";

export const ChatIndex: React.FC<ChatProps> = ({
  lang,
  chatBaseURLApi,
  baseUrl,
  chatWsUrl,
  chatWsPath,
  token,
  refreshToken,
  ...props
}: ChatProps) => {
  return (
    <ChatProvider defLang={lang} token={token} refreshToken={refreshToken}>
      <RestProvider
        chatBaseURLApi={chatBaseURLApi}
        pageSize={25}
        baseUrl={baseUrl}
      >
        <SocketProvider wsUrl={chatWsUrl} wsPath={chatWsPath} baseUrl={baseUrl}>
          <ChatPage {...props} />
        </SocketProvider>
      </RestProvider>
    </ChatProvider>
  );
};
