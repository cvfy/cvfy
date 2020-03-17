import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import SkillBox from "./SkillBox";

class Skills extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const res = context.userData[this.props.index].skills.map((el, i) => (
            <SkillBox key={i} dat={i} index={this.props.index} data={el} />
          ));

          return (
            <div className="skills" style={{padding: `${context.style.displayOneColumn === false ? "3px 25px" : "5px 40px"}`}}>
              <div className="sectionHeader" style={{justifyContent: `${context.style.displayOneColumn === false ? "space-between" : "center"}`}}>
                <div
                  className="section-label"
                  style={{ color: context.style.color }}
                >
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
