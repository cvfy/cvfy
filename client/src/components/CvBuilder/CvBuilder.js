import React from "react";
import CvBuilderNav from "./CvBuilderNav/CvBuilderNav";
// import CvBuilderMain from "./CvBuilderMain/CvBuilderMain";
import ThemeContextProvider from "../../contexts/ThemeContext";
// import { Beforeunload } from "react-beforeunload";
import JobDashboard from "./JobDashboard/JobDashboard";
import BasicTemplate from "./CvBuilderTemplates/BasicTemplate";
// import ModernTemplate from "./CvBuilderTemplates/ModernTemplate";

class CvBuilder extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <>
          {/* <Beforeunload
            onBeforeunload={() => "Changes you made may not be saved"}
          /> */}
          <div className="cvBuilderWrapper" style={{ fontSize: "16px" }}>
            <CvBuilderNav />
            <div style={{ display: "flex" }}>
              {/* <CvBuilderMain /> */}
              <BasicTemplate />
              {/* <ModernTemplate /> */}
              <JobDashboard />
            </div>
          </div>
        </>
      </ThemeContextProvider>
    );
  }
}

export default CvBuilder;
