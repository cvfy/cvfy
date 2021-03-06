import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import LanguageGroup from "./LanguageGroup";

const Languages = props => {
  return (
    <ThemeContext.Consumer>
      {context => {
        const group = context.userData[props.index].languages.map((el, i) => (
          <LanguageGroup key={i} dat={i} index={props.index} data={el} />
        ));
        return (
          <div
            className="languages"
            style={{
              padding: `${
                context.style.displayOneColumn === false
                  ? "20px 30px 0 30px"
                  : "10px 40px"
              }`
            }}
          >
            <div
              className="sectionHeader"
              style={{
                justifyContent: `${
                  context.style.displayOneColumn === false
                    ? "space-between"
                    : "center"
                }`
              }}
            >
              <div
                className="section-label"
                style={{ color: context.style.color }}
              >
                LANGUAGES
              </div>
            </div>
            <div className="lang-body">{group}</div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Languages;
