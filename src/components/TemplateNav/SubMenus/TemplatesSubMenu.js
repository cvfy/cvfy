import React, { Component } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

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
              <button className="template-btn" onClick={this.showMenu}>
                <span className="tool-icon">❏</span>
                <span className="tool-desc">Templates</span>
              </button>

              {this.state.showMenu ? (
                <div
                  className="templatesSubMenu"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="templatesSubMenuTitle">Templates 1 / 3</div>
                  <div className="templatesSubMenuCarousel">
                    <div className="templatesSubMenuModels"></div>
                    <div className="templatesSubMenuModels"></div>
                    <div className="templatesSubMenuModels"></div>
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
