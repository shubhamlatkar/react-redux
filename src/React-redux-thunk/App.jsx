import React from "react";
import MyApp from "./MyApp";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";

const rootReducer = combineReducers({
  ctr: counterReducer,
  result: resultReducer
});

const logger = store => next => action => {
  console.log("[Middleware] DIspatching", action);
  const result = next(action);
  console.log("[Middlewawre]  next state", store.getState());
  return result;
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const App = props => {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
};
export default App;
