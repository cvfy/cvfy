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

class CvBuilderMain extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          return (
            <div className="alignContainer">
              <div
                id="container"
                style={{ fontFamily: context.font, fontSize: context.size3 }}
              >
                <Header />
                <Contacts />
                <div className="wrap">
                  <div className="left">
                    <Education />
                    <Experience />
                  </div>
                  <div className="right">
                    <Skills />
                    <Projects />
                    <Certifications />
                    <Achievements />
                    <Languages />
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
