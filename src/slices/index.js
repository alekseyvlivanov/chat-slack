import { combineReducers } from 'redux';

import channelsReducer, { addChannels, setCurrentChannel } from './channels.js';
import messagesReducer, {
  addMessages,
  addMessage,
  addMessageAsync,
} from './messages.js';

export const actions = {
  addChannels,
  setCurrentChannel,
  addMessages,
  addMessage,
  addMessageAsync,
};

export const reducer = combineReducers({
  channelsInfo: channelsReducer,
  messagesInfo: messagesReducer,
});
