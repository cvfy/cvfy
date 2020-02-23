import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class SkillBox extends React.Component {
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
          const { modifySkill } = context;
          const { addSkillBox } = context;
          return (
            <>
              <div
                className="skill-box"
                onClick={this.showMenu}
                style={{
                  background: context.color,
                  fontSize: context.size3
                }}
              >
                <span
                  onBlur={e => {
                    modifySkill(this.props.dat, e.target.innerText);
                  }}
                  className="skillText"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                >
                  {this.props.data}
                </span>
              </div>

              {this.state.showMenu ? (
                <div
                  className="sectionsMenuDiv"
                  ref={element => {
                    this.dropdownMenu = element;
                  }}
                >
                  <div className="addProjectDiv">
                    <button className={"addGroupBtn"} onClick={addSkillBox}>
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

export default SkillBox;
