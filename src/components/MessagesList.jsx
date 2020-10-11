import React from 'react';
import { connect } from 'react-redux';

import Message from './Message';
import MessageForm from './MessageForm';

const mapStateToProps = ({ messages }) => {
  return { messages };
};

const MessagesList = (props) => {
  const { messages } = props;

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

export default connect(mapStateToProps)(MessagesList);
