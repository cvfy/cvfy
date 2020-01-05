import React from "react";
import "./TemplateNav.css";
import { ThemeContext } from "../../contexts/ThemeContext";

class TemplateNav extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { changeColor, changeFontFamily } = context;
          return (
            <div className="menu">
              <span className="logo-template">CVFY</span>
              <div className="design">
                <div className="tool-label">Design</div>
                <div className="tools">
                  <button className="font-btn" onClick={changeFontFamily}>
                    <span className="tool-icon first-icon">
                      <img
                        src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/text-icon-18-256.png"
                        alt="text icon"
                        title="text icon"
                        className="template-icon"
                      />
                    </span>
                    <span className="tool-desc">Font</span>
                  </button>
                  <button className="theme-btn" onClick={changeColor}>
                    <span className="tool-icon">
                      <img
                        src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/brush-icon-18-256.png"
                        alt="brush icon"
                        title="brush icon"
                        className="template-icon"
                      />
                    </span>
                    <span className="tool-desc">Theme</span>
                  </button>
                  <button className="layout-btn">
                    <span className="tool-icon">☷</span>
                    <span className="tool-desc">Layout</span>
                  </button>
                  <button className="template-btn">
                    <span className="tool-icon">❏</span>
                    <span className="tool-desc">Template</span>
                  </button>
                </div>
              </div>
              <div className="utilities">
                <div className="tool-label">Utilities</div>
                <div className="tools">
                  <button className="back-btn">
                    <span className="tool-icon">❰</span>
                  </button>
                  <button className="fwd-btn">
                    <span className="tool-icon">❱</span>
                  </button>
                </div>
              </div>

              <div className="download">
                <button className="download-btn" onClick={this.doc}>
                  <div className="tools">
                    <span className="tool-icon first-icon">⤓</span>
                    <span className="tool-desc tool-download">Download</span>
                  </div>
                </button>
              </div>

              <div className="my-documents">
                <button className="my-docs-btn">
                  <div className="tools">
                    <span className="tool-icon tool-mydoc">My Documents</span>
                  </div>
                </button>
              </div>

              <div className="template-menu">
                <button className="template-menu-btn">
                  <div className="tools temp-menu">
                    <span className="tool-menu-bar first-icon">―</span>
                    <span className="tool-menu-bar first-icon">―</span>
                    <span className="tool-menu-bar first-icon last-bar">―</span>
                  </div>
                </button>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default TemplateNav;
