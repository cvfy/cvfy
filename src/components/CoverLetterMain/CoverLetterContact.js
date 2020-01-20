import React from "react";
import { CoverLetterContext } from "../../contexts/CoverLetterContext";

class CoverLetterContact extends React.Component {
  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          return (
            <div className="contact">
              <div className="contact-row-1">
                <div className="contact-1">
                  <div className="icone">
                    <i
                      className="far fa-envelope iconeColor"
                      style={{ color: context.color }}
                    ></i>
                    <span
                      className="user-contact userEmail"
                      contentEditable="true"
                    ></span>
                  </div>
                </div>
                <div className="contact-2">
                  <div className="icone"></div>
                  <i
                    className="fas fa-map-marker-alt iconeColor"
                    style={{ color: context.color }}
                  ></i>
                  <span
                    className="user-contact userAddress"
                    contentEditable="true"
                  ></span>
                </div>
              </div>
              <div className="contact-row-2">
                <div className="contact-3">
                  <i
                    className="fab fa-skype iconeColor"
                    style={{ color: context.color }}
                  ></i>
                  <span
                    className="user-contact userSkype"
                    contentEditable="true"
                  ></span>
                </div>
                <div className="contact-4">
                  <div className="icone"></div>
                  <i
                    className="fas fa-mobile-alt iconeColor"
                    style={{ color: context.color }}
                  ></i>
                  <span
                    className="user-contact userPhone"
                    contentEditable="true"
                  ></span>
                </div>
              </div>
              <div className="contact-row-3">
                <div className="contact-5">
                  <div className="icone"></div>
                  <i
                    className="fas fa-globe iconeColor"
                    style={{ color: context.color }}
                  ></i>
                  <span
                    className="user-contact userSite"
                    contentEditable="true"
                  ></span>
                </div>
                <div className="contact-6">
                  <div className="icone"></div>
                  <i
                    className="fab fa-github iconeColor"
                    style={{ color: context.color }}
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
      </CoverLetterContext.Consumer>
    );
  }
}

export default CoverLetterContact;
