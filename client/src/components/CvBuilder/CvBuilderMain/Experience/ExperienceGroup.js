import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class ExperienceGroup extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="experience-group">
              <div className="editableDiv">
                <span
                  className="role"
                  contentEditable="true"
                  style={{
                    fontSize: context.size2
                  }}
                >
                  {context.userData.experience[0].position}
                </span>
              </div>

              <div className="editableDiv">
                <span
                  className="CvCompany"
                  contentEditable="true"
                  style={{
                    fontSize: context.size2
                  }}
                >
                  {context.userData.experience[0].company}
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
                  >
                    {context.userData.experience[0].startMonth}
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
                  >
                    {context.userData.experience[0].startYear}
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
                  >
                    {context.userData.experience[0].endMonth}
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
                  >
                    {context.userData.experience[0].endYear}
                  </span>
                </div>

                <div className="location">
                  <span
                    className="place"
                    style={{
                      fontSize: context.size4
                    }}
                    contentEditable="true"
                  >
                    {context.userData.experience[0].place}
                  </span>
                </div>
              </div>

              <div
                className="achiev-task"
                style={{
                  fontFamily: context.font,
                  fontSize: context.size4
                }}
              >
                Achivements / Tasks
              </div>
              <div>
                <div className="editableDiv">
                  <span
                    className="task"
                    contentEditable="true"
                    style={{
                      fontSize: context.size3
                    }}
                  >
                    {context.userData.experience[0].tasks[0]}
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

export default ExperienceGroup;
