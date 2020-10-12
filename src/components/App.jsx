import React from 'react';
import Row from 'react-bootstrap/Row';

import ChannelsList from './ChannelsList';
import MessagesList from './MessagesList';

const App = () => {
  return (
    <Row className="h-100 pb-3">
      <ChannelsList />
      <MessagesList />
    </Row>
  );
};

export default App;
