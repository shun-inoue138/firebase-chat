import React from 'react';
import SignIn from './SignIn';
import { useState } from 'react';
import Main from './Main';

export default () => {
  const [name, setName] = useState('');
  console.log(name);
  if (name === '') {
    return <SignIn setName={setName} name={name} />;
  } else {
    return <Main name={name} />;
  }
};
