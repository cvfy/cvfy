import React, {getState} from "react";
import { CoverLetterContext } from "../../../contexts/CoverLetterContext";
import store from "./../../../store.js";


function aFunction() {
  var newState = store.getState();
  return newState.auth.user.name;}
class CoverLetterBody extends React.Component {
  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          return (
            <div className="cover-letter-body-wrapper">
              <div className="cover-letter-body">
                <div className="editableDiv bodyCoverDiv">
                  <span
                    className="coverLetterBody"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.style.size3
                    }}
                  >
                    Dear Sir/Madam,
                  </span>
                </div>
              </div>

              <div className="editableDiv signatureDiv">
                <span
                  className="coverLetterRegards"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  style={{
                    fontSize: context.style.size3
                  }}
                ></span>
                <span
                  className="coverLetterSignature"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  style={{
                    fontSize: context.style.size3
                  }}
                >{aFunction()}</span>
              </div>
            </div>
          );
        }}
      </CoverLetterContext.Consumer>
    );
  }
}
store.subscribe(aFunction);

export default CoverLetterBody;
