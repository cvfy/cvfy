import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import axios from "axios";

class Header extends React.Component {
  constructor() {
    super();
    this.my_refs = {};
    this.state = { borderBottom: "", selectedFile: null };
    this.focusByClassName.bind(this);
  }

  focusByClassName(className) {
    let myRef = this.my_refs[className];
    if (myRef) {
      myRef.focus();
    }
  }

  fileSelectedHandler = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  // fileUploadHandler = () => {
  //   const fd = new FormData();
  //   fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
  //   axios.post('not sure which url should I use on backend', fd, {
  //     onUploadProgress: progressEvent => {
  //       console.log('Progress: ', Math.round(progressEvent.loaded / progressEvent.total * 100) + '%');
  //     }
  //   });
  //     .then(res => {
  //       console.log(res)
  //     })
  // }

  render() {
    const { borderBottom } = this.state;
    return (
      <ThemeContext.Consumer>
        {context => {
          const { modifyAbout } = context;
          return (
            <div className="header-inner">
              <div className={context.displayPhoto ? "photo" : "hideSection"}>
                <input
                  style={{ display: "none" }}
                  type="file"
                  onChange={this.fileSelectedHandler}
                  ref={fileInput => (this.fileInput = fileInput)}
                ></input>
                {/* <button onClick={this.fileUploadHandler}></button> */}
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
                    context.displayTitle
                      ? "editableHeaderDiv CvTitle"
                      : "hideSection"
                  }
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
                    onBlur={() => this.setState({ borderBottom: "" })}
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
                    context.displaySummary ? "editableHeaderDiv" : "hideSection"
                  }
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
                    onBlur={() => this.setState({ borderBottom: "" })}
                    onClick={() => this.focusByClassName("summary")}
                    style={{
                      fontSize: context.style.size3,
                      borderBottom: borderBottom
                    }}
                  >
                    {context.userData[this.props.index].about[0]}
                    {context.userData[this.props.index].about[1]}
                    {context.userData[this.props.index].about[2]}
                    {context.userData[this.props.index].about[3]}
                    {context.userData[this.props.index].about[4]}
                    {context.userData[this.props.index].about[5]}
                    {context.userData[this.props.index].about[6]}
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

export default Header;
