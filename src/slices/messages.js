/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes.js';
import { actions as channelsActions } from './channels.js';

const messagesSlice = createSlice({
  name: 'messagesInfo',
  initialState: { messages: [] },
  reducers: {
    addMessages(state, { payload: { messages } }) {
      state.messages.push(...messages);
    },
    addMessage(state, { payload: { message } }) {
      state.messages.push(message);
    },
  },
  extraReducers: {
    [channelsActions.removeChannel]: (state, { payload: { id } }) => {
      state.messages = state.messages.filter(
        (message) => message.channelId !== id,
      );
    },
  },
});

const addMessageAsync = ({ currentChannelId, username, text }) => async () => {
  try {
    const url = routes.channelMessagesPath(currentChannelId);
    const data = { attributes: { username, text } };
    await axios.post(url, { data });
  } catch (err) {
    console.log(err);
  }
};

export { addMessageAsync };
export const { actions } = messagesSlice;
export default messagesSlice.reducer;
