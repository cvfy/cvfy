import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import SkillsBox from "./SkillsBox";

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      skill: []
    };
  }

  addGroup(newItem) {
    this.setState({
      skill: [...this.state.skill, newItem]
    });
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="skills">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  SKILLS
                </div>
                <div className="addSkillDiv">
                  <button
                    className={"addGroupBtn"}
                    onClick={() => this.addGroup(<SkillsBox />)}
                  >
                    add
                  </button>
                </div>
              </div>
              <div className="skills-body">
                <div className="skill-boxes">
                  <SkillsBox></SkillsBox>
                  {this.state.skill.map(child => child)}
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
