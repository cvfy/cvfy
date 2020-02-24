import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class AchievementGroup extends React.Component {
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
          const { modifyAchievements, addAchievGroup, deleteGroup } = context;
          return (
            <>
              {/* ********************SECTION MENUS*************** */}
              <div className="sectionsMenuDiv" style={{ display: display }}>
                <i
                  className="fas fa-plus-circle addIcon"
                  onClick={addAchievGroup}
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

              <div
                tabIndex="0"
                className="achiev-group"
                ref={input => (this.my_refs["achiev-group"] = input)}
                onFocus={() => this.setState({ display: "" })}
                onBlur={() => this.setState({ display: "none" })}
                onClick={() => this.focusByClassName("achiev-group")}
              >
                <div className="editableDiv">
                  <span
                    onBlur={e => {
                      modifyAchievements(this.props.dat, e.target.innerText);
                    }}
                    className="achievementDesc"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.size3
                    }}
                  >
                    {this.props.data}
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

export default AchievementGroup;
