import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    color: "",
    font: ""
  };

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  changeFontFamily = () => {
    this.setState({ font: "monospace" });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          changeColor: this.changeColor,
          changeBorderColor: this.changeBorderColor,
          changeFontFamily: this.changeFontFamily
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
