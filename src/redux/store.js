import { createStore } from 'redux';

const defaultState = {
  clothes: {}
};

function reducer() {
  return {
    clothes: {}
  };
}

const store = createStore(reducer, defaultState);

export default store;
