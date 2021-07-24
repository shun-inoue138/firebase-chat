import React from 'react';
import SignIn from './SignIn';
import { useState } from 'react';
import Main from './Main';
import config from '../config.json';

console.log(config);
export default () => {
  const [name, setName] = useState('');
  console.log(name);
  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} name={name} />;
  } else {
    return <Main name={name} />;
  }
};
