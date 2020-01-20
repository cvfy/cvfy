import React from "react";
import "../../css/CoverLetterMain.css";
import CoverLetterHeader from "./CoverLetterHeader";
import CoverLetterContact from "./CoverLetterContact";
import CoverLetterBody from "./CoverLetterBody";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";

class CoverLetterMain extends React.Component {
  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          return (
            <div className="alignContainer">
              <div
                id="container"
                style={{ fontFamily: context.font, fontSize: context.size3 }}
              >
                <CoverLetterHeader></CoverLetterHeader>
                <CoverLetterContact></CoverLetterContact>
                <div className="wrap">
                  <CoverLetterBody></CoverLetterBody>
                </div>
              </div>
            </div>
          );
        }}
      </CoverLetterContext.Consumer>
    );
  }
}

export default CoverLetterMain;
