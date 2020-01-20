import React, { Component, createContext } from "react";

export const CoverLetterContext = createContext();

class CoverLetterContextProvider extends Component {
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

  // renderTasksOutput = () => {
  //   return this.state.tasksOutput
  //     .map(t => <div style={{ display: "flex" }}>{t}</div>)
  //     .reverse();
  // };

  // handleChange(e) {
  //   this.setState({
  //     value: e.target.value
  //   });
  // }

  // keyPress(e) {
  //   if (e.keyCode === 13) {
  //     console.log(e.target.value);
  //     var newArray = this.state.tasksHistory;
  //     newArray.push(e.target.value);
  //     //console.log(newArray);
  //     this.setState({
  //       tasksHistory: newArray,
  //       tasksOutput: [e.target.value, ...this.state.tasksOutput],
  //       value: ""
  //     });

  //     // var terminalOutput=document.getElementById('terminalOutput');
  //     // terminalOutput.append(e.target.value+ &carr;);
  //     //terminalOutput.append(``);
  //     console.log(tasksOutput);
  //     console.log(this.state.tasksHistory);
  //   }
  // }

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
      <CoverLetterContext.Provider
        value={{
          ...this.state,
          changeColor: this.changeColor,
          displaySubNav: this.displaySubNav,
          changeFontFamily: this.changeFontFamily,
          handleFontSize: this.handleFontSize
        }}
      >
        {this.props.children}
      </CoverLetterContext.Provider>
    );
  }
}

export default CoverLetterContextProvider;
