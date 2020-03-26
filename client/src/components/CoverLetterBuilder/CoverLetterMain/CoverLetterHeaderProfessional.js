import React from "react";
import { CoverLetterContext } from "../../../contexts/CoverLetterContext";
import CoverLetterContact from "./CoverLetterContact";
import store from "../../../store.js";
// import Contacts from "../../CvBuilder/CvBuilderMain/Contacts/Contacts";

function aFunction() {
  var newState = store.getState();
  return newState.auth.user.name;
}
class CoverLetterHeaderProfessional extends React.Component {
  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          const { getCurrentDate, modifyCover } = context;
          return (
            <div className="header-wrap-prof">
              <div className="header-inner-prof">
                <div className="introductionCoverProf">
                  <div
                    className="professionalStyling"
                    style={{ background: context.style.color }}
                  >
                    <div
                      className="coverLetterNameProf"
                      style={{
                        fontFamily: context.style.font
                      }}
                    >
                      {this.props.data.fullName}
                    </div>

                    <div
                      className={
                        context.style.displayCoverTitle
                          ? "editableHeaderDiv titleProf"
                          : "hideSection"
                      }
                    >
                      <span
                        className="titleProf"
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
                  </div>
                  <div
                    className={
                      context.style.displayCompany ? "" : "hideSection"
                    }
                    style={{ paddingLeft: "3rem" }}
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
                  <div
                    className="editableHeaderDiv"
                    style={{ paddingLeft: "3rem" }}
                  >
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
              <div
                className="contactWrapper"
                style={{ alignSelf: "flex-start" }}
              >
                <CoverLetterContact />
              </div>
            </div>
          );
        }}
      </CoverLetterContext.Consumer>
    );
  }
}
store.subscribe(aFunction);
export default CoverLetterHeaderProfessional;
