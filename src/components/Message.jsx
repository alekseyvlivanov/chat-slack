import React from 'react';

const Message = (props) => {
  const {
    message: { username, text },
  } = props;

  return (
    <div>
      <span className="font-weight-bolder">{username}</span>
      <span>: </span>
      <span>{text}</span>
    </div>
  );
};

export default Message;
