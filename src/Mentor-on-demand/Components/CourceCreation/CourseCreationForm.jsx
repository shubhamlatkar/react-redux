import React, { useState, useContext } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import MyInput from "../MyInput/MyInput";
import CourseContext from "../../Store/Contexts/CourseContext";

const CourseCreationForm = props => {
  const { addCourse } = useContext(CourseContext);

  let [course, setCourse] = useState({
    title: {
      name: "title",
      label: "Title",
      value: String,
      placeholder: "Course Title"
    },
    description: {
      name: "description",
      label: "Description",
      value: String,
      placeholder: "Course description"
    },
    fee: {
      name: "fee",
      label: "Fee",
      value: String,
      placeholder: "Course Fee"
    },
    levels: {
      name: "levels",
      label: "Levels",
      value: String,
      placeholder: "Course Levels"
    },
    duration: {
      name: "duration",
      label: "Duration",
      value: String,
      placeholder: "Course Duration"
    },
    lectures: {
      name: "lectures",
      label: "Lectures",
      value: String,
      placeholder: "Course Lectures"
    }
  });

  const onChangeHandler = event => {
    let name = event.target.name;
    let obj = course[event.target.name];
    obj.value = event.target.value;
    setCourse({ ...course, [name]: obj });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    var temCourse = Object.keys(course).reduce(function(obj, k) {
      obj[course[k].name] = course[k].value;
      return obj;
    }, {});
    addCourse(temCourse);
  };
  let form = Object.keys(course).map(key => (
    <MyInput
      key={course[key].name}
      onChangeHandler={onChangeHandler}
      label={course[key].label}
      title={course[key].title}
      placeholder={course[key].placeholder}
      name={course[key].name}
      value={course[key].value}
    />
  ));
  return (
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
              Create Course
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default CourseCreationForm;
