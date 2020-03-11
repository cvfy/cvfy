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

  setLocalStorage = id => {
    localStorage.setItem("currentCV", id);
    window.location.href = "http://localhost:3000/create-cv";
  };

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const {
            importData,
            saveCVDataToServer,
            generatePDF,
            toggleFontWeight,
            toggleFontStyle,
            toggleTextDecoration,
            toggleJustifyLeft,
            toggleJustifyCenter,
            toggleJustifyRight,
            toggleInsertOrderedList,
            toggleUndo,
            toggleRedo
          } = context;
          return (
            // ### THIS COMMENT IS RELATED TO HEADHUNTERS PROFILE ######
            // <div className="cvExtraToolsDiv">
            //   <input
            //     value={this.state.value}
            //     onChange={this.handleChange}
            //     id="linkedInInput"
            //     placeholder="insert your linkedIn account"
            //   ></input>
            //   <button
            //     onClick={() => importData(this.state.value)}
            //     className="linkedInButton"
            //   >
            //     Import
            //   </button>
            //   <button onClick={(e) => saveCVDataToServer(e)} className="saveUpdateButton">Save</button>
            // </div>

            <div className="menuBottomBarDiv">
              <div className="toolsDiv">
                <div className="cvBuilder-extra-tools">
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
                <div className="cvBuilder-extra-tools">
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
                <div className="cvBuilder-extra-tools">
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
                <div className="cvBuilder-extra-tools">
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
                <div className="cvBuilder-extra-tools">
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
                <div className="cvBuilder-extra-tools">
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
                <div className="cvBuilder-extra-tools">
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

                <div className="cvBuilder-extra-tools">
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
                <div className="cvBuilder-extra-tools">
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

              <div className="buttonsDiv">
                <button
                  onClick={e =>
                    importData(
                      context.userData[0].contact[2].value
                        .split("in/")[1]
                        .replace("/", ""),
                      e
                    )
                  }
                  className="linkedInButton"
                >
                  {context.importing && (
                    <i
                      class="fas fa-spinner fa-spin"
                      style={{ marginRight: 5 }}
                    ></i>
                  )}
                  {context.importing && <span>Importing</span>}
                  {!context.importing && <span>Import</span>}
                </button>
                <button
                  onClick={e => saveCVDataToServer(e)}
                  className="saveUpdateButton"
                >
                  {context.loadingSaveCv && (
                    <i
                      class="fas fa-spinner fa-spin"
                      style={{ marginRight: 5 }}
                    ></i>
                  )}
                  {context.loadingSaveCv && <span>Saving</span>}
                  {!context.loadingSaveCv && <span>Save</span>}
                </button>
                <button
                  onClick={() => this.setLocalStorage("")}
                  className="saveUpdateButton"
                >
                  New CV
                </button>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default LinkedInData;
