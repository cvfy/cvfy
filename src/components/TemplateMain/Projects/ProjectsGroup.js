import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class ProjectsGroup extends React.Component {
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
                ></span>
              </div>

              <div className="editableDiv">
                <span
                  className="projectDesc"
                  contentEditable="true"
                  style={{
                    fontSize: context.size4
                  }}
                ></span>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ProjectsGroup;
