import React, { useContext, useEffect, useState } from "react";
import { Jumbotron, Spinner, Row, Button, ButtonGroup } from "react-bootstrap";
import UserContext from "../../store/context/UserContext";
import TableContent from "./TableContent/TableContent";

const Table = props => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  const userContext = useContext(UserContext);
  let { tryAutoLogin, userState, logout, logoutAll } = userContext;

  useEffect(() => {
    if (userState && !userState.isAuth) tryAutoLogin();
  }, [tryAutoLogin]);

  useEffect(() => {
    setLoading(userState && userState.loading);
    if (userState && userState.isAuth) {
      setAuth(true);
    }
  }, [userState && userState.isAuth, setAuth, userState && userState.loading]);

  let tableContent = auth ? <TableContent /> : null;
  tableContent = loading ? (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    tableContent
  );
  let unSec = "You are not logged in. Please Sign Up...";
  let sec = "Welcome ";
  if (userState && userState.username && userState.type) {
    sec += userState.username.toString() + " you have following rights";

    userState &&
      userState.type.forEach(type => {
        sec += " " + type;
      });
  }

  const handelOnClick = event => {
    if (event.target.classList[0] === "sign-in-btn")
      props.history.push("/login");
    else if (event.target.classList[0] === "sign-up-btn")
      props.history.push("/signup");
    else if (event.target.classList[0] === "sign-out-btn") {
      logout();
      props.history.push("/login");
    } else if (event.target.classList[0] === "sign-out-all-btn") {
      logoutAll();
      props.history.push("/login");
    }
  };

  return (
    <React.Fragment>
      <Jumbotron>
        <Row className="header">
          <h1 className={"heading"}>{auth ? sec : unSec}</h1>
          {auth ? (
            <ButtonGroup size="sm">
              <Button
                variant="primary"
                size="sm"
                className="sign-out-btn logout "
                onClick={e => handelOnClick(e)}
              >
                Log Out
              </Button>
              <Button
                onClick={e => handelOnClick(e)}
                className="sign-out-all-btn"
              >
                LogOut All
              </Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup size="sm">
              <Button
                variant="secondary"
                className="sign-in-btn"
                onClick={e => handelOnClick(e)}
              >
                Sign In
              </Button>
              <Button
                onClick={e => handelOnClick(e)}
                className="sign-up-btn"
                variant="secondary"
              >
                Sign Up
              </Button>
            </ButtonGroup>
          )}
        </Row>
      </Jumbotron>
      {tableContent}
    </React.Fragment>
  );
};

export default Table;
