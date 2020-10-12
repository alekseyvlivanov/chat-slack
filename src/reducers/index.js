import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import * as actions from '../actions/index.js';

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
    [actions.addMessageSuccess]: (state, { payload: { message } }) => {
      return [...state, message];
    },
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
