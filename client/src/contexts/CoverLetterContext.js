import React, { Component, createContext } from "react";
import axios from "axios";
import store from "./../store.js";
import { url, frontUrl } from "../config";

let status = false;
export const CoverLetterContext = createContext();
// FUNCTION THAT HAS ACCESS TO THE REDUX STORE AND GET THE CURRENT USER DATA
function aFunction() {
  var newState = store.getState();
  return newState.auth.user.id;
}
function nameFunction() {
  var newState = store.getState();
  return newState.auth.user.name;
}
// ID GENERATOR
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
      displayCompany: true,
      displayBasicTemplate: false,
      displayModernTemplate: false,
      displayExecutiveTemplate: true,
      displayProfessionalTemplate: false
    },
    coverLetters: [
      {
        fullName: nameFunction(),
        professionalTitle: "Professional Title",
        companyDetails: "Company Details",
        text: "Dear Recruiter Manager,",
        signature: "",
        contact: [
          { icon: "far fa-envelope", value: "Email" },
          { icon: "fas fa-mobile-alt", value: "Phone number" },
          { icon: "fab fa-linkedin", value: "" },
          { icon: "fab fa-skype", value: "" },
          { icon: "fas fa-map-marker-alt", value: "" },
          { icon: "fas fa-globe", value: "" },
          { icon: "fab fa-github", value: "" }
        ]
      },
      {
        text: "",
        signature: ""
      },
      {
        text: "",
        signature: ""
      },
      {
        text: "",
        signature: ""
      }
    ]
  };

  async componentDidMount() {
    // VERIFY IF THERE IS SET A CURRENT COVER LETTER ID IN THE LOCAL STORAGE
// IF THERE IS NO CURRENT COVER LETTER SET, GENERATE NEW ID AND SET IT AS CURRENT COVER LETTER AND SAVE CURRENT COVER LETTER TO DATABASE

    if (
      localStorage.getItem("currentCover") === null ||
      localStorage.getItem("currentCover") === ""
    ) {
      const idG = await guidGenerator();
      await this.setState({ id: idG });
      await localStorage.setItem("currentCover", this.state.id);
      axios.post(
        `${url}/api/users/resume/cover/save/${aFunction()}`,
        this.state
      );
    }
    // IF THERE IS A CURRENT COVER LETTER SET IN LOCAL STORAGE, MAKE A CALL TO DATABASE THROUGH OUR API AND GET THE DATA OF THIS CURRENT COVER LETTER ID
    if (localStorage.getItem("currentCover")) {
      axios
        .get(
          `${url}/api/users/resume/cv/currentCover/${localStorage.getItem(
            "currentCover"
          )}`
        )
        .then(res => {
          res.data.coverLetters[0].loadingSaveCv = true;
          return this.setState(res.data.coverLetters[0]);
        });
    }
  }

  componentDidUpdate() {
    // PAGE BREAK ON COVER LETTER BASED ON NUMBER OF CHARACTERS
    if (this.state.coverLetters[0].text.length > 3500) {
      let cover = [...this.state.coverLetters];
      let data = cover[0].text; //.replace("<br>", "\n")
      cover[0].text = data.slice(0, 3500);
      cover[1].text = data.slice(3500) + cover[1].text;
      this.setState({ coverLetters: cover });
    }
    if (
      this.state.coverLetters[0].text.length < 3499 &&
      this.state.coverLetters[1].text.length > 0
    ) {
      let cover = [...this.state.coverLetters];
      let data = cover[0].text + cover[1].text.replace("<br>", "\n");
      cover[0].text = data.slice(0, 3500);
      cover[1].text = data.slice(3500);
      this.setState({ coverLetters: cover });
    }
  }

