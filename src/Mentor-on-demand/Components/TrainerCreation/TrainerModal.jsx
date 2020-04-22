import React, { useState, useContext } from "react";
import {
  Modal,
  Button,
  Container,
  Form,
  Col,
  Row,
  Spinner
} from "react-bootstrap";
import MyInput from "../MyInput/MyInput";
import UserContext from "../../Store/Contexts/UserContext";
import { Redirect } from "react-router-dom";

const TrainerModal = props => {
  const [show, setShow] = useState(true);
  const userContext = useContext(UserContext);
  let { signup, isAuth, userState } = userContext;

  let [mentor, setMentor] = useState({
    name: {
      name: "name",
      label: "Name",
      value: "",
      placeholder: "name"
    },
    description: {
      name: "description",
      label: "Description",
      value: "",
      placeholder: "Course description"
    },
    email: {
      name: "email",
      label: "Email",
      value: "",
      placeholder: "email"
    },
    age: {
      name: "age",
      label: "Age",
      value: "",
      placeholder: "Age"
    },
    password: {
      name: "password",
      label: "password",
      value: "",
      placeholder: "Password",
      type: "password"
    },
    experience: {
      name: "experience",
      label: "Experience",
      value: "",
      placeholder: "Experience"
    },
    position: {
      name: "position",
      label: "Position",
      value: "",
      placeholder: "Current Position"
    },
    company: {
      name: "company",
      label: "Company",
      value: "",
      placeholder: "Current Company"
    },
    phone: {
      name: "phone",
      label: "Pnone No.",
      value: "",
      placeholder: "Enter Mobile Number"
    }
  });

  const onChangeHandler = event => {
    let name = event.target.name;
    let obj = mentor[event.target.name];
    obj.value = event.target.value;
    setMentor({ ...mentor, [name]: obj });
  };

  let form = Object.keys(mentor).map(key => (
    <MyInput
      key={mentor[key].name}
      onChangeHandler={onChangeHandler}
      label={mentor[key].label}
      title={mentor[key].title}
      placeholder={mentor[key].placeholder}
      name={mentor[key].name}
      value={mentor[key].value}
      type={mentor[key].type || "text"}
    />
  ));

  form =
    userContext.userState && userContext.userState.loading ? (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    ) : (
      form
    );

  if (userContext.isAuth) {
    form = <Redirect to="/dashboard" />;
  }

  const onSubmitHandler = event => {
    event.preventDefault();
    var temMentor = Object.keys(mentor).reduce(function(obj, k) {
      if (
        mentor[k].name === "name" ||
        mentor[k].name === "email" ||
        mentor[k].name === "password" ||
        mentor[k].name === "age"
      )
        obj[mentor[k].name] = mentor[k].value;
      return obj;
    }, {});

    temMentor.type = true;

    temMentor.trainerDetails = Object.keys(mentor).reduce(function(obj, k) {
      if (
        mentor[k].name === "description" ||
        mentor[k].name === "exprience" ||
        mentor[k].name === "experties" ||
        mentor[k].name === "position" ||
        mentor[k].name === "company" ||
        mentor[k].name === "phone"
      )
        obj[mentor[k].name] = mentor[k].value;
      return obj;
    }, {});
    signup(temMentor);
  };

  const handleClose = () => {
    props.history.push("/signup");
    setShow(false);
  };

  return (
    <React.Fragment>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mentor Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container className="text-left form-container">
            <Form>
              {form}
              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button
                    type="submit"
                    className="form-container-btn"
                    onClick={onSubmitHandler}
                  >
                    Sign Up
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default TrainerModal;
