import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import SkillBox from "./SkillBox";

class Skills extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const res = context.userData[this.props.index].skills.map((el, i) => (
            <SkillBox key={i} index={this.props.index} dat={i} data={el} />
          ));

          return (
            <div className="skills">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.style.color }}>
                  SKILLS
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
