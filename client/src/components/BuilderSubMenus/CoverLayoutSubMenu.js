import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

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
          return (
            <div>
              <div className="layout-btn " onClick={this.showMenu}>
                <span className="tool-icon">☷</span>
                <span className="tool-desc">Layout</span>
              </div>

              {this.state.showMenu ? (
                <div
                  className="coverLayoutSubMenu"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                ></div>
              ) : null}
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default CoverLayoutSubMenu;
