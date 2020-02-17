import React from "react";
import CvBuilderNav from "./CvBuilderNav/CvBuilderNav";
import CvBuilderMain from "./CvBuilderMain/CvBuilderMain";
import ThemeContextProvider from "../../contexts/ThemeContext";

class CvBuilder extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <div className="cvBuilderWrapper" style={{ fontSize: "16px" }}>
          <CvBuilderNav />
          <CvBuilderMain />
        </div>
      </ThemeContextProvider>
    );
  }
}

export default CvBuilder;
