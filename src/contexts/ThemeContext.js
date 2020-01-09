import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    color: "",
    font: "'Open Sans', sans-serif"
  };

  changeColor = e => {
    this.setState({ color: e.target.name });
  };

  changeFontFamily = e => {
    this.setState({ font: e.target.name });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          changeColor: this.changeColor,
          displaySubNav: this.displaySubNav,
          changeFontFamily: this.changeFontFamily
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
