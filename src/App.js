import React, { Component } from "react";

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
          <button className={Styles.buttonStyles} onClick={this.resetHandler}>
            Reset
          </button>
          <button
            className={Styles.buttonStyles}
            onClick={this.props.onDecCounter}
          >
            Dec
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};

const mapDispatchTOProps = dispatch => {
  return {
    onIncCounter: () => dispatch({ type: "INCREMENT", val: 10 }),
    onDecCounter: () => dispatch({ type: "DECREMENT", val: 10 })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchTOProps
)(App);
