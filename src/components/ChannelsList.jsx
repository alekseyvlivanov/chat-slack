import React from 'react';
import { connect } from 'react-redux';

import Channel from './Channel';

const mapStateToProps = ({ channels, currentChannelId }) => {
  return { channels, currentChannelId };
};

const ChannelsList = (props) => {
  const { channels, currentChannelId } = props;

  return (
    <div className="col-3 d-flex flex-column h-100 border-right">
      <div className="d-flex pt-2 pb-1 px-1">
        <span className="h6 m-0">Channels</span>
        <button className="btn btn-sm ml-auto my-0 p-0" type="button">
          <span className="h6 m-0 p-0">+</span>
        </button>
      </div>
      <ul className="nav nav-pills mt-1 d-flex flex-column">
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
