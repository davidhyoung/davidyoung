/**
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { HashRouter } from 'react-router-dom';
// app
import App from './App';
// styles
import 'vendor/semantic/dist/semantic.min.css';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render((
  <HashRouter history={history}>
    <App />
  </HashRouter>
), document.getElementById('root'));
