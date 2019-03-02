import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout/Layout';
import Single from './components/Single/Single';
import './styles/main.css';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Laundry List</h1>
      <Layout />
      <Single />
    </Provider>
  );
};

export default App;
