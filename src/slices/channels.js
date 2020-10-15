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
    },
    setCurrentChannel(state, { payload: { currentChannelId } }) {
      state.currentChannelId = currentChannelId;
    },
  },
});

export const addChannelAsync = ({ name }) => async () => {
  try {
    const url = routes.channelsPath();
    const data = { attributes: { name } };
    await axios.post(url, { data });
  } catch (err) {
    console.log(err);
  }
};

export const {
  addChannels,
  addChannel,
  setCurrentChannel,
} = channelsSlice.actions;

export default channelsSlice.reducer;
