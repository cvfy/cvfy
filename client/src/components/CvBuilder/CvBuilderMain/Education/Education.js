import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import EducationGroup from "./EducationGroup";
let i = -1;
let h = 0;
class Education extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addEducationGroup } = context;
          const group = context.userData.education.map(el => (
            <EducationGroup key={"i++"} newkey={h} data={el} />
          ));
          return (
            <div className="education break-before">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  EDUCATION
                </div>
                <div className="addEducationDiv">
                  <button className={"addGroupBtn"} onClick={addEducationGroup}>
                    add
                  </button>
                </div>
              </div>
              <div className="education-body">{group}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Education;
