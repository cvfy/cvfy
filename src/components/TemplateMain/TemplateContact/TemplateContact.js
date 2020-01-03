import React from "react";

class TemplateContact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-row-1">
          <div className="contact-1">
            <div className="icone">
              <i className="far fa-envelope"></i>
              <span className="user-contact">dogfather@bd.com</span>
            </div>
          </div>
          <div className="contact-2">
            <div className="icone"></div>
            <i className="fas fa-map-marker-alt"></i>
            <span className="user-contact">Dog street, 6666</span>
          </div>
        </div>
        <div className="contact-row-2">
          <div className="contact-3">
            <div className="icone"></div>
            <i className="fab fa-skype"></i>
            <span className="user-contact">babylonian.dog</span>
          </div>
          <div className="contact-4">
            <div className="icone"></div>
            <i className="fas fa-mobile-alt"></i>
            <span className="user-contact">178 9899 999</span>
          </div>
        </div>
        <div className="contact-row-3">
          <div className="contact-5">
            <div className="icone"></div>
            <i className="fas fa-globe"></i>
            <span className="user-contact">www.babyloniandog.com</span>
          </div>
          <div className="contact-6">
            <div className="icone"></div>
            <i className="fab fa-github"></i>
            <span className="user-contact">https://snoopy.github.io</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateContact;
