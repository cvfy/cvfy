import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import CoverLetterContact from "./CoverLetterContact";

class CoverLetterHeader extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="header-wrap">
              <div className="header-inner">
                <div className="introduction">
                  <div
                    className="coverLetterName"
                    style={{ fontFamily: context.font, color: context.color }}
                  >
                    BABYLONIAN DOG
                  </div>

                  <div className="editableHeaderDiv title">
                    <span
                      className="title"
                      contentEditable="true"
                      style={{
                        fontSize: context.size1
                      }}
                    ></span>
                  </div>

                  <div className="editableHeaderDiv">
                    <span
                      className="to"
                      contentEditable="true"
                      style={{
                        fontSize: context.size2
                      }}
                    ></span>
                  </div>

                  <div className="editableHeaderDiv">
                    <span
                      className="company"
                      contentEditable="true"
                      style={{
                        fontSize: context.size1
                      }}
                    ></span>
                  </div>
                  <div className="editableHeaderDiv">
                    <span
                      className="editDate"
                      contentEditable="true"
                      style={{
                        fontSize: context.size1
                      }}
                    ></span>
                  </div>
                </div>
              </div>
              <div className="contactWrapper">
                <CoverLetterContact></CoverLetterContact>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default CoverLetterHeader;
