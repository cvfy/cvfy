import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class LanguageGroup extends React.Component {
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
          const { modifyLanguages, addLanguageGroup, deleteGroup } = context;
          return (
            <>
              {/* ********************SECTION MENUS*************** */}
              <div className="sectionsMenuDiv" style={{ display: display }}>
                <i
                  className="fas fa-plus-circle addIcon"
                  onClick={addLanguageGroup}
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
                className="lang-group"
                ref={input => (this.my_refs["lang-group"] = input)}
                onFocus={() => this.setState({ display: "" })}
                onBlur={() => this.setState({ display: "none" })}
                onClick={() => this.focusByClassName("lang-group")}
              >
                <div className="editableDiv language">
                  <span
                    onBlur={e => {
                      modifyLanguages(
                        "language",
                        this.props.dat,
                        e.target.innerText
                      );
                    }}
                    className="langHeader"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.size3
                    }}
                  >
                    {this.props.data.language}
                  </span>
                  <span
                    onBlur={e => {
                      modifyLanguages(
                        "level",
                        this.props.dat,
                        e.target.innerText
                      );
                    }}
                    className="langLevel"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      color: context.color,
                      fontSize: context.size4
                    }}
                  >
                    {this.props.data.level}
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

export default LanguageGroup;
