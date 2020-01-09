import React from "react";
import "./TemplateNav.css";
import { ThemeContext } from "../../contexts/ThemeContext";
// import FontSubNav from "./FontSubNav/FontSubNav";
import FontSubMenu from "./FontSubMenu/FontSubMenu";

class TemplateNav extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { changeColor, changeFontFamily, displaySubNav } = context;
          return (
            <div className="CvMenu">
              <span className="logo-template">CVFY</span>
              <div className="design">
                <div className="tool-label">Design</div>
                <div className="tools">
                  <FontSubMenu></FontSubMenu>
                  {/* <button className="font-btn" onClick={displaySubNav}>
                    <span className="tool-icon">A</span>
                    <span className="tool-desc">Font</span>
                  </button>
                  <FontSubNav style={{ displaySubNav }} /> */}
                  <button className="theme-btn" onClick={changeColor}>
                    <span className="tool-icon">✎</span>
                    <span className="tool-desc">Color</span>
                  </button>
                  <button className="layout-btn">
                    <span className="tool-icon">↕</span>
                    <span className="tool-desc">Font-size</span>
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
