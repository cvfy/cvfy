import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class TemplateContact extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="contact">
              <div className="contact-row-1">
                <div className="contact-1">
                  <div className="icone">
                    {/* <i
                      className="far fa-envelope"
                      style={{ color: context.color }}
                    ></i> */}
                    <span
                      style={{ color: context.color }}
                      className="iconeColor"
                    >
                      ✉
                    </span>
                    <span
                      className="user-contact userEmailSpan"
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
                    className="user-contact userAddressSpan"
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
                    className="user-contact userSkypeSpan"
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
                    className="user-contact userPhoneSpan"
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
                    className="user-contact userSiteSpan"
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
                    className="user-contact userGitHubSpan"
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

export default TemplateContact;
