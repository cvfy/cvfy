import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
class Skills extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="skills">
              <div className="skills-label" style={{ color: context.color }}>
                SKILLS
              </div>
              <div className="skills-body">
                <div className="skill-boxes">
                  <div
                    className="skill-box"
                    style={{ background: context.color }}
                  >
                    <div className="skill-text">JavaScript</div>
                  </div>
                  <div
                    className="skill-box"
                    style={{ background: context.color }}
                  >
                    <div className="skill-text">React</div>
                  </div>
                  <div
                    className="skill-box"
                    style={{ background: context.color }}
                  >
                    <div className="skill-text">Node.js</div>
                  </div>
                  <div
                    className="skill-box"
                    style={{ background: context.color }}
                  >
                    <div className="skill-text">MongoDB</div>
                  </div>
                  <div
                    className="skill-box"
                    style={{ background: context.color }}
                  >
                    <div className="skill-text">Bootstrap</div>
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

export default Skills;
