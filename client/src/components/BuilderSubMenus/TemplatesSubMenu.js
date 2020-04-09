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
      <ThemeContext.Consumer>
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
                      className="cvTemplatesSubMenuModels executiveTemplate"
                      title="Executive"
                      onClick={showExecutiveTemplate}
                    ></div>
                    <div
                      className="cvTemplatesSubMenuModels professionalTemplate"
                      title="Professional"
                      onClick={showProfessionalTemplate}
                    ></div>
                    <div
                      className="cvTemplatesSubMenuModels modernTemplate"
                      title="Modern"
                      onClick={showModernTemplate}
                    ></div>
                    <div
                      className="cvTemplatesSubMenuModels basicTemplate"
                      title="Basic"
                      onClick={showBasicTemplate}
                    ></div>
                    <div className="executiveTitle">Executive</div>
                    <div className="professionalTitle">Professional</div>
                    <div className="modernTitle">Modern</div>
                    <div className="basicTitle">Basic</div>
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
