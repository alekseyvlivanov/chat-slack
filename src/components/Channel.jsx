import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { actions } from '../slices/index.js';

const { setCurrentChannel } = actions;

const Channel = (props) => {
  const {
    channel,
    currentChannelId,
    handleShowRemove,
    handleShowRename,
  } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const handleSetCurrentChannel = () => {
    dispatch(setCurrentChannel({ currentChannelId: channel.id }));
  };

  const name = `# ${channel.name}`;
  const variant = channel.id === currentChannelId ? 'primary' : 'light';

  if (channel.removable) {
    return (
      <Nav.Item>
        <Dropdown as={ButtonGroup} className="d-flex">
          <Button
            block
            className="text-break flex-grow-1 mb-2 nav-link text-left"
            variant={variant}
            onClick={handleSetCurrentChannel}
          >
            {name}
          </Button>
          <Dropdown.Toggle className="mb-2" split variant={variant} />
          <Dropdown.Menu>
            <Dropdown.Item as="button" onClick={handleShowRemove}>
              {t('remove')}
            </Dropdown.Item>
            <Dropdown.Item as="button" onClick={handleShowRename}>
              {t('rename')}
            </Dropdown.Item>
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
        onClick={handleSetCurrentChannel}
      >
        {name}
      </Button>
    </Nav.Item>
  );
};

export default Channel;
