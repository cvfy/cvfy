import React, { Component } from "react";
import { CoverLetterContext } from "../../../contexts/CoverLetterContext";
import "../../../styles/BuilderNav.css";
import { frontUrl } from "../../../config";

class ExtraToolsMenu extends Component {
  // This function creates a new Cover Letter
  setLocalStorage = id => {
    localStorage.setItem("currentCover", id);
    window.location.href = `${frontUrl}/create-cover-letter`;
  };

  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          const {
            toggleFontWeight,
            toggleFontStyle,
            toggleTextDecoration,
            toggleJustifyCenter,
            toggleJustifyLeft,
            toggleJustifyRight,
            toggleInsertOrderedList,
            toggleUndo,
            toggleRedo,
            saveCoverDataToServer
          } = context;
          return (
            <div className="cvExtraToolsDiv">
              <div className="toolsDiv">
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
                      <i className="fas fa-undo-alt"></i>
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
                      <i className="fas fa-redo-alt"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="buttonsDiv">
                <button
                  onClick={e => saveCoverDataToServer(e)}
                  className="saveUpdateButton"
                >
                  {!context.loadingSaveCv && (
                    <i
                      className="fas fa-circle-notch fa-spin"
                      style={{ marginRight: 5 }}
                    ></i>
                  )}
                  {!context.loadingSaveCv && <span>Saving</span>}
                  {context.loadingSaveCv && <span>Save</span>}
                </button>
                <button
                  onClick={() => this.setLocalStorage("")}
                  className="saveUpdateButton"
                >
                  <span>New doc</span>
                </button>
              </div>
            </div>
          );
        }}
      </CoverLetterContext.Consumer>
    );
  }
}

export default ExtraToolsMenu;
