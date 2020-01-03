import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange = event => {
    return event.target.value;
  };

  render() {
    return (
      <div className="education">
        <div className="education-label">EDUCATION</div>
        <div className="education-body">
          <div className="education-group">
            <div>
              <input
                className="subject"
                type="text"
                defaultValue={"Full Stack Web Development"}
                onClick={this.handleTextChange}
              ></input>
            </div>
            <div>
              <input
                className="institution"
                type="text"
                defaultValue={"DCI - Digital Career Institute"}
                onClick={this.handleTextChange}
              ></input>
            </div>
            <div className="time-loc">
              <div>
                <input
                  className="period"
                  type="text"
                  defaultValue={"03 / 2019  -  present"}
                  onClick={this.handleTextChange}
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
                onClick={this.handleTextChange}
              ></input>
            </div>
            <div>
              <input
                className="institution"
                type="text"
                defaultValue={"Institution"}
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
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
