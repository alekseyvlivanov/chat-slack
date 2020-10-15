import { combineReducers } from 'redux';

import channelsReducer, {
  addChannels,
  addChannel,
  setCurrentChannel,
  addChannelAsync,
} from './channels.js';
import messagesReducer, {
  addMessages,
  addMessage,
  addMessageAsync,
} from './messages.js';

export const actions = {
  addChannels,
  addChannel,
  setCurrentChannel,
  addChannelAsync,
  addMessages,
  addMessage,
  addMessageAsync,
};

export const reducer = combineReducers({
  channelsInfo: channelsReducer,
  messagesInfo: messagesReducer,
});
