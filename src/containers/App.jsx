import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes';
import store from '../store/store';
import { logUserIn } from '../actions/actions';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
