import React from "react";
import "./TemplateNav.css";

class TemplateNav extends React.Component {
  render() {
    return (
      <div className="menu">
        <span className="logo-template">CVFY</span>
        <div className="design">
          <div className="tool-label">Design</div>
          <div className="tools">
            <span className="tool-icon first-icon">
              <img
                src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/text-icon-18-256.png"
                alt="text icon"
                title="text icon"
                className="template-icon"
              />
            </span>
            <span className="tool-desc">Font</span>
            <span className="tool-icon">
              <img
                src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/brush-icon-18-256.png"
                alt="brush icon"
                title="brush icon"
                className="template-icon"
              />
            </span>
            <span className="tool-desc">Theme</span>
            <span className="tool-icon">☷</span>
            <span className="tool-desc">Layout</span>
            <span className="tool-icon">❏</span>
            <span className="tool-desc">Template</span>
          </div>
        </div>
        <div className="utilities">
          <div className="tool-label">Utilities</div>
          <div className="tools">
            <span className="tool-icon first-icon">❰</span>
            <span className="tool-icon">❱</span>
          </div>
        </div>
        <div className="download">
          <div className="tools">
            <span className="tool-icon first-icon">⤓</span>
            <span className="tool-desc tool-download">Download</span>
          </div>
        </div>
        <div className="my-documents">
          <div className="tools">
            <span className="tool-icon tool-download">My Documents</span>
          </div>
        </div>
        <div className="template-menu">
          <div className="tools temp-menu">
            <span className="tool-menu-bar first-icon">―</span>
            <span className="tool-menu-bar first-icon">―</span>
            <span className="tool-menu-bar first-icon">―</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateNav;
