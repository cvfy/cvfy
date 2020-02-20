import React from "react";
import "./cvBuilderMain.css";
import Header from "./Header/Header";
import Contacts from "./Contacts/Contacts";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Certifications from "./Certifications/Certifications";
import Achievements from "./Achievements/Achievements";
import Languages from "./Languages/Languages";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Courses from "./Courses/Courses";

class CvBuilderMain extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="alignContainer">
              <div
                id="containerA4"
                style={{ fontFamily: context.font, fontSize: context.size3 }}
              >
                <Header />
                <Contacts />
                <div className="A4ContentWrap">
                  <div className="left">
                    <Experience />
                    <Education />
                  </div>
                  <div className="right">
                    <Skills />
                    <Projects />
                    <Certifications />
                    <Achievements />
                    <Courses />
                    <Languages />
                  </div>
                </div>
              </div>
              <div className="break-before">
                <div
                  id="containerA4"
                  style={{ fontFamily: context.font, fontSize: context.size3 }}
                >
                  <div className="A4ContentWrap">
                    <div className="left">
                      {/* <Experience />
                      <Education /> */}
                    </div>
                    <div className="right">
                      {/* <Skills />
                      <Projects />
                      <Certifications />
                      <Achievements />
                      <Courses />
                      <Languages /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default CvBuilderMain;
