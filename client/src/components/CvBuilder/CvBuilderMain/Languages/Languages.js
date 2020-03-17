import React from "react";
import { ThemeContext } from "../../../../contexts/ThemeContext";
import LanguageGroup from "./LanguageGroup";

class Languages extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const group = context.userData[
            this.props.index
          ].languages.map((el, i) => (
            <LanguageGroup key={i} dat={i} index={this.props.index} data={el} />
          ));
          return (
<<<<<<< HEAD
            <div className="languages" style={{padding: `${context.style.displayOneColumn === false ? "3px 25px" : "5px 40px"}`}}>
              <div className="sectionHeader" style={{justifyContent: `${context.style.displayOneColumn === false ? "space-between" : "center"}`}}>
                <div className="section-label" style={{ color: context.style.color }}>
=======
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
>>>>>>> 8b6e2b47ab66fe8aa9e15414730a856c9c652fc5
                  LANGUAGES
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
