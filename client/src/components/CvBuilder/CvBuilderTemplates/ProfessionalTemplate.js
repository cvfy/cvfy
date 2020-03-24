import React from "react";
import '../CvBuilderMain/cvBuilderMain.css';
import HeaderProfessional from "../CvBuilderMain/Header/HeaderProfessional";
import ContactsProfessional from "../CvBuilderMain/Contacts/ContactsProfessional";
import Education from "../CvBuilderMain/Education/Education";
import Experience from "../CvBuilderMain/Experience/Experience";
import Skills from "../CvBuilderMain/Skills/Skills";
import Projects from "../CvBuilderMain/Projects/Projects";
import Certifications from "../CvBuilderMain/Certifications/Certifications";
import Achievements from "../CvBuilderMain/Achievements/Achievements";
import Languages from "../CvBuilderMain/Languages/Languages";
import Courses from "../CvBuilderMain/Courses/Courses";
import { ThemeContext } from "../../../contexts/ThemeContext";

class ProfessionalTemplate extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const leftSideArr = (context.style.displayOneColumn === false) ? context.style.leftSide : [...context.style.leftSide, ...context.style.rightSide]
          const pages = context.userData.map((el, i) => (
            <div
            id="containerA4"
            className={`containerA4${i} ${!el.experience[0] && !el.education[0] && !el.skills[0] && !el.projects[0] && !el.certifications[0] && !el.achievements[0] && !el.courses[0] && !el.languages[0]? "": "A4"}`}
            style={{ fontFamily: context.style.font, fontSize: context.style.size3, display: `${!el.experience[0] && !el.education[0] && !el.skills[0] && !el.projects[0] && !el.certifications[0] && !el.achievements[0] && !el.courses[0] && !el.languages[0]? "none": "block"}` }}
            >
              <div className='header-grid'>
                {el.about && <HeaderProfessional index={i} />}
                {el.contact && <ContactsProfessional index={i} />}  
              </div>
              
              <div className="A4ContentWrap">
            
                <div className="left">      
                  {(el.experience[0] && leftSideArr[0] && leftSideArr[0].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && leftSideArr[0] && leftSideArr[0].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && leftSideArr[0] && leftSideArr[0].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && leftSideArr[0] && leftSideArr[0].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && leftSideArr[0] && leftSideArr[0].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && leftSideArr[0] && leftSideArr[0].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && leftSideArr[0] && leftSideArr[0].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && leftSideArr[0] && leftSideArr[0].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && leftSideArr[1] && leftSideArr[1].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && leftSideArr[1] && leftSideArr[1].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && leftSideArr[1] && leftSideArr[1].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && leftSideArr[1] && leftSideArr[1].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && leftSideArr[1] && leftSideArr[1].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && leftSideArr[1] && leftSideArr[1].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && leftSideArr[1] && leftSideArr[1].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && leftSideArr[1] && leftSideArr[1].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && leftSideArr[2] && leftSideArr[2].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && leftSideArr[2] && leftSideArr[2].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && leftSideArr[2] && leftSideArr[2].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && leftSideArr[2] && leftSideArr[2].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && leftSideArr[2] && leftSideArr[2].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && leftSideArr[2] && leftSideArr[2].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && leftSideArr[2] && leftSideArr[2].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && leftSideArr[2] && leftSideArr[2].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && leftSideArr[3] && leftSideArr[3].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && leftSideArr[3] && leftSideArr[3].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && leftSideArr[3] && leftSideArr[3].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && leftSideArr[3] && leftSideArr[3].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && leftSideArr[3] && leftSideArr[3].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && leftSideArr[3] && leftSideArr[3].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && leftSideArr[3] && leftSideArr[3].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && leftSideArr[3] && leftSideArr[3].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && leftSideArr[4] && leftSideArr[4].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && leftSideArr[4] && leftSideArr[4].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && leftSideArr[4] && leftSideArr[4].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && leftSideArr[4] && leftSideArr[4].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && leftSideArr[4] && leftSideArr[4].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && leftSideArr[4] && leftSideArr[4].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && leftSideArr[4] && leftSideArr[4].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && leftSideArr[4] && leftSideArr[4].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && leftSideArr[5] && leftSideArr[5].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && leftSideArr[5] && leftSideArr[5].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && leftSideArr[5] && leftSideArr[5].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && leftSideArr[5] && leftSideArr[5].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && leftSideArr[5] && leftSideArr[5].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && leftSideArr[5] && leftSideArr[5].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && leftSideArr[5] && leftSideArr[5].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && leftSideArr[5] && leftSideArr[5].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && leftSideArr[6] && leftSideArr[6].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && leftSideArr[6] && leftSideArr[6].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && leftSideArr[6] && leftSideArr[6].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && leftSideArr[6] && leftSideArr[6].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && leftSideArr[6] && leftSideArr[6].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && leftSideArr[6] && leftSideArr[6].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && leftSideArr[6] && leftSideArr[6].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && leftSideArr[6] && leftSideArr[6].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && leftSideArr[7] && leftSideArr[7].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && leftSideArr[7] && leftSideArr[7].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && leftSideArr[7] && leftSideArr[7].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && leftSideArr[7] && leftSideArr[7].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && leftSideArr[7] && leftSideArr[7].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && leftSideArr[7] && leftSideArr[7].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && leftSideArr[7] && leftSideArr[7].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && leftSideArr[7] && leftSideArr[7].name.includes("languages") ) && <Languages index={i} />}
                </div>

                <div style={{display: `${(context.style.displayOneColumn === false) ? "block" : "none"}`}} className="right">                  
                  {(el.experience[0] && context.style.rightSide[0] && context.style.rightSide[0].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && context.style.rightSide[0] && context.style.rightSide[0].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && context.style.rightSide[0] && context.style.rightSide[0].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && context.style.rightSide[0] && context.style.rightSide[0].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && context.style.rightSide[0] && context.style.rightSide[0].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && context.style.rightSide[0] && context.style.rightSide[0].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && context.style.rightSide[0] && context.style.rightSide[0].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && context.style.rightSide[0] && context.style.rightSide[0].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && context.style.rightSide[1] && context.style.rightSide[1].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && context.style.rightSide[1] && context.style.rightSide[1].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && context.style.rightSide[1] && context.style.rightSide[1].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && context.style.rightSide[1] && context.style.rightSide[1].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && context.style.rightSide[1] && context.style.rightSide[1].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && context.style.rightSide[1] && context.style.rightSide[1].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && context.style.rightSide[1] && context.style.rightSide[1].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && context.style.rightSide[1] && context.style.rightSide[1].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && context.style.rightSide[2] && context.style.rightSide[2].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && context.style.rightSide[2] && context.style.rightSide[2].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && context.style.rightSide[2] && context.style.rightSide[2].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && context.style.rightSide[2] && context.style.rightSide[2].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && context.style.rightSide[2] && context.style.rightSide[2].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && context.style.rightSide[2] && context.style.rightSide[2].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && context.style.rightSide[2] && context.style.rightSide[2].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && context.style.rightSide[2] && context.style.rightSide[2].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && context.style.rightSide[3] && context.style.rightSide[3].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && context.style.rightSide[3] && context.style.rightSide[3].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && context.style.rightSide[3] && context.style.rightSide[3].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && context.style.rightSide[3] && context.style.rightSide[3].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && context.style.rightSide[3] && context.style.rightSide[3].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && context.style.rightSide[3] && context.style.rightSide[3].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && context.style.rightSide[3] && context.style.rightSide[3].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && context.style.rightSide[3] && context.style.rightSide[3].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && context.style.rightSide[4] && context.style.rightSide[4].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && context.style.rightSide[4] && context.style.rightSide[4].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && context.style.rightSide[4] && context.style.rightSide[4].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && context.style.rightSide[4] && context.style.rightSide[4].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && context.style.rightSide[4] && context.style.rightSide[4].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && context.style.rightSide[4] && context.style.rightSide[4].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && context.style.rightSide[4] && context.style.rightSide[4].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && context.style.rightSide[4] && context.style.rightSide[4].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && context.style.rightSide[5] && context.style.rightSide[5].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && context.style.rightSide[5] && context.style.rightSide[5].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && context.style.rightSide[5] && context.style.rightSide[5].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && context.style.rightSide[5] && context.style.rightSide[5].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && context.style.rightSide[5] && context.style.rightSide[5].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && context.style.rightSide[5] && context.style.rightSide[5].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && context.style.rightSide[5] && context.style.rightSide[5].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && context.style.rightSide[5] && context.style.rightSide[5].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && context.style.rightSide[6] && context.style.rightSide[6].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && context.style.rightSide[6] && context.style.rightSide[6].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && context.style.rightSide[6] && context.style.rightSide[6].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && context.style.rightSide[6] && context.style.rightSide[6].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && context.style.rightSide[6] && context.style.rightSide[6].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && context.style.rightSide[6] && context.style.rightSide[6].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && context.style.rightSide[6] && context.style.rightSide[6].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && context.style.rightSide[6] && context.style.rightSide[6].name.includes("languages") ) && <Languages index={i} />}

                  {(el.experience[0] && context.style.rightSide[7] && context.style.rightSide[7].name.includes("experience") ) && <Experience index={i} />}
                  {(el.education[0] && context.style.rightSide[7] && context.style.rightSide[7].name.includes("education") ) && <Education index={i} />}
                  {(el.skills[0] && context.style.rightSide[7] && context.style.rightSide[7].name.includes("skills") ) && <Skills index={i} />}
                  {(el.projects[0] && context.style.rightSide[7] && context.style.rightSide[7].name.includes("projects") ) && <Projects index={i} />}
                  {(el.certifications[0] && context.style.rightSide[7] && context.style.rightSide[7].name.includes("certifications") ) && <Certifications index={i} />}
                  {(el.achievements[0] && context.style.rightSide[7] && context.style.rightSide[7].name.includes("achievements") ) && <Achievements index={i} />}
                  {(el.courses[0] && context.style.rightSide[7] && context.style.rightSide[7].name.includes("courses") ) && <Courses index={i} />}
                  {(el.languages[0] && context.style.rightSide[7] && context.style.rightSide[7].name.includes("languages") ) && <Languages index={i} />}
                </div>
              </div>
            </div>            
          ));

          return (
              <div className="alignContainer">{pages}</div>
          )
        }}
      </ThemeContext.Consumer>
        );
      }
}

export default ProfessionalTemplate;