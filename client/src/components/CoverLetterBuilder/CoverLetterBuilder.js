import React from "react";
import CoverLetterNav from "./CoverLetterNav/CoverLetterNav";
import CoverLetterMain from "./CoverLetterMain/CoverLetterMain";
import CoverLetterContextProvider from "../../contexts/CoverLetterContext";

class CoverLetterBuilder extends React.Component {
  render() {
    return (
      <CoverLetterContextProvider>
        <div className="App">
          <CoverLetterNav></CoverLetterNav>
          <CoverLetterMain></CoverLetterMain>
        </div>
      </CoverLetterContextProvider>
    );
  }
}

export default CoverLetterBuilder;
