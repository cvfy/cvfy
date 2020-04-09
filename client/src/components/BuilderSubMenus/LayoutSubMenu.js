import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import Draggable from "./DND/Draggable";

class LayoutSubMenu extends Component {
  constructor() {
    super();
    this.state = {
      userId: "user-1",
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  // This function opens sub menu onclick and add close menu function
  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  // This function close sub menu onclick outside the target and remove close menu function, Alex, please complete
  closeMenu(event) {
    event.preventDefault();
    const leftSide = Array.from(
      document.querySelectorAll("#leftCvSection div.dndSection")
    ).map(el => el.getAttribute("name"));
    const rightSide = Array.from(
      document.querySelectorAll("#rightCvSection div.dndSection")
    ).map(el => el.getAttribute("name"));
    this.props.setStructure(leftSide, rightSide);
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  // Alex, please add a comment here
  handleUserChange(e) {
    const userId = e.currentTarget.dataset.userId;
    this.setState({ userId });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const {
            togglePhotoClass,
            toggleTitleClass,
            toggleSummaryClass,
            toggleOneColumn
          } = context;
          return (
            <div>
              <div className="layout-btn " onClick={this.showMenu}>
                <span className="tool-icon">☷</span>
                <span className="tool-desc">Layout</span>
              </div>

              <div
                className="layoutSubMenu"
                ref={element => {
                  this.dropdownMenu = element;
                }}
                style={{ display: `${this.state.showMenu ? "block" : "none"}` }}
              >
                <div className="headerElements">
                  Show:
                  <label className="headerContainer">
                    Photo
                    <input type="radio" name="radio" />
                    <span
                      className={
                        context.style.displayPhoto
                          ? "checkedCircle"
                          : "checkMark"
                      }
                      onClick={() => togglePhotoClass()}
                    ></span>
                  </label>
                  <label className="headerContainer">
                    Title
                    <input type="radio" name="radio" />
                    <span
                      className={
                        context.style.displayTitle
                          ? "checkedCircle"
                          : "checkMark"
                      }
                      onClick={() => toggleTitleClass()}
                    ></span>
                  </label>
                  <label className="headerContainer">
                    Summary
                    <input
                      type="radio"
                      name="radio"
                      className="checkElements"
                    />
                    <span
                      className={
                        context.style.displaySummary
                          ? "checkedCircle"
                          : "checkMark"
                      }
                      onClick={() => toggleSummaryClass()}
                    ></span>
                  </label>
                </div>

                <div className="layoutToggle">
                  <div>Suggested</div>
                  <div>Custom</div>
                </div>
                <div className="oneColumnDiv">
                  <label className="headerContainer">
                    One column
                    <input type="radio" name="radio" />
                    <span
                      className={
                        context.style.displayOneColumn
                          ? "checkedCircle"
                          : "checkMark"
                      }
                      onClick={() => toggleOneColumn()}
                    ></span>
                  </label>
                </div>
                <Draggable></Draggable>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default LayoutSubMenu;
