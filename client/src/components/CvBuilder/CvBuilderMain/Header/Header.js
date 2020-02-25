import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import ProfilePhoto from "../../../../assets/dogFather.png";

class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { modifyAbout } = context;
          return (
            <div className="header-inner">
              <div className="photo">
                <img
                  src={context.userData.profilePic}
                  alt="dog"
                  height="110px"
                  width="110px"
                  className="profile-photo"
                />
              </div>
              <div className="introduction">
                <div className="name" style={{ fontFamily: context.style.font }}>
                  {context.userData.fullName}
                </div>

                <div className="editableHeaderDiv CvTitle">
                  <span
                  onBlur={(e) => {modifyAbout("intro", e.target.innerText)}}
                    className="CvTitle"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.style.size1
                    }}
                  >
                    {context.userData.intro}
                  </span>
                </div>

                <div className="editableHeaderDiv">
                  <span
                  onBlur={(e) => {modifyAbout("about", e.target.innerText)}}
                    className="summary"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    style={{
                      fontSize: context.style.size3
                    }}
                  >
                    {context.userData.about[0]}
                    {context.userData.about[1]}
                    {context.userData.about[2]}
                    {context.userData.about[3]}
                    {context.userData.about[4]}
                    {context.userData.about[5]}
                    {context.userData.about[6]}
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
