import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";

class CertificationGroup extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { modifyCertifications } = context;
          return (
            <div className="cert-group">
              <div className="editableDiv">
                <span
                onBlur={(e) => {modifyCertifications(this.props.dat, e.target.innerText)}}
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
