import React from "react";
import CoverLetterNav from "./CoverLetterNav/CoverLetterNav";
// import CoverLetterMain from "./CoverLetterMain/CoverLetterMain";
import CoverLetterContextProvider from "../../contexts/CoverLetterContext";
import CoverLetterProfessional from "./CoverLetterMain/CoverLetterProfessional";

class CoverLetterBuilder extends React.Component {
  render() {
    return (
      <CoverLetterContextProvider>
        <div className="App">
          <CoverLetterNav></CoverLetterNav>
          {/* <CoverLetterMain></CoverLetterMain> */}
          <CoverLetterProfessional />
        </div>
      </CoverLetterContextProvider>
    );
  }
}

export default CoverLetterBuilder;
