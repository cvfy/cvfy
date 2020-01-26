import React, { Component } from "react";
import "../../css/CoverLetterNav.css";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";

class ExtraToolsMenu extends Component {
  state = {};
  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          return (
            <div className="cvExtraToolsDiv">
              <button className="extra-tools-btn">
                <div className="docsDiv">
                  <span className="tool-icon extra-tool boldStyle">B</span>
                </div>
              </button>
              <button className="extra-tools-btn">
                <div className="docsDiv">
                  <span className="tool-icon extra-tool italicStyle">I</span>
                </div>
              </button>
              <button className="extra-tools-btn">
                <div className="docsDiv">
                  <span className="tool-icon extra-tool underStyle">
                    <i class="fas fa-underline"></i>
                  </span>
                </div>
              </button>
              <button className="extra-tools-btn">
                <div className="docsDiv">
                  <span className="tool-icon extra-tool leftStyle">
                    <i class="fas fa-align-left"></i>
                  </span>
                </div>
              </button>
              <button className="extra-tools-btn">
                <div className="docsDiv">
                  <span className="tool-icon extra-tool centerStyle">
                    <i class="fas fa-align-center"></i>
                  </span>
                </div>
              </button>
              <button className="extra-tools-btn">
                <div className="docsDiv">
                  <span className="tool-icon extra-tool rightStyle">
                    <i class="fas fa-align-right"></i>
                  </span>
                </div>
              </button>
              <button className="extra-tools-btn">
                <div className="docsDiv">
                  <span className="tool-icon extra-tool ulStyle">
                    <i class="fas fa-list-ul"></i>
                  </span>
                </div>
              </button>
              <button className="extra-tools-btn">
                <div className="docsDiv">
                  <span className="tool-icon extra-tool olStyle">
                    <i class="fas fa-list-ol"></i>
                  </span>
                </div>
              </button>
            </div>
          );
        }}
      </CoverLetterContext.Consumer>
    );
  }
}

export default ExtraToolsMenu;
