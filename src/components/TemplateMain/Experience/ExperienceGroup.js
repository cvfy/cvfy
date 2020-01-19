import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class ExperienceGroup extends React.Component {
  //   render() {
  //     return (
  //       <div className="Terminal">
  //         <div className="Input-Terminal">
  //           <div id="terminalOutput">{this.renderTerminalOutput()}</div>&nbsp;<span> >>> </span> &nbsp;
  //           <input value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange}  id="terminalInput" ></input>
  //         </div>
  //       </div>
  //     );
  //   }
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          // const { renderTasksOutput, keyPress, handleChange } = context;
          return (
            <div className="experience-group">
              <div className="editableDiv">
                <span
                  className="role"
                  contentEditable="true"
                  style={{
                    fontSize: context.size2
                  }}
                ></span>
              </div>

              <div className="editableDiv">
                <span
                  className="company"
                  contentEditable="true"
                  style={{
                    fontSize: context.size2
                  }}
                ></span>
              </div>

              <div className="time-loc">
                <div className="period">
                  <span
                    className="month"
                    style={{
                      fontSize: context.size4
                    }}
                    contentEditable="true"
                  ></span>
                  <span
                    className="dateDivider"
                    style={{
                      fontSize: context.size4
                    }}
                  >
                    /
                  </span>
                  <span
                    className="year"
                    style={{
                      fontSize: context.size4
                    }}
                    contentEditable="true"
                  ></span>
                  <span
                    className="dateDivider"
                    style={{
                      fontSize: context.size4
                    }}
                  >
                    -
                  </span>
                  <span
                    className="month"
                    style={{
                      fontSize: context.size4
                    }}
                    contentEditable="true"
                  ></span>
                  <span
                    className="dateDivider"
                    style={{
                      fontSize: context.size4
                    }}
                  >
                    /
                  </span>
                  <span
                    className="year"
                    style={{
                      fontSize: context.size4
                    }}
                    contentEditable="true"
                  ></span>
                </div>

                <div className="location">
                  <span
                    className="place"
                    style={{
                      fontSize: context.size4
                    }}
                    contentEditable="true"
                  ></span>
                </div>
              </div>

              <div
                className="achiev-task"
                style={{
                  fontFamily: context.font,
                  fontSize: context.size4
                }}
              >
                Achivements / Tasks
              </div>
              <div>
                <div className="editableDiv">
                  {/* <div id="tasksOutput">{renderTasksOutput}</div> */}
                  <span
                    // value={this.state.value}
                    // onKeyDown={keyPress}
                    // onChange={handleChange}
                    // id="terminalInput"
                    className="task"
                    contentEditable="true"
                    style={{
                      fontSize: context.size3
                    }}
                  ></span>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ExperienceGroup;
