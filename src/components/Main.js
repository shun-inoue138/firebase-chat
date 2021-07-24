import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//ta const SButton = styled(Button)``
import '../tailwind.css';
import MessageInputField from './MessageInputField';
import MessageList from './MessageList';

const Main = ({ name }) => {
  return (
    <>
      <div className="grid h-screen grid-rows-1 ">
        <MessageList />
        <MessageInputField name={name} />
      </div>
    </>
  );
};

export default Main;
