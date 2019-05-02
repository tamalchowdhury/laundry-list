import { createStore } from 'redux';

const defaultState = {
  clothes: []
};

function reducer(state, action) {
  let { type, item } = action;
  let clothes = [...state.clothes];
  switch (type) {
    case 'CREATE':
      clothes.push(item);
      return {
        clothes
      };
  }
  return state;
}

const store = createStore(reducer, defaultState);

export default store;
