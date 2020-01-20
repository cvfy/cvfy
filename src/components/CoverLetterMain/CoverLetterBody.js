import React from "react";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";

class CoverLetterBody extends React.Component {
  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          return (
            <div className="cover-letter-body">
              <div className="editableHeaderDiv title">
                <span
                  className="title"
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
