import React from "react";

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange = event => {
    return event.target.value;
  };

  render() {
    return (
      <div className="skills">
        <div className="skills-label">SKILLS</div>
        <div className="skills-body">
          <div className="skill-boxes">
            <div className="skill-box">
              <div className="skill-text">JavaScript</div>
            </div>
            <div className="skill-box">
              <div className="skill-text">React</div>
            </div>
            <div className="skill-box">
              <div className="skill-text">Node.js</div>
            </div>
            <div className="skill-box">
              <div className="skill-text">MongoDB</div>
            </div>
            <div className="skill-box">
              <div className="skill-text">Bootstrap</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
