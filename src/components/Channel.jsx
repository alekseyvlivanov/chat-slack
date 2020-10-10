import React from 'react';
import cn from 'classnames';

const Channel = (props) => {
  const { channel, currentChannelId } = props;
  const btnClass = cn({
    'nav-link btn btn-block mb-2 text-left': true,
    'btn-primary': channel.id === currentChannelId,
    'btn-light': channel.id !== currentChannelId,
    active: channel.id === currentChannelId,
  });
  const name = `# ${channel.name}`;

  return (
    <li className="nav-item">
      <button type="button" className={btnClass}>
        {name}
      </button>
    </li>
  );
};

export default Channel;
