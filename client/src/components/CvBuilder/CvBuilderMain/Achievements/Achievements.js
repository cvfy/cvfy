import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import AchievementGroup from "./AchievementGroup";

class Achievements extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const group = context.userData.achievements.map((el, i) => (
            <AchievementGroup key={el} dat={i} data={el} />
          ));
          return (
            <div className="achiev">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.style.color }}>
                  ACHIEVEMENTS
                </div>
              </div>
              <div className="achiev-body">{group}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Achievements;
