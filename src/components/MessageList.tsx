import React from "react";
import { List, ListItem, CircularProgress } from "@mui/material";
import { Message } from "./Message";
import { useInfiniteScroll } from "react-infinite-scroll-hook";

export const MessageList: React.FC<MessageListProps> = ({
  messages,
  loading,
  hasNextPage,
  onLoadMore,
  ...props
}) => {
  const [infiniteRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore,
    disabled: false,
  });

  return (
    <List>
      {hasNextPage && (
        <ListItem ref={infiniteRef} sx={{ justifyContent: "center" }}>
          <CircularProgress />
        </ListItem>
      )}

      {messages.map((message, index) => (
        <Message
          key={message.id}
          message={message}
          isUserFirst={isFirstInGroup(messages, index)}
          isUserLast={isLastInGroup(messages, index)}
          {...props}
        />
      ))}
    </List>
  );
};
