import React from "react";
import "./cvBuilderMain.css";
import Header from "./Header/Header";
//import cvBuilderPage from './cvBuilderPage'
import Contacts from "./Contacts/Contacts";
import Education from './Education/Education'
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Certifications from "./Certifications/Certifications";
import Achievements from "./Achievements/Achievements";
import Languages from "./Languages/Languages";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Courses from "./Courses/Courses";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const ref2 = React.createRef();


class CvBuilderMain extends React.Component {


  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          
          const pages = context.userData.map((el, i) =>
           (
            <div
            id="containerA4"
            className={`containerA4${i} ${!el.experience[0] && !el.education[0] && !el.skills[0] && !el.projects[0] && !el.certifications[0] && !el.achievements[0] && !el.courses[0] && !el.languages[0]? "": "A4"}`}
            style={{ fontFamily: context.style.font, fontSize: context.style.size3, display: `${!el.experience[0] && !el.education[0] && !el.skills[0] && !el.projects[0] && !el.certifications[0] && !el.achievements[0] && !el.courses[0] && !el.languages[0]? "none": "block"}` }}
          >
            {/* <Header index={i} /> */}
        {el.about && <Header index={i} />}
        {el.contact && <Contacts index={i} />}
            {/* <Contacts index={i} /> */}
            <div className="A4ContentWrap">
              <div className="left">
              {(el.experience[0] && context.style.leftSide.includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && context.style.leftSide.includes("education") ) && <Education index={i} />}
              {(el.skills[0] && context.style.leftSide.includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && context.style.leftSide.includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && context.style.leftSide.includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && context.style.leftSide.includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && context.style.leftSide.includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && context.style.leftSide.includes("") ) && <Languages index={i} />}
              </div>
              <div className="right">
              {(el.experience[0] && context.style.rightSide.includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && context.style.rightSide.includes("education") ) && <Education index={i} />}
              {(el.skills[0] && context.style.rightSide.includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && context.style.rightSide.includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && context.style.rightSide.includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && context.style.rightSide.includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && context.style.rightSide.includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && context.style.rightSide.includes("languages") ) && <Languages index={i} />}
              </div>
            </div>
          </div>
          // <div className="break-before">

          // </div>
          ))
          return (
            <div className="alignContainer">
             {pages}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default CvBuilderMain;