import React from 'react';
import { connect } from 'react-redux';

import Channel from './Channel';

const mapStateToProps = ({ channels, currentChannelId }) => {
  return { channels, currentChannelId };
};

const ChannelsList = (props) => {
  const { channels, currentChannelId } = props;

  return (
    <div className="col-3 border-right">
      <div className="d-flex my-2 px-1">
        <span className="h6 m-0">Channels</span>
        <button className="btn ml-auto p-0" type="button">
          <span className="h6 m-0">+</span>
        </button>
      </div>
      <ul className="nav nav-pills d-flex flex-column">
        {channels.map((channel) => (
          <Channel
            key={channel.id}
            channel={channel}
            currentChannelId={currentChannelId}
          />
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(ChannelsList);