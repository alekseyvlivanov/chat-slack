import React, { useContext } from 'react';

import ChannelsList from './ChannelsList';
import MessagesList from './MessagesList';

import { UserContext } from '../utils/index.js';

const App = () => {
  const username = useContext(UserContext);
  console.log(username);

  return (
    <div className="row h-100 pb-3">
      <ChannelsList />
      <MessagesList />
    </div>
  );
};

export default App;
