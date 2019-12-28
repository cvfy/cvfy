import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div className="education">
        <div className="education-label">EDUCATION</div>
        <div className="education-body">
          <div className="education-group">
            <div className="subject">Full Stack Web Development</div>
            <div className="institution">DCI - Digital Career Institute</div>
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
