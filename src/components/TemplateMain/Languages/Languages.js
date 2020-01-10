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
                    <div
                      className="lang-header"
                      style={{ fontSize: context.size3 }}
                    >
                      Doggish
                    </div>
                    <div>
                      <input
                        className="lang-level"
                        type="text"
                        style={{
                          color: context.color,
                          fontFamily: context.font,
                          fontSize: context.size4
                        }}
                        defaultValue={"Mother tongue"}
                      />
                    </div>
                  </div>
                </div>
                <div className="lang-group">
                  <div className="language">
                    <div
                      className="lang-header"
                      style={{ fontSize: context.size3 }}
                    >
                      English
                    </div>
                    <div>
                      <input
                        className="lang-level"
                        type="text"
                        defaultValue={"Professional Proficiency"}
                        style={{
                          color: context.color,
                          fontFamily: context.font,
                          fontSize: context.size4
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="lang-group">
                  <div className="language">
                    <div
                      className="lang-header"
                      style={{ fontSize: context.size3 }}
                    >
                      German
                    </div>
                    <div>
                      <input
                        className="lang-level"
                        type="text"
                        defaultValue={"Sehr schlecht"}
                        style={{
                          color: context.color,
                          fontFamily: context.font,
                          fontSize: context.size4
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="lang-group">
                  <div className="language">
                    <div
                      className="lang-header"
                      style={{ fontSize: context.size3 }}
                    >
                      Chinese
                    </div>
                    <div>
                      <input
                        className="lang-level"
                        type="text"
                        defaultValue={"I like the food"}
                        style={{
                          color: context.color,
                          fontFamily: context.font,
                          fontSize: context.size4
                        }}
                      />
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
