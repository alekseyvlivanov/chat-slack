/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

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
    setCurrentChannel(state, { payload: { currentChannelId } }) {
      state.currentChannelId = currentChannelId;
    },
  },
});

export const { addChannels, setCurrentChannel } = channelsSlice.actions;

export default channelsSlice.reducer;
