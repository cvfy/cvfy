import React, { Component } from "react";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";

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
      <CoverLetterContext.Consumer>
        {context => {
          const { handleFontSize } = context;
          return (
            <div>
              <div className="layout-btn" onClick={this.showMenu}>
                <span className="tool-icon">↕</span>
                <span className="tool-desc">Font-size</span>
              </div>

              {this.state.showMenu ? (
                <div
                  className="fontSizeSubMenu"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="fontFamilyDiv">
                    <div
                      title="small"
                      className="openSansLi"
                      onClick={() => handleFontSize("small")}
                    >
                      Small
                    </div>
                    <div
                      title="medium"
                      className="openSansLi"
                      onClick={() => handleFontSize("medium")}
                    >
                      Medium
                    </div>
                    <div
                      title="big"
                      className="openSansLi"
                      onClick={() => handleFontSize("big")}
                    >
                      Big
                    </div>
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

export default FontSizeSubMenu;
