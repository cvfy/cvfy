import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import ProfilePhoto from "../../../../assets/dogFather.png";

class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="header-inner">
              <div className="photo">
                <img
                  src={ProfilePhoto}
                  alt="dog"
                  height="110px"
                  width="110px"
                  className="profile-photo"
                />
              </div>
              <div className="introduction">
                <div className="name" style={{ fontFamily: context.font }}>
                  {context.userData.fullName}
                </div>

                <div className="editableHeaderDiv CvTitle">
                  <span
                    className="CvTitle"
                    contentEditable="true"
                    style={{
                      fontSize: context.size1
                    }}
                  >
                    {context.userData.intro}
                  </span>
                </div>

                <div className="editableHeaderDiv">
                  <span
                    className="summary"
                    contentEditable="true"
                    style={{
                      fontSize: context.size3
                    }}
                  >
                    {context.userData.about}
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
