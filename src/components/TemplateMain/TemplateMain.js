import React from "react";
import "./TemplateMain.css";
import TemplateHeader from "./TemplateHeader/TemplateHeader";
import TemplateContact from "./TemplateContact/TemplateContact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Certifications from "./Certifications/Certifications";
import Achievements from "./Achievements/Achievements";
import Languages from "./Languages/Languages";
import { ThemeContext } from "../../contexts/ThemeContext";

class TemplateMain extends React.Component {
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
                <TemplateHeader></TemplateHeader>
                <TemplateContact></TemplateContact>
                <div className="wrap">
                  <div className="left">
                    <Education></Education>
                    <Experience></Experience>
                  </div>
                  <div className="right">
                    <Skills></Skills>
                    <Projects></Projects>
                    <Certifications></Certifications>
                    <Achievements></Achievements>
                    <Languages></Languages>
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

export default TemplateMain;
