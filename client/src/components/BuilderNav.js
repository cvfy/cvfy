import React, { useContext } from "react";
import "../styles/BuilderNav.css";
import FontSubMenu from "./BuilderSubMenus/FontSubMenu";
import ColorSubMenu from "./BuilderSubMenus/ColorSubMenu";
import FontSizeSubMenu from "./BuilderSubMenus/FontSizeSubMenu";
import LayoutSubMenu from "./BuilderSubMenus/LayoutSubMenu";
import TemplatesSubMenu from "./BuilderSubMenus/TemplatesSubMenu";
import { NavLink } from "react-router-dom";
import axios from "axios";
//import { content } from "html2canvas/dist/types/css/property-descriptors/content";
import { ThemeContext } from "../contexts/ThemeContext";
const BuilderNav = () => {
  const context = useContext(ThemeContext);

  const downloadPdf = () => {
    axios.get(`http://localhost:5000/api/users/data/pdf/${context.id}`).then(
      res =>
        window.open(`http://localhost:5000/static/${res.data}.pdf`, "_blank") //this.setState(res.data)
    );
  };
  return (
    <div className="CvMenu">
      <NavLink style={{ textDecoration: "none" }} to="/">
        <span className="logo-template">CV|FY</span>
      </NavLink>
      <div className="design">
        <div className="tool-label">Design</div>
        <div className="tools">
          <FontSubMenu />
          <ColorSubMenu />
          <FontSizeSubMenu />
          <LayoutSubMenu toggleOneColumn={context.toggleOneColumn} oneColumn={context.style.displayOneColumn} setStructure={context.setStructure} />
          <TemplatesSubMenu />
        </div>
      </div>
      <div className="download">
        <div className="download-btn">
          <div className="downloadDiv">
            <span className="tool-icon first-icon">⤓</span>
            <span
              onClick={() => downloadPdf()}
              className="tool-desc tool-download"
            >
              Download
            </span>
          </div>
        </div>
      </div>
      <div className="my-documents">
        <div className="my-docs-btn">
          <div className="docsDiv">
            <span className="tool-icon tool-mydoc">
              <NavLink
                to="/my-documents"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                MyDocuments
              </NavLink>
            </span>
          </div>
        </div>
      </div>
      <div className="template-menu">
        <div className="template-menu-btn">
          <div className="temp-menu">
            <span className="tool-menu-bar first-icon">―</span>
            <span className="tool-menu-bar first-icon">―</span>
            <span className="tool-menu-bar first-icon last-bar">―</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderNav;
