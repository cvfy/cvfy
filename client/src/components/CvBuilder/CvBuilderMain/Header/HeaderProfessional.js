import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class HeaderProfessional extends React.Component {
  constructor() {
    super();
    this.my_refs = {};
    this.state = { borderBottom: "" };
  }

  render() {
    const { borderBottom } = this.state;
    return (
      <ThemeContext.Consumer>
        {context => {
          const { modifyAbout, uploadImage } = context;
          return (
            <div
              className={
                context.style.displayPhoto
                  ? "header-inner header-inner-photo"
                  : "header-inner header-inner-professional"
              }
              style={{ borderBottom: `2px solid ${context.style.color}` }}
            >
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
                  style={{ color: context.style.color }}
                  onBlur={() => this.setState({ borderBottom: "" })}
                >
                  <span
                    onBlur={e =>
                      modifyAbout(this.props.index, "intro", e.target.innerText)
                    }
                    className="CvTitle CvTitleProfessional"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    tabIndex="0"
                    type="text"
                    ref={input => (this.my_refs["CvTitle"] = input)}
                    onFocus={() =>
                      this.setState({ borderBottom: "1px solid blue" })
                    }
                    style={{
                      fontSize: context.style.size1,
                      borderBottom: borderBottom,
                      fontWeight: "600",
                      color: context.style.color
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
                    style={{
                      fontSize: context.style.size3,
                      borderBottom: borderBottom
                    }}
                  >
                    {context.userData[this.props.index].about}
                  </span>
                </div>
              </div>

              <div
                className={
                  context.style.displayPhoto
                    ? "photoProfessional"
                    : "hideSection"
                }
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
                    alt="ProfilePic"
                    title="upload image"
                    height="130px"
                    width="130px"
                    id="profile-photo-professional"
                    style={{
                      border: `3px solid ${context.style.color}`
                    }}
                    onClick={() => this.fileInput.click()}
                  />
                )}
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default HeaderProfessional;
