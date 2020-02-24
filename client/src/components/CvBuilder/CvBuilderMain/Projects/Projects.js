import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import ProjectGroup from "./ProjectGroup";

class Projects extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const group = context.userData.projects.map((el, i) => (
            <ProjectGroup key={el.title} dat={i} data={el} />
          ));
          return (
            <div className="projects">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
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
