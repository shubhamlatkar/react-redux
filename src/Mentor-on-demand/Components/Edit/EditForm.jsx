import React, { useContext, useState } from "react";
import UserContext from "../../Store/Contexts/UserContext";
import MyInput from "../MyInput/MyInput";
import { Spinner, Container, Form, Row, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const EditForm = props => {
  const userContext = useContext(UserContext);
  let { isAuth, userState, updateUser } = userContext;
  let [user, setUser] = useState({
    name: {
      name: "name",
      label: "Name",
      value: userState.myUser.name,
      placeholder: "name",
      display: true
    },
    description: {
      name: "description",
      label: "Description",
      placeholder: "Course description",
      value: userState.myUser.trainerDetails.description,
      display: userState.myUser.type
    },
    email: {
      name: "email",
      label: "Email",
      value: userState.myUser.email,
      placeholder: "email",
      display: true
    },
    age: {
      name: "age",
      label: "Age",
      value: userState.myUser.age,
      display: true,
      placeholder: "Age"
    },
    experience: {
      name: "experience",
      label: "Experience",
      value: userState.myUser.trainerDetails.experience,
      display: userState.myUser.type,
      placeholder: "Experience"
    },
    position: {
      name: "position",
      label: "Position",
      value: userState.myUser.trainerDetails.position,
      display: userState.myUser.type,
      placeholder: "Current Position"
    },
    company: {
      name: "company",
      label: "Company",
      value: userState.myUser.trainerDetails.company,
      display: userState.myUser.type,
      placeholder: "Current Company"
    },
    phone: {
      name: "phone",
      label: "Pnone No.",
      value: userState.myUser.trainerDetails.phone,
      display: userState.myUser.type,
      placeholder: "Enter Mobile Number"
    }
  });

  const onChangeHandler = event => {
    let name = event.target.name;
    let obj = user[event.target.name];
    obj.value = event.target.value;
    setUser({ ...user, [name]: obj });
  };

  let form = Object.keys(user).map(key => {
    if (user[key].display) {
      return (
        <MyInput
          key={user[key].name}
          onChangeHandler={onChangeHandler}
          label={user[key].label}
          title={user[key].title}
          placeholder={user[key].placeholder}
          name={user[key].name}
          value={user[key].value ? user[key].value : ""}
          type={user[key].type || "text"}
        />
      );
    } else return null;
  });
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
    var temUser = Object.keys(user).reduce(function(obj, k) {
      if (
        user[k].name === "name" ||
        user[k].name === "email" ||
        user[k].name === "password" ||
        user[k].name === "age"
      )
        obj[user[k].name] = user[k].value;
      return obj;
    }, {});

    temUser.type = userState.myUser.type;

    if (userState.myUser.type) {
      temUser.trainerDetails = Object.keys(user).reduce(function(obj, k) {
        if (
          user[k].name === "description" ||
          user[k].name === "experience" ||
          user[k].name === "experties" ||
          user[k].name === "position" ||
          user[k].name === "company" ||
          user[k].name === "phone"
        )
          obj[user[k].name] = user[k].value;
        return obj;
      }, {});
    }
    console.log("user", temUser);
    updateUser(temUser);
  };

  return (
    <React.Fragment>
      <Container className="text-left form-container">
        <Form>
          {form}

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button
                type="submit"
                onClick={onSubmitHandler}
                className="form-container-btn"
              >
                Save Changes
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default EditForm;
