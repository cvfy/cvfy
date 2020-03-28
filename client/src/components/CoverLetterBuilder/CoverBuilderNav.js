import React, { useContext, useState } from "react";
import BuilderCollapseMenu from "../BuilderCollapseMenu";
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
import { url } from "../../config";
import Emoji from "react-emoji-render";

const CoverBuilderNav = () => {
  const context = useContext(CoverLetterContext);

  const [navbarState, setNavbarState] = useState(false);
  const [downloadCoverState, setDownloadCover] = useState(false);

  const handleNavbar = () => setNavbarState(!navbarState);
  const handleCoverDownload = () => setDownloadCover(!downloadCoverState);

  let status = false;
  const downloadPdfCover = async e => {
    setDownloadCover(true);
    e.preventDefault();
    if (status === false) {
      status = await true;
      await axios.get(`${url}/api/users/data/pdf/cover/${context.id}`).then(res => {
        window.open(`${url}/static2/${res.data}.pdf`, "_blank"); //this.setState(res.data)
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
            <div className="docsDiv" style={{display: "flex"}}>
            <span className="tool-icon tool-mydoc" >
              <img style={{padding: "7px"}} src="https://img.icons8.com/officel/30/000000/documents.png"/>
                <NavLink
                  to="/my-documents"
                  style={{ color: "#fff", textDecoration: "none" }}
                  >
                  <span className="MyDocs">My Docs</span>
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
        {downloadCoverState? (
        <div className="convertingPdfMessage">
          <p className="loadingText">
            <Emoji text="Converting to pdf :rocket:" />
          </p>
        </div>
      ) : null}
    </>
  );
};

export default CoverBuilderNav;
