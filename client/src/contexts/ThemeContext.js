import React, { Component, createContext } from "react";
import SkillBox from "../components/CvBuilder/CvBuilderMain/Skills/SkillBox";

export const ThemeContext = createContext();

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
          tasks: ["I did craaazy stuff", "planted a tree"]
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
      certifications: ["Best dog - who let the dog's out award"],
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

  addSkillGroup = () => {
    let newObject = { ...this.state.userData };
    newObject.skills = [...newObject.skills, "Skill"];
    this.setState({ userData: newObject });
  };

  addLanguageGroup = () => {
    let newObject = { ...this.state.userData };
    let newLang = { language: "Language", level: "level" };
    newObject.languages = [...this.state.userData.languages, newLang];
    this.setState({ userData: newObject });
  };

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
          addSkillGroup: this.addSkillGroup,
          addAchievGroup: this.addAchievGroup,
          addLanguageGroup: this.addLanguageGroup
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
