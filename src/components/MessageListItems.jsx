import React, { useRef } from 'react';
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
  const messagesLength = messages.length;
  let isLastItem = false;
  const ref = useRef(null);
  React.useEffect(() => {
    if (isLastItem) {
      ref.current.scrollIntoView();
    }
    // eslint-disable-next-line
  }, [isLastItem]);

  return messages.map((message, index) => {
    if (index + 1 === messagesLength) {
      isLastItem = true;
    }
    return (
      <div key={message.key} ref={ref}>
        {console.log(isLastItem)}
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
