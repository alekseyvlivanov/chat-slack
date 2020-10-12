import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Channel = (props) => {
  const { channel, currentChannelId } = props;
  const active = channel.id === currentChannelId;
  const variant = active ? 'primary' : 'light';
  const name = `# ${channel.name}`;

  return (
    <Nav.Item>
      <Button
        active={active}
        variant={variant}
        block
        className="nav-link mb-2 text-left"
      >
        {name}
      </Button>
    </Nav.Item>
  );
};

export default Channel;
