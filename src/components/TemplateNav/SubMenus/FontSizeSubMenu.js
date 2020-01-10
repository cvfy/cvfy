import React, { Component } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class FontSizeSubMenu extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
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

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { handleFontSize } = context;
          return (
            <div>
              <button className="layout-btn" onClick={this.showMenu}>
                <span className="tool-icon">↕</span>
                <span className="tool-desc">Font-size</span>
              </button>

              {this.state.showMenu ? (
                <div
                  className="fontSizeSubMenu"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="fontFamilyDiv">
                    <button
                      name="small"
                      className="openSansLi"
                      onClick={handleFontSize}
                    >
                      Small
                    </button>
                    <button
                      name="medium"
                      className="openSansLi"
                      onClick={handleFontSize}
                    >
                      Medium
                    </button>
                    <button
                      name="big"
                      className="openSansLi"
                      onClick={handleFontSize}
                    >
                      Big
                    </button>
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

export default FontSizeSubMenu;
