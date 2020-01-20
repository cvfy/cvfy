import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import ExperienceGroup from "./ExperienceGroup";

class Experience extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="experience">
              <div className="section-label" style={{ color: context.color }}>
                WORK EXPERIENCE
              </div>
              <div className="experience-body">
                <ExperienceGroup></ExperienceGroup>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Experience;
