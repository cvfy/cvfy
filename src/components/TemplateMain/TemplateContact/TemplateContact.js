import React from "react";

class TemplateContact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-row-1">
          <div className="contact-1">
            <div className="icone">
              <i className="far fa-envelope"></i> dogfather@bd.com
            </div>
          </div>
          <div className="contact-2">
            <div className="icone"></div>
            <i className="fas fa-map-marker-alt"></i>
            Dog street, 6666
          </div>
        </div>
        <div className="contact-row-2">
          <div className="contact-3">
            <div className="icone"></div>
            <i className="fab fa-skype"></i>
            babylonian.dog
          </div>
          <div className="contact-4">
            <div className="icone"></div>
            <i className="fas fa-mobile-alt"></i>
            178 9899 999
          </div>
        </div>
        <div className="contact-row-3">
          <div className="contact-5">
            <div className="icone"></div>
            <i className="fas fa-globe"></i>
            www.babyloniandog.com
          </div>
          <div className="contact-6">
            <div className="icone"></div>
            <i className="fab fa-github"></i>
            https://snoopy.github.io
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateContact;
