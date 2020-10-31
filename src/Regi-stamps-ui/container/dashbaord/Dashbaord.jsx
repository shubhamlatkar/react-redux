import React, { useContext, useEffect, useState } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import Header from "../../components/header/Header";
import AdminDashboard from "../../components/users/AdminDashboard";
import BasicDashboard from "../../components/users/BasicDashboard";
import UserDashboard from "../../components/users/UserDashboard";
import AuthContext from "../../store/context/AuthContext";

const dashbaord = (props) => {
  const userContext = useContext(AuthContext);
  const { userState } = userContext;
  const [user, setUser] = useState("");

  useEffect(() => {
    if (userState && userState.isAuth && !userState.error)
      setUser(userState.user);
  }, [userState && userState.error, userState && userState.isAuth]);

  let greetings = (
    <div>
      <h2>Hello, User!</h2>
      <p>Please login to start.</p>
    </div>
  );

  if (user)
    greetings = (
      <div>
        <h2>Hello, {userState && userState.username}!</h2>
        <p>Welcome back.</p>
      </div>
    );

  let content = (
    <Container className="mb-50">
      <BasicDashboard />
    </Container>
  );

  if (user) {
    let roles = user.roles.filter((role) =>
      role.toLowerCase().includes("admin")
    );
    if (roles)
      content = (
        <section className="user-card-section">
          <AdminDashboard {...props} />
        </section>
      );
    else
      content = (
        <section className="user-card-section">
          <UserDashboard {...props} />
        </section>
      );
  }

  return (
    <main>
      <Header {...props} />
      <Jumbotron>{greetings}</Jumbotron>
      {content}
    </main>
  );
};

export default dashbaord;
