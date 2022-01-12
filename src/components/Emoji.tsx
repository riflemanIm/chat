import { Box } from '@material-ui/core';
import * as React from 'react';

type EmojiProps = {
  onSelect?: (emoji: string) => void;
};

type EmojiItemProps = {
  emoji: string;
}

export default function Emoji(props: EmojiProps) {
  const emojiClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (props.onSelect) {
      props.onSelect((e.target as HTMLDivElement).innerText)
    }
  };

  const Item = (itemProps: EmojiItemProps) => {
    return (
      <Box m={0.25} component='span' onClick={emojiClick}>{itemProps.emoji}</Box>
    )
  }

  return (
    <Box>
      <Box display='flex' flexDirection='row'>
        <Item emoji='😃' />
        <Item emoji='😁' />
        <Item emoji='😂' />
        <Item emoji='😄' />
        <Item emoji='😅' />
        <Item emoji='😆' />
        <Item emoji='😇' />
        <Item emoji='😈' />
        <Item emoji='😉' />
      </Box>
      <Box display='flex' flexDirection='row'>
        <Item emoji='😊' />
        <Item emoji='😋' />
        <Item emoji='😌' />
        <Item emoji='😍' />
        <Item emoji='😎' />
        <Item emoji='😏' />
        <Item emoji='😐' />
        <Item emoji='😒' />
        <Item emoji='😓' />
      </Box>
      <Box display='flex' flexDirection='row'>
        <Item emoji='❓' />
        <Item emoji='😕' />
        <Item emoji='😖' />
        <Item emoji='😗' />
        <Item emoji='😘' />
        <Item emoji='😙' />
        <Item emoji='😚' />
        <Item emoji='😜' />
        <Item emoji='😝' />
      </Box>
      <Box display='flex' flexDirection='row'>
        <Item emoji='😞' />
        <Item emoji='😟' />
        <Item emoji='😠' />
        <Item emoji='😡' />
        <Item emoji='😢' />
        <Item emoji='😣' />
        <Item emoji='😤' />
        <Item emoji='😥' />
        <Item emoji='😦' />
      </Box>
      <Box display='flex' flexDirection='row'>
        <Item emoji='😨' />
        <Item emoji='😩' />
        <Item emoji='😪' />
        <Item emoji='😫' />
        <Item emoji='😬' />
        <Item emoji='😭' />
        <Item emoji='😮' />
        <Item emoji='😯' />
        <Item emoji='😰' />
      </Box>
      <Box display='flex' flexDirection='row'>
        <Item emoji='😲' />
        <Item emoji='😳' />
        <Item emoji='😴' />
        <Item emoji='😵' />
        <Item emoji='🧐' />
        <Item emoji='😷' />
        <Item emoji='🙁' />
        <Item emoji='🙂' />
        <Item emoji='🙃' />
      </Box>
      <Box display='flex' flexDirection='row'>
        <Item emoji='🤐' />
        <Item emoji='🤑' />
        <Item emoji='🤒' />
        <Item emoji='🤓' />
        <Item emoji='🤔' />
        <Item emoji='🤕' />
        <Item emoji='🤠' />
        <Item emoji='🤡' />
        <Item emoji='🤢' />
      </Box>
      <Box display='flex' flexDirection='row'>
        <Item emoji='🤤' />
        <Item emoji='🤥' />
        <Item emoji='🤧' />
        <Item emoji='🤨' />
        <Item emoji='🤩' />
        <Item emoji='🤪' />
        <Item emoji='🤫' />
        <Item emoji='🤬' />
        <Item emoji='🤭' />
      </Box>
    </Box >
  );
}