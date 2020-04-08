import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import CourseGroup from "./CourseGroup";

const Courses = props => {
  return (
    <ThemeContext.Consumer>
      {context => {
        const group = context.userData[props.index].courses.map((el, i) => (
          <CourseGroup key={i} dat={i} index={props.index} data={el} />
        ));
        return (
          <div
            className="courses"
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
                COURSES
              </div>
            </div>
            <div className="courses-body">{group}</div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Courses;
