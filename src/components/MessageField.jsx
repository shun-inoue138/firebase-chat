import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { pushMessage } from '../firebase';

const MessageField = ({ name, text, setText }) => {
  const [isComposing, setIsComposing] = useState(false);
  return (
    <div>
      <form action="">
        <TextField
          fullWidth
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onCompositionStart={() => {
            setIsComposing(true);
          }}
          onCompositionEnd={() => {
            setIsComposing(false);
          }}
          onKeyDown={(e) => {
            if (isComposing) {
              return;
            }
            const text = e.target.value;
            if (text === '') {
              return;
            }
            if (e.key === 'Enter') {
              pushMessage({ name: 'やまだ', text });
              setText('');
              e.preventDefault();
            }
          }}
        />
      </form>
    </div>
  );
};

export default MessageField;
