import * as React from "react";
import { Box, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    item: {
      cursor: "pointer",
    },
  })
);

type EmojiProps = {
  onSelect?: (emoji: string) => void;
};

type EmojiItemProps = {
  emoji: string;
};

const Emoji: React.FC<EmojiProps> = (props: EmojiProps) => {
  const classes = useStyles();
  const emojiClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (props.onSelect) {
      props.onSelect((e.target as HTMLDivElement).innerText);
    }
  };

  const Item = (itemProps: EmojiItemProps) => {
    return (
      <Box
        m={0.5}
        component="span"
        onClick={emojiClick}
        className={classes.item}
      >
        {itemProps.emoji}
      </Box>
    );
  };

  return (
    <Box>
      <Box display="flex" flexDirection="row">
        <Item emoji="😃" />
        <Item emoji="😁" />
        <Item emoji="😂" />
        <Item emoji="😄" />
        <Item emoji="😅" />
        <Item emoji="😆" />
        <Item emoji="😇" />
        <Item emoji="😈" />
        <Item emoji="😉" />
      </Box>
      <Box display="flex" flexDirection="row">
        <Item emoji="😊" />
        <Item emoji="😋" />
        <Item emoji="😌" />
        <Item emoji="😍" />
        <Item emoji="😎" />
        <Item emoji="😏" />
        <Item emoji="😐" />
        <Item emoji="😒" />
        <Item emoji="😓" />
      </Box>
      <Box display="flex" flexDirection="row">
        <Item emoji="❓" />
        <Item emoji="😕" />
        <Item emoji="😖" />
        <Item emoji="😗" />
        <Item emoji="😘" />
        <Item emoji="😙" />
        <Item emoji="😚" />
        <Item emoji="😜" />
        <Item emoji="😝" />
      </Box>
      <Box display="flex" flexDirection="row">
        <Item emoji="😞" />
        <Item emoji="😟" />
        <Item emoji="😠" />
        <Item emoji="😡" />
        <Item emoji="😢" />
        <Item emoji="😣" />
        <Item emoji="😤" />
        <Item emoji="😥" />
        <Item emoji="😦" />
      </Box>
      <Box display="flex" flexDirection="row">
        <Item emoji="😨" />
        <Item emoji="😩" />
        <Item emoji="😪" />
        <Item emoji="😫" />
        <Item emoji="😬" />
        <Item emoji="😭" />
        <Item emoji="😮" />
        <Item emoji="😯" />
        <Item emoji="😰" />
      </Box>
      <Box display="flex" flexDirection="row">
        <Item emoji="😲" />
        <Item emoji="😳" />
        <Item emoji="😴" />
        <Item emoji="😵" />
        <Item emoji="🧐" />
        <Item emoji="😷" />
        <Item emoji="🙁" />
        <Item emoji="🙂" />
        <Item emoji="🙃" />
      </Box>
      <Box display="flex" flexDirection="row">
        <Item emoji="🤐" />
        <Item emoji="🤑" />
        <Item emoji="🤒" />
        <Item emoji="🤓" />
        <Item emoji="🤔" />
        <Item emoji="🤕" />
        <Item emoji="🤠" />
        <Item emoji="🤡" />
        <Item emoji="🤢" />
      </Box>
      <Box display="flex" flexDirection="row">
        <Item emoji="🤤" />
        <Item emoji="🤥" />
        <Item emoji="🤧" />
        <Item emoji="🤨" />
        <Item emoji="🤩" />
        <Item emoji="🤪" />
        <Item emoji="🤫" />
        <Item emoji="🤬" />
        <Item emoji="🤭" />
      </Box>
    </Box>
  );
};
export default Emoji;
