import { createAction } from 'redux-actions';

const addChannels = createAction('CHANNELS_ADD');
const addMessages = createAction('MESSAGES_ADD');
const setCurrentChannel = createAction('CURRENT_CHANNEL_SET');

const actions = { addChannels, addMessages, setCurrentChannel };

export default actions;
