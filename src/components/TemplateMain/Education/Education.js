import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import EducationGroup from "./EducationGroup";

class Education extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="education">
              <div className="section-label" style={{ color: context.color }}>
                EDUCATION
              </div>
              <div className="education-body">
                <EducationGroup></EducationGroup>
                <EducationGroup></EducationGroup>
                <EducationGroup></EducationGroup>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Education;
