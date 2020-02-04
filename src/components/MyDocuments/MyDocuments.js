import React from "react";
import "../../styles/myDocuments.css";
import Jumbotron_Dashboard from "./JumbotronDashboard";
import CV_Dashboard from "./CV_Dashboard";
import Cover_Dashboard from "./Cover_Dashboard";

const MyDocuments = () => {
  return (
    <>
      <Jumbotron_Dashboard />
      <div className="dashboard">
        <CV_Dashboard />
        <Cover_Dashboard />
      </div>
    </>
  );
};

export default MyDocuments;
