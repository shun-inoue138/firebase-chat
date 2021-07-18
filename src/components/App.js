import React from 'react';
import SignIn from './SignIn';
import { useState } from 'react';

export default () => {
  const [name, setName] = useState('');
  console.log(name);
  return <SignIn setName={setName} />;
};
