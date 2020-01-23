import React from "react";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";
import CoverLetterContact from "./CoverLetterContact";

class CoverLetterHeader extends React.Component {
  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          return (
            <div className="header-wrap">
              <div className="header-inner">
                <div className="introduction">
                  <div
                    className="name"
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
      </CoverLetterContext.Consumer>
    );
  }
}

export default CoverLetterHeader;
