import React, { useContext, useState } from "react";
import "../styles/BuilderNav.css";
import FontSubMenu from "./BuilderSubMenus/FontSubMenu";
import ColorSubMenu from "./BuilderSubMenus/ColorSubMenu";
import FontSizeSubMenu from "./BuilderSubMenus/FontSizeSubMenu";
import LayoutSubMenu from "./BuilderSubMenus/LayoutSubMenu";
import TemplatesSubMenu from "./BuilderSubMenus/TemplatesSubMenu";
import BuilderBurgerMenu from "./BuilderBurgerMenu";
import BuilderCollapseMenu from "./BuilderCollapseMenu";
import { NavLink } from "react-router-dom";
import axios from "axios";
//import { content } from "html2canvas/dist/types/css/property-descriptors/content";
import { ThemeContext } from "../contexts/ThemeContext";
import DownloadPdf from "./BuilderSubMenus/DownloadPdf";
const BuilderNav = () => {
  const context = useContext(ThemeContext);

  const [navbarState, setNavbarState] = useState(false);
  const [loadingDownload, setLoadingDownload] = useState(false);

  const handleNavbar = () => setNavbarState(!navbarState);
  const handleDownload = () => setLoadingDownload(!loadingDownload);

  let status = false;
  const downloadPdf = async e => {
    setLoadingDownload(true);
    if (status === false) {
      status = await true;
      e.preventDefault();
      console.log("I should be TRUE ->", loadingDownload);
      await axios
        .get(`http://localhost:5000/api/users/data/pdf/${context.id}`)
        .then(res => {
          window.open(
            `http://localhost:5000/static2/${res.data}.pdf`,
            "_blank"
          ); //this.setState(res.data)
          if (res.data.length > 0) return setLoadingDownload(false);
        });
      status = await false;
      setLoadingDownload(false);
    } else {
    }
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
            <LayoutSubMenu
              toggleOneColumn={context.toggleOneColumn}
              oneColumn={context.style.displayOneColumn}
              setStructure={context.setStructure}
            />
            <TemplatesSubMenu />
          </div>
        </div>
        <div className="download" onClick={e => downloadPdf(e)}>
          <DownloadPdf
            loadingDownload={loadingDownload}
            handleDownload={handleDownload}
          />
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

export default BuilderNav;
