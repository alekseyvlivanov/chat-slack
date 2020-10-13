import { combineReducers } from 'redux';

import channelsReducer, { addChannels, setCurrentChannel } from './channels.js';
import messagesReducer, {
  addMessages,
  addMessageSuccess,
  addMessage,
} from './messages.js';

export const actions = {
  addChannels,
  setCurrentChannel,
  addMessages,
  addMessageSuccess,
  addMessage,
};

export const reducer = combineReducers({
  channelsInfo: channelsReducer,
  messagesInfo: messagesReducer,
});
