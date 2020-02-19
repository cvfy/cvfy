import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

class FontSubMenu extends Component {
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
                      onClick={changeFontFamily}
                    >
                      Open Sans
                    </div>
                    <div
                      title="Quicksand"
                      className="quickSandLi"
                      onClick={changeFontFamily}
                    >
                      Quicksand
                    </div>
                    <div
                      title="Ubuntu"
                      className="ubuntuLi"
                      onClick={changeFontFamily}
                    >
                      Ubuntu
                    </div>
                    <div
                      title="Hind"
                      className="hindLi"
                      onClick={changeFontFamily}
                    >
                      Hind
                    </div>
                    <div
                      title="Kurale"
                      className="kuraLi"
                      onClick={changeFontFamily}
                    >
                      Kurale
                    </div>
                    <div
                      title="Roboto Condensed"
                      className="robotLi"
                      onClick={changeFontFamily}
                    >
                      Roboto Condensed
                    </div>
                    <div
                      title="Merriweather"
                      className="merryLi"
                      onClick={changeFontFamily}
                    >
                      Merriweather
                    </div>
                    <div
                      title="Raleway"
                      className="ralewayLi"
                      onClick={changeFontFamily}
                    >
                      Raleway
                    </div>
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

export default FontSubMenu;
