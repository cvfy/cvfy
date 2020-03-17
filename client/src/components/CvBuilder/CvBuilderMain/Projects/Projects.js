import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import ProjectGroup from "./ProjectGroup";

class Projects extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const group = context.userData[this.props.index].projects.map((el, i) => (
            <ProjectGroup key={i} dat={i} index={this.props.index} data={el} />
          ));
          return (
            <div className="projects" style={{padding: `${context.style.displayOneColumn === false ? "3px 25px" : "5px 40px"}`}}>
              <div className="sectionHeader" style={{justifyContent: `${context.style.displayOneColumn === false ? "space-between" : "center"}`}}>
                <div className="section-label" style={{ color: context.style.color }}>
                  PROJECTS
                </div>
              </div>
              <div className="projects-body">{group}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Projects;
