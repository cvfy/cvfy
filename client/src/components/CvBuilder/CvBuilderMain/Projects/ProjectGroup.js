import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class ProjectGroup extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="project-group">
              <div className="editableDiv">
                <span
                  className="projectTitle"
                  contentEditable="true"
                  style={{
                    fontSize: context.size3
                  }}
                >
                  {context.userData.projects[1].title}
                </span>
              </div>

              <div className="editableDiv">
                <span
                  className="projectDesc"
                  contentEditable="true"
                  style={{
                    fontSize: context.size4
                  }}
                >
                  {context.userData.projects[1].desc}
                </span>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ProjectGroup;
