import React, { Children } from "react";
import NavigationLayout from "./NavigationLayout";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <NavigationLayout />
      <h1>{children}</h1>
    </React.Fragment>
  );
};

export default MainLayout;
