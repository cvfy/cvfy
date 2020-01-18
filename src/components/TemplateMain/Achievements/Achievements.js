import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
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
                <div className="achiev-group">
                  <div className="editableDiv">
                    <span
                      className="achievementDescSpan"
                      contentEditable="true"
                      style={{
                        fontSize: context.size3
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Achievements;
