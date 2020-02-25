import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import CertificationGroup from "./CertificationGroup";

class Certifications extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const group = context.userData.certifications.map((el, i) => (
            <CertificationGroup key={el} dat={i} data={el} />
          ));
          return (
            <div className="cert">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  CERTIFICATIONS
                </div>
              </div>
              <div className="cert-body">{group}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Certifications;
