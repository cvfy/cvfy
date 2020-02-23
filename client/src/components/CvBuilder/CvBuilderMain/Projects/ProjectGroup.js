import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class ProjectGroup extends React.Component {
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
          const { modifyProjects } = context;
          const { addProjectGroup } = context;
          // const { deleteGroup } = context;
          const deleteGroup = e => {
            let projectGroup = context.userData.projects;
            console.log(e.target.title);
            this.setState(
              projectGroup.slice(projectGroup.indexOf(e.target.title, 1))
            );
          };
          return (
            <>
              <div className="project-group" onClick={this.showMenu}>
                <div className="editableDiv">
                  <span
                    onBlur={e => {
                      modifyProjects(
                        "PTitle",
                        this.props.dat,
                        e.target.innerText
                      );
                    }}
                    className="projectTitle"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.size3
                    }}
                  >
                    {this.props.data.title}
                  </span>
                </div>

                <div className="editableDiv">
                  <span
                    onBlur={e => {
                      modifyProjects(
                        "PDesc",
                        this.props.dat,
                        e.target.innerText
                      );
                    }}
                    className="projectDesc"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.size4
                    }}
                  >
                    {this.props.data.desc}
                  </span>
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
                    <button className={"addGroupBtn"} onClick={addProjectGroup}>
                      +
                    </button>
                    <span className="addGroupSpan">Add group</span>
                  </div>

                  <div className="deleteProjectDiv" onClick={deleteGroup}>
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

export default ProjectGroup;
