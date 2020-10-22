/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes.js';
import { actions as channelsActions } from './channels.js';

const addMessageAsync = createAsyncThunk(
  'messagesInfo/addMessageAsync',
  async ({ currentChannelId, username, text }) => {
    const url = routes.channelMessagesPath(currentChannelId);
    const data = { attributes: { username, text } };
    await axios.post(url, { data });
  },
);

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
    [addMessageAsync.rejected]: () => {
      throw new Error("Can't send message, try again later");
    },
    [channelsActions.removeChannel]: (state, { payload: { id } }) => {
      state.messages = state.messages.filter(
        (message) => message.channelId !== id,
      );
    },
  },
});

export { addMessageAsync };
export const { actions } = messagesSlice;
export default messagesSlice.reducer;
