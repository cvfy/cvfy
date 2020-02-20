import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class EducationGroup extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { handleContentEditable } = context;
          return (
            <div className="education-group break-before">
              <div className="editableDiv">
                <span
                  title="studyProgram"
                  className="studyProgram"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  // onClick={handleContentEditable}
                  onChange={handleContentEditable}
                  style={{
                    fontSize: context.size2
                  }}
                >
                  {this.props.data.studyProgram}
                </span>
              </div>

              <div className="editableDiv">
                <span
                  className="institution"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  style={{
                    fontSize: context.size2
                  }}
                >
                  {this.props.data.institution}
                </span>
              </div>

              <div className="time-loc">
                <div className="period">
                  <span
                    className="month"
                    style={{
                      fontSize: context.size4
                    }}
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                  >
                    {this.props.data.startMonth}
                  </span>
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
                    suppressContentEditableWarning={true}
                  >
                    {this.props.data.startYear}
                  </span>
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
                    suppressContentEditableWarning={true}
                  >
                    {this.props.data.endMonth}
                  </span>
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
                    suppressContentEditableWarning={true}
                  >
                    {this.props.data.endYear}
                  </span>
                </div>

                <div className="location">
                  <span
                    className="place"
                    style={{
                      fontSize: context.size4
                    }}
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                  >
                    {this.props.data.place}
                  </span>
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
