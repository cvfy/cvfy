import React, { Component } from "react";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";

class FontSubMenu extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
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

  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          const { changeFontFamily } = context;
          return (
            <div>
              <div className="font-btn" onClick={this.showMenu}>
                <span className="tool-icon">A</span>
                <span className="tool-desc">Font</span>
              </div>

              {this.state.showMenu ? (
                <div
                  className="fontSubMenu"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="fontFamilyDiv">
                    <div
                      title="Open Sans"
                      className="openSansLi"
                      onClick={() => changeFontFamily("Open Sans")}
                    >
                      Open Sans
                    </div>
                    <div
                      title="Quicksand"
                      className="quickSandLi"
                      onClick={() => changeFontFamily("Quicksand")}
                    >
                      Quicksand
                    </div>
                    <div
                      title="Ubuntu"
                      className="ubuntuLi"
                      onClick={() => changeFontFamily("Ubuntu")}
                    >
                      Ubuntu
                    </div>
                    <div
                      title="Hind"
                      className="hindLi"
                      onClick={() => changeFontFamily("Hind")}
                    >
                      Hind
                    </div>
                    <div
                      title="Kurale"
                      className="kuraLi"
                      onClick={() => changeFontFamily("Kurale")}
                    >
                      Kurale
                    </div>
                    <div
                      title="Roboto Condensed"
                      className="robotLi"
                      onClick={() => changeFontFamily("Roboto Condensed")}
                    >
                      Roboto Condensed
                    </div>
                    <div
                      title="Merriweather"
                      className="merryLi"
                      onClick={() => changeFontFamily("Merriweather")}
                    >
                      Merriweather
                    </div>
                    <div
                      title="Raleway"
                      className="ralewayLi"
                      onClick={() => changeFontFamily("Raleway")}
                    >
                      Raleway
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

export default FontSubMenu;
