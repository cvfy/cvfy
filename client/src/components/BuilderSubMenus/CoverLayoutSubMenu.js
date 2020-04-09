import React, { Component } from "react";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";
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

  // This function opens sub menu onclick and add close menu function
  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  // This function close sub menu onclick outside the target and remove close menu function
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
      <CoverLetterContext.Consumer>
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
                        onClick={() => toggleCoverTitleClass()}
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
                        onClick={() => toggleCompanyClass()}
                      ></span>
                    </label>
                  </div>
                </div>
              ) : null}
            </div>
          );
        }}
      </CoverLetterContext.Consumer>
    );
  }
}

export default CoverLayoutSubMenu;
