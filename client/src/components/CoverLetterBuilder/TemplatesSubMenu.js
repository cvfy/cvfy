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
            showBasicCoverTemplate,
            showExecutiveCoverTemplate,
            showModernCoverTemplate,
            showProfessionalCoverTemplate
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
                      className="coverTemplatesSubMenuModels executiveCoverTemplate"
                      title="Executive"
                      onClick={showExecutiveCoverTemplate}
                    ></div>
                    <div
                      className="coverTemplatesSubMenuModels professionalCoverTemplate"
                      title="Professional"
                      onClick={showProfessionalCoverTemplate}
                    ></div>
                    <div
                      className="coverTemplatesSubMenuModels modernCoverTemplate"
                      title="Modern"
                      onClick={showModernCoverTemplate}
                    ></div>
                    <div
                      className="coverTemplatesSubMenuModels basicCoverTemplate"
                      title="Basic"
                      onClick={showBasicCoverTemplate}
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
      </CoverLetterContext.Consumer>
    );
  }
}

export default FontSubMenu;
