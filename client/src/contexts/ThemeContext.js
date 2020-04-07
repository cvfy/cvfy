import React, { Component, createContext, useRef } from "react";
import axios from "axios";
import store from "./../store.js";
import { url, cloudinaryUrl, frontUrl } from "../config";
import { response } from "express";
//import uuid from 'uuid'
let status = false;
let status2 = false;

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
  // console.log(newState.auth.user.name);
  return newState.auth.user.id;
}
function BFunction() {
  var newState = store.getState();
  // console.log(newState.auth.user.name);
  return newState.auth.user.name;
}

class ThemeContextProvider extends Component {
  state = {
    id: "",
    loadingSaveCv: true,
    importing: false,
    importingMessage: false,
    loadingUploadImg: false,
    considerPic: true,
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
      displayBasic: false,
      displayExecutive: true,
      displayModern: false,
      displayProfessional: false,
      displayPhoto: true,
      displayTitle: true,
      displayCoverTitle: true,
      displayCompany: true,
      displaySummary: true,
      displayOneColumn: false,
      leftSide: [
        { name: "experience", id: "card-1" },
        { name: "education", id: "card-2" }
      ],
      rightSide: [
        { name: "skills", id: "card-3" },
        { name: "projects", id: "card-4" },
        { name: "certifications", id: "card-5" },
        { name: "achievements", id: "card-6" },
        { name: "courses", id: "card-7" },
        { name: "languages", id: "card-8" }
      ],
      oneColumnArr: [
        { name: "experience", id: "card-1" },
        { name: "education", id: "card-2" },
        { name: "skills", id: "card-3" },
        { name: "projects", id: "card-4" },
        { name: "certifications", id: "card-5" },
        { name: "achievements", id: "card-6" },
        { name: "courses", id: "card-7" },
        { name: "languages", id: "card-8" }
      ]
    },

