import React from "react";
import CurrentTrainings from "./CurrentTrainings/CurrentTrainings";
import CompletedTrainings from "./CompletedTrainings/CompletedTrainings";

const Trainings = props => {
  return (
    <React.Fragment>
      <CurrentTrainings />
      <CompletedTrainings />
    </React.Fragment>
  );
};

export default Trainings;
