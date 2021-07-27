import React from 'react';
import { pushMessage } from '../firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

const MessageSubmitButton = ({ text, name, setText }) => {
  const disabledFlg = text === '';
  const iconColor = disabledFlg ? 'disabled' : 'primary';
  const onClickPushMessage = () => {
    if (text === '') {
      return;
    }
    pushMessage({ name: 'たかぎ', text });
    setText('');
  };
  return (
    <>
      {' '}
      <IconButton onClick={onClickPushMessage} disabled={disabledFlg}>
        <SendIcon color={iconColor} />
      </IconButton>
    </>
  );
};

export default MessageSubmitButton;
