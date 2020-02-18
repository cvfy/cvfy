import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import CertificationGroup from "./CertificationGroup";

class Certifications extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     certification: []
  //   };
  // }

  // addGroup(newItem) {
  //   this.setState({
  //     certification: [...this.state.certification, newItem]
  //   });
  // }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addCertificationGroup } = context;
          const res = context.userData.certifications.map(el => (
            <CertificationGroup key={el} data={el} />
          ));
          return (
            <div className="cert">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  CERTIFICATIONS
                </div>
                <div className="addCertificationDiv">
                  <button
                    className={"addGroupBtn"}
                    onClick={addCertificationGroup}
                  >
                    add
                  </button>
                </div>
              </div>
              <div className="cert-body">{res}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Certifications;
