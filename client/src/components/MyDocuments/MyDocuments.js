import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import "../../styles/MyDocuments.scss";
import CvDashboard from "./CvDashboard";
import CoverDashboard from "./CoverDashboard";

class MyDocuments extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  // This function make sure we scroll the page view to top when we enter the page
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
      </div>
    );
  }
}

export default MyDocuments;
