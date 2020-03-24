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
          const {
            showBasicTemplate,
            showExecutiveTemplate,
            showModernTemplate,
            showProfessionalTemplate
          } = context;
          return (
            <div>
              <div className="template-btn" onClick={this.showMenu}>
                <span className="tool-icon">❏</span>
                <span className="tool-desc">Templates</span>
              </div>

              {this.state.showMenu ? (
                <div
                  className="templatesSubMenu"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="templatesSubMenuTitle">Templates 1 / 4</div>
                  <div className="templatesSubMenuCarousel">
                    <div
                      className="templatesSubMenuModels"
                      title="Basic"
                      onClick={showBasicTemplate}
                    ></div>
                    <div
                      className="templatesSubMenuModels"
                      title="Professional"
                      onClick={showProfessionalTemplate}
                    ></div>
                    <div
                      className="templatesSubMenuModels"
                      title="Modern"
                      onClick={showModernTemplate}
                    ></div>
                    <div
                      className="templatesSubMenuModels"
                      title="Executive"
                      onClick={showExecutiveTemplate}
                    ></div>
                    <div>Basic</div>
                    <div>Professional</div>
                    <div>Modern</div>
                    <div>Executive</div>
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
