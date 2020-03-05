import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import "../../styles/myDocuments.css";
import CvDashboard from "./CvDashboard";
import CoverDashboard from "./CoverDashboard";

class MyDocuments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    this.toggleDashboard = this.toggleDashboard.bind(this);
  }

  toggleDashboard = () => {
    const { show } = this.state;
  };

  render() {
    return (
      <div className="MyDocumentsMainPage">
        <Navbar />
        <div className="MyDocumentsToggleSection">
          <button
            onClick={() => this.setState({ show: true })}
            className={
              this.state.show
                ? "MyDocumentsToggle ToggleLeft ToggleActive"
                : "MyDocumentsToggle ToggleLeft"
            }
          >
            My CVs
          </button>
          <button
            onClick={() => this.setState({ show: false })}
            className={
              this.state.show
                ? "MyDocumentsToggle ToggleRight"
                : "MyDocumentsToggle ToggleRight ToggleActive"
            }
          >
            My Cover Letters
          </button>
        </div>
        <div className="dashboard">
          {this.state.show && <CvDashboard />}
          {!this.state.show && <CoverDashboard />}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MyDocuments;
