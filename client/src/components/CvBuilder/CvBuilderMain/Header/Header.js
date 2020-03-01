import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import ProfilePhoto from "../../../../assets/dogFather.png";

class Header extends React.Component {
  constructor() {
    super();
    this.my_refs = {};
    this.state = { borderBottom: "" };

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
          const { modifyAbout } = context;
          return (
            <div className="header-inner">
              <div className="photo">
                <img
                  src={context.userData[this.props.index].profilePic}
                  alt="dog"
                  height="110px"
                  width="110px"
                  className="profile-photo"
                />
              </div>
              <div className="introduction">
                <div className="name" style={{ fontFamily: context.style.font }}>
                  {context.userData[this.props.index].fullName}
                </div>

                <div className="editableHeaderDiv CvTitle">
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

                <div className="editableHeaderDiv">
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
