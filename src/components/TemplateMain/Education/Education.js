import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class Education extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="education">
              <div className="education-label" style={{ color: context.color }}>
                EDUCATION
              </div>
              <div className="education-body">
                <div className="education-group">
                  <div>
                    <input
                      className="subject"
                      type="text"
                      defaultValue={"Full Stack Web Development"}
                      style={{ fontFamily: context.font }}
                    />
                  </div>
                  <div>
                    <input
                      className="institution"
                      type="text"
                      defaultValue={"DCI - Digital Career Institute"}
                      style={{ fontFamily: context.font }}
                    />
                  </div>
                  <div className="time-loc">
                    <div>
                      <input
                        className="period"
                        type="text"
                        defaultValue={"03 / 2019  -  present"}
                        style={{ fontFamily: context.font }}
                      />
                    </div>
                    <div className="location">
                      <input
                        className="place"
                        type="text"
                        defaultValue={"City, Country"}
                        style={{ fontFamily: context.font }}
                      />
                    </div>
                  </div>
                </div>

                <div className="education-group">
                  <div>
                    <input
                      className="subject"
                      type="text"
                      defaultValue={"Study Program"}
                      style={{ fontFamily: context.font }}
                    />
                  </div>
                  <div>
                    <input
                      className="institution"
                      type="text"
                      defaultValue={"Institution"}
                      style={{ fontFamily: context.font }}
                    />
                  </div>
                  <div className="time-loc">
                    <div>
                      <input
                        className="period"
                        type="text"
                        defaultValue={"mm / yyyy  -  mm / yyyy"}
                        style={{ fontFamily: context.font }}
                      />
                    </div>
                    <div className="location">
                      <input
                        className="place"
                        type="text"
                        defaultValue={"City, Country"}
                        style={{ fontFamily: context.font }}
                      />
                    </div>
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

export default Education;
