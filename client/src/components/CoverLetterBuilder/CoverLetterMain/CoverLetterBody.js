import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class CoverLetterBody extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="cover-letter-body-wrapper">
              <div className="cover-letter-body">
                <div className="editableDiv ">
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
                ></span>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default CoverLetterBody;
