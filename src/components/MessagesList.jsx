import React, { useContext } from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

import Message from './Message';
import MessageForm from './MessageForm';

import UserContext from '../userContext.js';

const mapStateToProps = ({ messages, currentChannelId }) => {
  return {
    messages: messages.filter(
      (message) => message.channelId === currentChannelId,
    ),
  };
};

const MessagesList = (props) => {
  const { messages } = props;
  const username = useContext(UserContext);

  return (
    <Col className="d-flex flex-column h-100">
      <div className="d-flex justify-content-center py-2 px-1 border-bottom">
        <span className="h6 m-0">{username}</span>
      </div>
      <div className="flex-grow-1 my-3 overflow-auto">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <MessageForm />
    </Col>
  );
};

export default connect(mapStateToProps)(MessagesList);
