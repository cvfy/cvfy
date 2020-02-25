import React, { Component, createContext } from "react";
import axios from "axios";
import store from "./../store.js";
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
//import uuid from 'uuid'
function guidGenerator() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4()
  );
}
// import { response } from "express";
export const ThemeContext = createContext();
function aFunction() {
  var newState = store.getState();
  console.log(newState.auth.user.name);
  return newState.auth.user.id;
}

class ThemeContextProvider extends Component {
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
      value: ""
    },
    userData: [{
      fullName: "FULL NAME",
      intro: "Professional title",
      about: ["Short and engaging pitch about yourself"],
      profilePic: "http://localhost:5000/static/default.png",
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
    },
    {
    
      experience: [
        {
          position: "I winn",
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
        
      ],
      skills: [],
      projects: [
      ],
      certifications: [],
      achievements: [],
      courses: [],
      languages: []
    },
    {
    
      experience: [
      ],
      education: [
        
      ],
      skills: [],
      projects: [
      ],
      certifications: [],
      achievements: [],
      courses: [],
      languages: []
    }
  ]
  };
  componentDidUpdate(){
    if(this.state.userData.education.length === 0){

    }
    else {
    let Expheight = document.querySelector(".exp1page").clientHeight
    let Edheight = document.querySelector(".edu1page").clientHeight
    console.log(Expheight)
    console.log(Edheight)
    if(parseInt(Expheight) + parseInt(Edheight) > 840){

      let newPage = [...this.state.pages]
      let newObject = {...this.state.userData}

      newPage[0].education.push(newObject.education[newObject.education.length-1])
      newObject.education.pop();
      this.setState({ userData: newObject});
      this.setState({pages: newPage})
    }
    }
    console.log(this.state.pages)
  }

  componentDidMount() {
  if(localStorage.getItem("currentCV") === null || localStorage.getItem("currentCV") === ""){
    const id = guidGenerator();
    this.setState({id})
    localStorage.setItem("currentCV", id)
    console.log(`the state id is - ${this.state.id}`)
    axios.post(`http://localhost:5000/api/users/resume/cv/${this.state.id}`, this.state)
  }
  if(localStorage.getItem("currentCV") !== null || localStorage.getItem("currentCV") !== "") {
    console.log("i am trying to get the data")
    axios.get(`http://localhost:5000/api/users/resume/cv/currentCV/${localStorage.getItem("currentCV")}`).then(
      res => this.setState(res.data.cv[0])  //this.setState(res.data)
    )
  }
  }
  componentWillUnmount(){
    // localStorage.setItem("currentCV", "")
  }

  importData = async profile => {
    const response = await axios.get(
      `http://localhost:5000/api/users/data/${profile}`
    );
    console.log(response.data);
    let newObject = { ...this.state.userData };
    newObject.fullName = response.data.profileFullName;
    newObject.intro = response.data.profileHeadline || "";
    newObject.about = response.data.profileAbout || "";
    newObject.profilePic = `http://localhost:5000/static/${profile}.jpg`;
    newObject.skills = response.data.skills;
    newObject.linkedIn = `linkedin.com/in/${profile}`;
    newObject.experience = response.data.profileExperience.map(el => {
      if(el.jobsDesc){

      }
      else {
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
    }
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
    console.log(`http://localhost:5000/static/${profile}.jpg`)
    this.setState({ userData: newObject });

    // axios.get("localhost:5000/api/users/data/bleda-hacialihafiz").then(res => console.log(res.data))
  };
  saveCVDataToServer = () => {
    console.log("i am calling");
    const userID = aFunction();

    //const data = JSON.stringify(this.state)
    localStorage.setItem("currentCV", this.state.id);
    axios.post(
      `http://localhost:5000/api/users/resume/cv/${userID}`,
      this.state
    );
  };
  // Those 3 functions add array of strings, will try to DRY later
  addSkillGroup = () => {
    let newObject = { ...this.state.userData };
    newObject.skills = [...newObject.skills, "Skill"];
    this.setState({ userData: newObject });
  };
  modifyEd = (field, value, index) => {
    console.log(field);
    console.log(value);
    console.log(index);
    let newObject = { ...this.state.userData };
    if (field === "studyProgram") {
      newObject.education[index].studyProgram = value;
    }
    if (field === "institution") {
      newObject.education[index].institution = value;
    }
    if(field == "startMonth"){
      newObject.education[index].startMonth = value;
          }
  if(field == "startYear"){
      newObject.education[index].startYear = value;
          }
  if(field == "endMonth"){
      newObject.education[index].endMonth = value;
          }
  if(field == "endYear"){
      newObject.education[index].endYear = value;
          }
  if(field == "place"){
      newObject.education[index].place = value;
          }
          this.setState({ userData: newObject });
  }
  modifyEx = (field, value, index) => {
    console.log(field)
    console.log(value)
  
    console.log(index)
    let newObject = { ...this.state.userData };
  if(field == "position"){
    newObject.experience[index].position = value
      }
  if(field == "company"){
    newObject.experience[index].company = value;
        }
if(field === "startMonth"){
    newObject.experience[index].startMonth = value;
        }
if(field === "startYear"){
    newObject.experience[index].startYear = value;
        }
if(field === "endMonth"){
    newObject.experience[index].endMonth = value;
        }
if(field === "endYear"){
    newObject.experience[index].endYear = value;
        }
if(field === "place"){
    newObject.experience[index].place = value;
  }
if(field === "tasks"){
    newObject.experience[index].tasks = value;
  }
  this.setState({ userData: newObject });
       
}
modifySkill = (index, value) => {
  let newObject = { ...this.state.userData };
  newObject.skills[index] = value;
  this.setState({ userData: newObject });
  console.log(this.state.userData.skills[index])
}
modifyAbout = (field, value) => {
  let newObject = { ...this.state.userData };
  if(field === "intro"){
    newObject.intro = value;
  }
  if(field === "about"){
    newObject.about = value;
  }
  this.setState({ userData: newObject });
}
modifyAchievements = (index, value) => {
  let newObject = { ...this.state.userData };
  newObject.achievements[index] = value;
  this.setState({ userData: newObject });
}
modifyCertifications = (index, value) => {
  let newObject = { ...this.state.userData };
  newObject.certifications[index] = value;
  this.setState({ userData: newObject });
}
modifyProjects = (field, index, value) => {
  let newObject = { ...this.state.userData };
  if(field === "PTitle"){
  newObject.projects[index].title = value;
}
  if(field === "PDesc"){
  newObject.projects[index].desc = value;
}
  this.setState({ userData: newObject });
}
modifyCourses = (field, index, value) => {
  let newObject = { ...this.state.userData };
  if(field === "CTitle"){
  newObject.courses[index].title = value;
}
  if(field === "CDesc"){
  newObject.courses[index].desc = value;
}
  this.setState({ userData: newObject });
}
modifyLanguages = (field, index, value) => {
  let newObject = { ...this.state.userData };
  if(field === "language"){
  newObject.languages[index].language = value;
  }
  if(field === "level"){
  newObject.languages[index].level = value;
  }
  this.setState({ userData: newObject });
}

deleteGroup = (deleteIndex) => {
  console.log(deleteIndex)
  let newObject = { ...this.state.userData };
  delete newObject.education[deleteIndex]
  this.setState({ userData: newObject });
}
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
    studyProgram: "Study Program",
    institution: "",
    startMonth: "MM",
    startYear: "YYYY",
    endMonth: "MM",
    endYear: "YYYY",
    place: "City, Country"
  };
  newObject.education = [...this.state.userData.education, newEducation];
  this.setState({ userData: newObject });
  console.log("i am trying to add education");
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

deleteGroup = obj => {
  let newObject = { ...this.state.userData }; // make a separate copy of the array
  delete newObject.projects[obj];

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
  const newObj = {...this.state.style}
  newObj.color = e.target.name;
  this.setState({ style: newObj });
};

changeFontFamily = e => {
  const newObj = {...this.state.style}
  newObj.font = e.target.title;
  this.setState({ style: newObj });
};

handleFontSize = e => {
  if (e.target.title === "small") {
    const newObj = { ...this.state.style}
    newObj.size1= "1.2rem";
    newObj.size2= "0.9rem";
    newObj.size3= "0.7rem";
    newObj.size4= "0.6rem";
    this.setState({
      style: newObj
      })
    } 
    if (e.target.title === "medium") {
      const newObj = { ...this.state.style}
      newObj.size1= "";
      newObj.size2= "";
      newObj.size3= "";
      newObj.size4= "";
      this.setState({
        style: newObj       
    })} 
    if(e.target.title === "big") {
      const newObj = { ...this.state.style}
    newObj.size1= "1.6rem";
    newObj.size2= "1.3rem";
    newObj.size3= "1.1rem";
    newObj.size4= "1.0rem";
    this.setState({
      style: newObj
    })}
  };
// generatePDF = () => {
//   const input = document.querySelector('.containerA40');
//   html2canvas(input,)
//   .then((canvas) => {
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF();
//     pdf.addImage(imgData, 'PNG', 0, 0);
//     pdf.save("download.pdf");  
//   });
// ;
// ;
// }
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
          deleteGroup: this.deleteGroup,
          importData: this.importData,
          saveCVDataToServer: this.saveCVDataToServer,
          modifyEd: this.modifyEd,
          modifyEx: this.modifyEx,
          modifySkill: this.modifySkill,
          modifyAbout: this.modifyAbout,
          modifyAchievements: this.modifyAchievements,
          modifyLanguages: this.modifyLanguages,
          modifyProjects: this.modifyProjects,
          modifyCertifications: this.modifyCertifications,
          modifyCourses: this.modifyCourses,
          deleteGroup: this.deleteGroup,
          generatePDF: this.generatePDF
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
store.subscribe(aFunction);
export default ThemeContextProvider;
