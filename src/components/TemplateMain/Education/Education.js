import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import EducationGroup from "./EducationGroup";

class Education extends React.Component {
  constructor() {
    super();
    this.state = {
      education: []
    };
  }

  addGroup(newItem) {
    this.setState({
      education: [...this.state.education, newItem]
    });
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="education">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  EDUCATION
                </div>
                <div className="addEducationDiv">
                  <button
                    className={"addGroupBtn"}
                    onClick={() => this.addGroup(<EducationGroup />)}
                  >
                    add
                  </button>
                </div>
              </div>
              <div className="education-body">
                <EducationGroup></EducationGroup>
                {this.state.education.map(child => child)}
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Education;
