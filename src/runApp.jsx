/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import {
  addChannels,
  addMessages,
  setCurrentChannel,
} from './actions/index.js';
import reducers from './reducers/index.js';

import App from './components/App';

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

const store = createStore(
  reducers,
  compose(applyMiddleware(thunk), devtoolMiddleware),
);

const runApp = ({ channels, messages, currentChannelId }) => {
  store.dispatch(addChannels({ channels }));
  store.dispatch(addMessages({ messages }));
  store.dispatch(setCurrentChannel({ currentChannelId }));

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#chat'),
  );
};

export default runApp;
