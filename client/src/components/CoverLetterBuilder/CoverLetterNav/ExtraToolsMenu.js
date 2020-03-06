import React, { Component } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import "../../../styles/BuilderNav.css";

class ExtraToolsMenu extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const {
            toggleFontWeight,
            toggleFontStyle,
            toggleTextDecoration,
            toggleJustifyCenter,
            toggleJustifyLeft,
            toggleJustifyRight,
            toggleInsertOrderedList,
            toggleInsertUnorderedList
          } = context;
          return (
            <div className="cvExtraToolsDiv">
              <div className="extra-tools-btn">
                <div className="docsDiv">
                  <span
                    className="tool-icon extra-tool boldStyle"
                    onMouseDown={e => e.preventDefault()}
                    onClick={toggleFontWeight}
                  >
                    B
                  </span>
                </div>
              </div>
              <div className="extra-tools-btn">
                <div className="docsDiv">
                  <span
                    className="tool-icon extra-tool italicStyle"
                    onMouseDown={e => e.preventDefault()}
                    onClick={toggleFontStyle}
                  >
                    I
                  </span>
                </div>
              </div>
              <div className="extra-tools-btn">
                <div className="docsDiv">
                  <span
                    className="tool-icon extra-tool underStyle"
                    onMouseDown={e => e.preventDefault()}
                    onClick={toggleTextDecoration}
                  >
                    <i className="fas fa-underline"></i>
                  </span>
                </div>
              </div>
              <div className="extra-tools-btn">
                <div className="docsDiv">
                  <span
                    className="tool-icon extra-tool leftStyle"
                    onMouseDown={e => e.preventDefault()}
                    onClick={toggleJustifyLeft}
                  >
                    <i className="fas fa-align-left"></i>
                  </span>
                </div>
              </div>
              <div className="extra-tools-btn">
                <div className="docsDiv">
                  <span
                    className="tool-icon extra-tool centerStyle"
                    onMouseDown={e => e.preventDefault()}
                    onClick={toggleJustifyCenter}
                  >
                    <i className="fas fa-align-center"></i>
                  </span>
                </div>
              </div>
              <div className="extra-tools-btn">
                <div className="docsDiv">
                  <span
                    className="tool-icon extra-tool rightStyle"
                    onMouseDown={e => e.preventDefault()}
                    onClick={toggleJustifyRight}
                  >
                    <i className="fas fa-align-right"></i>
                  </span>
                </div>
              </div>
              <div className="extra-tools-btn">
                <div className="docsDiv">
                  <span
                    className="tool-icon extra-tool ulStyle"
                    onMouseDown={e => e.preventDefault()}
                    onClick={toggleInsertUnorderedList}
                  >
                    <i className="fas fa-list-ul"></i>
                  </span>
                </div>
              </div>
              <div className="extra-tools-btn">
                <div className="docsDiv">
                  <span
                    className="tool-icon extra-tool olStyle"
                    onMouseDown={e => e.preventDefault()}
                    onClick={toggleInsertOrderedList}
                  >
                    <i className="fas fa-list-ol"></i>
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ExtraToolsMenu;
