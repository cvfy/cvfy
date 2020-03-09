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
            toggleInsertUnorderedList,
            toggleUndo,
            toggleRedo
          } = context;
          return (
            <div className="cvExtraToolsDiv">
              <div className="extra-tools-btn">
                <div className="docsDiv">
                  <span
                    className="tool-icon extra-tool boldStyle"
                    onMouseDown={e => e.preventDefault()}
                    onClick={toggleFontWeight}
                    title="bold"
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
                    title="italic"
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
                    title="underline"
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
                    title="justify-left"
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
                    title="justify-center"
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
                    title="justify-right"
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
                    title="bullet list"
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
                    title="ordered list"
                  >
                    <i className="fas fa-list-ol"></i>
                  </span>
                </div>
              </div>
              <div className="extra-tools-btn">
                <div className="docsDiv">
                  <span
                    className="tool-icon extra-tool olStyle"
                    onMouseDown={e => e.preventDefault()}
                    onClick={toggleUndo}
                    title="undo"
                  >
                    <i class="fas fa-undo-alt"></i>
                  </span>
                </div>
              </div>
              <div className="extra-tools-btn">
                <div className="docsDiv">
                  <span
                    className="tool-icon extra-tool olStyle"
                    onMouseDown={e => e.preventDefault()}
                    onClick={toggleRedo}
                    title="redo"
                  >
                    <i class="fas fa-redo-alt"></i>
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
