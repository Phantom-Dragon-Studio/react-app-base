import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import reportWebVitals from './reportWebVitals';
import App from './App';

library.add(fab, faCog);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
