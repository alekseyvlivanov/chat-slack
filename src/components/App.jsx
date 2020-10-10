import React from 'react';

import ChannelsList from './ChannelsList';
import MessagesList from './MessagesList';

const App = (props) => {
  const {
    gon: { channels, currentChannelId, messages },
  } = props;

  return (
    <div className="row h-100 pb-3">
      <ChannelsList channels={channels} currentChannelId={currentChannelId} />
      <MessagesList messages={messages} />
    </div>
  );
};

export default App;
