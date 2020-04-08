import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import CV1 from "../../assets/CV1.jpeg";
import Basic from "../../assets/basic-template.jpg";
import Modern from "../../assets/modern-template.jpg";
import Professional from "../../assets/professional-template.jpg";
import Executive from "../../assets/executive-template.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import Jumbotron from "./Jumbotron";
import { ThemeContext } from "../../contexts/ThemeContext";

const CV_Templates = () => {
  return (
    <ThemeContext.Consumer>
      {context => {
        const {
          directToBasicTemplate,
          directToModernTemplate,
          directToProfessionalTemplate,
          directToExecutiveTemplate
        } = context;
        return (
          <>
            <Navbar />
            <Jumbotron />
            <div className="CVTemplates_Container">
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img
                  alt="executiveCV_pic"
                  src={Executive}
                  onClick={directToExecutiveTemplate}
                />
              </ScrollAnimation>
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img
                  alt="modernCV_pic"
                  src={Modern}
                  onClick={directToModernTemplate}
                />
              </ScrollAnimation>
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img
                  alt="professionalCV_pic"
                  src={Professional}
                  onClick={directToProfessionalTemplate}
                />
              </ScrollAnimation>{" "}
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img alt="cv1_pic" src={CV1} />
              </ScrollAnimation>{" "}
              <ScrollAnimation
                className="cvBox"
                animateIn="fadeIn"
                animateOnce="true"
                duration="0.5s"
              >
                <img
                  alt="basicCV_pic"
                  src={Basic}
                  onClick={directToBasicTemplate}
                />
              </ScrollAnimation>
            </div>
            <Footer />
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default CV_Templates;
