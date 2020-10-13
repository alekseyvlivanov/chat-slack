import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { actions } from './slices/index.js';
import socket from './socket.js';
import store from './store.js';

import App from './components/App';

const runApp = ({ channels, messages, currentChannelId }) => {
  store.dispatch(actions.addChannels({ channels }));
  store.dispatch(actions.addMessages({ messages }));
  store.dispatch(actions.setCurrentChannel({ currentChannelId }));

  socket.on('newChannel', ({ data: { attributes } }) => {
    console.log('newChannel', attributes);
  });

  socket.on('removeChannel', ({ data: { attributes } }) => {
    console.log('removeChannel', attributes);
  });

  socket.on('renameChannel', ({ data: { attributes } }) => {
    console.log('renameChannel', attributes);
  });

  socket.on('newMessage', ({ data: { attributes } }) => {
    store.dispatch(actions.addMessageSuccess({ message: { ...attributes } }));
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#chat'),
  );
};

export default runApp;
