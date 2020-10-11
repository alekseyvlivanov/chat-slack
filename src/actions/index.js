import { createAction } from 'redux-actions';

export const addChannels = createAction('CHANNELS_ADD');
export const addMessages = createAction('MESSAGES_ADD');
export const setCurrentChannel = createAction('CURRENT_CHANNEL_SET');
