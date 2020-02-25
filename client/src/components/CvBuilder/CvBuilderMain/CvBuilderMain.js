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
          console.log(context.pages.length)
          if(context.pages.length > 0){
            return (
              <div className="alignContainer">
                <div
                  className="containerA40"
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
className="containerA41"
style={{ fontFamily: context.font, fontSize: context.size3 }}
>
<div className="A4ContentWrap">
  <div className="left">
    {/* <Experience /> */}
    <Education_NextPage />
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
            )
          }
          else {
          return (
            <div className="alignContainer">
              <Pdf style={{position: "absolute", height: "100px", margin: "0", padding: "0"}} targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button style={{margin: "0", marginTop: "100px"}} onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
              <div
                ref={ref}
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

              </div>
            </div>
          )}
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default CvBuilderMain;
