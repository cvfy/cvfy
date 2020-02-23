import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import SkillBox from "./SkillBox";

class Skills extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          // const { addSkillGroup } = context;
          const res = context.userData.skills.map((el, i) => (
            <SkillBox key={el} dat={i} data={el} />
          ));

          return (
            <div className="skills">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  SKILLS
                </div>
                {/* <div className="addSkillDiv">
                  <button className={"addGroupBtn"} onClick={addSkillGroup}>
                    add
                  </button>
                </div> */}
              </div>
              <div className="skills-body">
                <div className="skill-boxes">{res}</div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Skills;
