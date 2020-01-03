import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <div className="projects-label">WEB DEVELOPMENT PROJECTS</div>
        <div className="projects-body">
          <div className="project-group">
            <div>
              <input
                className="project-title"
                type="text"
                defaultValue={"CVFY"}
              ></input>
            </div>
            <div>
              <textarea
                className="project-ul"
                max-rows="2"
                cols="37"
                placeholder="A full stack platform developed with React, Node.js, Mongoose and Puppeteer"
                maxlength="120"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
