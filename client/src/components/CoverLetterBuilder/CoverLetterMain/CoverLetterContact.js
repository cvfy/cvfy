import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class CoverLetterContact extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="coverLetterContact">
              <div className="contactGroup">
                <div className="icone">
                  <i
                    className="far fa-envelope iconeColor"
                    style={{ color: context.style.color }}
                  ></i>
                  <span
                    className="user-contact userEmail"
                    contentEditable="true"
                  ></span>
                </div>
              </div>

              <div className="contactGroup">
                <div className="icone">
                  <i
                    className="fas fa-map-marker-alt iconeColor"
                    style={{ color: context.style.color }}
                  ></i>
                  <span
                    className="user-contact userAddress"
                    contentEditable="true"
                  ></span>
                </div>
              </div>

              <div className="contactGroup">
                <div className="icone">
                  <i
                    className="fab fa-skype iconeColor"
                    style={{ color: context.style.color }}
                  ></i>
                  <span
                    className="user-contact userSkype"
                    contentEditable="true"
                  ></span>
                </div>
              </div>

              <div className="contactGroup">
                <div className="icone">
                  <i
                    className="fas fa-mobile-alt iconeColor"
                    style={{ color: context.style.color }}
                  ></i>
                  <span
                    className="user-contact userPhone"
                    contentEditable="true"
                  ></span>
                </div>
              </div>

              <div className="contactGroup">
                <div className="icone">
                  <i
                    className="fas fa-globe iconeColor"
                    style={{ color: context.style.color }}
                  ></i>
                  <span
                    className="user-contact userSite"
                    contentEditable="true"
                  ></span>
                </div>
              </div>

              <div className="contactGroup">
                <div className="icone">
                  <i
                    className="fab fa-github iconeColor"
                    style={{ color: context.style.color }}
                  ></i>
                  <span
                    className="user-contact userGitHub"
                    contentEditable="true"
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

export default CoverLetterContact;
