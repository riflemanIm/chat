import { useCallback, useEffect, useRef, useState } from "react";
import { ChatMessage, ChatRoom } from "../types";

function isVisibleInViewport(element: HTMLLIElement, root: HTMLDivElement) {
  const rect = element.getBoundingClientRect();
  // console.log(
  //   'rect.top',
  //   rect.top,
  //   'rect.bottom',
  //   rect.bottom,
  //   root.clientHeight,
  // );
  return rect.top >= 150 && rect.bottom <= root.clientHeight;
}
interface UseMessageScrollProps {
  chatId: string | null;
  messages: ChatMessage[];
  scrollableRootRef: React.RefObject<HTMLDivElement>;
  pageSize: number;
  hasNextPage: boolean;
  chat: ChatRoom | null;
  onEnterRoom?: (chat: ChatRoom) => void;
  setIsVisible: React.Dispatch<React.SetStateAction<string>>;
}

export const useMessageScroll = ({
  chatId,
  messages,
  scrollableRootRef,
  pageSize,
  hasNextPage,
  chat,
  onEnterRoom,
  setIsVisible,
}: UseMessageScrollProps) => {
  const [scrollDownButton, setScrollDownButton] = useState(false);
  const lastScrollDistanceToBottomRef = useRef<number>();
  const lastMessageCount = useRef<number>();
  const messageCount = messages?.length || 0;
  const lastMessage = messageCount && messages[messageCount - 1];
  const SCROLL_THRESHOLD = 900;

  const scrollDown = useCallback(() => {
    if (scrollableRootRef.current) {
      scrollableRootRef.current.scrollTop =
        scrollableRootRef.current.scrollHeight;
      if (onEnterRoom && chat) {
        onEnterRoom(chat);
      }
    }
  }, [chatId, onEnterRoom]);

  const handleRootScroll = useCallback(() => {
    const rootNode = scrollableRootRef.current;

    if (rootNode) {
      const scrollDistanceToBottom = rootNode.scrollHeight - rootNode.scrollTop;
      lastScrollDistanceToBottomRef.current = scrollDistanceToBottom;

      const isShowScrollButton =
        hasNextPage && scrollDistanceToBottom > SCROLL_THRESHOLD;
      setScrollDownButton(isShowScrollButton);

      for (let i = 0; i < messageCount; i++) {
        const mess = messages[i];
        // console.log(
        //   '------------loop------------',
        //   //mess?.ref?.current,
        // );

        if (mess?.ref?.current) {
          const isVisibleMess = isVisibleInViewport(mess.ref.current, rootNode);
          if (isVisibleMess) {
            // console.log(
            //   'visible',
            //   dayjs(mess.cdate).format('DD.MM.YYYY'),
            // );
            setIsVisible(mess.cdate);
            break;
          }
        } else {
          break;
        }
      }
    }
  }, [messages, chatId]);

  useEffect(() => {
    if (chatId && scrollableRootRef.current && messages.length) {
      setIsVisible(messages[messageCount - 1]?.cdate ?? "");
      scrollDown();
    }
  }, [chatId]);

  // ------ keep the scroll position and lastMessageCount when messageCount changed ----------
  useEffect(() => {
    const scrollableRoot = scrollableRootRef.current;
    const lastScrollDistanceToBottom =
      lastScrollDistanceToBottomRef.current ?? 0;

    if (scrollableRoot && lastMessage && chat) {
      // -----  scroll to prev lastScrollDistanceToBottom -----------
      if (lastMessageCount.current === messageCount - pageSize) {
        scrollableRoot.scrollTop =
          scrollableRoot.scrollHeight - lastScrollDistanceToBottom;
      } else if (
        // -----  scroll to bottom forced -----------
        lastMessage.userId !== chat.userId ||
        lastScrollDistanceToBottom <= SCROLL_THRESHOLD
      ) {
        scrollDown();
      }
    }
    lastMessageCount.current = messageCount;
  }, [messageCount, chatId]);

  return {
    scrollDown,
    handleRootScroll,
    scrollDownButton,
    setScrollDownButton,
    unreadCount: messages.filter((m) => m.status === 0).length,
  };
};
