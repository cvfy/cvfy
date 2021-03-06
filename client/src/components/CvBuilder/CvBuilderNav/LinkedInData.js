import React, { Component } from "react";
import "../../../styles/BuilderNav.css";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Emoji from "react-emoji-render";
import store from "./../../../store.js";
import { frontUrl } from "../../../config";

function aFunction() {
  var newState = store.getState();
  return newState.auth.user.name;
}
class LinkedInData extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", displayError: false };

    this.handleChange = this.handleChange.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  setLocalStorage = id => {
    localStorage.setItem("currentCV", id);
    window.location.href = `${frontUrl}/create-cv`;
  };

  displayError = () => {
    this.setState({ displayError: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu() {
    this.setState({ displayError: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          let hi = `Hi ${aFunction()}! :hand: `;
          let hi2 = `Hi ${aFunction()}!`;
          const {
            importData,
            saveCVDataToServer,
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
            <>
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
                        <i className="fas fa-undo-alt"></i>
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
                        <i className="fas fa-redo-alt"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="buttonsDiv">
                  <button
                    onClick={e =>
                      context.userData[0].contact[2].value === ""
                        ? this.displayError()
                        : importData(
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
                        className="fas fa-circle-notch fa-spin"
                        style={{ marginRight: 5 }}
                      ></i>
                    )}
                    {context.importing && null}
                    {!context.importing && <span>Import</span>}
                  </button>
                  <button
                    onClick={e => saveCVDataToServer(e)}
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
                    <span>New CV</span>
                  </button>
                </div>
              </div>
              {this.state.displayError ? (
                <div className="noLinkedInError">
                  <h2 className="loadingH2">
                    <Emoji text={hi} />
                  </h2>
                  <p className="loadingText">
                    To import data you need to add your linkedIn address to your
                    contacts, once you do that we will be happy to create the cv
                    for you!
                  </p>
                </div>
              ) : null}
              {context.importingMessage ? (
                <div className="importingLinkedIn">
                  <h2 className="loadingH2">{hi2}</h2>
                  <p className="loadingText">
                    <Emoji
                      text="We are creating your CV, hope you enjoy it! You can
                    still edit it afterwards :)"
                    />
                  </p>
                </div>
              ) : null}
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
store.subscribe(aFunction);
export default LinkedInData;
