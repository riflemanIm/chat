import React from "react";
import {
  Box,
  CardContent,
  CircularProgress,
  List,
  Backdrop,
  ListItem,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import useInfiniteScroll from "react-infinite-scroll-hook";
import useInterval from "../hooks/useInterval";

import Message from "./Message";
import { MessageScrollButton } from "./MessageScrollButton";
import { MessageDateIndicator } from "./MessageDateIndicator";
import { useMessageScroll } from "../hooks/useMessageScroll";
import { ChatMessage, ChatRoom, User, ContactGather } from "../types";
import { getChatId } from "../utils/common";

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
}) => {
  const classes = useStyles();
  const scrollableRootRef = React.useRef<HTMLDivElement | null>(null);

  const chatId = React.useMemo(() => getChatId(chat), [chat]);

  const [viewerData, setViewerData] = React.useState<ViewerData>({
    visible: false,
    src: "",
  });

  const [isVisible, setIsVisible] = React.useState<string>("");

  const messages =
    chat?.messages?.map((it) => ({
      ...it,
      ref: React.createRef<HTMLLIElement>(),
    })) || [];

  const hasNextPage = React.useMemo(
    () => (chat == null || chat?.noMoreData == null ? true : !chat.noMoreData),
    [chat?.noMoreData]
  );

  const { scrollDown, handleRootScroll, scrollDownButton, unreadCount } =
    useMessageScroll({
      chatId,
      messages,
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
    disabled: false,
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

  const handleMenuPopup = (
    message: ChatMessage,
    event: React.MouseEvent<HTMLElement>
  ) => {
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
  };

  if (!chatId) return null;
  const messageList = React.useMemo(() => {
    return messages.map((message, index) => (
      <Message
        ref={message.ref}
        key={message._id || index} // Better to use unique ID if available
        apiUrl={apiUrl}
        user={user}
        message={message}
        owner={users[message.userId]}
        isGroupMessage={!!chat?.groupId}
        isUserFirst={
          index === 0 ||
          messages[index - 1].messageType === "notify" ||
          messages[index - 1].userId !== messages[index].userId
        }
        isUserLast={
          index === messages.length - 1 ||
          messages[index + 1]?.messageType === "notify" ||
          messages[index + 1]?.userId !== messages[index].userId
        }
        onContextMenu={(event) => handleMenuPopup(message, event)}
        setViewerData={setViewerData}
      />
    ));
  }, [
    (messages || []).filter((it) => it._id).length,
    apiUrl,
    user,
    users,
    chat?.groupId,
    scrollDownButton,
    isVisible,
  ]);
  // console.count("RoomMessageList - render");
  // console.log("scrollDownButton", scrollDownButton);

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
