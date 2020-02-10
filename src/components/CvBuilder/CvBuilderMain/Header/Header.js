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
                  BABYLONIAN DOG
                </div>

                <div className="editableHeaderDiv CvTitle">
                  <span
                    className="CvTitle"
                    contentEditable="true"
                    style={{
                      fontSize: context.size1
                    }}
                  ></span>
                </div>

                <div className="editableHeaderDiv">
                  <span
                    className="summary"
                    contentEditable="true"
                    style={{
                      fontSize: context.size3
                    }}
                  ></span>
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
