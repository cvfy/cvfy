import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class CertificationGroup extends React.Component {
  constructor() {
    super();
    this.my_refs = {};
    this.state = { display: "none", borderBottom: "" };
  }

  render() {
    const { display, borderBottom } = this.state;
    return (
      <ThemeContext.Consumer>
        {context => {
          const {
            modifyCertifications,
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
                className="cert-group"
                ref={input => (this.my_refs["cert-group"] = input)}
                onFocus={() =>
                  this.setState({ display: "", borderBottom: "1px solid blue" })
                }
                onBlur={() =>
                  this.setState({ display: "none", borderBottom: "" })
                }
              >
                {/* ********************SECTION MENUS*************** */}
                <div className="sectionsMenuDiv" style={{ display: display }}>
                  <i
                    className="fas fa-plus-circle addIcon"
                    onClick={() =>
                      addGroup(
                        "certifications",
                        this.props.index,
                        this.props.dat
                      )
                    }
                    title="add group"
                  ></i>
                  <i
                    className="fas fa-angle-up angleIcon"
                    title="move up"
                    onClick={() =>
                      moveUpGroup(
                        "certifications",
                        this.props.index,
                        this.props.dat
                      )
                    }
                  ></i>
                  <i
                    className="fas fa-angle-down angleIcon"
                    title="move down"
                    onClick={() =>
                      moveDownGroup(
                        "certifications",
                        this.props.index,
                        this.props.dat
                      )
                    }
                  ></i>
                  <i
                    onClick={() =>
                      deleteGroup(
                        "certifications",
                        this.props.index,
                        this.props.dat
                      )
                    }
                    className="deleteIcon far fa-trash-alt"
                    title="delete group"
                  ></i>
                </div>
                {/* ************************************************** */}
                <div className="editableDiv">
                  <span
                    onBlur={e =>
                      modifyCertifications(
                        this.props.index,
                        this.props.dat,
                        e.target.innerText
                      )
                    }
                    className="certificationTitle"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.style.size4,
                      borderBottom: borderBottom
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

export default CertificationGroup;
