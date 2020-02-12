import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import ExperienceGroup from "./ExperienceGroup";

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      experience: []
    };
  }

  addGroup(newItem) {
    this.setState({
      experience: [...this.state.experience, newItem]
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="experience">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  WORK EXPERIENCE
                </div>
                <div className="addExperienceDiv">
                  <button
                    className={"addGroupBtn"}
                    onClick={() => this.addGroup(<ExperienceGroup />)}
                  >
                    add
                  </button>
                </div>
              </div>
              <div className="experience-body">
                <ExperienceGroup></ExperienceGroup>
                {this.state.experience.map(child => child)}
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Experience;
