import React, { useEffect, useContext, useState } from "react";
import { Table, Spinner } from "react-bootstrap";
import StudentContext from "../../../store/context/StudentContext";
import UserContext from "../../../store/context/UserContext";

const tableContent = React.memo(props => {
  const studentContext = useContext(StudentContext);
  const { studentState, getStudents } = studentContext;

  const userContext = useContext(UserContext);
  let { userState } = userContext;

  const [students, setStudents] = useState({});
  const [loadingStudents, setLoadingStudents] = useState(false);

  useEffect(() => {
    if (userState && userState.isAuth) getStudents();
  }, [getStudents, userState && userState.isAuth]);

  useEffect(() => {
    if (studentState && studentState.students)
      setStudents(studentState.students);
  }, [studentState && studentState.students]);

  useEffect(() => {
    let loading = studentState && studentState.loading;
    if (loadingStudents !== loading)
      setLoadingStudents(studentState && studentState.loading);
  }, [studentState && studentState.loading]);

  let tableData = null;

  if (students.length > 0 && !loadingStudents)
    tableData = students.map(student => (
      <tr onClick={e => rowClicked(student.id)} key={student.id}>
        <td className="text-left">{student.id}</td>
        <td className="text-left">{student.name}</td>
        <td className="text-left">{student.age}</td>
        <td className="text-left">{student.phoneNum}</td>
      </tr>
    ));

  let loader = (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );

  const rowClicked = id => {
    props.history.push(("/table/" + id).toString());
  };

  return (
    <React.Fragment>
      <Table bordered hover size="sm" responsive>
        <thead className="thead-dark">
          <tr>
            <th className="text-left">Id</th>
            <th className="text-left">Name</th>
            <th className="text-left">Age</th>
            <th className="text-left">Phone Number</th>
          </tr>
        </thead>
        <tbody>{!loadingStudents ? tableData : null}</tbody>
      </Table>
      {loadingStudents ? loader : null}
    </React.Fragment>
  );
});

export default tableContent;
