import React, { Component, createContext } from "react";
import axios from "axios";
import store from "./../store.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
//import uuid from 'uuid'

function verify(data) {
  return data !== undefined && data !== null ? data : "";
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
      value: "",
      displayPhoto: true,
     displayTitle: true,
     displaySummary: true,
      displayOneColumn: false,
     leftSide: ["experience", "education"],
     rightSide: ["skills", "projects", "certifications", "achievements", "courses", "languages"]
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
  componentDidUpdate() {
    let Pages = [...this.state.userData];

    Array.from(document.querySelectorAll(".A4")).forEach((el, i) => {
      let headerHeight = (document.querySelectorAll(".A4")[i].querySelector(".header-inner") == null || document.querySelectorAll(".A4")[i].querySelector(".header-inner") == undefined ) ? 0 : document.querySelectorAll(".A4")[i].querySelector(".header-inner").clientHeight
      let contactHeight = (document.querySelectorAll(".A4")[i].querySelector(".contact") == null || document.querySelectorAll(".A4")[i].querySelector(".contact") == undefined) ? 0 : document.querySelectorAll(".A4")[i].querySelector(".contact").clientHeight
      let experienceHeight = (document.querySelectorAll(".A4")[i].querySelector(".experience") == null || document.querySelectorAll(".A4")[i].querySelector(".experience") == undefined) ? 0 : document.querySelectorAll(".A4")[i].querySelector(".experience").clientHeight
      let educationHeight = (document.querySelectorAll(".A4")[i].querySelector(".education") == null || document.querySelectorAll(".A4")[i].querySelector(".education") == undefined) ? 0 : document.querySelectorAll(".A4")[i].querySelector(".education").clientHeight
      let skillsHeight = (document.querySelectorAll(".A4")[i].querySelector(".skills") == null || document.querySelectorAll(".A4")[i].querySelector(".skills") == undefined) ? 0 : document.querySelectorAll(".A4")[i].querySelector(".skills").clientHeight
      let projectsHeight = (document.querySelectorAll(".A4")[i].querySelector(".projects") == null || document.querySelectorAll(".A4")[i].querySelector(".projects") == undefined) ? 0 : document.querySelectorAll(".A4")[i].querySelector(".projects").clientHeight
      let certificationsHeight = (document.querySelectorAll(".A4")[i].querySelector(".certifications") == null || document.querySelectorAll(".A4")[i].querySelector(".certifications") == undefined) ? 0 : document.querySelectorAll(".A4")[i].querySelector(".certifications").clientHeight
      let achievementsHeight = (document.querySelectorAll(".A4")[i].querySelector(".achievements") == null || document.querySelectorAll(".A4")[i].querySelector(".achievements") == undefined) ? 0 : document.querySelectorAll(".A4")[i].querySelector(".achievements").clientHeight
      let coursesHeight = (document.querySelectorAll(".A4")[i].querySelector(".courses") == null || document.querySelectorAll(".A4")[i].querySelector(".courses") == undefined) ? 0 : document.querySelectorAll(".A4")[i].querySelector(".courses").clientHeight
      let languagesHeight = (document.querySelectorAll(".A4")[i].querySelector(".languages") == null || document.querySelectorAll(".A4")[i].querySelector(".languages") == undefined) ? 0 : document.querySelectorAll(".A4")[i].querySelector(".languages").clientHeight

      let leftHeight = (parseInt(headerHeight) + parseInt(contactHeight) + parseInt(experienceHeight) + parseInt(educationHeight))
      let rightHeight = (parseInt(headerHeight) + parseInt(contactHeight) + parseInt(skillsHeight) + parseInt(projectsHeight) + parseInt(certificationsHeight) + parseInt(achievementsHeight) + parseInt(coursesHeight) + parseInt(languagesHeight))

      if(leftHeight > 1122){
          let lastItem = document.querySelectorAll(".A4")[i].querySelector(".left").lastChild.classList[0]
        Pages[i+1][lastItem].unshift(Pages[i][lastItem][Pages[i][lastItem].length -1])
        Pages[i][lastItem].pop()
        this.setState({ userData: Pages })
      }
      if(rightHeight > 1122){
        let lastItem = document.querySelectorAll(".A4")[i].querySelector(".right").lastChild.classList[0]
        Pages[i+1][lastItem].unshift(Pages[i][lastItem][Pages[i][lastItem].length -1])
        Pages[i][lastItem].pop()
        this.setState({ userData: Pages })
      }
      if(document.querySelectorAll(".A4")[i+1]){

        if(document.querySelectorAll(".A4")[i+1].querySelector(".left").firstChild == null){
        }
        else{
          if((leftHeight + parseInt((document.querySelectorAll(".A4")[i+1].querySelector(".left").firstChild.lastChild.firstChild).clientHeight)) < 1115){
          let Item = document.querySelectorAll(".A4")[i+1].querySelector(".left").firstChild.classList[0]
          console.log(Item)
          Pages[i][Item].push(Pages[i+1][Item][0])
          Pages[i+1][Item].shift()
        }
      }
    }
    if(document.querySelectorAll(".A4")[i+1]){

      if(document.querySelectorAll(".A4")[i+1].querySelector(".right").firstChild == null){
      }
      else{
        if((rightHeight + parseInt((document.querySelectorAll(".A4")[i+1].querySelector(".right").firstChild.lastChild.firstChild).clientHeight)) < 1115){
        let Item = document.querySelectorAll(".A4")[i+1].querySelector(".right").firstChild.classList[0]
        console.log(Item)
        Pages[i][Item].push(Pages[i+1][Item][0])
        Pages[i+1][Item].shift()
      }
    }
  }
    }
    )
  }

  async componentDidMount() {
    if (
      localStorage.getItem("currentCV") === null ||
      localStorage.getItem("currentCV") === ""
    ) {
      const idG = await guidGenerator();
      await this.setState({ id: idG });
      await localStorage.setItem("currentCV", this.state.id);
      console.log(`the state id is - ${this.state.id}`);
      axios.post(
        `http://localhost:5000/api/users/resume/cv/${this.state.id}`,
        this.state
      );
    }
    if (
      localStorage.getItem("currentCV") !== null ||
      localStorage.getItem("currentCV") !== ""
    ) {
      console.log("i am trying to get the data");
      axios
        .get(
          `http://localhost:5000/api/users/resume/cv/currentCV/${localStorage.getItem(
            "currentCV"
          )}`
        )
        .then(
          res => this.setState(res.data.cv[0]) //this.setState(res.data)
        );
    }
  }
  // componentWillUnmount() {
  //   localStorage.setItem("currentCV", "");
  // }

  importData = async (profile, e) => {
    e.preventDefault()
    console.log("i am calling linkedin data")
    console.log(profile)
    const response = await axios.get(
      `http://localhost:5000/api/users/data/link/${profile}`
    );
    console.log(response.data);
    let newObject = [...this.state.userData];
    newObject[0].fullName = response.data.profileFullName ? response.data.profileFullName : "FULL NAME";
    newObject[0].intro = response.data.profileHeadline ? response.data.profileHeadline : "Profes  sional Title";
    newObject[0].about = response.data.profileAbout ? response.data.profileAbout : ["Short and engaging pitch about yourself"];
    newObject[0].profilePic = `http://localhost:5000/static/${profile}.jpg` ? `http://localhost:5000/static/${profile}.jpg` : "http://localhost:5000/static/default.png";
    newObject[0].skills = response.data.skills ? response.data.skills : ["skill"];
    newObject[0].experience = response.data.profileExperience ? response.data.profileExperience.map(el => {
      if (el.jobsDesc) {
      } else {
        let new_el = {};
        new_el.position = verify(el.jobTitle);
        new_el.company = verify(el.jobEmployer);
        new_el.startMonth = verify(el.jobPeriod.split(" ")[0]);
        new_el.startYear = verify(el.jobPeriod.split(" ")[1]);
        new_el.endMonth = verify(el.jobPeriod.split(" ")[3]);
        new_el.endYear = verify(el.jobPeriod.split(" ")[4]);
        new_el.place = verify(el.jobLocation);
        new_el.tasks = verify(el.jobDescription);
        return new_el;
      }
    }) : [{
      position: "Position/Title",
      company: "Workplace/Company",
      startMonth: "MM",
      startYear: "YYYY",
      endMonth: "MM",
      endYear: "YYYY",
      place: "City, Country",
      tasks: "Accomplishments/Responsibility/Tasks"
    }];
    newObject[0].education = response.data.profileEducation ? response.data.profileEducation.map(el => {
      let new_el = {};
      new_el.studyProgram = verify(el.educationType);
      new_el.institution = verify(el.educationInstitution);
      new_el.startMonth = "";
      new_el.startYear = verify(el.educationPeriod.split(" ")[0]);
      new_el.endMonth = "";
      new_el.endYear = verify(el.educationPeriod.split(" ")[2]);
      new_el.place = "";
      return new_el;
    }) : [{
      studyProgram: "Study Program",
      institution: "Institution / Place of Education",
      startMonth: "MM",
      startYear: "YYYY",
      endMonth: "MM",
      endYear: "YYYY",
      place: "City, Country"
    }];
    newObject[0].languages = response.data.languages ? response.data.languages.map(el => { return { language: el, level: "B1" }}) : [{ language: "Language", level: "B1" }]
    newObject[0].courses = response.data.courses ? response.data.courses.map(el => { return { title: el, desc: "Description" }}) : [{ title: "Course name", desc: "Short description" }]
    newObject[0].projects = response.data.projects ? response.data.projects : [{ title: "Project name", desc: "Description of achievements" }]
    newObject[0].contact[0].value = response.data.Email ? response.data.Email : "Email"
    newObject[0].contact[6].value = response.data.Website ? response.data.Website : "Website"
    newObject[0].certifications = ["Certificate name"]
    newObject[0].achievements = ["Achievement name"]
    // console.log(response.data.contacts)
    // console.log(`http://localhost:5000/static/${profile}.jpg`);
    this.setState({ userData: newObject });
this.setState(this.state)
    axios.get("localhost:5000/api/users/data/bleda-hacialihafiz").then(res => console.log(res.data))
  };
  saveCVDataToServer = async (e) => {
    e.preventDefault()
    console.log("i am calling");
    const userID = await aFunction();
    console.log(userID)

    //const data = JSON.stringify(this.state)
    axios.post(
      `http://localhost:5000/api/users/resume/cv/${userID}`, this.state);
  };
  // Those 3 functions add array of strings, will try to DRY later
  modifyEd = (page, field, value, index) => {
    console.log("edmoidfy");
    let newObject = [...this.state.userData];
    if (field === "studyProgram") {
      newObject[page].education[index].studyProgram = value;
    }
    if (field === "institution") {
      newObject[page].education[index].institution = value;
    }
    if (field === "startMonth") {
      newObject[page].education[index].startMonth = value;
    }
    if (field === "startYear") {
      newObject[page].education[index].startYear = value;
    }
    if (field === "endMonth") {
      newObject[page].education[index].endMonth = value;
    }
    if (field === "endYear") {
      newObject[page].education[index].endYear = value;
    }
    if (field === "place") {
      newObject[page].education[index].place = value;
    }
    this.setState({ userData: newObject });
    console.log(this.state.userData[page].education);
  };
  modifyEx = (page, field, value, index) => {
    let newObject = [...this.state.userData];
    if (field === "position") {
      newObject[page].experience[index].position = value;
    }
    if (field === "company") {
      newObject[page].experience[index].company = value;
    }
    if (field === "startMonth") {
      newObject[page].experience[index].startMonth = value;
    }
    if (field === "startYear") {
      newObject[page].experience[index].startYear = value;
    }
    if (field === "endMonth") {
      newObject[page].experience[index].endMonth = value;
    }
    if (field === "endYear") {
      newObject[page].experience[index].endYear = value;
    }
    if (field === "place") {
      newObject[page].experience[index].place = value;
    }
    if (field === "tasks") {
      newObject[page].experience[index].tasks = value;
    }
    this.setState({ userData: newObject });
    console.log(this.state.userData[page].experience);
  };
  modifySkill = (page, index, value) => {
    let newObject = [...this.state.userData];
    newObject[page].skills[index] = value;
    this.setState({ userData: newObject });
  };
  modifyAbout = (page, field, value) => {
    let newObject = [...this.state.userData];
    if (field === "intro") {
      newObject[page].intro = value;
    }
    if (field === "about") {
      newObject[page].about = [...newObject[page].about, value];
    }
    this.setState({ userData: newObject });
  };
  modifyAchievements = (page, index, value) => {
    let newObject = [...this.state.userData];
    newObject[page].achievements[index] = value;
    this.setState({ userData: newObject });
  };
  modifyCertifications = (page, index, value) => {
    let newObject = [...this.state.userData];
    newObject[page].certifications[index] = value;
    this.setState({ userData: newObject });
  };
  modifyProjects = (page, field, index, value) => {
    let newObject = [...this.state.userData];
    if (field === "PTitle") {
      newObject[page].projects[index].title = value;
    }
    if (field === "PDesc") {
      newObject[page].projects[index].desc = value;
    }
    this.setState({ userData: newObject });
  };
  modifyCourses = (page, field, index, value) => {
    let newObject = [...this.state.userData];
    if (field === "CTitle") {
      newObject[page].courses[index].title = value;
    }
    if (field === "CDesc") {
      newObject[page].courses[index].desc = value;
    }
    this.setState({ userData: newObject });
  };
  modifyLanguages = (page, field, index, value) => {
    let newObject = [...this.state.userData];
    if (field === "language") {
      newObject[page].languages[index].language = value;
    }
    if (field === "level") {
      newObject[page].languages[index].level = value;
    }
    this.setState({ userData: newObject });
  };
  deleteGroup = (section, page, deleteIndex) => {
    let newObject = [...this.state.userData];
    if (section === "education") {
      newObject[page].education = [
        ...newObject[page].education.filter((el, i) => i !== deleteIndex)
      ];
    }
    if (section === "experience") {
      newObject[page].experience = [
        ...newObject[page].experience.filter((el, i) => i !== deleteIndex)
      ];
    }
    if (section === "skills") {
      newObject[page].skills = [
        ...newObject[page].skills.filter((el, i) => i !== deleteIndex)
      ];
    }
    if (section === "projects") {
      newObject[page].projects = [
        ...newObject[page].projects.filter((el, i) => i !== deleteIndex)
      ];
    }
    if (section === "certifications") {
      newObject[page].certifications = [
        ...newObject[page].certifications.filter((el, i) => i !== deleteIndex)
      ];
    }
    if (section === "achievements") {
      newObject[page].achievements = [
        ...newObject[page].achievements.filter((el, i) => i !== deleteIndex)
      ];
    }
    if (section === "courses") {
      newObject[page].courses = [
        ...newObject[page].courses.filter((el, i) => i !== deleteIndex)
      ];
    }
    if (section === "languages") {
      newObject[page].languages = [
        ...newObject[page].languages.filter((el, i) => i !== deleteIndex)
      ];
    }
    this.setState({ userData: newObject });
  };
  addGroup = (field, page, index) => {
    let newObject = [...this.state.userData];
    if (field === "experience") {
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
      newObject[page].experience.splice(index + 1, 0, newExperience);
    }
    if (field === "education") {
      let newEducation = {
        studyProgram: "Study Program",
        institution: "",
        startMonth: "MM",
        startYear: "YYYY",
        endMonth: "MM",
        endYear: "YYYY",
        place: "City, Country"
      };
      newObject[page].education.splice(index + 1, 0, newEducation);
    }
    if (field === "skills") {
      let newSkill = "Skill";
      newObject[page].skills.splice(index + 1, 0, newSkill);
    }
    if (field === "projects") {
      let newProject = {
        title: "Name of the project",
        desc: "Short description about the project"
      };
      newObject[page].projects.splice(index + 1, 0, newProject);
    }
    if (field === "certifications") {
      let newCertificate = "Certification description";
      newObject[page].certifications.splice(index + 1, 0, newCertificate);
    }
    if (field === "achievements") {
      let newAchievement = "Achievement description";
      newObject[page].achievements.splice(index + 1, 0, newAchievement);
    }
    if (field === "courses") {
      let newCourse = {
        title: "Name of the course",
        desc: "Short description of the course"
      };
      newObject[page].courses.splice(index + 1, 0, newCourse);
    }
    if (field === "languages") {
      let newLang = { language: "Language", level: "level" };

      newObject[page].languages.splice(index + 1, 0, newLang);
    }
    this.setState({ userData: newObject });
  };

  // ............................................

  moveUpGroup = (field, page, index) => {
    let newObject = [...this.state.userData];
  if(field === "experience"){
      if(index === 0 && (newObject[page-1])){
        let newObj = newObject[page-1].experience[newObject[page-1].experience.length-1]
        newObject[page-1].experience[newObject[page-1].experience.length-1] = newObject[page].experience[index]
        newObject[page].experience[index] = newObj; 
      }
      else{
      let newObj = newObject[page].experience[index-1]
      newObject[page].experience[index-1] = newObject[page].experience[index]
      newObject[page].experience[index] = newObj;
      }
    }
  if(field === "education"){
      if(index === 0 && (newObject[page-1])){
        let newObj = newObject[page-1].education[newObject[page-1].education.length-1]
        newObject[page-1].education[newObject[page-1].education.length-1] = newObject[page].education[index]
        newObject[page].education[index] = newObj; 
      }
      else{
      let newObj = newObject[page].education[index-1]
      newObject[page].education[index-1] = newObject[page].education[index]
      newObject[page].education[index] = newObj;
      }
  };
  if(field === "skills"){
      if(index === 0 && (newObject[page-1])){
        let newObj = newObject[page-1].skills[newObject[page-1].skills.length-1]
        newObject[page-1].skills[newObject[page-1].skills.length-1] = newObject[page].skills[index]
        newObject[page].skills[index] = newObj; 
      }
      else{
      let newObj = newObject[page].skills[index-1]
      newObject[page].skills[index-1] = newObject[page].skills[index]
      newObject[page].skills[index] = newObj;
      }
  };
  if(field === "projects"){
      if(index === 0 && (newObject[page-1])){
        let newObj = newObject[page-1].projects[newObject[page-1].projects.length-1]
        newObject[page-1].projects[newObject[page-1].projects.length-1] = newObject[page].projects[index]
        newObject[page].projects[index] = newObj; 
      }
      else{
      let newObj = newObject[page].projects[index-1]
      newObject[page].projects[index-1] = newObject[page].projects[index]
      newObject[page].projects[index] = newObj;
      }
  };
  if(field === "certifications"){
      if(index === 0 && (newObject[page-1])){
        let newObj = newObject[page-1].certifications[newObject[page-1].certifications.length-1]
        newObject[page-1].certifications[newObject[page-1].certifications.length-1] = newObject[page].certifications[index]
        newObject[page].certifications[index] = newObj; 
      }
      else{
      let newObj = newObject[page].certifications[index-1]
      newObject[page].certifications[index-1] = newObject[page].certifications[index]
      newObject[page].certifications[index] = newObj;
      }
  };
  if(field === "achievements"){
      if(index === 0 && (newObject[page-1])){
        let newObj = newObject[page-1].achievements[newObject[page-1].achievements.length-1]
        newObject[page-1].achievements[newObject[page-1].achievements.length-1] = newObject[page].achievements[index]
        newObject[page].achievements[index] = newObj; 
      }
      else{
      let newObj = newObject[page].achievements[index-1]
      newObject[page].achievements[index-1] = newObject[page].achievements[index]
      newObject[page].achievements[index] = newObj;
      }
  };
  if(field === "courses"){
      if(index === 0 && (newObject[page-1])){
        let newObj = newObject[page-1].courses[newObject[page-1].courses.length-1]
        newObject[page-1].courses[newObject[page-1].courses.length-1] = newObject[page].courses[index]
        newObject[page].courses[index] = newObj; 
      }
      else{
      let newObj = newObject[page].courses[index-1]
      newObject[page].courses[index-1] = newObject[page].courses[index]
      newObject[page].courses[index] = newObj;
      }
  };
  if(field === "languages"){
      if(index === 0 && (newObject[page-1])){
        let newObj = newObject[page-1].languages[newObject[page-1].languages.length-1]
        newObject[page-1].languages[newObject[page-1].languages.length-1] = newObject[page].languages[index]
        newObject[page].languages[index] = newObj; 
      }
      else{
      let newObj = newObject[page].languages[index-1]
      newObject[page].languages[index-1] = newObject[page].languages[index]
      newObject[page].languages[index] = newObj;
      }
  };
  this.setState({ userData: newObject });

}
  moveDownGroup = (field, page, index) => {
    let newObject = [...this.state.userData];
  if(field === "experience"){
      if((index === newObject[page].experience.length-1) && (newObject[page+1])){
        let newObj = newObject[page+1].experience[0]
        newObject[page+1].experience[0] = newObject[page].experience[newObject[page].experience.length-1]
        newObject[page].experience[newObject[page].experience.length-1] = newObj; 
      }
      else{
      let newObj = newObject[page].experience[index+1]
      newObject[page].experience[index+1] = newObject[page].experience[index]
      newObject[page].experience[index] = newObj;
      }
    }
  if(field === "education"){
      if((index === newObject[page].education.length-1) && (newObject[page+1])){
        let newObj = newObject[page+1].education[0]
        newObject[page+1].education[0] = newObject[page].education[newObject[page].education.length-1]
        newObject[page].education[newObject[page].education.length-1] = newObj; 
      }
      else{
      let newObj = newObject[page].education[index+1]
      newObject[page].education[index+1] = newObject[page].education[index]
      newObject[page].education[index] = newObj;
      }
    }
  if(field === "skills"){
      if((index === newObject[page].skills.length-1) && (newObject[page+1])){
        let newObj = newObject[page+1].skills[0]
        newObject[page+1].skills[0] = newObject[page].skills[newObject[page].skills.length-1]
        newObject[page].skills[newObject[page].skills.length-1] = newObj; 
      }
      else{
      let newObj = newObject[page].skills[index+1]
      newObject[page].skills[index+1] = newObject[page].skills[index]
      newObject[page].skills[index] = newObj;
      }
    }
  if(field === "projects"){
      if((index === newObject[page].projects.length-1) && (newObject[page+1])){
        let newObj = newObject[page+1].projects[0]
        newObject[page+1].projects[0] = newObject[page].projects[newObject[page].projects.length-1]
        newObject[page].projects[newObject[page].projects.length-1] = newObj; 
      }
      else{
      let newObj = newObject[page].projects[index+1]
      newObject[page].projects[index+1] = newObject[page].projects[index]
      newObject[page].projects[index] = newObj;
      }
    }
  if(field === "certifications"){
      if((index === newObject[page].certifications.length-1) && (newObject[page+1])){
        let newObj = newObject[page+1].certifications[0]
        newObject[page+1].certifications[0] = newObject[page].certifications[newObject[page].certifications.length-1]
        newObject[page].certifications[newObject[page].certifications.length-1] = newObj; 
      }
      else{
      let newObj = newObject[page].certifications[index+1]
      newObject[page].certifications[index+1] = newObject[page].certifications[index]
      newObject[page].certifications[index] = newObj;
      }
    }
  if(field === "achievements"){
      if((index === newObject[page].achievements.length-1) && (newObject[page+1])){
        let newObj = newObject[page+1].achievements[0]
        newObject[page+1].achievements[0] = newObject[page].achievements[newObject[page].achievements.length-1]
        newObject[page].achievements[newObject[page].achievements.length-1] = newObj; 
      }
      else{
      let newObj = newObject[page].achievements[index+1]
      newObject[page].achievements[index+1] = newObject[page].achievements[index]
      newObject[page].achievements[index] = newObj;
      }
    }
  if(field === "courses"){
      if((index === newObject[page].courses.length-1) && (newObject[page+1])){
        let newObj = newObject[page+1].courses[0]
        newObject[page+1].courses[0] = newObject[page].courses[newObject[page].courses.length-1]
        newObject[page].courses[newObject[page].courses.length-1] = newObj; 
      }
      else{
      let newObj = newObject[page].courses[index+1]
      newObject[page].courses[index+1] = newObject[page].courses[index]
      newObject[page].courses[index] = newObj;
      }
    }
  if(field === "languages"){
      if((index === newObject[page].languages.length-1) && (newObject[page+1])){
        let newObj = newObject[page+1].languages[0]
        newObject[page+1].languages[0] = newObject[page].languages[newObject[page].languages.length-1]
        newObject[page].languages[newObject[page].languages.length-1] = newObj; 
      }
      else{
      let newObj = newObject[page].languages[index+1]
      newObject[page].languages[index+1] = newObject[page].languages[index]
      newObject[page].languages[index] = newObj;
      }
    }
  
  this.setState({ userData: newObject });
  
}
setStructure = ( arr1, arr2) => {
  let newObj = { ...this.state }
  newObj.style.leftSide = arr1
  newObj.style.rightSide = arr2
  
  this.setState(newObj);
}
// ..............................................................
  handleContactIcon = () => {
    let element = document.getElementsByClassName("iconeColor");
    element.classList.add(this.state.userData.contact.icone);
  };

  // These functions are regarding design tools of CvBuilder and CoverLetterBuilder
  changeColor = e => {
    const newObj = { ...this.state.style };
    newObj.color = e.target.name;
    this.setState({ style: newObj });
  };

  changeFontFamily = e => {
    const newObj = { ...this.state.style };
    newObj.font = e.target.title;
    this.setState({ style: newObj });
  };

  handleFontSize = e => {
    if (e.target.title === "small") {
      const newObj = { ...this.state.style };
      newObj.size1 = "1.2rem";
      newObj.size2 = "0.9rem";
      newObj.size3 = "0.7rem";
      newObj.size4 = "0.6rem";
      this.setState({
        style: newObj
      });
    }
    if (e.target.title === "medium") {
      const newObj = { ...this.state.style };
      newObj.size1 = "";
      newObj.size2 = "";
      newObj.size3 = "";
      newObj.size4 = "";
      this.setState({
        style: newObj
      });
    }
    if (e.target.title === "big") {
      const newObj = { ...this.state.style };
      newObj.size1 = "1.6rem";
      newObj.size2 = "1.3rem";
      newObj.size3 = "1.1rem";
      newObj.size4 = "1.0rem";
      this.setState({
        style: newObj
      });
    }
  };

  updateUserSkype = (page, input) => {
    // need to add s timeout to reduce logs at console
    let newObject = [...this.state.userData];
    newObject[page].contact[3].value = input;
    this.setState({ userData: newObject });
  };

  updateUserPhone = (page, input) => {
    // need to add s timeout to reduce logs at console
    let newObject = [...this.state.userData];
    newObject[page].contact[1].value = input;
    this.setState({ userData: newObject });
  };

  updateUserEmail = (page, input) => {
    // need to add s timeout to reduce logs at console
    let newObject = [...this.state.userData];
    newObject[page].contact[0].value = input;
    this.setState({ userData: newObject });
  };

  updateUserLinkedIn = (page, input) => {
    // need to add s timeout to reduce logs at console
    let newObject = [...this.state.userData];
    newObject[page].contact[2].value = input;
    this.setState({ userData: newObject });
  };

  updateUserWebsite = (page, input) => {
    // need to add s timeout to reduce logs at console
    let newObject = [...this.state.userData];
    newObject[0].contact[5].value = input;
    this.setState({ userData: newObject });
  };

  updateUserGitHub = (page, input) => {
    // need to add s timeout to reduce logs at console
    let newObject = [...this.state.userData];
    newObject[page].contact[6].value = input;
    this.setState({ userData: newObject });
  };

  togglePhotoClass = () => {
    const currentState = this.state.style.displayPhoto;
    let newObject = {...this.state.style};
    newObject.displayPhoto = !currentState
    this.setState({ style: newObject });
  };

  toggleTitleClass = () => {
    const currentState = this.state.style.displayTitle;
    let newObject = {...this.state.style};
    newObject.displayTitle = !currentState
    this.setState({ style: newObject });
  };

  toggleSummaryClass = () => {
    const currentState = this.state.style.displaySummary;
    let newObject = {...this.state.style};
    newObject.displaySummary = !currentState
    this.setState({ style: newObject });
  };

  toggleOneColumn = () => {
    const currentState = this.state.style.displayOneColumn;
    let newObject = {...this.state.style};
    newObject.displayOneColumn = !currentState
    this.setState({ style: newObject });
  }

  toggleFontWeight = () => {
    document.execCommand("bold", false, "");
  };

  toggleFontStyle = () => {
    document.execCommand("italic", false, "");
  };

  toggleTextDecoration = () => {
    document.execCommand("underline", false, "");
  };

  toggleJustifyCenter = () => {
    document.execCommand("justifyCenter", false, "");
  };

  toggleJustifyLeft = () => {
    document.execCommand("justifyLeft", false, "");
  };

  toggleJustifyRight = () => {
    document.execCommand("justifyRight", false, "");
  };

  toggleInsertOrderedList = () => {
    document.execCommand("insertOrderedList", false, "");
  };

  toggleInsertUnorderedList = () => {
    document.execCommand("insertUnorderedList", false, "");
  };

  toggleUndo = () => {
    document.execCommand("undo", false, "");
  };

  toggleRedo = () => {
    document.execCommand("redo", false, "");
  };

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
          addGroup: this.addGroup,
          deleteGroup: this.deleteGroup,
          updateUserSkype: this.updateUserSkype,
          updateUserPhone: this.updateUserPhone,
          updateUserEmail: this.updateUserEmail,
          updateUserLinkedIn: this.updateUserLinkedIn,
          updateUserWebsite: this.updateUserWebsite,
          updateUserGitHub: this.updateUserGitHub,
          togglePhotoClass: this.togglePhotoClass,
          toggleTitleClass: this.toggleTitleClass,
          toggleSummaryClass: this.toggleSummaryClass,
          toggleOneColumn: this.toggleOneColumn,
          toggleFontWeight: this.toggleFontWeight,
          toggleFontStyle: this.toggleFontStyle,
          toggleTextDecoration: this.toggleTextDecoration,
          toggleJustifyCenter: this.toggleJustifyCenter,
          toggleJustifyLeft: this.toggleJustifyLeft,
          toggleJustifyRight: this.toggleJustifyRight,
          toggleInsertOrderedList: this.toggleInsertOrderedList,
          toggleInsertUnorderedList: this.toggleInsertUnorderedList,
          toggleUndo: this.toggleUndo,
          toggleRedo: this.toggleRedo,
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
          moveUpGroup: this.moveUpGroup,
          moveDownGroup: this.moveDownGroup,
          generatePDF: this.generatePDF,
          setStructure: this.setStructure
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
store.subscribe(aFunction);
export default ThemeContextProvider;
