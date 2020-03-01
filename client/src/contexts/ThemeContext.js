import React, { Component, createContext } from "react";
import axios from "axios";
import store from "./../store.js";
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import _ from 'lodash'
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
    }
    // {
    
    //   experience: [
    //     {
    //       position: "I winn",
    //       company: "Workplace/Company",
    //       startMonth: "MM",
    //       startYear: "YYYY",
    //       endMonth: "MM",
    //       endYear: "YYYY",
    //       place: "City, Country",
    //       tasks: "Accomplishments/Responsibility/Tasks"
    //     }
    //   ],
    //   education: [
        
    //   ],
    //   skills: ["skill"],
    //   projects: [
    //   ],
    //   certifications: [],
    //   achievements: [],
    //   courses: [],
    //   languages: []
    // },
    // {education: [
    //   {
    //     studyProgram: "Study Program",
    //     institution: "Institution / Place of Education",
    //     startMonth: "MM",
    //     startYear: "YYYY",
    //     endMonth: "MM",
    //     endYear: "YYYY",
    //     place: "City, Country"
    //   }
    // ],
    
    //   experience: [
    //     {
    //       position: "Position/Title",
    //       company: "Workplace/Company",
    //       startMonth: "MM",
    //       startYear: "YYYY",
    //       endMonth: "MM",
    //       endYear: "YYYY",
    //       place: "City, Country",
    //       tasks: "Accomplishments/Responsibility/Tasks"
    //     }
    //   ],
    //   education: [
    //   ],
    //   skills: [],
    //   projects: [
    //   ],
    //   certifications: [],
    //   achievements: [],
    //   courses: [],
    //   languages: []
    // }
  ]
  };
  // componentDidUpdate(){
  //   if(this.state.userData.education.length === 0){

  //   }
  //   else {
  //   let Expheight = document.querySelector(".exp1page").clientHeight
  //   let Edheight = document.querySelector(".edu1page").clientHeight
  //   console.log(Expheight)
  //   console.log(Edheight)
  //   if(parseInt(Expheight) + parseInt(Edheight) > 840){

  //     let newPage = [...this.state.pages]
  //     let newObject = {...this.state.userData}

  //     newPage[0].education.push(newObject.education[newObject.education.length-1])
  //     newObject.education.pop();
  //     this.setState({ userData: newObject});
  //     this.setState({pages: newPage})
  //   }
  //   }
  //   console.log(this.state.pages)
  // }

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
      new_el.place = el.jobLocation || "";
      new_el.tasks = el.jobDescription || "";
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
    let NewArray = [...this.state.userData]
    NewArray[0] = newObject
    this.setState({ userData: NewArray });

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
  modifyEd = (page, field, value, index) => {
    console.log("edmoidfy")
    let newObject = [ ...this.state.userData ];
    if (field === "studyProgram") {
      newObject[page].education[index].studyProgram = value;
    }
    if (field === "institution") {
      newObject[page].education[index].institution = value;
    }
    if(field == "startMonth"){
      newObject[page].education[index].startMonth = value;
          }
  if(field == "startYear"){
      newObject[page].education[index].startYear = value;
          }
  if(field == "endMonth"){
      newObject[page].education[index].endMonth = value;
          }
  if(field == "endYear"){
      newObject[page].education[index].endYear = value;
          }
  if(field == "place"){
      newObject[page].education[index].place = value;
          }
          this.setState({ userData: newObject });
          console.log(this.state.userData[page].education)
  }
  modifyEx = (page, field, value, index) => {
    let newObject = [ ...this.state.userData ];
  if(field == "position"){
    newObject[page].experience[index].position = value
      }
  if(field == "company"){
    newObject[page].experience[index].company = value;
        }
if(field === "startMonth"){
    newObject[page].experience[index].startMonth = value;
        }
if(field === "startYear"){
    newObject[page].experience[index].startYear = value;
        }
if(field === "endMonth"){
    newObject[page].experience[index].endMonth = value;
        }
if(field === "endYear"){
    newObject[page].experience[index].endYear = value;
        }
if(field === "place"){
    newObject[page].experience[index].place = value;
  }
if(field === "tasks"){
    newObject[page].experience[index].tasks = value;
  }
  this.setState({ userData: newObject });
  console.log(this.state.userData[page].experience)
       
}
modifySkill = (page, index, value) => {
  let newObject = [ ...this.state.userData ];
  newObject[page].skills[index] = value;
  this.setState({ userData: newObject });
}
modifyAbout = (page, field, value) => {
  let newObject = [ ...this.state.userData ];
  if(field === "intro"){
    newObject[page].intro = value;
  }
  if(field === "about"){
    newObject[page].about = value;
  }
  this.setState({ userData: newObject });
}
modifyAchievements = (page, index, value) => {
  let newObject = [ ...this.state.userData ];
  newObject[page].achievements[index] = value;
  this.setState({ userData: newObject });
}
modifyCertifications = (page, index, value) => {
  let newObject = [ ...this.state.userData ];
  newObject[page].certifications[index] = value;
  this.setState({ userData: newObject });
}
modifyProjects = (page, field, index, value) => {
  let newObject = [ ...this.state.userData ];
  if(field === "PTitle"){
  newObject[page].projects[index].title = value;
}
  if(field === "PDesc"){
  newObject[page].projects[index].desc = value;
}
  this.setState({ userData: newObject });
}
modifyCourses = (page, field, index, value) => {
  let newObject = [ ...this.state.userData ];
  if(field === "CTitle"){
  newObject[page].courses[index].title = value;
}
  if(field === "CDesc"){
  newObject[page].courses[index].desc = value;
}
  this.setState({ userData: newObject });
}
modifyLanguages = (page, field, index, value) => {
  let newObject = [ ...this.state.userData ];
  if(field === "language"){
  newObject[page].languages[index].language = value;
  }
  if(field === "level"){
  newObject[page].languages[index].level = value;
  }
  this.setState({ userData: newObject });
}

