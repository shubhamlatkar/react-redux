import React from "react";
import { Col, Form, Button } from "react-bootstrap";
import "../FilterForm/FilterForm.css";

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loadAll: true,
      userInput: {
        value: "",
        touched: false,
        valid: false,
        caption: ""
      },
      radioOption: {
        value: "",
        touched: false,
        valid: false,
        caption: ""
      },
      formValid: false
    };
  }

  onUserInputChange = event => {
    let tempFormValid = true;
    switch (event.target.name) {
      case "userInput": {
        if (!isNaN(event.target.value)) {
          let userInput = {
            ...this.state.userInput,
            value: Number(event.target.value),
            valid: true,
            caption: ""
          };
          tempFormValid = tempFormValid && this.state.radioOption.valid;
          this.setState({ userInput: userInput, formValid: tempFormValid });
        } else {
          let userInput = {
            ...this.state.userInput,
            value: "",
            valid: false,
            caption: "Please Enter a number"
          };
          tempFormValid = tempFormValid && this.state.radioOption.valid;
          this.setState({ userInput: userInput, formValid: tempFormValid });
        }
        break;
      }

      case "searchById": {
        if (event.target.id === "id") {
          let temRadioOption = {
            ...this.state.radioOption,
            value: "id",
            valid: true
          };
          tempFormValid = tempFormValid && this.state.userInput.valid;
          this.setState({
            radioOption: temRadioOption,
            formValid: tempFormValid
          });
        } else if (event.target.id === "albumId") {
          let temRadioOption = {
            ...this.state.radioOption,
            value: "albumId",
            valid: true
          };
          tempFormValid = tempFormValid && this.state.userInput.valid;
          this.setState({
            radioOption: temRadioOption,
            formValid: tempFormValid
          });
        }
        break;
      }
      default:
        break;
    }
  };

  reset = () => {
    let userInput = {
      value: "",
      touched: false,
      valid: false,
      caption: ""
    };
    let radioOption = {
      value: "",
      touched: false,
      valid: false,
      caption: ""
    };
    this.setState({
      userInput: userInput,
      radioOption: radioOption,
      formValid: "false"
    });
    this.props.reset();
  };

  handelFilterSubmit = event => {
    event.preventDefault();
    event.persist();
    this.props.handelFilterSubmit(
      this.state.radioOption.value,
      this.state.userInput.value
    );
  };

  render() {
    return (
      <Form onSubmit={this.handelFilterSubmit}>
        <div className="FormDiv">
          <Form.Row>
            <Form.Group as={Col} sm={12} md={3}>
              <Form.Control
                type="text"
                name="userInput"
                value={this.state.userInput.value}
                onChange={this.onUserInputChange}
              />
              {this.state.userInput.caption !== "" ? (
                <Form.Text
                  className={
                    this.state.userInput.valid ? "text-success" : "text-danger"
                  }
                >
                  {this.state.userInput.caption}
                </Form.Text>
              ) : null}
              {this.props.caption !== "" ? (
                <Form.Text className={"text-danger"}>
                  {this.props.caption}
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group as={Col} sm={12} md={2}>
              <Form.Check
                type="radio"
                label="By Id"
                name="searchById"
                id="id"
                onChange={this.onUserInputChange}
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={3}>
              <Form.Check
                type="radio"
                label="By albumId"
                name="searchById"
                id="albumId"
                onChange={this.onUserInputChange}
              />
            </Form.Group>
            <Form.Group as={Col} sm={12} md={4}>
              <Button
                className="buttonStyles"
                type="submit"
                disabled={!this.state.formValid}
              >
                Filter
              </Button>
              <Button
                className="buttonStyles"
                type="reset"
                onClick={this.props.reset}
              >
                Reset
              </Button>
            </Form.Group>
          </Form.Row>
        </div>
      </Form>
    );
  }
}

export default FilterForm;
