import React from "react";

class TemplateHeader extends React.Component {
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
            <div className="name">Babylonian Dog</div>
            <div className="title">Full Stack Dog</div>
            <div className="summary">
              Lorizzle ipsum dolor sit gangster, pot adipiscing elit. Nullam
              shizznit velizzle, sizzle volutpat, suscipizzle quis, black
              vizzle, shut the shizzle up. Pellentesque dope tortizzle. Sed
              eros. Shizzlin dizzle at dolizzle dapibizzle turpizzle tempizzle
              hizzle.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateHeader;
