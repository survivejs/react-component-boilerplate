'use strict';

import 'purecss';
import 'highlight.js/styles/github.css';
import 'react-ghfork/gh-fork-ribbon.ie.css';
import 'react-ghfork/gh-fork-ribbon.css';
import './main.css';
import '../style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

main();

function main() {
  var app = document.getElementsByClassName('demonstration')[0];

  ReactDOM.render(<App />, app);
}
