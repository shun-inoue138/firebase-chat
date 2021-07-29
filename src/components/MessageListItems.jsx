import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from '@material-ui/core';
import { gravatarPath } from '../lib/gravatar';

const MessageListItems = ({ messages }) => {
  return messages.map((message) => {
    return (
      <div key={message.key}>
        <ListItem alignItem="flex-start">
          <ListItemAvatar>
            <Avatar alt="画像なし" src={gravatarPath(message.name)} />
          </ListItemAvatar>
          <ListItemText
            primary={message.name}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  // className={classes.inline}
                  color="textPrimary"
                >
                  {message.text}
                </Typography>
                {/* {" — I'll be in your neighborhood doing errands this…"} */}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </div>
    );
  });
};

export default MessageListItems;
