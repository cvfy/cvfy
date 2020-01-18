import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

class Languages extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="lang">
              <div className="section-label" style={{ color: context.color }}>
                LANGUAGES
              </div>
              <div className="lang-body">
                <div className="lang-group">
                  <div className="editableDiv language">
                    <span
                      className="langHeaderSpan"
                      contentEditable="true"
                      style={{
                        fontSize: context.size3
                      }}
                    ></span>
                    <span
                      className="langLevelSpan"
                      contentEditable="true"
                      style={{
                        color: context.color,
                        fontSize: context.size4
                      }}
                    ></span>
                  </div>
                </div>

                <div className="lang-group">
                  <div className="editableDiv language">
                    <span
                      className="langHeaderSpan"
                      contentEditable="true"
                      style={{
                        fontSize: context.size3
                      }}
                    ></span>
                    <span
                      className="langLevelSpan"
                      contentEditable="true"
                      style={{
                        color: context.color,
                        fontSize: context.size4
                      }}
                    ></span>
                  </div>
                </div>

                <div className="lang-group">
                  <div className="editableDiv language">
                    <span
                      className="langHeaderSpan"
                      contentEditable="true"
                      style={{
                        fontSize: context.size3
                      }}
                    ></span>
                    <span
                      className="langLevelSpan"
                      contentEditable="true"
                      style={{
                        color: context.color,
                        fontSize: context.size4
                      }}
                    ></span>
                  </div>
                </div>

                <div className="lang-group">
                  <div className="editableDiv language">
                    <span
                      className="langHeaderSpan"
                      contentEditable="true"
                      style={{
                        fontSize: context.size3
                      }}
                    ></span>
                    <span
                      className="langLevelSpan"
                      contentEditable="true"
                      style={{
                        color: context.color,
                        fontSize: context.size4
                      }}
                    ></span>
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
