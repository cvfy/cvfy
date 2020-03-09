import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class SkillBox extends React.Component {
  constructor() {
    super();
    this.my_refs = {};
    this.state = { display: "none" };

    this.focusByClassName.bind(this);
  }

  focusByClassName(className) {
    let myRef = this.my_refs[className];
    if (myRef) {
      myRef.focus();
    }
  }

  render() {
    const { display } = this.state;
    return (
      <ThemeContext.Consumer>
        {context => {
          const {
            modifySkill,
            addGroup,
            deleteGroup,
            moveUpGroup,
            moveDownGroup
          } = context;
          return (
            <>
              <div
                className="skill-box"
                tabIndex="0"
                // contentEditable="true"
                suppressContentEditableWarning={true}
                type="text"
                ref={input => (this.my_refs["skill-box"] = input)}
                onFocus={() => this.setState({ display: "" })}
                onBlur={() => this.setState({ display: "none" })}
                // onClick={() => this.focusByClassName("skill-box")}
                style={{
                  background: context.style.color,
                  fontSize: context.style.size3
                }}
              >
                {/* ********************SECTION MENUS************** */}
                <div
                  className="sectionsMenuDiv skillsMenuDiv"
                  style={{ display: display }}
                >
                  <i
                    className="fas fa-plus-circle addIcon"
                    onClick={() =>
                      addGroup("skills", this.props.index, this.props.dat)
                    }
                    title="add group"
                  ></i>
                  <i
                    className="fas fa-angle-up angleIcon"
                    title="move up"
                    onClick={() =>
                      moveUpGroup("skills", this.props.index, this.props.dat)
                    }
                  ></i>
                  <i
                    className="fas fa-angle-down angleIcon"
                    title="move down"
                    onClick={() =>
                      moveDownGroup("skills", this.props.index, this.props.dat)
                    }
                  ></i>
                  <i
                    onClick={() =>
                      deleteGroup("skills", this.props.index, this.props.dat)
                    }
                    className="deleteIcon far fa-trash-alt"
                    title="delete group"
                  ></i>
                </div>
                {/* ************************************************** */}
                <span
                  onBlur={e =>
                    modifySkill(
                      this.props.index,
                      this.props.dat,
                      e.target.innerText
                    )
                  }
                  className="skillText"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  {this.props.data}
                </span>
              </div>
            </>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default SkillBox;
