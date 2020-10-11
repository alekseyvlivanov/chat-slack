import React from 'react';

import ChannelsList from './ChannelsList';
import MessagesList from './MessagesList';

const App = () => {
  return (
    <div className="row h-100 pb-3">
      <ChannelsList />
      <MessagesList />
    </div>
  );
};

export default App;
