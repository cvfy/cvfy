import React from "react";
import "./cvBuilderMain.css";
import Header from "./Header/Header";
import axios from "axios";
//import cvBuilderPage from './cvBuilderPage'
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
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
// import { nonWhiteSpace } from "html2canvas/dist/types/css/syntax/parser";
const ref = React.createRef();
const ref2 = React.createRef();

class CvBuilderMain extends React.Component {
  state = {
    openRequirements: false,
    openJobDashboard: false,
    positionValue: "",
    locationValue: "",
    jobAds: []
  };

  onPositionChange = e => {
    this.setState({ positionValue: e.target.value });
  };
  onLocationChange = e => {
    this.setState({ locationValue: e.target.value });
  };

  requestStepStoneData = async e => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:5000/api/users/data/stepstone/position/${this.state.positionValue}/location/${this.state.locationValue}`
    );
    this.setState({ jobAds: response.data });
  };
  displayDashboard = () => {
    this.setState({ openJobDashboard: !this.state.openJobDashboard });
  };
  openRequirements = () => {
    this.setState({ openRequirements: !this.state.openRequirements });
    console.log(this.state.openRequirements);
  };
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const leftSideArr = (context.style.displayOneColumn === false) ? context.style.leftSide : context.style.oneColumnArr
          const pages = context.userData.map((el, i) => (
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
                
              {(el.experience[0] && leftSideArr[0] && leftSideArr[0].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && leftSideArr[0] && leftSideArr[0].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && leftSideArr[0] && leftSideArr[0].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && leftSideArr[0] && leftSideArr[0].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && leftSideArr[0] && leftSideArr[0].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && leftSideArr[0] && leftSideArr[0].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && leftSideArr[0] && leftSideArr[0].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && leftSideArr[0] && leftSideArr[0].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && leftSideArr[1] && leftSideArr[1].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && leftSideArr[1] && leftSideArr[1].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && leftSideArr[1] && leftSideArr[1].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && leftSideArr[1] && leftSideArr[1].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && leftSideArr[1] && leftSideArr[1].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && leftSideArr[1] && leftSideArr[1].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && leftSideArr[1] && leftSideArr[1].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && leftSideArr[1] && leftSideArr[1].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && leftSideArr[2] && leftSideArr[2].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && leftSideArr[2] && leftSideArr[2].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && leftSideArr[2] && leftSideArr[2].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && leftSideArr[2] && leftSideArr[2].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && leftSideArr[2] && leftSideArr[2].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && leftSideArr[2] && leftSideArr[2].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && leftSideArr[2] && leftSideArr[2].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && leftSideArr[2] && leftSideArr[2].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && leftSideArr[3] && leftSideArr[3].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && leftSideArr[3] && leftSideArr[3].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && leftSideArr[3] && leftSideArr[3].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && leftSideArr[3] && leftSideArr[3].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && leftSideArr[3] && leftSideArr[3].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && leftSideArr[3] && leftSideArr[3].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && leftSideArr[3] && leftSideArr[3].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && leftSideArr[3] && leftSideArr[3].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && leftSideArr[4] && leftSideArr[4].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && leftSideArr[4] && leftSideArr[4].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && leftSideArr[4] && leftSideArr[4].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && leftSideArr[4] && leftSideArr[4].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && leftSideArr[4] && leftSideArr[4].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && leftSideArr[4] && leftSideArr[4].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && leftSideArr[4] && leftSideArr[4].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && leftSideArr[4] && leftSideArr[4].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && leftSideArr[5] && leftSideArr[5].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && leftSideArr[5] && leftSideArr[5].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && leftSideArr[5] && leftSideArr[5].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && leftSideArr[5] && leftSideArr[5].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && leftSideArr[5] && leftSideArr[5].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && leftSideArr[5] && leftSideArr[5].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && leftSideArr[5] && leftSideArr[5].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && leftSideArr[5] && leftSideArr[5].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && leftSideArr[6] && leftSideArr[6].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && leftSideArr[6] && leftSideArr[6].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && leftSideArr[6] && leftSideArr[6].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && leftSideArr[6] && leftSideArr[6].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && leftSideArr[6] && leftSideArr[6].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && leftSideArr[6] && leftSideArr[6].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && leftSideArr[6] && leftSideArr[6].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && leftSideArr[6] && leftSideArr[6].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && leftSideArr[7] && leftSideArr[7].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && leftSideArr[7] && leftSideArr[7].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && leftSideArr[7] && leftSideArr[7].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && leftSideArr[7] && leftSideArr[7].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && leftSideArr[7] && leftSideArr[7].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && leftSideArr[7] && leftSideArr[7].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && leftSideArr[7] && leftSideArr[7].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && leftSideArr[7] && leftSideArr[7].includes("languages") ) && <Languages index={i} />}


              </div>
              <div style={{display: `${(context.style.displayOneColumn == false) ? "block" : "none"}`}} className="right">
              {(el.experience[0] && context.style.rightSide[0] && context.style.rightSide[0].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && context.style.rightSide[0] && context.style.rightSide[0].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && context.style.rightSide[0] && context.style.rightSide[0].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && context.style.rightSide[0] && context.style.rightSide[0].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && context.style.rightSide[0] && context.style.rightSide[0].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && context.style.rightSide[0] && context.style.rightSide[0].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && context.style.rightSide[0] && context.style.rightSide[0].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && context.style.rightSide[0] && context.style.rightSide[0].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && context.style.rightSide[1] && context.style.rightSide[1].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && context.style.rightSide[1] && context.style.rightSide[1].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && context.style.rightSide[1] && context.style.rightSide[1].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && context.style.rightSide[1] && context.style.rightSide[1].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && context.style.rightSide[1] && context.style.rightSide[1].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && context.style.rightSide[1] && context.style.rightSide[1].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && context.style.rightSide[1] && context.style.rightSide[1].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && context.style.rightSide[1] && context.style.rightSide[1].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && context.style.rightSide[2] && context.style.rightSide[2].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && context.style.rightSide[2] && context.style.rightSide[2].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && context.style.rightSide[2] && context.style.rightSide[2].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && context.style.rightSide[2] && context.style.rightSide[2].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && context.style.rightSide[2] && context.style.rightSide[2].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && context.style.rightSide[2] && context.style.rightSide[2].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && context.style.rightSide[2] && context.style.rightSide[2].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && context.style.rightSide[2] && context.style.rightSide[2].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && context.style.rightSide[3] && context.style.rightSide[3].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && context.style.rightSide[3] && context.style.rightSide[3].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && context.style.rightSide[3] && context.style.rightSide[3].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && context.style.rightSide[3] && context.style.rightSide[3].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && context.style.rightSide[3] && context.style.rightSide[3].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && context.style.rightSide[3] && context.style.rightSide[3].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && context.style.rightSide[3] && context.style.rightSide[3].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && context.style.rightSide[3] && context.style.rightSide[3].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && context.style.rightSide[4] && context.style.rightSide[4].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && context.style.rightSide[4] && context.style.rightSide[4].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && context.style.rightSide[4] && context.style.rightSide[4].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && context.style.rightSide[4] && context.style.rightSide[4].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && context.style.rightSide[4] && context.style.rightSide[4].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && context.style.rightSide[4] && context.style.rightSide[4].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && context.style.rightSide[4] && context.style.rightSide[4].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && context.style.rightSide[4] && context.style.rightSide[4].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && context.style.rightSide[5] && context.style.rightSide[5].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && context.style.rightSide[5] && context.style.rightSide[5].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && context.style.rightSide[5] && context.style.rightSide[5].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && context.style.rightSide[5] && context.style.rightSide[5].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && context.style.rightSide[5] && context.style.rightSide[5].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && context.style.rightSide[5] && context.style.rightSide[5].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && context.style.rightSide[5] && context.style.rightSide[5].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && context.style.rightSide[5] && context.style.rightSide[5].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && context.style.rightSide[6] && context.style.rightSide[6].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && context.style.rightSide[6] && context.style.rightSide[6].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && context.style.rightSide[6] && context.style.rightSide[6].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && context.style.rightSide[6] && context.style.rightSide[6].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && context.style.rightSide[6] && context.style.rightSide[6].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && context.style.rightSide[6] && context.style.rightSide[6].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && context.style.rightSide[6] && context.style.rightSide[6].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && context.style.rightSide[6] && context.style.rightSide[6].includes("languages") ) && <Languages index={i} />}

              {(el.experience[0] && context.style.rightSide[7] && context.style.rightSide[7].includes("experience") ) && <Experience index={i} />}
              {(el.education[0] && context.style.rightSide[7] && context.style.rightSide[7].includes("education") ) && <Education index={i} />}
              {(el.skills[0] && context.style.rightSide[7] && context.style.rightSide[7].includes("skills") ) && <Skills index={i} />}
              {(el.projects[0] && context.style.rightSide[7] && context.style.rightSide[7].includes("projects") ) && <Projects index={i} />}
              {(el.certifications[0] && context.style.rightSide[7] && context.style.rightSide[7].includes("certifications") ) && <Certifications index={i} />}
              {(el.achievements[0] && context.style.rightSide[7] && context.style.rightSide[7].includes("achievements") ) && <Achievements index={i} />}
              {(el.courses[0] && context.style.rightSide[7] && context.style.rightSide[7].includes("courses") ) && <Courses index={i} />}
              {(el.languages[0] && context.style.rightSide[7] && context.style.rightSide[7].includes("languages") ) && <Languages index={i} />}

              </div>
            </div>
            </div>  
            // <div className="break-before">

            // </div>
          ));
          return (
            <div style={{ display: "flex" }}>
              <div className="alignContainer">{pages}</div>
              <div className="bookmark">
                <div
                  onClick={() => this.displayDashboard()}
                  className="bookmark_link"
                >
                  {this.state.openJobDashboard === false
                    ? "Job Dashboard"
                    : "Close Dashboard"}
                </div>
              </div>
              <div
                className="transitionDashboard"
                style={{
                  width: `${
                    this.state.openJobDashboard === false ? "0px" : "600px"
                  }`,
                  display: `${
                    this.state.openJobDashboard === false ? "none" : "block"
                  }`
                }}
              >
                <div className="MainJobDashboard">
                  <div className="JobDashboardForm">
                    <form className="jobForm">
                      <label htmlFor="position">Job Title</label>
                      <input
                        onChange={e => this.onPositionChange(e)}
                        value={this.state.positionValue}
                        className="JobAdInput"
                        type="text"
                        id="position"
                      ></input>
                      <label htmlFor="location">Location</label>
                      <input
                        onChange={e => this.onLocationChange(e)}
                        value={this.state.locationValue}
                        className="JobAdInput"
                        type="text"
                        id="location"
                      ></input>
                      <input
                        onClick={e => this.requestStepStoneData(e)}
                        className="JobDashboardButton"
                        type="submit"
                        value="Search"
                      />
                    </form>
                  </div>
                  <div className="JobDashboardAds">
                    {this.state.jobAds.map(el => (
                      <div className="JobAdContainer">
                        <div className="jobAdTitle">{el.JobPosition}</div>
                        <div className="jobAdCompanyName">{el.CompanyName}</div>
                        <div
                          style={{
                            display: `${
                              this.state.openRequirements === false
                                ? "none"
                                : "block"
                            }`
                          }}
                          className="jobAdRequirements"
                        >
                          <ul>
                            $
                            {el.JobRequirements.map(el => (
                              <li>{el}</li>
                            ))}
                          </ul>
                        </div>
                        <div
                          onClick={() => this.openRequirements()}
                          className="jobAdClickforRequirements"
                        >
                          {this.state.openRequirements === false
                            ? "Show Job Requirements"
                            : "Hide Job Requirements"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
        );
      }
}

export default CvBuilderMain;
