import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    color: "",
    font: "'Open Sans', sans-serif"
  };

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  changeFontFamily = () => {
    this.setState({ font: "Kurale" });

    // font-family: 'Quicksand', sans-serif;
    // font-family: 'Ubuntu', sans-serif;
    // font-family: 'Roboto Condensed', sans-serif;
    // font-family: 'Merriweather', serif;
    // font-family: 'Hind', sans-serif;
    // font-family: 'Raleway', sans-serif;
    // font-family: 'Kurale', serif;
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
