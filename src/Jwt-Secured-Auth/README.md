# Front End for Spring Boot and spring security sample with DB Authentication with JWT

## It has login, SignUp, Logout functionality based on jwt token

### After auth username along with its rights is displayed

#### You can find complete spring boot code at [Spring-MongoDB-jwt-auth](https://github.com/shubhamlatkar/springPlayground/tree/master/security-DBAuth-jwt).

A minimal, secure RESTFUL api for Spring Boot. This project includes front-end for jwt sample project.

# Installation

- Clone the repo by using `git clone`.
- Clon the backend code [spring-mongo-jwt](https://github.com/shubhamlatkar/springPlayground/tree/master/security-DBAuth-jwt).
- Run `mvn spring-boot:run` on the cloned directory.
- Run `npm install`.
- Run `npm start`.
- Visit `http://localhost:3000/`.

## Backend API Endpoints

| Method | Url                             | Expected Output       | Input                                           |
| ------ | ------------------------------- | --------------------- | ----------------------------------------------- |
| POST   | `http://host:8080/login`        | user object           | username and password                           |
| POST   | `http://host:8080/signup`       | Success message       | username,pass,email, roles array `['ROLE_USER]` |
| GET    | `http://host:8080/logmeout`     | logout del token      |                                                 |
| GET    | `http://host:8080/logoutall`    | logout,del all tokens |                                                 |
| GET    | `http://host:8080/tryAutoLogin` | tryAutoLogin          | succes 200 if valid token or 403.               |
