import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
class Achievements extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="achiev">
              <div className="achiev-label" style={{ color: context.color }}>
                ACHIEVEMENTS
              </div>
              <div className="achiev-body">
                <div className="achiev-group">
                  <div>
                    <textarea
                      className="cert-desc"
                      max-rows="2"
                      cols="37"
                      placeholder="- Won the 2nd prize at DCI Hackathon 2019"
                      maxLength="100"
                      style={{ fontFamily: context.font }}
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

export default Achievements;
