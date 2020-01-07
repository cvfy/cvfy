import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class TemplateHeader extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="header">
              <div className="header-inner">
                <div className="photo">
                  <img
                    src="./dogFather.png"
                    alt="dog"
                    height="110px"
                    width="110px"
                    className="profile-photo"
                  />
                </div>
                <div className="introduction">
                  <div>
                    <input
                      className="name"
                      type="text"
                      defaultValue={"BABYLONIAN DOG"}
                      style={{ fontFamily: context.font }}
                    ></input>
                  </div>
                  <div>
                    <input
                      className="title"
                      type="text"
                      defaultValue={"Full Stack Dog"}
                      style={{ fontFamily: context.font }}
                    ></input>
                  </div>
                  <div className="titleDiv">
                    <textarea
                      className="summary"
                      placeholder="Lorizzle ipsum dolor sit gangster, pot adipiscing elit. Nullam shizznit velizzle, sizzle volutpat, suscipizzle quis, blackvizzle, shut the shizzle up. Pellentesque dope tortizzle. Sederos. Shizzlin dizzle at dolizzle dapibizzle turpizzle tempizzlehizzle."
                      cols="90"
                      rows="4"
                      style={{ fontFamily: context.font }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default TemplateHeader;
