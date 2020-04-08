import React from "react";
import { CoverLetterContext } from "../../../contexts/CoverLetterContext";
import CoverLetterContact from "./CoverLetterContact";
import store from "./../../../store.js";

function aFunction() {
  var newState = store.getState();
  return newState.auth.user.name;
}

const CoverLetterHeader = () => {
  return (
    <CoverLetterContext.Consumer>
      {context => {
        const { getCurrentDate, modifyCover } = context;
        return (
          <div className="header-wrap">
            <div className="header-inner-basic">
              <div className="introductionCover">
                <div
                  className="coverLetterName"
                  style={{
                    fontFamily: context.style.font,
                    color: context.style.color
                  }}
                >
                  {this.props.data.fullName}
                </div>

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
                    onBlur={e =>
                      modifyCover("professionalTitle", e.target.innerText)
                    }
                    style={{
                      fontSize: context.style.size1
                    }}
                  >
                    {this.props.data.professionalTitle}
                  </span>
                </div>
                <div
                  className={context.style.displayCompany ? "" : "hideSection"}
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
                      onBlur={e =>
                        modifyCover("companyDetails", e.target.innerText)
                      }
                      style={{
                        fontSize: context.style.size1
                      }}
                    >
                      {this.props.data.companyDetails}
                    </span>
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
              <CoverLetterContact />
            </div>
          </div>
        );
      }}
    </CoverLetterContext.Consumer>
  );
};
store.subscribe(aFunction);
export default CoverLetterHeader;
