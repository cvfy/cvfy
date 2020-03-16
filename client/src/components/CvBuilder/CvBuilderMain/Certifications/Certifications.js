import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import CertificationGroup from "./CertificationGroup";

class Certifications extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const group = context.userData[this.props.index].certifications.map((el, i) => (
            <CertificationGroup key={i} dat={i} index={this.props.index} data={el} />
          ));
          return (
            <div className="certifications" style={{padding: `${context.style.displayOneColumn === false ? "20px" : "20px 40px"}`}}>
              <div className="sectionHeader" style={{justifyContent: `${context.style.displayOneColumn === false ? "space-between" : "center"}`}}>
                <div className="section-label" style={{ color: context.style.color }}>
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
