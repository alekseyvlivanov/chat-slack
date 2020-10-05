// @ts-check

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import gon from 'gon';
import runApp from './runApp.jsx';

import '../assets/application.scss';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

runApp(gon);
