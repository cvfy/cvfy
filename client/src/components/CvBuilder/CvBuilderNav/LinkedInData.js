import React, { Component } from "react";
import "../../../styles/BuilderNav.css";

class LinkedInData extends Component {
  render() {
    return (
      <div className="cvExtraToolsDiv">
        <input id="linkedInInput" placeholder="insert your linkedIn"></input>
        <button className="linkedInButton">Import</button>
      </div>
    );
  }
}

export default LinkedInData;
