import React from "react";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";

class CoverLetterHeader extends React.Component {
  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          return (
            <div className="header-inner">
              <div className="introduction">
                <div className="name" style={{ fontFamily: context.font }}>
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
                    className="summary"
                    contentEditable="true"
                    style={{
                      fontSize: context.size3
                    }}
                  ></span>
                </div>
              </div>
            </div>
          );
        }}
      </CoverLetterContext.Consumer>
    );
  }
}

export default CoverLetterHeader;
