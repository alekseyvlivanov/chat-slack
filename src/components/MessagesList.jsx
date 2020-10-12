import React, { useContext } from 'react';
import { connect } from 'react-redux';

import Message from './Message';
import MessageForm from './MessageForm';

import UserContext from '../userContext.js';

const mapStateToProps = ({ messages }) => {
  return { messages };
};

const MessagesList = (props) => {
  const { messages } = props;
  const username = useContext(UserContext);

  return (
    <div className="col d-flex flex-column h-100">
      <div className="d-flex py-2 px-1 border-bottom">
        <span className="h6 m-0">{username}</span>
      </div>
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
