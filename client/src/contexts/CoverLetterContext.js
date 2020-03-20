import React, { Component, createContext } from "react";
import axios from 'axios'
import store from "./../store.js";

let status = false;
export const CoverLetterContext = createContext();
function aFunction() {
  var newState = store.getState();
  console.log(newState.auth.user.name);
  return newState.auth.user.id;
}
function guidGenerator() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}
class CoverLetterContextProvider extends Component {
  state = {
    id: "",
    loadingSaveCv: true,
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
        text: "Dear Sir/Madam,...AAA",
        signature: "",
        contact: {
           email: "Email",
           address: "Address",
           skype: "Skype",
           phone: "Phone",
           website: "Website",
           gitHub: "Github"
        }
      },
      {
        text: "Dear Sir/Madam,...",
        signature: ""
      },
      {
        text: "Dear Sir/Madam,...",
        signature: ""
      },
      {
        text: "Dear Sir/Madam,...",
        signature: ""
      }
    ]
    
  };

  async componentDidMount() {

    //console.log("diplay one column is =>" + this.state.style.displayOneColumn);
    if (
      localStorage.getItem("currentCover") === null ||
      localStorage.getItem("currentCover") === ""
    ) {
      const idG = await guidGenerator();
      await this.setState({ id: idG });
      await localStorage.setItem("currentCover", this.state.id);
      console.log(`the state id is - ${this.state.id}`);
      axios.post(
        `http://localhost:5000/api/users/resume/cover/${aFunction()}`,
        this.state
      );
    }
    if (
      localStorage.getItem("currentCover") !== null ||
      localStorage.getItem("currentCover") !== ""
    ) {
      console.log("i am trying to get the data");
      axios
        .get(
          `http://localhost:5000/api/users/resume/cv/currentCover/${localStorage.getItem(
            "currentCover"
          )}`
        )
        .then(
          res => {
            res.data.coverLetters[0].loadingSaveCv = true;
            return this.setState(res.data.coverLetters[0]);
          } //this.setState(res.data)
        );
    }
  }
  saveCoverDataToServer = async e => {
    if (status === false) {
      status = await true;
      if (e) {
        e.preventDefault();
      }
      console.log("Should be false ->", this.state.loadingSaveCv);
      await this.setState({
        loadingSaveCv: false,
        id: localStorage.getItem("currentCover")
      });
      console.log("Should be true ->", this.state.loadingSaveCv);
      const userID = await aFunction();
      console.log(userID);

      //const data = JSON.stringify(this.state)
      await axios
        .post(`http://localhost:5000/api/users/resume/cover/${userID}`, this.state)
        .then(res => {
          console.log(res.data);
          if (res.data == "done") return this.setState({ loadingSaveCv: true });
        });

      // await this.setState({ loadingSaveCv: false });
      // if (res.data == "done") this.setState({ loadingSaveCv: false });
      console.log("Should be false again ->", this.state.loadingSaveCv);
      status = await false;
    } else {
    }
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
  modifyCover = (field, value) => {
    let newObject = [...this.state.coverLetters];
    if(newObject[0][field]){
    if (field === "professionalTitle") {
      newObject[0].professionalTitle = value;
    }
    if (field === "companyDetails") {
      newObject[0].companyDetails = value;
    }
    if (field === "email") {
      newObject[0].contact.email = value;
    }
    if (field === "address") {
      newObject[0].contact.address = value;
    }
    if (field === "skype") {
      newObject[0].contact.skype = value;
    }
    if (field === "phone") {
      newObject[0].contact.phone = value;
    }
    if (field === "website") {
      newObject[0].contact.website = value;
    }
    if (field === "gitHub") {
      newObject[0].contact.gitHub = value;
    }
    if (field === "text") {
      newObject[0].text = value;
    }
    this.setState({ coverLetters: newObject });
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
          toggleCompanyClass: this.toggleCompanyClass,
          modifyCover: this.modifyCover,
          saveCoverDataToServer: this.saveCoverDataToServer
        }}
      >
        {this.props.children}
      </CoverLetterContext.Provider>
    );
  }
}
store.subscribe(aFunction);
export default CoverLetterContextProvider;
