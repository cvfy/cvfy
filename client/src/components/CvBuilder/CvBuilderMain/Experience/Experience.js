import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import ExperienceGroup from "./ExperienceGroup";

class Experience extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addExperienceGroup } = context;
          const group = context.userData.experience.map((el, i) => (
            <ExperienceGroup key={el.company} dat={i} data={el} />
          ));
          return (
            <div className="experience">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  WORK EXPERIENCE
                </div>
                <div className="addExperienceDiv">
                  <button
                    className={"addGroupBtn"}
                    onClick={addExperienceGroup}
                  >
                    add
                  </button>
                </div>
              </div>
              <div className="experience-body">{group}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Experience;
