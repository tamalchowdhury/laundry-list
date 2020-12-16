import { createStore } from 'redux';

// Have an empty array of cloths as the default state
const defaultState = {
  clothes: [{
    name: "Red Shirt", 
    comment: undefined,
    date: Date.now(),
    image: undefined
  }, {
    name: "Red Shirt", 
    comment: undefined,
    date: Date.now(),
    image: undefined
  },
  {
    name: "Red Shirt", 
    comment: undefined,
    date: Date.now(),
    image: undefined
  },
  {
    name: "Red Shirt", 
    comment: undefined,
    date: Date.now(),
    image: undefined
  },
  {
    name: "Red Shirt", 
    comment: undefined,
    date: Date.now(),
    image: undefined
  },
  {
    name: "Red Shirt", 
    comment: undefined,
    date: Date.now(),
    image: undefined
  },
  {
    name: "Red Shirt", 
    comment: undefined,
    date: Date.now(),
    image: undefined
  }
]
};

// Reducer function that takes a state and an action.
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

/**
 * store is set to createStore() function which takes
 * a reducer function and the default state object
 * as the arguments. I got the createStore() function from
 * redux.
 */
const store = createStore(reducer, defaultState);

export default store;
