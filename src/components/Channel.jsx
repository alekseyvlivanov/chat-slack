import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Channel = (props) => {
  const { channel, currentChannelId } = props;

  const active = channel.id === currentChannelId;
  const name = `# ${channel.name}`;
  const variant = active ? 'primary' : 'light';

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
