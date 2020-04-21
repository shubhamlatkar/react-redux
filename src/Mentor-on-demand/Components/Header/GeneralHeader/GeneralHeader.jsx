import React from "react";
import { Navbar, FormControl, Form, Button, Container } from "react-bootstrap";

const GeneralHeader = props => {
  return (
    <Navbar className="general-header" variant="light">
      <Container>
        <Navbar.Brand className="mr-auto" href="#home" />
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="general-header-search-btn">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default GeneralHeader;
