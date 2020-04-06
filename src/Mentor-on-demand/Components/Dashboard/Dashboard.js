import React, { Component } from "react";
import { Banner } from "../Banner/Banner";
import { DashboardHeader } from "../Dashboard/DashboardHeader/DashboardHeader";
import DashboardContent from "../Dashboard/DashboardContent/DashboardContent";
import axios from "axios";
import { Route } from "react-router";
import MyModal from "./DashboardContent/Modal/MyModal";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        this.setState({ posts: [...res.data] });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <section className="dashboard">
        <DashboardHeader />
        <Banner username={this.state.posts ? this.state.posts[0] : "Guest"} />
        <DashboardContent
          posts={this.state.posts ? this.state.posts.slice(1, 10) : []}
        />
        <Route path="/dashboard/course/:id" component={MyModal} />
      </section>
    );
  }
}

export default Dashboard;
