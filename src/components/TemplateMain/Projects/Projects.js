import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class Projects extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="projects">
              <div className="projects-label" style={{ color: context.color }}>
                PROJECTS
              </div>
              <div className="projects-body">
                <div className="project-group">
                  <div>
                    <input
                      className="project-title"
                      type="text"
                      defaultValue={"CVFY"}
                      style={{
                        fontFamily: context.font,
                        fontSize: context.size3
                      }}
                    ></input>
                  </div>
                  <div>
                    <textarea
                      className="project-ul"
                      max-rows="2"
                      cols="37"
                      placeholder="A full stack platform developed with React, Node.js, Mongoose and Puppeteer"
                      maxLength="120"
                      style={{
                        fontFamily: context.font,
                        fontSize: context.size4
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Projects;
