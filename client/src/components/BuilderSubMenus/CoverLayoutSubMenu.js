import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "../../styles/CoverBuilderNav.css";

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
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { toggleCoverTitleClass, toggleCompanyClass } = context;
          return (
            <div>
              <div className="coverLayout-btn " onClick={this.showMenu}>
                <span className="tool-icon">☷</span>
                <span className="tool-desc">Layout</span>
              </div>

              {this.state.showMenu ? (
                <div
                  className="coverLayoutSubMenu"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div
                    className="headerElements"
                    style={{ border: "none", padding: "0 15px" }}
                  >
                    Show:
                    <label className="headerContainer coverLetterLabel">
                      Title
                      <input type="radio" name="radio" />
                      <span
                        className={
                          context.style.displayCoverTitle
                            ? "checkedCircle"
                            : "checkMark"
                        }
                        onClick={toggleCoverTitleClass}
                      ></span>
                    </label>
                    <label className="headerContainer coverLetterLabel">
                      Company details
                      <input
                        type="radio"
                        name="radio"
                        className="checkElements"
                      />
                      <span
                        className={
                          context.style.displayCompany
                            ? "checkedCircle"
                            : "checkMark"
                        }
                        onClick={toggleCompanyClass}
                      ></span>
                    </label>
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
