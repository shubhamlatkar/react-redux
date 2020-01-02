import React, { Component } from "react";


import * as actionCreators from "../src/store/actions/index";

import Styles from "./App.module.css";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  increamentHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  resetHandler = () => {
    this.setState({ counter: 0 });
  };

  decHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <div className={Styles.container}>
          <h3>
            Counter : <strong>{this.props.ctr}</strong>
          </h3>
        </div>
        <div className={Styles.container}>
          <button
            className={Styles.buttonStyles}
            onClick={this.props.onIncCounter}
          >
            Inc
          </button>
          <button
            className={Styles.buttonStyles}
            onClick={this.props.onResetResult}
          >
            Reset
          </button>
          <button
            className={Styles.buttonStyles}
            onClick={this.props.onDecCounter}
          >
            Dec
          </button>
        </div>
        <div className={Styles.container}>
          <button
            className={Styles.buttonStyles}
            onClick={() => this.props.onStoreResult(this.props.ctr)}
          >
            Store
          </button>
        </div>
        <div className={Styles.container}>
          <ul className={Styles.ulStyles}>
            {this.props.result.map(counter => {
              return (
                <li
                  key={counter.id}
                  onClick={() => this.props.onDeleteResult(counter.id)}
                >
                  <strong>{counter.value}</strong>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    result: state.result.result
  };
};

const mapDispatchTOProps = dispatch => {
  return {

    onIncCounter: () => dispatch(actionCreators.increment(10)),
    onDecCounter: () => dispatch(actionCreators.decrement(10)),
    onStoreResult: value => dispatch(actionCreators.storeResult(value)),
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id)),
    onResetResult: () => dispatch(actionCreators.resetResult())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchTOProps
)(App);
