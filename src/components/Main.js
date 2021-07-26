import React from 'react';
import { styled as st } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//ta const SButton = styled(Button)``
import '../tailwind.css';
import MessageInputField from './MessageInputField';
import MessageList from './MessageList';
import styled from 'styled-components';

const SDiv = styled.div`
  /* background-color: gray; */
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100vh;
`;

const Main = ({ name }) => {
  return (
    <>
      <SDiv>
        <MessageList className="row-span-1 " />
        <MessageInputField name={name} className="row-span-2" />
      </SDiv>
    </>
  );
};

export default Main;
