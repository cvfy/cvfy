import React, { Component } from "react";
import { CoverLetterContext } from "../../../contexts/CoverLetterContext";

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
      <CoverLetterContext.Consumer>
        {context => {
          const { changeFontFamily } = context;
          return (
            <div>
              <button className="font-btn" onClick={this.showMenu}>
                <span className="tool-icon">A</span>
                <span className="tool-desc">Font</span>
              </button>

              {this.state.showMenu ? (
                <div
                  className="fontSubMenu"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="fontFamilyDiv">
                    <button
                      name="Open Sans"
                      className="openSansLi"
                      onClick={changeFontFamily}
                    >
                      Open Sans
                    </button>
                    <button
                      name="Quicksand"
                      className="quickSandLi"
                      onClick={changeFontFamily}
                    >
                      Quicksand
                    </button>
                    <button
                      name="Ubuntu"
                      className="ubuntuLi"
                      onClick={changeFontFamily}
                    >
                      Ubuntu
                    </button>
                    <button
                      name="Hind"
                      className="hindLi"
                      onClick={changeFontFamily}
                    >
                      Hind
                    </button>
                    <button
                      name="Kurale"
                      className="kuraLi"
                      onClick={changeFontFamily}
                    >
                      Kurale
                    </button>
                    <button
                      name="Roboto Condensed"
                      className="robotLi"
                      onClick={changeFontFamily}
                    >
                      Roboto Condensed
                    </button>
                    <button
                      name="Merriweather"
                      className="merryLi"
                      onClick={changeFontFamily}
                    >
                      Merriweather
                    </button>
                    <button
                      name="Raleway"
                      className="ralewayLi"
                      onClick={changeFontFamily}
                    >
                      Raleway
                    </button>
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
