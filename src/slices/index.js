import { combineReducers } from 'redux';

import channelsReducer, {
  actions as channelsActions,
  addChannelAsync,
  removeChannelAsync,
  renameChannelAsync,
} from './channels.js';

import messagesReducer, {
  actions as messagesActions,
  addMessageAsync,
} from './messages.js';

const actions = {
  ...channelsActions,
  ...messagesActions,
};

const asyncActions = {
  addChannelAsync,
  removeChannelAsync,
  renameChannelAsync,
  addMessageAsync,
};

const reducer = combineReducers({
  channelsInfo: channelsReducer,
  messagesInfo: messagesReducer,
});

export { actions, asyncActions };
export default reducer;
