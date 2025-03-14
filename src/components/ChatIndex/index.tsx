import React from "react";
import { ChatProps } from "../../types"; // TODO: upgrade to latest eslint tooling

import { ChatProvider } from "../../context/ChatContext";
import { AppLanguageProvider } from "../../context/LanguageContext";
import { RestProvider } from "../../context/RestContext";
import { SocketProvider } from "../../context/SocketContext";
import { ChatPage } from "../../pages/chat";

export const ChatIndex: React.FC<ChatProps> = ({
  lang,
  chatBaseURLApi,
  chatWsUrl,
  chatWsPath,
  token,
  refreshToken,
  ...props
}: ChatProps) => {
  return (
    <AppLanguageProvider>
      <ChatProvider defLang={lang} token={token} refreshToken={refreshToken}>
        <RestProvider baseURLApi={chatBaseURLApi} pageSize={25}>
          <SocketProvider wsUrl={chatWsUrl} wsPath={chatWsPath}>
            <ChatPage {...props} />
          </SocketProvider>
        </RestProvider>
      </ChatProvider>
    </AppLanguageProvider>
  );
};
