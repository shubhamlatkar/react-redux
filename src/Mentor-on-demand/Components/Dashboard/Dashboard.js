import React, { Component, useEffect, useState, useContext } from "react";
import { Banner } from "../Banner/Banner";
import { DashboardHeader } from "../Dashboard/DashboardHeader/DashboardHeader";
import DashboardContent from "../Dashboard/DashboardContent/DashboardContent";
import axios from "axios";
import { Route } from "react-router";
import MyModal from "./DashboardContent/Modal/MyModal";
import CourseContext from "../../Store/Contexts/CourseContext";

const Dashboard = props => {
  const [posts, setPosts] = useState([]);
  const courseContext = useContext(CourseContext);

  // componentDidMount() {
  // }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(res => {
        setPosts({ posts: [...res.data] });
      })
      .catch(error => {
        console.log(error);
      });
    courseContext.getCourses(null);
  }, []);

  useEffect(() => {
    console.log("courseContext.courses", courseContext.cources);
  });

  return (
    <section className="dashboard">
      <DashboardHeader />
      <Banner />
      <DashboardContent posts={[]} />
      <Route path="/dashboard/course/:id" component={MyModal} />
    </section>
  );
};

export default Dashboard;
