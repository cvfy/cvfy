import React from "react";
import CoverLetterNav from "./CoverLetterNav/CoverLetterNav";
import CoverLetterContextProvider from "../../contexts/CoverLetterContext";
import CoverLetterBasic from "./CoverLetterMain/CoverLetterBasic";
import CoverLetterProfessional from "./CoverLetterMain/CoverLetterProfessional";
import CoverLetterExecutive from "./CoverLetterMain/CoverLetterExecutive";
import CoverLetterModern from "./CoverLetterMain/CoverLetterModern";

class CoverLetterBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      displayBasic: false,
      displayProfessional: false,
      displayModern: false,
      displayExecutive: true
    };
  }

  render() {
    return (
      <CoverLetterContextProvider>
        <div className="App">
          <CoverLetterNav></CoverLetterNav>
          {this.state.displayBasic ? (
            <CoverLetterBasic />
          ) : this.state.displayProfessional ? (
            <CoverLetterProfessional />
          ) : this.state.displayModern ? (
            <CoverLetterModern />
          ) : this.state.displayExecutive ? (
            <CoverLetterExecutive />
          ) : null}
        </div>
      </CoverLetterContextProvider>
    );
  }
}

export default CoverLetterBuilder;
