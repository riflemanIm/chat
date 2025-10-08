import {
  Backdrop,
  CardContent,
  CircularProgress,
  List,
  ListItem,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import useInterval from "../hooks/useInterval";

import { useMessageScroll } from "../hooks/useMessageScroll";
import { ChatMessage, ChatRoom, ContactGather, User } from "../types";
import { getChatId } from "../utils/common";
import Message from "./Message";
import { MessageDateIndicator } from "./MessageDateIndicator";
import { MessageScrollButton } from "./MessageScrollButton";

const useStyles = makeStyles((theme: Theme) => ({
  messageListOuter: {
    flex: 1,
    overflowY: "auto",
    margin: 0,
    padding: 0,
    height: "100%",
    scrollbarWidth: "thin",
    scrollbarColor: `${theme.palette.primary.light} #fff`,
  },
  messageList: {},
  img: {
    cursor: "pointer",
    borderRadius: theme.spacing(1.2),
    maxWidth: "auto",
    maxHeight: "95%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "auto",
      maxHeight: "95%",
    },
  },
}));
interface ViewerData {
  visible: boolean;
  src: string;
}

interface InitialMenuState {
  message: ChatMessage | null;
  mouseX: null | number;
  mouseY: null | number;
  canCopy: boolean;
  canDelete: boolean;
}

interface RoomMessageListProps {
  apiUrl: string;
  user: User;
  users: ContactGather;
  chat: ChatRoom | null;
  loading: boolean;
  pageSize: number;
  initialMenuState: InitialMenuState;
  onNeedMoreMessages: (chat: ChatRoom) => Promise<void>;
  onMessageDelete?: (chat: ChatRoom, message: ChatMessage) => void;
  setMenuState: React.Dispatch<React.SetStateAction<InitialMenuState>>;
  onEnterRoom?: (chat: ChatRoom) => void;
  messageSearch: string;
}
const RoomMessageList: React.FC<RoomMessageListProps> = ({
  apiUrl,
  user,
  users,
  chat,
  loading,
  pageSize,
  initialMenuState,
  onNeedMoreMessages,
  onMessageDelete,
  setMenuState,
  onEnterRoom,
  messageSearch,
}) => {
  const classes = useStyles();
  const scrollableRootRef = React.useRef<HTMLDivElement | null>(null);
  const messageRefs = React.useRef<
    Record<string, React.RefObject<HTMLLIElement>>
  >({});

  const chatId = React.useMemo(() => getChatId(chat), [chat]);

  const [viewerData, setViewerData] = React.useState<ViewerData>({
    visible: false,
    src: "",
  });

  const [isVisible, setIsVisible] = React.useState<string>("");

  const messages = React.useMemo(() => {
    return (chat?.messages || []).map((message, index) => {
      const key =
        message._id != null
          ? String(message._id)
          : `${message.userId}-${message.cdate}-${index}`;
      if (!messageRefs.current[key]) {
        messageRefs.current[key] = React.createRef<HTMLLIElement>();
      }
      return {
        ...message,
        ref: messageRefs.current[key],
      };
    });
  }, [chat?.messages]);

  const normalizedSearch = messageSearch.trim().toLowerCase();

  const filteredMessages = React.useMemo(() => {
    if (!normalizedSearch) return messages;
    return messages.filter((message) => {
      if (!message.content) return false;
      const contentString = String(message.content).toLowerCase();
      return contentString.includes(normalizedSearch);
    });
  }, [messages, normalizedSearch]);

  const hasNextPage = chat?.noMoreData === true ? false : true;

  React.useEffect(() => {
    messageRefs.current = {};
  }, [chatId]);

  const { scrollDown, handleRootScroll, scrollDownButton, unreadCount } =
    useMessageScroll({
      chatId,
      messages: filteredMessages,
      scrollableRootRef,
      pageSize,
      hasNextPage,
      chat,
      onEnterRoom,
      setIsVisible,
    });

  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: () => chat && onNeedMoreMessages(chat),
    disabled: !hasNextPage,
  });

  const rootRefSetter = React.useCallback(
    (node: HTMLDivElement) => {
      rootRef(node);
      scrollableRootRef.current = node;
    },
    [rootRef]
  );

  useInterval(
    () => {
      setIsVisible("");
    },
    isVisible,
    4700
  );

  const handleMenuPopup = React.useCallback(
    (message: ChatMessage, event: React.MouseEvent<HTMLElement>) => {
      const canCopy = message.messageType === "text";
      const canDelete =
        user.userId === message.userId &&
        !!onMessageDelete &&
        new Date().getTime() - new Date(message.cdate).getTime() <= 1000 * 60 * 2;

      if (!canCopy && !canDelete) {
        setMenuState(initialMenuState);
        return;
      }

      event.preventDefault();
      setMenuState({
        message,
        mouseX: event.clientX - 2,
        mouseY: event.clientY - 4,
        canCopy,
        canDelete,
      });
    },
    [initialMenuState, onMessageDelete, setMenuState, user.userId]
  );

  if (!chatId) return null;
  const messageList = React.useMemo(
    () =>
      filteredMessages.map((message, index) => (
        <Message
          ref={message.ref}
          key={
            message._id ?? `${message.userId}-${message.cdate}-${index}`
          }
          apiUrl={apiUrl}
          user={user}
          message={message}
          owner={users[message.userId]}
          isGroupMessage={!!chat?.groupId}
          isUserFirst={
            index === 0 ||
            filteredMessages[index - 1].messageType === "notify" ||
            filteredMessages[index - 1].userId !==
              filteredMessages[index].userId
          }
          isUserLast={
            index === filteredMessages.length - 1 ||
            filteredMessages[index + 1]?.messageType === "notify" ||
            filteredMessages[index + 1]?.userId !==
              filteredMessages[index].userId
          }
          onContextMenu={(event) => handleMenuPopup(message, event)}
          setViewerData={setViewerData}
        />
      )),
    [
      filteredMessages,
      apiUrl,
      user,
      users,
      chat?.groupId,
      handleMenuPopup,
      setViewerData,
    ]
  );
  // console.count("RoomMessageList - render");
  // console.log("unreadCount", unreadCount);

  return (
    <>
      <MessageDateIndicator date={isVisible} />

      <CardContent
        className={classes.messageListOuter}
        ref={rootRefSetter}
        onScroll={handleRootScroll}
      >
        <List className={classes.messageList}>
          {hasNextPage && (
            <ListItem ref={infiniteRef} sx={{ justifyContent: "center" }}>
              <CircularProgress />
            </ListItem>
          )}

          {messageList}
        </List>

        <MessageScrollButton
          visible={scrollDownButton}
          unreadCount={unreadCount}
          onScrollDown={scrollDown}
        />

        {viewerData.visible && (
          <Backdrop
            sx={{
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={viewerData.visible}
            onClick={() => setViewerData({ visible: false, src: "" })}
          >
            <img src={viewerData.src} className={classes.img} alt="" />
          </Backdrop>
        )}
      </CardContent>
    </>
  );
};
export default RoomMessageList;

// export default React.memo(RoomMessageList, (prevProps, nextProps) => {
//   console.log("RoomMessageList memo");
//   return (
//     (prevProps.chat?.messages || []).filter((it) => it._id) ===
//       (nextProps.chat?.messages || []).filter((it) => it._id) &&
//     prevProps.loading === nextProps.loading &&
//     prevProps.user === nextProps.user &&
//     prevProps.users === nextProps.users &&
//     prevProps.chat?.groupId === nextProps.chat?.groupId &&
//     prevProps.apiUrl === nextProps.apiUrl
//   );
// });
