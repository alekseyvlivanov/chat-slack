import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const runApp = (gon) => {
  ReactDOM.render(<App gon={gon} />, document.querySelector('#chat'));
};

export default runApp;
