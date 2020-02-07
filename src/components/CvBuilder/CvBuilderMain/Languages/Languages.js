import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import LanguageGroup from "./LanguageGroup";

class Languages extends React.Component {
  constructor() {
    super();
    this.state = {
      languages: []
    };
  }

  addGroup(newItem) {
    this.setState({
      languages: [...this.state.languages, newItem]
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="lang">
              <div className="sectionHeader">
                <div className="section-label" style={{ color: context.color }}>
                  LANGUAGES
                </div>
                <div className="addLanguageDiv">
                  <button
                    className={"addGroupBtn"}
                    onClick={() => this.addGroup(<LanguageGroup />)}
                  >
                    add
                  </button>
                </div>
              </div>

              <div className="lang-body">
                <LanguageGroup />
                {this.state.languages.map(child => child)}
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Languages;