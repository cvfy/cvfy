import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class ProjectGroup extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { modifyProjects } = context;
          return (
            <div className="project-group">
              <div className="editableDiv">
                <span
                onBlur={(e) => {modifyProjects("PTitle", this.props.dat, e.target.innerText)}}
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
                onBlur={(e) => {modifyProjects("PDesc", this.props.dat, e.target.innerText)}}
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
