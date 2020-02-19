import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class CertificationGroup extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="cert-group">
              <div className="editableDiv">
                <span
                  className="certificationTitle"
                  contentEditable="true"
                  suppressContentEditableWarning={true}
                  style={{
                    fontSize: context.size4
                  }}
                >
                  {this.props.data}
                </span>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default CertificationGroup;
