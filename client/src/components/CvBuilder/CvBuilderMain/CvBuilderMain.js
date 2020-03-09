import React from "react";
import "./cvBuilderMain.css";
import Header from "./Header/Header";
import axios from 'axios'
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
// import { nonWhiteSpace } from "html2canvas/dist/types/css/syntax/parser";
const ref = React.createRef();
const ref2 = React.createRef();


class CvBuilderMain extends React.Component {
state = ({openRequirements: false, 
          openJobDashboard: false,
          positionValue: "",
          locationValue: "",
          jobAds: []})

onPositionChange = (e) => {
   this.setState({positionValue: e.target.value})
 }         
onLocationChange = (e) => {
   this.setState({locationValue: e.target.value})
 } 
 
 requestStepStoneData = async (e) => {
   e.preventDefault()
  const response = await axios.get(
    `http://localhost:5000/api/users/data/stepstone/position/${this.state.positionValue}/location/${this.state.locationValue}`
  );
  this.setState({jobAds: response.data})

 }
displayDashboard = () => {
this.setState({openJobDashboard: !this.state.openJobDashboard})
}
openRequirements = () => {
  this.setState({openRequirements: !this.state.openRequirements})
  console.log(this.state.openRequirements)
}
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
            <div style={{display: 'flex'}}>
            <div className="alignContainer">
             {pages}
            </div>
            <div className="bookmark">
              <div onClick={() => this.displayDashboard()} className="bookmark_link">{this.state.openJobDashboard === false ? "Job Dashboard" : "Close Dashboard"}</div>
            </div>
             <div className="transitionDashboard" style={{width: `${this.state.openJobDashboard === false ? "0px" : "600px"}`, display: `${this.state.openJobDashboard === false ? "none" : "block"}`}}>
               
               <div className="MainJobDashboard">
                 <div className="JobDashboardForm">
                  <form>
                    <label htmlFor="position">Job Title</label>
                    <input onChange={(e) => this.onPositionChange(e)} value={this.state.positionValue} className="JobAdInput" type="text" id="position"></input>
                    <label htmlFor="location">Location</label>
                    <input onChange={(e) => this.onLocationChange(e)} value={this.state.locationValue} className="JobAdInput" type="text" id="location"></input>
                    <input onClick={(e) => this.requestStepStoneData(e)} className="JobDashboardButton" type="submit" value="Search" />
                  </form>
                 </div>
                 <div className="JobDashboardAds">
                  {this.state.jobAds.map(el => (
                    <div className="JobAdContainer">
                    <div className="jobAdTitle">{el.JobPosition}</div>
                    <div className="jobAdCompanyName">{el.CompanyName}</div>
                    <div style={{display: `${this.state.openRequirements === false ? "none" : "block"}`}} className="jobAdRequirements">
                    <ul>${el.JobRequirements.map(el => (<li>{el}</li>))}</ul></div>
                    <div onClick={() => this.openRequirements()} className="jobAdClickforRequirements">{this.state.openRequirements === false ? "Show Job Requirements" : "Hide Job Requirements"}</div>
                    </div>
                  ))}
                  {/* <div className="JobAdContainer">
                  <div className="jobAdTitle">Junior Web Developer</div>
                  <div className="jobAdCompanyName">Digital Career Institute</div>
                  <div style={{display: `${this.state.openRequirements === false ? "none" : "block"}`}} className="jobAdRequirements"></div>
                  <div onClick={() => this.openRequirements()} className="jobAdClickforRequirements">{this.state.openRequirements === false ? "Show Job Requirements" : "Hide Job Requirements"}</div>
                  </div>
                   */}
                  
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