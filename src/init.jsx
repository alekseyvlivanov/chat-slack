import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import io from 'socket.io-client';

import reducer, { actions } from './slices/index.js';
import UserContext from './userContext.js';
import setFakeUserName from './utils.js';

import App from './components/App';

const run = ({ channels, messages, currentChannelId }) => {
  const store = configureStore({ reducer });

  store.dispatch(actions.addChannels({ channels }));
  store.dispatch(actions.addMessages({ messages }));
  store.dispatch(actions.setCurrentChannel({ currentChannelId }));

  const socket = io({ transports: ['websocket'] });

  socket.on('newChannel', ({ data: { attributes } }) => {
    store.dispatch(actions.addChannel({ channel: { ...attributes } }));
  });

  socket.on('removeChannel', ({ data: { id } }) => {
    store.dispatch(actions.removeChannel({ id }));
  });

  socket.on('renameChannel', ({ data: { attributes } }) => {
    store.dispatch(actions.renameChannel({ ...attributes }));
  });

  socket.on('newMessage', ({ data: { attributes } }) => {
    store.dispatch(actions.addMessage({ message: { ...attributes } }));
  });

  ReactDOM.render(
    <Provider store={store}>
      <UserContext.Provider value={setFakeUserName()}>
        <App />
      </UserContext.Provider>
    </Provider>,
    document.querySelector('#chat'),
  );
};

export default run;
