import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import React, { Suspense } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import Loader from "./Loader";
const MODApp = React.lazy(() => import("../src/Mentor-on-demand/App"));
const JwtApp = React.lazy(() => import("../src/Jwt-Secured-Auth/App"));
const ThunkApp = React.lazy(() => import("./React-redux-thunk/App"));
const StampRegiApp = React.lazy(() => import("./Regi-stamps-ui/App"));
const BootstrapApp = React.lazy(() =>
  import("../src/React-redux-bootstrap/App")
);
const ReactHooksApp = React.lazy(() => import("../src/React-hooks/MyApp"));
const ReplItH2Sample = React.lazy(() =>
  import("../src/ReplIt-h2-spring-boot/App")
);

export default function App() {
  let [selected, setSelected] = React.useState(parseInt(0, 10));
  let components = [
    <div className="default-view">
      <h1>Select From one</h1>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={() => setSelected(1)}>
          JWT Sample App
        </Button>
        <Button variant="secondary" onClick={() => setSelected(2)}>
          Mentor On Demand App
        </Button>
        <Button variant="secondary" onClick={() => setSelected(3)}>
          React Redux Thunk App
        </Button>
        <Button variant="secondary" onClick={() => setSelected(4)}>
          React Redux with Bootstrap App
        </Button>
        <Button variant="secondary" onClick={() => setSelected(5)}>
          React Hooks App
        </Button>
        <Button variant="secondary" onClick={() => setSelected(6)}>
          StampRegiApp
        </Button>
        <Button variant="secondary" onClick={() => setSelected(7)}>
          ReplItH2Sample
        </Button>
      </ButtonGroup>
    </div>,
    <JwtApp />,
    <MODApp />,
    <ThunkApp />,
    <BootstrapApp />,
    <ReactHooksApp />,
    <StampRegiApp />,
    <ReplItH2Sample />
  ];

  return (
    <React.Fragment>
      <Suspense fallback={<Loader />}>{components[selected]}</Suspense>
    </React.Fragment>
  );
}