    userData: [
      {
        fullName: BFunction(),
        intro: "Professional title",
        about: "Short and engaging pitch about yourself",
        profilePic: `${url}/static/profile-logo-anonym.jpg`,
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
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        achievements: [],
        courses: [],
        languages: []
      },
      {
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        achievements: [],
        courses: [],
        languages: []
      },
      {
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        achievements: [],
        courses: [],
        languages: []
      },
      {
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        achievements: [],
        courses: [],
        languages: []
      },
      {
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        achievements: [],
        courses: [],
        languages: []
      }
    ]
  };

  componentDidUpdate() {
    console.log(this.state.style.displayModern);
    let Pages = [...this.state.userData];
    // MAPPING THOURGH THE PAGES TO GET THE HEIGHTS OF SECTIONS AND GROUPS
    Array.from(document.querySelectorAll(".A4")).forEach((el, i) => {
      // DECLARING DYNAMIC THE VARIABLE HEIGHTS OF SECTIONS
      let headerHeight =
        document.querySelectorAll(".A4")[i].querySelector(".header-inner") ===
          null ||
        document.querySelectorAll(".A4")[i].querySelector(".header-inner") ===
          undefined
          ? 0
          : document.querySelectorAll(".A4")[i].querySelector(".header-inner")
              .clientHeight;
      let contactHeight =
        document.querySelectorAll(".A4")[i].querySelector(".contact") ===
          null ||
        document.querySelectorAll(".A4")[i].querySelector(".contact") ===
          undefined
          ? 0
          : document.querySelectorAll(".A4")[i].querySelector(".contact")
              .clientHeight;
      let experienceHeight =
        document.querySelectorAll(".A4")[i].querySelector(".experience") ===
          null ||
        document.querySelectorAll(".A4")[i].querySelector(".experience") ===
          undefined
          ? 0
          : document.querySelectorAll(".A4")[i].querySelector(".experience")
              .clientHeight;
      let educationHeight =
        document.querySelectorAll(".A4")[i].querySelector(".education") ===
          null ||
        document.querySelectorAll(".A4")[i].querySelector(".education") ===
          undefined
          ? 0
          : document.querySelectorAll(".A4")[i].querySelector(".education")
              .clientHeight;
      let skillsHeight =
        document.querySelectorAll(".A4")[i].querySelector(".skills") === null ||
        document.querySelectorAll(".A4")[i].querySelector(".skills") ===
          undefined
          ? 0
          : document.querySelectorAll(".A4")[i].querySelector(".skills")
              .clientHeight;
      let projectsHeight =
        document.querySelectorAll(".A4")[i].querySelector(".projects") ===
          null ||
        document.querySelectorAll(".A4")[i].querySelector(".projects") ===
          undefined
          ? 0
          : document.querySelectorAll(".A4")[i].querySelector(".projects")
              .clientHeight;
      let certificationsHeight =
        document.querySelectorAll(".A4")[i].querySelector(".certifications") ===
          null ||
        document.querySelectorAll(".A4")[i].querySelector(".certifications") ===
          undefined
          ? 0
          : document.querySelectorAll(".A4")[i].querySelector(".certifications")
              .clientHeight;
      let achievementsHeight =
        document.querySelectorAll(".A4")[i].querySelector(".achievements") ===
          null ||
        document.querySelectorAll(".A4")[i].querySelector(".achievements") ===
          undefined
          ? 0
          : document.querySelectorAll(".A4")[i].querySelector(".achievements")
              .clientHeight;
      let coursesHeight =
        document.querySelectorAll(".A4")[i].querySelector(".courses") ===
          null ||
        document.querySelectorAll(".A4")[i].querySelector(".courses") ===
          undefined
          ? 0
          : document.querySelectorAll(".A4")[i].querySelector(".courses")
              .clientHeight;
      let languagesHeight =
        document.querySelectorAll(".A4")[i].querySelector(".languages") ===
          null ||
        document.querySelectorAll(".A4")[i].querySelector(".languages") ===
          undefined
          ? 0
          : document.querySelectorAll(".A4")[i].querySelector(".languages")
              .clientHeight;
      // GETTING TOTAL HEIGHTS FOR LEFT, RIGHT, AND ONEPAGE COLUMNS

      let leftHeight =
        parseInt(headerHeight) +
        parseInt(contactHeight) +
        parseInt(experienceHeight) +
        parseInt(educationHeight);
      let rightHeight =
        parseInt(headerHeight) +
        parseInt(contactHeight) +
        parseInt(skillsHeight) +
        parseInt(projectsHeight) +
        parseInt(certificationsHeight) +
        parseInt(achievementsHeight) +
        parseInt(coursesHeight) +
        parseInt(languagesHeight);
      let onePageHeight =
        parseInt(headerHeight) +
        parseInt(contactHeight) +
        parseInt(experienceHeight) +
        parseInt(educationHeight) +
        parseInt(skillsHeight) +
        parseInt(projectsHeight) +
        parseInt(certificationsHeight) +
        parseInt(achievementsHeight) +
        parseInt(coursesHeight) +
        parseInt(languagesHeight);

      // SITUATION 1 - IF THE CV STRUCTURE IS A 2 COLUMN STRUCTURE
      if (this.state.style.displayOneColumn === false) {
        if (leftHeight > 2000) {
          let lastItem = document
            .querySelectorAll(".A4")
            [i].querySelector(".left").lastChild.classList[0];
          Pages[i + 1][lastItem] = Pages[i][lastItem];
          Pages[i][lastItem] = [];
          this.setState({ userData: Pages });
        }
        if (leftHeight > 1050 && leftHeight < 2000) {
          let lastItem = document
            .querySelectorAll(".A4")
            [i].querySelector(".left").lastChild.classList[0];
          Pages[i + 1][lastItem].unshift(
            Pages[i][lastItem][Pages[i][lastItem].length - 1]
          );
          Pages[i][lastItem].pop();
          this.setState({ userData: Pages });
        }
        if (rightHeight > 2000) {
          let lastItem = document
            .querySelectorAll(".A4")
            [i].querySelector(".right").lastChild.classList[0];
          Pages[i + 1][lastItem] = Pages[i][lastItem];
          Pages[i][lastItem] = [];
          this.setState({ userData: Pages });
        }
        if (rightHeight > 1050 && rightHeight < 2000) {
          let lastItem = document
            .querySelectorAll(".A4")
            [i].querySelector(".right").lastChild.classList[0];
          Pages[i + 1][lastItem].unshift(
            Pages[i][lastItem][Pages[i][lastItem].length - 1]
          );
          Pages[i][lastItem].pop();
          this.setState({ userData: Pages });
        }
        if (document.querySelectorAll(".A4")[i + 1]) {
          if (
            document.querySelectorAll(".A4")[i + 1].querySelector(".left")
              .firstChild === null
          ) {
          } else {
            if (
              leftHeight +
                parseInt(
                  document.querySelectorAll(".A4")[i + 1].querySelector(".left")
                    .firstChild.lastChild.firstChild.clientHeight
                ) <
              1000
            ) {
              let Item = document
                .querySelectorAll(".A4")
                [i + 1].querySelector(".left").firstChild.classList[0];
              // console.log(Item);
              Pages[i][Item].push(Pages[i + 1][Item][0]);
              Pages[i + 1][Item].shift();
            }
          }
        }
        if (document.querySelectorAll(".A4")[i + 1]) {
          if (
            document.querySelectorAll(".A4")[i + 1].querySelector(".right")
              .firstChild === null ||
            document.querySelectorAll(".A4")[i + 1].querySelector(".right")
              .firstChild === undefined
          ) {
          } else {
            if (
              document.querySelectorAll(".A4")[i + 1].querySelector(".right")
                .firstChild.lastChild.firstChild.classList[0] === "skill-boxes"
            ) {
              if (
                rightHeight +
                  parseInt(
                    document
                      .querySelectorAll(".A4")
                      [i + 1].querySelector(".right").firstChild.lastChild
                      .firstChild.firstChild.clientHeight
                  ) <
                1000
              ) {
                let Item = document
                  .querySelectorAll(".A4")
                  [i + 1].querySelector(".right").firstChild.classList[0];
                // console.log(Item);
                Pages[i][Item].push(Pages[i + 1][Item][0]);
                Pages[i + 1][Item].shift();
                this.setState({ userData: Pages });
              }
            } else {
              if (
                rightHeight +
                  parseInt(
                    document
                      .querySelectorAll(".A4")
                      [i + 1].querySelector(".right").firstChild.lastChild
                      .firstChild.clientHeight
                  ) <
                1000
              ) {
                console.log(
                  parseInt(
                    document
                      .querySelectorAll(".A4")
                      [i + 1].querySelector(".right").firstChild.lastChild
                      .firstChild.clientHeight
                  )
                );
                let Item = document
                  .querySelectorAll(".A4")
                  [i + 1].querySelector(".right").firstChild.classList[0];
                // console.log(Item);
                Pages[i][Item].push(Pages[i + 1][Item][0]);
                Pages[i + 1][Item].shift();
                if (Item !== "languages") {
                  this.setState({ userData: Pages });
                }
              }
            }
          }
        }
      }

      if (this.state.style.displayOneColumn !== false) {
        if (onePageHeight > 2000) {
          let lastItem = document
            .querySelectorAll(".A4")
            [i].querySelector(".left").lastChild.classList[0];
          Pages[i + 1][lastItem] = Pages[i][lastItem];
          Pages[i][lastItem] = [];
          this.setState({ userData: Pages });
        }
        if (onePageHeight > 1100 && onePageHeight < 2000) {
          let lastItem = document
            .querySelectorAll(".A4")
            [i].querySelector(".left").lastChild.classList[0];
          Pages[i + 1][lastItem].unshift(
            Pages[i][lastItem][Pages[i][lastItem].length - 1]
          );
          Pages[i][lastItem].pop();
          this.setState({ userData: Pages });
          // }
        }
        if (document.querySelectorAll(".A4")[i + 1]) {
          if (
            document.querySelectorAll(".A4")[i + 1].querySelector(".left")
              .firstChild === null
          ) {
          } else {
            if (
              onePageHeight +
                parseInt(
                  document.querySelectorAll(".A4")[i + 1].querySelector(".left")
                    .firstChild.lastChild.firstChild.clientHeight
                ) <
              1000
            ) {
              let Item = document
                .querySelectorAll(".A4")
                [i + 1].querySelector(".left").firstChild.classList[0];
              Pages[i][Item].push(Pages[i + 1][Item][0]);
              Pages[i + 1][Item].shift();
            }
          }
        }
      }
    });
  }

  async componentDidMount() {
    console.log(this.state.id);
    // console.log("diplay one column is =>" + this.state.style.displayOneColumn);
    if (
      localStorage.getItem("currentCV") === null ||
      localStorage.getItem("currentCV") === ""
      // localStorage.getItem("currentCV") === "[object Object]"
    ) {
      const idG = await guidGenerator();
      await this.setState({ id: idG });
      await localStorage.setItem("currentCV", this.state.id);
      // console.log(`the state id is - ${this.state.id}`);
      //axios.post(`${url}/api/users/resume/cv/${aFunction()}`, this.state);
    }
    if (
      localStorage.getItem("currentCV") !== null ||
      localStorage.getItem("currentCV") !== ""
    ) {
      // console.log("i am trying to get the data");
      axios
        .get(
          `${url}/api/users/resume/cv/currentCV/${localStorage.getItem(
            "currentCV"
          )}`
        )
        .then(
          res => {
            res.data.cv[0].loadingSaveCv = true;
            return this.setState(res.data.cv[0]);
          } //this.setState(res.data)
        );
    }
  }

  importData = async (profile, e) => {
    e.preventDefault();
    // console.log("i am calling linkedin data");
    this.setState({ importingMessage: true });
    this.setState({ considerPic: true });
    if (status2 === false) {
      status2 = await true;
      e.preventDefault();
      // console.log("i am calling linkedin data");
      // console.log(profile);
      await this.setState({ importing: true });
      const response = await axios.get(`${url}/api/users/data/link/${profile}`);
      // console.log("should be 200", response.status);
      let newObject = { ...this.state };
      newObject.userData[0].fullName = response.data.profileFullName
        ? response.data.profileFullName
        : "FULL NAME";
      newObject.userData[0].intro = response.data.profileHeadline
        ? response.data.profileHeadline
        : "Professional Title";
      newObject.userData[0].about = response.data.profileAbout
        ? response.data.profileAbout.join(" ")
        : ["Short and engaging pitch about yourself"];
      newObject.userData[0].profilePic = `${url}/static/${profile}.jpg`
        ? `${url}/static/${profile}.jpg`
        : `${url}/static/default.png`;
      newObject.userData[0].skills = response.data.skills
        ? response.data.skills
        : ["skill"];
      newObject.userData[0].experience = response.data.profileExperience
        ? response.data.profileExperience.map(el => {
            if (el.jobsDesc) {
              return "";
            } else {
              let new_el = {};
              new_el.position = el.jobTitle ? el.jobTitle : "";
              new_el.company = el.jobEmployer ? el.jobEmployer : "";
              new_el.startMonth = el.jobPeriod
                ? verify(el.jobPeriod.split(" ")[0])
                : "";
              new_el.startYear = el.jobPeriod
                ? verify(el.jobPeriod.split(" ")[1])
                : "";
              new_el.endMonth = el.jobPeriod
                ? verify(el.jobPeriod.split(" ")[3])
                : "";
              new_el.endYear = el.jobPeriod
                ? verify(el.jobPeriod.split(" ")[4])
                : "";
              new_el.place = el.jobLocation ? el.jobLocation : "";
              new_el.tasks = el.jobDescription ? el.jobDescription : "";
              return new_el;
            }
          })
        : [
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
          ];
      newObject.userData[0].education = response.data.profileEducation
        ? response.data.profileEducation.map(el => {
            let new_el = {};
            new_el.studyProgram = el.educationType ? el.educationType : "";
            new_el.institution = el.educationInstitution
              ? el.educationInstitution
              : "";
            new_el.startMonth = "";
            new_el.startYear = el.educationPeriod
              ? verify(el.educationPeriod.split(" ")[0])
              : "";
            new_el.endMonth = "";
            new_el.endYear = el.educationPeriod
              ? verify(el.educationPeriod.split(" ")[2])
              : "";
            new_el.place = "";
            return new_el;
          })
        : [
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
          ];
      newObject.userData[0].education = response.data.profileEducation
        ? response.data.profileEducation.map(el => {
            let new_el = {};
            new_el.studyProgram = el.educationType ? el.educationType : "";
            new_el.institution = el.educationInstitution
              ? el.educationInstitution
              : "";
            new_el.startMonth = "";
            new_el.startYear = el.educationPeriod
              ? verify(el.educationPeriod.split(" ")[0])
              : "";
            new_el.endMonth = "";
            new_el.endYear = el.educationPeriod
              ? verify(el.educationPeriod.split(" ")[2])
              : "";
            new_el.place = "";
            return new_el;
          })
        : [
            {
              studyProgram: "Study Program",
              institution: "Institution / Place of Education",
              startMonth: "MM",
              startYear: "YYYY",
              endMonth: "MM",
              endYear: "YYYY",
              place: "City, Country"
            }
          ];
      newObject.userData[0].languages = response.data.languages
        ? response.data.languages.map(el => {
            return { language: el, level: "B1" };
          })
        : [{ language: "Language", level: "B1" }];
      newObject.userData[0].courses = response.data.courses
        ? response.data.courses.map(el => {
            return { title: el, desc: "Description" };
          })
        : [{ title: "Course name", desc: "Short description" }];
      newObject.userData[0].projects =
        response.data.projects && response.data.projects.length > 0
          ? response.data.projects
          : [{ title: "Project name", desc: "Description of achievements" }];

      newObject.userData[0].contact[0].value = response.data.Email
        ? response.data.Email
        : "Email";
      newObject.userData[0].contact[6].value = response.data.Website
        ? response.data.Website
        : "Website";
      newObject.userData[0].certifications = ["Certificate name"];
      newObject.userData[0].achievements = ["Achievement name"];
      newObject.id = this.state.id;
      await this.setState(newObject);
      // console.log(this.state.userData[0].projects);
      // Need to add different responses for each different status
      if (response.status === 200) {
        this.setState({ importing: false });
        this.setState({ importingMessage: false });
        await this.saveCVDataToServer();
      }
      status2 = await false;
    } else {
    }
  };

  saveCVDataToServer = async e => {
    if (status === false) {
      status = await true;
      if (e) {
        e.preventDefault();
      }
      // console.log("Should be false ->", this.state.loadingSaveCv);
      await this.setState({
        loadingSaveCv: false,
        id: localStorage.getItem("currentCV")
      });
      // console.log("Should be true ->", this.state.loadingSaveCv);
      const userID = await aFunction();
      // console.log(userID);
      console.log(this.state.style.displayModern);
      //const data = JSON.stringify(this.state)
      await axios
        .post(`${url}/api/users/resume/cv/save/${userID}`, this.state)
        .then(res => {
          // console.log(res.data);
          if (res.data === "done")
            return this.setState({ loadingSaveCv: true });
        });

      // await this.setState({ loadingSaveCv: false });
      // if (res.data == "done") this.setState({ loadingSaveCv: false });
      // console.log("Should be false again ->", this.state.loadingSaveCv);
      status = await false;
    } else {
    }
  };

  modifyEd = (page, field, value, index) => {
    // console.log("edmoidfy");
    let newObject = [...this.state.userData];
    if (newObject[page].education[index]) {
      if (field === "studyProgram") {
        newObject[page].education[index].studyProgram = value;
        // console.log(page);
        // console.log(field);
        // console.log(value);
        // console.log(index);
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
      // console.log(this.state.userData[page].education);
    }
  };

  modifyEx = (page, field, value, index) => {
    let newObject = [...this.state.userData];
    if (newObject[page].experience[index]) {
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
      // console.log(this.state.userData[page].experience);
    }
  };

  modifySkill = (page, index, value) => {
    let newObject = [...this.state.userData];
    if (newObject[page].skills[index]) {
      newObject[page].skills[index] = value;
      this.setState({ userData: newObject });
    }
  };

  modifyAbout = (page, field, value) => {
    // console.log(page);
    // console.log(field);
    // console.log(value);
    let newObject = [...this.state.userData];
    if (field === "intro") {
      newObject[page].intro = value;
    }
    if (field === "about") {
      newObject[page].about = value;
    }
    this.setState({ userData: newObject });
  };

  modifyAchievements = (page, index, value) => {
    let newObject = [...this.state.userData];
    if (newObject[page].achievements[index]) {
      newObject[page].achievements[index] = value;
      this.setState({ userData: newObject });
    }
  };

  modifyCertifications = (page, index, value) => {
    let newObject = [...this.state.userData];
    if (newObject[page].certifications[index]) {
      newObject[page].certifications[index] = value;
      this.setState({ userData: newObject });
    }
  };

  modifyProjects = (page, field, index, value) => {
    let newObject = [...this.state.userData];
    if (newObject[page].projects[index]) {
      if (field === "PTitle") {
        newObject[page].projects[index].title = value;
      }
      if (field === "PDesc") {
        newObject[page].projects[index].desc = value;
      }
      this.setState({ userData: newObject });
    }
  };

  modifyCourses = (page, field, index, value) => {
    let newObject = [...this.state.userData];
    if (newObject[page].courses[index]) {
      if (field === "CTitle") {
        newObject[page].courses[index].title = value;
      }
      if (field === "CDesc") {
        newObject[page].courses[index].desc = value;
      }
      this.setState({ userData: newObject });
    }
  };

  modifyLanguages = (page, field, index, value) => {
    let newObject = [...this.state.userData];
    if (newObject[page].languages[index]) {
      if (field === "language") {
        newObject[page].languages[index].language = value;
      }
      if (field === "level") {
        newObject[page].languages[index].level = value;
      }
      this.setState({ userData: newObject });
    }
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
    if (field === "experience") {
      if (index === 0 && newObject[page - 1]) {
        let newObj =
          newObject[page - 1].experience[
            newObject[page - 1].experience.length - 1
          ];
        newObject[page - 1].experience[
          newObject[page - 1].experience.length - 1
        ] = newObject[page].experience[index];
        newObject[page].experience[index] = newObj;
      } else {
        let newObj = newObject[page].experience[index - 1];
        newObject[page].experience[index - 1] =
          newObject[page].experience[index];
        newObject[page].experience[index] = newObj;
      }
    }
    if (field === "education") {
      if (index === 0 && newObject[page - 1]) {
        let newObj =
          newObject[page - 1].education[
            newObject[page - 1].education.length - 1
          ];
        newObject[page - 1].education[
          newObject[page - 1].education.length - 1
        ] = newObject[page].education[index];
        newObject[page].education[index] = newObj;
      } else {
        let newObj = newObject[page].education[index - 1];
        newObject[page].education[index - 1] = newObject[page].education[index];
        newObject[page].education[index] = newObj;
      }
    }
    if (field === "skills") {
      if (index === 0 && newObject[page - 1]) {
        let newObj =
          newObject[page - 1].skills[newObject[page - 1].skills.length - 1];
        newObject[page - 1].skills[newObject[page - 1].skills.length - 1] =
          newObject[page].skills[index];
        newObject[page].skills[index] = newObj;
      } else {
        let newObj = newObject[page].skills[index - 1];
        newObject[page].skills[index - 1] = newObject[page].skills[index];
        newObject[page].skills[index] = newObj;
      }
    }
    if (field === "projects") {
      if (index === 0 && newObject[page - 1]) {
        let newObj =
          newObject[page - 1].projects[newObject[page - 1].projects.length - 1];
        newObject[page - 1].projects[newObject[page - 1].projects.length - 1] =
          newObject[page].projects[index];
        newObject[page].projects[index] = newObj;
      } else {
        let newObj = newObject[page].projects[index - 1];
        newObject[page].projects[index - 1] = newObject[page].projects[index];
        newObject[page].projects[index] = newObj;
      }
    }
    if (field === "certifications") {
      if (index === 0 && newObject[page - 1]) {
        let newObj =
          newObject[page - 1].certifications[
            newObject[page - 1].certifications.length - 1
          ];
        newObject[page - 1].certifications[
          newObject[page - 1].certifications.length - 1
        ] = newObject[page].certifications[index];
        newObject[page].certifications[index] = newObj;
      } else {
        let newObj = newObject[page].certifications[index - 1];
        newObject[page].certifications[index - 1] =
          newObject[page].certifications[index];
        newObject[page].certifications[index] = newObj;
      }
    }
    if (field === "achievements") {
      if (index === 0 && newObject[page - 1]) {
        let newObj =
          newObject[page - 1].achievements[
            newObject[page - 1].achievements.length - 1
          ];
        newObject[page - 1].achievements[
          newObject[page - 1].achievements.length - 1
        ] = newObject[page].achievements[index];
        newObject[page].achievements[index] = newObj;
      } else {
        let newObj = newObject[page].achievements[index - 1];
        newObject[page].achievements[index - 1] =
          newObject[page].achievements[index];
        newObject[page].achievements[index] = newObj;
      }
    }
    if (field === "courses") {
      if (index === 0 && newObject[page - 1]) {
        let newObj =
          newObject[page - 1].courses[newObject[page - 1].courses.length - 1];
        newObject[page - 1].courses[newObject[page - 1].courses.length - 1] =
          newObject[page].courses[index];
        newObject[page].courses[index] = newObj;
      } else {
        let newObj = newObject[page].courses[index - 1];
        newObject[page].courses[index - 1] = newObject[page].courses[index];
        newObject[page].courses[index] = newObj;
      }
    }
    if (field === "languages") {
      if (index === 0 && newObject[page - 1]) {
        let newObj =
          newObject[page - 1].languages[
            newObject[page - 1].languages.length - 1
          ];
        newObject[page - 1].languages[
          newObject[page - 1].languages.length - 1
        ] = newObject[page].languages[index];
        newObject[page].languages[index] = newObj;
      } else {
        let newObj = newObject[page].languages[index - 1];
        newObject[page].languages[index - 1] = newObject[page].languages[index];
        newObject[page].languages[index] = newObj;
      }
    }
    this.setState({ userData: newObject });
  };
  moveDownGroup = (field, page, index) => {
    let newObject = [...this.state.userData];
    if (field === "experience") {
      if (
        index === newObject[page].experience.length - 1 &&
        newObject[page + 1]
      ) {
        let newObj = newObject[page + 1].experience[0];
        newObject[page + 1].experience[0] =
          newObject[page].experience[newObject[page].experience.length - 1];
        newObject[page].experience[
          newObject[page].experience.length - 1
        ] = newObj;
      } else {
        let newObj = newObject[page].experience[index + 1];
        newObject[page].experience[index + 1] =
          newObject[page].experience[index];
        newObject[page].experience[index] = newObj;
      }
    }
    if (field === "education") {
      if (
        index === newObject[page].education.length - 1 &&
        newObject[page + 1]
      ) {
        let newObj = newObject[page + 1].education[0];
        newObject[page + 1].education[0] =
          newObject[page].education[newObject[page].education.length - 1];
        newObject[page].education[
          newObject[page].education.length - 1
        ] = newObj;
      } else {
        let newObj = newObject[page].education[index + 1];
        newObject[page].education[index + 1] = newObject[page].education[index];
        newObject[page].education[index] = newObj;
      }
    }
    if (field === "skills") {
      if (index === newObject[page].skills.length - 1 && newObject[page + 1]) {
        let newObj = newObject[page + 1].skills[0];
        newObject[page + 1].skills[0] =
          newObject[page].skills[newObject[page].skills.length - 1];
        newObject[page].skills[newObject[page].skills.length - 1] = newObj;
      } else {
        let newObj = newObject[page].skills[index + 1];
        newObject[page].skills[index + 1] = newObject[page].skills[index];
        newObject[page].skills[index] = newObj;
      }
    }
    if (field === "projects") {
      if (
        index === newObject[page].projects.length - 1 &&
        newObject[page + 1]
      ) {
        let newObj = newObject[page + 1].projects[0];
        newObject[page + 1].projects[0] =
          newObject[page].projects[newObject[page].projects.length - 1];
        newObject[page].projects[newObject[page].projects.length - 1] = newObj;
      } else {
        let newObj = newObject[page].projects[index + 1];
        newObject[page].projects[index + 1] = newObject[page].projects[index];
        newObject[page].projects[index] = newObj;
      }
    }
    if (field === "certifications") {
      if (
        index === newObject[page].certifications.length - 1 &&
        newObject[page + 1]
      ) {
        let newObj = newObject[page + 1].certifications[0];
        newObject[page + 1].certifications[0] =
          newObject[page].certifications[
            newObject[page].certifications.length - 1
          ];
        newObject[page].certifications[
          newObject[page].certifications.length - 1
        ] = newObj;
      } else {
        let newObj = newObject[page].certifications[index + 1];
        newObject[page].certifications[index + 1] =
          newObject[page].certifications[index];
        newObject[page].certifications[index] = newObj;
      }
    }
    if (field === "achievements") {
      if (
        index === newObject[page].achievements.length - 1 &&
        newObject[page + 1]
      ) {
        let newObj = newObject[page + 1].achievements[0];
        newObject[page + 1].achievements[0] =
          newObject[page].achievements[newObject[page].achievements.length - 1];
        newObject[page].achievements[
          newObject[page].achievements.length - 1
        ] = newObj;
      } else {
        let newObj = newObject[page].achievements[index + 1];
        newObject[page].achievements[index + 1] =
          newObject[page].achievements[index];
        newObject[page].achievements[index] = newObj;
      }
    }
    if (field === "courses") {
      if (index === newObject[page].courses.length - 1 && newObject[page + 1]) {
        let newObj = newObject[page + 1].courses[0];
        newObject[page + 1].courses[0] =
          newObject[page].courses[newObject[page].courses.length - 1];
        newObject[page].courses[newObject[page].courses.length - 1] = newObj;
      } else {
        let newObj = newObject[page].courses[index + 1];
        newObject[page].courses[index + 1] = newObject[page].courses[index];
        newObject[page].courses[index] = newObj;
      }
    }
    if (field === "languages") {
      if (
        index === newObject[page].languages.length - 1 &&
        newObject[page + 1]
      ) {
        let newObj = newObject[page + 1].languages[0];
        newObject[page + 1].languages[0] =
          newObject[page].languages[newObject[page].languages.length - 1];
        newObject[page].languages[
          newObject[page].languages.length - 1
        ] = newObj;
      } else {
        let newObj = newObject[page].languages[index + 1];
        newObject[page].languages[index + 1] = newObject[page].languages[index];
        newObject[page].languages[index] = newObj;
      }
    }

    this.setState({ userData: newObject });
  };
  setStructure = (arr1, arr2) => {
    let newObj = { ...this.state };
    let defaultArr = [
      { name: "experience", id: "card-1" },
      { name: "education", id: "card-2" },
      { name: "skills", id: "card-3" },
      { name: "projects", id: "card-4" },
      { name: "certifications", id: "card-5" },
      { name: "achievements", id: "card-6" },
      { name: "courses", id: "card-7" },
      { name: "languages", id: "card-8" }
    ];
    // // console.log(arr1)
    // // console.log(arr2)
    if (arr1.length === 0 && arr2.length === 0) {
    } else {
      if (arr1.length > 0 || arr2.length > 0) {
        newObj.style.leftSide = arr1.map(el => {
          return { name: el, id: defaultArr.filter(x => x.name === el)[0].id };
        });
        newObj.style.rightSide = arr2.map(el => {
          return { name: el, id: defaultArr.filter(x => x.name === el)[0].id };
        });
        // console.log(newObj.style.leftSide);
        // console.log(newObj.style.rightSide);
        // this.setState(newObj);
        this.updateState();
        // this.setState(newObj);
      }
    }
    // newObj.style.leftSide = [
    //   { name: "experience", id: "card-1" },
    //   { name: "education", id: "card-2" }
    // ];
    // newObj.style.rightSide = [
    //   { name: "skills", id: "card-3" },
    //   { name: "projects", id: "card-4" },
    //   { name: "certifications", id: "card-5" },
    //   { name: "achievements", id: "card-6" },
    //   { name: "courses", id: "card-7" },
    //   { name: "languages", id: "card-8" }
    // ];
    // this.setState(newObj);

    // if (this.state.style.displayOneColumn !== false) {
    //   if (arr1.length > 0 || arr2.length > 0) {
    //     const ObjArr1 = arr1.map(el => {
    //       return { name: el, id: defaultArr.filter(x => x.name === el)[0].id };
    //     });
    //     const ObjArr2 = arr2.map(el => {
    //       return { name: el, id: defaultArr.filter(x => x.name === el)[0].id };
    //     });
    //     console.log(ObjArr1);
    //     console.log(ObjArr2);
    //     newObj.style.oneColumnArr = [...ObjArr1, ...ObjArr2];

    //     this.setState(newObj);
    //   } else {
    //     newObj.style.oneColumnArr = [
    //       { name: "experience", id: "card-1" },
    //       { name: "education", id: "card-2" },
    //       { name: "skills", id: "card-3" },
    //       { name: "projects", id: "card-4" },
    //       { name: "certifications", id: "card-5" },
    //       { name: "achievements", id: "card-6" },
    //       { name: "courses", id: "card-7" },
    //       { name: "languages", id: "card-8" }
    //     ];
    //     this.setState(newObj);
    //   }
    // }
    // this.setState(newObj);
  };
  // ..............................................................
  handleContactIcon = () => {
    let element = document.getElementsByClassName("iconeColor");
    element.classList.add(this.state.userData.contact.icone);
  };

  // ############ UPLOAD PROFILE IMAGE FUNCTION ####################
  uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "dogfather");
    this.setState({ loadingUploadImg: true });
    this.setState({ considerPic: false });
    const res = await fetch(cloudinaryUrl, {
      method: "POST",
      body: data
    });
    const file = await res.json();
    const newArr = [...this.state.userData];
    newArr[0].profilePic = file.secure_url;
    this.setState({ userData: newArr, loadingUploadImg: false });
  };

  // ############ COUNTDOWN SPINNER FUNCTION ####################
  renderTime = time => {
    const currentTime = useRef(time);
    const prevTime = useRef(null);
    const isNewTimeFirstTick = useRef(false);
    //const [_, setOneLastRerender] = useState(0);

    if (currentTime.current !== time) {
      isNewTimeFirstTick.current = true;
      prevTime.current = currentTime.current;
      currentTime.current = time;
    } else {
      isNewTimeFirstTick.current = false;
    }

    // force one last re-render when the time is over to trigger the last animation
    if (time === 0) {
      // setTimeout(() => {
      //   setOneLastRerender(val => val + 1);
      // }, 20);
      return;
    }

    const isTimeUp = isNewTimeFirstTick.current;

    return (
      <div className="time-wrapper">
        <div key={time} className={`time ${isTimeUp ? "up" : ""}`}>
          {time}
        </div>
        {prevTime.current !== null && (
          <div
            key={prevTime.current}
            className={`time ${!isTimeUp ? "down" : ""}`}
          >
            {prevTime.current}
          </div>
        )}
      </div>
    );
  };

  // These functions are regarding design tools of CvBuilder and CoverLetterBuilder
  changeColor = e => {
    const newObj = { ...this.state };
    newObj.style.color = e.target.name;
    this.setState(newObj);
  };

  changeFontFamily = e => {
    const newObj = { ...this.state };
    newObj.style.font = e.target.title;
    this.setState(newObj);
  };

  handleFontSize = e => {
    if (e.target.title === "small") {
      const newObj = { ...this.state };
      newObj.style.size1 = "1.2rem";
      newObj.style.size2 = "0.9rem";
      newObj.style.size3 = "0.7rem";
      newObj.style.size4 = "0.6rem";
      this.setState({
        style: newObj.style
      });
    }
    if (e.target.title === "medium") {
      const newObj = { ...this.state };
      newObj.style.size1 = "";
      newObj.style.size2 = "";
      newObj.style.size3 = "";
      newObj.style.size4 = "";
      this.setState(newObj);
    }
    if (e.target.title === "big") {
      const newObj = { ...this.state };
      newObj.style.size1 = "1.6rem";
      newObj.style.size2 = "1.3rem";
      newObj.style.size3 = "1.1rem";
      newObj.style.size4 = "1.0rem";
      this.setState(newObj);
    }
  };

  showBasicTemplate = async () => {
    const newObj = { ...this.state };
    newObj.style.displayExecutive = false;
    newObj.style.displayBasic = true;
    newObj.style.displayModern = false;
    newObj.style.displayProfessional = false;
    await this.setState({
      style: newObj.style
    });
    await this.saveCVDataToServer();
  };

  showModernTemplate = async () => {
    const newObj = { ...this.state };
    newObj.style.displayExecutive = false;
    newObj.style.displayBasic = false;
    newObj.style.displayModern = true;
    newObj.style.displayProfessional = false;
    await this.setState({
      style: newObj.style
    });
    await this.saveCVDataToServer();
  };

  showProfessionalTemplate = async () => {
    const newObj = { ...this.state };
    newObj.style.displayExecutive = false;
    newObj.style.displayBasic = false;
    newObj.style.displayModern = false;
    newObj.style.displayProfessional = true;
    await this.setState({
      style: newObj.style
    });
    await this.saveCVDataToServer();
  };

  showExecutiveTemplate = async () => {
    const newObj = { ...this.state };
    newObj.style.displayExecutive = true;
    newObj.style.displayBasic = false;
    newObj.style.displayModern = false;
    newObj.style.displayProfessional = false;
    await this.setState({
      style: newObj.style
    });
    await this.saveCVDataToServer();
  };

  directToBasicTemplate = id => {
    localStorage.setItem("currentCV", guidGenerator());
    window.location.href = `${frontUrl}/create-cv`;
    this.showBasicTemplate();
  };

  directToModernTemplate = id => {
    localStorage.setItem("currentCV", guidGenerator());
    window.location.href = `${frontUrl}/create-cv`;
    this.showModernTemplate();
  };

  directToProfessionalTemplate = id => {
    localStorage.setItem("currentCV", guidGenerator());
    window.location.href = `${frontUrl}/create-cv`;
    this.showProfessionalTemplate();
  };

  directToExecutiveTemplate = id => {
    localStorage.setItem("currentCV", guidGenerator());
    window.location.href = `${frontUrl}/create-cv`;
    this.showExecutiveTemplate();
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
    let newObject = { ...this.state.style };
    newObject.displayPhoto = !currentState;
    this.setState({ style: newObject });
  };

  toggleTitleClass = () => {
    const currentState = this.state.style.displayTitle;
    let newObject = { ...this.state.style };
    newObject.displayTitle = !currentState;
    this.setState({ style: newObject });
  };

  toggleCoverTitleClass = () => {
    const currentState = this.state.style.displayCoverTitle;
    let newObject = { ...this.state.style };
    newObject.displayCoverTitle = !currentState;
    this.setState({ style: newObject });
  };

  toggleCompanyClass = () => {
    const currentState = this.state.style.displayCompany;
    let newObject = { ...this.state.style };
    newObject.displayCompany = !currentState;
    this.setState({ style: newObject });
  };

  toggleSummaryClass = () => {
    const currentState = this.state.style.displaySummary;
    let newObject = { ...this.state.style };
    newObject.displaySummary = !currentState;
    this.setState({ style: newObject });
  };

  updateState = () => {
    let new1Object = [];
    // let new1Object = [ ...this.state.userData ];
    new1Object = [
      {
        fullName: this.state.userData[0].fullName,
        intro: this.state.userData[0].intro,
        about: this.state.userData[0].about,
        contact: this.state.userData[0].contact,
        profilePic: this.state.userData[0].profilePic,
        experience: this.state.userData.map(el => el.experience).flat(),
        education: this.state.userData.map(el => el.education).flat(),
        skills: this.state.userData.map(el => el.skills).flat(),
        projects: this.state.userData.map(el => el.projects).flat(),
        certifications: this.state.userData.map(el => el.certifications).flat(),
        achievements: this.state.userData.map(el => el.achievements).flat(),
        courses: this.state.userData.map(el => el.courses).flat(),
        languages: this.state.userData.map(el => el.languages).flat()
      },
      {
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        achievements: [],
        courses: [],
        languages: []
      },
      {
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        achievements: [],
        courses: [],
        languages: []
      },
      {
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        achievements: [],
        courses: [],
        languages: []
      },
      {
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        achievements: [],
        courses: [],
        languages: []
      },
      {
        experience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        achievements: [],
        courses: [],
        languages: []
      }
    ];
    // console.log(new1Object[0]);
    this.setState({ userData: new1Object });
  };

  toggleOneColumn = async () => {
    // console.log("before toggles" + this.state.style.displayOneColumn);
    let newObject = { ...this.state.style };
    newObject.displayOneColumn = await !this.state.style.displayOneColumn;
    await this.setState({ style: newObject });
    // console.log("i toggles" + this.state.style.displayOneColumn);
    this.updateState();
  };

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
          showBasicTemplate: this.showBasicTemplate,
          showExecutiveTemplate: this.showExecutiveTemplate,
          showModernTemplate: this.showModernTemplate,
          showProfessionalTemplate: this.showProfessionalTemplate,
          directToBasicTemplate: this.directToBasicTemplate,
          directToModernTemplate: this.directToModernTemplate,
          directToProfessionalTemplate: this.directToProfessionalTemplate,
          directToExecutiveTemplate: this.directToExecutiveTemplate,
          togglePhotoClass: this.togglePhotoClass,
          toggleTitleClass: this.toggleTitleClass,
          toggleCoverTitleClass: this.toggleCoverTitleClass,
          toggleCompanyClass: this.toggleCompanyClass,
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
          setStructure: this.setStructure,
          renderTime: this.renderTime,
          uploadImage: this.uploadImage,
          getCurrentDate: this.getCurrentDate
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
store.subscribe(aFunction);
export default ThemeContextProvider;
