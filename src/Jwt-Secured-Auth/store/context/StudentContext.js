import React from "react";

const StudentContext = React.createContext({
  studentState: {},
  getStudents: () => {},
  putUser: () => {}
});

export default StudentContext;
