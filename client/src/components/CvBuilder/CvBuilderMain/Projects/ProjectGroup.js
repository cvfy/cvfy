import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class ProjectGroup extends React.Component {
  constructor() {
    super();
    this.my_refs = {};
    this.state = {
      display: "none",
      borderBottom: ""
    };

    this.focusByClassName.bind(this);
  }

  focusByClassName(className) {
    let myRef = this.my_refs[className];
    if (myRef) {
      myRef.focus();
    }
  }

  render() {
    const { display, borderBottom } = this.state;
    return (
      <ThemeContext.Consumer>
        {context => {
          const { modifyProjects, addProjectGroup, deleteGroup } = context;
          return (
            <>
              <div
                tabIndex="0"
                className="project-group"
                contentEditable="true"
                suppressContentEditableWarning={true}
                type="text"
                ref={input => (this.my_refs["project-group"] = input)}
                onFocus={() =>
                  this.setState({ display: "", borderBottom: "1px solid blue" })
                }
                onBlur={() =>
                  this.setState({ display: "none", borderBottom: "" })
                }
                onClick={() => this.focusByClassName("project-group")}
              >
                {/* ********************SECTION MENUS*************** */}
                <div className="sectionsMenuDiv" style={{ display: display }}>
                  <i
                    className="fas fa-plus-circle addIcon"
                    onClick={addProjectGroup}
                    title="add group"
                  ></i>
                  <i className="fas fa-angle-up angleIcon" title="move up"></i>
                  <i
                    className="fas fa-angle-down angleIcon"
                    title="move down"
                  ></i>
                  <i
                    onClick={() => deleteGroup(this.props.dat)}
                    className="deleteIcon far fa-trash-alt"
                    title="delete group"
                  ></i>
                </div>
                {/* ************************************************** */}
                <div className="editableDiv">
                  <span
                    onBlur={e => {
                      modifyProjects(
                        "PTitle",
                        this.props.dat,
                        e.target.innerText
                      );
                    }}
                    className="projectTitle"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.size3,
                      borderBottom: borderBottom
                    }}
                  >
                    {this.props.data.title}
                  </span>
                </div>
                <div className="editableDiv">
                  <span
                    onBlur={e => {
                      modifyProjects(
                        "PDesc",
                        this.props.dat,
                        e.target.innerText
                      );
                    }}
                    className="projectDesc"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.size4,
                      borderBottom: borderBottom
                    }}
                  >
                    {this.props.data.desc}
                  </span>
                </div>
              </div>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ProjectGroup;
