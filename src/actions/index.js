import axios from 'axios';
import { createAction } from 'redux-actions';

import routes from '../routes.js';

export const addChannels = createAction('CHANNELS_ADD');
export const addMessages = createAction('MESSAGES_ADD');
export const setCurrentChannel = createAction('CURRENT_CHANNEL_SET');

export const addMessageSuccess = createAction('MESSAGE_ADD_SUCCESS');

export const addMessage = ({
  currentChannelId,
  username,
  text,
}) => async () => {
  const url = routes.channelMessagesPath(currentChannelId);
  const data = { attributes: { username, text } };
  await axios.post(url, { data });
};
