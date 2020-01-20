import React from "react";
import "../../css/CoverLetterNav.css";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";
import FontSubMenu from "./SubMenus/FontSubMenu";
import ColorSubMenu from "./SubMenus/ColorSubMenu";
import FontSizeSubMenu from "./SubMenus/FontSizeSubMenu";
import LayoutSubMenu from "./SubMenus/LayoutSubMenu";
import TemplatesSubMenu from "./SubMenus/TemplatesSubMenu";

class CoverLetterNav extends React.Component {
  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          return (
            <div className="CvMenu">
              <span className="logo-template">CVFY</span>

              <div className="design">
                <div className="tool-label">Design</div>
                <div className="tools">
                  <FontSubMenu></FontSubMenu>
                  <ColorSubMenu></ColorSubMenu>
                  <FontSizeSubMenu></FontSizeSubMenu>
                  <LayoutSubMenu></LayoutSubMenu>
                  <TemplatesSubMenu></TemplatesSubMenu>
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
      </CoverLetterContext.Consumer>
    );
  }
}

export default CoverLetterNav;
