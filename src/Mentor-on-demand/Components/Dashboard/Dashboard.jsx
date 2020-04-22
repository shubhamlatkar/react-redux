import React, { useEffect, useContext, useCallback, useState } from "react";
import { Banner } from "../Banner/Banner";
import DashboardContent from "../Dashboard/DashboardContent/DashboardContent";
import { Route, Switch, Redirect } from "react-router";
import MyModal from "./DashboardContent/Modal/MyModal";
import CourseContext from "../../Store/Contexts/CourseContext";
import { Spinner, Pagination, Container } from "react-bootstrap";
import UserContext from "../../Store/Contexts/UserContext";
import Notifications from "../Notifications/Notifications";
import Trainings from "../Trainings/Trainings";
import GeneralHeader from "../Header/GeneralHeader/GeneralHeader";
import PersonalHeader from "../Header/PersonalHeader/PersonalHeader";
import CourseCreationForm from "../CourceCreation/CourseCreationForm";
import EditForm from "../Edit/EditForm";

const Dashboard = props => {
  const [currPage, setCurrPage] = useState(0);
  const [paginationItems, setPaginationItems] = useState([]);
  const courseContext = useContext(CourseContext);
  const userContext = useContext(UserContext);
  let { courseState, getCourses } = courseContext;
  let { tryAutoLogin, isAuth, userState } = userContext;
  let [displayRoutes, setDisplayRoutes] = useState(
    <React.Fragment>
      <GeneralHeader />
      <Banner />
      {courseState.courses.length > 0 ? (
        <DashboardContent
          posts={courseState.courses ? courseState.courses : []}
        />
      ) : (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}

      <Route path="/dashboard/course/:id" component={MyModal} />
    </React.Fragment>
  );

  const getNextData = useCallback(
    event => {
      let value = parseInt(event.target.innerHTML, 10);
      setCurrPage(value - 1);
      let val = value * 2 - 2;
      getCourses(val, 2);
    },
    [getCourses, setCurrPage]
  );

  const handelFilterChange = useCallback(
    value => {
      if (!value) {
        getCourses(0, 2);
        setCurrPage(0);
      } else getCourses(null, null, value);
    },
    [getCourses]
  );

  useEffect(() => {
    tryAutoLogin();
  }, [tryAutoLogin]);

  useEffect(() => {
    getCourses(0, 2);
  }, [getCourses]);

  useEffect(() => {
    let items = [];
    for (let i = 0; i < Math.ceil(courseState.coursesLength / 2); i++) {
      items.push(
        <Pagination.Item key={i} active={i === currPage} onClick={getNextData}>
          {i + 1}
        </Pagination.Item>
      );
    }
    setPaginationItems(items);
  }, [currPage, courseState, getNextData]);

  useEffect(() => {
    let temDisplayRoutes = (
      <React.Fragment>
        <GeneralHeader handelFilterChange={handelFilterChange} />
        <Banner />
        {courseState.courses.length > 0 ? (
          <Container>
            <DashboardContent
              posts={courseState.courses ? courseState.courses : []}
            />
            <Pagination>{paginationItems}</Pagination>
          </Container>
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        <Route path="/dashboard/course/:id" component={MyModal} />
      </React.Fragment>
    );

    if (isAuth) {
      temDisplayRoutes =
        userState && userState.type ? (
          <React.Fragment>
            <PersonalHeader />
            <Banner />
            <Switch>
              <Route path="/dashboard" exact component={CourseCreationForm} />
              <Route
                path="/dashboard/notifications"
                component={Notifications}
              />
              <Route path="/dashboard/trainings" component={Trainings} />
              <Route path="/dashboard/edit" component={EditForm} />
            </Switch>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <PersonalHeader />
            <Banner />
            <Switch>
              <Route
                path="/dashboard"
                exact
                component={() => {
                  return courseState.courses.length > 0 ? (
                    <Container>
                      <DashboardContent
                        posts={courseState.courses ? courseState.courses : []}
                      />
                      <Pagination>{paginationItems}</Pagination>
                    </Container>
                  ) : (
                    <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  );
                }}
              />
              <Route path="/dashboard/course/:id" component={MyModal} />
              <Route
                path="/dashboard/notifications"
                component={Notifications}
              />
              <Route path="/dashboard/trainings" component={Trainings} />
              <Route path="/dashboard/edit" component={EditForm} />
              <Redirect from="/" exact to="/dashboard" />
            </Switch>
          </React.Fragment>
        );
    }
    setDisplayRoutes(temDisplayRoutes);
  }, [
    isAuth,
    courseState.courses,
    userState,
    handelFilterChange,
    paginationItems
  ]);

  return <section className="dashboard">{displayRoutes}</section>;
};

export default Dashboard;
