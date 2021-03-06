import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';


import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { StoreProvider } from './app/context/StoreContext';

export const history =  createBrowserHistory();




ReactDOM.render(
  
  /*react strict mode simply tells us if we are doing anything against reacts best practices */
  <React.StrictMode>
    <HistoryRouter history={history}>
    <StoreProvider>
      <App />
    </StoreProvider>
    </HistoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
