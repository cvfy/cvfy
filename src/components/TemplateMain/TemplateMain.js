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

class TemplateMain extends React.Component {
  render() {
    return (
      <div id="container">
        <TemplateHeader></TemplateHeader>
        <TemplateContact></TemplateContact>
        <div class="wrap">
          <div class="left">
            <Education></Education>
            <Experience></Experience>
          </div>
          <div class="right">
            <Skills></Skills>
            <Projects></Projects>
            <Certifications></Certifications>
            <Achievements></Achievements>
            <Languages></Languages>
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateMain;
