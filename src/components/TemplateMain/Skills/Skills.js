import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import SkillsBox from "./SkillsBox";

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
                  <SkillsBox></SkillsBox>
                  <SkillsBox></SkillsBox>
                  <SkillsBox></SkillsBox>
                  <SkillsBox></SkillsBox>
                  <SkillsBox></SkillsBox>
                  <SkillsBox></SkillsBox>
                  <SkillsBox></SkillsBox>
                  <SkillsBox></SkillsBox>
                  <SkillsBox></SkillsBox>
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
