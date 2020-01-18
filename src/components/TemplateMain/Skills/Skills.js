import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
class Skills extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="skills">
              <div className="section-label" style={{ color: context.color }}>
                SKILLS
              </div>
              <div className="skills-body">
                <div className="skill-boxes">
                  <div
                    className="skill-box"
                    style={{
                      background: context.color,
                      fontSize: context.size3
                    }}
                  >
                    <span
                      className="skillTextSpan"
                      contentEditable="true"
                    ></span>
                  </div>

                  <div
                    className="skill-box"
                    style={{
                      background: context.color,
                      fontSize: context.size3
                    }}
                  >
                    <span
                      className="skillTextSpan"
                      contentEditable="true"
                    ></span>
                  </div>

                  <div
                    className="skill-box"
                    style={{
                      background: context.color,
                      fontSize: context.size3
                    }}
                  >
                    <span
                      className="skillTextSpan"
                      contentEditable="true"
                    ></span>
                  </div>

                  <div
                    className="skill-box"
                    style={{
                      background: context.color,
                      fontSize: context.size3
                    }}
                  >
                    <span
                      className="skillTextSpan"
                      contentEditable="true"
                    ></span>
                  </div>

                  <div
                    className="skill-box"
                    style={{
                      background: context.color,
                      fontSize: context.size3
                    }}
                  >
                    <span
                      className="skillTextSpan"
                      contentEditable="true"
                    ></span>
                  </div>

                  <div
                    className="skill-box"
                    style={{
                      background: context.color,
                      fontSize: context.size3
                    }}
                  >
                    <span
                      className="skillTextSpan"
                      contentEditable="true"
                    ></span>
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
