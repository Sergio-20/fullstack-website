import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import Trending from './components/Trending.js';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Trending />,
  document.getElementById('trending')
);
