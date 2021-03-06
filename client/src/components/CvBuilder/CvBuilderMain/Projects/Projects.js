import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import ProjectGroup from "./ProjectGroup";

const Projects = props => {
  return (
    <ThemeContext.Consumer>
      {context => {
        const group = context.userData[props.index].projects.map((el, i) => (
          <ProjectGroup key={i} dat={i} index={props.index} data={el} />
        ));
        return (
          <div
            className="projects"
            style={{
              padding: `${
                context.style.displayOneColumn === false
                  ? "20px 30px 0 30px"
                  : "10px 40px"
              }`
            }}
          >
            <div
              className="sectionHeader"
              style={{
                justifyContent: `${
                  context.style.displayOneColumn === false
                    ? "space-between"
                    : "center"
                }`
              }}
            >
              <div
                className="section-label"
                style={{ color: context.style.color }}
              >
                PROJECTS
              </div>
            </div>
            <div className="projects-body">{group}</div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Projects;
