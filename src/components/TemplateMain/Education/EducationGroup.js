import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class EducationGroup extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="education-group">
              <div className="editableDiv">
                <span
                  className="studyProgram"
                  contentEditable="true"
                  style={{
                    fontSize: context.size2
                  }}
                ></span>
              </div>

              <div className="editableDiv">
                <span
                  className="institution"
                  contentEditable="true"
                  style={{
                    fontSize: context.size2
                  }}
                ></span>
              </div>

              <div className="time-loc">
                <div className="period">
                  <span
                    className="month"
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
                    className="year"
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
                    className="month"
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
                    className="year"
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
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default EducationGroup;
