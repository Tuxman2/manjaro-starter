import 'index.scss';

import * as serviceWorker from 'serviceWorker';

import App from 'components/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from 'state/store';
import { ChakraProvider } from "@chakra-ui/react"
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider store={ store }>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
