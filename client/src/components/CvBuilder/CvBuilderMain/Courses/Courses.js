import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import CourseGroup from "./CourseGroup";

class Courses extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addCourseGroup } = context;
          const group = context.userData.courses.map((el, i) => (
            <CourseGroup key={el.title} dat={i} data={el} />
          ));
          return (
            <div className="projects">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  COURSES
                </div>
                <div className="addProjectDiv">
                  <button className={"addGroupBtn"} onClick={addCourseGroup}>
                    add
                  </button>
                </div>
              </div>
              <div className="projects-body">{group}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Courses;
