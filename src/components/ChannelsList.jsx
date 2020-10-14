import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../slices/index.js';

import Channel from './Channel';

const { setCurrentChannel } = actions;

const ChannelsList = () => {
  const dispatch = useDispatch();
  const { channels, currentChannelId } = useSelector(
    (state) => state.channelsInfo,
  );

  const handleSetCurrentChannel = (channelId) => () => {
    dispatch(setCurrentChannel({ currentChannelId: channelId }));
  };

  return (
    <Col xs="3" className="d-flex flex-column h-100 border-right">
      <div className="d-flex pt-2 pb-1 px-1">
        <span className="h6 m-0">Channels</span>
        <Button variant size="sm" className="ml-auto my-0 p-0">
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
  );
};

export default ChannelsList;
