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
          const { modifyProjects, addGroup, deleteGroup, moveUpGroup, moveDownGroup } = context;
          return (
            <>
              <div
                tabIndex="0"
                className="project-group"
                // contentEditable="true"
                suppressContentEditableWarning={true}
                type="text"
                ref={input => (this.my_refs["project-group"] = input)}
                onFocus={() =>
                  this.setState({ display: "", borderBottom: "1px solid blue" })
                }
                onBlur={() =>
                  this.setState({ display: "none", borderBottom: "" })
                }
                // onClick={() => this.focusByClassName("project-group")}
              >
                {/* ********************SECTION MENUS*************** */}
                <div className="sectionsMenuDiv" style={{ display: display }}>
                  <i
                    className="fas fa-plus-circle addIcon"
                    onClick={() => addGroup("projects", this.props.index, this.props.dat)}
                    title="add group"
                  ></i>
                  <i className="fas fa-angle-up angleIcon" title="move up"
                  onClick={() => moveUpGroup("projects", this.props.index, this.props.dat)}></i>
                  <i
                    className="fas fa-angle-down angleIcon"
                    title="move down"
                    onClick={() => moveDownGroup("projects", this.props.index, this.props.dat)}
                  ></i>
                  <i
                    onClick={() => deleteGroup("projects", this.props.index, this.props.dat)}
                    className="deleteIcon far fa-trash-alt"
                    title="delete group"
                  ></i>
                </div>
                {/* ************************************************** */}
                <div className="editableDiv">
                  <span
                    onBlur={e =>
                      modifyProjects(this.props.index, 
                        "PTitle",
                        this.props.dat,
                        e.target.innerText
                      )
                    }
                    className="projectTitle"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.style.size3,
                      borderBottom: borderBottom
                    }}
                  >
                    {this.props.data.title}
                  </span>
                </div>
                <div className="editableDiv">
                  <span
                    onBlur={e =>
                      modifyProjects(this.props.index, 
                        "PDesc",
                        this.props.dat,
                        e.target.innerText
                      )
                    }
                    className="projectDesc"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.style.size4,
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
