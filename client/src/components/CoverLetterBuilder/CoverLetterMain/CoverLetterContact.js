import React from "react";
import { CoverLetterContext } from "../../../contexts/CoverLetterContext";

class CoverLetterContact extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  displayModal = () => {
    if (!this.state.clicked) {
      this.setState({ clicked: true });
    }
  };

  saveContacts = () => {
    this.setState({ clicked: false });
  };

  render() {
    const className = this.state.clicked
      ? "showCoverModal"
      : "hideContactModal";

    return (
      <CoverLetterContext.Consumer>
        {coverContext => {
          const {
            // modifyCover,
            updateUserSkype,
            updateUserPhone,
            updateUserLinkedIn,
            updateUserGitHub,
            updateUserEmail,
            updateUserWebsite
          } = coverContext;
          return (
            <div
              className="coverLetterContactExecutive"
              onClick={this.displayModal}
            >
              {/* ========================================================== 
              ================= HERE STARTS CONTACT MODAL ==================
              ==============================================================
              */}
              <div className={className}>
                <div className="contactModalTitle">Contacts</div>
                <div className="contactModalSaveAndDiscard">
                  <button
                    className="saveContactButton"
                    onClick={this.saveContacts}
                  >
                    Save
                  </button>
                </div>
                <div className="contactBox">
                  <div>
                    <i className="far fa-envelope modalContactIcon"></i>
                  </div>
                  <>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      maxLength="150"
                      value={coverContext.coverLetters[0].contact[0].value}
                      onChange={e => updateUserEmail(e.target.value)}
                    />
                  </>
                </div>

                {/* ############ Skype ############ */}
                <div className="contactBox">
                  <>
                    <i className="fab fa-skype modalContactIcon"></i>
                  </>
                  <>
                    <input
                      type="text"
                      name="skype"
                      placeholder="Skype"
                      maxLength="150"
                      value={coverContext.coverLetters[0].contact[3].value}
                      onChange={e => updateUserSkype(e.target.value)}
                    />
                  </>
                </div>

                {/* ############ Phone ############ */}
                <div className="contactBox">
                  <>
                    <i className="fas fa-mobile-alt modalContactIcon"></i>
                  </>
                  <>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                      maxLength="150"
                      value={coverContext.coverLetters[0].contact[1].value}
                      onChange={e => updateUserPhone(e.target.value)}
                    />
                  </>
                </div>
                {/* ############ Website ############ */}
                <div className="contactBox">
                  <>
                    <i className="fas fa-globe modalContactIcon"></i>
                  </>
                  <>
                    <input
                      type="text"
                      name="website"
                      placeholder="Website"
                      maxLength="150"
                      value={coverContext.coverLetters[0].contact[5].value}
                      onChange={e => updateUserWebsite(e.target.value)}
                    />
                  </>
                </div>
                {/* ############ LinkedIn ############ */}
                <div className="contactBox">
                  <>
                    <i className="fab fa-linkedin modalContactIcon"></i>
                  </>
                  <>
                    <input
                      type="text"
                      name="linkedin"
                      placeholder="LinkedIn"
                      maxLength="150"
                      value={coverContext.coverLetters[0].contact[2].value}
                      onChange={e => updateUserLinkedIn(e.target.value)}
                    />
                  </>
                </div>

                {/* ############ GitHub ############ */}
                <div className="contactBox">
                  <>
                    <i className="fab fa-github modalContactIcon"></i>
                  </>
                  <>
                    <input
                      type="text"
                      name="github"
                      placeholder="GitHub"
                      maxLength="150"
                      value={coverContext.coverLetters[0].contact[6].value}
                      onChange={e => updateUserGitHub(e.target.value)}
                    />
                  </>
                </div>
              </div>
              {/* ========================================================== 
              ================= HERE ENDS CONTACT MODAL ==================
              ==============================================================
              */}

              <>
                {coverContext.coverLetters[0].contact.map(el => {
                  if (el.value.length !== 0) {
                    return (
                      <div className="contactCoverGroup" key={el.value}>
                        <div className="icone">
                          <i
                            className={`${el.icon} iconeColor`}
                            style={{ color: coverContext.style.color }}
                          ></i>
                          <span className="user-contact">{el.value}</span>
                        </div>
                      </div>
                    );
                  } else return null;
                })}
              </>
            </div>
          );
        }}
      </CoverLetterContext.Consumer>
    );
  }
}

export default CoverLetterContact;
