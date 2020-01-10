import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class Certifications extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="cert">
              <div className="cert-label" style={{ color: context.color }}>
                CERTIFICATIONS
              </div>
              <div className="cert-body">
                <div className="cert-group">
                  <div>
                    <textarea
                      className="cert-desc"
                      max-rows="1"
                      cols="37"
                      placeholder="- best dog 2020 - who let the dogs out award"
                      maxLength="80"
                      style={{
                        fontFamily: context.font,
                        fontSize: context.size4
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Certifications;
