import React, { Component, createContext } from "react";
import axios from "axios";
import store from "./../store.js";

// import { response } from "express";
export const ThemeContext = createContext();
function aFunction() {
  var newState = store.getState();
  console.log(newState.auth.user.name);
  return newState.auth.user.id;
}

// const importDatata = async () => {
// const impdata = await axios.get("localhost:5000/api/users/data/bleda-hacialihafiz")
//      return impdata
// }
const box = "hahahah";
const saveTOLocal = () => {
  localStorage.setItem("currentCV", box);
};
class ThemeContextProvider extends Component {
  state = {
    id: "",
    color: "",
    font: "'Open Sans', sans-serif",
    size1: "",
    size2: "",
    size3: "",
    size4: "",
    tasksHistory: [],
    tasksOutput: [],
    value: "",
    userData: {
      fullName: "FULL NAME",
      intro: "Professional title",
      about: "Short and engaging pitch about yourself",
      contact: [
        { icon: "far fa-envelope", value: "Email" },
        { icon: "fas fa-mobile-alt", value: "Phone number" },
        { icon: "fab fa-linkedin", value: "" },
        { icon: "fab fa-skype", value: "" },
        { icon: "fas fa-map-marker-alt", value: "" },
        { icon: "fas fa-globe", value: "" },
        { icon: "fab fa-github", value: "" }
      ],
      experience: [
        {
          position: "Position/Title",
          company: "Workplace/Company",
          startMonth: "MM",
          startYear: "YYYY",
          endMonth: "MM",
          endYear: "YYYY",
          place: "City, Country",
          tasks: "Accomplishments/Responsibility/Tasks"
        }
      ],
      education: [
        {
          studyProgram: "Study Program",
          institution: "Institution / Place of Education",
          startMonth: "MM",
          startYear: "YYYY",
          endMonth: "MM",
          endYear: "YYYY",
          place: "City, Country"
        }
      ],
      skills: ["Skill"],
      projects: [
        { title: "Project name", desc: "Description of achievements" }
      ],
      certifications: ["Cerificate name"],
      achievements: ["Achievement name"],
      courses: [{ title: "Course name", desc: "Short description" }],
      languages: [{ language: "Language", level: "Level" }]
    }
  };
  componentDidMount() {
    console.log(localStorage);
  }

