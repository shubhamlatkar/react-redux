import React, { useState, useContext, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import StudentContext from "../../store/context/StudentContext";
import UserContext from "../../store/context/UserContext";

const EditModal = props => {
  const studentContext = useContext(StudentContext);
  const { studentState, putUser } = studentContext;

  const userContext = useContext(UserContext);
  let { userState } = userContext;

  const [student, setStudent] = useState({});
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (studentState && studentState.students) {
      let selectedStudent = null;
      studentState.students.forEach(student => {
        if (student.id === props.match.params.id) selectedStudent = student;
      });
      if (student) setStudent(selectedStudent);
      else props.history.push("/");
    }
  }, [studentState && studentState.students]);

  useEffect(() => {
    if (userState) {
      userState.type.forEach(type => {
        if (type.includes("ADMIN")) setAuth(true);
      });
    }
  }, [userState && userState.type]);

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    props.history.push("/");
  };

  const onChange = event => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    putUser(student);
    props.history.push("/");
  };
  let editForm = (
    <Form>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={student.name}
          onChange={onChange}
          name="name"
        />
      </Form.Group>

      <Form.Group controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          value={student.age}
          onChange={onChange}
          name="age"
        />
      </Form.Group>
      <Form.Group controlId="phoneNum">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          value={student.phoneNum}
          onChange={onChange}
          name="phoneNum"
        />
      </Form.Group>
      <Button onClick={onSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );

  if (!auth) editForm = <h1>You dont have permissions</h1>;

  return (
    <React.Fragment>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify User</Modal.Title>
        </Modal.Header>
        <Modal.Body>{editForm}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default EditModal;
