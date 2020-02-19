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
                  suppressContentEditableWarning={true}
                  style={{
                    fontSize: context.size3
                  }}
                >
                  {this.props.data.title}
                </span>
              </div>

              <div className="editableDiv">
                <span
                  className="projectDesc"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  style={{
                    fontSize: context.size4
                  }}
                >
                  {this.props.data.desc}
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
