import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class LanguageGroup extends React.Component {
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
          const { modifyLanguages } = context;
          const { addLanguageGroup } = context;
          return (
            <>
              <div className="lang-group" onClick={this.showMenu}>
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

              {this.state.showMenu ? (
                <div
                  className="languageMenuDiv"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="addProjectDiv">
                    <button
                      className={"addGroupBtn"}
                      onClick={addLanguageGroup}
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

export default LanguageGroup;
