import React, { Component } from "react";
import "./AboutUs.css";
import Team from "../Team/Team";

class AboutUs extends Component {
  state = {
    text:
      "„We ask recruiters what makes for a successful resume. Then we take these insights and build them into our resume templates. Thus, when you use our online resume builder, you know you are giving recruiters exactly what they want.”"
  };

  handleDisplay = e => {
    console.log(e.target.name);
    if (e.target.name === "mission") {
      this.setState({
        text: "Thats the missionnnnn"
      });
    } else if (e.target.name === "vision") {
      return this.setState({ text: "I can seee!! " });
    } else {
      return this.setState({
        text: ""
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="topContainer">
          <div className="textDiv" contentEditable="true">
            {this.state.text}
          </div>
          <div className="diagram">
            <div className="whatWeDo" title="weDo">
              <p className="diagramText">What we do?</p>
            </div>
            <button
              type="button"
              className="ourMission"
              value="mission"
              onClick={this.handleDisplay}
            >
              <p className="diagramText">Our Mission</p>
            </button>
            <div className="ourVision" title="vision">
              <p className="diagramText">Our Vision</p>
            </div>
          </div>
        </div>
        <div className="bottomContainer"></div>
        <Team></Team>
      </div>
    );
  }
}

export default AboutUs;
