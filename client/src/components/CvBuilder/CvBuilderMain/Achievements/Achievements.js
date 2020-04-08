import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import AchievementGroup from "./AchievementGroup";

const Achievements = props => {
  return (
    <ThemeContext.Consumer>
      {context => {
        const group = context.userData[
          props.index
        ].achievements.map((el, i) => (
          <AchievementGroup key={i} dat={i} index={props.index} data={el} />
        ));
        return (
          <div
            className="achievements"
            style={{
              padding: `${
                context.style.displayOneColumn === false
                  ? "20px 30px 0 30px"
                  : "10px 40px"
              }`
            }}
          >
            <div
              className="sectionHeader"
              style={{
                justifyContent: `${
                  context.style.displayOneColumn === false
                    ? "space-between"
                    : "center"
                }`
              }}
            >
              <div
                className="section-label"
                style={{ color: context.style.color }}
              >
                ACHIEVEMENTS
              </div>
            </div>
            <div className="achiev-body">{group}</div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Achievements;
