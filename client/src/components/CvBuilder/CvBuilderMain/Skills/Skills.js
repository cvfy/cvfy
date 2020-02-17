import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import SkillBox from "./SkillBox";

class Skills extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     skill: []
  //   };
  // }

  // addGroup(newItem) {
  //   this.setState({
  //     skill: [...this.state.skill, newItem]
  //   });
  // }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addGroup } = context;
          const res = context.userData.skills.map(el => (
            <SkillBox key={el} data={el} />
          ));

          return (
            <div className="skills">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  SKILLS
                </div>
                <div className="addSkillDiv">
                  <button className={"addGroupBtn"} onClick={addGroup}>
                    add
                  </button>
                </div>
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
