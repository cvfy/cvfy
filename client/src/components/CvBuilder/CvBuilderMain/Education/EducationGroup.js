import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class EducationGroup extends React.Component {
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
          const { modifyEd, addEducationGroup, deleteGroup } = context;
          return (
            <>
              <div
                tabIndex="0"
                contentEditable="true"
                    suppressContentEditableWarning={true}
                    type="text"
                className="education-group"
                ref={input => (this.my_refs["education-group"] = input)}
                onFocus={() =>
                  this.setState({ display: "", borderBottom: "1px solid blue" })
                }
                onBlur={() =>
                  this.setState({ display: "none", borderBottom: "" })
                }
                onClick={() => this.focusByClassName("education-group")}
              >
                {/* ********************SECTION MENUS*************** */}
                <div className="sectionsMenuDiv" style={{ display: display }}>
                  <i
                    className="fas fa-plus-circle addIcon"
                    onClick={addEducationGroup}
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
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    type="text"
                    className="studyProgram"
                    onBlur={e => { modifyEd("studyProgram",
e.target.innerText,
                        this.props.dat
                      );
                    }}
                    style={{
                      fontSize: context.style.size2,
                      fontFamily: context.style.font,
                      borderBottom: borderBottom
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
                      fontSize: context.style.size2,
                      borderBottom: borderBottom
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
                      onBlur={e => {
                        modifyEd(
                          "startYear",
                          e.target.innerText,
                          this.props.dat
                        );
                      }}
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
                      onBlur={e => {
                        modifyEd(
                          "endMonth",
                          e.target.innerText,
                          this.props.dat
                        );
                      }}
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
                      onBlur={e => {
                        modifyEd("endYear", e.target.innerText, this.props.dat);
                      }}
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
                      onBlur={e => {
                        modifyEd("place", e.target.innerText, this.props.dat);
                      }}
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
              </div>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default EducationGroup;
