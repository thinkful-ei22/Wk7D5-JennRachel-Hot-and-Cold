import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import './reset.css';
import './index.css';

import Game from './components/game';

console.log(store.getState());
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
