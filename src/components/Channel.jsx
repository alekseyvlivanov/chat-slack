import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';

const Channel = (props) => {
  const {
    channel,
    currentChannelId,
    handleSetCurrentChannel,
    handleShowRemove,
  } = props;

  const name = `# ${channel.name}`;
  const variant = channel.id === currentChannelId ? 'primary' : 'light';

  if (channel.removable) {
    return (
      <Nav.Item>
        <Dropdown as={ButtonGroup} className="d-flex">
          <Button
            block
            className="flex-grow-1 mb-2 nav-link text-left"
            variant={variant}
            onClick={handleSetCurrentChannel(channel.id)}
          >
            {name}
          </Button>
          <Dropdown.Toggle className="mb-2" split variant={variant} />
          <Dropdown.Menu>
            <Dropdown.Item as="button" onClick={handleShowRemove(channel)}>
              Remove
            </Dropdown.Item>
            <Dropdown.Item as="button">Rename</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    );
  }

  return (
    <Nav.Item>
      <Button
        block
        className="nav-link mb-2 text-left"
        variant={variant}
        onClick={handleSetCurrentChannel(channel.id)}
      >
        {name}
      </Button>
    </Nav.Item>
  );
};

export default Channel;
