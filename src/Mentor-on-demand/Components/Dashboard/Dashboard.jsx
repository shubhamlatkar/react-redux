import React, { useEffect, useContext } from "react";
import { Banner } from "../Banner/Banner";
import DashboardContent from "../Dashboard/DashboardContent/DashboardContent";
import { Route } from "react-router";
import MyModal from "./DashboardContent/Modal/MyModal";
import CourseContext from "../../Store/Contexts/CourseContext";
import { Spinner } from "react-bootstrap";
import UserContext from "../../Store/Contexts/UserContext";
import Notifications from "../Notifications/Notifications";
import Trainings from "../Trainings/Trainings";
import GeneralHeader from "../Header/GeneralHeader/GeneralHeader";
import PersonalHeader from "../Header/PersonalHeader/PersonalHeader";
import CourseCreationForm from "../CourceCreation/CourseCreationForm";

const Dashboard = props => {
  const courseContext = useContext(CourseContext);
  const userContext = useContext(UserContext);
  let { courses, getCourses } = courseContext;
  let { tryAutoLogin } = userContext;

  useEffect(() => {
    tryAutoLogin();
  }, [tryAutoLogin]);

  useEffect(() => {
    getCourses();
  }, [getCourses]);

  let displayRoutes = (
    <React.Fragment>
      <GeneralHeader />
      <Banner />
      {courses.length > 0 ? (
        <DashboardContent posts={courses ? courses : []} />
      ) : (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      <Route path="/dashboard/course/:id" component={MyModal} />
    </React.Fragment>
  );

  if (userContext.isAuth) {
    displayRoutes =
      userContext.userState && userContext.userState.type ? (
        <React.Fragment>
          <PersonalHeader />
          <Banner />
          <Route path="/dashboard" exact component={CourseCreationForm} />
          <Route path="/dashboard/notifications" component={Notifications} />
          <Route path="/dashboard/trainings" component={Trainings} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <PersonalHeader />
          <Banner />
          <Route
            path="/dashboard"
            exact
            component={() => {
              return courses.length > 0 ? (
                <DashboardContent posts={courses ? courses : []} />
              ) : (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              );
            }}
          />
          <Route path="/dashboard/course/:id" component={MyModal} />
          <Route path="/dashboard/notifications" component={Notifications} />
          <Route path="/dashboard/trainings" component={Trainings} />
        </React.Fragment>
      );
  }
  return <section className="dashboard">{displayRoutes}</section>;
};

export default Dashboard;
