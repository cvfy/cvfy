import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import CourseGroup from "./CourseGroup";

class Courses extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const group = context.userData[this.props.index].courses.map((el, i) => (
            <CourseGroup key={i} dat={i} index={this.props.index} data={el} />
          ));
          return (
            <div className="courses" style={{padding: `${context.style.displayOneColumn === false ? "3px 25px" : "5px 40px"}`}}>
              <div className="sectionHeader" style={{justifyContent: `${context.style.displayOneColumn === false ? "space-between" : "center"}`}}>
                <div className="section-label" style={{ color: context.style.color }}>
                  COURSES
                </div>
              </div>
              <div className="courses-body">{group}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Courses;
