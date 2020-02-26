import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import "../../styles/myDocuments.css";
import JumbotronDashboard from "./JumbotronDashboard";
import CvDashboard from "./CvDashboard";
import CoverDashboard from "./CoverDashboard";

const MyDocuments = () => {
  return (
    <>
      <Navbar />
      <JumbotronDashboard />
      <div className="dashboard">
        <CvDashboard />
        <CoverDashboard />
      </div>
      <Footer />
    </>
  );
};

export default MyDocuments;
