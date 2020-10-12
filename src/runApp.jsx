import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import actions from './actions/index.js';
import socket from './socket.js';
import store from './store.js';

import App from './components/App';

const runApp = ({ channels, messages, currentChannelId }) => {
  store.dispatch(actions.addChannels({ channels }));
  store.dispatch(actions.addMessages({ messages }));
  store.dispatch(actions.setCurrentChannel({ currentChannelId }));

  socket.on('newChannel', (data) => {
    console.log('newChannel', data);
  });

  socket.on('removeChannel', (data) => {
    console.log('removeChannel', data);
  });

  socket.on('renameChannel', (data) => {
    console.log('renameChannel', data);
  });

  socket.on('newMessage', (data) => {
    console.log('newMessage', data);
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#chat'),
  );
};

export default runApp;
