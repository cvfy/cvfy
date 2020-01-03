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
              <div className="period">03/2019 - 04/2020</div>
              <div className="location">Berlin, Germany</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
