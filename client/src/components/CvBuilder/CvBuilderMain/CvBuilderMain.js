import React from "react";
import "./cvBuilderMain.css";
import Header from "./Header/Header";
import cvBuilderPage from './cvBuilderPage'
import Contacts from "./Contacts/Contacts";
import Education from './Education/Education'
import Education_NextPage from "./Education_NextPage/Education_NextPage";
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
            className={`containerA4${i} A4`}
            style={{ fontFamily: context.style.font, fontSize: context.style.size3, display: `${!el.experience[0] && !el.education[0] && !el.skills[0] && !el.projects[0] && !el.certifications[0] && !el.achievements[0] && !el.courses[0] && !el.languages[0]? "none": "block"}` }}
          >
            {/* <Header index={i} /> */}
        {el.about && <Header index={i} />}
        {el.contact && <Contacts index={i} />}
            {/* <Contacts index={i} /> */}
            <div className="A4ContentWrap">
              <div className="left">
              {el.experience[0] && <Experience index={i} />}
              {el.education[0] && <Education index={i} />}
              </div>
              <div className="right">
              {el.skills[0] && <Skills index={i} />}
              {el.projects[0] && <Projects index={i} />}
              {el.certifications[0] && <Certifications index={i} />}
              {el.achievements[0] && <Achievements index={i} />}
              {el.courses[0] && <Courses index={i} />}
              {el.languages[0] && <Languages index={i} />}
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