// METHOD THAT SENDS AND SAVE'S THE CURRENT COVER LETTER STATE TO DATABASE THROUGH A CALL TO OUR BACKEND API
  saveCoverDataToServer = async e => {
    if (status === false) {
      status = true;
      await this.setState({
        loadingSaveCv: false,
        id: localStorage.getItem("currentCover")
      });
      const userID = aFunction();
      await axios
        .post(`${url}/api/users/resume/cover/save/${userID}`, this.state)
        .then(res => {
          if (res.data === "done")
            return this.setState({ loadingSaveCv: true });
        });
      status = false;
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

  showBasicCoverTemplate = async () => {
    const newObj = { ...this.state };
    newObj.style.displayExecutiveTemplate = false;
    newObj.style.displayBasicTemplate = true;
    newObj.style.displayModernTemplate = false;
    newObj.style.displayProfessionalTemplate = false;
    await this.setState({
      style: newObj.style
    });
    await this.saveCoverDataToServer();
  };

  showExecutiveCoverTemplate = async () => {
    const newObj = { ...this.state };
    newObj.style.displayExecutiveTemplate = true;
    newObj.style.displayBasicTemplate = false;
    newObj.style.displayModernTemplate = false;
    newObj.style.displayProfessionalTemplate = false;
    await this.setState({
      style: newObj.style
    });
    await this.saveCoverDataToServer();
  };

  showModernCoverTemplate = async () => {
    const newObj = { ...this.state };
    newObj.style.displayExecutiveTemplate = false;
    newObj.style.displayBasicTemplate = false;
    newObj.style.displayModernTemplate = true;
    newObj.style.displayProfessionalTemplate = false;
    await this.setState({
      style: newObj.style
    });
    await this.saveCoverDataToServer();
  };

  showProfessionalCoverTemplate = async () => {
    const newObj = { ...this.state };
    newObj.style.displayExecutiveTemplate = false;
    newObj.style.displayBasicTemplate = false;
    newObj.style.displayModernTemplate = false;
    newObj.style.displayProfessionalTemplate = true;
    await this.setState({
      style: newObj.style
    });
    await this.saveCoverDataToServer();
  };

  goToBasicCoverTemplate = id => {
    localStorage.setItem("currentCover", guidGenerator());
    window.location.href = `${frontUrl}/create-cover-letter`;
    this.showBasicCoverTemplate();
  };

  goToModernCoverTemplate = id => {
    localStorage.setItem("currentCover", guidGenerator());
    window.location.href = `${frontUrl}/create-cover-letter`;
    this.showModernCoverTemplate();
  };

  goToProfessionalCoverTemplate = id => {
    localStorage.setItem("currentCover", guidGenerator());
    window.location.href = `${frontUrl}/create-cover-letter`;
    this.showProfessionalCoverTemplate();
  };

  goToExecutiveCoverTemplate = id => {
    localStorage.setItem("currentCover", guidGenerator());
    window.location.href = `${frontUrl}/create-cover-letter`;
    this.showExecutiveCoverTemplate();
  };

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
    let newObj = { ...this.state.style };
    newObj.color = e.target.name;
    this.setState({ style: newObj });
  };

  changeFontFamily = font => {
    let newObj = { ...this.state.style };
    newObj.font = font;

    this.setState({ style: newObj });
  };

  handleFontSize = name => {
    let newObj = { ...this.state.style };
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

  modifyCover = (index, field, value) => {
    let newObject = [...this.state.coverLetters];
    if (newObject[0][field]) {
      if (field === "professionalTitle") {
        newObject[0].professionalTitle = value;
        this.setState({ coverLetters: newObject });
      }
      if (field === "companyDetails") {
        newObject[0].companyDetails = value;
        this.setState({ coverLetters: newObject });
      }
      if (field === "text") {
        if (value.includes("<br>") || value.includes("&nbsp;")) {
          // let newVal = value.replace(/<br>/g, "\n");
          value = value.replace(/&amp;/gi, "&");

          // Replace spaces.
          value = value.replace(/&nbsp;/gi, " ");
          value = value.replace(/\s+/g, " ");

          // Remove "<b>".
          value = value.replace(/<b>/gi, "");
          value = value.replace(/<\/b>/gi, "");

          // Remove "<strong>".
          value = value.replace(/<strong>/gi, "");
          value = value.replace(/<\/strong>/gi, "");

          // Remove "<i>".
          value = value.replace(/<i>/gi, "");
          value = value.replace(/<\/i>/gi, "");

          // Remove "<em>".
          value = value.replace(/<em>/gi, "");
          value = value.replace(/<\/em>/gi, "");

          // Remove "<u>".
          value = value.replace(/<u>/gi, "");
          value = value.replace(/<\/u>/gi, "");

          // Tighten up "<" and ">".
          value = value.replace(/>\s+/g, ">");
          value = value.replace(/\s+</g, "<");

          // Replace "<br>".
          value = value.replace(/<br>/gi, "\n");

          // Replace "<div>" (from Chrome).
          value = value.replace(/<div>/gi, "\n");
          value = value.replace(/<\/div>/gi, "");

          // Replace "<p>" (from IE).
          value = value.replace(/<p>/gi, "\n");
          value = value.replace(/<\/p>/gi, "");
        }

        newObject[index].text = value;
        this.setState({ coverLetters: newObject });
      }
    }
  };

  updateUserSkype = input => {
    let newObject = [...this.state.coverLetters];
    newObject[0].contact[3].value = input;
    this.setState({ userData: newObject });
  };

  updateUserPhone = input => {
    let newObject = [...this.state.coverLetters];
    newObject[0].contact[1].value = input;
    this.setState({ userData: newObject });
  };

  updateUserEmail = input => {
    let newObject = [...this.state.coverLetters];
    newObject[0].contact[0].value = input;
    this.setState({ coverLetters: newObject });
  };

  updateUserLinkedIn = input => {
    let newObject = [...this.state.coverLetters];
    newObject[0].contact[2].value = input;
    this.setState({ coverLetters: newObject });
  };

  updateUserWebsite = input => {
    let newObject = [...this.state.coverLetters];
    newObject[0].contact[5].value = input;
    this.setState({ coverLetters: newObject });
  };

  updateUserGitHub = input => {
    let newObject = [...this.state.coverLetters];
    newObject[0].contact[6].value = input;
    this.setState({ coverLetters: newObject });
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
          saveCoverDataToServer: this.saveCoverDataToServer,
          showBasicCoverTemplate: this.showBasicCoverTemplate,
          showExecutiveCoverTemplate: this.showExecutiveCoverTemplate,
          showProfessionalCoverTemplate: this.showProfessionalCoverTemplate,
          showModernCoverTemplate: this.showModernCoverTemplate,
          goToProfessionalCoverTemplate: this.goToProfessionalCoverTemplate,
          goToBasicCoverTemplate: this.goToBasicCoverTemplate,
          goToModernCoverTemplate: this.goToModernCoverTemplate,
          goToExecutiveCoverTemplate: this.goToExecutiveCoverTemplate,
          updateUserSkype: this.updateUserSkype,
          updateUserPhone: this.updateUserPhone,
          updateUserEmail: this.updateUserEmail,
          updateUserLinkedIn: this.updateUserLinkedIn,
          updateUserWebsite: this.updateUserWebsite,
          updateUserGitHub: this.updateUserGitHub,
          jumpTo2Page: this.jumpTo2Page
        }}
      >
        {this.props.children}
      </CoverLetterContext.Provider>
    );
  }
}
store.subscribe(aFunction);
export default CoverLetterContextProvider;
