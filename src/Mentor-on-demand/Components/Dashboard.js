import React, { Component } from "react";
import { Banner } from "./Banner";
import { DashboardHeader } from "./DashboardHeader";
import Validation from "./Validation";
import Table from "./Table";
import DashboardContent from "./DashboardContent";
import Footer from "./Footer";
import axios from "axios";
import ClickedComponent from "./ClickedComponent";
import { Route } from "react-router-dom";

export const Greet = props => (
  <h1>
    my name is {props.name} {props.lastname} {props.children}
  </h1>
);

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      msg: "",
      posts: [],
      userInput: "shubham",
      users: [],
      dataNotAvaliable: false
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.changeUserDataHandler = this.changeUserDataHandler.bind(this);
    this.deleteUserHandler = this.deleteUserHandler.bind(this);
  }
  async componentDidMount() {
    await axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        this.setState({ posts: [...res.data] });
      })
      .catch(error => {
        console.log(error);
      });
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        this.setState({ users: [...res.data] });
      })
      .catch(error => {
        this.setState({ dataNotAvaliable: true });
      });
  }
  changeMessage() {}

  clickHandler() {
    this.setState((prevState, props) => ({
      msg: "you have subscribed",
      count: prevState.count + 1
    }));
  }

  userInputHandler = event => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharacterHandler = index => {
    const temString = [...this.state.userInput];
    temString.splice(index, 1);
    this.setState({ userInput: temString.join("") });
  };

  deleteUserHandler(userId) {
    let temUsers = [...this.state.users];
    let userIndex = temUsers.findIndex(tem => tem.id === userId);
    temUsers.splice(userIndex, 1);
    this.setState({
      users: temUsers
    });
  }

  changeUserDataHandler(user) {
    let foundIndex = this.state.users.findIndex(
      temUser => temUser.id === user.id
    );
    let temUsers = [...this.state.users];
    temUsers[foundIndex] = user;
    this.setState({
      users: temUsers
    });
  }

  render() {
    const charList = [...this.state.userInput].map((ch, index) => {
      return (
        <Validation
          key={index}
          string={ch}
          clicked={() => this.deleteCharacterHandler(index)}
        />
      );
    });
    let table =
      this.state.users.length > 0 ? (
        <Table
          MyUsers={this.state.users}
          updateUser={this.changeUserDataHandler}
          deleteUser={this.deleteUserHandler}
        />
      ) : (
        <h1>loading</h1>
      );
    return (
      <section className="dashboard">
        <DashboardHeader />
        <Banner username={this.state.posts ? this.state.posts[0] : "Guest"} />
        <DashboardContent
          posts={this.state.posts ? this.state.posts.slice(1, 10) : []}
        />
        <input
          type="text"
          onChange={this.userInputHandler}
          value={this.state.userInput}
        />
        <h3>{this.state.userInput}</h3>
        {charList}
        {this.state.dataNotAvaliable ? <h1>Error</h1> : table}
        <Route path="/dashboard/:id" component={ClickedComponent} />
        {/* <h1>
          {this.state.msg} {this.state.count}
        </h1>
        <input
          type="text"
          id="name"
          placeholder="search"
          onChange={e => this.props.clickHandler(e.target.value)}
        />
        <button onClick={this.clickHandler}>Subscribe</button>
        <User />
        <List /> */}
        <Footer />
      </section>
    );
  }
}

export default Dashboard;
