import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class LanguageGroup extends React.Component {
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
                >
                  {context.userData.languages[0].language}
                </span>
                <span
                  className="langLevel"
                  contentEditable="true"
                  style={{
                    color: context.color,
                    fontSize: context.size4
                  }}
                >
                  {context.userData.languages[0].level}
                </span>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default LanguageGroup;
