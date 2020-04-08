import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import EducationGroup from "./EducationGroup";

const Education = props => {
  return (
    <ThemeContext.Consumer>
      {context => {
        if (context.userData[props.index].education.length !== 0) {
          const group = context.userData[props.index].education.map((el, i) => (
            <EducationGroup key={i} dat={i} index={props.index} data={el} />
          ));
          return (
            <div
              className="education break-before"
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
                  EDUCATION
                </div>
              </div>
              <div className="education-body">{group}</div>
            </div>
          );
        } else {
          return "";
        }
      }}
    </ThemeContext.Consumer>
  );
};

export default Education;
