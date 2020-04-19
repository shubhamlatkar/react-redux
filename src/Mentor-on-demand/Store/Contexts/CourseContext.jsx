import React from "react";

const CourseContext = React.createContext({
  courses: [],
  getCourses: () => {},
  getMentor: () => {},
  mentor: {},
  addCourse: () => {}
});

export default CourseContext;
