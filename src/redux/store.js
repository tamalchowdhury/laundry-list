import { createStore } from 'redux';

const defaultState = {
  clothes: [
    'Red Jaguars',
    'Blue Barracudas',
    'Purple Parrots',
    'Green Monkeys',
    'Orangy Kuwalas',
    'Silver Snakes'
  ]
};

function reducer(state, action) {
  let { type, name } = action;
  let clothes = [...state.clothes];
  switch (type) {
    case 'CREATE':
      clothes.push(name);
      return {
        clothes
      };
  }
  return state;
}

const store = createStore(reducer, defaultState);

export default store;
