import React, { Component, createContext } from "react";
import EducationGroup from "../components/TemplateMain/Education/EducationGroup";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    color: "",
    font: "'Open Sans', sans-serif",
    size1: "",
    size2: "",
    size3: "",
    size4: "",
    tasksHistory: [],
    tasksOutput: [],
    value: ""
  };

  changeColor = e => {
    this.setState({ color: e.target.name });
  };

  changeFontFamily = e => {
    this.setState({ font: e.target.name });
  };

  handleFontSize = e => {
    if (e.target.name === "small") {
      this.setState({
        size1: "1.2rem",
        size2: "0.9rem",
        size3: "0.7rem",
        size4: "0.6rem"
      });
    } else if (e.target.name === "medium") {
      return this.setState({ size1: "", size2: "", size3: "", size4: "" });
    } else {
      return this.setState({
        size1: "1.4rem",
        size2: "1.1rem",
        size3: "0.9rem",
        size4: "0.8rem"
      });
    }
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          changeColor: this.changeColor,
          displaySubNav: this.displaySubNav,
          changeFontFamily: this.changeFontFamily,
          handleFontSize: this.handleFontSize
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
