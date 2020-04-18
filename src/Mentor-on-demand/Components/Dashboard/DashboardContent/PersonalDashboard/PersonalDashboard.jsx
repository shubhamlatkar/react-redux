import React, { useEffect, useContext } from "react";
import { Container, Spinner } from "react-bootstrap";
import "./PersonalDashboard.css";
import Notifications from "../../../Notifications/Notifications";
import { Route } from "react-router-dom";
import Trainings from "../../../Trainings/Trainings";
import DashboardContent from "../DashboardContent";
import CourseContext from "../../../../Store/Contexts/CourseContext";
import MyModal from "../Modal/MyModal";

const PersonalDashboard = props => {
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
    <React.Fragment>
      <Container className="Notifications">
        <Route
          path="/dashboard/peronal/notifications"
          component={Notifications}
        />
        <Route path="/dashboard/peronal/trainings" component={Trainings} />
        <Route
          path="/dashboard/peronal"
          component={() => (
            <DashboardContent posts={courses ? courses : spinner} />
          )}
        />
        <Route path="/dashboard/peronal/course/:id" component={MyModal} />
      </Container>
    </React.Fragment>
  );
};

export default PersonalDashboard;
