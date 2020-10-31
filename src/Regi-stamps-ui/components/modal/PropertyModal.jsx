import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, InputGroup, Modal } from "react-bootstrap";

const propertyModal = (props) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  const initValues = {
    id: "",
    name: "",
    city: "",
    address: "",
    regNum: "",
    propertyNum: ""
  };

  const validationSchema = Yup.object().shape({
    id: Yup.number().required("id is required"),
    name: Yup.string()
      .min(4, "minimum length is 4 chars")
      .required(" name is required"),
    city: Yup.string()
      .min(5, "min length is 5 chars")
      .required("password is required"),
    address: Yup.string()
      .min(5, "min length is 5 chars")
      .required("address is required"),
    regNum: Yup.number("number format")
      .min(5, "min length is 5 chars")
      .required("Reg Number is required"),
    propertyNum: Yup.number()
      .min(5, "min length is 5 chars")
      .required("Property Number is required")
  });

  return (
    <React.Fragment>
      <Header {...props} />
      <Modal.Dialog className="property-card">
        <Modal.Header>
          <Modal.Title>{props.match.params.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="property-card-body">
          <Formik
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            initialValues={initValues}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>Id</Form.Label>
                    <Form.Control
                      type="text"
                      name="id"
                      value={values.id}
                      onChange={handleChange}
                      isValid={touched.id && !errors.id}
                    />
                    <Form.Control.Feedback>{errors.id}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationFormik02">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isValid={touched.name && !errors.name}
                    />

                    <Form.Control.Feedback>{errors.name}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormikUsername"
                  >
                    <Form.Label>City</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="City"
                        name="city"
                        value={values.city}
                        onChange={handleChange}
                        isInvalid={touched.city && !errors.city}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.city}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationFormik03">
                    <Form.Label>address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      isInvalid={touched.address && !errors.address}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.address}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormik04">
                    <Form.Label>Regristration Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="number"
                      name="regNum"
                      value={values.regNum}
                      onChange={handleChange}
                      isInvalid={touched.regNum && !errors.regNum}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.regNum}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormik05">
                    <Form.Label>Property Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="number"
                      name="propertyNum"
                      value={values.propertyNum}
                      onChange={handleChange}
                      isInvalid={touched.propertyNum && !errors.propertyNum}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.propertyNum}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Button type="submit">Save Changes</Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => {
              props.history.push("/");
            }}
            variant="secondary"
          >
            Close
          </Button>
          <Button variant="primary">Reject Application</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </React.Fragment>
  );
};

export default propertyModal;
