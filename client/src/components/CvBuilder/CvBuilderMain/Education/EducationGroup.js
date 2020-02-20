import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class EducationGroup extends React.Component {


  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { modifyEd } = context;
          return (
            <div className="education-group">
              <div className="editableDiv">
                <input type="text"
                  className="studyProgram"
                  //contentEditable="true"
                  //suppressContentEditableWarning={true}
                  value={this.props.data.studyProgram}
                  
                  onChange={(e) => {return modifyEd(this.props.key, e.target.value)}}
                  style={{
                    fontSize: context.size2
                  }}
                />
                {/* </span> */}
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
