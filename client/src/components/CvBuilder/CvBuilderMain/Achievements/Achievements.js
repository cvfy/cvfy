import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import AchievementGroup from "./AchievementGroup";

class Achievements extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addAchievGroup } = context;
          const group = context.userData.achievements.map(el => (
            <AchievementGroup key={el} data={el} />
          ));
          return (
            <div className="achiev">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  ACHIEVEMENTS
                </div>
                <div className="addAchievementDiv">
                  <button className={"addGroupBtn"} onClick={addAchievGroup}>
                    add
                  </button>
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
