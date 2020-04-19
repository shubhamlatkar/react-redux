import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const TrainerForm = props => {
  return (
    <Container className="text-left form-container">
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Exprience
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Exprience" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Experties
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Experties" />
          </Col>
        </Form.Group>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Duration
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Course Duration" />
            </Col>
          </Form.Group>
        </fieldset>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Fee
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Course Fee" />
            </Col>
          </Form.Group>
        </fieldset>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Lectures
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="number" placeholder="Course Lectures" />
            </Col>
          </Form.Group>
        </fieldset>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
              Levels
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="text" placeholder="Course Lectures" />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" className="form-container-btn">
              Create Course
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default withRouter(TrainerForm);
