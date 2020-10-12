import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';

import Channel from './Channel';

const mapStateToProps = ({ channels, currentChannelId }) => {
  return { channels, currentChannelId };
};

const ChannelsList = (props) => {
  const { channels, currentChannelId } = props;

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
          />
        ))}
      </Nav>
    </Col>
  );
};

export default connect(mapStateToProps)(ChannelsList);
