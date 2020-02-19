import React, { Component, createContext } from "react";
import SkillBox from "../components/CvBuilder/CvBuilderMain/Skills/SkillBox";
import axios from 'axios';

// import { response } from "express";
export const ThemeContext = createContext();


// const importDatata = async () => {
// const impdata = await axios.get("localhost:5000/api/users/data/bleda-hacialihafiz")
//      return impdata
// }
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
    value: "",
    userData: {
      fullName: "Steve Jobs",
      intro: "Frontend Developer",
      about: "I like apple, bacon and mushrooms",
      contact: [
        { email: "steve.jobs@apple.com" },
        { phone: "0170 999888888" },
        { linkedIn: "linkedin.com/in/steve.jobs" },
        { skype: "steve.jobs" },
        { address: "Kingston, Jamaica" },
        { website: "https://ajedelmann.github.io/portfolio/" }
      ],
      experience: [
        {
          position: "Frontend developer",
          company: "Burger King",
          startMonth: "02",
          startYear: "2005",
          endMonth: "02",
          endYear: "2012",
          place: "Berlin, Germany",
          tasks: "I did craaazy stuff"
        }
      ],
      education: [
        {
          studyProgram: "Full Stack MERN",
          institution: "DCI - Digital Career Institute",
          startMonth: "03",
          startYear: "2019",
          endMonth: "04",
          endYear: "2020",
          place: "Berlin, Germany"
        }
      ],
      skills: ["JavaScript", "React", "MongoDB", "Express", "Node.js"],
      projects: [
        { title: "todo app", desc: "a todo list with react" },
        {
          title: "piano-player",
          desc: "Piano player build with pure javascript"
        }
      ],
      certifications: [
        "Best dog - who let the dog's out award",
        "Best whatever"
      ],
      achievements: ["Spit fire in 3 ways - hemorrhoids academy"],
      courses: [
        { title: "Barbq master", desc: "How to be a a master on the grill" }
      ],
      languages: [
        { language: "English", level: "Terrible" },
        { language: "German", level: "none" },
        { language: "Japanese", level: "for lunch?" }
      ]
    }
  };

  importData = async (profile) => {
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
      const response = await axios.get(`http://localhost:5000/api/users/data/${profile}`)
      console.log(response.data)
      let newObject = { ...this.state.userData };
      newObject.fullName = response.data.profileFullName;
      newObject.intro = response.data.profileHeadline;
      newObject.about = response.data.profileAbout[0];
      newObject.skills = response.data.skills;
      newObject.linkedIn =`linkedin.com/in/${profile}`;
      newObject.experience = response.data.profileExperience.map( el => {
        let new_el = {}
        new_el.position = el.jobTitle;
        new_el.company = el.jobEmployer;
        new_el.startMonth = el.jobPeriod.split(" ")[0] || "";
        new_el.startYear = el.jobPeriod.split(" ")[1] || "";
        new_el.endMonth = el.jobPeriod.split(" ")[3] || "";
        new_el.endYear = el.jobPeriod.split(" ")[4] || "";
        new_el.place = el.jobLocation;
        new_el.tasks = el.jobDescription;
        return new_el
      })
      newObject.education = response.data.profileEducation.map( el => {
        let new_el = {}
        new_el.studyProgram = el.educationType;
        new_el.institution = el.educationInstitution;
        new_el.startMonth = "";
        new_el.startYear = el.educationPeriod.split(" ")[0]
        new_el.endMonth = "";
        new_el.endYear = el.educationPeriod.split(" ")[2] || "";
        new_el.place = ""
        return new_el
      })
      newObject.languages = response.data.accomplishments[0].accomplishmentList.map(el =>  { return {language: el.split("\n")[1], level: "B2"}})
      this.setState({ userData: newObject });

      // axios.get("localhost:5000/api/users/data/bleda-hacialihafiz").then(res => console.log(res.data))
  }

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
          handleFontSize: this.handleFontSize,
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

export default ThemeContextProvider;
