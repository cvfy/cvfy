import React from "react";

class Languages extends React.Component {
  render() {
    return (
      <div className="lang">
        <div className="lang-label">LANGUAGES</div>
        <div className="lang-body">
          <div className="lang-group">
            <div className="language">
              <div className="lang-header">Doggish</div>
              <div>
                <input
                  className="lang-level"
                  type="text"
                  defaultValue={"Mother tongue"}
                ></input>
              </div>
            </div>
          </div>
          <div className="lang-group">
            <div className="language">
              <div className="lang-header">English</div>
              <div>
                <input
                  className="lang-level"
                  type="text"
                  defaultValue={"Professional Proficiency"}
                ></input>
              </div>
            </div>
          </div>
          <div className="lang-group">
            <div className="language">
              <div className="lang-header">German</div>
              <div>
                <input
                  className="lang-level"
                  type="text"
                  defaultValue={"Sehr schlecht"}
                ></input>
              </div>
            </div>
          </div>
          <div className="lang-group">
            <div className="language">
              <div className="lang-header">Chinese</div>
              <div>
                <input
                  className="lang-level"
                  type="text"
                  defaultValue={"I like the food"}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Languages;
