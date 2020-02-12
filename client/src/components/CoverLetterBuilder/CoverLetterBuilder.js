import React from "react";
import CoverLetterNav from "./CoverLetterNav/CoverLetterNav";
import CoverLetterMain from "./CoverLetterMain/CoverLetterMain";
import ThemeContextProvider from "../../contexts/ThemeContext";

class CoverLetterBuilder extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <div className="App">
          <CoverLetterNav></CoverLetterNav>
          <CoverLetterMain></CoverLetterMain>
        </div>
      </ThemeContextProvider>
    );
  }
}

export default CoverLetterBuilder;
