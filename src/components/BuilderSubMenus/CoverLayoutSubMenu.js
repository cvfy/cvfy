import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
//import { Button } from "@material-ui/core";

class CoverLayoutSubMenu extends Component {
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

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  handleUserChange(e) {
    const userId = e.currentTarget.dataset.userId;
    this.setState({ userId });
    // or this.setState({userId: userId})
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div>
              <div className="layout-btn " onClick={this.showMenu}>
                <span className="tool-icon">☷</span>
                <span className="tool-desc">Layout</span>
              </div>

              {this.state.showMenu ? (
                <div
                  className="layoutSubMenu"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="headerElements">
                    Show:
                    <label className="headerContainer">
                      Photo
                      <input type="radio" checked="checked" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="headerContainer">
                      Title
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                    <label className="headerContainer">
                      Summary
                      <input
                        type="radio"
                        name="radio"
                        className="checkElements"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>

                  <div className="layoutToggle">
                    <Button
                      className={
                        this.state.userId === "user-1"
                          ? "toggleButton active"
                          : "toggleButton"
                      }
                      variant="outlined"
                      color="primary"
                      onClick={this.handleUserChange}
                      data-user-id="user-1"
                    >
                      Suggested
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={this.handleUserChange}
                      data-user-id="user-2"
                      className={
                        this.state.userId === "user-2"
                          ? "toggleButton active"
                          : "toggleButton"
                      }
                    >
                      Custom
                    </Button>
                  </div>

                  <div className="layoutCV"></div>

                  <div className="dndText">
                    Drag and drop to add or remove sections
                  </div>

                  <div className="dndContainer">
                    <div className="dndSection">Experience</div>
                    <div className="dndSection">Education</div>
                    <div className="dndSection">Skills</div>
                    <div className="dndSection">Projects</div>
                    <div className="dndSection">Certifications</div>
                    <div className="dndSection">Achievements</div>
                    <div className="dndSection">Languages</div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default CoverLayoutSubMenu;
