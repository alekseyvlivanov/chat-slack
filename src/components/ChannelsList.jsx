import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../slices/index.js';

import Channel from './Channel';
import getModal from './modals/index.js';

const { addChannelAsync, setCurrentChannel } = actions;

const ChannelsList = () => {
  const dispatch = useDispatch();
  const { channels, currentChannelId } = useSelector(
    (state) => state.channelsInfo,
  );

  const Add = getModal('adding');
  // const Remove = getModal('removing');
  // const Rename = getModal('renaming');

  const [showAdd, setShowAdd] = useState(false);
  // const [showRemove, setShowRemove] = useState(false);
  // const [showRename, setShowRename] = useState(false);

  const handleShowAdd = () => {
    setShowAdd(true);
  };

  const handleCloseAdd = () => {
    setShowAdd(false);
  };

  const handleSubmitAdd = ({ name }) => {
    dispatch(addChannelAsync({ name }));
    setShowAdd(false);
  };

  const handleSetCurrentChannel = (channelId) => () => {
    dispatch(setCurrentChannel({ currentChannelId: channelId }));
  };

  return (
    <>
      <Col xs="3" className="d-flex flex-column h-100 border-right">
        <div className="d-flex pt-2 pb-1 px-1">
          <span className="h6 m-0">Channels</span>
          <Button
            variant
            size="sm"
            className="ml-auto my-0 p-0"
            onClick={handleShowAdd}
          >
            <span className="h6 m-0 p-0">+</span>
          </Button>
        </div>
        <Nav variant="pills" className="mt-1 d-flex flex-column">
          {channels.map((channel) => (
            <Channel
              key={channel.id}
              channel={channel}
              currentChannelId={currentChannelId}
              handleSetCurrentChannel={handleSetCurrentChannel}
            />
          ))}
        </Nav>
      </Col>
      <Add
        show={showAdd}
        handleHide={handleCloseAdd}
        handleSubmit={handleSubmitAdd}
      />
      {/* <Remove
        show={showRemove}
        handleHide={handleCloseRemove}
        handleSubmit={handleSubmitRemove}
      />
      <Rename
        show={showRename}
        handleHide={handleCloseRename}
        handleSubmit={handleSubmitRename}
      /> */}
    </>
  );
};

export default ChannelsList;
