import React from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import "./cvBuilderMain.css";

class cvBuilderPage extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { addProjectGroup } = context;
          return (
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
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default cvBuilderPage;