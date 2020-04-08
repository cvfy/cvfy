import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class LanguageGroup extends React.Component {
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
            modifyLanguages,
            addGroup,
            deleteGroup,
            moveUpGroup,
            moveDownGroup
          } = context;
          return (
            <>
              <div
                tabIndex="0"
                suppressContentEditableWarning={true}
                type="text"
                className="lang-group"
                ref={input => (this.my_refs["lang-group"] = input)}
                onFocus={() =>
                  this.setState({ display: "", borderBottom: "1px solid blue" })
                }
                onBlur={() =>
                  this.setState({ display: "none", borderBottom: "" })
                }
                style={{ position: "relative" }}
              >
                {/* ********************SECTION MENUS*************** */}
                <div
                  className="sectionsMenuDiv languageMenuDiv"
                  style={{ display: display }}
                >
                  <i
                    className="fas fa-plus-circle addIcon"
                    onClick={() =>
                      addGroup("languages", this.props.index, this.props.dat)
                    }
                    title="add group"
                  ></i>
                  <i
                    className="fas fa-angle-up angleIcon"
                    title="move up"
                    onClick={() =>
                      moveUpGroup("languages", this.props.index, this.props.dat)
                    }
                  ></i>
                  <i
                    className="fas fa-angle-down angleIcon"
                    title="move down"
                    onClick={() =>
                      moveDownGroup(
                        "languages",
                        this.props.index,
                        this.props.dat
                      )
                    }
                  ></i>
                  <i
                    onClick={() =>
                      deleteGroup("languages", this.props.index, this.props.dat)
                    }
                    className="deleteIcon far fa-trash-alt"
                    title="delete group"
                  ></i>
                </div>
                {/* ************************************************** */}
                <div className="editableDiv language">
                  <span
                    onBlur={e =>
                      modifyLanguages(
                        this.props.index,
                        "language",
                        this.props.dat,
                        e.target.innerText
                      )
                    }
                    className="langHeader"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.style.size3,
                      borderBottom: borderBottom
                    }}
                  >
                    {this.props.data.language}
                  </span>
                  <span
                    onBlur={e =>
                      modifyLanguages(
                        this.props.index,
                        "level",
                        this.props.dat,
                        e.target.innerText
                      )
                    }
                    className="langLevel"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      color: context.style.color,
                      fontSize: context.style.size4,
                      borderBottom: borderBottom
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
