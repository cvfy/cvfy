import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import EducationGroup_NextPage from "./EducationGroup_NextPage";
let i = -1;
let h = 0;
class Education_NextPage extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addEducationGroup } = context;
          const group = context.pages[0].education.map((el, i) => (
            <EducationGroup_NextPage key={i} dat={i} data={el} />
          ));
          return (
            <div className="education edu2page break-before">
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

export default Education_NextPage;
