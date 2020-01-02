import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import "./styles.css";
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


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
