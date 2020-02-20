import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class SkillBox extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div
              className="skill-box"
              style={{
                background: context.color,
                fontSize: context.size3
              }}
            >
              <span
                className="skillText"
                contentEditable="true"
                suppressContentEditableWarning={true}
              >
                {this.props.data}
              </span>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default SkillBox;
