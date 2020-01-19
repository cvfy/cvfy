import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import ProjectsGroup from "./ProjectsGroup";

class Projects extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="projects">
              <div className="section-label" style={{ color: context.color }}>
                PROJECTS
              </div>
              <div className="projects-body">
                <ProjectsGroup></ProjectsGroup>
                <ProjectsGroup></ProjectsGroup>
                <ProjectsGroup></ProjectsGroup>
                <ProjectsGroup></ProjectsGroup>
                <ProjectsGroup></ProjectsGroup>
                <ProjectsGroup></ProjectsGroup>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Projects;
