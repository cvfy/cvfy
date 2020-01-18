import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class TemplateHeader extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="header">
              <div className="header-inner">
                <div className="photo">
                  <img
                    src="./dogFather.png"
                    alt="dog"
                    height="110px"
                    width="110px"
                    className="profile-photo"
                  />
                </div>
                <div className="introduction">
                  <div className="name" style={{ fontFamily: context.font }}>
                    BABYLONIAN DOG
                  </div>

                  <div className="editableHeaderDiv title">
                    <span
                      className="titleSpan"
                      contentEditable="true"
                      style={{
                        fontSize: context.size1
                      }}
                    ></span>
                  </div>

                  <div className="editableHeaderDiv">
                    <span
                      className="summarySpan"
                      contentEditable="true"
                      style={{
                        fontSize: context.size3
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default TemplateHeader;
