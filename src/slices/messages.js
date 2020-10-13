/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes.js';

export const addMessage = ({
  currentChannelId,
  username,
  text,
}) => async () => {
  const url = routes.channelMessagesPath(currentChannelId);
  const data = { attributes: { username, text } };
  await axios.post(url, { data });
};

const messagesSlice = createSlice({
  name: 'messagesInfo',
  initialState: { messages: [] },
  reducers: {
    addMessages(state, { payload: { messages } }) {
      state.messages.push(...messages);
    },
    addMessageSuccess(state, { payload: { message } }) {
      state.messages.push(message);
    },
  },
});

export const { addMessages, addMessageSuccess } = messagesSlice.actions;

export default messagesSlice.reducer;
