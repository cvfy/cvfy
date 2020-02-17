import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import CourseGroup from "./CourseGroup";

class Courses extends React.Component {
  constructor() {
    super();
    this.state = {
      project: []
    };
  }

  addGroup(newItem) {
    this.setState({
      project: [...this.state.project, newItem]
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="projects">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  COURSES
                </div>
                <div className="addProjectDiv">
                  <button
                    className={"addGroupBtn"}
                    onClick={() => this.addGroup(<CourseGroup />)}
                  >
                    add
                  </button>
                </div>
              </div>
              <div className="projects-body">
                <CourseGroup />
                {this.state.project.map(child => child)}
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Courses;
