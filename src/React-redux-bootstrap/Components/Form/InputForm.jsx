import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form } from "react-bootstrap";

import * as actionTypes from "../../store/actions";
import MyInput from "../UI/MyInput/MyInput";
import "../Form/InputForm.css";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temUser: {
        id: {
          type: "text",
          name: "id",
          value: "",
          label: "Employee Id",
          decimalValue: "",
          caption: "",
          valid: false,
          touched: false
        },
        firstName: {
          type: "text",
          name: "firstName",
          value: "",
          label: "FirstName",
          caption: "",
          valid: false,
          touched: false
        },
        lastName: {
          type: "text",
          name: "lastName",
          value: "",
          label: "LastName",
          caption: "",
          valid: false,
          touched: false
        },
        Balance: {
          type: "text",
          name: "Balance",
          value: "",
          label: "Balance",
          caption: "",
          valid: false,
          touched: false
        }
      },
      formValid: false
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputChangeHandler = (event, field) => {
    let formValid = true;
    let temUser = {
      ...this.state.temUser
    };
    switch (temUser[field].name) {
      case "id":
        temUser[field].touched = true;
        if (!isNaN(event.target.value)) {
          temUser[field].value = event.target.value;
          if (event.target.value === "") {
            temUser[field].valid = false;
            temUser[field].caption = "Employee Id cannot be blank *required";
            break;
          }
          let flag = 0;
          for (let i = 0; i < this.props.users.length; i++) {
            if (this.props.users[i].id === event.target.value) {
              temUser[field].valid = false;
              temUser[field].caption = "Not Avaliable";
              flag = 1;
            }
          }
          if (flag === 0) {
            temUser[field].valid = true;
            temUser[field].caption = "Avaliable";
          }
        } else {
          temUser[field].valid = false;
          temUser[field].caption = "Please Enter Numbers.";
        }
        break;
      case "lastName":
      case "firstName":
        temUser[field].touched = true;
        if (event.target.value === "") {
          temUser[field].value = event.target.value;
          temUser[field].valid = false;
          temUser[field].caption = "Cannot be blank *required.";
          break;
        }
        if (!/[^a-zA-Z\s]/.test(event.target.value)) {
          temUser[field].value = event.target.value;
          temUser[field].valid = true;
          temUser[field].caption = "Looks Good";
        } else {
          temUser[field].valid = false;
          temUser[field].caption = "No special character.";
        }
        break;
      case "Balance":
        temUser[field].touched = true;
        if (!isNaN(event.target.value)) {
          let temValue = parseFloat(event.target.value).toFixed(2);
          temUser[field].decimalValue = temValue;
          temUser[field].value = event.target.value;
          if (event.target.value === "") {
            temUser[field].valid = false;
            temUser[field].caption = "Employee Id cannot be blank *required";
            break;
          }
          temUser[field].valid = true;
          temUser[field].caption = "Looks Good";
        } else {
          temUser[field].valid = false;
          temUser[field].caption = "Please Enter Numbers.";
        }
        break;
      default:
        temUser[field].value = event.target.value;
    }

    this.setState({ temUser: temUser }, () => {
      for (let element in this.state.temUser) {
        formValid = this.state.temUser[element].valid && formValid;
      }
      this.setState({ formValid: formValid });
    });
  };

  submitHandler = event => {
    event.preventDefault();
    event.persist();
    let temUser = {
      id: event.target[0].value,
      firstName: event.target[1].value,
      lastName: event.target[2].value,
      balance: this.state.temUser.Balance.decimalValue
    };
    this.props.onAddUser(temUser);
    this.props.history.push("/users");
  };

  render() {
    let formElementArray = [];
    for (let key in this.state.temUser) {
      formElementArray.push({
        id: key,
        config: this.state.temUser[key]
      });
    }
    return (
      <div className="form-div">
        <Form onSubmit={this.submitHandler}>
          {formElementArray.map(element => {
            return (
              <MyInput
                key={element.id}
                value={element.config.value}
                label={element.config.label}
                type={element.config.type}
                caption={element.config.caption}
                touched={element.config.touched}
                valid={element.config.valid}
                changed={event =>
                  this.inputChangeHandler(event, element.config.name)
                }
              />
            );
          })}
          <Button
            variant="primary"
            size="sm"
            type="submit"
            disabled={!this.state.formValid}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.userReducer.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddUser: temUser =>
      dispatch({ type: actionTypes.ADD_USER, user: temUser })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputForm);
