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
                    ></input>
                  </div>
                  <div>
                    <input
                      className="institution"
                      type="text"
                      defaultValue={"DCI - Digital Career Institute"}
                    ></input>
                  </div>
                  <div className="time-loc">
                    <div>
                      <input
                        className="period"
                        type="text"
                        defaultValue={"03 / 2019  -  present"}
                      ></input>
                    </div>
                    <div className="location">Berlin, Germany</div>
                  </div>
                </div>

                <div className="education-group">
                  <div>
                    <input
                      className="subject"
                      type="text"
                      defaultValue={"Study Program"}
                    ></input>
                  </div>
                  <div>
                    <input
                      className="institution"
                      type="text"
                      defaultValue={"Institution"}
                    ></input>
                  </div>
                  <div className="time-loc">
                    <div>
                      <input
                        className="period"
                        type="text"
                        defaultValue={"mm / yyyy  -  mm / yyyy"}
                      ></input>
                    </div>
                    <div className="location">City, Country</div>
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
