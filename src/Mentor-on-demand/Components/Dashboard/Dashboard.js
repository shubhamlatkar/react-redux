import React, { useEffect, useContext } from "react";
import { Banner } from "../Banner/Banner";
import { DashboardHeader } from "../Dashboard/DashboardHeader/DashboardHeader";
import DashboardContent from "../Dashboard/DashboardContent/DashboardContent";
import { Route } from "react-router";
import MyModal from "./DashboardContent/Modal/MyModal";
import CourseContext from "../../Store/Contexts/CourseContext";
import { Spinner } from "react-bootstrap";

const Dashboard = props => {
  const courseContext = useContext(CourseContext);
  let { courses, getCourses } = courseContext;

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  let spinner = (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
  return (
    <section className="dashboard">
      <DashboardHeader />
      <Banner />
      <DashboardContent posts={courses ? courses.slice(0, 10) : spinner} />
      <Route path="/dashboard/course/:id" component={MyModal} />
    </section>
  );
};

export default Dashboard;
