import React, { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import JumboPic from "../assets/JumboPic2.png";
import CV1 from "../assets/CV1.jpeg";
import Basic from "../assets/basic-template.jpg";
import Modern from "../assets/modern-template.jpg";
import Professional from "../assets/professional-template.jpg";
import Executive from "../assets/executive-template.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import { ThemeContext } from "../contexts/ThemeContext";

const CV_Templates = () => {
  // This function make sure we scroll the page view to top when we enter the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            {/*  Here starts Jumbotron section*/}
            <div className="JumbotronCVTemplates">
              <div className="JumboLeft">
                <h1>Be Bold and use our Job-winning CV Templates</h1>
                <p>
                  Each template is expertly designed and follows the exact
                  “resume rules” hiring managers look for. Stand out and get
                  hired faster with field-tested resume templates.
                </p>
              </div>
              <div className="JumboRight">
                <img
                  alt="jumboPic"
                  className="animated fadeIn"
                  src={JumboPic}
                />
              </div>
            </div>
            {/*  Here ends Jumbotron section*/}

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
