import React, { Component } from "react";
import "../../../styles/BuilderNav.css";

class ExtraToolsMenu extends Component {
  state = {};
  render() {
    return (
      <div className="cvExtraToolsDiv">
        <div className="extra-tools-btn">
          <div className="docsDiv">
            <span className="tool-icon extra-tool boldStyle">B</span>
          </div>
        </div>
        <div className="extra-tools-btn">
          <div className="docsDiv">
            <span className="tool-icon extra-tool italicStyle">I</span>
          </div>
        </div>
        <div className="extra-tools-btn">
          <div className="docsDiv">
            <span className="tool-icon extra-tool underStyle">
              <i className="fas fa-underline"></i>
            </span>
          </div>
        </div>
        <div className="extra-tools-btn">
          <div className="docsDiv">
            <span className="tool-icon extra-tool leftStyle">
              <i className="fas fa-align-left"></i>
            </span>
          </div>
        </div>
        <div className="extra-tools-btn">
          <div className="docsDiv">
            <span className="tool-icon extra-tool centerStyle">
              <i className="fas fa-align-center"></i>
            </span>
          </div>
        </div>
        <div className="extra-tools-btn">
          <div className="docsDiv">
            <span className="tool-icon extra-tool rightStyle">
              <i className="fas fa-align-right"></i>
            </span>
          </div>
        </div>
        <div className="extra-tools-btn">
          <div className="docsDiv">
            <span className="tool-icon extra-tool ulStyle">
              <i className="fas fa-list-ul"></i>
            </span>
          </div>
        </div>
        <div className="extra-tools-btn">
          <div className="docsDiv">
            <span className="tool-icon extra-tool olStyle">
              <i className="fas fa-list-ol"></i>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ExtraToolsMenu;
