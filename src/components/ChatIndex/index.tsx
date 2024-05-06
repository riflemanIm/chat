import React from 'react';
import { ChatProps } from '../../types'; // TODO: upgrade to latest eslint tooling

import { AppLanguageProvider } from '../../context/LanguageContext';
import { ChatProvider } from '../../context/ChatContext';
import { RestProvider } from '../../context/RestContext';
import { SocketProvider } from '../../context/SocketContext';
import { ChatPage } from '../../pages/chat';

export const ChatIndex: React.FC<ChatProps> = ({
  activeGroupId,
  activeChatUserId,
  lang,
  chatBaseURLApi,
  chatWsUrl,
  chatWsPath,
  tokenKey = 'authToken',
}: ChatProps) => {
  return (
    <AppLanguageProvider>
      <ChatProvider defLang={lang} tokenKey={tokenKey}>
        <RestProvider baseURLApi={chatBaseURLApi} pageSize={25}>
          <SocketProvider wsUrl={chatWsUrl} wsPath={chatWsPath}>
            <ChatPage
              activeGroupId={activeGroupId}
              activeChatUserId={activeChatUserId}
            />
          </SocketProvider>
        </RestProvider>
      </ChatProvider>
    </AppLanguageProvider>
  );
};
