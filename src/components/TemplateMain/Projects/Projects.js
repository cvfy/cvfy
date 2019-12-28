import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <div className="projects-label">WEB DEVELOPMENT PROJECTS</div>
        <div className="projects-body">
          <div className="project-group">
            <div className="project-title">CVFY</div>
            <div className="project-list">
              <span>- </span> A full stack platform developed with React,
              Node.js, Mongoose and Puppeteer
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
