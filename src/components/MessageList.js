import React, { useState, useEffect } from 'react';
import '../tailwind.css';
import { messagesRef } from '../firebase';
import { List } from '@material-ui/core';
import MessageListItems from './MessageListItems';

// import { useState } from 'react';

const MessageList = ({ className }) => {
  const [messages, setMessages] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNoData, setIsNoData] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    messagesRef
      .orderByKey()
      // .limitToLast(2)
      .on('value', (snapshot) => {
        const message = snapshot.val();
        if (message === null) {
          setIsNoData(true);
          return;
        }
        setIsNoData(false);

        const entries = Object.entries(message);
        const typeModifiedMessage = entries.map((entry) => {
          const [key, nameAndMessageObj] = entry;
          return { key, ...nameAndMessageObj };
        });
        setMessages(typeModifiedMessage);
        setIsLoading(false);
      });
    return () => {
      console.log('cleanUp');
    };
  }, []);
  if (isNoData) {
    return <div className={className}>No Data</div>;
  }
  if (isLoading) {
    return <div className={className}>loading...</div>;
  }
  return (
    // eslint-disable-next-line
    <List className={className} className="overflow-auto">
      <MessageListItems messages={messages} />
    </List>
  );
};

export default MessageList;
