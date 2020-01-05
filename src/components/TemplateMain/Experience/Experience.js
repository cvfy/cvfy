import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class Experience extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="experience">
              <div
                className="experience-label"
                style={{ color: context.color }}
              >
                WORK EXPERIENCE
              </div>
              <div className="experience-body">
                <div className="experience-group">
                  <div>
                    <input
                      className="role"
                      type="text"
                      defaultValue={"Title/function"}
                    ></input>
                  </div>
                  <div>
                    <input
                      className="company"
                      type="text"
                      defaultValue={"Company"}
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
                  <div className="achiev-task">Achivements / Tasks</div>
                  <div>
                    <ul className="task-ul">
                      <li>
                        <input
                          className="task-list"
                          type="text"
                          defaultValue={"Short description of a task"}
                        ></input>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="experience-group">
                  <div>
                    <input
                      className="role"
                      type="text"
                      defaultValue={"Title/function"}
                    ></input>
                  </div>
                  <div>
                    <input
                      className="company"
                      type="text"
                      defaultValue={"Company"}
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
                  <div className="achiev-task">Achivements / Tasks</div>
                  <div>
                    <ul className="task-ul">
                      <li>
                        <input
                          className="task-list"
                          type="text"
                          defaultValue={"Short description of a task"}
                        ></input>
                      </li>
                    </ul>
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

export default Experience;
