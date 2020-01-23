import React from "react";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";

class CoverLetterBody extends React.Component {
  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          return (
            <div className="cover-letter-body-wrapper">
              <div className="cover-letter-body">
                <div className="editableDiv ">
                  <span
                    className="coverLetterBody"
                    contentEditable="true"
                    style={{
                      fontSize: context.size3
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
                  style={{
                    fontSize: context.size3
                  }}
                ></span>
                <span
                  className="coverLetterSignature"
                  contentEditable="true"
                  style={{
                    fontSize: context.size3
                  }}
                ></span>
              </div>
            </div>
          );
        }}
      </CoverLetterContext.Consumer>
    );
  }
}

export default CoverLetterBody;
