import React, { Component } from "react";
import axios from "axios";
import "./jobDashboard.css";

let status = false;

class JobDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openRequirements: [true, false, false, false],
      openJobDashboard: false,
      positionValue: "",
      locationValue: "",
      loadingJobs: false,
      jobAds: []
    };
  }

  onPositionChange = e => {
    this.setState({ positionValue: e.target.value });
  };
  onLocationChange = e => {
    this.setState({ locationValue: e.target.value });
  };

  requestStepStoneData = async e => {
    if (status === false) {
      status = true;
      e.preventDefault();
      this.setState({ loadingJobs: true });
      console.log("I should be TRUE", this.state.loadingJobs);
      const response = await axios.get(
        `http://localhost:5000/api/users/data/stepstone/position/${this.state.positionValue}/location/${this.state.locationValue}`
      );
      this.setState({ jobAds: response.data, loadingJobs: false });
      console.log("I should be FALSE", this.state.loadingJobs);
      status = false;
    }
  };
  displayDashboard = () => {
    this.setState({ openJobDashboard: !this.state.openJobDashboard });
  };
  openRequirements = i => {
    let newArr = [...this.state.openRequirements];
    newArr[i] = !this.state.openRequirements[i];

    this.setState({ openRequirements: newArr });
    console.log(this.state.openRequirements);
  };

  render() {
    return (
      //   <div style={{ display: "flex" }}>
      //     <div className="alignContainer">{pages}</div>
      <>
        <div className="bookmark">
          <div
            onClick={() => this.displayDashboard()}
            className="bookmark_link"
          >
            {this.state.openJobDashboard === false
              ? "Job Dashboard"
              : "Close Dashboard"}
          </div>
        </div>
        <div
          className={
            this.state.openJobDashboard
              ? "transitionDashboard"
              : "hideTransitionDashboard"
          }
        >
          <div className="MainJobDashboard">
            <div className="JobDashboardForm">
              <form className="jobForm">
                <label htmlFor="position">Job Title</label>
                <input
                  onChange={e => this.onPositionChange(e)}
                  value={this.state.positionValue}
                  className="JobAdInput"
                  type="text"
                  id="position"
                ></input>
                <label htmlFor="location">Location</label>
                <input
                  onChange={e => this.onLocationChange(e)}
                  value={this.state.locationValue}
                  className="JobAdInput"
                  type="text"
                  id="location"
                ></input>
                <button
                  onClick={e => this.requestStepStoneData(e)}
                  className="JobDashboardButton"
                >
                  {this.state.loadingJobs && (
                    <i
                      class="fas fa-circle-notch fa-spin"
                      style={{ marginRight: 5 }}
                    ></i>
                  )}
                  {this.state.loadingJobs && <span>Searching</span>}
                  {!this.state.loadingJobs && <span>Search</span>}
                </button>
              </form>
            </div>
            <div
              className={
                this.state.jobAds.length == 0 ? "panelImg" : "JobDashboardAds"
              }
            >
              {this.state.jobAds.map((el, i) => (
                <div className="JobAdContainer">
                  <div className="jobAdTitle">{el.JobPosition}</div>
                  <div className="jobAdCompanyName">{el.CompanyName}</div>
                  <div
                    style={{
                      display: `${
                        this.state.openRequirements[i] === false
                          ? "none"
                          : "block"
                      }`
                    }}
                    className="jobAdRequirements"
                  >
                    <ul>
                      $
                      {el.JobRequirements.map(el => (
                        <li>{el}</li>
                      ))}
                    </ul>
                  </div>
                  <div
                    onClick={() => this.openRequirements(i)}
                    className="jobAdClickforRequirements"
                  >
                    {this.state.openRequirements[i] === false
                      ? "Show Job Requirements"
                      : "Hide Job Requirements"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JobDashboard;
