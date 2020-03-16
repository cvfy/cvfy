import React, { useContext, useState } from "react";
import BuilderCollapseMenu from "../BuilderCollapseMenu"
import "../../styles/CoverBuilderNav.css";
import FontSubMenu from "./FontSubMenu";
import ColorSubMenu from "./ColorSubMenu";
import FontSizeSubMenu from "./FontSizeSubMenu";
import CoverLayoutSubMenu from "../BuilderSubMenus/CoverLayoutSubMenu";
import TemplatesSubMenu from "./TemplatesSubMenu";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";
import BuilderBurgerMenu from "../BuilderBurgerMenu";
import DownloadPdfCover from "../BuilderSubMenus/DownloadPdfCover";
const CoverBuilderNav = () => {
  const context = useContext(CoverLetterContext);

  const [navbarState, setNavbarState] = useState(false);
  const [downloadCoverState, setDownloadCover] = useState(false);

  const handleNavbar = () => setNavbarState(!navbarState);
  const handleCoverDownload = () => setDownloadCover(!downloadCoverState);

  let status = false;
  const downloadPdfCover = async e => {
    setDownloadCover(true);
    if (status === false) {
      status = await true;
      e.preventDefault();
      await axios
        .get(`http://localhost:5000/api/users/data/pdf/${context.id}`)
        .then(res => {
          window.open(
            `http://localhost:5000/static2/${res.data}.pdf`,
            "_blank"
          ); //this.setState(res.data)
          if (res.data.length > 0) return setDownloadCover(false);
        });
      status = await false;
      setDownloadCover(false);
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
            <CoverLayoutSubMenu />
            <TemplatesSubMenu />
          </div>
        </div>
        <div className="download" onClick={e => downloadPdfCover(e)}>
          <DownloadPdfCover
            downloadCoverState={downloadCoverState}
            handleCoverDownload={handleCoverDownload}
          />
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
