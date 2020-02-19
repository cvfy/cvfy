import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import EducationGroup from "./EducationGroup";

class Education extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addEducationGroup } = context;
          const group = context.userData.education.map(el => (
            <EducationGroup key={el.institution} data={el} />
          ));
          return (
            <div className="education">
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
