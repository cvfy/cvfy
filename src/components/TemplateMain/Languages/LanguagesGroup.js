import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class LanguagesGroup extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="lang-group">
              <div className="editableDiv language">
                <span
                  className="langHeader"
                  contentEditable="true"
                  style={{
                    fontSize: context.size3
                  }}
                ></span>
                <span
                  className="langLevel"
                  contentEditable="true"
                  style={{
                    color: context.color,
                    fontSize: context.size4
                  }}
                ></span>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default LanguagesGroup;
