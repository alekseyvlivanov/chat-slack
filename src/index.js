import 'core-js/stable';
import 'regenerator-runtime/runtime';

import gon from 'gon';

import run from './init.jsx';

import '../assets/application.scss';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

run(gon);
