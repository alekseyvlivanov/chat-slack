/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes.js';

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
});

export const { addMessages, addMessage } = messagesSlice.actions;

export const addMessageAsync = ({
  currentChannelId,
  username,
  text,
}) => async () => {
  try {
    const url = routes.channelMessagesPath(currentChannelId);
    const data = { attributes: { username, text } };
    await axios.post(url, { data });
  } catch (err) {
    console.log(err);
  }
};

export default messagesSlice.reducer;
