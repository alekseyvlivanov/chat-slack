import { combineReducers } from 'redux';

import channelsReducer, {
  addChannels,
  addChannel,
  removeChannel,
  renameChannel,
  setCurrentChannel,
  addChannelAsync,
  removeChannelAsync,
  renameChannelAsync,
} from './channels.js';

import messagesReducer, {
  addMessages,
  addMessage,
  addMessageAsync,
} from './messages.js';

export const actions = {
  addChannels,
  addChannel,
  removeChannel,
  renameChannel,
  setCurrentChannel,
  addChannelAsync,
  addMessages,
  addMessage,
  addMessageAsync,
  removeChannelAsync,
  renameChannelAsync,
};

export const reducer = combineReducers({
  channelsInfo: channelsReducer,
  messagesInfo: messagesReducer,
});
