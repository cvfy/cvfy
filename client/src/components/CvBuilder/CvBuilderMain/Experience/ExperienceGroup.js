import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class ExperienceGroup extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { modifyEx } = context;
          const { addExperienceGroup } = context;
          return (
            <>
              <div className="experience-group" onClick={this.showMenu}>
                <div className="editableDiv">
                  <span
                    onBlur={e => {
                      modifyEx("position", e.target.innerText, this.props.dat);
                    }}
                    className="role"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.size2
                    }}
                  >
                    {this.props.data.position}
                  </span>
                </div>

                <div className="editableDiv">
                  <span
                    onBlur={e => {
                      modifyEx("company", e.target.innerText, this.props.dat);
                    }}
                    className="CvCompany"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.size2
                    }}
                  >
                    {this.props.data.company}
                  </span>
                </div>

                <div className="time-loc">
                  <div className="period">
                    <span
                      onBlur={e => {
                        modifyEx(
                          "startMonth",
                          e.target.innerText,
                          this.props.dat
                        );
                      }}
                      className="month"
                      style={{
                        fontSize: context.size4
                      }}
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      {this.props.data.startMonth}
                    </span>
                    <span
                      className="dateDivider"
                      style={{
                        fontSize: context.size4
                      }}
                    >
                      /
                    </span>
                    <span
                      onBlur={e => {
                        modifyEx(
                          "startYear",
                          e.target.innerText,
                          this.props.dat
                        );
                      }}
                      className="year"
                      style={{
                        fontSize: context.size4
                      }}
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      {this.props.data.startYear}
                    </span>
                    <span
                      className="dateDivider"
                      style={{
                        fontSize: context.size4
                      }}
                    >
                      -
                    </span>
                    <span
                      onBlur={e => {
                        modifyEx(
                          "endMonth",
                          e.target.innerText,
                          this.props.dat
                        );
                      }}
                      className="month"
                      style={{
                        fontSize: context.size4
                      }}
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      {this.props.data.endMonth}
                    </span>
                    <span
                      className="dateDivider"
                      style={{
                        fontSize: context.size4
                      }}
                    >
                      /
                    </span>
                    <span
                      onBlur={e => {
                        modifyEx("endYear", e.target.innerText, this.props.dat);
                      }}
                      className="year"
                      style={{
                        fontSize: context.size4
                      }}
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                    >
                      {this.props.data.endYear}
                    </span>
                  </div>

                  <div className="location">
                    <span
                      onBlur={e => {
                        modifyEx("place", e.target.innerText, this.props.dat);
                      }}
                      className="place"
                      style={{
                        fontSize: context.size4
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
                    fontFamily: context.font,
                    fontSize: context.size4
                  }}
                >
                  Achivements / Tasks
                </div>
                <div>
                  <div className="editableDiv">
                    <span
                      onBlur={e => {
                        modifyEx("tasks", e.target.innerText, this.props.dat);
                      }}
                      className="task"
                      contentEditable="true"
                      suppressContentEditableWarning={true}
                      style={{
                        fontSize: context.size3
                      }}
                    >
                      {this.props.data.tasks}
                    </span>
                  </div>
                </div>
              </div>

              {this.state.showMenu ? (
                <div
                  className="sectionsMenuDiv"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="addProjectDiv">
                    <button
                      className={"addGroupBtn"}
                      onClick={addExperienceGroup}
                    >
                      +
                    </button>
                    <span className="addGroupSpan">Add group</span>
                  </div>

                  <div className="deleteProjectDiv">
                    <i className="deleteIcon far fa-trash-alt"></i>
                    {/* <span className="addGroupSpan">Delete group</span> */}
                  </div>
                </div>
              ) : null}
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ExperienceGroup;
