import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class ContactsProfessional extends React.Component {
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
      ? "showContactModalProfessional"
      : "hideContactModal";

    return (
      <ThemeContext.Consumer>
        {context => {
          const {
            updateUserSkype,
            updateUserPhone,
            updateUserLinkedIn,
            updateUserGitHub,
            updateUserEmail,
            updateUserWebsite
          } = context;
          return (
            <div
              className="contact"
              style={{
                background: "#fff",
                padding: "0",
                borderBottom: `2px solid ${context.style.color}`
              }}
              onClick={this.displayModal}
            >
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
                      value={
                        context.userData[this.props.index].contact[0].value
                      }
                      onChange={e => {
                        updateUserEmail(this.props.index, e.target.value);
                      }}
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
                      value={
                        context.userData[this.props.index].contact[3].value
                      }
                      onChange={e => {
                        updateUserSkype(this.props.index, e.target.value);
                      }}
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
                      value={
                        context.userData[this.props.index].contact[1].value
                      }
                      onChange={e => {
                        updateUserPhone(this.props.index, e.target.value);
                      }}
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
                      value={
                        context.userData[this.props.index].contact[5].value
                      }
                      onChange={e => {
                        updateUserWebsite(this.props.index, e.target.value);
                      }}
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
                      value={
                        context.userData[this.props.index].contact[2].value
                      }
                      onChange={e => {
                        updateUserLinkedIn(this.props.index, e.target.value);
                      }}
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
                      value={
                        context.userData[this.props.index].contact[6].value
                      }
                      onChange={e => {
                        updateUserGitHub(this.props.index, e.target.value);
                      }}
                    />
                  </>
                </div>
              </div>
              <div className="contact-column">
                {context.userData[this.props.index].contact.map(el => {
                  if (el.value.length !== 0) {
                    return (
                      <div className="contactGroupProfessional" key={el.value}>
                        <div className="icone">
                          <i
                            className={`${el.icon} iconeColor`}
                            style={{ color: context.style.color }}
                          ></i>
                          <span
                            className="user-contact"
                            contentEditable="true"
                            suppressContentEditableWarning={true}
                          >
                            {el.value}
                          </span>
                        </div>
                      </div>
                    );
                  } else return null;
                })}
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ContactsProfessional;
