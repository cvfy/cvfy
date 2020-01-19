import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import LanguagesGroup from "./LanguagesGroup";

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
                <LanguagesGroup></LanguagesGroup>
                <LanguagesGroup></LanguagesGroup>
                <LanguagesGroup></LanguagesGroup>
                <LanguagesGroup></LanguagesGroup>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Languages;
