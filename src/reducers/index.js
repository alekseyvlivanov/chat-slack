import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import actions from '../actions/index.js';

const channelsReducer = handleActions(
  {
    [actions.addChannels]: (state, { payload: { channels } }) => [
      ...state,
      ...channels,
    ],
  },
  [],
);

const messagesReducer = handleActions(
  {
    [actions.addMessages]: (state, { payload: { messages } }) => [
      ...state,
      ...messages,
    ],
  },
  [],
);

const currentChannelIdReducer = handleActions(
  {
    [actions.setCurrentChannel]: (state, { payload: { currentChannelId } }) =>
      currentChannelId,
  },
  null,
);

export default combineReducers({
  channels: channelsReducer,
  messages: messagesReducer,
  currentChannelId: currentChannelIdReducer,
});
