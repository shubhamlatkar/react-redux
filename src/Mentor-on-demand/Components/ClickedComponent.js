import React, { Component } from "react";
import axios from "axios";

class ClickedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  async componentDidMount() {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => {
        this.setState({ data: res.data });
      });
  }

  render() {
    return (
      <div>
        <p>{this.state.data ? this.state.data.email : "Good"}</p>
      </div>
    );
  }
}

export default ClickedComponent;
