import React from "react";
import "../../../styles/CoverLetterMain.css";
import CoverLetterHeader from "./CoverLetterHeader";
import CoverLetterBody from "./CoverLetterBody";
import { CoverLetterContext } from "../../../contexts/CoverLetterContext";

class CoverLetterMain extends React.Component {
  render() {
    return (
      <CoverLetterContext.Consumer>
        { context => {
          return (
            <div className="alignContainer">
              <div
                id="container"
                style={{ fontFamily: context.style.font, fontSize: context.style.size3 }}
              >
                <CoverLetterHeader></CoverLetterHeader>
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
