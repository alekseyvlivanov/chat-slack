import React from 'react';

const Message = (props) => {
  const { message } = props;

  return (
    <div>
      <span className="font-weight-bolder">{message.username}</span>
      <span>: </span>
      <span className="text-break">{message.text}</span>
    </div>
  );
};

export default Message;
