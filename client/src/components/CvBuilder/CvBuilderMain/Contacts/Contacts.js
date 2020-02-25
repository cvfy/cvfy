import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class Contacts extends React.Component {
  constructor() {
    super();
    this.my_refs = {};
    this.state = { clicked: false };

    this.focusByClassName.bind(this);
  }

  focusByClassName(className) {
    let myRef = this.my_refs[className];
    if (myRef) {
      myRef.focus();
    }
  }
  handleClick = () => {
    this.setState({ clicked: true });
  };

  // handleChange = () => {
  //   this.props.onUserInput(
  //     this.refs.searchStringInput.value
  //   )
  // }

  render() {
    const className = this.state.clicked
      ? "showContactModal"
      : "hideContactModal";
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="contact" onClick={this.handleClick}>
              <div className={className}>
                <div className="contactModalTitle">Contacts</div>
                <div className="contactModalSaveAndDiscard">
                  <button className="saveContactButton">Save</button>
                  <button className="discardContactButton">Discard</button>
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
                <div className="contactBox">
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
                <div className="contactBox">
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
                <div className="contactBox">
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
                <div className="contactBox">
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
                            style={{ color: context.color }}
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
