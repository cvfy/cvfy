import React from "react";
import { CoverLetterContext } from "../../../contexts/CoverLetterContext";

class CoverLetterContact extends React.Component {
  render() {
    return (
      <CoverLetterContext.Consumer>
        {context => {
          const { modifyCover } = context;
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
                    onBlur={e => modifyCover("email", e.target.innerText)}
          >{context.coverLetters[0].contact.email}</span>
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
                    onBlur={e => modifyCover("address", e.target.innerText)}
                  >{context.coverLetters[0].contact.address}</span>
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
                    onBlur={e => modifyCover("skype", e.target.innerText)}
                  >{context.coverLetters[0].contact.skype}</span>
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
                    onBlur={e => modifyCover("phone", e.target.innerText)}
                  >{context.coverLetters[0].contact.phone}</span>
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
                    onBlur={e => modifyCover("website", e.target.innerText)}
                  >{context.coverLetters[0].contact.website}</span>
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
                    onBlur={e => modifyCover("gitHub", e.target.innerText)}
                  >{context.coverLetters[0].contact.gitHub}</span>
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
