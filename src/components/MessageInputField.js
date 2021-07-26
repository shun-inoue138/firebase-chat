import React from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { gravatarPath } from '../lib/gravatar';

const MessageInputField = ({ className, name }) => {
  const avatarPath = gravatarPath(name);
  return (
    <div className={className} className="m-4">
      <Grid container spacing={3}>
        <Grid item xs={1} className="">
          <Avatar src={avatarPath} className=""></Avatar>
        </Grid>
        <Grid item xs={10} className="">
          hoge
        </Grid>
        <Grid item xs={1} className="">
          hoge
        </Grid>
      </Grid>
    </div>
  );
};

export default MessageInputField;
