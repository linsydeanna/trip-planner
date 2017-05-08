import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes';
import store from '../store/store';

export default () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
