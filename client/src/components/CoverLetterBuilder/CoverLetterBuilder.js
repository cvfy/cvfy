import React, { useEffect } from "react";
import CoverLetterNav from "./CoverLetterNav/CoverLetterNav";
import CoverLetterBasic from "./CoverLetterMain/CoverLetterBasic";
import CoverLetterProfessional from "./CoverLetterMain/CoverLetterProfessional";
import CoverLetterExecutive from "./CoverLetterMain/CoverLetterExecutive";
import CoverLetterModern from "./CoverLetterMain/CoverLetterModern";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";

const CoverLetterBuilder = () => {
  // This function make sure we scroll the page view to top when we enter the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CoverLetterContext.Consumer>
      {context => {
        return (
          <div className="AppCover" style={{ overflowX: "hidden" }}>
            <CoverLetterNav></CoverLetterNav>
            {context.style.displayBasicTemplate ? (
              <CoverLetterBasic />
            ) : context.style.displayProfessionalTemplate ? (
              <CoverLetterProfessional />
            ) : context.style.displayModernTemplate ? (
              <CoverLetterModern />
            ) : context.style.displayExecutiveTemplate ? (
              <CoverLetterExecutive />
            ) : null}
          </div>
        );
      }}
    </CoverLetterContext.Consumer>
  );
};

export default CoverLetterBuilder;
