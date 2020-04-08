import React from "react";
import CoverLetterNav from "./CoverLetterNav/CoverLetterNav";
import CoverLetterBasic from "./CoverLetterMain/CoverLetterBasic";
import CoverLetterProfessional from "./CoverLetterMain/CoverLetterProfessional";
import CoverLetterExecutive from "./CoverLetterMain/CoverLetterExecutive";
import CoverLetterModern from "./CoverLetterMain/CoverLetterModern";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";

const CoverLetterBuilder = () => {
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
