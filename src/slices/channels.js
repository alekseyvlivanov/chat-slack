/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import routes from '../routes.js';

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
});

const addChannelAsync = ({ name }) => async () => {
  try {
    const url = routes.channelsPath();
    const data = { attributes: { name } };
    await axios.post(url, { data });
  } catch (err) {
    console.log(err);
  }
};

const removeChannelAsync = ({ id }) => async () => {
  try {
    const url = routes.channelPath(id);
    await axios.delete(url);
  } catch (err) {
    console.log(err);
  }
};

const renameChannelAsync = ({ id, name }) => async () => {
  try {
    const url = routes.channelPath(id);
    const data = { attributes: { name } };
    await axios.patch(url, { data });
  } catch (err) {
    console.log(err);
  }
};

export { addChannelAsync, removeChannelAsync, renameChannelAsync };
export const { actions } = channelsSlice;
export default channelsSlice.reducer;
