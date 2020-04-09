import React, { useEffect } from "react";
import CvBuilderNav from "./CvBuilderNav/CvBuilderNav";
import { ThemeContext } from "../../contexts/ThemeContext";
import JobDashboard from "./JobDashboard/JobDashboard";
import CvBuilderMain from "./CvBuilderMain/CvBuilderMain";
import BasicTemplate from "./CvBuilderTemplates/BasicTemplate";
import ProfessionalTemplate from "./CvBuilderTemplates/ProfessionalTemplate";
import ModernTemplate from "./CvBuilderTemplates/ModernTemplate";

const CvBuilder = () => {
  // This function make sure we scroll the page view to top when we enter the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeContext.Consumer>
      {context => {
        return (
          <>
            <div
              className="cvBuilderWrapper"
              style={{ fontSize: "16px", overflowX: "hidden" }}
            >
              <CvBuilderNav />
              <div style={{ display: "flex" }}>
                {context.style.displayBasic ? (
                  <BasicTemplate />
                ) : context.style.displayProfessional ? (
                  <ProfessionalTemplate />
                ) : context.style.displayModern ? (
                  <ModernTemplate />
                ) : context.style.displayExecutive ? (
                  <CvBuilderMain />
                ) : null}
                <JobDashboard />
              </div>
            </div>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default CvBuilder;
