import React, {StrictMode} from 'react';
import { ReactQueryDevtools } from "react-query-devtools";
import {QueryCache, ReactQueryCacheProvider } from "react-query";
import ReactDOM from 'react-dom';
import { App } from "./App";
import "./css/main.scss";

const queryCache = new QueryCache();

ReactDOM.render(
  <StrictMode>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <ReactQueryDevtools initialIsOpen />
      <App />
    </ReactQueryCacheProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
