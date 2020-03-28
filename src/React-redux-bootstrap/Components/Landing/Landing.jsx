import React, { Component } from "react";
import arrayChunk from "lodash.chunk";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { connect } from "react-redux";

import "../Landing/Landing.css";
import FilterForm from "./FilterForm/FilterForm";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      loading: true,
      formValid: false,
      caption: ""
    };
  }

  reset = () => {
    this.setState({ cards: this.props.cards });
  };

  handelFilterSubmit = (radioOption, userInput) => {
    let cards = this.props.cards;
    cards = cards.filter(card => {
      if (radioOption === "id") {
        return card.id === userInput;
      } else if (radioOption === "albumId") {
        return card.albumId === userInput;
      } else {
        return false;
      }
    });
    if (cards.length === 0) {
      this.setState({ caption: "Sorry No card for that id" });
    } else {
      this.setState({ caption: "" });
      this.setState({ cards: cards });
    }
  };

  render() {
    let chunkData =
      this.state.cards.length > 0
        ? arrayChunk(this.state.cards, 4)
        : arrayChunk(this.props.cards, 4);
    let imgDivClass = ["ImageDiv", "text-center"];
    let row = null;
    row = this.props.cards.length ? (
      <Row>
        {chunkData.map((row, rowIndex) => {
          return (
            <Row key={rowIndex} className="justify-content-center">
              {row.map((col, colIndex) => {
                return (
                  <Col key={colIndex} sm={6} md={3} lg={3} xs={12}>
                    <Card
                      className={imgDivClass.join(" ")}
                      border={"secondary"}
                    >
                      <h2>{this.state.caption}</h2>
                      <Card.Body>
                        <Card.Title>id {col.id}</Card.Title>
                        <Card.Text>album {col.albumId}</Card.Text>
                      </Card.Body>
                      <Card.Img src={col.url} alt="lorem img" />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Row>
    ) : (
      <Row className={"justify-content-center"}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Row>
    );
    return (
      <Container>
        <FilterForm
          handelFilterSubmit={this.handelFilterSubmit}
          reset={this.reset}
          caption={this.state.caption}
        />
        {row}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { cards: state.saveCardsReducer.cards };
};

export default connect(
  mapStateToProps,
  null
)(Landing);
