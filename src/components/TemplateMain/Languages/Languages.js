import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class Languages extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="lang">
              <div className="lang-label" style={{ color: context.color }}>
                LANGUAGES
              </div>
              <div className="lang-body">
                <div className="lang-group">
                  <div className="language">
                    <div className="lang-header">Doggish</div>
                    <div>
                      <input
                        className="lang-level"
                        type="text"
                        style={{ color: context.color }}
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
                        style={{ color: context.color }}
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
                        style={{ color: context.color }}
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
                        style={{ color: context.color }}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Languages;
