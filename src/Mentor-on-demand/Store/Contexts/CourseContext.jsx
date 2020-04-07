import React from "react";

const CourseContext = React.createContext({
  courses: [],
  getCourses: () => {}
});

export default CourseContext;
