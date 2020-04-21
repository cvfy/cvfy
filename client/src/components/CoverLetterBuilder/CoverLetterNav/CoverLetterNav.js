import React from "react";
import ExtraToolsMenu from "./ExtraToolsMenu";
import CoverBuilderNav from "./CoverBuilderNav";

const CoverLetterNav = () => {
  return (
    <div className="CvMenuWrapper">
      <CoverBuilderNav />
      <ExtraToolsMenu />
    </div>
  );
};

export default CoverLetterNav;