deleteGroup = (section, page, deleteIndex) => {
  let newObject = [ ...this.state.userData];
  if(section === "education"){
  newObject[page].education = [...newObject[page].education.filter((el, i) => i !== deleteIndex)]
  }
  if(section === "experience"){
  newObject[page].experience = [...newObject[page].experience.filter((el, i) => i !== deleteIndex)]
  }
  if(section === "skills"){
  newObject[page].skills = [...newObject[page].skills.filter((el, i) => i !== deleteIndex)]
  }
  if(section === "projects"){
  newObject[page].projects = [...newObject[page].projects.filter((el, i) => i !== deleteIndex)]
  }
  if(section === "certifications"){
  newObject[page].certifications = [...newObject[page].certifications.filter((el, i) => i !== deleteIndex)]
  }
  if(section === "achievements"){
  newObject[page].achievements = [...newObject[page].achievements.filter((el, i) => i !== deleteIndex)]
  }
  if(section === "courses"){
  newObject[page].courses = [...newObject[page].courses.filter((el, i) => i !== deleteIndex)]
  }
  if(section === "languages"){
  newObject[page].languages = [...newObject[page].languages.filter((el, i) => i !== deleteIndex)]
  }
  this.setState({ userData: newObject });
}
addGroup = (field, page) => {
  let newObject = [ ...this.state.userData ];
  if(field === "experience"){
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
    newObject[page].experience = [...newObject[page].experience, newExperience];
  }
  if(field === "education"){
    let newEducation = {
      studyProgram: "Study Program",
      institution: "",
      startMonth: "MM",
      startYear: "YYYY",
      endMonth: "MM",
      endYear: "YYYY",
      place: "City, Country"
    };
    newObject[page].education = [...newObject[page].education, newEducation];
  }
  if(field === "skills"){
    let newSkill = "Skill"
    newObject[page].skills = [...newObject[page].skills, newSkill];
  }
  if(field === "projects"){
    let newProject = {
      title: "Name of the project",
      desc: "Short description about the project"
    }
    newObject[page].projects = [...newObject[page].projects, newProject];
  }
  if(field === "certifications"){
    let newCertificate = "Certification description"
    newObject[page].certifications = [...newObject[page].certifications, newCertificate];
  }
  if(field === "achievements"){
    let newAchievement = "Achievement description"
    newObject[page].achievements = [...newObject[page].achievements, newAchievement];
  }
  if(field === "courses"){
    let newCourse = {
      title: "Name of the course",
      desc: "Short description of the course"
    };    
    newObject[page].courses = [...newObject[page].courses, newCourse];
  }
  if(field === "languages"){
    let newLang = { language: "Language", level: "level" };
  
    newObject[page].languages = [...newObject[page].languages, newLang];
  }
  this.setState({ userData: newObject });
}


// Those functions add array of objects


handleContactIcon = () => {
  let element = document.getElementsByClassName("iconeColor");
  element.classList.add(this.state.userData[0].contact.icone);
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
          addGroup: this.addGroup,
          deleteGroup: this.deleteGroup,
          changeColor: this.changeColor,
          displaySubNav: this.displaySubNav,
          changeFontFamily: this.changeFontFamily,
          handleFontSize: this.handleFontSize,
          handleContentEditable: this.handleContentEditable,
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
