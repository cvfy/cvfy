import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import CertificationGroup from "./CertificationGroup";

class Certifications extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="cert">
              <div className="section-label" style={{ color: context.color }}>
                CERTIFICATIONS
              </div>
              <div className="cert-body">
                <CertificationGroup></CertificationGroup>
                <CertificationGroup></CertificationGroup>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Certifications;
