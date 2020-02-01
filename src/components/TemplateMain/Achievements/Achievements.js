import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import AchievementGroup from "./AchievementGroup";

class Achievements extends React.Component {
  constructor() {
    super();
    this.state = {
      achievement: []
    };
  }

  addGroup(newItem) {
    this.setState({
      achievement: [...this.state.achievement, newItem]
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="achiev">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  ACHIEVEMENTS
                </div>
                <div className="addAchievementDiv">
                  <button
                    className={"addGroupBtn"}
                    onClick={() => this.addGroup(<AchievementGroup />)}
                  >
                    add
                  </button>
                </div>
              </div>

              <div className="achiev-body">
                <AchievementGroup></AchievementGroup>
                {this.state.achievement.map(child => child)}
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Achievements;
