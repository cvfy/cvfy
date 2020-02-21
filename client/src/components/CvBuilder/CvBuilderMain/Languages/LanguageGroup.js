import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class LanguageGroup extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { modifyLanguages } = context;
          return (
            <div className="lang-group">
              <div className="editableDiv language">
                <span
                onBlur={(e) => {modifyLanguages("language", this.props.dat, e.target.innerText)}}
                  className="langHeader"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  style={{
                    fontSize: context.size3
                  }}
                >
                  {this.props.data.language}
                </span>
                <span
                onBlur={(e) => {modifyLanguages("level", this.props.dat, e.target.innerText)}}
                  className="langLevel"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  style={{
                    color: context.color,
                    fontSize: context.size4
                  }}
                >
                  {this.props.data.level}
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
