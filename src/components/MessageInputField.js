import React from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { gravatarPath } from '../lib/gravatar';
import MessageField from './MessageField';
import { useState } from 'react';

const MessageInputField = ({ className, name }) => {
  const avatarPath = gravatarPath(name);
  const [text, setText] = useState('');
  return (
    <div className={className} className="m-4">
      <Grid container spacing={3}>
        <Grid item xs={1} className="">
          <Avatar src={avatarPath} className=""></Avatar>
        </Grid>
        <Grid item xs={10} className="">
          <MessageField name={name} text={text} setText={setText} />
        </Grid>
        <Grid item xs={1} className="">
          hoge
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
