import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import { element } from "prop-types";

class Contacts extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="contact">
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
