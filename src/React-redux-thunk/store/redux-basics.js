const redux = require("redux");
const createStore = redux.createStore;

const initState = {
  counter: 0
};

const rootreducer = (state = initState, action) => {
  return state;
};

const store = createStore(rootreducer);
console.log(store.getState());
