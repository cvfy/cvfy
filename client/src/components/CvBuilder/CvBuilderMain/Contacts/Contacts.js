import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class Contacts extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false, active: false };
    this.toggleClass = this.toggleClass.bind(this);
  }

  displayModal = () => {
    if (!this.state.clicked) {
      this.setState({ clicked: true });
    }
  };

  discardChangesAndHideModal = e => {
    this.setState({ clicked: false });
  };

  // This function is toggling all checkboxes, should toggle specific targets, to be fixed
  toggleClass(e) {
    const currentState = this.state.active;
    console.log("i am a toggleeee", e.target.title, currentState);
    this.setState({ active: !currentState });
  }

  render() {
    const className = this.state.clicked
      ? "showContactModal"
      : "hideContactModal";

    const isActive = this.state.active ? "innerCheckBox" : null;
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="contact" onClick={this.displayModal}>
              <div className={className}>
                <div className="contactModalTitle">Contacts</div>
                <div className="contactModalSaveAndDiscard">
                  <button className="saveContactButton">Save</button>
                  <button
                    className="discardContactButton"
                    onClick={this.discardChangesAndHideModal}
                  >
                    Discard
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
                      // value={get the user data here}
                      maxLength="150"
                    />
                  </>
                </div>
                {/* ############ Skype ############ */}
                <div className="contactBox">
                  <div
                    className="outerCheckBox"
                    onClick={this.toggleClass}
                    title="skype"
                  >
                    <div className={isActive}></div>
                  </div>
                  <>
                    <i className="fab fa-skype modalContactIcon"></i>
                  </>
                  <>
                    <input
                      type="text"
                      name="skype"
                      placeholder="Skype"
                      // value={get the user data here}
                      maxLength="150"
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
                      // value={get the user data here}
                      maxLength="150"
                    />
                  </>
                </div>
                {/* ############ Website ############ */}
                <div className="contactBox">
                  <div
                    className="outerCheckBox"
                    onClick={this.toggleClass}
                    title="website"
                  >
                    <div className={isActive}></div>
                  </div>
                  <>
                    <i className="fas fa-globe modalContactIcon"></i>
                  </>
                  <>
                    <input
                      type="text"
                      name="website"
                      placeholder="Website"
                      // value={get the user data here}
                      maxLength="150"
                    />
                  </>
                </div>
                {/* ############ LinkedIn ############ */}
                <div className="contactBox">
                  <div
                    className="outerCheckBox"
                    onClick={this.toggleClass}
                    title="linkedin"
                  >
                    <div className={isActive}></div>
                  </div>
                  <>
                    <i className="fab fa-linkedin modalContactIcon"></i>
                  </>
                  <>
                    <input
                      type="text"
                      name="linkedin"
                      placeholder="LinkedIn"
                      // value={get the user data here}
                      maxLength="150"
                    />
                  </>
                </div>

                {/* ############ GitHub ############ */}
                <div className="contactBox">
                  <div
                    className="outerCheckBox"
                    onClick={this.toggleClass}
                    title="github"
                  >
                    <div className={isActive}></div>
                  </div>
                  <>
                    <i className="fab fa-github modalContactIcon"></i>
                  </>
                  <>
                    <input
                      type="text"
                      name="github"
                      placeholder="GitHub"
                      // value={get the user data here}
                      maxLength="150"
                    />
                  </>
                </div>
              </div>
              <div className="contact-row">
                {context.userData.contact.map(el => {
                  if (el.value.length !== 0) {
                    return (
                      <div className="contactGroup" key={el.value}>
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

export default Contacts;
