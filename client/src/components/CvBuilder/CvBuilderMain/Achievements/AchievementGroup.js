import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class AchievementGroup extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
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
