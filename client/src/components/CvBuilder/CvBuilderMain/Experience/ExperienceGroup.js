import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class ExperienceGroup extends React.Component {
  constructor() {
    super();
    this.my_refs = {};
    this.state = { display: "none", borderBottom: "" };

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
          const {
            modifyEx,
            addGroup,
            deleteGroup,
            moveUpGroup,
            moveDownGroup
          } = context;
          return (
            <>
              <div
                // contentEditable="true"
                suppressContentEditableWarning={true}
                type="text"
                tabIndex="0"
                className="experience-group"
                ref={input => (this.my_refs["experience-group"] = input)}
                onFocus={() =>
                  this.setState({ display: "", borderBottom: "1px solid blue" })
                }
                onBlur={() =>
                  this.setState({ display: "none", borderBottom: "" })
                }
                // onClick={() => this.focusByClassName("experience-group")}
              >
                {/* ********************SECTION MENUS*************** */}
                <div className="sectionsMenuDiv" style={{ display: display }}>
                  <i
                    className="fas fa-plus-circle addIcon"
                    onClick={() =>
                      addGroup("experience", this.props.index, this.props.dat)
                    }
                    title="add group"
                  ></i>
                  <i
                    className="fas fa-angle-up angleIcon"
                    title="move up"
                    onClick={() =>
                      moveUpGroup(
                        "experience",
                        this.props.index,
                        this.props.dat
                      )
                    }
                  ></i>
                  <i
                    className="fas fa-angle-down angleIcon"
                    title="move down"
                    onClick={() =>
                      moveDownGroup(
                        "experience",
                        this.props.index,
                        this.props.dat
                      )
                    }
                  ></i>
                  <i
                    onClick={() =>
                      deleteGroup(
                        "experience",
                        this.props.index,
                        this.props.dat
                      )
                    }
                    className="deleteIcon far fa-trash-alt"
                    title="delete group"
                  ></i>
                </div>
                {/* ************************************************** */}
                <div className="editableDiv">
                  <span
                    onBlur={e =>
                      modifyEx(
                        this.props.index,
                        "position",
                        e.target.innerText,
                        this.props.dat
                      )
                    }
                    className="role"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.style.size2,
                      borderBottom: borderBottom
                    }}
                  >
                    {this.props.data.position}
                  </span>
                </div>

                <div className="editableDiv">
                  <span
                    onBlur={e =>
                      setTimeout(
                        modifyEx(
                          this.props.index,
                          "company",
                          e.target.innerText,
                          this.props.dat
                        ),
                        3000
                      )
                    }
                    className="CvCompany"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.style.size2,
                      borderBottom: borderBottom
                    }}
                  >
                    {this.props.data.company}
                  </span>
                </div>

                <div className="time-loc">
                  <div className="period">
                    <span
                      onBlur={e =>
                        modifyEx(
                          this.props.index,
                          "startMonth",
                          e.target.innerText,
                          this.props.dat
                        )
                      }
                      className="month"
                      style={{
                        fontSize: context.style.size4,
                        borderBottom: borderBottom
                      }}
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      {this.props.data.startMonth}
                    </span>
                    <span
                      className="dateDivider"
                      style={{
                        fontSize: context.style.size4,
                        borderBottom: borderBottom
                      }}
                    >
                      /
                    </span>
                    <span
                      onBlur={e =>
                        modifyEx(
                          this.props.index,
                          "startYear",
                          e.target.innerText,
                          this.props.dat
                        )
                      }
                      className="year"
                      style={{
                        fontSize: context.style.size4,
                        borderBottom: borderBottom
                      }}
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      {this.props.data.startYear}
                    </span>
                    <span
                      className="dateDivider"
                      style={{
                        fontSize: context.style.size4,
                        borderBottom: borderBottom
                      }}
                    >
                      -
                    </span>
                    <span
                      onBlur={e =>
                        modifyEx(
                          this.props.index,
                          "endMonth",
                          e.target.innerText,
                          this.props.dat
                        )
                      }
                      className="month"
                      style={{
                        fontSize: context.style.size4,
                        borderBottom: borderBottom
                      }}
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      {this.props.data.endMonth}
                    </span>
                    <span
                      className="dateDivider"
                      style={{
                        fontSize: context.style.size4,
                        borderBottom: borderBottom
                      }}
                    >
                      /
                    </span>
                    <span
                      onBlur={e =>
                        modifyEx(
                          this.props.index,
                          "endYear",
                          e.target.innerText,
                          this.props.dat
                        )
                      }
                      className="year"
                      style={{
                        fontSize: context.style.size4,
                        borderBottom: borderBottom
                      }}
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      {this.props.data.endYear}
                    </span>
                  </div>

                  <div className="location">
                    <span
                      onBlur={e =>
                        modifyEx(
                          this.props.index,
                          "place",
                          e.target.innerText,
                          this.props.dat
                        )
                      }
                      className="place"
                      style={{
                        fontSize: context.style.size4,
                        borderBottom: borderBottom
                      }}
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      {this.props.data.place}
                    </span>
                  </div>
                </div>

                <div
                  className="achiev-task"
                  style={{
                    fontFamily: context.style.font,
                    fontSize: context.style.size4,
                    borderBottom: borderBottom
                  }}
                >
                  Achivements / Tasks
                </div>
                <div>
                  <div className="editableDiv">
                    {/* <ul
                      onBlur={e =>
                        modifyEx(
                          this.props.index,
                          "tasks",
                          e.target.innerText,
                          this.props.dat
                        )
                      }
                      className="task"
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      style={{
                        fontSize: context.style.size3,
                        borderBottom: borderBottom,
                        paddingInlineStart: 0
                      }}
                      // onClick={this.addNewTask}
                    >
                      <li style={{ listStyle: "inside circle" }}>
                        {[this.props.data.tasks]}
                      </li>
                    </ul> */}

                    <span
                      onBlur={e =>
                        modifyEx(
                          this.props.index,
                          "tasks",
                          e.target.innerText,
                          this.props.dat
                        )
                      }
                      className="task"
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      style={{
                        fontSize: context.style.size3,
                        borderBottom: borderBottom
                      }}
                    >
                      {this.props.data.tasks}
                    </span>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ExperienceGroup;
