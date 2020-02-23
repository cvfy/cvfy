import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
// let data = "Institution"
class EducationGroup extends React.Component {
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
          const { modifyEd } = context;
          const { addEducationGroup } = context;
          return (
            <>
              <div
                className="education-group break-before"
                onClick={this.showMenu}
              >
                <div className="editableDiv">
                  <span
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    type="text"
                    className="studyProgram"
                    onBlur={e => {
                      modifyEd(
                        "studyProgram",
                        e.target.innerText,
                        this.props.dat
                      );
                    }}
                    style={{
                      fontSize: context.size2,
                      fontFamily: context.font
                    }}
                  >
                    {this.props.data.studyProgram}
                  </span>
                </div>

                <div className="editableDiv">
                  <span
                    onBlur={e => {
                      modifyEd(
                        "institution",
                        e.target.innerText,
                        this.props.dat
                      );
                    }}
                    // onInput={(e) => {modifyEd(e.target.innerText, this.props.dat)}}
                    className="institution"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.size2
                    }}
                  >
                    {this.props.data.institution}
                  </span>
                </div>

                <div className="time-loc">
                  <div className="period">
                    <span
                      className="month"
                      onBlur={e => {
                        modifyEd(
                          "startMonth",
                          e.target.innerText,
                          this.props.dat
                        );
                      }}
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
                        modifyEd(
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
                        modifyEd(
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
                        modifyEd("endYear", e.target.innerText, this.props.dat);
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
                        modifyEd("place", e.target.innerText, this.props.dat);
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
                      onClick={addEducationGroup}
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

export default EducationGroup;
