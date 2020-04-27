import React, { useContext, useEffect } from "react";
import CurrentTrainings from "./CurrentTrainings/CurrentTrainings";
import CompletedTrainings from "./CompletedTrainings/CompletedTrainings";
import CourseContext from "../../Store/Contexts/CourseContext";
import UserContext from "../../Store/Contexts/UserContext";
import { Spinner } from "react-bootstrap";

const Trainings = props => {
  const courseContext = useContext(CourseContext);
  let { getMyCourses, courseState } = courseContext;
  let { myCourses, isLoading } = courseState;
  const userContext = useContext(UserContext);
  let { userState } = userContext;

  useEffect(() => {
    if (userState) getMyCourses();
  }, [userState, getMyCourses]);

  let diplayCurrentTrainings = !isLoading ? (
    myCourses.map(course => (
      <CurrentTrainings key={course._id} course={course} />
    ))
  ) : (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
  return (
    <React.Fragment>
      {diplayCurrentTrainings}
      <CompletedTrainings />
    </React.Fragment>
  );
};

export default Trainings;
