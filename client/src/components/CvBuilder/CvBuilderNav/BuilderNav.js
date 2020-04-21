import React, { useContext, useState } from "react";
import "../../../styles/BuilderNav.css";
import FontSubMenu from "../../BuilderSubMenus/FontSubMenu";
import ColorSubMenu from "../../BuilderSubMenus/ColorSubMenu";
import FontSizeSubMenu from "../../BuilderSubMenus/FontSizeSubMenu";
import LayoutSubMenu from "../../BuilderSubMenus/LayoutSubMenu";
import TemplatesSubMenu from "../../BuilderSubMenus/TemplatesSubMenu";
import BuilderBurgerMenu from "../../BuilderBurgerMenu";
import BuilderCollapseMenu from "../../BuilderCollapseMenu";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../contexts/ThemeContext";
import DownloadPdf from "../../BuilderSubMenus/DownloadPdf";
import Emoji from "react-emoji-render";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const BuilderNav = () => {
  const context = useContext(ThemeContext);

  const [navbarState, setNavbarState] = useState(false);
  const [loadingDownload, setLoadingDownload] = useState(false);

  const handleNavbar = () => setNavbarState(!navbarState);
  const handleDownload = () => setLoadingDownload(!loadingDownload);
  const LogOutCurrentCV_Cover = () => {
    localStorage.setItem("currentCV", "");
    localStorage.setItem("currentCover", "");
  };

  let status = false;

  const downloadPdf = async e => {
    setLoadingDownload(true);

    // initialize jsPDF
    const doc = new jsPDF("p", "mm", "a4");
    if (status === false) {
      status = await true;
      e.preventDefault();
      const pages = document.querySelectorAll(".A4");
      const numberOfPages = pages.length;
      for (let i = 0; i < numberOfPages; i++) {
        const page = document.querySelector(".containerA4" + [i]);
        await html2canvas(page, { scale: 1 }).then(function(canvas) {
          doc.addImage(
            canvas.toDataURL("image/png"),
            "JPEG",
            -1.5, // side margins
            0, // margin top
            215, // width
            290 // height
          );

          // Add new page at each iteration
          if (i < numberOfPages - 1) {
            doc.addPage();
          }
        });
      }
      // download the pdf with all the pages
      doc.save("resume_" + Date.now() + ".pdf");
      setLoadingDownload(false);
    }
  };

  return (
    <>
      <div className="CoverMenu">
        <NavLink style={{ textDecoration: "none", paddingLeft: "20px" }} to="/">
          <span
            onClick={() => LogOutCurrentCV_Cover()}
            className="logo-template"
          >
            CV|FY
          </span>
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
            <div className="docsDiv" style={{ display: "flex" }}>
              <span className="tool-icon tool-mydoc">
                <NavLink
                  to="/my-documents"
                  style={{ color: "#fff", textDecoration: "none" }}
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
      {loadingDownload ? (
        <div className="convertingPdfMessage">
          <p className="loadingText">
            <Emoji text="Converting to pdf :rocket:" />
          </p>
        </div>
      ) : null}
    </>
  );
};

export default BuilderNav;
