import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class Education extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="education">
              <div className="section-label" style={{ color: context.color }}>
                EDUCATION
              </div>
              <div className="education-body">
                <div className="education-group">
                  <div className="editableDiv">
                    <span
                      className="studyProgramSpan"
                      contentEditable="true"
                      style={{
                        fontSize: context.size2
                      }}
                    ></span>
                  </div>

                  <div className="editableDiv">
                    <span
                      className="institutionSpan"
                      contentEditable="true"
                      style={{
                        fontSize: context.size2
                      }}
                    ></span>
                  </div>

                  <div className="time-loc">
                    <div className="period">
                      <span
                        className="monthSpan"
                        style={{
                          fontSize: context.size4
                        }}
                        contentEditable="true"
                      ></span>
                      <span
                        className="dateDivider"
                        style={{
                          fontSize: context.size4
                        }}
                      >
                        /
                      </span>
                      <span
                        className="yearSpan"
                        style={{
                          fontSize: context.size4
                        }}
                        contentEditable="true"
                      ></span>
                      <span
                        className="dateDivider"
                        style={{
                          fontSize: context.size4
                        }}
                      >
                        -
                      </span>
                      <span
                        className="monthSpan"
                        style={{
                          fontSize: context.size4
                        }}
                        contentEditable="true"
                      ></span>
                      <span
                        className="dateDivider"
                        style={{
                          fontSize: context.size4
                        }}
                      >
                        /
                      </span>
                      <span
                        className="yearSpan"
                        style={{
                          fontSize: context.size4
                        }}
                        contentEditable="true"
                      ></span>
                    </div>

                    <div className="location">
                      <span
                        className="place"
                        style={{
                          fontSize: context.size4
                        }}
                        contentEditable="true"
                      ></span>
                    </div>
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

export default Education;