  importData = async profile => {
    // console.log("hahahha")
    // const respo = await importDatata()
    // console.log(respo)
    //     debugger
    //     fetch(`http://localhost:5000/api/users/data/vladharagea/`)
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(json) {
    //     console.log(json);
    //   });
    // };
    const response = await axios.get(
      `http://localhost:5000/api/users/data/${profile}`
    );
    console.log(response.data);
    let newObject = { ...this.state.userData };
    newObject.fullName = response.data.profileFullName;
    newObject.intro = response.data.profileHeadline;
    newObject.about = response.data.profileAbout[0];
    newObject.skills = response.data.skills;
    newObject.linkedIn = `linkedin.com/in/${profile}`;
    newObject.experience = response.data.profileExperience.map(el => {
      let new_el = {};
      new_el.position = el.jobTitle;
      new_el.company = el.jobEmployer;
      new_el.startMonth = el.jobPeriod.split(" ")[0] || "";
      new_el.startYear = el.jobPeriod.split(" ")[1] || "";
      new_el.endMonth = el.jobPeriod.split(" ")[3] || "";
      new_el.endYear = el.jobPeriod.split(" ")[4] || "";
      new_el.place = el.jobLocation;
      new_el.tasks = el.jobDescription;
      return new_el;
    });
    newObject.education = response.data.profileEducation.map(el => {
      let new_el = {};
      new_el.studyProgram = el.educationType;
      new_el.institution = el.educationInstitution;
      new_el.startMonth = "";
      new_el.startYear = el.educationPeriod.split(" ")[0];
      new_el.endMonth = "";
      new_el.endYear = el.educationPeriod.split(" ")[2] || "";
      new_el.place = "";
      return new_el;
    });
    newObject.languages = response.data.accomplishments[0].accomplishmentList.map(
      el => {
        return { language: el.split("\n")[1], level: "B2" };
      }
    );
    this.setState({ userData: newObject });

    // axios.get("localhost:5000/api/users/data/bleda-hacialihafiz").then(res => console.log(res.data))
  };
  saveCVDataToServer = () => {
    const userID = aFunction();

    axios.post(`http://localhost:5000/api/users/data/cv/${userID}`, this.state);
  };

  // Those 3 functions add array of strings, will try to DRY later
  addSkillGroup = () => {
    let newObject = { ...this.state.userData };
    newObject.skills = [...newObject.skills, "Skill"];
    this.setState({ userData: newObject });
  };

  addAchievGroup = () => {
    let newObject = { ...this.state.userData };
    newObject.achievements = [
      ...newObject.achievements,
      "Achievement description"
    ];
    this.setState({ userData: newObject });
  };

  addCertificationGroup = () => {
    let newObject = { ...this.state.userData };
    newObject.certifications = [
      ...newObject.certifications,
      "Certification description"
    ];
    this.setState({ userData: newObject });
  };

  // Those functions add array of objects
  addExperienceGroup = () => {
    let newObject = { ...this.state.userData };
    let newExperience = {
      position: "Title / Position",
      company: "Company / Workplace",
      startMonth: "MM",
      startYear: "YYYY",
      endMonth: "MM",
      endYear: "YYYY",
      place: "City, Country",
      tasks: ""
    };
    newObject.experience = [...this.state.userData.experience, newExperience];
    this.setState({ userData: newObject });
  };

  addEducationGroup = () => {
    let newObject = { ...this.state.userData };
    let newEducation = {
      studyProgram: "",
      institution: "",
      startMonth: "MM",
      startYear: "YYYY",
      endMonth: "MM",
      endYear: "YYYY",
      place: "City, Country"
    };
    newObject.education = [...this.state.userData.education, newEducation];
    this.setState({ userData: newObject });
  };

  handleContactIcon = () => {
    let element = document.getElementsByClassName("iconeColor");
    element.classList.add(this.state.userData.contact.icone);
  };

  addLanguageGroup = () => {
    let newObject = { ...this.state.userData };
    let newLang = { language: "Language", level: "level" };
    newObject.languages = [...this.state.userData.languages, newLang];
    this.setState({ userData: newObject });
    this.saveCVDataToServer();
  };

  addProjectGroup = () => {
    let newObject = { ...this.state.userData };
    let newProject = {
      title: "Name of the project",
      desc: "Short description about the project"
    };
    newObject.projects = [...this.state.userData.projects, newProject];
    this.setState({ userData: newObject });
  };

  addCourseGroup = () => {
    let newObject = { ...this.state.userData };
    let newCourse = {
      title: "Name of the course",
      desc: "Short description of the course"
    };
    newObject.courses = [...this.state.userData.courses, newCourse];
    this.setState({ userData: newObject });
  };

  // These functions are regarding design tools of CvBuilder and CoverLetterBuilder
  changeColor = e => {
    this.setState({ color: e.target.name });
  };

  changeFontFamily = e => {
    this.setState({ font: e.target.title });
    console.log(e.target.title);
  };

  handleFontSize = e => {
    if (e.target.title === "small") {
      this.setState({
        size1: "1.2rem",
        size2: "0.9rem",
        size3: "0.7rem",
        size4: "0.6rem"
      });
    } else if (e.target.title === "medium") {
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

  handleContentEditable = e => {
    // const test = this.userData.education.studyProgram;
    this.setState({ studyProgram: e.target.title });
    console.log(e.target.title);
  };

  // shouldComponentUpdate = nextProps => {
  //   return nextProps.html !== this.getDOMNode().innerHTML;
  // };

  // componentDidUpdate = () => {
  //   if (props.html !== getDOMNode().innerHTML) {
  //     getDOMNode().innerHTML = props.html;
  //   }
  // };

  // emitChange = () => {
  //   var html = getDOMNode().innerHTML;
  //   if (props.onChange && html !== lastHtml) {
  //     props.onChange({
  //       target: {
  //         value: html
  //       }
  //     });
  //   }
  //   lastHtml = html;
  // };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          changeColor: this.changeColor,
          displaySubNav: this.displaySubNav,
          changeFontFamily: this.changeFontFamily,
          handleFontSize: this.handleFontSize,
          handleContentEditable: this.handleContentEditable,
          addExperienceGroup: this.addExperienceGroup,
          addEducationGroup: this.addEducationGroup,
          addSkillGroup: this.addSkillGroup,
          addProjectGroup: this.addProjectGroup,
          addCertificationGroup: this.addCertificationGroup,
          addAchievGroup: this.addAchievGroup,
          addCourseGroup: this.addCourseGroup,
          addLanguageGroup: this.addLanguageGroup,
          importData: this.importData
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
store.subscribe(aFunction);
export default ThemeContextProvider;
