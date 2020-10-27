/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes.js';

const addChannelAsync = createAsyncThunk(
  'channelsInfo/addChannelAsync',
  async ({ name }) => {
    const url = routes.channelsPath();
    const data = { attributes: { name } };
    await axios.post(url, { data });
  },
);

const removeChannelAsync = createAsyncThunk(
  'channelsInfo/removeChannelAsync',
  async ({ id }) => {
    const url = routes.channelPath(id);
    await axios.delete(url);
  },
);

const renameChannelAsync = createAsyncThunk(
  'channelsInfo/renameChannelAsync',
  async ({ id, name }) => {
    const url = routes.channelPath(id);
    const data = { attributes: { name } };
    await axios.patch(url, { data });
  },
);

const channelsSlice = createSlice({
  name: 'channelsInfo',
  initialState: {
    channels: [],
    currentChannelId: null,
  },
  reducers: {
    addChannels(state, { payload: { channels } }) {
      state.channels.push(...channels);
    },
    addChannel(state, { payload: { channel } }) {
      state.channels.push(channel);
      state.currentChannelId = channel.id;
    },
    removeChannel(state, { payload: { id } }) {
      state.channels = state.channels.filter((channel) => channel.id !== id);
      state.currentChannelId = state.channels[0].id;
    },
    renameChannel(state, { payload: { id, name } }) {
      state.channels.find((channel) => channel.id === id).name = name;
    },
    setCurrentChannel(state, { payload: { currentChannelId } }) {
      state.currentChannelId = currentChannelId;
    },
  },
  extraReducers: {
    [addChannelAsync.rejected]: () => {
      throw new Error('cantAddChannel');
    },
    [removeChannelAsync.rejected]: () => {
      throw new Error('cantRemoveChannel');
    },
    [renameChannelAsync.rejected]: () => {
      throw new Error('cantRenameChannel');
    },
  },
});

export { addChannelAsync, removeChannelAsync, renameChannelAsync };
export const { actions } = channelsSlice;
export default channelsSlice.reducer;
