import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import AchievementGroup from "./AchievementGroup";

class Achievements extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="achiev">
              <div className="section-label" style={{ color: context.color }}>
                ACHIEVEMENTS
              </div>
              <div className="achiev-body">
                <AchievementGroup></AchievementGroup>
                <AchievementGroup></AchievementGroup>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Achievements;
