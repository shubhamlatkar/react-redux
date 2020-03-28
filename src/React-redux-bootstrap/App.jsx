import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import userReducer from "./store/reducer";
import saveCardsReducer from "./store/saveCardsReducer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const rootReducer = combineReducers({ userReducer, saveCardsReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Dashboard />
          <Footer />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
