import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import axios from 'axios';
import App from './App';
import {Provider} from 'react-redux';
import Store from './store';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = 'https://api.github.com/';

ReactDOM.render((
  <Provider store={Store}>
    <App/>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
