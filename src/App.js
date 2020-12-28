import React from "react";
import Header from "./components/header";
import General from "./components/general";
import Educations from "./components/educations";
import Jobs from "./components/jobs";

function App() {
  return (
    <React.Fragment>
      <Header />
      <General />
      <Educations />
      <Jobs />
    </React.Fragment>
  );
}

export default App;
