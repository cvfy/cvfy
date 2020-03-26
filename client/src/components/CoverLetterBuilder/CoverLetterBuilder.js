import React from "react";
import CoverLetterNav from "./CoverLetterNav/CoverLetterNav";
import CoverLetterContextProvider from "../../contexts/CoverLetterContext";
import CoverLetterMain from "./CoverLetterMain/CoverLetterMain";
// import CoverLetterProfessional from "./CoverLetterMain/CoverLetterProfessional";
// import CoverLetterExecutive from "./CoverLetterMain/CoverLetterExecutive";

class CoverLetterBuilder extends React.Component {
  render() {
    return (
      <CoverLetterContextProvider>
        <div className="App">
          <CoverLetterNav></CoverLetterNav>
          <CoverLetterMain />
          {/* <CoverLetterProfessional /> */}
          {/* <CoverLetterExecutive /> */}
        </div>
      </CoverLetterContextProvider>
    );
  }
}

export default CoverLetterBuilder;
