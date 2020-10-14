import React, { useContext, useEffect, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import Message from './Message';
import MessageForm from './MessageForm';

import UserContext from '../userContext.js';

const selectCurrentChannelId = ({ channelsInfo: { currentChannelId } }) =>
  currentChannelId;
const selectMessages = ({ messagesInfo: { messages } }) => messages;
const selectFilteredMessages = createSelector(
  [selectCurrentChannelId, selectMessages],
  (currentChannelId, messages) =>
    messages.filter((message) => message.channelId === currentChannelId),
);

const MessagesList = () => {
  const messages = useSelector((state) => selectFilteredMessages(state));

  const ref = useRef();
  const username = useContext(UserContext);

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Col className="d-flex flex-column h-100">
      <div className="d-flex justify-content-center py-2 px-1 border-bottom">
        <span className="h6 m-0">{username}</span>
      </div>
      <div className="flex-grow-1 my-3 overflow-auto">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={ref} />
      </div>
      <MessageForm />
    </Col>
  );
};

export default MessagesList;
