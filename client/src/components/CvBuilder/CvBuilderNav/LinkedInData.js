import React, { Component } from "react";
import "../../../styles/BuilderNav.css";
import { ThemeContext } from "../../../contexts/ThemeContext";

class LinkedInData extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { importData } = context;
          return (
            <div className="cvExtraToolsDiv">
              <input
                value={this.state.value}
                onChange={this.handleChange}
                id="linkedInInput"
                placeholder="insert your linkedIn account"
              ></input>
              <button
                onClick={() => importData(this.state.value)}
                className="linkedInButton"
              >
                Import
              </button>
              <button className="saveUpdateButton">Save</button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default LinkedInData;
