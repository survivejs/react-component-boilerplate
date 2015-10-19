'use strict';

import 'purecss';
import 'highlight.js/styles/github.css';
import 'react-ghfork/gh-fork-ribbon.ie.css';
import 'react-ghfork/gh-fork-ribbon.css';
import './main.css';
import '../style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

main();

function main() {
  const app = document.getElementsByClassName('demonstration')[0];

  ReactDOM.render(<App />, app);
}
