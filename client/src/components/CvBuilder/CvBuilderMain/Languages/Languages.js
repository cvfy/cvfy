import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import LanguageGroup from "./LanguageGroup";

class Languages extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addLanguageGroup } = context;
          const group = context.userData.languages.map(el => (
            <LanguageGroup key={el.language} data={el} />
          ));
          return (
            <div className="lang">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  LANGUAGES
                </div>
                <div className="addLanguageDiv">
                  <button className={"addGroupBtn"} onClick={addLanguageGroup}>
                    add
                  </button>
                </div>
              </div>

              <div className="lang-body">{group}</div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Languages;
