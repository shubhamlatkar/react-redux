import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
const Footer = props => {
  return (
    <footer className="footer">
      <Navbar bg="dark" varient="dark" expand="xl">
        <Container>
          <Row
            style={{ width: "100%" }}
            className="justify-content-center text-light"
          >
            <Col sm={4} md={4} lg={4}>
              <h5 className="title">Mentor On Demand</h5>
              <p className="text-left">
                Mentor On Demand helps you to get the right cource along with
                right mentor with the sutiable timing for you so that you can
                boost your career and be the best among the rest.
              </p>
            </Col>
            <Col sm={3} md={3} ld={3}>
              <h5 className="title">Content Links</h5>
              <ul className="text-left">
                <li className="list-unstyled">
                  <a href="#!">GitHub</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">CodePen</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">DockerHub</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">CodeSandbox</a>
                </li>
              </ul>
            </Col>
            <Col sm={3} md={3} ld={3} className="justify-content-center">
              <h5 className="title">Contact Links</h5>
              <ul className="text-left">
                <li className="list-unstyled">
                  <a href="#!">Facebook</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Twitter</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">LinkedIn</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Gmail</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
