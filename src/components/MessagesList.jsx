import React from 'react';

import Message from './Message';
import MessageForm from './MessageForm';

const MessagesList = (props) => {
  const { messages } = props;
  console.log('messages', messages);

  return (
    <div className="col d-flex flex-column h-100">
      <div className="flex-grow-1">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <MessageForm />
    </div>
  );
};

export default MessagesList;
