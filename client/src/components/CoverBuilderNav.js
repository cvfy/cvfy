import React, { useContext, useState } from "react";
import BuilderCollapseMenu from "./BuilderCollapseMenu";
import "../styles/CoverBuilderNav.css";
import FontSubMenu from "./BuilderSubMenus/FontSubMenu";
import ColorSubMenu from "./BuilderSubMenus/ColorSubMenu";
import FontSizeSubMenu from "./BuilderSubMenus/FontSizeSubMenu";
import CoverLayoutSubMenu from "./BuilderSubMenus/CoverLayoutSubMenu";
import TemplatesSubMenu from "./BuilderSubMenus/TemplatesSubMenu";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../contexts/ThemeContext";
import BuilderBurgerMenu from "./BuilderBurgerMenu";
const CoverBuilderNav = () => {
  const context = useContext(ThemeContext);

  const [navbarState, setNavbarState] = useState(false);

  const handleNavbar = () => setNavbarState(!navbarState);

  const downloadPdf = () => {
    axios.get(`http://localhost:5000/api/users/data/pdf/${context.id}`).then(
      res =>
        window.open(`http://localhost:5000/static/${res.data}.pdf`, "_blank") //this.setState(res.data)
    );
  };
  return (
    <>
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
            <CoverLayoutSubMenu />
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
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  MyDocuments
                </NavLink>
              </span>
            </div>
          </div>
        </div>

        <BuilderBurgerMenu
          navbarState={navbarState}
          handleNavbar={handleNavbar}
        />
      </div>
      <BuilderCollapseMenu
        navbarState={navbarState}
        handleNavbar={handleNavbar}
      />
    </>
  );
};

export default CoverBuilderNav;
