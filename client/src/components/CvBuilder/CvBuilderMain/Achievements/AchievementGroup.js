import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class AchievementGroup extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { modifyAchievements } = context;
          return (
            <div className="achiev-group">
              <div className="editableDiv">
                <span
                  onBlur={(e) => {modifyAchievements(this.props.dat, e.target.innerText)}}
                  className="achievementDesc"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  style={{
                    fontSize: context.size3
                  }}
                >
                  {this.props.data}
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
