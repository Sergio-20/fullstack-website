import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.js';
import Trending from './components/Trending.js';
import Footer from './components/Footer.js';

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Trending />,
  document.getElementById('trending')
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);
