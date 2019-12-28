import React from "react";

class Languages extends React.Component {
  render() {
    return (
      <div className="lang">
        <div className="lang-label">LANGUAGES</div>
        <div className="lang-body">
          <div className="lang-group">
            <div className="lang-header">Gangsta</div>
            <div className="lang-level">Full Professional Proficiency</div>
          </div>
          <div className="lang-group">
            <div className="lang-header">Doggish</div>
            <div className="lang-level">Mother Tongue</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
