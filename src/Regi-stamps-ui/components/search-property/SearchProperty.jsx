import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Jumbotron,
  Table
} from "react-bootstrap";
import Header from "../../components/header/Header";

const searchProperty = (props) => {
  return (
    <React.Fragment>
      <Header {...props} />
      <Jumbotron className="search-property-banner">
        <h2>Hello, User!</h2>
        <p>
          This is a simple hero unit, to get featured content or information
          about property.
        </p>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Jumbotron>
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>City</th>
              <th>Address</th>
              <th>Reg No.</th>
              <th>Property No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>123</td>
              <td>456</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
};

export default searchProperty;
