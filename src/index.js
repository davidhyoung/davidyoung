/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
// app
import App from './App';
// styles
import 'vendor/semantic/dist/semantic.min.css';
import './index.css';

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));
