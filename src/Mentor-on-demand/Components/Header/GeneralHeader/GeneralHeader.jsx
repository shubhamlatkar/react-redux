import React, { useState } from "react";
import { Navbar, FormControl, Form, Button, Container } from "react-bootstrap";

const GeneralHeader = props => {
  const [filterBy, setFilterby] = useState("");

  return (
    <Navbar className="general-header" variant="light">
      <Container>
        <Navbar.Brand className="mr-auto" href="#home" />
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            value={filterBy}
            onChange={event => setFilterby(event.target.value)}
            className="mr-sm-2"
          />
          <Button
            className="general-header-search-btn"
            onClick={event => {
              props.handelFilterChange(filterBy);
              setFilterby("");
            }}
          >
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default GeneralHeader;
