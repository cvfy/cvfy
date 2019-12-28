import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <div className="experience">
        <div className="experience-label">WORK EXPERIENCE</div>
        <div className="experience-body">
          <div className="experience-group">
            <div className="role">Title/function</div>
            <div className="company">Company</div>
            <div className="time-loc">
              <div className="period">date</div>
              <div className="location">City, Country</div>
            </div>
            <div className="achiev-task">Achivements / Tasks</div>
            <div className="task-list">
              <span>- </span>Curabitur fo yo mamma fizzle nisi hizzle mollis.
              Shiznit you son of a bizzle. Shizznit odio. Vivamus neque. Fo
              shizzle orci. For sure mauris crackalackin, interdum boofron, pot
              sit amizzle.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
