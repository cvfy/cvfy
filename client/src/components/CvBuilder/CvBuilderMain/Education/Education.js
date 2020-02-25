import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import EducationGroup from "./EducationGroup";

class Education extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addEducationGroup } = context;
          if(context.userData.education.length !== 0){
          const group = context.userData.education.map((el, i) => (
            <EducationGroup key={i} dat={i} data={el} />
          ));
          return (
            <div className="education edu1page break-before">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  EDUCATION
                </div>
              </div>
              <div className="education-body">{group}</div>
            </div>
          );
          }
          else {
            return ""
          }
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Education;
