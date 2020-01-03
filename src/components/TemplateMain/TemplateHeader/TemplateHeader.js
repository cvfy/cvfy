import React from "react";

class TemplateHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange = event => {
    return event.target.value;
  };

  render() {
    return (
      <div className="header">
        <div className="header-inner">
          <div className="photo">
            <img
              src="./dogFather.png"
              alt="dog"
              height="100px"
              width="100px"
              className="profile-photo"
            />
          </div>
          <div className="introduction">
            <div>
              <input
                className="name"
                type="text"
                defaultValue={"Babylonian Dog"}
                onClick={this.handleTextChange}
              ></input>
            </div>
            <div>
              <input
                className="title"
                type="text"
                defaultValue={"Full Stack Dog"}
                onClick={this.handleTextChange}
              ></input>
            </div>
            <div>
              <textarea
                className="summary"
                placeholder="Lorizzle ipsum dolor sit gangster, pot adipiscing elit. Nullam shizznit velizzle, sizzle volutpat, suscipizzle quis, blackvizzle, shut the shizzle up. Pellentesque dope tortizzle. Sederos. Shizzlin dizzle at dolizzle dapibizzle turpizzle tempizzlehizzle."
                cols="90"
                rows="4"
                onClick={this.handleTextChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateHeader;
