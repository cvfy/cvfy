import React from "react";
import CoverLetterNav from "./CoverLetterNav/CoverLetterNav";
// import CoverLetterContextProvider from "../../contexts/CoverLetterContext";
import CoverLetterBasic from "./CoverLetterMain/CoverLetterBasic";
import CoverLetterProfessional from "./CoverLetterMain/CoverLetterProfessional";
import CoverLetterExecutive from "./CoverLetterMain/CoverLetterExecutive";
import CoverLetterModern from "./CoverLetterMain/CoverLetterModern";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";

class CoverLetterBuilder extends React.Component {
  // componentWillUnmount(){
  //   localStorage.setItem("currentCover", "")
  // }
  // constructor() {
  //   super();
  //   this.state = {
  //     displayBasic: true,
  //     displayProfessional: false,
  //     displayModern: false,
  //     displayExecutive: false
  //   };
  // }

  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          return (
            // <CoverLetterContextProvider>
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
            // </CoverLetterContextProvider>
          );
        }}
      </CoverLetterContext.Consumer>
    );
  }
}

export default CoverLetterBuilder;
