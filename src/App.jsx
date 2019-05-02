import React from 'react';
import { Provider, connect } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout/Layout';
import './styles/main.css';

const App = (props) => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};

export default App;
