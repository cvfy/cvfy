import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import CoverLetterContact from "./CoverLetterContact";

class CoverLetterHeader extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { getCurrentDate } = context;
          return (
            <div className="header-wrap">
              <div className="header-inner">
                <div className="introduction">
                  <div
                    className="coverLetterName"
                    style={{
                      fontFamily: context.style.font,
                      color: context.style.color
                    }}
                  ></div>

                  <div
                    className={
                      context.style.displayCoverTitle
                        ? "editableHeaderDiv title"
                        : "hideSection"
                    }
                  >
                    <span
                      className="title"
                      contentEditable="true"
                      style={{
                        fontSize: context.style.size1
                      }}
                    ></span>
                  </div>
                  <div
                    className={
                      context.style.displayCompany ? "" : "hideSection"
                    }
                  >
                    <div className="editableHeaderDiv">
                      <span
                        className="to"
                        contentEditable="true"
                        style={{
                          fontSize: context.style.size2
                        }}
                      ></span>
                    </div>

                    <div className="editableHeaderDiv">
                      <span
                        className="company"
                        contentEditable="true"
                        style={{
                          fontSize: context.style.size1
                        }}
                      ></span>
                    </div>
                  </div>
                  <div className="editableHeaderDiv">
                    <span
                      className="editDate"
                      style={{
                        fontSize: context.style.size1
                      }}
                    >
                      {getCurrentDate()}
                    </span>
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
