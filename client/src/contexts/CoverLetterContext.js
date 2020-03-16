import React, { Component, createContext } from "react";

export const CoverLetterContext = createContext();

class CoverLetterContextProvider extends Component {
  state = {
    id: "",
    style: {
        color: "",
        font: "'Open Sans', sans-serif",
        size1: "",
        size2: "",
        size3: "",
        size4: "",
        tasksHistory: [],
        tasksOutput: [],
        value: "",
        displayCoverTitle: true,
        displayCompany: true
    },
    coverLetters:[
      {
        fullName: "Full Name",
        professionalTitle: "Professional Title",
        companyDetails: "Company Details",
        text: "Dear Sir/Madam,...",
        signature: ""
      }
    ]
    
  };
  getCurrentDate = () => {
    const today = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return (
      today.getDate() +
      "-" +
      months[today.getMonth()].substring(0, 3) +
      "-" +
      today.getFullYear()
    );
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
  toggleCoverTitleClass = () => {
    let newObject = { ...this.state.style };
    newObject.displayCoverTitle = !this.state.style.displayCoverTitle;
    this.setState({ style: newObject });
  };
  toggleCompanyClass = () => {
    let newObject = { ...this.state.style };
    newObject.displayCompany = !this.state.style.displayCompany;
    this.setState({ style: newObject });
  };

  changeColor = e => {
    let newObj = {...this.state.style}
    newObj.color = e.target.name
    this.setState({ style: newObj });
  };

  changeFontFamily = (font) => {
    let newObj = {...this.state.style}
    newObj.font = font

    this.setState({ style: newObj });
  };

  handleFontSize = (name) => {
    let newObj = {...this.state.style}
    if (name === "small") {
     
        newObj.size1 = "1.2rem";
        newObj.size2 = "0.9rem";
        newObj.size3 = "0.7rem";
        newObj.size4 = "0.6rem";
        this.setState({ style: newObj });
        
      } else if (name === "medium") {
        newObj.size1 = "";
        newObj.size2 = "";
        newObj.size3 = "";
        newObj.size4 = "";
        this.setState({ style: newObj });
      } else {
        newObj.size1 = "1.6rem";
        newObj.size2 = "1.3rem";
        newObj.size3 = "1.1rem";
        newObj.size4 = "1.0rem";
        this.setState({ style: newObj });
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
          handleFontSize: this.handleFontSize,
          getCurrentDate: this.getCurrentDate,
          toggleCoverTitleClass: this.toggleCoverTitleClass,
          toggleCompanyClass: this.toggleCompanyClass
        }}
      >
        {this.props.children}
      </CoverLetterContext.Provider>
    );
  }
}

export default CoverLetterContextProvider;
