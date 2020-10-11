import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import {
  addChannels,
  addMessages,
  setCurrentChannel,
} from '../actions/index.js';

const channelsReducer = handleActions(
  {
    [addChannels]: (state, { payload: { channels } }) => [
      ...state,
      ...channels,
    ],
  },
  [],
);

const messagesReducer = handleActions(
  {
    [addMessages]: (state, { payload: { messages } }) => [
      ...state,
      ...messages,
    ],
  },
  [],
);

const currentChannelIdReducer = handleActions(
  {
    [setCurrentChannel]: (state, { payload: { currentChannelId } }) =>
      currentChannelId,
  },
  null,
);

export default combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  currentChannelId: currentChannelIdReducer,
});
