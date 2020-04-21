import React, { useContext, useState } from "react";
import BuilderCollapseMenu from "../../BuilderCollapseMenu";
import "../../../styles/CoverBuilderNav.css";
import FontSubMenu from "../FontSubMenu";
import ColorSubMenu from "../ColorSubMenu";
import FontSizeSubMenu from "../FontSizeSubMenu";
import CoverLayoutSubMenu from "../../BuilderSubMenus/CoverLayoutSubMenu";
import TemplatesSubMenu from "../TemplatesSubMenu";
import { NavLink } from "react-router-dom";
import { CoverLetterContext } from "../../../contexts/CoverLetterContext";
import BuilderBurgerMenu from "../../BuilderBurgerMenu";
import DownloadPdfCover from "../../BuilderSubMenus/DownloadPdfCover";
import Emoji from "react-emoji-render";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CoverBuilderNav = () => {
  const context = useContext(CoverLetterContext);

  const [navbarState, setNavbarState] = useState(false);
  const [downloadCoverState, setDownloadCover] = useState(false);

  const handleNavbar = () => setNavbarState(!navbarState);
  const handleCoverDownload = () => setDownloadCover(!downloadCoverState);
  let status = false;
  const LogOutCurrentCV_Cover = () => {
    localStorage.removeItem("currentCV");
    localStorage.removeItem("currentCover");
  };

  const downloadPdfCover = async e => {
    setDownloadCover(true);
    e.preventDefault();

    // initialize jsPDF
    const doc = new jsPDF("p", "mm", "a4");
    if (status === false) {
      status = await true;
      const page = document.querySelector("#container");
      await html2canvas(page, { scale: 1 }).then(function(canvas) {
        doc.addImage(
          canvas.toDataURL("image/png"),
          "JPEG",
          -1.5, // side margins
          0, // margin top
          215, // width
          290 // height
        );
      });

      // download the pdf with all the pages
      doc.save("cover_letter_" + Date.now() + ".pdf");
      setDownloadCover(false);
    }
  };

  return (
    <>
      <div className="CvMenu">
        <NavLink
          style={{ textDecoration: "none", paddingLeft: "20px" }}
          to="/"
          onClick={() => LogOutCurrentCV_Cover()}
        >
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
            <div className="docsDiv" style={{ display: "flex" }}>
              <span className="tool-icon tool-mydoc">
                <NavLink
                  to="/my-documents"
                  style={{ color: "#fff", textDecoration: "none" }}
                  onHover={{ color: "red" }}
                  onClick={() => LogOutCurrentCV_Cover()}
                >
                  <img
                    style={{ padding: "0 7px" }}
                    src="https://img.icons8.com/officel/20/000000/documents.png"
                  />
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
      {downloadCoverState ? (
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
