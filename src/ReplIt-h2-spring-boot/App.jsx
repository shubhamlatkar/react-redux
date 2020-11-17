import React, { useEffect, useState } from "react";
import {
  Alert,
  Badge,
  Button,
  Col,
  Container,
  Form,
  Spinner,
  Table
} from "react-bootstrap";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

export default function App() {
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [form, setForm] = useState({
    username: {
      type: "text",
      value: "",
      name: "username"
    },
    email: {
      type: "email",
      value: "",
      name: "email"
    },
    phone: {
      type: "text",
      value: "",
      name: "phone"
    }
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: { ...form[name], value: value } });
  };

  const getTableData = () => {
    setLoading(true);

    Axios({
      method: "GET",
      url: "https://h2-sample.shubhamlatkar.repl.co/"
    })
      .then((res) => {
        setTable(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    getTableData();
  }, []);

  const handelSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    Axios({
      method: "POST",
      url: "https://h2-sample.shubhamlatkar.repl.co/",
      data: {
        username: form.username.value,
        email: form.email.value,
        phone: form.phone.value
      }
    })
      .then((res) => {
        setTable({});
        getTableData();
        setForm({
          username: {
            type: "text",
            value: "",
            name: "username"
          },
          email: {
            type: "email",
            value: "",
            name: "email"
          },
          phone: {
            type: "text",
            value: "",
            name: "phone"
          }
        });
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  };

  let formContent = (
    <Form onSubmit={handelSubmit} className="form">
      <Form.Row>
        <Form.Group as={Col} md="3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type={form.username.type}
            placeholder="Username"
            value={form.username.value}
            onChange={onChangeHandler}
            name={form.username.name}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type={form.email.type}
            name={form.email.name}
            placeholder="Email"
            value={form.email.value}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name={form.phone.name}
            type={form.phone.type}
            placeholder="Phone Number"
            value={form.phone.value}
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Form.Group as={Col} md="1" controlId="submit">
          {loading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            <Button className="submit-btn" type="submit">
              Add
            </Button>
          )}
        </Form.Group>
      </Form.Row>
    </Form>
  );

  const deleteUser = (id) => {
    setLoading(true);
    Axios({
      method: "DELETE",
      url: "https://h2-sample.shubhamlatkar.repl.co/" + id
    })
      .then((res) => {
        setLoading(false);
        getTableData();
      })
      .catch((err) => console.log);
  };

  return (
    <div className="App">
      {/* <input type="range" min="1" max="10" step="1" /> */}
      <h1>H2 CRUD Sample</h1>
      <h3>
        Backend in spring-boot and H2 at{" "}
        <Alert.Link
          target="_blank"
          href="https://repl.it/@shubhamlatkar/h2-sample"
        >
          Repl.it
        </Alert.Link>
      </h3>
      <Container>
        {error && (
          <Alert variant="info">
            The repl.it sandbox might went into sleep mode. You will need to
            wake-up the sand-box{" "}
            <Alert.Link
              target="_blank"
              href="https://repl.it/@shubhamlatkar/h2-sample"
            >
              here
            </Alert.Link>{" "}
            and run command <Badge variant="info"> mvn spring-boot:run</Badge>.
          </Alert>
        )}
        {formContent}
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {!loading && table ? (
              table.length > 0 ? (
                table.map((obj, i) => (
                  <tr key={i}>
                    <td>{obj.id}</td>
                    <td>{obj.username}</td>
                    <td>{obj.email}</td>
                    <td>{obj.phone}</td>
                    <td>
                      {" "}
                      <Button
                        variant="danger"
                        onClick={(event) => deleteUser(obj.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">
                    <h5>No Data</h5>
                  </td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan="5">
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
