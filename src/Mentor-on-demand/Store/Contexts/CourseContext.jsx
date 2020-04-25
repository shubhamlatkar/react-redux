import React from "react";

const CourseContext = React.createContext({
  courses: [],
  getCourses: () => {},
  addCourse: () => {},
  enrollCourse: _id => {},
  getMyCourses: () => {},
  courseState: {},
  patchCourse: {}
});

export default CourseContext;
