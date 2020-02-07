import React from "react";
import CvBuilderNav from "./CvBuilderNav/CvBuilderNav";
import CvBuilderMain from "./CvBuilderMain/CvBuilderMain";
import "./CvBuilder.css";
import ThemeContextProvider from "../../contexts/ThemeContext";

class CvBuilder extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <div>
          <CvBuilderNav />
          <CvBuilderMain />
        </div>
      </ThemeContextProvider>
    );
  }
}

export default CvBuilder;
