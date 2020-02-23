import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class CertificationGroup extends React.Component {
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
          const { modifyCertifications } = context;
          const { addCertificationGroup } = context;
          return (
            <>
              <div className="cert-group" onClick={this.showMenu}>
                <div className="editableDiv">
                  <span
                    onBlur={e => {
                      modifyCertifications(this.props.dat, e.target.innerText);
                    }}
                    className="certificationTitle"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.size4
                    }}
                  >
                    {this.props.data}
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
                    <button
                      className={"addGroupBtn"}
                      onClick={addCertificationGroup}
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

export default CertificationGroup;
