import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class AchievementGroup extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addAchievGroup } = context;
          const res = context.userData.achievements.map(el => (
            <AchievementGroup key={el} data={el} />
          ));
          return (
            <div className="achiev-group">
              <div className="editableDiv">
                <span
                  className="achievementDesc"
                  contentEditable="true"
                  style={{
                    fontSize: context.size3
                  }}
                >
                  {res}
                </span>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default AchievementGroup;
