import React from "react";

const PropertyContext = React.createContext({
  propertyState: {},
  postProperty: (property) => {},
  getPropertyByUsername: () => {}
});

export default PropertyContext;
