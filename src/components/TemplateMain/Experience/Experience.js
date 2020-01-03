import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange = event => {
    return event.target.value;
  };

  render() {
    return (
      <div className="experience">
        <div className="experience-label">WORK EXPERIENCE</div>
        <div className="experience-body">
          <div className="experience-group">
            <div>
              <input
                className="role"
                type="text"
                defaultValue={"Title/function"}
                onClick={this.handleTextChange}
              ></input>
            </div>
            <div>
              <input
                className="company"
                type="text"
                defaultValue={"Company"}
                onClick={this.handleTextChange}
              ></input>
            </div>
            <div className="time-loc">
              <div>
                <input
                  className="period"
                  type="text"
                  defaultValue={"mm / yyyy  -  mm / yyyy"}
                  onClick={this.handleTextChange}
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
                    onClick={this.handleTextChange}
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
                onClick={this.handleTextChange}
              ></input>
            </div>
            <div>
              <input
                className="company"
                type="text"
                defaultValue={"Company"}
                onClick={this.handleTextChange}
              ></input>
            </div>
            <div className="time-loc">
              <div>
                <input
                  className="period"
                  type="text"
                  defaultValue={"mm / yyyy  -  mm / yyyy"}
                  onClick={this.handleTextChange}
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
                    onClick={this.handleTextChange}
                  ></input>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
