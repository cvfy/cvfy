import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class HeaderModern extends React.Component {
  constructor() {
    super();
    this.my_refs = {};
    this.state = {
      borderBottom: ""
    };
    this.focusByClassName.bind(this);
  }

  focusByClassName(className) {
    let myRef = this.my_refs[className];
    if (myRef) {
      myRef.focus();
    }
  }

  render() {
    const { borderBottom } = this.state;
    return (
      <ThemeContext.Consumer>
        {context => {
          const { modifyAbout, uploadImage } = context;
          return (
            <div
              className="header-inner-modern"
              style={{
                background: context.style.color
              }}
            >
              <div
                className={context.style.displayPhoto ? "photo" : "hideSection"}
              >
                <input
                  style={{ display: "none" }}
                  type="file"
                  name="file"
                  onChange={uploadImage}
                  ref={fileInput => (this.fileInput = fileInput)}
                ></input>

                {context.loadingUploadImg ? (
                  <h4>Uploading...</h4>
                ) : (
                  <img
                    src={context.userData[this.props.index].profilePic}
                    alt="photo"
                    title="upload image"
                    height="110px"
                    width="110px"
                    className="profile-photo"
                    style={{ cursor: "pointer" }}
                    onClick={() => this.fileInput.click()}
                  />
                )}
              </div>
              <div className="introduction">
                <div
                  className="name"
                  style={{ fontFamily: context.style.font }}
                >
                  {context.userData[this.props.index].fullName}
                </div>

                <div
                  className={
                    context.style.displayTitle
                      ? "editableHeaderDiv CvTitle"
                      : "hideSection"
                  }
                  onBlur={() => this.setState({ borderBottom: "" })}
                >
                  <span
                    onBlur={e =>
                      modifyAbout(this.props.index, "intro", e.target.innerText)
                    }
                    className="CvTitle"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    tabIndex="0"
                    type="text"
                    ref={input => (this.my_refs["CvTitle"] = input)}
                    onFocus={() =>
                      this.setState({ borderBottom: "1px solid blue" })
                    }
                    onClick={() => this.focusByClassName("CvTitle")}
                    style={{
                      fontSize: context.style.size1,
                      borderBottom: borderBottom
                    }}
                  >
                    {context.userData[this.props.index].intro}
                  </span>
                </div>

                <div
                  className={
                    context.style.displaySummary
                      ? "editableHeaderDiv"
                      : "hideSection"
                  }
                  onBlur={() => this.setState({ borderBottom: "" })}
                >
                  <span
                    onBlur={e =>
                      modifyAbout(this.props.index, "about", e.target.innerText)
                    }
                    className="summary"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    tabIndex="0"
                    type="text"
                    ref={input => (this.my_refs["summary"] = input)}
                    onFocus={() =>
                      this.setState({ borderBottom: "1px solid blue" })
                    }
                    onClick={() => this.focusByClassName("summary")}
                    style={{
                      fontSize: context.style.size3,
                      borderBottom: borderBottom
                    }}
                  >
                    {context.userData[this.props.index].about}
                  </span>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default HeaderModern;
