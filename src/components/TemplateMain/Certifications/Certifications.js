import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class Certifications extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="cert">
              <div className="section-label" style={{ color: context.color }}>
                CERTIFICATIONS
              </div>
              <div className="cert-body">
                <div className="cert-group">
                  <div className="editableDiv">
                    <span
                      className="certificationTitleSpan"
                      contentEditable="true"
                      style={{
                        fontSize: context.size4
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

export default Certifications;
